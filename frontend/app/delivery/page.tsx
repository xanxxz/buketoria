import styles from './Delivery.module.css';

import {
  FiTruck,
  FiClock,
  FiCreditCard,
  FiMapPin,
  FiPhone,
  FiMessageCircle,
} from 'react-icons/fi';

import type { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {

  const cityName = 'России';

  return {
    title: `Доставка цветов в ${cityName} — условия доставки и оплата`,

    description: `Быстрая доставка цветов в ${cityName} от 30 минут. Онлайн оплата, свежие букеты, фото перед отправкой и гарантия качества.`,

    keywords: [
      `доставка цветов ${cityName}`,
      `цветы с доставкой ${cityName}`,
      'доставка букетов',
      'оплата цветов онлайн',
      'свежие цветы',
      'заказать букет',
      'доставка цветов',
      'доставка букетов по России',
    ],

    alternates: {
      canonical: `/delivery`,
    },

    openGraph: {
      title: `Доставка цветов в ${cityName}`,

      description:
        'Быстрая доставка букетов и онлайн оплата.',

      type: 'website',
      locale: 'ru_RU',
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function DeliveryPage() {
  const faq = [
    {
      q: 'Сколько занимает доставка?',
      a: 'Обычно от 30 минут до 2 часов. Также можно выбрать точное время доставки.',
    },

    {
      q: 'Можно ли доставить анонимно?',
      a: 'Да, просто укажите это в комментарии к заказу.',
    },

    {
      q: 'Что если цветов нет в наличии?',
      a: 'Мы согласуем замену с вами и сохраним стиль букета.',
    },
  ];

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',

            '@type': 'FAQPage',

            mainEntity: faq.map((item) => ({
              '@type': 'Question',

              name: item.q,

              acceptedAnswer: {
                '@type': 'Answer',
                text: item.a,
              },
            })),
          }),
        }}
      />

      <main className={styles.page}>
        <h1 className={styles.title}>
          Доставка и оплата цветов
        </h1>

        <p className={styles.subtitleText}>
          Свежие букеты с быстрой доставкой,
          удобной оплатой и поддержкой клиентов
          24/7.
        </p>

        {/* DELIVERY */}
        <section
          className={styles.grid}
          aria-label="Условия доставки"
        >
          <article className={styles.card}>
            <FiTruck className={styles.icon} />

            <h2>Быстрая доставка</h2>

            <p>
              От 30 минут до 2 часов по городу
            </p>
          </article>

          <article className={styles.card}>
            <FiClock className={styles.icon} />

            <h2>Выбор времени</h2>

            <p>
              Можно указать точное время доставки
            </p>
          </article>

          <article className={styles.card}>
            <FiMapPin className={styles.icon} />

            <h2>Любое место</h2>

            <p>
              Дом, офис, ресторан или кафе
            </p>
          </article>
        </section>

        {/* PAYMENT */}
        <section
          className={styles.grid}
          aria-label="Способы оплаты"
        >
          <article className={styles.card}>
            <FiCreditCard className={styles.icon} />

            <h2>Онлайн оплата</h2>

            <p>QR-код или перевод</p>
          </article>

          <article className={styles.card}>
            <FiTruck className={styles.icon} />

            <h2>Оплата на сайте</h2>

            <p>
              Оплата любым удобным способом
            </p>
          </article>
        </section>

        {/* INFO */}
        <section
          className={styles.infoBox}
          aria-label="Подтверждение заказа"
        >
          <p>
            💬 Перед доставкой менеджер свяжется
            с вами для подтверждения заказа.
          </p>
        </section>

        {/* FAQ */}
        <section
          aria-label="Частые вопросы"
        >
          <h2 className={styles.subtitle}>
            Частые вопросы
          </h2>

          <div className={styles.faq}>
            {faq.map((item, i) => (
              <article
                key={i}
                className={styles.faqItem}
              >
                <button
                  className={styles.faqQuestion}
                >
                  {item.q}
                </button>

                <div className={styles.faqAnswer}>
                  {item.a}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section
          className={styles.contact}
          aria-label="Контакты"
        >
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