import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Product } from '../schemas/product.schema';

import { Query } from 'express-serve-static-core';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name)
    private readonly productModel: mongoose.Model<Product>
  ) { }

  public async findAll(query: Query): Promise<Product[]> {
    const limit = Number(query.limit) || 10;
    const currentPage = Number(query.page) || 1;
    const skip = limit * (currentPage - 1);

    const keyword = query.keyword ? {
      name: {
        $regex: query.keyword,
        $options: 'i'
      }
    } : {}

    const products = await this.productModel
      .find({ ...keyword })
      .limit(limit)
      .skip(skip);

    return products;
  }

  public async create(payload: Product): Promise<Product> {
    const resp = await this.productModel.create(payload);
    return resp
  }

  public async findById(id: string): Promise<Product> {
    const isValidId = mongoose.isValidObjectId(id);
    if (!isValidId) {
      throw new BadRequestException('Please enter correct id');
    }
    const resp = await this.productModel.findById(id);
    if (!resp) {
      throw new NotFoundException('Product not found');
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
