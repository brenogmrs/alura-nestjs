import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookController } from './book.controller';
import { Book } from './book.model';
import { BookService } from './book.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
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
