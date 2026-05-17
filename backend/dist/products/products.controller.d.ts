import { PriceService } from './price.service';
export declare class ProductsController {
    private readonly priceService;
    constructor(priceService: PriceService);
    getProducts(city?: string, category?: string): Promise<{
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
    update(id: string, body: any): Promise<{
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
    remove(id: string): Promise<{
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
