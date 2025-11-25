import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { PrismaService } from 'src/prisma.service';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { ConfigModule } from '@nestjs/config';


@Module({
  imports: [
    
  ],
  controllers: [UsersController],
  providers: [UsersService,PrismaService],
  exports : [UsersService]
})
export class UsersModule {}
