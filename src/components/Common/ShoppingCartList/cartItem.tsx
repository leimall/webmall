// components/CartItem.tsx
'use client'
import React, { use, useEffect, useState } from 'react';
import Image from 'next/image';
import { useCartStore } from '@/stores/useCartStore';
import { CartItem } from '@/types/stores/cart';
import { Divider, Select } from 'antd';
import Link from 'next/link';
import { off } from 'process';

export default function CartListItem({ item, index, length }: { item: CartItem, index: number, length: number }) {
  const { setQuantity, removeItem, setSkuValue } = useCartStore();
  const [sizeList, setSizeList] = useState<string[]>(['L', 'M', 'S', 'XS', 'Custom']);
  const [options, setOptions] = useState<{ value: string; label: string }[]>([]);
  const [off, setOff] = useState<number>(0);
  const [isShow, setIsShow] = useState<boolean>(true);

  useEffect(() => {
    initData();
  }, []);

  const initData = () => {
    const newOptions = sizeList.map((size) => ({ value: size, label: size }));
    setOptions(newOptions);

    if (item.price_off > 0) {
      setOff(100 - item.price_off);
    }

    if (index === length - 1) {
      setIsShow(false);
    }
  }

  const handleDecrease = () => {
    if (item.quantity > 1) {
      setQuantity(item.product_id, item.quantity - 1);
    }
  };

  const handleIncrease = () => {
    setQuantity(item.product_id, item.quantity + 1);
  };

  const setSelfSize = (value: string) => {
    setSkuValue(item.product_id, value)
  }

  return (
    <>
      <div className="md:col-span-2 rounded-md">
        <div className="items-center gap-4">
          <div className="md:col-span-2 flex items-center gap-2">
            <div className="w-24 md:w-32 h-24 md:h-32 shrink-0 border rounded bg-white">
              <Image
                src={item.main_img}
                alt={item.title}
                objectFit='fixed'
                width={96}
                height={96}
                className="rounded h-full w-full "
              />
            </div>

            <div className='w-full ml-0 md:ml-4'>
              <div className="flex-1">
                <h3 className="text-md font-bold text-gray-800 truncate">
                  <Link href={`/product/${item.product_id}`}>
                    <div className="text-sm text-pretty font-extrabold text-fta-primary-800 h-auto md:h-10 line-clamp-1 md:line-clamp-2">
                      {item.title}
                    </div>
                  </Link>
                </h3>
                <div className="text-sm py-1">
                  <div className="flex items-center">
                    <div className="text-gray-800 mr-2 text-xl font-bold">${(item.price * item.quantity).toFixed(2)}</div>
                    {item.old_price * item.quantity > 0 && <span className="text-gray-500 line-through text-sm">${(item.old_price * item.quantity).toFixed(2)}</span>}
                    <div className="text-red-600 text-md font-bold px-2">
                      {item.price_off > 0 ? `(-${100 - item.price_off}%)` : ''}
                    </div>
                  </div>

                </div>
              </div>

              <div className="flex items-center justify-end">
                <div className="flex justify-center items-end font-sans">
            
                  <div>
                      <svg onClick={() => removeItem(item.product_id)} xmlns="http://www.w3.org/2000/svg" className="w-4 cursor-pointer inline-block" viewBox="0 0 24 24">
                        <path d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z" data-original="#000000"></path>
                        <path d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z" data-original="#000000"></path>
                      </svg>
                      <span onClick={() => removeItem(item.product_id)} className='px-2 cursor-pointer text-gray-400 text-sm md:text-md'>REMOVE</span>
                    </div>
                </div>
              </div>

              <div className="flex justify-between md:justify-start md:gap-4 mt-1 md:mt-2 ">
                <div className="relative group bg-white text-sm md:text-base">
                  <div>
                    <Select
                      defaultValue={item.size}
                      style={{ width: 100, height: 36, textAlign: 'center' }}
                      options={options}
                      onChange={setSelfSize}
                    />
                  </div>
                </div>
                <div>
                  <div className='bg-white'>
                    <div className="flex items-center border border-gray-300 text-gray-800 text-md outline-none bg-transparent rounded" style={{ width: 110, height: 36 }}>
                      <div onClick={handleDecrease} className="px-3 py-3 cursor-pointer bg-orange-50  rounded-l ">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-2.5 fill-current" viewBox="0 0 124 124">
                          <path d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z" data-original="#000000"></path>
                        </svg>
                      </div>

                      <span className="mx-2.5 w-5 text-center">{item.quantity}</span>

                      <div onClick={handleIncrease} className="px-3 cursor-pointer py-3 bg-orange-50 rounded-r">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-2.5 fill-current" viewBox="0 0 42 42">
                          <path d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z" data-original="#000000"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      {isShow && <hr className="border-gray-black my-6" />}
    </>
  );
};
