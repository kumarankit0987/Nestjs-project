import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NextFunction, Request, Response } from 'express';



// Implement Global Based Middleware(It's Will be Function Based )
function globalMiddleWareOne(req : Request, res : Response, next : NextFunction){
  console.log("This is the global Middleware number1");
  next();
}

function globalMiddleWareTwo(req : Request, res : Response, next : NextFunction) {
  console.log('This is global middleWare number 2');
  next();
}
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //Register Global MiddleWare
  app.use(globalMiddleWareOne);
  app.use(globalMiddleWareTwo);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();

