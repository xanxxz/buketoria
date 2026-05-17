import Image from 'next/image';
import {
  FiMapPin,
  FiGift,
  FiTruck,
  FiCamera,
  FiClock,
} from 'react-icons/fi';

import styles from './Hero.module.css';
import Link from 'next/link';

import { City } from '@/types/city';

export default function Hero({
  city,
}: {
  city: City | null;
}) {
  const prefix = city ? `/${city.slug}` : '';

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Florist',
            name: 'Flowers',
            areaServed: city ? city.name : 'Россия',
            description:
              'Доставка цветов и букетов от 30 минут',
          }),
        }}
      />

      <section className={styles.hero}>
        <Image
          src="/img/hero.jpg"
          alt={
            city
              ? `Свежие букеты с доставкой в ${city.info}`
              : 'Свежие букеты с доставкой по всей России'
          }
          fill
          priority
          quality={80}
          sizes="100vw"
          className={styles.bg}
        />

        <div className={styles.overlay} />

        <div className={styles.content}>
          <h1 className={styles.title}>
            Доставка цветов
            <br />
            {city ? `в ${city.info}` : 'по всей России'}
          </h1>

          <p className={styles.subtitle}>
            {city
              ? `Свежие букеты для важных моментов с доставкой от 30 минут в ${city.info}`
              : 'Свежие букеты для важных моментов с доставкой от 30 минут'}
          </p>

          <p className={styles.seoText}>
            Розы, пионы, тюльпаны и авторские композиции
            с круглосуточной доставкой.
          </p>

          <button className={styles.location}>
            <FiMapPin />
            <span>{city ? city.name : 'Выбрать город'}</span>
          </button>

          <div className={styles.actions}>
            <Link
              href={`${prefix}/catalog`}
              className={styles.primaryBtn}
            >
              <FiGift />
              Заказать букет
            </Link>

            <Link
              href={`${prefix}/custom-bouquet`}
              className={styles.secondaryBtn}
            >
              <FiGift />
              Собрать свой букет
            </Link>
          </div>
        </div>

        <div className={styles.features}>
          <div className={styles.featureItem}>
            <FiTruck />
            <span>Доставка по всей России</span>
          </div>

          <div className={styles.featureItem}>
            <FiCamera />
            <span>Фото букета перед отправкой</span>
          </div>

          <div className={styles.featureItem}>
            <FiClock />
            <span>Доставка от 30 минут</span>
          </div>
        </div>
      </section>
    </>
  );
}