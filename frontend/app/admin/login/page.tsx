'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './Login.module.css';

const API_URL =
  process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';

export default function LoginPage() {
  const router = useRouter();

  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await fetch(`${API_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ password }),
      });

      if (!res.ok) {
        throw new Error('Invalid password');
      }

      const data = await res.json();

      localStorage.setItem('token', data.token);

      router.replace('/admin/products'); // или /admin
    } catch (err) {
      setError('Неверный пароль');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className={styles.page}>
      <form className={styles.card} onSubmit={handleLogin}>
        <h1 className={styles.title}>Вход в админку</h1>

        <input
          className={styles.input}
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && <p className={styles.error}>{error}</p>}

        <button
          className={styles.button}
          disabled={loading || !password}
        >
          {loading ? 'Вход...' : 'Войти'}
        </button>
      </form>
    </div>
  );
}