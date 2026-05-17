import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { TelegramModule } from '../notifications/telegram.module';

@Module({
  imports: [PrismaModule, TelegramModule],
  controllers: [OrderController],
  providers: [OrderService],
})
export class OrderModule {}