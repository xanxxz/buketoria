import Image from 'next/image';
import styles from './FlowerCard.module.css';
import { FiShoppingCart, FiHeart } from 'react-icons/fi';
import { Product } from '@/types/product';

interface FlowerCardProps {
  flower: Product;
  isFavorite?: boolean;
  onToggleFavorite?: () => void;
  onClick?: () => void;
}

export const FlowerCard = ({
  flower,
  isFavorite,
  onToggleFavorite,
  onClick,
}: FlowerCardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper} onClick={onClick}>
        <Image
          src={flower.image}
          alt={flower.name}
          fill
          loading="lazy"
          sizes='100%'
          className={styles.image}
        />

        <div className={styles.priceBadge}>
          от {flower.baseMinPrice} ₽
        </div>
      </div>

      <div className={styles.info}>
        <h3 className={styles.title}>{flower.name}</h3>

        <div className={styles.actions}>
          <button className={styles.addToCart} onClick={onClick}>
            <FiShoppingCart size={16} />
            Заказать
          </button>

          <button
            className={`${styles.favorite} ${
              isFavorite ? styles.favActive : ''
            }`}
            onClick={onToggleFavorite}
            aria-label="В избранное"
          >
            <FiHeart size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};