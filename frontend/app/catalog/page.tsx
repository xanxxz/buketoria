import CatalogClient from '@/components/Catalog/CatalogClient';
import styles from './CatalogPage.module.css';
import { getProducts } from '@/lib/api/products';
import { getCachedCategories } from '@/lib/cache/categoriesCache';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Каталог цветов и букетов — доставка по России от 30 минут | Букетория',

  description:
    'Выберите и закажите свежие цветы и букеты с доставкой по всей России от 30 минут. Розы, тюльпаны, пионы и авторские композиции с фото перед отправкой.',

  keywords: [
    'каталог цветов',
    'доставка цветов',
    'букеты',
    'заказать букет',
    'цветы с доставкой',
    'цветочный магазин онлайн',
    'купить цветы',
    'розы с доставкой',
  ],

  openGraph: {
    title: 'Каталог цветов — Букетория',
    description:
      'Свежие букеты с быстрой доставкой по всей России от 30 минут.',
    type: 'website',
    url: 'https://your-domain.ru/catalog',
    images: [
      {
        url: '/og/catalog.jpg',
        width: 1200,
        height: 630,
        alt: 'Каталог цветов Букетория',
      },
    ],
  },

  alternates: {
    canonical: '/catalog',
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default async function CatalogPage() {
  const [products, categories] = await Promise.all([
    getProducts(),
    getCachedCategories(),
  ]);
  
  return (
    <>
      {/* 🔥 STRUCTURED DATA (SEO BOOST) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',

            '@type': 'CollectionPage',

            name: 'Каталог цветов',

            description:
              'Каталог свежих цветов и букетов с доставкой по России',

            provider: {
              '@type': 'Florist',
              name: 'Букетория',
            },
          }),
        }}
      />

      <main className={styles.page}>
        {/* 🔥 SEO H1 */}
        <section className={styles.seo}>
          <h1 className={styles.title}>
            Каталог цветов и букетов с доставкой по России
          </h1>

          <p className={styles.text}>
            Выберите и закажите свежие цветы с доставкой в любой город России.
            Розы, тюльпаны, пионы и авторские букеты с фото перед отправкой и
            гарантией качества.
          </p>
        </section>

        {/* PRODUCTS */}
        <CatalogClient products={products} categories={categories}/>
      </main>
    </>
  );
}