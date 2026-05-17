import styles from '../../custom-bouquet/CustomBouquet.module.css';
import { FiPhone, FiMessageCircle } from 'react-icons/fi';
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
    title:
      `Индивидуальные букеты на заказ в ${cityName} | Букетория`,

    description:
      `Собираем индивидуальные букеты в ${cityName} вручную под ваш бюджет и повод. Быстрая доставка цветов от 30 минут.`,

    alternates: {
      canonical: `/${params.city}/custom-bouquet`,
    },

    openGraph: {
      title: `Индивидуальные букеты в ${cityName}`,
      description:
        `Авторские букеты на заказ с доставкой в ${cityName}.`,
      type: 'website',
      locale: 'ru_RU',
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function CustomBouquetPage({
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
      {/* 🔥 STRUCTURED DATA (VERY STRONG FOR COMMERCIAL SEO) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',

            '@type': 'Service',

            name: 'Индивидуальные букеты',

            provider: {
              '@type': 'Florist',
              name: 'Букетория',
            },

            areaServed: city.name,

            description:
              `Индивидуальные букеты на заказ в ${city.name}`,
          }),
        }}
      />

      <main className={styles.page}>
        {/* 🔥 SEO H1 */}
        <h1 className={styles.title}>
          Индивидуальные букеты на заказ в {city.info}
        </h1>

        {/* subtitle */}
        <p className={styles.subtitle}>
          Индивидуальные букеты в {city.info} создаются вручную флористом под
          ваш вкус, повод и бюджет с доставкой по городу.
        </p>

        {/* SEO BLOCK */}
        <section className={styles.card}>
          <h2>Как заказать индивидуальный букет в {city.info}</h2>

          <ul>
            <li>Вы связываетесь с нами удобным способом</li>
            <li>Флорист уточняет пожелания и бюджет</li>
            <li>Мы предлагаем варианты композиции</li>
            <li>Собираем уникальный букет под заказ</li>
          </ul>

          <p>
            Индивидуальные букеты позволяют создать уникальную цветочную
            композицию для любого события: дня рождения, свадьбы или
            романтического повода.
          </p>
        </section>

        {/* NOTICE */}
        <section className={styles.notice}>
          💬 Индивидуальные букеты не оформляются через корзину —
          заказ осуществляется только через связь с флористом
        </section>

        {/* CONTACT */}
        <section className={styles.actions}>
          <a href="https://t.me/buket_oriaonline" className={styles.btn}>
            <FiMessageCircle size={18} />
            Написать
          </a>

          <a href="tel:+79289114969" className={styles.btn}>
            <FiPhone size={18} />
            Позвонить
          </a>
        </section>

        {/* SEO FOOTER TEXT */}
        <section className={styles.footer}>
          <p>
            Закажите индивидуальный букет в {city.info} — мы поможем создать
            идеальную композицию под любой случай 🌸
          </p>
        </section>
      </main>
    </>
  );
}