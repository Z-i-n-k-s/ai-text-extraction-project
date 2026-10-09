import { Module } from '@nestjs/common';
import { RegisterModule } from './register/register.module.js';
import { LoginModule } from './login/login.module.js';
import { RefreshModule } from './refresh/refresh.module.js';
import { MeModule } from './me/me.module.js';
import { LogoutModule } from './logout/logout.module.js';

@Module({
  imports: [
    RegisterModule,
    LoginModule,
    RefreshModule,
    MeModule,
    LogoutModule,
  ],
  exports: [
    RegisterModule,
    LoginModule,
    RefreshModule,
    MeModule,
    LogoutModule,
  ],
})
export class AuthModule {}