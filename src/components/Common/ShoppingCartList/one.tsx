import { useState } from 'react';
import { CartItem } from '@/types/stores/cart';
import CartListItem from './cartItem';
import { Divider } from 'antd';
import Link from 'next/link';
import { useCartStore } from '@/stores/useCartStore';

export default function ShoppingCartList() {
  const { items } = useCartStore();
  const totalPrice = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <>
      <div className="flex flex-col  md:flex-row ">
        <div className="flex-1 bg-background-back1 rounded-md p-4">
          <h2 className="text-2xl font-bold text-gray-800">Cart</h2>
          <hr className="border-gray-300 mt-4 mb-8" />
          <div className='p-4'>

          {items.map((item) => (
            <CartListItem item={item} key={item.ID} />
          ))}
          </div>
        </div>

        <div className="w-full md:w-1/4 md:ml-8 sx:ml-0 rounded-md md:mt-0 mt-4 sm:ml-0 p-4 bg-fta-background-100">
          <div className="px-4">
            <h2 className="text-2xl font-bold">Cart total</h2>
            {/* <p className="text-gray-500">No products selected</p> */}
          </div>
          <Divider />
          <div className="px-4 text-gray-800 space-y-2">
            <p className="flex justify-between py-1">
              <span className='text-base'>Subtotal</span>
              <span className='ml-auto font-bold'>${totalPrice}.00</span>
            </p>
            <p className="flex justify-between py-1">
              <span className='text-base'>Discount</span>
              <span className='ml-auto font-bold'>$0.00</span>
            </p>
            <p className="flex justify-between py-1">
              <span className='text-base'>Tax</span>
              <span className='ml-auto font-bold'>$0.00</span>
            </p>
            <p className="flex justify-between py-1">
              <span className='text-base'>Fee</span>
              <span className='ml-auto font-bold'>$0.00</span>
            </p>
          </div>
          <Divider />
          <div className="px-4">
            <div className="flex justify-between font-bold text-lg mt-4">
              <span>Total</span>
              <span>${totalPrice}.00</span>
            </div>
          </div>
          <div className="mt-8 space-y-4">
            <button className="text-sm px-4 py-2.5 w-full font-semibold tracking-wide bg-fta-primary-500 hover:bg-fta-primary-600 text-white rounded-md">
              Checkout
            </button>
            <div className='w-4'></div>
            <Link href="/">
              <button className="text-sm px-4 py-2.5 w-full font-semibold tracking-wide bg-fta-background-50 hover:bg-fta-background-100 text-fta-primary-500 rounded-md">
                Continue Shopping
              </button>
            </Link>
          </div>
        </div>

      </div>
    </>
  );
}
