'use client';

import { useEffect, useState } from 'react';
import { FiMapPin, FiCamera, FiTruck } from 'react-icons/fi';
import styles from './Header.module.css';

const banners = [
  {
    text: 'Флористы в 1000+ городах России',
    icon: <FiMapPin />,
  },
  {
    text: 'Фото букета перед доставкой',
    icon: <FiCamera />,
  },
  {
    text: 'Доставка по всей России от 30 минут',
    icon: <FiTruck />,
  },
];

export const TopBanner = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<'in' | 'out'>('in');

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection('out');

      setTimeout(() => {
        setIndex((prev) => (prev + 1) % banners.length);
        setDirection('in');
      }, 250);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  const current = banners[index];

  return (
    <div className={styles.banner}>
      <div
        className={`${styles.bannerInner} ${
          direction === 'in' ? styles.slideIn : styles.slideOut
        }`}
      >
        <span className={styles.icon}>{current.icon}</span>
        <span className={styles.text}>{current.text}</span>
      </div>
    </div>
  );
};