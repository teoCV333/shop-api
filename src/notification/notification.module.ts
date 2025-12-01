import { Module } from '@nestjs/common';
import { NotificationController } from './notification.controller';
import { NotificationService } from './notification.service';
import { HttpModule } from '@nestjs/axios';

@Module({
    controllers: [NotificationController],
    providers: [NotificationService],
    imports: [
        HttpModule
    ],
})
export class NotificationModule {}  
