import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Product, ProductDocument } from './product.entity';
import { Model } from 'mongoose';

@Injectable()
export class ProductService {
    constructor(@InjectModel(Product.name) private readonly productModel : Model<ProductDocument>){

    }
    async find(options) {
        return this.productModel.find(options).exec();
    }
}
