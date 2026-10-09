import {
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { createHash, randomBytes } from 'node:crypto';
import { PrismaService } from '../../database/prisma/prisma.service.js';
import { RefreshDto } from './dto/refresh.dto.js';

@Injectable()
export class RefreshService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}

  async refresh(
    dto: RefreshDto,
    userAgent?: string,
    ipAddress?: string,
  ) {
    const oldHash = this.hashToken(dto.refreshToken);
    const now = new Date();

    const session = await this.prisma.authSession.findUnique({
      where: { refreshTokenHash: oldHash },
      include: { user: true },
    });

    if (
      !session ||
      session.revokedAt ||
      session.expiresAt <= now
    ) {
      throw new UnauthorizedException(
        'Session expired. Please log in again.',
      );
    }

    if (session.user.status !== 'ACTIVE') {
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
    const newRefreshToken = randomBytes(32).toString('hex');
    const newRefreshHash = this.hashToken(newRefreshToken);

    const result = await this.prisma.$transaction(async (tx) => {
      const revoked = await tx.authSession.updateMany({
        where: {
          id: session.id,
          refreshTokenHash: oldHash,
          revokedAt: null,
          expiresAt: { gt: new Date() },
        },
        data: {
          revokedAt: new Date(),
        },
      });

      if (revoked.count !== 1) {
        throw new UnauthorizedException(
          'Session expired or already used. Please log in again.',
        );
      }

      const newSession = await tx.authSession.create({
        data: {
          userId: session.userId,
          refreshTokenHash: newRefreshHash,
          expiresAt: new Date(Date.now() + refreshExpiryMs),
          userAgent,
          ipAddress,
        },
      });

      const accessToken = await this.jwtService.signAsync(
        {
          sub: session.user.id,
          sid: newSession.id,
          email: session.user.email,
          role: session.user.role,
        },
        {
          secret: accessSecret,
          expiresIn: '15m',
        },
      );

      return { accessToken };
    });

    return {
      message: 'Session renewed',
      accessToken: result.accessToken,
      refreshToken: newRefreshToken,
      tokenType: 'Bearer',
      expiresIn: 900,
    };
  }

  private hashToken(token: string): string {
    return createHash('sha256').update(token).digest('hex');
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