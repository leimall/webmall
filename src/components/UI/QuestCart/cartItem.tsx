// components/CartItem.tsx
'use client'
import React, { use, useEffect, useState } from 'react';
import Image from 'next/image';
import { useCartStore } from '@/stores/useCartStore';
import { CartItem } from '@/types/stores/cart';
import Link from 'next/link';

import { FaXmark, FaTrashCan } from "react-icons/fa6";
import { Divider } from 'antd';


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

  const handleCloseMenu = () => {
    console.error("close");
  }

  const deleteHandle = (item: CartItem) => {
    // Implement delete functionality here
    removeItem(item.unique_id);
  }

  return (
    <>
      <div key={index} className="flex last:pb-0">
        <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-md bg-gray-100">
          <Image
            fill
            src={item.main_img}
            alt={item.title}
            className="h-full w-full object-contain object-center"
          />
          <Link
            onClick={handleCloseMenu}
            className="absolute inset-0"
            href={`/products/${item.product_id}`}
          />
        </div>

        <div className="ml-2 flex flex-1 flex-col justify-between">
          <div>
            <div className="flex justify-between ">
              <div>
                <h1 className="text-sm  text-pretty font-extrabold h-auto line-clamp-2">
                  <Link onClick={handleCloseMenu} href={`/products/${item.product_id}`}>
                    <span className='text-gray-900'>{item.title}</span>
                  </Link>
                </h1>

              </div>
              <div>
                <span className=" font-medium">${item.price}</span>

              </div>
            </div>
          </div>
          <div>
          <div className="flex items-center gap-3">
              <span className="my-1 text-md text-neutral-500">
                Size: {item.size === 'Custom' ? item.size :
                  <span className="text-md text-gray-600">{item.size}</span>
                }
              </span>
              {
                item.size === 'Custom' && (
                  <div className="flex items-center gap-1  line-clamp-1">
                    <span className="text-sm">{item.size_title}</span>
                  </div>
                )
              }
            </div>
          </div>
          <div className="flex w-full items-end justify-between text-sm">
            <div>
              <span className='text-gray-600'>Quantity: {item.quantity}</span>
            </div>
            
            <div>
              <div onClick={() => deleteHandle(item)}><FaTrashCan className='text-xl' /></div>
            </div>
          </div>
        </div>
      </div>
      <Divider />
    </>
  );
};