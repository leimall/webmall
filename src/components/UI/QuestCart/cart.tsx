'use client'

import { useCartStore } from '@/stores/useCartStore'; // 引入 Zustand store
import { useAuthStore } from '@/stores/useUserinfoStroe';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import QuantityControl from './inputNumber';
import type { CartItem } from '@/types/stores/cart';
import type { ProductDetail } from "@/types/products";
import item from '@/components/Common/Category/item';

export default function CartItemComponent({ product }: { product: ProductDetail }) {
  const router = useRouter();
  const { addItem, setQuantity, items } = useCartStore();
  const { user } = useAuthStore();
  const [userId, setUserId] = useState('');
  const [item, setItem] = useState<CartItem>();
  const [quantity, setQuantityState] = useState(0);
  const [skuTitle, setSkuTitle] = useState<string>('Size');
  const [size, setSize] = useState<string>('M');
  const [sizeList, setSizeList] = useState<string[]>(['L', 'M', 'S', 'XL']);

  useEffect(() => {
    if (product.Sku.title) {
      setSkuTitle(product.Sku.title)
    }
    if (product.Sku.List && product.Sku.List.length > 0) {
      setSizeList(product.Sku.List.map(item => item.title))
    }
    if (user?.userId) {
      setUserId(user.userId)
    }
  }, [product.Sku.title, product.Sku.List, user?.userId]);


  const inits = () => {
  }

  inits()


  const handleBuyNow = () => {
    // 执行立即购买逻辑, 这里你可以加入支付流程
    router.push('/checkout');
  };

  const handleAddToCart = () => {
    const e: CartItem = {
      sku: product.productId,
      skuTitle: skuTitle,
      skuValue: size,
      user_id: userId,
      product_id: product.productId,
      quantity: 1,
      stock: product.stock,
      price: product.price,
      main_img: product.mainImg,
      title: product.title,
     };
     setItem(e)

    // addItem(item);
  };

  return (
    <div className="flex flex-col md:justify-between md:flex-row md:items-center md:mt-2">
      {
        quantity > 1 && (
          <div className="md:w-1/3 pt-4">
            <div className='w-28'>
              {/* <QuantityControl product={product}  /> */}
            </div>
          </div>
        )
      }


      <div className="md:w-2/3 pt-4">
        <div className="flex gap-4">
          <button
            type="button"
            onClick={handleBuyNow}
            className="min-w-[120px] px-4 py-3 bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold rounded"
          >
            Buy now
          </button>
          <button
            type="button"
            onClick={handleAddToCart}
            className="min-w-[120px] px-4 py-2.5 border border-orange-500 bg-transparent hover:bg-gray-50 text-gray-800 text-sm font-semibold rounded"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};
