import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { ProductsModule } from './products/products.module';
import { NotificationService } from './notification/notification.service';
import { NotificationModule } from './notification/notification.module';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [DatabaseModule, ProductsModule, NotificationModule, HttpModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
