import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { PrismaService } from '../../database/prisma/prisma.service.js';

import { CreateCompanyDto } from './dto/create-company.dto.js';
import { UpdateCompanyDto } from './dto/update-company.dto.js';
import { UpdateCompanyStatusDto } from './dto/update-company-status.dto.js';




import { CreateMembershipDto } from './dto/create-membership.dto.js';
import { UpdateMembershipRoleDto } from './dto/update-membership-role.dto.js';
import { UpdateMembershipStatusDto } from './dto/update-membership-status.dto.js';


@Injectable()
export class CompaniesService {
  constructor(private readonly prisma: PrismaService) {}

  async addMember(
  companyId: string,
  userId: string,
  dto: CreateMembershipDto,
) {
  const company = await this.prisma.company.findUnique({
    where: { id: companyId },
    select: { id: true },
  });

  if (!company) {
    throw new NotFoundException('Company not found');
  }

  const user = await this.prisma.user.findUnique({
    where: { id: userId },
    select: {
      id: true,
      email: true,
      fullName: true,
      status: true,
    },
  });

  if (!user) {
    throw new NotFoundException('User not found');
  }

  if (user.status !== 'ACTIVE') {
    throw new ConflictException(
      'Cannot add a disabled user to a company',
    );
  }

  try {
    return await this.prisma.companyMembership.create({
      data: {
        companyId,
        userId,
        role: dto.role,
        status: dto.status ?? 'ACTIVE',
      },
      select: {
        id: true,
        companyId: true,
        userId: true,
        role: true,
        status: true,
        createdAt: true,
        updatedAt: true,
        user: {
          select: {
            email: true,
            fullName: true,
          },
        },
      },
    });
  } catch (error) {
    if (
      typeof error === 'object' &&
      error !== null &&
      'code' in error &&
      error.code === 'P2002'
    ) {
      throw new ConflictException(
        'This user is already a member of the company',
      );
    }

    throw error;
  }
}

async findMembers(companyId: string) {
  const company = await this.prisma.company.findUnique({
    where: { id: companyId },
    select: { id: true },
  });

  if (!company) {
    throw new NotFoundException('Company not found');
  }

  return this.prisma.companyMembership.findMany({
    where: { companyId },
    select: {
      id: true,
      userId: true,
      companyId: true,
      role: true,
      status: true,
      createdAt: true,
      updatedAt: true,
      user: {
        select: {
          email: true,
          fullName: true,
          status: true,
        },
      },
    },
    orderBy: {
      createdAt: 'desc',
    },
  });
}

async updateMemberRole(
  companyId: string,
  userId: string,
  dto: UpdateMembershipRoleDto,
) {
  const membership =
    await this.prisma.companyMembership.findUnique({
      where: {
        userId_companyId: {
          userId,
          companyId,
        },
      },
      select: { id: true },
    });

  if (!membership) {
    throw new NotFoundException('Company membership not found');
  }

  return this.prisma.companyMembership.update({
    where: {
      userId_companyId: {
        userId,
        companyId,
      },
    },
    data: {
      role: dto.role,
    },
    select: {
      id: true,
      userId: true,
      companyId: true,
      role: true,
      status: true,
      updatedAt: true,
    },
  });
}

async updateMemberStatus(
  companyId: string,
  userId: string,
  dto: UpdateMembershipStatusDto,
) {
  const membership =
    await this.prisma.companyMembership.findUnique({
      where: {
        userId_companyId: {
          userId,
          companyId,
        },
      },
      select: { id: true },
    });

  if (!membership) {
    throw new NotFoundException('Company membership not found');
  }

  return this.prisma.companyMembership.update({
    where: {
      userId_companyId: {
        userId,
        companyId,
      },
    },
    data: {
      status: dto.status,
    },
    select: {
      id: true,
      userId: true,
      companyId: true,
      role: true,
      status: true,
      updatedAt: true,
    },
  });
}

async removeMember(companyId: string, userId: string) {
  const membership =
    await this.prisma.companyMembership.findUnique({
      where: {
        userId_companyId: {
          userId,
          companyId,
        },
      },
      select: { id: true },
    });

  if (!membership) {
    throw new NotFoundException('Company membership not found');
  }

  await this.prisma.companyMembership.delete({
    where: {
      userId_companyId: {
        userId,
        companyId,
      },
    },
  });

  return {
    message: 'Company membership removed successfully',
  };
}

  async create(dto: CreateCompanyDto) {
    try {
      return await this.prisma.company.create({
        data: {
          name: dto.name.trim(),
          slug: dto.slug,
          registrationNumber: dto.registrationNumber?.trim() || null,
        },
        select: {
          id: true,
          name: true,
          slug: true,
          registrationNumber: true,
          status: true,
          createdAt: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      this.handleDatabaseError(error);
    }
  }

  async findAll() {
    return this.prisma.company.findMany({
      select: {
        id: true,
        name: true,
        slug: true,
        registrationNumber: true,
        status: true,
        createdAt: true,
        updatedAt: true,
        _count: {
          select: {
            memberships: true,
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async findOne(id: string) {
    const company = await this.prisma.company.findUnique({
      where: { id },
      select: {
        id: true,
        name: true,
        slug: true,
        registrationNumber: true,
        status: true,
        createdAt: true,
        updatedAt: true,
        memberships: {
          select: {
            id: true,
            role: true,
            status: true,
            createdAt: true,
            user: {
              select: {
                id: true,
                email: true,
                fullName: true,
                status: true,
              },
            },
          },
        },
      },
    });

    if (!company) {
      throw new NotFoundException('Company not found');
    }

    return company;
  }

  async update(id: string, dto: UpdateCompanyDto) {
    await this.ensureCompanyExists(id);

    try {
      return await this.prisma.company.update({
        where: { id },
        data: {
          ...(dto.name !== undefined && {
            name: dto.name.trim(),
          }),
          ...(dto.slug !== undefined && {
            slug: dto.slug,
          }),
          ...(dto.registrationNumber !== undefined && {
            registrationNumber: dto.registrationNumber.trim() || null,
          }),
        },
        select: {
          id: true,
          name: true,
          slug: true,
          registrationNumber: true,
          status: true,
          createdAt: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      this.handleDatabaseError(error);
    }
  }

  async updateStatus(id: string, dto: UpdateCompanyStatusDto) {
    await this.ensureCompanyExists(id);

    return this.prisma.company.update({
      where: { id },
      data: {
        status: dto.status,
      },
      select: {
        id: true,
        name: true,
        slug: true,
        registrationNumber: true,
        status: true,
        updatedAt: true,
      },
    });
  }

  private async ensureCompanyExists(id: string) {
    const company = await this.prisma.company.findUnique({
      where: { id },
      select: { id: true },
    });

    if (!company) {
      throw new NotFoundException('Company not found');
    }
  }

  private handleDatabaseError(error: unknown): never {
    if (
      typeof error === 'object' &&
      error !== null &&
      'code' in error &&
      error.code === 'P2002'
    ) {
      throw new ConflictException(
        'A company with that slug or registration number already exists',
      );
    }

    throw error;
  }
}