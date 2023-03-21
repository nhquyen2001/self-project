import { Category } from "../schemas/product.schema"

export class CreateProductDto {
  readonly name: string
  readonly description: string
  readonly brand: string
  readonly price: number
  readonly category: Category
}