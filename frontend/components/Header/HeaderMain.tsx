'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { FiMapPin, FiChevronDown } from 'react-icons/fi';
import styles from './Header.module.css';
import { useRouter } from 'next/navigation';
import { useParams } from 'next/navigation';

type City = {
  id: string;
  name: string;
  slug: string;
};

export const HeaderMain = ({ cities }: { cities: City[] }) => {
  const [city, setCity] = useState<City | null>(null);
  const [open, setOpen] = useState(false);

  const wrapperRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const params = useParams();
  const cityLinkRaw = params?.city;

  const cityLink =
    typeof cityLinkRaw === 'string'
      ? cityLinkRaw
      : Array.isArray(cityLinkRaw)
      ? cityLinkRaw[0]
      : undefined;

  const prefix = city?.slug ? `/${city.slug}` : '';
  const isCitySelected = !!city;

  // 🔥 закрытие по клику вне
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () =>
      document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // 🌍 установка города из URL
  useEffect(() => {
    if (!cityLink || !cities?.length) return;

    const found = cities.find((c) => c.slug === cityLink);

    if (found) {
      setCity(found);
    } else {
      setCity({
        id: '',
        name: cityLink,
        slug: cityLink,
      });
    }
  }, [cityLink, cities]);

  const selectCity = (c: City) => {
    setCity(c);
    localStorage.setItem('city', JSON.stringify(c));
    setOpen(false);
    router.push(`/${c.slug}`);
  };

  return (
    <div className={styles.main}>
      {/* LOGO */}
      <Link href={prefix || '/'} className={styles.logo}>
        <div className={styles.logoBox}>
          <Image
            src="/img/logo.png"
            alt="Букетория"
            priority
            quality={100}
            sizes='100px'
            fill
            className={styles.logoImg}
          />
        </div>
      </Link>

      {/* CITY */}
      <div className={styles.cityWrapper} ref={wrapperRef}>
        <button
          className={styles.city}
          onClick={() => setOpen((v) => !v)}
        >
          <FiMapPin className={styles.iconMain} />
          <span className={styles.cityText}>
            {isCitySelected ? city.name : 'Выберите город'}
          </span>
          <FiChevronDown className={styles.iconSmall} />
        </button>

        {open && (
          <div className={styles.cityDropdown}>
            {cities.map((c) => (
              <button
                key={c.id}
                className={styles.cityItem}
                onClick={() => selectCity(c)}
              >
                {c.name}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};