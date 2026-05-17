import { PrismaService } from '../prisma/prisma.service';
export declare class CategoryService {
    private prisma;
    constructor(prisma: PrismaService);
    getAll(): Promise<{
        id: string;
        name: string;
        slug: string;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
}
