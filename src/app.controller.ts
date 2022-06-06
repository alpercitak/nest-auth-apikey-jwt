import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { ApiKeyAuthGuard } from './auth/guard/apikey-auth.guard';
import { JwtAuthGuard } from './auth/guard/jwt-auth.guard';
import { LocalAuthGuard } from './auth/guard/local-auth.guard';

@UseGuards(ApiKeyAuthGuard)
@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private authService: AuthService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('jwt')
  async jwt(@Request() req) {
    return req.user;
  }
}
