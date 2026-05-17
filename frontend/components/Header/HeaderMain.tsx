'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { FiMapPin, FiChevronDown, FiUser } from 'react-icons/fi';
import styles from './Header.module.css';
import { useRouter } from 'next/navigation';
import { useParams } from 'next/navigation';
import { getCities } from '@/lib/api/cities';

export const HeaderMain = () => {
  type City = {
    id: string;
    name: string;
    slug: string;
  };

  const [city, setCity] = useState<City | null>(null);
  const [cities, setCities] = useState<City[]>([]);
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
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

  const fetchCities = async () => {
    const res = await getCities();
    return res;
  };

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

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // 🌍 геолокация
  useEffect(() => {
    if (!cityLink) {
      setCity(null);
      return;
    }

    fetchCities().then((cities: City[]) => {
      const found = cities.find((c) => c.slug === cityLink);

      if (found) {
        setCity(found); // ✅ норм name
      } else {
        setCity({
          id: '',
          name: cityLink, // fallback
          slug: cityLink,
        });
      }
    });
  }, [cityLink]);

  useEffect(() => {
    getCities()
      .then((data) => {
        console.log('CITIES RESPONSE:', data);
        setCities(data);
      })
      .catch((e) => console.log('CITIES ERROR:', e));
  }, []);

  const openCitySelect = (e: React.MouseEvent) => {
    e.stopPropagation();
    setOpen(v => !v);
  };
  
  const router = useRouter();

  const selectCity = (c: City) => {
    setCity(c);

    // сохраняем slug + name
    localStorage.setItem('city', JSON.stringify(c));

    setOpen(false);

    // 🔥 ГЛАВНОЕ — переход
    router.push(`/${c.slug}`);
  };

  return (
    <div className={styles.main}>
      
      {/* LOGO */}
      <Link href={`${prefix}/`} className={styles.logo}>
        <div className={styles.logoBox}>
          <Image
            src="/img/logo.png"
            alt="Букетория"
            priority
            quality={100}
            fill
            className={styles.logoImg}
          />
        </div>
      </Link>

      {/* CITY */}
      <div className={styles.cityWrapper} ref={wrapperRef}>
        <button  
          className={styles.city}   
          onClick={(e) => {
            e.stopPropagation();
            setOpen(v => !v);
          }}
        >
          <FiMapPin className={styles.iconMain} />
          <span className={styles.cityText}>{isCitySelected ? city.name : 'Выберите город'}</span>
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