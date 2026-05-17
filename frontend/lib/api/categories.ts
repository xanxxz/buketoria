

export type Category = {
  id: string;
  name: string;
  slug: string;
};

export async function getCategories() {
  const res = await fetch(`/api/categories`, {
    next: { revalidate: 3600 }, // 🔥 категории меняются редко → кеш на час
  });

  if (!res.ok) throw new Error('Failed to fetch categories');

  return res.json() as Promise<Category[]>;
}