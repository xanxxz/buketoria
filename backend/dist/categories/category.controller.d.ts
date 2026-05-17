import { CategoryService } from './category.service';
export declare class CategoryController {
    private readonly categoryService;
    constructor(categoryService: CategoryService);
    getAll(): Promise<{
        id: string;
        name: string;
        slug: string;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
}
