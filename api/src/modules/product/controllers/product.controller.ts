import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { CreateProductDto } from '../dtos/create-product.dto';
import { Product } from '../schemas/product.schema';
import { ProductService } from '../services/product.service';
import { UpdateProductDto } from './../dtos/update-product.dto';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get('/')
  async getAllProducts(): Promise<Product[]> {
    return this.productService.findAll()
  }

  @Post('/')
  async createProduct(
    @Body() payload: CreateProductDto
  ): Promise<Product> {
    return this.productService.create(payload)
  }

  @Get('/:id')
  async getProduct(
    @Param('id') id: string
  ): Promise<Product> {
    return this.productService.findById(id)
  }

  @Put('/:id')
  async updateProduct(
    @Param('id') id: string,
    @Body() payload: UpdateProductDto
  ): Promise<Product> {
    return this.productService.updateById(id, payload)
  }

  @Delete('/:id')
  async deleteProduct(
    @Param('id') id: string
  ): Promise<Product> {
    return this.productService.deleteById(id)
  }
}
