import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { RefreshController } from './refresh.controller.js';
import { RefreshService } from './refresh.service.js';

@Module({
  imports: [JwtModule.register({})],
  controllers: [RefreshController],
  providers: [RefreshService],
})
export class RefreshModule {}