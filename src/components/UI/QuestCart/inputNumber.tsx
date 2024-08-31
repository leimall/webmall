'use client'

import { useCartStore } from '@/stores/useCartStore'; // 引入 Zustand store
import { useState } from 'react';
import type { CartItem } from '@/types/stores/cart';

export default function CartItemInputNumber({ item }: { item: CartItem }) {
  const setQuantity = useCartStore((state) => state.setQuantity);
  const quantity = useCartStore((state) =>
    state.items.find((i) => i.ID === item.ID)?.quantity ?? 0
  );

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(item.ID, quantity - 1);
    }
  };

  const handleIncrease = () => {
    setQuantity(item.ID, quantity + 1);
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
    </div>
  );
}
