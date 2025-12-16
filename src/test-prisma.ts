// test-prisma.ts
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
prisma.users.findMany();
