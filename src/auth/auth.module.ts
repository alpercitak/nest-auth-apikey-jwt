import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from '../data/users/users.module';
import { AuthService } from './auth.service';
import { ApiKeyStrategy } from './strategy/apikey.strategy';
import { JwtStrategy } from './strategy/jwt.strategy';
import { LocalStrategy } from './strategy/local.strategy';

@Module({
  imports: [
    PassportModule,
    UsersModule,
    JwtModule.register({
      secret: 'jwt-secret',
      signOptions: { expiresIn: '1d' },
    }),
  ],
  providers: [AuthService, ApiKeyStrategy, LocalStrategy, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}
