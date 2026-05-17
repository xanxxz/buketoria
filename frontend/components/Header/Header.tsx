import styles from './Header.module.css';
import { HeaderBottom } from './HeaderBottom';
import { HeaderMain } from './HeaderMain';
import { TopBanner } from './TopBanner';
import { getCachedCategories } from '@/lib/cache/categoriesCache';

export const Header = async () => {
  const categories = await getCachedCategories();

  return (
    <header className={styles.header}>
      <TopBanner />
      <HeaderMain />
      <HeaderBottom categories={categories} />
    </header>
  );
};