import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { AccessTokenGuard } from '../guards/access-token.guard.js';
import { AccessTokenStrategy } from '../strategies/access-token.strategy.js';
import { LogoutController } from './logout.controller.js';
import { LogoutService } from './logout.service.js';

@Module({
  imports: [PassportModule],
  controllers: [LogoutController],
  providers: [
    LogoutService,
    AccessTokenGuard,
    AccessTokenStrategy,
  ],
})
export class LogoutModule {}