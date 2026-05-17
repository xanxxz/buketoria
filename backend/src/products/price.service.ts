import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class PriceService {
  constructor(private prisma: PrismaService) {}

  async getProductsWithCityPrice(citySlug: string, category?: string) {
    const city = await this.prisma.city.findUnique({
      where: { slug: citySlug },
    });

    const products = await this.prisma.product.findMany({
      where: category
        ? {
            category: {
              slug: category,
            },
          }
        : undefined,
      include: {
        category: true,
      },
    });

    if (!city) return [];

    return products.map((p) => ({
      id: p.id,
      name: p.name,
      slug: p.slug,
      description: p.description,

      baseMinPrice: Math.round(p.baseMinPrice * city.multiplier),
      baseMaxPrice: Math.round(p.baseMaxPrice * city.multiplier),

      image: p.image,

      category: {
        id: p.category.id,
        name: p.category.name,
        slug: p.category.slug,
      },
    }));
  }

  async updateProduct(id: string, data: any) {
    return this.prisma.product.update({
      where: { id },
      data: {
        name: data.name,
        slug: data.slug,
        description: data.description,
        baseMinPrice: data.baseMinPrice,
        baseMaxPrice: data.baseMaxPrice,
        image: data.image,

        // ✅ правильно через connect
        category: data.categoryId
          ? {
              connect: { id: data.categoryId },
            }
          : undefined,
      },
    });
  }

  async deleteProduct(id: string) {
    return this.prisma.product.delete({
      where: { id },
    });
  }
}