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
  const [sizeList, setSizeList] = useState<string[]>(['L', 'M', 'S', 'XS']);
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
            <div className="w-32 h-32 shrink-0 border rounded bg-white">
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
                    <div className="text-sm text-pretty font-extrabold text-fta-primary-800 h-10 line-clamp-2">
                      {item.title}
                    </div>
                  </Link>
                </h3>
                <h6 onClick={() => removeItem(item.product_id)} className="text-sm text-blue-500 cursor-pointer mt-0.5">Remove</h6>
              </div>

              <div className="flex items-center justify-end">
                <div className="flex justify-center items-end font-sans">
                  {item.old_price * item.quantity > 0 && <span className="text-gray-500 line-through text-sm mr-2">${item.old_price * item.quantity}</span>}
                  <div className="flex items-center">
                    <div className="text-gray-800 text-md font-bold">${item.price * item.quantity}</div>
                    <div className="text-red-600 text-sm font-bold px-2">
                      {item.price_off > 0 ? `(-${100 - item.price_off}%)` : ''}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 mt-1 md:mt-2">
                <div className="relative group bg-white">
                  <div>
                    <Select
                      defaultValue={item.size}
                      style={{ width: 80 }}
                      options={options}
                      onChange={setSelfSize}
                    />
                  </div>
                </div>
                <div>
                  <div className='bg-white'>
                    <div className="flex items-center border border-gray-300 text-gray-800 text-md outline-none bg-transparent rounded">
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
