'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { FlowerCard } from '@/components/FlowerCard/FlowerCard';
import { BottomSheet } from '@/components/BottomSheet/BottomSheet';
import { useFavorites } from '@/hooks/useFavorites';
import styles from './Catalog.module.css';
import { Product } from '@/types/product';
import { EmptyState } from '../EmtyState/EmptyState';
import { FiArrowDown, FiArrowUp } from 'react-icons/fi';
import { usePathname, useRouter } from 'next/navigation';
import { Category } from '@/types/category';

type Props = {
  products: Product[];
  categories: Category[];
};

export default function CatalogClient({ products, categories }: Props) {
  const [sort, setSort] = useState<'cheap' | 'expensive'>('cheap');
  const [open, setOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const chipsRef = useRef<Record<string, HTMLButtonElement | null>>({});
  const containerRef = useRef<HTMLDivElement | null>(null);

  const router = useRouter();
  const pathname = usePathname();

  const { toggleFavorite, isFavorite } = useFavorites();

  // ================= ACTIVE CATEGORY =================
  const activeCategory = useMemo(() => {
    const parts = pathname.split('/').filter(Boolean);
    const last = parts[parts.length - 1];
    return last && last !== 'catalog' ? last : null;
  }, [pathname]);

  // ================= FILTER =================
  const filtered = useMemo(() => {
    if (!activeCategory) return products;
    return products.filter((p) => p.category?.slug === activeCategory);
  }, [products, activeCategory]);

  // ================= SORT =================
  const sorted = useMemo(() => {
    return [...filtered].sort((a, b) =>
      sort === 'cheap'
        ? a.baseMinPrice - b.baseMinPrice
        : b.baseMinPrice - a.baseMinPrice
    );
  }, [filtered, sort]);
  
  // ================= CENTER CHIP =================
  const handleCategory = (slug: string | null) => {
    const parts = pathname.split('/').filter(Boolean);
    const hasCity = parts[0] && parts[0] !== 'catalog';
    const city = hasCity ? parts[0] : null;

    const base = city ? `/${city}/catalog` : `/catalog`;

    router.push(slug ? `${base}/${slug}` : base, { scroll: false });
  };

  useEffect(() => { if (!activeCategory) return; const container = containerRef.current; const el = chipsRef.current[activeCategory]; if (!container || !el) return; const containerRect = container.getBoundingClientRect(); const elRect = el.getBoundingClientRect(); const scrollLeft = container.scrollLeft + (elRect.left - containerRect.left) - container.clientWidth / 2 + el.clientWidth / 2; requestAnimationFrame(() => { container.scrollTo({ left: scrollLeft, behavior: 'smooth', }); }); }, [activeCategory, categories]);

  return (
    <>
      {/* SORT */}
      <div className={styles.sort}>
        <button
          className={`${styles.sortBtn} ${sort === 'cheap' ? styles.active : ''}`}
          onClick={() => setSort('cheap')}
        >
          <FiArrowDown size={14} />
          <span>Дешевле</span>
        </button>

        <button
          className={`${styles.sortBtn} ${sort === 'expensive' ? styles.active : ''}`}
          onClick={() => setSort('expensive')}
        >
          <FiArrowUp size={14} />
          <span>Дороже</span>
        </button>
      </div>

      {/* CATEGORIES */}
      <div className={styles.categoriesWrapper}>
        <div className={styles.categories} ref={containerRef}>
          <button
            className={`${styles.chip} ${!activeCategory ? styles.chipActive : ''}`}
            onClick={() => handleCategory(null)}
          >
            Все
          </button>

          {categories.map((cat) => (
            <button
              key={cat.id}
              ref={(el) => {
                chipsRef.current[cat.slug] = el;
              }}
              className={`${styles.chip} ${
                activeCategory === cat.slug ? styles.chipActive : ''
              }`}
              onClick={() => handleCategory(cat.slug)}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* GRID */}
      <div className={styles.grid}>
        {sorted.length ? (
          sorted.map((flower) => (
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
          ))
        ) : (
          <div className={styles.emptyWrap}>
            <EmptyState />
          </div>
        )}
      </div>

      <BottomSheet
        open={open}
        onClose={() => setOpen(false)}
        product={selectedProduct}
      />
    </>
  );
}