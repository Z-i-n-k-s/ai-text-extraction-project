import {
  Controller,
  Get,
  Param,
  Req,
  UseGuards,
} from '@nestjs/common';

import type { Request } from 'express';

import { AccessTokenGuard } from '../../auth/guards/access-token.guard.js';
import { CompanyRoles } from '../decorators/company-roles.decorator.js';
import { CompanyAccessGuard } from '../guards/company-access.guard.js';
import { DashboardService } from './dashboard.service.js';

interface AuthenticatedUser {
  id: string;
  email: string;
  fullName: string;
  role: string;
}

@Controller('companies/:companyId')
@UseGuards(AccessTokenGuard, CompanyAccessGuard)
export class DashboardController {
  constructor(
    private readonly dashboardService: DashboardService,
  ) {}

  @Get('dashboard')
  @CompanyRoles('MD', 'EMPLOYEE')
  getDashboard(
    @Param('companyId') companyId: string,
    @Req() request: Request & { user: AuthenticatedUser },
  ) {
    return this.dashboardService.getDashboard(
      companyId,
      request.user.id,
    );
  }

  @Get('members')
  @CompanyRoles('MD')
  findMembers(@Param('companyId') companyId: string) {
    return this.dashboardService.findMembers(companyId);
  }
}