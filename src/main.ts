import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as express from 'express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe({
    whitelist : true,
    transform : true
  }));
  app.use(express.json({ limit: '100mb' })); 
  app.use(express.urlencoded({ limit: '100mb', extended: true })); 
  await app.listen(process.env.PORT ?? 3001);
}
bootstrap();
