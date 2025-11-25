import { Module } from '@nestjs/common';
import { RetweetsController } from './retweets.controller';
import { RetweetsService } from './retweets.service';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [RetweetsController],
  providers: [RetweetsService,PrismaService]
})
export class RetweetsModule {}
