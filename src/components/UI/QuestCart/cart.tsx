'use client'

import { useCartStore } from '@/stores/useCartStore'; // 引入 Zustand store
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import QuantityControl from './inputNumber';
import type { CartItem } from '@/types/stores/cart';

export default function CartItemComponent({ item }: { item: CartItem }) {
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
      <div className="md:w-1/3 pt-4">
        <QuantityControl item={item} />
      </div>

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
