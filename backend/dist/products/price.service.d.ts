import { PrismaService } from '../prisma/prisma.service';
export declare class PriceService {
    private prisma;
    constructor(prisma: PrismaService);
    getProductsWithCityPrice(citySlug: string, category?: string): Promise<{
        id: string;
        name: string;
        slug: string;
        description: string;
        baseMinPrice: number;
        baseMaxPrice: number;
        image: string;
        category: {
            id: string;
            name: string;
            slug: string;
        };
    }[]>;
    updateProduct(id: string, data: any): Promise<{
        id: string;
        name: string;
        slug: string;
        description: string;
        createdAt: Date;
        updatedAt: Date;
        baseMinPrice: number;
        baseMaxPrice: number;
        image: string;
        categoryId: string;
        citySlug: string | null;
    }>;
    deleteProduct(id: string): Promise<{
        id: string;
        name: string;
        slug: string;
        description: string;
        createdAt: Date;
        updatedAt: Date;
        baseMinPrice: number;
        baseMaxPrice: number;
        image: string;
        categoryId: string;
        citySlug: string | null;
    }>;
}
