'use client';

import styles from './Popular.module.css';
import { FlowerCard } from '../FlowerCard/FlowerCard';
import Link from 'next/link';
import { useFavorites } from '@/hooks/useFavorites';
import { useState } from 'react';
import { BottomSheet } from '../BottomSheet/BottomSheet';
import { useParams } from 'next/navigation';
import { EmptyState } from '../EmtyState/EmptyState';

export const PopularClient = ({ products }: any) => {
  const [open, setOpen] = useState(false);
  const { toggleFavorite, isFavorite } = useFavorites();
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  const params = useParams();

  const cityRaw = params?.city;

  const city =
    typeof cityRaw === 'string'
      ? cityRaw
      : Array.isArray(cityRaw)
      ? cityRaw[0]
      : undefined;

  const catalogLink = city ? `/${city}/catalog` : `/catalog`;

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2>Популярные букеты</h2>
        <Link href={catalogLink} className={styles.link}>
          Смотреть все <span className={styles.arrow}>›</span>
        </Link>
      </div>

      {products.length === 0 ? (
        <div className={styles.empty}>
          <EmptyState />
        </div>
      ) : (
        <div className={styles.grid}>
          {products.map((flower: any) => (
            <FlowerCard
              key={flower.id}
              flower={flower}
              isFavorite={isFavorite(flower.id)}
              onToggleFavorite={() => toggleFavorite(flower.id)}
              onClick={() => {
                setSelectedProduct(flower);
                setOpen(true);
              }}
            />
          ))}
        </div>
      )}

      <BottomSheet
        open={open}
        onClose={() => setOpen(false)}
        product={selectedProduct}
      />
    </section>
  );
};