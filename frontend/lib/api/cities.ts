const API_URL = process.env.NEXT_PUBLIC_API_URL;;

export type City = {
  id: string;
  name: string;
  info: string;
  slug: string;
  multiplier: number;
};

export async function getCities(): Promise<City[]> {
  if (typeof window !== 'undefined') {
    const cached = localStorage.getItem('cities');
    if (cached) return JSON.parse(cached);
  }

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/cities`);
  const data = await res.json();

  localStorage.setItem('cities', JSON.stringify(data));

  return data;
}