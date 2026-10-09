import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Ip,
  Post,
  Req,
} from '@nestjs/common';
import type { Request } from 'express';
import { LoginDto } from './dto/login.dto.js';
import { LoginService } from './login.service.js';

@Controller('auth/login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Post()
  @HttpCode(HttpStatus.OK)
  login(
    @Body() dto: LoginDto,
    @Req() request: Request,
    @Ip() ipAddress: string,
  ) {
    return this.loginService.login(
      dto,
      request.headers['user-agent'],
      ipAddress,
    );
  }
}