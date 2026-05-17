import Link from 'next/link';
import styles from './CustomBouquet.module.css';
import Image from 'next/image';
import { City } from '@/types/city';

export default function CustomBouquet({
    city,
  }: {
    city: City | null;
  }) {
  const prefix = city ? `/${city.slug}` : '';

  return (
    <section className={styles.box}>
      <div className={styles.content}>
        <h3>Соберите свой уникальный букет</h3>

        <p>
          Наши флористы помогут собрать композицию вручную, учитывая каждый
          ваш запрос.
        </p>

        <Link href={`${prefix}/custom-bouquet`} className={styles.link}>
          Собрать букет
        </Link>

        <span className={styles.note}>
          Доступно только через менеджера
        </span>
      </div>

      <div className={styles.image}>
        <Image
          src="/img/buket.png"
          alt="Букетория"
          priority
          quality={100}
          fill
          className={styles.img}
        />
      </div>
    </section>
  );
};