'use client'

import { useCartStore } from '@/stores/useCartStore'; // 引入 Zustand store
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
    <>
      <div className='bg-white'>
        <div className="flex items-center border border-gray-300 text-gray-800 text-md outline-none bg-transparent rounded">
          <div onClick={handleDecrease} className="px-3 py-3 bg-orange-50  rounded-l ">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-2.5 fill-current" viewBox="0 0 124 124">
              <path d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z" data-original="#000000"></path>
            </svg>
          </div>
          <span className="mx-2.5 w-4 text-center">{quantity}</span>
          <div onClick={handleIncrease} className="px-3 py-3 bg-orange-50 rounded-r">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-2.5 fill-current" viewBox="0 0 42 42">
              <path d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z" data-original="#000000"></path>
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}
