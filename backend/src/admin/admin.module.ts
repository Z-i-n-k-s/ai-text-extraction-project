import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { CompaniesController } from './companies/companies.controller.js';
import { CompaniesService } from './companies/companies.service.js';

import { PrismaModule } from '../database/prisma/prisma.module.js';
import { AccessTokenGuard } from '../auth/guards/access-token.guard.js';
import { RolesGuard } from '../auth/guards/roles.guard.js';
import { AccessTokenStrategy } from '../auth/strategies/access-token.strategy.js';

import { UsersController } from './users/users.controller.js';
import { UsersService } from './users/users.service.js';

@Module({
  imports: [
    PrismaModule,
    PassportModule,
  ],
  controllers: [
    UsersController,
    CompaniesController,
  ],
  providers: [
    UsersService,
    CompaniesService,
    AccessTokenGuard,
    RolesGuard,
    AccessTokenStrategy,
  ],
})
export class AdminModule {}