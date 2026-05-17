export type CreateOrderDTO = {
    productId?: string;
    productName: string;
    price?: number;
    citySlug?: string;
    name: string;
    phone: string;
    comment?: string;
    address?: string;
    deliveryTime: 'asap' | '2h' | '6h' | 'tomorrow';
};
