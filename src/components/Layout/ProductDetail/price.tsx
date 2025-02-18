// pages/product/[id].tsx
"use client";

import React, { useEffect, useRef } from "react";
import type { ProductDetail } from "@/types/products";


export default function ProductInfoPage({ product }: { product: ProductDetail }) {
  const [oldprice, setOldprice] = React.useState<string>('0');
  const [newprice, setNewprice] = React.useState<string>('0');
  const [off, setOff] = React.useState<string>('0');
  useEffect(() => {
    if (product.priceOff > 0) {
      const old = product.price;
      const off = (100 - product.priceOff).toFixed(0) + '%';
      const n = (old * (product.priceOff / 100)).toFixed(0) + '.99';
      setNewprice(n)
      setOldprice(old.toFixed(2))
      setOff(off)
    }
  }, [product]);
  return (
    <div className="font-sans tracking-wide mx-auto ">
      <div className="flex items-end mt-2">
          <div className="text-red-500 text-3xl font-bold">${newprice}</div>
          <span className="line-through text-sm text-gray-400 px-1">${oldprice}</span>
          <div className="border bg-black text-white text-sm font-bold mb-1 mx-1 px-1">
            {product.priceOff > 0 ? `-${off}` : ''}
          </div>
        </div>
    </div>
  );
}
