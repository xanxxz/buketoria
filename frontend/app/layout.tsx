import { Footer } from '@/components/Footer/Footer';
import { Header } from '@/components/Header/Header';
import '@/styles/globals.css';

import type { Metadata } from 'next';
import { Toaster } from 'react-hot-toast';

export const metadata: Metadata = {
  metadataBase: new URL('https://e-buketoria.ru/'),

  title: {
    default: 'Букетория — доставка цветов по всей России',
    template: '%s | Букетория',
  },

  icons: {
    icon: [
      { url: '/favicon.ico' }, // 🥇 обязательно
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
    shortcut: '/favicon.ico',
  },

  manifest: '/site.webmanifest',

  description:
    'Букетория — доставка свежих цветов и букетов по всей России от 30 минут. Розы, тюльпаны, пионы и авторские композиции с фото перед отправкой.',

  keywords: [
    'букетория',
    'доставка цветов',
    'цветы с доставкой',
    'букеты',
    'заказать букет',
    'купить цветы',
    'доставка букетов',
    'цветочный магазин',
    'розы с доставкой',
    'срочная доставка цветов',
  ],

  applicationName: 'Букетория',

  authors: [{ name: 'Букетория' }],

  creator: 'Букетория',
  publisher: 'Букетория',

  formatDetection: {
    email: false,
    address: false,
    telephone: true,
  },

  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: 'https://e-buketoria.ru/',
    siteName: 'Букетория',

    title: 'Букетория — доставка цветов по России от 30 минут',
    description:
      'Свежие букеты, розы и авторские композиции с доставкой по всей России.',

    images: [
      {
        url: '/og.jpg',
        width: 1200,
        height: 630,
        alt: 'Букетория — доставка цветов',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Букетория — доставка цветов по России',
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
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  alternates: {
    canonical: 'https://e-buketoria.ru/',
  },

  category: 'flowers',

  // 🔥 усиление доверия (E-E-A-T)
  verification: {
    // сюда потом можно добавить:
    google: "MyqtdculAr2zIrOlQSl3-oFIQMW_shMdJ4wrStcV_3I",
    yandex: '98f75ecdfb68451b',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <head>
        {/* 🔥 Structured Data (главный SEO сигнал сайта) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',

              '@type': 'Florist',

              name: 'Букетория',

              url: 'https://e-buketoria.ru/',

              logo: 'https://e-buketoria.ru/logo.png',

              areaServed: 'Россия',

              description:
                'Доставка свежих цветов и букетов по всей России от 30 минут',

              sameAs: [
                'https://t.me/buket_oriaonline',
              ],
            }),
          }}
          
        />
      </head>

      <body>
        <Header />

        <main className="app">{children}</main>

        <Toaster position="top-right" />

        <Footer />
      </body>
    </html>
  );
}