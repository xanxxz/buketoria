import type { Metadata } from 'next';
import styles from './Home.module.css';

import Hero from '@/components/Hero/Hero';
import { CityBanner } from '@/components/CityBanner/CityBanner';
import { Occasions } from '@/components/Occasions/Occasions';
import CustomBouquet from '@/components/CustomBouquet/CustomBouquet';
import { HowItWorks } from '@/components/HowItWorks/HowItWorks';
import { PopularServer } from '@/components/Popular/PopularServer';

export const metadata: Metadata = {
  title:
    'Доставка цветов по России — букеты с доставкой от 30 минут | Букетория',

  description:
    'Быстрая доставка цветов и букетов по всей России от 30 минут. Розы, тюльпаны, пионы и авторские композиции с фото перед отправкой и гарантией качества.',

  keywords: [
    'доставка цветов',
    'букеты с доставкой',
    'заказать букет',
    'цветы Россия',
    'доставка букетов',
    'купить цветы онлайн',
    'розы с доставкой',
    'цветочный магазин',
    'букет на заказ',
    'срочная доставка цветов',
  ],

  alternates: {
    canonical: '/',
  },

  openGraph: {
    title:
      'Доставка цветов по России — от 30 минут',

    description:
      'Свежие букеты, розы и авторские композиции с быстрой доставкой по всей России.',

    type: 'website',
    locale: 'ru_RU',
    siteName: 'Букетория',

    images: [
      {
        url: '/og.jpg',
        width: 1200,
        height: 630,
        alt: 'Доставка цветов Букетория',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title:
      'Букетория — доставка цветов по России',

    description:
      'Свежие букеты с доставкой от 30 минут.',

    images: ['/og.jpg'],
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function HomePage() {
  return (
    <>
      {/* 🔥 STRUCTURED DATA (CRITICAL FOR SEO) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',

            '@type': 'Florist',

            name: 'Букетория',

            url: 'https://букетория.рф',

            areaServed: 'Россия',

            description:
              'Доставка свежих цветов и букетов по всей России от 30 минут',

            potentialAction: {
              '@type': 'OrderAction',
              target: 'https://букетория.рф/catalog',
            },
          }),
        }}
      />

      <main className={styles.page}>
        {/* 🔥 MAIN H1 */}
        <h1 className={styles.seoTitle}>
          Доставка цветов и букетов по всей России
        </h1>

        {/* HERO (LCP ELEMENT) */}
        <Hero city={null} />

        {/* DELIVERY INFO */}
        <section aria-label="Информация о доставке цветов">
          <CityBanner />
        </section>

        {/* POPULAR PRODUCTS */}
        <section aria-label="Популярные букеты">
          <PopularServer city={null}/>
        </section>

        {/* OCCASIONS SEO */}
        <section aria-label="Букеты по поводам">
          <Occasions city={null} />
        </section>

        {/* CUSTOM SERVICE */}
        <section aria-label="Индивидуальные букеты">
          <CustomBouquet city={null} />
        </section>

        {/* HOW IT WORKS */}
        <section aria-label="Как работает доставка">
          <HowItWorks />
        </section>
      </main>
    </>
  );
}