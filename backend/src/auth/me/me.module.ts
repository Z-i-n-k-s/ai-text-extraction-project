import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { MeController } from './me.controller.js';
import { AccessTokenGuard } from '../guards/access-token.guard.js';
import { AccessTokenStrategy } from '../strategies/access-token.strategy.js';
import { RolesGuard } from '../guards/roles.guard.js';

@Module({
  imports: [PassportModule],
  controllers: [MeController],
  providers: [
    AccessTokenGuard,
    AccessTokenStrategy,
    RolesGuard,
  ],
})
export class MeModule {}