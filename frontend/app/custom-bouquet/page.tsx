import styles from './CustomBouquet.module.css';
import { FiPhone, FiMessageCircle } from 'react-icons/fi';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title:
    'Индивидуальные букеты на заказ по всей России — флорист под ваш стиль',

  description:
    'Собираем индивидуальные букеты по России вручную. Учитываем бюджет, повод и пожелания. Быстрая доставка цветов.',

  keywords: [
    'индивидуальные букеты',
    'букет на заказ',
    'флорист на заказ',
    'авторские букеты',
    'собрать букет',
    'доставка цветов',
    'букеты по России',
  ],

  alternates: {
    canonical: '/custom-bouquet',
  },

  openGraph: {
    title: 'Индивидуальные букеты на заказ по всей России',
    description:
      'Авторские букеты вручную от флориста с доставкой по России.',
    type: 'website',
    locale: 'ru_RU',
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function CustomBouquetPage() {
  return (
    <>
      {/* 🔥 STRUCTURED DATA (SEO BOOST) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',

            '@type': 'Service',

            name: 'Индивидуальные букеты на заказ',

            provider: {
              '@type': 'Florist',
              name: 'Букетория',
            },

            areaServed: 'Россия',

            description:
              'Создание индивидуальных букетов вручную под стиль, бюджет и повод клиента.',
          }),
        }}
      />

      <main className={styles.page}>
        {/* 🔥 SEO H1 */}
        <h1 className={styles.title}>
          Индивидуальные букеты на заказ по всей России
        </h1>

        {/* subtitle SEO усиление */}
        <p className={styles.subtitle}>
          Индивидуальные букеты в России создаются вручную флористом под ваш вкус,
          повод и бюджет с доставкой по городу.
        </p>

        {/* SEO TEXT BLOCK */}
        <section
          className={styles.card}
          aria-label="Как заказать индивидуальный букет"
        >
          <h2>Как заказать индивидуальный букет</h2>

          <ul>
            <li>Вы связываетесь с нами удобным способом</li>
            <li>Флорист уточняет пожелания и бюджет</li>
            <li>Мы предлагаем варианты композиции</li>
            <li>Собираем уникальный букет под заказ</li>
          </ul>

          <p>
            Индивидуальные букеты позволяют создать уникальную цветочную композицию
            для любого события: дня рождения, свадьбы или романтического повода.
          </p>
        </section>

        {/* NOTICE */}
        <section
          className={styles.notice}
          aria-label="Информация о заказе"
        >
          💬 Индивидуальные букеты не оформляются через корзину —
          заказ осуществляется только через связь с флористом
        </section>

        {/* CONTACT */}
        <section className={styles.actions} aria-label="Контакты">
          <a
            href="https://t.me/buket_oriaonline"
            className={styles.btn}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiMessageCircle size={18} />
            Написать
          </a>

          <a href="tel:+79289114969" className={styles.btn}>
            <FiPhone size={18} />
            Позвонить
          </a>
        </section>

        {/* SEO FOOTER TEXT */}
        <section aria-label="Дополнительная информация">
          <p className={styles.footer}>
            Закажите индивидуальный букет — мы поможем создать идеальную композицию
            под любой случай 🌸
          </p>
        </section>
      </main>
    </>
  );
}