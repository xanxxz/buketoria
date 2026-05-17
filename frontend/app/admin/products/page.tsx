'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

import styles from './Products.module.css';
import {
  getProducts,
  deleteProduct,
  updateProduct,
} from '@/lib/api/products';

function getToken() {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem('token');
}

export default function AdminProductsPage() {
  const router = useRouter();

  const [products, setProducts] = useState<any[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState<any>({});
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);

  async function load() {
    const data = await getProducts();
    setProducts(data);
  }

  useEffect(() => {
    const token = getToken();

    if (!token) {
      router.replace('/admin/login');
      return;
    }

    load().finally(() => setLoading(false));
  }, []);

  async function handleDelete(id: string) {
    await deleteProduct(id);
    setProducts((prev) => prev.filter((p) => p.id !== id));
  }

  function startEdit(p: any) {
    setEditingId(p.id);
    setForm(p);
  }

  async function save() {
    if (!editingId) return;

    await updateProduct(editingId, form);

    setProducts((prev) =>
      prev.map((p) => (p.id === editingId ? { ...p, ...form } : p))
    );

    setEditingId(null);
    setForm({});
  }

  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return <div className={styles.page}>Загрузка...</div>;
  }

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <h1>Товары</h1>
        <p>Админ панель</p>

        <input
          className={styles.search}
          placeholder="Поиск по названию..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className={styles.grid}>
        {filtered.map((p) => (
          <div key={p.id} className={styles.card}>
            {editingId === p.id ? (
              <div className={styles.form}>
                <input
                  value={form.name || ''}
                  onChange={(e) =>
                    setForm({ ...form, name: e.target.value })
                  }
                  placeholder="Название"
                />

                <input
                  value={form.description || ''}
                  onChange={(e) =>
                    setForm({ ...form, description: e.target.value })
                  }
                  placeholder="Описание"
                />

                <div className={styles.row}>
                  <input
                    type="number"
                    value={form.baseMinPrice || 0}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        baseMinPrice: Number(e.target.value),
                      })
                    }
                    placeholder="Min"
                  />

                  <input
                    type="number"
                    value={form.baseMaxPrice || 0}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        baseMaxPrice: Number(e.target.value),
                      })
                    }
                    placeholder="Max"
                  />
                </div>

                <div className={styles.actions}>
                  <button className={styles.saveBtn} onClick={save}>
                    Сохранить
                  </button>
                  <button
                    className={styles.cancelBtn}
                    onClick={() => {
                      setEditingId(null);
                      setForm({});
                    }}
                  >
                    Отмена
                  </button>
                </div>
              </div>
            ) : (
              <>
                <div className={styles.imageWrap}>
                  <img src={p.image} alt={p.name} />
                </div>

                <div className={styles.content}>
                  <h3>{p.name}</h3>
                  <p className={styles.desc}>{p.description}</p>

                  <div className={styles.price}>
                    {p.baseMinPrice} ₽ – {p.baseMaxPrice} ₽
                  </div>
                </div>

                <div className={styles.actions}>
                  <button
                    className={styles.editBtn}
                    onClick={() => startEdit(p)}
                  >
                    Изменить
                  </button>

                  <button
                    className={styles.deleteBtn}
                    onClick={() => handleDelete(p.id)}
                  >
                    Удалить
                  </button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}