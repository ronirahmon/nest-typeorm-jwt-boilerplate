import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UsersModule } from 'src/users/users.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { LocalStrategy } from './local.strategy';
import { JwtStrategy } from './jwt.strategy';

@Module({
  controllers: [AuthController],
  providers: [AuthService,JwtStrategy, LocalStrategy],
  imports:[ConfigModule, UsersModule, PassportModule, JwtModule.registerAsync({
    imports:[ConfigModule],
    inject:[ConfigService],
    useFactory:async (configService: ConfigService)=>{
      return {
        secret:configService.get<string>("JWT_KEY"),
        signOptions:{expiresIn:"7d"}
      }
    }
  })],
  
})
export class AuthModule {}
