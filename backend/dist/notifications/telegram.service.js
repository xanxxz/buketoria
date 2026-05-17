"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TelegramService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = __importDefault(require("axios"));
function formatDelivery(type) {
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
let TelegramService = class TelegramService {
    constructor() {
        this.token = process.env.TELEGRAM_BOT_TOKEN;
        this.chatIds = process.env.TELEGRAM_CHAT_IDS
            .split(',')
            .map((id) => id.trim());
    }
    async send(text, parseMode = 'Markdown') {
        await Promise.all(this.chatIds.map((chatId) => axios_1.default.post(`https://api.telegram.org/bot${this.token}/sendMessage`, null, {
            params: {
                chat_id: chatId,
                text,
                parse_mode: parseMode,
            },
        })));
    }
    async sendOrder(order) {
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
};
exports.TelegramService = TelegramService;
exports.TelegramService = TelegramService = __decorate([
    (0, common_1.Injectable)()
], TelegramService);
//# sourceMappingURL=telegram.service.js.map