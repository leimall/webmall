import { Product } from '@/types/products';

export type CartItem  = Product & {
  quantity: number
  sku: string
  skuTitle: string
  skuValue: string
}
