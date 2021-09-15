import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Product } from './product.model';
@Controller('products')
export class ProductsController {
  products: Product[] = [
    new Product('LIV001', 'Livro TDD e BDD na prática', 29.9),
    new Product('LIV002', 'Livro iniciando com flutter', 39.9),
    new Product('LIV003', 'Livro IA as a service', 29.9),
  ];

  @Get()
  getAll(): Product[] {
    return this.products;
  }

  @Get(':id')
  getOne(@Param() params): Product {
    return this.products[0];
  }

  @Post()
  create(@Body() product: Product): Product {
    product.id = Date.now();
    this.products.push(product);
    return product;
  }

  @Put(':id')
  update(@Body() updateProductBody: Product): Product {
    return updateProductBody;
  }

  @Delete(':id')
  delete(@Param() params): void {
    this.products.pop();
  }
}
