import { getProducts } from '@/lib/api/products';
import { getCategories } from '@/lib/api/categories';

export async function getCatalogData(params: {
  city?: string;
  category?: string;
}) {
  const [products, categories] = await Promise.all([
    getProducts({
      city: params.city,
      category: params.category,
    }),
    getCategories(),
  ]);

  return {
    products,
    categories,
  };
}