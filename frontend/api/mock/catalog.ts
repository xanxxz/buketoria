import { Flower, mockFlowers } from "./flowers";

export type Category = {
  id: string;
  name: string;
  slug: string;
};

export const mockCategories: Category[] = [
  { id: 'all', name: 'Все букеты', slug: 'all' },
  { id: 'roses', name: 'Розы', slug: 'roses' },
  { id: 'peonies', name: 'Пионы', slug: 'peonies' },
  { id: 'tulips', name: 'tulips', slug: 'tulips' },
  { id: 'orchids', name: 'orchids', slug: 'orchids' },
];
export type CatalogFilters = {
  category?: string; // теперь это slug
  query?: string;
};

export const getCatalog = async (
  filters?: CatalogFilters
): Promise<Flower[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      let result = [...mockFlowers];

      if (filters?.category && filters.category !== 'all') {
        result = result.filter(
          (f) => f.categoryId === filters.category // categoryId тоже должен быть slug
        );
      }

      if (filters?.query) {
        const q = filters.query.toLowerCase();

        result = result.filter((f) =>
          f.name.toLowerCase().includes(q)
        );
      }

      resolve(result);
    }, 400);
  });
};

export const getCategories = async (): Promise<Category[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockCategories);
    }, 300);
  });
};