import { useState } from 'react';
import { createOrder } from '@/lib/api/orders';
import { CreateOrderDTO } from '@/types/order';

export function useCreateOrder() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submit = async (data: CreateOrderDTO) => {
    try {
      setLoading(true);
      setError(null);

      const res = await createOrder(data);

      return res;
    } catch (e) {
      setError('Ошибка создания заказа');
      throw e;
    } finally {
      setLoading(false);
    }
  };

  return { submit, loading, error };
}