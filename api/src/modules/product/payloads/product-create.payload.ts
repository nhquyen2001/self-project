import {
  IsString, IsOptional, IsBoolean, IsNumber, IsDateString, IsNotEmpty
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ProductCreatePayload {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  description: string

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  brand: string

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  price: string

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  category: string
}