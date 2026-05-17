const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';

export type Category = {
  id: string;
  name: string;
  slug: string;
};

export async function getCategories() {
  const res = await fetch(`${API_URL}/categories`, {
    next: { revalidate: 3600 }, // 🔥 категории меняются редко → кеш на час
  });

  if (!res.ok) throw new Error('Failed to fetch categories');

  return res.json() as Promise<Category[]>;
}