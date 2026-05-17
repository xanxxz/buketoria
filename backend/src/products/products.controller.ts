import {
  Controller,
  Get,
  Query,
  Patch,
  Delete,
  Param,
  Body,
  UseGuards,
} from '@nestjs/common';

import { PriceService } from './price.service';
import { AdminGuard } from '../auth/auth.guard';

@Controller('products')
export class ProductsController {
  constructor(private readonly priceService: PriceService) {}

  @Get()
  getProducts(
    @Query('city') city?: string,
    @Query('category') category?: string,
  ) {
    return this.priceService.getProductsWithCityPrice(
      city ?? 'saratov',
      category,
    );
  }

  @UseGuards(AdminGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() body: any) {
    return this.priceService.updateProduct(id, body);
  }

  @UseGuards(AdminGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.priceService.deleteProduct(id);
  }
}