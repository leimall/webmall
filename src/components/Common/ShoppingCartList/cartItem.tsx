// components/CartItem.tsx
'use client'
import React from 'react';
import Image from 'next/image';
import { useCartStore } from '@/stores/useCartStore';
import QuantityControl from './inputNumber';
import { CartItem } from '@/types/stores/cart';
import { Divider } from 'antd';

export default function CartListItem({ item }: { item: CartItem }) {
  const removeItem = useCartStore((state) => state.removeItem);


  return (
    <>
      <div className="md:col-span-2 rounded-md">
        <div className="grid grid-cols-3 items-center gap-4">
          <div className="col-span-2 flex items-center gap-4">
            <div className="w-28 h-28 shrink-0 rounded">
              <Image
                src={item.mainImg}
                alt={item.title}
                objectFit='fixed'
                width={96}
                height={96}
                className="rounded h-full w-full "
              />
            </div>

            <div>
              <div className="ml-4 flex-1">
                <h3 className="text-base font-bold text-gray-800 truncate">{item.title}fdfdsfdfsdfdfdfdf</h3>
                <h6 onClick={() => removeItem(item.ID)} className="text-md text-red-500 cursor-pointer mt-0.5">Remove</h6>
              </div>

              <div className="flex gap-4 ml-4 mt-4">
                <div className="relative group bg-white">
                  <button type="button"
                    className="flex items-center px-2.5 py-1.5 border border-gray-300 text-gray-800 text-md outline-none bg-transparent rounded-md">
                    XL
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-2.5 fill-gray-500 inline ml-2.5" viewBox="0 0 24 24">
                      <path fill-rule="evenodd"
                        d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
                        clip-rule="evenodd" data-original="#000000" />
                    </svg>
                  </button>

                  <ul className='group-hover:block hidden absolute rounded-md min-w-[80px] shadow-lg bg-white z-[1000]'>
                    <li className='py-2 px-4 hover:bg-gray-100 text-gray-800 text-md cursor-pointer'>SM</li>
                    <li className='py-2 px-4 hover:bg-gray-100 text-gray-800 text-md cursor-pointer'>MD</li>
                    <li className='py-2 px-4 hover:bg-gray-100 text-gray-800 text-md cursor-pointer'>XL</li>
                    <li className='py-2 px-4 hover:bg-gray-100 text-gray-800 text-md cursor-pointer'>XXL</li>
                  </ul>
                </div>
                <QuantityControl item={item} />
              </div>

            </div>
          </div>
          <div className="ml-auto pr-0 md:pr-4">
            <h4 className="text-base font-bold text-gray-800">$ {item.price * item.quantity}</h4>
          </div>
        </div>
      </div>
      <hr className="border-gray-100 mt-4 mb-8" />
    </>
  );
};