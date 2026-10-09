import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import type { Request } from 'express';

import { PrismaService } from '../../database/prisma/prisma.service.js';
import {
  COMPANY_ROLES_KEY,
  type CompanyRole,
} from '../decorators/company-roles.decorator.js';

interface AuthenticatedUser {
  id: string;
  email: string;
  fullName: string;
  role: string;
}

interface CompanyMembershipAccess {
  id: string;
  userId: string;
  companyId: string;
  role: string;
  status: string;
  company: {
    id: string;
    name: string;
    slug: string;
    status: string;
  };
}

type CompanyRequest = Request & {
  user?: AuthenticatedUser;
  companyMembership?: CompanyMembershipAccess;
};

@Injectable()
export class CompanyAccessGuard implements CanActivate {
  constructor(
    private readonly prisma: PrismaService,
    private readonly reflector: Reflector,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context
      .switchToHttp()
      .getRequest<CompanyRequest>();

    const user = request.user;
    const companyId = request.params['companyId'];

    if (!user) {
      throw new UnauthorizedException('Authentication required');
    }

    if (typeof companyId !== 'string' || !companyId) {
      throw new ForbiddenException('Company ID is required');
    }

    const allowedRoles = this.reflector.getAllAndOverride<
      CompanyRole[] | undefined
    >(COMPANY_ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    const membership = await this.prisma.companyMembership.findUnique({
      where: {
        userId_companyId: {
          userId: user.id,
          companyId,
        },
      },
      select: {
        id: true,
        userId: true,
        companyId: true,
        role: true,
        status: true,
        company: {
          select: {
            id: true,
            name: true,
            slug: true,
            status: true,
          },
        },
      },
    });

    if (
      !membership ||
      membership.status !== 'ACTIVE' ||
      membership.company.status !== 'ACTIVE'
    ) {
      throw new ForbiddenException(
        'You do not have active access to this company',
      );
    }

    if (
      allowedRoles &&
      !allowedRoles.includes(membership.role as CompanyRole)
    ) {
      throw new ForbiddenException(
        'Your company role does not permit this action',
      );
    }

    request.companyMembership = membership;

    return true;
  }
}