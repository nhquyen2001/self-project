import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Product } from '../schemas/product.schema';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name)
    private readonly productModel: mongoose.Model<Product>
  ) { }

  public async findAll(): Promise<Product[]> {
    const products = await this.productModel.find();
    return products;
  }

  public async create(payload: Product): Promise<Product> {
    const resp = await this.productModel.create(payload);
    return resp
  }

  public async findById(id: string): Promise<Product> {
    const resp = await this.productModel.findById(id);
    if (!resp) {
      throw new NotFoundException('Book not found.');
    }
    return resp;
  }

  public async updateById(id: string, product: Product): Promise<Product> {
    return await this.productModel.findByIdAndUpdate(id, product, {
      new: true,
      runValidators: true
    });
  }

  public async deleteById(id: string): Promise<Product> {
    return await this.productModel.findByIdAndDelete(id);
  }
}
