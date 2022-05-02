import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { DepartmentsModule } from './departments/departments.module';
import { ProductsModule } from './products/products.module';
import { MongooseModule } from '@nestjs/mongoose';

const URL_DB = process.env.NODE_ENV == 'test' ? process.env.DB_URL_TEST : process.env.DB_URL;

@Module({
    imports: [MongooseModule.forRoot(URL_DB), DepartmentsModule, ProductsModule],
    controllers: [AppController],
    providers: [],
})
export class AppModule {}
