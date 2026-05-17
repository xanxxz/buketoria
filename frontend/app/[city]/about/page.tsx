import styles from '../../about/About.module.css';
import {
  FiHeart,
  FiTruck,
  FiUsers,
  FiClock,
} from 'react-icons/fi';

import { prisma } from '@/lib/prisma';

import type { Metadata } from 'next';

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
    title: `О нас — доставка цветов в ${cityName} | Букетория`,
    description: `Сервис доставки цветов в ${cityName}. Свежие букеты, быстрая доставка и забота о клиентах.`,

    alternates: {
      canonical: `/${params.city}/about`,
    },

    openGraph: {
      title: `О сервисе доставки цветов в ${cityName}`,
      description: `Доставка цветов в ${cityName} от локального сервиса Букетория.`,
      type: 'website',
      locale: 'ru_RU',
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function AboutPage({
  params,
}: {
  params: { city: string };
}) {
  const city = await prisma.city.findUnique({
    where: { slug: params.city },
  });

  if (!city) return null;

  return (
    <>
      {/* 🔥 STRUCTURED DATA (BRAND SEO BOOST) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',

            '@type': 'AboutPage',

            name: `О сервисе Букетория в ${city.name}`,

            about: {
              '@type': 'Florist',
              name: 'Букетория',
            },

            areaServed: city.name,
          }),
        }}
      />

      <main className={styles.page}>

        {/* 🔥 H1 */}
        <h1 className={styles.title}>
          О сервисе доставки цветов в {city.info}
        </h1>

        {/* HERO */}
        <section className={styles.hero}>
          <p>
            Мы создаём букеты с доставкой в {city.info}, которые вызывают эмоции.
            Каждый заказ собирается вручную с вниманием к деталям.
          </p>
        </section>

        {/* FEATURES */}
        <section className={styles.grid}>

          <article className={styles.card}>
            <FiHeart className={styles.icon} />
            <h3>С душой</h3>
            <p>Каждый букет собирается вручную флористом</p>
          </article>

          <article className={styles.card}>
            <FiTruck className={styles.icon} />
            <h3>Быстрая доставка</h3>
            <p>Доставка цветов в {city.info} от 30 минут</p>
          </article>

          <article className={styles.card}>
            <FiUsers className={styles.icon} />
            <h3>Забота о клиентах</h3>
            <p>Поможем подобрать букет под любой повод</p>
          </article>

          <article className={styles.card}>
            <FiClock className={styles.icon} />
            <h3>Всегда на связи</h3>
            <p>Отвечаем в течение нескольких минут</p>
          </article>

        </section>

        {/* SEO TEXT */}
        <section className={styles.story}>
          <h2>О нашей доставке цветов в {city.info}</h2>

          <p>
            Мы — сервис доставки цветов в {city.info}, который помогает быстро и удобно
            заказать букет для любого повода. Мы используем только свежие цветы
            и тщательно проверяем каждый заказ перед отправкой.
          </p>

          <p>
            Наша цель — сделать процесс заказа максимально простым,
            а доставку — быстрой и надёжной.
          </p>
        </section>

        {/* CTA */}
        <section className={styles.cta}>
          <h3>Готовы заказать букет?</h3>

          <a href={`/${city.slug}/catalog`} className={styles.button}>
            Перейти в каталог →
          </a>
        </section>

      </main>
    </>
  );
}