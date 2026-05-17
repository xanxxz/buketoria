import styles from './Contacts.module.css';

import {
  FiPhone,
  FiMessageCircle,
  FiMapPin,
  FiClock,
} from 'react-icons/fi';

import type { Metadata } from 'next';


export async function generateMetadata(): Promise<Metadata> {

  const cityName = 'России';

  return {
    title: `Контакты — доставка цветов ${cityName} | Букетория`,

    description:
      `Свяжитесь с Букетория для заказа цветов в ${cityName}. Быстрый ответ за 5 минут, доставка от 30 минут, Telegram и телефон.`,

    alternates: {
      canonical: `/contacts`,
    },

    openGraph: {
      title: `Контакты Букетория`,
      description:
        'Связь с сервисом доставки цветов по России. Ответ в течение 5 минут.',
      type: 'website',
      locale: 'ru_RU',
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function ContactsPage() {
  return (
    <>
      {/* 🔥 LOCAL BUSINESS SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',

            '@type': 'Florist',

            name: 'Букетория',

            telephone: '+7 (928) 911-49-69',

            areaServed: 'Россия',

            url: 'https://your-domain.ru',

            contactPoint: [
              {
                '@type': 'ContactPoint',
                telephone: '+7 (928) 911-49-69',
                contactType: 'customer support',
                availableLanguage: 'Russian',
              },
            ],
          }),
        }}
      />

      <main className={styles.page}>
        <h1 className={styles.title}>
          Контакты Букетория
        </h1>

        {/* 🔥 quick actions */}
        <section
          className={styles.quickActions}
          aria-label="Быстрая связь"
        >
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
        <section
          className={styles.grid}
          aria-label="Контактная информация"
        >
          <article className={styles.card}>
            <FiPhone className={styles.icon} />
            <h2>Телефон</h2>
            <p>+7 (928) 911-49-69</p>
          </article>

          <article className={styles.card}>
            <FiMapPin className={styles.icon} />
            <h2>География доставки</h2>
            <p>Доставка цветов по всей России</p>
            <span className={styles.sub}>
              Работаем через сеть локальных флористов
            </span>
          </article>

          <article className={styles.card}>
            <FiClock className={styles.icon} />
            <h2>Режим работы</h2>
            <p>Ежедневно 09:00 – 22:00</p>
            <span className={styles.sub}>
              Ответ в течение нескольких минут
            </span>
          </article>
        </section>

        {/* TRUST NOTE */}
        <section
          className={styles.note}
          aria-label="Информация о поддержке"
        >
          💬 Укажите удобный способ связи —
          менеджер свяжется с вами в течение
          5 минут
        </section>
      </main>
    </>
  );
}