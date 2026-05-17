export type Product = {
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

  citySlug?: string | null;

  createdAt?: string;
  updatedAt?: string;
};