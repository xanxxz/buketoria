import styles from '../../delivery/Delivery.module.css';
import {
  FiTruck,
  FiClock,
  FiCreditCard,
  FiMapPin,
  FiPhone,
  FiMessageCircle,
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
    title:
      `Доставка цветов в ${cityName} — условия и оплата | Букетория`,

    description:
      `Быстрая доставка цветов в ${cityName} от 30 минут. Удобная оплата, свежие букеты и гарантия качества.`,

    alternates: {
      canonical: `/${params.city}/delivery`,
    },

    openGraph: {
      title: `Доставка цветов в ${cityName}`,
      description:
        `Условия доставки и оплаты цветов в ${cityName}.`,
      type: 'website',
      locale: 'ru_RU',
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function DeliveryPage({
  params,
}: {
  params: { city: string };
}) {
  const city = await prisma.city.findUnique({
    where: { slug: params.city },
  });

  if (!city) return null;

  const faq = [
    {
      q: 'Сколько занимает доставка цветов?',
      a: `Обычно от 30 минут до 2 часов в ${city.info}. Также можно выбрать точное время доставки.`,
    },
    {
      q: 'Можно ли доставить цветы анонимно?',
      a: 'Да, просто укажите это в комментарии к заказу.',
    },
    {
      q: 'Что если цветов нет в наличии?',
      a: 'Мы согласуем замену с вами и сохраним стиль букета.',
    },
  ];

  return (
    <>
      {/* 🔥 STRUCTURED DATA (VERY IMPORTANT FOR LOCAL SEO) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',

            '@type': 'Service',

            name: 'Доставка цветов',

            provider: {
              '@type': 'Florist',
              name: 'Букетория',
            },

            areaServed: city.name,

            description:
              `Доставка цветов и букетов в ${city.name} от 30 минут`,
          }),
        }}
      />

      <main className={styles.page}>
        {/* 🔥 SEO H1 */}
        <h1 className={styles.title}>
          Доставка цветов в {city.info} — оплата и условия
        </h1>

        {/* DELIVERY */}
        <section className={styles.grid} aria-label="Условия доставки цветов">

          <article className={styles.card}>
            <FiTruck className={styles.icon} />
            <h2>Быстрая доставка цветов</h2>
            <p>От 30 минут до 2 часов в {city.info}</p>
          </article>

          <article className={styles.card}>
            <FiClock className={styles.icon} />
            <h2>Выбор времени доставки</h2>
            <p>Можно указать точное время доставки</p>
          </article>

          <article className={styles.card}>
            <FiMapPin className={styles.icon} />
            <h2>Доставка по любому адресу</h2>
            <p>Дом, офис, ресторан или кафе в {city.info}</p>
          </article>

        </section>

        {/* PAYMENT */}
        <section className={styles.grid} aria-label="Способы оплаты">

          <article className={styles.card}>
            <FiCreditCard className={styles.icon} />
            <h2>Онлайн оплата</h2>
            <p>QR-код или переводом</p>
          </article>

          <article className={styles.card}>
            <FiTruck className={styles.icon} />
            <h2>Оплата на сайте</h2>
            <p>Любым удобным способом</p>
          </article>

        </section>

        {/* INFO BLOCK */}
        <section className={styles.infoBox}>
          💬 Перед доставкой менеджер свяжется с вами для подтверждения заказа
        </section>

        {/* FAQ (SEO BOOST SECTION) */}
        <section aria-label="Частые вопросы о доставке">
          <h2 className={styles.subtitle}>Частые вопросы</h2>

          <div className={styles.faq}>
            {faq.map((item, i) => (
              <div key={i} className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>{item.q}</h3>
                <p className={styles.faqAnswer}>{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section className={styles.contact}>
          <h2>Остались вопросы?</h2>

          <div className={styles.contactBtns}>
            <a href="tel:+79289114969">
              <FiPhone />
              Позвонить
            </a>

            <a
              href="https://t.me/buket_oriaonline"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiMessageCircle />
              Написать
            </a>
          </div>
        </section>
      </main>
    </>
  );
}