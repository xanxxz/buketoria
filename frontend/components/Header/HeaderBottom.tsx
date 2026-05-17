'use client';

import { useEffect, useState } from 'react';
import styles from './Header.module.css';
import { getProducts } from '@/lib/api/products';
import { FiMenu } from 'react-icons/fi';
import Link from 'next/link';
import { cityUrl } from '@/lib/paths';
import { Category } from '@/types/category';
import { Product } from '@/types/product';
import { useParams } from 'next/navigation';

type Props = {
  categories: Category[];
};

export const HeaderBottom = ({ categories }: Props) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [catalogQuery, setCatalogQuery] = useState('');

  const [catalogOpen, setCatalogOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  const [flowers, setFlowers] = useState<Product[]>([]);
  const [searchOpen, setSearchOpen] = useState(false);

  const params = useParams();
  const citySlug = (params?.city ?? null) as string | null;

  const prefix = citySlug ? `/${citySlug}` : '';

  // ================== LOAD PRODUCTS ONLY ==================
  useEffect(() => {
    getProducts({
      city: citySlug ?? undefined,
    }).then(setFlowers);
  }, [citySlug]);

  // ================== SEARCH ==================
  const searchResults = searchQuery
    ? flowers.filter((f) =>
        f.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  const filteredCategories = categories.filter((c) =>
    c.name.toLowerCase().includes(catalogQuery.toLowerCase())
  );

  const openCatalog = () => {
    setCatalogOpen(true);
    requestAnimationFrame(() => setVisible(true));
  };

  const closeCatalog = () => {
    setVisible(false);
    setTimeout(() => setCatalogOpen(false), 250);
  };

  return (
    <>
      {/* ================= BOTTOM ================= */}
      <div className={styles.bottom}>
        <button className={styles.catalog} onClick={openCatalog}>
          <FiMenu />
          <span>Каталог</span>
        </button>

        <div className={styles.searchWrapper}>
          <input
            className={styles.search}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Поиск букетов..."
            onFocus={() => setSearchOpen(true)}
            onBlur={() => setTimeout(() => setSearchOpen(false), 10)}
          />

          {searchOpen && searchResults.length > 0 && (
            <div className={styles.searchDropdown}>
              {searchResults.map((flower) => (
                <Link
                  key={flower.id}
                  className={styles.searchItem}
                  href={cityUrl(citySlug, `/catalog/${flower.category.slug}`)}
                >
                  <span>{flower.name}</span>
                  <span>от {flower.baseMinPrice} ₽</span>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* ================= DRAWER ================= */}
      {catalogOpen && (
        <div className={styles.overlay} onClick={closeCatalog}>
          <aside
            className={`${styles.drawer} ${
              visible ? styles.drawerOpen : styles.drawerClose
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={styles.drawerHeader}>
              <h3>Каталог</h3>

              <button className={styles.closeBtn} onClick={closeCatalog}>
                ✕
              </button>
            </div>

            <input
              className={styles.drawerSearch}
              value={catalogQuery}
              onChange={(e) => setCatalogQuery(e.target.value)}
              placeholder="Найти категорию..."
            />

            <div className={styles.list}>
              {filteredCategories.map((cat) => (
                <Link
                  key={cat.id}
                  className={styles.item}
                  href={
                    prefix
                      ? `${prefix}/catalog/${cat.slug}`
                      : `/catalog/${cat.slug}`
                  }
                  onClick={closeCatalog}
                >
                  {cat.name}
                </Link>
              ))}
            </div>
          </aside>
        </div>
      )}
    </>
  );
};