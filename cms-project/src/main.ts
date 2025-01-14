import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { FastifyAdapter } from '@nestjs/platform-fastify';
import {fastify} from 'fastify';
import helmet from 'helmet';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {

  //Configure  fastify
  const app = await NestFactory.create(AppModule, new FastifyAdapter());

  //Configure helmet
  app.use(helmet());

  //Setup Swagger Configuration
  const config = new DocumentBuilder()
    .setTitle('CMS blog and blog-category CRUD API')
    .setDescription('Blog and Blog-category API')
    .setVersion('1.0')
    .addTag('blog')  // Optional: Define a tag for your routes
    .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
