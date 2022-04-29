import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DepartmentsModule } from './departments/departments.module';
import { ProductsModule } from './products/products.module';

@Module({
    imports: [DepartmentsModule, ProductsModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
