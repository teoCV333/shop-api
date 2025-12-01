import { Body, Controller, Get, Post } from '@nestjs/common';
import { NotificationService } from './notification.service';

@Controller('notification')
export class NotificationController {
  constructor(private notiService: NotificationService) {}

  @Post('splash')
  async splash(@Body() body: { text: string; messageId?: number }) {
    const messageId = await this.notiService.sendOrEditMessage({
      text: body.text,
      messageId: body.messageId,
    });

    return { messageId }; // 👈 esto es lo que el frontend guardará en localStorage
  }
}
