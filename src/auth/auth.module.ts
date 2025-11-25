import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService,ConfigModule } from '@nestjs/config';
import { JwtStrategy } from './strategies/jwt.strategy';
import { UsersService } from 'src/users/users.service';
import { UsersModule } from 'src/users/users.module';
import { PrismaService } from 'src/prisma.service';

@Module({
  imports: [
    PassportModule,
    UsersModule,
    JwtModule.register({
      secret : process.env.JWT_SECRET
    })
  ],
  providers: [AuthService,JwtStrategy,PrismaService],
  controllers: [AuthController]
})
export class AuthModule {}
