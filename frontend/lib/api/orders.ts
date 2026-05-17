import { CreateOrderDTO } from '@/types/order';

const API_URL = process.env.NEXT_PUBLIC_API_URL;;

const BASE_URL = `${API_URL}/orders`;

export async function createOrder(data: CreateOrderDTO) {
  const res = await fetch(BASE_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error('Failed to create order');
  }

  return res.json();
}

export async function getOrders(citySlug?: string) {
  const url = citySlug
    ? `${BASE_URL}?citySlug=${citySlug}`
    : BASE_URL;

  const res = await fetch(url);

  if (!res.ok) {
    throw new Error('Failed to fetch orders');
  }

  return res.json();
}

export async function getOrderById(id: string) {
  const res = await fetch(`${BASE_URL}/${id}`);

  if (!res.ok) {
    throw new Error('Failed to fetch order');
  }

  return res.json();
}