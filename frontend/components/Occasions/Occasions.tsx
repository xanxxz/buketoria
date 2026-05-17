'use client';

import {
  FiGift,
  FiHeart,
  FiSmile,
  FiFeather,
} from 'react-icons/fi';

import styles from './Occasions.module.css';

import Link from 'next/link';

import { useEffect, useState } from 'react';

import { getCategories } from '@/lib/api/categories';
import { cityUrl } from '@/lib/paths';

import { Category } from '@/types/category';
import { City } from '@/types/city';

const iconMap: Record<string, React.ReactNode> = {
  birthday: <FiGift />,
  love: <FiHeart />,
  premium: <FiSmile />,
  anniversary: <FiFeather />,
};

type Props = {
  city: City | null;
};

export const Occasions = ({ city }: Props) => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    getCategories().then((data) => {
      const filtered = data.filter((c) =>
        ['birthday', 'love', 'premium', 'anniversary'].includes(c.slug)
      );

      setCategories(filtered.slice(0, 4));
    });
  }, []);

  return (
    <section className={styles.section}>
      <h2>Выберите повод</h2>

      <div className={styles.list}>
        {categories.map((cat) => (
          <Link
            key={cat.id}
            href={cityUrl(
              city?.slug ?? null,
              `/catalog/${cat.slug}`
            )}
            className={`${styles.item} ${
              styles[cat.slug]
            }`}
          >
            <span className={styles.icon}>
              {iconMap[cat.slug]}
            </span>

            {cat.name}
          </Link>
        ))}
      </div>
    </section>
  );
};