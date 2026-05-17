import { PrismaService } from '../prisma/prisma.service';
export declare class CitiesService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(): import(".prisma/client").Prisma.PrismaPromise<{
        info: string;
        id: string;
        name: string;
        slug: string;
        title: string;
        description: string;
        content: string | null;
        multiplier: number;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    findBySlug(slug: string): import(".prisma/client").Prisma.Prisma__CityClient<{
        info: string;
        id: string;
        name: string;
        slug: string;
        title: string;
        description: string;
        content: string | null;
        multiplier: number;
        createdAt: Date;
        updatedAt: Date;
    } | null, null, import("@prisma/client/runtime/library").DefaultArgs>;
}
