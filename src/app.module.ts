import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookController } from './book.controller';
import { Book } from './book.model';
import { BookService } from './book.service';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'password',
      database: 'bookstore',
      models: [Book],
      autoLoadModels: true,
      synchronize: true,
    }),
    SequelizeModule.forFeature([Book]),
  ],
  controllers: [AppController, BookController],
  providers: [AppService, BookService],
  exports: [],
})
export class AppModule {}
