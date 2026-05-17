const API_URL = process.env.NEXT_PUBLIC_API_URL;;

export type City = {
  id: string;
  name: string;
  info: string;
  slug: string;
  multiplier: number;
};

export async function getCities(): Promise<City[]> {
  const res = await fetch(`${API_URL}/cities`, {
    next: { revalidate: 3600 },
  });

  if (!res.ok) throw new Error('Failed to fetch cities');

  return res.json();
}