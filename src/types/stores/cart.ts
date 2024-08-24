import { Product } from '@/types/products';

export type CartItem  = Product & {
  quantity: number;
  rating: number;
  reviews: number;
}
