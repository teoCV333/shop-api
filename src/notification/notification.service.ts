import { Injectable, Logger } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { NotificationData } from 'src/models/notificationData';

@Injectable()
export class NotificationService {
  private readonly logger = new Logger(NotificationService.name);
  private notificationData: NotificationData = {
    step: 1
  };
  private readonly botToken: string;
  private readonly defaultChatId: string;
  private readonly apiUrl: string;

  constructor(
    private httpService: HttpService,
  ) {
    this.botToken = process.env.TELEGRAM_BOT_TOKEN || '';
    this.defaultChatId = process.env.TELEGRAM_CHAT_ID || '';
    this.apiUrl = `https://api.telegram.org/bot${this.botToken}`;
  }

  async initProcess() {
    try {
      const url = `${this.apiUrl}/sendMessage`;
      const payload = {
        chat_id: process.env.TELEGRAM_CHAT_ID,
        text: 'nuevo ingreso',
        parse_mode: 'HTML', // opcional (puede ser MarkdownV2)
      };

      const response$ = this.httpService.post(url, payload)
      const { data } = await firstValueFrom(response$);

      if (!data.ok) {
        this.logger.error(
          `Error al enviar mensaje a Telegram: ${JSON.stringify(data)}`,
        );
      }
    } catch (error) {
      this.logger.error('Error al llamar a Telegram API', error as any);
    }
  }

   async sendOrEditMessage(options: {
    text: string;
    chatId?: string;
    messageId?: number;
  }): Promise<number> {
    const chatId = options.chatId ?? this.defaultChatId;
    const { text, messageId } = options; 

    if (!chatId) {
      this.logger.error('TELEGRAM_CHAT_ID no está configurado');
      throw new Error('CHAT_ID_NOT_CONFIGURED');
    }

    try {
      if (messageId) {
        // 🔁 Editar mensaje existente
        const url = `${this.apiUrl}/editMessageText`;
        const payload = {
          chat_id: chatId,
          message_id: messageId,
          text,
          parse_mode: 'HTML',
        };

        const response$ = this.httpService.post(url, payload);
        const { data } = await firstValueFrom(response$);

        if (!data.ok) {
          this.logger.error(
            `Error al editar mensaje de Telegram: ${JSON.stringify(data)}`,
          );
          throw new Error('TELEGRAM_EDIT_ERROR');
        }

        // El message_id es el mismo que el que se envió
        return data.result.message_id;
      } else {
        // 🆕 Crear mensaje nuevo
        const url = `${this.apiUrl}/sendMessage`;
        const payload = {
          chat_id: chatId,
          text,
          parse_mode: 'HTML',
        };

        const response$ = this.httpService.post(url, payload);
        const { data } = await firstValueFrom(response$);

        if (!data.ok) {
          this.logger.error(
            `Error al enviar mensaje a Telegram: ${JSON.stringify(data)}`,
          );
          throw new Error('TELEGRAM_SEND_ERROR');
        }

        // Guardamos el message_id que devuelve Telegram
        return data.result.message_id;
      }
    } catch (error) {
      this.logger.error('Error al llamar a Telegram API', error as any);
      throw error;
    }
  }
  
}
