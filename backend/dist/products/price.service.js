"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriceService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let PriceService = class PriceService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getProductsWithCityPrice(citySlug, category) {
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
        if (!city)
            return [];
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
    async updateProduct(id, data) {
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
    async deleteProduct(id) {
        return this.prisma.product.delete({
            where: { id },
        });
    }
};
exports.PriceService = PriceService;
exports.PriceService = PriceService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PriceService);
//# sourceMappingURL=price.service.js.map