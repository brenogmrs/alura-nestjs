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
  async getAll(): Promise<Book[]> {
    return this.bookService.getAll();
  }

  @Get(':id')
  async getOne(@Param() params): Promise<Book> {
    return this.bookService.getOne(params.id);
  }

  @Post()
  async create(@Body() book: Book) {
    book.id = Date.now();
    this.bookService.create(book);
  }

  @Put(':id')
  async update(@Body() updateBookBody: Book): Promise<[number, Book[]]> {
    return this.bookService.update(updateBookBody);
  }

  @Delete(':id')
  async delete(@Param() params): Promise<void> {
    this.bookService.delete(params.id);
  }
}
