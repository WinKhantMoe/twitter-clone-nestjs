import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class RepliesService {
  constructor(
    private prisma : PrismaService
  ) {}
}
