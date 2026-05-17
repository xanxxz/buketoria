import { getProducts } from '@/lib/api/products';
import { PopularClient } from './Popular';
import { City } from '@/types/city';

type Props = {
  city: City | null;
};

export const PopularServer = async ({ city }: Props) => {
  const products = await getProducts({
    category: 'popular',
  });

  return <PopularClient products={products} city={city} />;
};