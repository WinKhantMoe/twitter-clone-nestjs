import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class RetweetsService {
  constructor(
    private prisma : PrismaService
  ){}
}
