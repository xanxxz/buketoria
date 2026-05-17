import { Injectable } from '@nestjs/common';
import axios from 'axios';

function formatDelivery(type: string) {
  switch (type) {
    case 'asap':
      return 'Как можно скорее';
    case '2h':
      return 'В течение 2 часов';
    case '6h':
      return 'В течение 6 часов';
    case 'tomorrow':
      return 'На завтра';
    default:
      return type;
  }
}

@Injectable()
export class TelegramService {
  private token = process.env.TELEGRAM_BOT_TOKEN!;

  private chatIds = process.env.TELEGRAM_CHAT_IDS!
    .split(',')
    .map((id) => id.trim());

  async send(text: string, parseMode: 'Markdown' | 'HTML' = 'Markdown') {
    await Promise.all(
      this.chatIds.map((chatId) =>
        axios.post(
          `https://api.telegram.org/bot${this.token}/sendMessage`,
          null,
          {
            params: {
              chat_id: chatId,
              text,
              parse_mode: parseMode,
            },
          },
        ),
      ),
    );
  }

  async sendOrder(order: any) {
    const message = `
  🆕 <b>НОВЫЙ ЗАКАЗ</b>

  ━━━━━━━━━━━━━━
  👤 <b>Клиент</b>
  Имя: ${order.name}
  Телефон: ${order.phone}

  📦 <b>Товар</b>
  ${order.productName}

  💰 <b>Цена</b>
  ${order.price ? `от ${order.price} ₽` : 'не указана'}

  🏙 <b>Город</b>
  ${order.cityName ?? order.citySlug ?? 'не указан'}

  🏠 <b>Адрес</b>
  ${order.address ?? 'не указан'}

  ⏰ <b>Доставка</b>
  ${formatDelivery(order.deliveryTime)}

  📝 <b>Комментарий</b>
  ${order.comment ?? 'нет'}
  🆔 Заказ: ${order.id}

  ━━━━━━━━━━━━━━
    `.trim();

    return this.send(message, 'HTML');
  }
}