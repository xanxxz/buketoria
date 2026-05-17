const API_URL = '/api';

type GetProductsParams = {
  city?: string;
  category?: string;
};

function getToken() {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem('token');
}

export async function getProducts(params?: GetProductsParams) {
  const query = new URLSearchParams();

  if (params?.city) query.append('city', params.city);
  if (params?.category) query.append('category', params.category);

  const url = `${API_URL}/products${
    query.toString() ? `?${query.toString()}` : ''
  }`;

  const res = await fetch(url, {
    cache: 'no-store', // 🔥 ВАЖНО (в client-safe режиме)
  });

  if (!res.ok) throw new Error('Failed to fetch products');

  return res.json();
}

export async function updateProduct(id: string, data: any) {
  const cleanData = Object.fromEntries(
    Object.entries(data).filter(([_, v]) => v !== undefined),
  );

  const token = getToken();

  const res = await fetch(`${API_URL}/products/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
    body: JSON.stringify(cleanData),
  });

  if (!res.ok) throw new Error('Failed to update product');

  return res.json();
}

export async function deleteProduct(id: string) {
  const token = getToken();

  const res = await fetch(`${API_URL}/products/${id}`, {
    method: 'DELETE',
    headers: {
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
  });

  if (!res.ok) throw new Error('Failed to delete product');

  return res.json();
}