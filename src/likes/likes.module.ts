import { Module } from '@nestjs/common';
import { LikesController } from './likes.controller';
import { LikesService } from './likes.service';
import { PrismaService } from 'src/prisma.service';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports : [
       JwtModule.register({
            secret : process.env.JWT_SECRET
          })
    ],
  controllers: [LikesController],
  providers: [LikesService,PrismaService]
})
export class LikesModule {}
