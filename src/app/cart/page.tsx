'use client'
import { useCartStore } from '@/stores/useCartStore';
import ShoppingCartList from '@/components/Common/ShoppingCartList/one';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Cart() {
  const [loading, setLoading] = useState(true);
  const { items } = useCartStore();
  useEffect(() => {
    setLoading(false);
  }, [items]);

  return (
    <div className="relative mx-auto max-w-c-1280 py-5 justify-between align-items:flex-end px-2 md:px-8 2xl:px-0">
      <div>
        <ul className="flex items-center font-[sans-serif] space-x-4 mb-4">
          <Link href={'/'} passHref>
            <li className="text-gray-500 text-base cursor-pointer">
              Home
            </li>
          </Link>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" className="fill-gray-400 w-3.5 -rotate-90" viewBox="0 0 24 24">
              <path fillRule="evenodd"
                d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
                clipRule="evenodd" data-original="#000000"></path>
            </svg>
          </li>
          <li className="text-gray-800 text-base font-bold cursor-pointer">
            Shopping Cart
          </li>
        </ul>
      </div>
      <h1 className="text-xl md:text-2xl py-1 md:py-4 mb-2">Your cart</h1>
      {loading ?
        <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white sm:rounded-lg p-12 text-center text-xl">
            Loading...
          </div>
        </div>
        :
        <div>
          {items.length === 0 ? (
            <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-white sm:rounded-lg p-6 text-center">
                <p className="text-3xl lg:h-96">Your cart is empty</p>
              </div>
            </div>
          ) : (
            <ShoppingCartList />
          )}
        </div>
      }
    </div>
  );
}
