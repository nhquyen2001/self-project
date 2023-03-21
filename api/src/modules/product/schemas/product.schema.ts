import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";

export enum Category {
    TROUSER = 'Trouser',
    JEAN = 'Jean',
    SHIRT = 'Shirt',
    T_SHIRT = 'T-Shirt'
}

@Schema({
    timestamps: true
})

export class Product {
    @Prop()
    name: string;

    @Prop()
    description: string;

    @Prop()
    brand: string;

    @Prop()
    price: number;

    @Prop()
    category: Category
}

export const ProductSchema = SchemaFactory.createForClass(Product)