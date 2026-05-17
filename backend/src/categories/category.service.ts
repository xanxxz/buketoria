import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CategoryService {
  constructor(private prisma: PrismaService) {}

  async getAll() {
    return this.prisma.category.findMany({
      orderBy: { name: 'asc' },
    });
  }
}