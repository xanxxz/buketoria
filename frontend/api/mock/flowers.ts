export type Flower = {
  id: number;
  name: string;
  price: number;
  image: string;
  categoryId: string;
};

export const mockFlowers: Flower[] = [
  { id: 1, name: 'Красные розы', price: 2500, image: '/flowers/roses.jpg', categoryId: 'roses' },
  { id: 2, name: 'Белые розы', price: 2700, image: '/flowers/roses2.jpg', categoryId: 'roses' },
  { id: 3, name: 'Пионы нежные', price: 3200, image: '/flowers/peonies.jpg', categoryId: 'peonies' },
  { id: 4, name: 'Тюльпаны микс', price: 1800, image: '/flowers/tulips.jpg', categoryId: 'tulips' },
  { id: 5, name: 'Орхидея премиум', price: 4500, image: '/flowers/orchids.jpg', categoryId: 'orchids' },
];