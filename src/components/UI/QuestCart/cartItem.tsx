// components/CartItem.tsx
'use client'
import React, { use, useEffect, useState } from 'react';
import Image from 'next/image';
import { useCartStore } from '@/stores/useCartStore';
import { CartItem } from '@/types/stores/cart';
import Link from 'next/link';

import { FaXmark, FaTrashCan } from "react-icons/fa6";


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
      setQuantity(item.unique_id, item.quantity - 1);
    }
  };

  const handleIncrease = () => {
    setQuantity(item.unique_id, item.quantity + 1);
  };

  const setSelfSize = (value: string) => {
    setSkuValue(item.unique_id, value)
  }

  const handleWidthsChange = (shape: string | null | undefined, inputValue: string) => {
    console.error("object", inputValue);
    item.size_title = inputValue;
    item.shape = shape;
    console.error("3333", item);
  }

  console.error("44444444", item);

  const handleCloseMenu = () => {
    console.error("close");
  }

  const deleteHandle = (item: CartItem) => {
    // Implement delete functionality here
    removeItem(item.unique_id);
  }

  return (
    <>
      <div key={index} className="flex py-5 last:pb-0">
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

        <div className="ml-4 flex flex-1 flex-col justify-between">
          <div>
            <div className="flex justify-between ">
              <div>
                <h3 className="text-sm  text-pretty font-extrabold h-auto line-clamp-1">
                  <Link onClick={handleCloseMenu} href={`/products/${item.product_id}`}>
                    <span className='text-gray-900'>FTAnails</span>
                  </Link>
                </h3>
                <span className="my-1 text-sm text-neutral-500">
                  size: {item.size === 'Custom' ? item.size : ''}
                </span>
                {
                  item.size === 'Custom' && (
                    <div className="flex items-center gap-1  line-clamp-1">
                      <span className="text-sm">{item.size_title}</span>
                    </div>
                  ) || (
                    <div className="flex items-center gap-1  line-clamp-1">
                      <span className="text-sm">{item.size}</span>
                    </div>
                  )
                }
              </div>
              <div>
              <span className=" font-medium">${item.price}</span>
              <div onClick={() => deleteHandle(item)}><FaTrashCan className='text-xl' /></div>
              </div>
            </div>
          </div>
          <div className="flex w-full items-end justify-between text-sm">
            <div className="flex items-center gap-3">
              {/* <LikeButton /> */}
              {/* <AiOutlineDelete className="text-2xl" /> */}
            </div>
            <div>
              {/* <InputNumber /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};