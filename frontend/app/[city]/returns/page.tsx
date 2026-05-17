import styles from '../../returns/Returns.module.css';
import {
  FiShield,
  FiRefreshCw,
  FiAlertCircle,
  FiCheckCircle
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

  const cityName = city?.name || 'России';

  return {
    title:
      `Гарантии и возврат цветов в ${cityName} | Доставка от 30 минут`,

    description:
      `Гарантии качества и возврат при доставке цветов в ${cityName}. Свежие букеты, замена при необходимости и защита клиента.`,

    alternates: {
      canonical: `/${params.city}/returns`,
    },

    openGraph: {
      title: `Гарантии доставки цветов в ${cityName}`,
      description:
        `Возврат и гарантия качества букетов в ${cityName}.`,
      type: 'website',
      locale: 'ru_RU',
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function ReturnsPage({
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
      {/* 🔥 STRUCTURED DATA (TRUST + LOCAL SEO) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',

            '@type': 'Service',

            name: 'Гарантии и возврат цветов',

            provider: {
              '@type': 'Florist',
              name: 'Букетория',
            },

            areaServed: city.name,

            description:
              `Гарантии и возврат при доставке цветов в ${city.name}`,
          }),
        }}
      />

      <main className={styles.page}>
        {/* 🔥 SEO H1 */}
        <h1 className={styles.title}>
          Гарантии и возврат при доставке цветов в {city.info}
        </h1>

        {/* BLOCKS */}
        <section className={styles.grid} aria-label="Гарантии сервиса">

          <article className={styles.card}>
            <FiShield className={styles.icon} />
            <h2>Гарантия качества цветов</h2>
            <p>
              Мы используем только свежие цветы и проверяем каждый букет перед
              доставкой в {city.info}.
            </p>
          </article>

          <article className={styles.card}>
            <FiCheckCircle className={styles.icon} />
            <h2>Соответствие заказу</h2>
            <p>
              Букет собирается максимально близко к фото и стилю, указанному
              на сайте.
            </p>
          </article>

          <article className={styles.card}>
            <FiRefreshCw className={styles.icon} />
            <h2>Замена букета</h2>
            <p>
              Если цветы отсутствуют — мы согласуем замену или соберём
              аналогичный букет с доставкой в {city.info}.
            </p>
          </article>

          <article className={styles.card}>
            <FiAlertCircle className={styles.icon} />
            <h2>Возврат средств</h2>
            <p>
              Возврат возможен, если заказ не соответствует согласованным
              условиям доставки цветов.
            </p>
          </article>

          {/* 🔥 SEO BLOCK */}
          <article className={styles.card}>
            <h2>Гарантии при доставке цветов в {city.info}</h2>

            <p>
              Мы гарантируем качество каждого букета. Все цветы проходят
              проверку перед отправкой, чтобы вы получили свежую композицию
              в {city.info}.
            </p>

            <h3>Когда возможен возврат</h3>
            <p>
              Если букет не соответствует заказу или был повреждён при доставке,
              мы предложим замену или возврат средств.
            </p>
          </article>
        </section>

        {/* TRUST BLOCK */}
        <section className={styles.infoBox}>
          💬 Если у вас возникла проблема — просто напишите нам.
          Мы всегда решаем вопросы в пользу клиента.
        </section>

        {/* CONTACT */}
        <section className={styles.contact}>
          <h2>Связаться с Букетория</h2>

          <div className={styles.contactBtns}>
            <a href="tel:+79289114969">Позвонить</a>
            <a
              href="https://t.me/buket_oriaonline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Telegram
            </a>
          </div>
        </section>
      </main>
    </>
  );
}