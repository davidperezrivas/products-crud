import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { DepartmentsModule } from './departments/departments.module';
import { ProductsModule } from './products/products.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

import config from './config';

@Module({
    imports: [ConfigModule.forRoot(), MongooseModule.forRoot(config.DATABASE_URL), DepartmentsModule, ProductsModule],
    controllers: [AppController],
    providers: [],
})
export class AppModule {}
