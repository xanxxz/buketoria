import CatalogClient from '@/components/Catalog/CatalogClient';
import { prisma } from '@/lib/prisma';
import styles from './CityCatalog.module.css';
import { getProducts } from '@/lib/api/products';

import { FiTruck, FiSun, FiCamera } from 'react-icons/fi';

import type { Metadata } from 'next';
import { getCachedCategories } from '@/lib/cache/categoriesCache';

export async function generateMetadata({
  params,
}: {
  params: { city: string };
}): Promise<Metadata> {
  const city = await prisma.city.findUnique({
    where: { slug: params.city },
  });

  const cityName = city?.name || '';

  return {
    title: `Доставка цветов в ${cityName} — заказать букет от 30 минут | Букетория`,
    description: `Закажите свежие цветы и букеты с доставкой в ${cityName}. Работаем с локальными флористами, фото перед отправкой, быстрая доставка от 30 минут.`,

    alternates: {
      canonical: `/${params.city}/catalog`,
    },

    openGraph: {
      title: `Доставка цветов в ${cityName}`,
      description: `Свежие букеты с доставкой в ${cityName} от 30 минут.`,
      type: 'website',
      locale: 'ru_RU',
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function CityCatalogPage({
  params,
}: {
  params: { city: string };
}) {
  const city = await prisma.city.findUnique({
    where: { slug: params.city },
  });

  if (!city) return null;

    const [products, categories] = await Promise.all([
      getProducts({ city: params.city }),
      getCachedCategories(),
    ]);

  return (
    <>
      {/* 🔥 STRUCTURED DATA (LOCAL SEO BOOST) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',

            name: `Доставка цветов в ${city.name}`,

            description:
              `Каталог цветов с доставкой в ${city.name}`,

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
            Доставка цветов в {city.info} — заказать букет
          </h1>

          <p className={styles.text}>
            Закажите свежие букеты с доставкой в {city.info}.
            Мы работаем с локальными флористами и доставляем цветы от 30 минут.
          </p>

          <div className={styles.badges}>
            <div className={styles.badge}>
              <FiTruck />
              <span>Быстрая доставка цветов</span>
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