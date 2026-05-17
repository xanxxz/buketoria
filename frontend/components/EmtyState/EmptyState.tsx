import styles from './EmptyState.module.css';
import { FiInbox } from 'react-icons/fi';

export const EmptyState = () => {
  return (
    <div className={styles.empty}>
      <div className={styles.icon}>
        <FiInbox size={42} />
      </div>

      <h3>Пока здесь ничего нет</h3>

      <p>
        Мы ещё не добавили товары в эту категорию.
      </p>
    </div>
  );
};