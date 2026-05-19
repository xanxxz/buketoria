import styles from '../../contacts/Contacts.module.css';
import {
  FiPhone,
  FiMessageCircle,
  FiMapPin,
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
    title: `Контакты — доставка цветов в ${cityName} | Букетория`,
    description: `Свяжитесь с нами для заказа доставки цветов в ${cityName}. Телефон, Telegram, быстрый ответ 5 минут.`,

    alternates: {
      canonical: `/${params.city}/contacts`,
    },

    openGraph: {
      title: `Контакты доставки цветов в ${cityName}`,
      description: `Связь с сервисом доставки цветов в ${cityName}`,
      type: 'website',
      locale: 'ru_RU',
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function ContactsPage({
  params,
}: {
  params: { city: string };
}) {
  const city = await prisma.city.findUnique({
    where: { slug: params.city },
  });

  if (!city) return null;

  const cityName = city.name;
  const prefix = `/${city.slug}`;

  return (
    <>
      {/* 🔥 STRUCTURED DATA (LOCAL BUSINESS SEO BOOST) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Florist',
            name: 'Букетория',
            areaServed: cityName,
            description: `Контакты доставки цветов в ${cityName}`,
          }),
        }}
      />

      <main className={styles.page}>

        {/* 🔥 H1 */}
        <h1 className={styles.title}>
          Контакты — доставка цветов в {city.info}
        </h1>

        {/* SEO TEXT */}
        <section className={styles.card}>
          <p>
            Заказать доставку цветов в {city.info} можно по телефону или через Telegram.
            Мы отвечаем в течение нескольких минут и помогаем подобрать букет для любого повода.
          </p>
        </section>

        {/* QUICK ACTIONS */}
        <section className={styles.quickActions}>
          <a href="tel:+79289114969">
            <FiPhone />
            <span>Позвонить</span>
          </a>

          <a
            href="https://t.me/buket_oriaonline"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiMessageCircle />
            <span>Написать</span>
          </a>
        </section>

        {/* INFO GRID */}
        <section className={styles.grid}>

          <article className={styles.card}>
            <FiPhone className={styles.icon} />
            <h2>Телефон доставки цветов</h2>
            <p>+7 (928) 911-49-69</p>
          </article>

          <article className={styles.card}>
            <FiMapPin className={styles.icon} />
            <h2>Доставка цветов</h2>
            <p>Доставка цветов в {cityName}</p>
            <span className={styles.sub}>
              Работаем через локальных флористов
            </span>
          </article>

          <article className={styles.card}>
            <FiClock className={styles.icon} />
            <h2>Режим работы</h2>
            <p>Ежедневно 09:00 – 22:00</p>
            <span className={styles.sub}>
              Ответ в течение 5 минут
            </span>
          </article>

        {/* SEO BLOCK */}
          <section className={styles.card}>
            <h2>Контакты доставки цветов в {city.info}</h2>

            <p>
              Вы можете связаться с нами для заказа доставки цветов в {city.info}.
              Мы поможем выбрать букет, уточнить стоимость и оформить быструю доставку.
            </p>

            <p>
              Доставка осуществляется ежедневно. Мы работаем с проверенными флористами
              и гарантируем свежесть каждого букета.
            </p>
          </section>

        </section>

        {/* NOTE */}
        <section className={styles.note}>
          💬 Укажите удобный способ связи — менеджер свяжется с вами в течение 5 минут
        </section>

        {/* CTA */}
        <section className={styles.cta}>
          <a href={`${prefix}/catalog`}>
            Перейти в каталог →
          </a>
        </section>

      </main>
    </>
  );
}