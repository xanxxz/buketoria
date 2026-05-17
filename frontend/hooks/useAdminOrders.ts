import { useEffect, useRef, useState } from 'react';
import { getOrders } from '@/lib/api/orders';
import { playBeep } from '@/lib/sound';

export function useAdminOrders() {
  const [orders, setOrders] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const prevIds = useRef<Set<string>>(new Set());
  const newIds = useRef<Set<string>>(new Set());

  const load = async () => {
    const data = await getOrders();

    const currentIds = new Set<string>(data.map((o: any) => o.id as string));

    // 🔥 новые заказы
    const incoming = data.filter(
      (o: any) => !prevIds.current.has(o.id)
    );

    if (incoming.length > 0 && prevIds.current.size > 0) {
      playBeep('new');

      incoming.forEach((o: any) => {
        newIds.current.add(o.id);

        // убираем подсветку через 5 сек
        setTimeout(() => {
          newIds.current.delete(o.id);
        }, 5000);
      });
    }

    prevIds.current = currentIds;
    setOrders(data);
    setLoading(false);
  };

  useEffect(() => {
    load();
    const interval = setInterval(load, 3000);

    return () => clearInterval(interval);
  }, []);

  return {
    orders,
    loading,
    isNew: (id: string) => newIds.current.has(id),
  };
}