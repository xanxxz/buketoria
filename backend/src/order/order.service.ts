import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { TelegramService } from '../notifications/telegram.service';

@Injectable()
export class OrderService {
  constructor(
    private prisma: PrismaService,
    private telegram: TelegramService,
  ) {}

  async create(data: any) {
    const order = await this.prisma.order.create({
      data,
    });

    // 🔥 отправка уведомления в Telegram
    await this.telegram.sendOrder(order);

    return order;
  }

  findAll(citySlug?: string) {
    return this.prisma.order.findMany({
      where: citySlug ? { citySlug } : undefined,
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  findOne(id: string) {
    return this.prisma.order.findUnique({
      where: { id },
    });
  }
}