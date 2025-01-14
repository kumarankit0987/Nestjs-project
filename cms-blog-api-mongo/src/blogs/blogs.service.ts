import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Blog } from 'src/schema/blog.schema';

@Injectable()
export class BlogsService {
    constructor(@InjectModel(Blog.name) private blogModel: Model<Blog>) {}

    async create(data: any): Promise<Blog> {
      return this.blogModel.create(data);
    }
  
    async findAll(): Promise<Blog[]> {
      return this.blogModel.find().populate('category').exec();
    }
  
    async findOne(id: string): Promise<Blog> {
      return this.blogModel.findById(id).populate('category').exec();
    }
  
    async update(id: string, data: any): Promise<Blog> {
      return this.blogModel.findByIdAndUpdate(id, data, { new: true }).exec();
    }
  
    async delete(id: string): Promise<Blog> {
      return this.blogModel.findByIdAndDelete(id).exec();
    }
}
