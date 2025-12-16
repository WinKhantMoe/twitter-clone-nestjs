import { Module } from '@nestjs/common';
import { DraftsController } from './drafts.controller';
import { DraftsService } from './drafts.service';
import { PrismaService } from 'src/prisma.service';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports : [
     JwtModule.register({
          secret : process.env.JWT_SECRET
        })
  ],
  controllers: [DraftsController],
  providers: [DraftsService,PrismaService]
})
export class DraftsModule {}
