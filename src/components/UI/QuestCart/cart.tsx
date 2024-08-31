'use client'

import { useCartStore } from '@/stores/useCartStore'; // 引入 Zustand store
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import type { CartItem } from '@/types/stores/cart';

export default function CartItemComponent({ item }:{item:CartItem}) {
  const router = useRouter();
  const { addItem, setQuantity } = useCartStore();
  const [quantity, setItemQuantity] = useState(item.quantity);

  const handleDecrease = () => {
    const newQuantity = quantity - 1;
    setQuantity(item.ID, newQuantity);
    setItemQuantity(newQuantity);
  };

  const handleIncrease = () => {
    const newQuantity = quantity + 1;
    setQuantity(item.ID, newQuantity);
    setItemQuantity(newQuantity);
  };

  const handleBuyNow = () => {
    // 执行立即购买逻辑, 这里你可以加入支付流程
    router.push('/checkout');
  };

  const handleAddToCart = () => {
    addItem({ ...item, quantity });
  };

  return (
    <div className="flex flex-col md:justify-between md:flex-row md:items-center md:mt-2">
      <div className="md:w-1/2">
        <div className="flex divide-x border w-max mt-4 rounded overflow-hidden">
          <button
            type="button"
            onClick={handleDecrease}
            disabled={quantity <= 1}
            className="bg-gray-100 w-12 h-10 font-semibold"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-3 fill-current inline" viewBox="0 0 124 124">
              <path d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z" />
            </svg>
          </button>
          <div className="bg-transparent w-12 h-10 font-semibold text-gray-800 text-lg flex items-center justify-center">
            {quantity}
          </div>
          <button
            type="button"
            onClick={handleIncrease}
            className="bg-gray-800 text-white w-12 h-10 font-semibold"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-3 fill-current inline" viewBox="0 0 42 42">
              <path d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z" />
            </svg>
          </button>
        </div>
      </div>

      <div className="md:w-1/2 pt-4">
        <div className="flex flex-wrap gap-4">
          <button
            type="button"
            onClick={handleBuyNow}
            className="min-w-[200px] px-4 py-3 bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold rounded"
          >
            Buy now
          </button>
          <button
            type="button"
            onClick={handleAddToCart}
            className="min-w-[200px] px-4 py-2.5 border border-orange-500 bg-transparent hover:bg-gray-50 text-gray-800 text-sm font-semibold rounded"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};
