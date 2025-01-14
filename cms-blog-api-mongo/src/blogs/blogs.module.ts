import { Module } from '@nestjs/common';
import { BlogsService } from './blogs.service';
import { BlogsController } from './blogs.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Blog, BlogSchema } from 'src/schema/blog.schema';

@Module({
  imports : [MongooseModule.forFeature([{ name: Blog.name, schema: BlogSchema }])],
  providers: [BlogsService],
  controllers: [BlogsController]
})
export class BlogsModule {}
