import CatalogClient from '@/components/Catalog/CatalogClient';
import { getProducts } from '@/lib/api/products';
import { getCities } from '@/lib/api/cities';
import styles from './CityCategory.module.css';

import { FiCamera, FiSun, FiTruck } from 'react-icons/fi';

import type { Metadata } from 'next';
import { getCachedCategories } from '@/lib/cache/categoriesCache';

export async function generateMetadata({
  params,
}: {
  params: { city: string; category: string };
}): Promise<Metadata> {
  const [cities, categories] = await Promise.all([
    getCities(),
    getCachedCategories(),
  ]);

  const city = cities.find((c) => c.slug === params.city);
  const category = categories.find((c) => c.slug === params.category);

  const cityName = city?.name || '';
  const categoryName = category?.name || '';

  return {
    title: `${categoryName} с доставкой в ${cityName} — заказать букет | Букетория`,
    description: `Закажите ${categoryName.toLowerCase()} с доставкой в ${cityName}. Свежие букеты от локальных флористов, доставка от 30 минут.`,

    alternates: {
      canonical: `/${params.city}/${params.category}`,
    },

    openGraph: {
      title: `${categoryName} в ${cityName}`,
      description: `Доставка цветов и ${categoryName.toLowerCase()} в ${cityName}.`,
      type: 'website',
      locale: 'ru_RU',
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function CityCategoryPage({
  params,
}: {
  params: { city: string; category: string };
}) {
  const [cities, categories, products] = await Promise.all([
    getCities(),
    getCachedCategories(),
    getProducts({
      city: params.city,
      category: params.category,
    }),
  ]);

  const city = cities.find((c) => c.slug === params.city);
  const category = categories.find((c) => c.slug === params.category);

  if (!city || !category) return null;

  return (
    <>
      {/* 🔥 STRUCTURED DATA (VERY STRONG FOR LOCAL + CATEGORY SEO) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',

            '@type': 'CollectionPage',

            name: `${category.name} в ${city.name}`,

            description:
              `${category.name} с доставкой в ${city.name}`,

            about: {
              '@type': 'Florist',
              name: 'Букетория',
            },

            areaServed: city.name,
          }),
        }}
      />

      <main className={styles.page}>

        {/* 🔥 SEO BLOCK */}
        <section className={styles.seo}>
          <h1 className={styles.title}>
            {category.name} с доставкой в {city.info}
          </h1>

          <p className={styles.text}>
            Закажите {category.name.toLowerCase()} с доставкой в {city.info}.
            Мы работаем с локальными флористами и доставляем цветы от 30 минут.
          </p>

          <div className={styles.badges}>
            <div className={styles.badge}>
              <FiTruck />
              <span>Быстрая доставка</span>
            </div>

            <div className={styles.badge}>
              <FiSun />
              <span>Свежие цветы</span>
            </div>

            <div className={styles.badge}>
              <FiCamera />
              <span>Фото перед отправкой</span>
            </div>
          </div>
        </section>

        {/* CLIENT */}
        <CatalogClient products={products} categories={categories}/>

      </main>
    </>
  );
}