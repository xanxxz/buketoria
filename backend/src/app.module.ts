import { Module } from '@nestjs/common';
import { ThrottlerModule } from '@nestjs/throttler';
import { APP_GUARD } from '@nestjs/core';
import { ThrottlerGuard } from '@nestjs/throttler';

import { CitiesModule } from './cities/cities.module';
import { ProductsModule } from './products/products.module';
import { PrismaModule } from './prisma/prisma.module';
import { CategoryModule } from './categories/category.module';
import { OrderModule } from './order/order.module';
import { TelegramModule } from './notifications/telegram.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ThrottlerModule.forRoot([
      {
        ttl: 60,
        limit: 100, // 🔥 глобально почти не мешаем API
      },
    ]),

    PrismaModule,
    ProductsModule,
    CitiesModule,
    CategoryModule,
    OrderModule,
    TelegramModule,
    AuthModule,
  ],

  providers: [
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
  ],
})
export class AppModule {}