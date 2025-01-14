import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NextFunction, Request, Response } from 'express';

function globalMiddleWare(req : Request, res : Response, next : NextFunction){
  console.log("this is the middleware number 1");
  next();
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(globalMiddleWare);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
