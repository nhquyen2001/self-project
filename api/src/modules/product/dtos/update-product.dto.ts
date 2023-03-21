import { Category } from "../schemas/product.schema"

export class UpdateProductDto {
  readonly name: string
  readonly description: string
  readonly brand: string
  readonly price: number
  readonly category: Category
}