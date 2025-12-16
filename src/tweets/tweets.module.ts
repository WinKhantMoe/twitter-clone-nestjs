import { Module } from '@nestjs/common';
import { TweetsController } from './tweets.controller';
import { TweetsService } from './tweets.service';
import { PrismaService } from 'src/prisma.service';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports : [
       JwtModule.register({
            secret : process.env.JWT_SECRET
          })
    ],
  controllers: [TweetsController],
  providers: [TweetsService,PrismaService]
})
export class TweetsModule {}
