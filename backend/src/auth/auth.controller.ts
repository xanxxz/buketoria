import {
  Body,
  Controller,
  Post,
  UnauthorizedException,
} from '@nestjs/common';

import { JwtService } from '@nestjs/jwt';

@Controller('auth')
export class AuthController {
  constructor(private jwtService: JwtService) {}

  @Post('login')
  login(@Body() body: { password: string }) {
    if (body.password !== process.env.ADMIN_PASSWORD) {
      throw new UnauthorizedException();
    }

    const token = this.jwtService.sign(
      { role: 'admin' },
      {
        secret: process.env.JWT_SECRET,
        expiresIn: '7d',
      },
    );

    return { token };
  }
}