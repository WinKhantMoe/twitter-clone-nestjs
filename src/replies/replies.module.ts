import { Module } from '@nestjs/common';
import { RepliesController } from './replies.controller';
import { RepliesService } from './replies.service';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [RepliesController],
  providers: [RepliesService,PrismaService]
})
export class RepliesModule {}
