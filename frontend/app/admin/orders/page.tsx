'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

import { useAdminOrders } from '@/hooks/useAdminOrders';
import { getStats } from '@/lib/stats';

import styles from './AdminOrders.module.css';
import {
  FiPhone,
  FiMapPin,
  FiClock,
  FiUser,
  FiTerminal,
  FiCalendar,
} from 'react-icons/fi';

import { deliveryTimeMap } from '@/lib/deliveryTime';

export const cityMap: Record<string, string> = {
  moscow: 'Москва',
  saratov: 'Саратов',
};

function getToken() {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem('token');
}

export default function AdminOrdersPage() {
  const router = useRouter();

  const { orders, loading, isNew } = useAdminOrders();
  const stats = getStats(orders);

  useEffect(() => {
    const token = getToken();

    if (!token) {
      router.replace('/login');
    }
  }, []);

  return (
    <div className={styles.page}>
      {/* HEADER */}
      <div className={styles.header}>
        <h1 className={styles.title}>📦 Заказы</h1>

        <div className={styles.counter}>
          {orders.length} заказов
        </div>
      </div>

      {/* DASHBOARD */}
      <div className={styles.dashboard}>
        <div className={styles.stat}>
          <FiCalendar /> Сегодня: <b>{stats.day}</b>
        </div>

        <div className={styles.stat}>
          <FiCalendar /> Неделя: <b>{stats.week}</b>
        </div>

        <div className={styles.stat}>
          <FiCalendar /> Месяц: <b>{stats.month}</b>
        </div>
      </div>

      {loading && (
        <p className={styles.loading}>Загрузка...</p>
      )}

      {/* LIST */}
      <div className={styles.list}>
        {orders.map((order) => {
          const delivery =
            deliveryTimeMap[
              order.deliveryTime as keyof typeof deliveryTimeMap
            ];

          return (
            <div
              key={order.id}
              className={`${styles.card} ${
                isNew(order.id) ? styles.new : ''
              }`}
            >
              <div className={styles.top}>
                <div className={styles.product}>
                  {order.productName}
                </div>

                <div className={styles.price}>
                  от {order.price ? `${order.price} ₽` : '—'}
                </div>
              </div>

              <div className={styles.info}>
                <div className={styles.row}>
                  <span className={styles.icon}>🌍</span>
                  {cityMap[order.citySlug] || 'Город не указан'}
                </div>

                <div className={styles.row}>
                  <span className={styles.icon}>
                    <FiUser />
                  </span>
                  {order.name}
                </div>

                <div className={styles.row}>
                  <span className={styles.icon}>
                    <FiPhone />
                  </span>
                  {order.phone}
                </div>

                <div className={styles.row}>
                  <span className={styles.icon}>
                    <FiTerminal />
                  </span>
                  {order.comment || 'Комментарий не указан'}
                </div>

                <div className={styles.row}>
                  <span className={styles.icon}>
                    <FiMapPin />
                  </span>
                  {order.address || 'Адрес не указан'}
                </div>

                <div className={styles.row}>
                  <span className={styles.icon}>
                    {delivery?.icon || <FiClock />}
                  </span>

                  <span
                    className={styles.badge}
                    style={{ background: delivery?.color }}
                  >
                    {delivery?.label || order.deliveryTime}
                  </span>
                </div>
              </div>

              <div className={styles.footer}>
                <span className={styles.date}>
                  {new Date(order.createdAt).toLocaleString()}
                </span>

                <div className={styles.status}>🟡 Новый</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}