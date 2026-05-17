import { OrderService } from './order.service';
export declare class OrderController {
    private readonly orderService;
    constructor(orderService: OrderService);
    create(body: any): Promise<{
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
