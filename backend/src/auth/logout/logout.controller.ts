import {
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import type { Request } from 'express';
import { AccessTokenGuard } from '../guards/access-token.guard.js';
import { LogoutService } from './logout.service.js';

interface AuthenticatedUser {
  id: string;
  sessionId: string;
  email: string;
  fullName: string;
  role: string;
}

@Controller('auth/logout')
@UseGuards(AccessTokenGuard)
export class LogoutController {
  constructor(
    private readonly logoutService: LogoutService,
  ) {}

  @Post()
  @HttpCode(HttpStatus.OK)
  logout(
    @Req()
    request: Request & { user: AuthenticatedUser },
  ) {
    return this.logoutService.logout(
      request.user.sessionId,
    );
  }
}