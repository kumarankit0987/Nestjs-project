import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {DocumentBuilder, SwaggerModule} from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //Setup Swagger Configuration
  const config = new DocumentBuilder()
    .setTitle('Blog and category CRUD API')
    .setDescription('This is a crud operation')
    .setVersion('1.0')
    .addBearerAuth() // Add authentication if needed
    .build();
 //Swagger Configuration------------------------------------------ ends here
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);






  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
