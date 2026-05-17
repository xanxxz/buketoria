'use client';

import Image from 'next/image';
import Link from 'next/link';
import styles from './Footer.module.css';
import { useParams } from 'next/navigation';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const params = useParams();
  const city = params?.city;

  const prefix = city ? `/${city}` : '';

  const footerLinks = [
    {
      title: 'Доставка и оплата',
      links: [
        { href: `${prefix}/delivery`, label: 'Доставка и оплата' },
        { href: `${prefix}/returns`, label: 'Гарантии и возврат' },
      ],
    },
    {
      title: 'О нас',
      links: [
        { href: `${prefix}/about`, label: 'О нас' },
        { href: `${prefix}/contacts`, label: 'Контакты' },
      ],
    },
    {
      title: 'Политика',
      links: [
        { href: `${prefix}/privacy`, label: 'Политика конфиденциальности' },
      ],
    },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>

        {/* TOP */}
        <div className={styles.top}>
          <div className={styles.logo}>Букетория</div>

          <div className={styles.social}>
            <a 
              className={styles.socialLink}
              href="https://t.me/buket_oriaonline"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegram"
            >
              <Image
                src="/img/tg.png"
                alt="Telegram"
                priority
                quality={100}
                fill
                className={styles.tgIcon}
              />
            </a>
            <a
              className={styles.socialLink}
              href="https://vk.com/your_page"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Vkontakte"
            >
              <Image
                src="/img/vk.png"
                alt="Vkontakte"
                priority
                quality={100}
                fill
                className={styles.tgIcon}
              />
            </a>
            <a
              className={styles.socialLink}
              href="tel:+79289114969"
              aria-label="Позвонить"
            >
              <Image
                src="/img/phone.png"
                alt="Phone"
                priority
                quality={100}
                fill
                className={styles.tgIcon}
              />
            </a>
          </div>
        </div>

        {/* GRID */}
        <div className={styles.grid}>
          {footerLinks.map((column) => (
            <div key={column.title}>
              <ul className={styles.list}>
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className={styles.link}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* BOTTOM */}
        <div className={styles.bottom}>
          © {currentYear} Букетория. Все права защищены.
        </div>

      </div>
    </footer>
  );
};