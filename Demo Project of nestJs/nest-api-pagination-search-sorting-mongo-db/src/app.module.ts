import { Module } from '@nestjs/common';
import { ProductModule } from './product/product.module';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/nest_pagination_search_db'),
    ProductModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
