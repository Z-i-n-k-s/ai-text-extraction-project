import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { LoginController } from './login.controller.js';
import { LoginService } from './login.service.js';

@Module({
  imports: [JwtModule.register({})],
  controllers: [LoginController],
  providers: [LoginService],
})
export class LoginModule {}