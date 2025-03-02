// pages/product/[id].tsx
"use client";

import React, { useEffect, useRef } from "react";
import type { Product } from "@/types/products";
import show from "@/components/Layout/shipping/show";


export default function ProductInfoPage({ product }: { product: Product }) {
  const [oldprice, setOldprice] = React.useState<string>('0');
  const [newprice, setNewprice] = React.useState<string>('0');
  const [off, setOff] = React.useState<string>('0');
  const [show, setShow] = React.useState<boolean>(true);
  useEffect(() => {
    if (product.priceOff > 0) {
      const old = product.price;
      const off = (100 - product.priceOff).toFixed(0) + '%';
      const n = (old * (product.priceOff / 100)).toFixed(0) + '.99';
      setNewprice(n)
      setOldprice(old.toFixed(2))
      setOff(off)
      if(product.priceOff === 100) {
        setShow(false)
        setNewprice(product.price.toFixed(2))
      }
    } else {
      setShow(false)
    }
  }, [product]);
  return (
    <div className="flex justify-start md:justify-center items-end font-sans">
      <div className="flex items-center">
        {
          show &&  <div className="text-red-400 border-red-400 mr-1 md:mr-2 border rounded-sm px-1 text-xs md:text-sm">
          {product.priceOff > 0 ? `-${off}` : ''}
        </div>
        }
       
        <div className="text-gray-800 md:text-lg text-sm font-bold">${newprice}</div>
      </div>
      {
        show && <span className="line-through text-xs md:text-sm text-gray-500 pl-2">${oldprice}</span>
      }
    </div>
  );
}
