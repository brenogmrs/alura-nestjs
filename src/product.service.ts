import { Injectable } from '@nestjs/common';
import { Product } from './product.model';

@Injectable()
export class ProductService {
  products: Product[] = [
    new Product('LIV001', 'Livro TDD e BDD na prática', 29.9),
    new Product('LIV002', 'Livro iniciando com flutter', 39.9),
    new Product('LIV003', 'Livro IA as a service', 29.9),
  ];

  getAll(): Product[] {
    return this.products;
  }

  getOne(id: number): Product {
    return this.products[0];
  }

  create(product: Product): void {
    this.products.push(product);
  }

  update(product: Product): Product {
    return product;
  }

  delete(id: number): void {
    this.products.pop();
  }
}
