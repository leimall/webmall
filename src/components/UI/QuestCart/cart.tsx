'use client'

import { useCartStore } from '@/stores/useCartStore'; // 引入 Zustand store
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import QuantityControl from './inputNumber';
import type { CartItem } from '@/types/stores/cart';

export default function CartItemComponent({ item }: { item: CartItem }) {
  const router = useRouter();
  const { addItem, setQuantity, items } = useCartStore();
  const [quantity, setQuantityState] = useState(0);
  const pitem = {...item, quantity: quantity };

  const inits = () => {
    items.map((e) => {
      console.error("111111", e.title);
    });
  }

  inits()


  const handleBuyNow = () => {
    // 执行立即购买逻辑, 这里你可以加入支付流程
    router.push('/checkout');
  };

  const handleAddToCart = () => {
    addItem(item);
  };

  return (
    <div className="flex flex-col md:justify-between md:flex-row md:items-center md:mt-2">
      {
        quantity > 1 && (
          <div className="md:w-1/3 pt-4">
            <div className='w-28'>
              <QuantityControl item={pitem} />
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
