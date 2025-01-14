import { Module } from '@nestjs/common';
import { BookController } from './app.controller';
import { BookService } from './app.service';

@Module({
  imports: [],
  controllers: [BookController],
  providers: [BookService],
  exports: []
})
export class RootModule {
  constructor() {
    console.log('App Module');
  }
}
