import styles from './Returns.module.css';

import {
  FiShield,
  FiRefreshCw,
  FiAlertCircle,
  FiCheckCircle,
} from 'react-icons/fi';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title:
    'Гарантии и возврат цветов — доставка букетов по России',

  description:
    'Гарантии качества, замена букета и возврат средств при доставке цветов по всей России. Свежие цветы, фото перед отправкой и поддержка клиентов.',

  keywords: [
    'возврат цветов',
    'гарантия на цветы',
    'возврат букета',
    'доставка цветов гарантия',
    'замена букета',
    'свежие цветы',
    'возврат денег за букет',
    'доставка букетов',
  ],

  alternates: {
    canonical: '/returns',
  },

  openGraph: {
    title:
      'Гарантии и возврат — доставка цветов онлайн',

    description:
      'Гарантия свежести цветов, замена букета и возврат средств.',

    type: 'website',
    locale: 'ru_RU',
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function ReturnsPage() {
  return (
    <>
      {/* SEO Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',

            mainEntity: [
              {
                '@type': 'Question',
                name: 'Можно ли вернуть букет?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Возврат возможен, если заказ не соответствует согласованным условиям.',
                },
              },

              {
                '@type': 'Question',
                name: 'Что делать если цветы отличаются?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Мы согласуем замену цветов или соберём максимально похожий букет.',
                },
              },

              {
                '@type': 'Question',
                name: 'Есть ли гарантия свежести?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Мы используем только свежие цветы и проверяем каждый букет перед отправкой.',
                },
              },
            ],
          }),
        }}
      />

      <main className={styles.page}>
        <h1 className={styles.title}>
          Гарантии и возврат при доставке цветов
        </h1>

        <p className={styles.subtitle}>
          Мы гарантируем свежесть цветов, соответствие
          букета фотографии и поддержку клиентов на всех
          этапах доставки.
        </p>

        {/* BLOCKS */}
        <section
          className={styles.grid}
          aria-label="Гарантии доставки цветов"
        >
          <article className={styles.card}>
            <FiShield className={styles.icon} />

            <h2>Гарантия качества</h2>

            <p>
              Мы используем только свежие цветы и
              проверяем каждый букет перед отправкой.
            </p>
          </article>

          <article className={styles.card}>
            <FiCheckCircle className={styles.icon} />

            <h2>Соответствие заказу</h2>

            <p>
              Букет собирается максимально близко к фото
              и стилю, указанному на сайте.
            </p>
          </article>

          <article className={styles.card}>
            <FiRefreshCw className={styles.icon} />

            <h2>Замена букета</h2>

            <p>
              Если цветы отсутствуют — мы согласуем
              замену или соберём аналогичный букет.
            </p>
          </article>

          <article className={styles.card}>
            <FiAlertCircle className={styles.icon} />

            <h2>Возврат средств</h2>

            <p>
              Возврат возможен, если заказ не
              соответствует согласованным условиям.
            </p>
          </article>
        </section>

        {/* INFO */}
        <section
          className={styles.infoBox}
          aria-label="Поддержка клиентов"
        >
          <p>
            💬 Если у вас возникла проблема — просто
            напишите нам. Мы всегда стараемся решать
            вопросы в пользу клиента.
          </p>
        </section>

        {/* CONTACT */}
        <section
          className={styles.contact}
          aria-label="Контакты"
        >
          <h2>Связаться с нами</h2>

          <div className={styles.contactBtns}>
            <a href="tel:+79289114969">
              Позвонить
            </a>

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