import { CitiesService } from './cities.service';
export declare class CitiesController {
    private readonly citiesService;
    constructor(citiesService: CitiesService);
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
    findOne(slug: string): import(".prisma/client").Prisma.Prisma__CityClient<{
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
