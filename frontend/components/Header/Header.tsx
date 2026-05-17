import { getCachedCategories } from '@/lib/cache/categoriesCache';
import { HeaderMain } from './HeaderMain';
import { HeaderBottom } from './HeaderBottom';
import { TopBanner } from './TopBanner';
import { getCities } from '@/lib/api/cities';

export const Header = async () => {
  const categories = await getCachedCategories();
  const cities = await getCities();

  return (
    <header>
      <TopBanner />
      <HeaderMain cities={cities} />
      <HeaderBottom categories={categories} />
    </header>
  );
};