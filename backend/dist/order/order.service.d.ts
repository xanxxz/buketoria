import { PrismaService } from '../prisma/prisma.service';
import { TelegramService } from '../notifications/telegram.service';
export declare class OrderService {
    private prisma;
    private telegram;
    constructor(prisma: PrismaService, telegram: TelegramService);
    create(data: any): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        citySlug: string | null;
        productName: string;
        price: number | null;
        phone: string;
        comment: string | null;
        address: string | null;
        deliveryTime: string;
        status: import(".prisma/client").$Enums.OrderStatus;
        productId: string | null;
    }>;
    findAll(citySlug?: string): import(".prisma/client").Prisma.PrismaPromise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        citySlug: string | null;
        productName: string;
        price: number | null;
        phone: string;
        comment: string | null;
        address: string | null;
        deliveryTime: string;
        status: import(".prisma/client").$Enums.OrderStatus;
        productId: string | null;
    }[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__OrderClient<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        citySlug: string | null;
        productName: string;
        price: number | null;
        phone: string;
        comment: string | null;
        address: string | null;
        deliveryTime: string;
        status: import(".prisma/client").$Enums.OrderStatus;
        productId: string | null;
    } | null, null, import("@prisma/client/runtime/library").DefaultArgs>;
}
