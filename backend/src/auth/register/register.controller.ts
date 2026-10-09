import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { RegisterDto } from './dto/register.dto.js';
import { RegisterService } from './register.service.js';

@Controller('auth/register')
export class RegisterController {
  constructor(
    private readonly registerService: RegisterService,
  ) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  register(@Body() dto: RegisterDto) {
    return this.registerService.register(dto);
  }
}