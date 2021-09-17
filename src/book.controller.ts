import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Book } from './book.model';
import { BookService } from './book.service';
@Controller('book')
export class BookController {
  constructor(private bookService: BookService) {}

  @Get()
  getAll(): Book[] {
    return this.bookService.getAll();
  }

  @Get(':id')
  getOne(@Param() params): Book {
    return this.bookService.getOne(params.id);
  }

  @Post()
  create(@Body() book: Book) {
    book.id = Date.now();
    this.bookService.create(book);
  }

  @Put(':id')
  update(@Body() updateBookBody: Book): Book {
    return this.bookService.update(updateBookBody);
  }

  @Delete(':id')
  delete(@Param() params): void {
    this.bookService.delete(params.id);
  }
}
