import styles from './HowItWorks.module.css';
import { FiHeart, FiCheckCircle, FiTruck } from 'react-icons/fi';

export const HowItWorks = () => {
  return (
    <section className={styles.section}>
      <h2>Как это работает</h2>

      <div className={styles.steps}>
        <div className={styles.step}>
          <div className={styles.number}>1</div>
          <FiHeart className={styles.icon} />
          <div className={styles.text}>Вы выбираете букет</div>
        </div>

        <div className={styles.step}>
          <div className={styles.number}>2</div>
          <FiCheckCircle className={styles.icon} />
          <div className={styles.text}>Менеджер подтверждает</div>
        </div>

        <div className={styles.step}>
          <div className={styles.number}>3</div>
          <FiTruck className={styles.icon} />
          <div className={styles.text}>Быстрая доставка</div>
        </div>
      </div>
    </section>
  );
};