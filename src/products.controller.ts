import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get()
  getAll(): string {
    return 'get all products';
  }

  @Get(':id')
  getOne(@Param() params): string {
    return `get one product by id: ${params.id}`;
  }

  @Post()
  create(@Body() product): string {
    return 'Created product';
  }

  @Put(':id')
  update(@Body() updateProductBody): string {
    return 'Updated product';
  }

  @Delete(':id')
  delete(@Param() params): string {
    return `delete product with id ${params.id}`;
  }
}
