import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Mode } from 'fs';
import { Model } from 'mongoose';
import { Category } from 'src/schema/category.schema';

@Injectable()
export class CategoriesService {
    constructor(@InjectModel(Category.name) private categoryModel: Model<Category>){

    }

    async create(data: any): Promise<Category> {
        return this.categoryModel.create(data);
      }

    async findAll(): Promise<Category[]> {
        return this.categoryModel.find().exec();
      }
    
      async findOne(id: string): Promise<Category> {
        return this.categoryModel.findById(id).exec();
      }
    
      async update(id: string, data: any): Promise<Category> {
        return this.categoryModel.findByIdAndUpdate(id, data, { new: true }).exec();
      }
    
      async delete(id: string): Promise<Category> {
        return this.categoryModel.findByIdAndDelete(id).exec();
      }
}
