export type DeliveryTime = 'asap' | '2h' | '6h' | 'tomorrow';

export type CreateOrderDTO = {
  productId?: string;
  productName: string;
  price?: number;

  citySlug?: string;

  name: string;
  phone: string;
  comment?: string;
  address?: string;

  deliveryTime: DeliveryTime;
};

export type Order = CreateOrderDTO & {
  id: string;
  createdAt: string;
};