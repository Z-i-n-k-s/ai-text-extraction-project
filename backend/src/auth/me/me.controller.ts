import {
  Controller,
  Get,
  Req,
  UseGuards,
} from '@nestjs/common';
import type { Request } from 'express';
import { AccessTokenGuard } from '../guards/access-token.guard.js';
import { RolesGuard } from '../guards/roles.guard.js';
import { Roles } from '../decorators/roles.decorator.js';

interface AuthenticatedUser {
  id: string;
  email: string;
  fullName: string;
  role: string;
}

@Controller('auth/me')
@UseGuards(AccessTokenGuard)
export class MeController {
  @Get()
  getProfile(
    @Req()
    request: Request & { user: AuthenticatedUser },
  ) {
    return {
      user: request.user,
    };
  }

  @Get('admin-check')
  @UseGuards(RolesGuard)
  @Roles('ADMIN')
  checkAdminAccess(
    @Req()
    request: Request & { user: AuthenticatedUser },
  ) {
    return {
      message: 'Admin access granted',
      userId: request.user.id,
      role: request.user.role,
    };
  }
}