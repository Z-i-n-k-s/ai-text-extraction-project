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
import { RefreshDto } from './dto/refresh.dto.js';
import { RefreshService } from './refresh.service.js';

@Controller('auth/refresh')
export class RefreshController {
  constructor(
    private readonly refreshService: RefreshService,
  ) {}

  @Post()
  @HttpCode(HttpStatus.OK)
  refresh(
    @Body() dto: RefreshDto,
    @Req() request: Request,
    @Ip() ipAddress: string,
  ) {
    return this.refreshService.refresh(
      dto,
      request.headers['user-agent'],
      ipAddress,
    );
  }
}