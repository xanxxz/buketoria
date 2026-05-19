import { CityBanner } from '@/components/CityBanner/CityBanner';
import CustomBouquet from '@/components/CustomBouquet/CustomBouquet';
import Hero from '@/components/Hero/Hero';
import { HowItWorks } from '@/components/HowItWorks/HowItWorks';
import { Occasions } from '@/components/Occasions/Occasions';
import { PopularServer } from '@/components/Popular/PopularServer';
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

  if (!city) {
    return {
      title: 'Доставка цветов по России',
      description:
        'Быстрая доставка цветов и букетов по России от 30 минут',
    };
  }

  return {
    title:
      `Доставка цветов в ${city.name} — букеты от 30 минут | Букетория`,

    description:
      `Закажите свежие цветы и букеты с доставкой в ${city.name}. Розы, тюльпаны, пионы и авторские композиции от 30 минут.`,

    alternates: {
      canonical: `/${city.slug}`,
    },

    openGraph: {
      title: `Доставка цветов в ${city.name}`,
      description:
        `Свежие букеты с доставкой в ${city.name} от 30 минут.`,
      type: 'website',
      locale: 'ru_RU',
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function CityPage({
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
      {/* 🔥 CITY SCHEMA (LOCAL SEO BOOST) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',

            '@type': 'Florist',

            name: 'Букетория',

            areaServed: city.name,

            url: `https://e-buketoria.ru/${city.slug}`,

            description:
              `Доставка цветов и букетов в ${city.name} от 30 минут`,
          }),
        }}
      />

      <main className="cityMain">
        {/* HERO (main keyword landing) */}
        <Hero city={city} />

        {/* TRUST / INFO */}
        <section aria-label="Информация о доставке цветов">
          <CityBanner />
        </section>

        {/* POPULAR */}
        <section aria-label="Популярные букеты в городе">
          <PopularServer city={city}/>
        </section>

        {/* OCCASIONS SEO */}
        <section aria-label="Букеты по поводам">
          <Occasions city={city} />
        </section>

        {/* CUSTOM SERVICE */}
        <section aria-label="Индивидуальные букеты">
          <CustomBouquet city={city} />
        </section>

        {/* HOW IT WORKS */}
        <section aria-label="Как работает доставка">
          <HowItWorks />
        </section>
      </main>
    </>
  );
}