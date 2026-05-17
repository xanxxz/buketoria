import { FiMapPin } from 'react-icons/fi';
import styles from './CityBanner.module.css';

export const CityBanner = () => {
  return (
    <div className={styles.banner}>
      <FiMapPin />
      <div className={styles.text}>
        <p>Цены зависят от выбранного города</p>
        <span>Мы подбираем лучшие букеты именно для вашего региона</span>
      </div>
    </div>
  );
};