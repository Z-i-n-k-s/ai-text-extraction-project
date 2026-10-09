import { Injectable, NotFoundException } from '@nestjs/common';

import { PrismaService } from '../../database/prisma/prisma.service.js';

@Injectable()
export class DashboardService {
  constructor(private readonly prisma: PrismaService) {}

  async getDashboard(companyId: string, userId: string) {
    const membership = await this.prisma.companyMembership.findUnique({
      where: {
        userId_companyId: {
          userId,
          companyId,
        },
      },
      select: {
        role: true,
        status: true,
        company: {
          select: {
            id: true,
            name: true,
            slug: true,
            status: true,
            createdAt: true,
          },
        },
      },
    });

    if (!membership) {
      throw new NotFoundException('Company membership not found');
    }

    return {
      company: membership.company,
      membership: {
        role: membership.role,
        status: membership.status,
      },
    };
  }

  async findMembers(companyId: string) {
    return this.prisma.companyMembership.findMany({
      where: {
        companyId,
        status: 'ACTIVE',
      },
      select: {
        userId: true,
        role: true,
        status: true,
        createdAt: true,
        user: {
          select: {
            email: true,
            fullName: true,
            status: true,
          },
        },
      },
      orderBy: {
        createdAt: 'asc',
      },
    });
  }
}