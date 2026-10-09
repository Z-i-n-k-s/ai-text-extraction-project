import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';

import { PrismaModule } from '../database/prisma/prisma.module.js';
import { AccessTokenGuard } from '../auth/guards/access-token.guard.js';
import { AccessTokenStrategy } from '../auth/strategies/access-token.strategy.js';

import { CompanyAccessGuard } from './guards/company-access.guard.js';
import { DashboardController } from './dashboard/dashboard.controller.js';
import { DashboardService } from './dashboard/dashboard.service.js';

@Module({
  imports: [
    PrismaModule,
    PassportModule,
  ],
  controllers: [
    DashboardController,
  ],
  providers: [
    DashboardService,
    AccessTokenGuard,
    AccessTokenStrategy,
    CompanyAccessGuard,
  ],
})
export class CompaniesModule {}