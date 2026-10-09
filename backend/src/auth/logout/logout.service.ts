import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../database/prisma/prisma.service.js';

@Injectable()
export class LogoutService {
  constructor(private readonly prisma: PrismaService) {}

  async logout(sessionId: string) {
    const result = await this.prisma.authSession.updateMany({
      where: {
        id: sessionId,
        revokedAt: null,
      },
      data: {
        revokedAt: new Date(),
      },
    });

    return {
      message:
        result.count === 1
          ? 'Logout successful'
          : 'Session already revoked',
    };
  }
}