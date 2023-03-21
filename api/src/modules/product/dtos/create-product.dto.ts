import { IsNotEmpty, IsNumber, IsString } from "class-validator"
import { Category } from "../schemas/product.schema"

export class CreateProductDto {
  @IsNotEmpty()
  @IsString()
  name: string

  @IsNotEmpty()
  @IsString()
  description: string

  @IsNotEmpty()
  @IsString()
  brand: string

  @IsNotEmpty()
  @IsNumber()
  price: number

  @IsNotEmpty()
  readonly category: Category
}