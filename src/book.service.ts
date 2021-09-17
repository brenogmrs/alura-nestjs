import { Injectable } from '@nestjs/common';
import { Book } from './book.model';

@Injectable()
export class BookService {
  books: Book[] = [
    new Book('LIV001', 'Livro TDD e BDD na prática', 29.9),
    new Book('LIV002', 'Livro iniciando com flutter', 39.9),
    new Book('LIV003', 'Livro IA as a service', 29.9),
  ];

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
