import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Book } from './book.model';

@Injectable()
export class BookService {

  constructor(
    @InjectModel(Book),
  ) {}

  getAll(): Book[] {
    return this.books;
  }

  getOne(id: number): Book {
    return this.books[0];
  }

  create(product: Book): void {
    this.books.push(product);
  }

  update(product: Book): Book {
    return product;
  }

  delete(id: number): void {
    this.books.pop();
  }
}
