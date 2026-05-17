'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import styles from './AdminHome.module.css';

function getToken() {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem('token');
}

export default function AdminHomePage() {
  const router = useRouter();

  useEffect(() => {
    const token = getToken();

    if (!token) {
      router.replace('/login');
    }
  }, []);

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <h1>⚙️ Админ панель</h1>
        <p>Управление проектом</p>
      </div>

      <div className={styles.grid}>
        <button
          className={styles.card}
          onClick={() => router.push('/admin/orders')}
        >
          📦 Заказы
          <span>Просмотр и управление заказами</span>
        </button>

        <button
          className={styles.card}
          onClick={() => router.push('/admin/products')}
        >
          🛍 Товары
          <span>Редактирование каталога</span>
        </button>

        <button
          className={styles.card}
          onClick={() => router.push('/admin/stats')}
        >
          📊 Статистика
          <span>Аналитика и показатели</span>
        </button>

        <button
          className={styles.card}
          onClick={() => router.push('/')}
        >
          🌐 На сайт
          <span>Перейти в клиентскую часть</span>
        </button>
      </div>

      <div className={styles.footer}>
        <button
          className={styles.logout}
          onClick={() => {
            localStorage.removeItem('token');
            router.replace('/login');
          }}
        >
          Выйти
        </button>
      </div>
    </div>
  );
}