import {
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import * as argon2 from 'argon2';
import { createHash, randomBytes } from 'node:crypto';
import { PrismaService } from '../../database/prisma/prisma.service.js';
import { LoginDto } from './dto/login.dto.js';

@Injectable()
export class LoginService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}

  async login(
    dto: LoginDto,
    userAgent?: string,
    ipAddress?: string,
  ) {
    const email = dto.email.trim().toLowerCase();

    const user = await this.prisma.user.findUnique({
      where: { email },
    });

    if (
      !user ||
      !(await argon2.verify(user.passwordHash, dto.password))
    ) {
      throw new UnauthorizedException('Invalid email or password');
    }

    if (user.status !== 'ACTIVE') {
      throw new UnauthorizedException('Account is not active');
    }

    const accessSecret = this.configService.get<string>(
      'JWT_ACCESS_SECRET',
    );

    if (!accessSecret) {
      throw new Error('JWT_ACCESS_SECRET is not configured');
    }

    const refreshExpiry =
      this.configService.get<string>('JWT_REFRESH_EXPIRES_IN') ?? '7d';

    const refreshExpiryMs = this.parseDuration(refreshExpiry);
    const refreshToken = randomBytes(32).toString('hex');

    const refreshTokenHash = createHash('sha256')
      .update(refreshToken)
      .digest('hex');

    const session = await this.prisma.authSession.create({
      data: {
        userId: user.id,
        refreshTokenHash,
        expiresAt: new Date(Date.now() + refreshExpiryMs),
        userAgent,
        ipAddress,
      },
    });

    const accessToken = await this.jwtService.signAsync(
      {
        sub: user.id,
        sid: session.id,
        email: user.email,
        role: user.role,
      },
      {
        secret: accessSecret,
        expiresIn: '15m',
      },
    );

    return {
      message: 'Login successful',
      accessToken,
      refreshToken,
      tokenType: 'Bearer',
      expiresIn: 900,
      user: {
        id: user.id,
        email: user.email,
        fullName: user.fullName,
        role: user.role,
        status: user.status,
      },
    };
  }

  private parseDuration(value: string): number {
    const match = /^(\d+)(m|h|d)$/.exec(value);

    if (!match) {
      throw new Error(
        'JWT_REFRESH_EXPIRES_IN must use a format such as 15m, 12h, or 7d',
      );
    }

    const amount = Number(match[1]);
    const unit = match[2];

    const multiplier =
      unit === 'm'
        ? 60_000
        : unit === 'h'
          ? 3_600_000
          : 86_400_000;

    return amount * multiplier;
  }
}