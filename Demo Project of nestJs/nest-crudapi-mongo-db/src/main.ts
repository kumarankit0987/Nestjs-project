import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { FastifyAdapter } from '@nestjs/platform-fastify';
import helmet from 'helmet';
import fastify from 'fastify';

async function bootstrap() {
  // In Addtion Configure Fastify 
  const app = await NestFactory.create(AppModule, new FastifyAdapter());

  //Configure Swagger
  const config = new DocumentBuilder() // 
    .setTitle('Swagger Test') // Title of your API
    .setDescription('This is the test of swagger api') // Description
    .setVersion('1.0') // API version
    .addBearerAuth({
      type : "http",
      scheme : "bearer",
      bearerFormat : "JWT",
      name : "JWT",
      description : "Enter JWT Token",
      in : "header"
    }, "JWT-auth").build()


    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document); // 'api' is the URL path to access Swagger UI

        // Use helmet to secure HTTP headers
        app.use(helmet());
        

    await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
