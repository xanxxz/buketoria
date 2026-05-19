import styles from './About.module.css';

import {
  FiHeart,
  FiTruck,
  FiUsers,
  FiClock,
} from 'react-icons/fi';

import type { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {

  const cityName = 'России';

  return {
    title: `О нас — доставка цветов по ${cityName} | Букетория`,

    description:
      `Сервис доставки цветов в ${cityName}. Свежие букеты, ручная сборка, быстрая доставка и забота о клиентах.`,

    alternates: {
      canonical: `/about`,
    },

    openGraph: {
      title: 'О сервисе доставки цветов Букетория',
      description:
        'Мы создаём букеты с душой и доставляем цветы по всей России.',
      type: 'website',
      locale: 'ru_RU',
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function AboutPage() {
  return (
    <>
      {/* 🔥 STRUCTURED DATA (E-E-A-T BOOST) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',

            '@type': 'AboutPage',

            name: 'О Букетория',

            description:
              'Сервис доставки цветов по России с ручной сборкой букетов и быстрой доставкой',

            mainEntity: {
              '@type': 'Florist',
              name: 'Букетория',
              areaServed: 'Россия',
            },
          }),
        }}
      />

      <main className={styles.page}>
        <h1 className={styles.title}>
          О сервисе доставки цветов
        </h1>

        {/* HERO */}
        <section className={styles.hero}>
          <p>
            Мы создаём букеты, которые вызывают эмоции.
            Каждый заказ собирается вручную с вниманием к деталям.
          </p>
        </section>

        {/* FEATURES */}
        <section className={styles.grid} aria-label="Преимущества сервиса">
          <article className={styles.card}>
            <FiHeart className={styles.icon} />
            <h2>С душой</h2>
            <p>Каждый букет собирается вручную флористом</p>
          </article>

          <article className={styles.card}>
            <FiTruck className={styles.icon} />
            <h2>Быстро</h2>
            <p>Доставка от 30 минут до 2 часов по городу</p>
          </article>

          <article className={styles.card}>
            <FiUsers className={styles.icon} />
            <h2>Забота о клиентах</h2>
            <p>Поможем подобрать букет под любой повод</p>
          </article>

          <article className={styles.card}>
            <FiClock className={styles.icon} />
            <h2>Всегда на связи</h2>
            <p>Отвечаем в течение нескольких минут</p>
          </article>
        </section>

        {/* STORY */}
        <section className={styles.story}>
          <h2>Наша история</h2>

          <p>
            Мы начали с небольшого проекта и выросли в сервис доставки цветов,
            которому доверяют клиенты. Наша цель — сделать заказ букета
            максимально простым и приятным.
          </p>
        </section>

        {/* CTA */}
        <section className={styles.cta}>
          <h2 className={styles.ctaTitle}>Готовы заказать букет?</h2>

          <a href="/catalog" className={styles.button}>
            Перейти в каталог →
          </a>
        </section>
      </main>
    </>
  );
}