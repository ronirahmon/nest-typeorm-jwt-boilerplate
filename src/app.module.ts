import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { CacheInterceptor, CacheModule } from '@nestjs/cache-manager';
import { APP_GUARD, APP_INTERCEPTOR } from '@nestjs/core';
import { ThrottlerModule } from '@nestjs/throttler';
import { UsersModule } from './users/users.module';
import { JwtAuthGuard } from './auth/auth.guard';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/entities/user.entity';

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal:true, cache:true}),
    TypeOrmModule.forRootAsync({
      imports:[ConfigModule],
      useFactory:(config:ConfigService)=>({
        type:"mssql",
        host: config.get("DB_HOST"),
        port: +config.get("DB_PORT"),
        username:config.get("DB_USERNAME"),
        password:config.get("DB_PASSWORD"),
        database:config.get("DB_DATABASE"),
        synchronize:false,
        autoLoadEntities:true,
        extra:{
          trustServerCertificate: true,
        }
      }),
      inject:[ConfigService],
      
    }),
    AuthModule, 
    UsersModule,
    CacheModule.register({ttl:5000, isGlobal:true}),
    ThrottlerModule.forRoot({
      throttlers: [
        {
          ttl: 60000,
          limit: 20,
        },
      ],
    }),
  ],
  providers:[
    {provide:APP_INTERCEPTOR, useClass:CacheInterceptor},
    {
      provide:APP_GUARD,
      useClass:JwtAuthGuard
    }
  ]
})
export class AppModule {}
