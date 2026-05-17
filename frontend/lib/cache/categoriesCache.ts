import { getCategories } from '@/lib/api/categories';
import { Category } from '@/types/category';

let cache: Category[] | null = null;
let promise: Promise<Category[]> | null = null;

export async function getCachedCategories() {
  if (cache) return cache;

  if (!promise) {
    promise = getCategories().then((data) => {
      cache = data;
      return data;
    });
  }

  return promise;
}