import { Module } from '@nestjs/common';

import { PrismaModule } from '../prisma/prisma.module';
import { AuthModule } from '../auth/auth.module';

import { ProductsController } from './products.controller';
import { PriceService } from './price.service';

@Module({
  imports: [
    PrismaModule,
    AuthModule,
  ],
  controllers: [ProductsController],
  providers: [PriceService],
})
export class ProductsModule {}