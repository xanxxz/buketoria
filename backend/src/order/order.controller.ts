import { Controller, Post, Body, Get, Param, Query } from '@nestjs/common';
import { Throttle } from '@nestjs/throttler';
import { OrderService } from './order.service';

@Controller('orders')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Throttle({ default: { limit: 2, ttl: 60 } })
  @Post()
  create(@Body() body: any) {
    return this.orderService.create(body);
  }

  @Get()
  findAll(@Query('citySlug') citySlug?: string) {
    return this.orderService.findAll(citySlug);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.orderService.findOne(id);
  }
}