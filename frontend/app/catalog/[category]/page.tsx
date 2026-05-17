import CatalogClient from '@/components/Catalog/CatalogClient';
import { getProducts } from '@/lib/api/products';
import { getCategories } from '@/lib/api/categories';
import styles from './CategoryCatalog.module.css';

import type { Metadata } from 'next';
import { getCachedCategories } from '@/lib/cache/categoriesCache';

export async function generateMetadata({
  params,
}: {
  params: { category: string };
}): Promise<Metadata> {
  const categories = await getCategories();

  const category = categories.find(
    (c) => c.slug === params.category
  );

  const name = category?.name ?? params.category;

  return {
    title: `${name} — доставка цветов по России | Букетория`,

    description:
      `Купить ${name.toLowerCase()} с доставкой по всей России от 30 минут. Свежие букеты, фото перед отправкой, гарантия качества.`,

    alternates: {
      canonical: `/catalog/${params.category}`,
    },

    openGraph: {
      title: `${name} — доставка цветов`,
      description:
        `Свежие ${name.toLowerCase()} с быстрой доставкой по России.`,
      type: 'website',
      locale: 'ru_RU',
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const [products, categories] = await Promise.all([
    getProducts(),
    getCachedCategories(),
  ]);

  const category = categories.find(
    (c) => c.slug === params.category
  );

  const title = category?.name ?? params.category;

  return (
    <>
      {/* 🔥 STRUCTURED DATA (CATEGORY SEO BOOST) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',

            '@type': 'CollectionPage',

            name: title,

            description:
              `Каталог цветов категории ${title}`,

            provider: {
              '@type': 'Florist',
              name: 'Букетория',
            },
          }),
        }}
      />

      <main className={styles.page}>
        {/* 🔥 SEO H1 (важно: теперь динамический) */}
        <section className={styles.seo}>
          <h1 className={styles.title}>
            {title} с доставкой по всей России
          </h1>

          <p className={styles.text}>
            Закажите свежие букеты категории {title.toLowerCase()} с доставкой
            в любой город России. Мы работаем с локальными флористами и
            доставляем цветы от 30 минут.
          </p>
        </section>

        {/* PRODUCTS */}
        <CatalogClient products={products} categories={categories}/>
      </main>
    </>
  );
}