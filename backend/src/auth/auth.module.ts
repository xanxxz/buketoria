import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';

import { AuthController } from './auth.controller';
import { AdminGuard } from './auth.guard';

@Module({
  imports: [
    JwtModule.register({}),
  ],
  controllers: [AuthController],
  providers: [AdminGuard],
  exports: [
    JwtModule,
    AdminGuard,
  ],
})
export class AuthModule {}