import Image from "next/image";
import type { Product } from "@/types/products";
import Link from "next/link";
import Price from "./price"
import React from "react";


export default function ProductCardOne({ product }: { product: Product }) {
  const calculateDiscountPercentage = (priceOff: number): string => {
    return (100 - priceOff).toFixed(0) + '%';
  };
  const show = () => {
    if (product.priceOff > 0) {
      if (product.priceOff === 100) {
        return false
      } else {
        return true
      }
    } else {
      return false
    }
  }


  return (
    <>
      <Link href={`/product/${product.productId}`}>
        <div className="bg-white border border-bg-200 cursor-pointer hover:border-2 hover:border-primary-200 rounded transition-all relative">
          <div className="md:m-8 m-2 hover:m-4 transition-all relative">
            <div className="relative h-0 pb-[100%] rounded-t overflow-hidden mx-auto">
              <Image
                src={product.mainImg}
                alt={product.title}
                fill
                priority
                sizes="100vw"
                className="h-full w-full object-cover object-top"
              />
            </div>
              {show() && (
                <div className="absolute top-2 right-2 bg-red-500 text-white text-xs md:text-sm font-bold p-1 rounded md:px-2 md:py-1">
                  {calculateDiscountPercentage(product.priceOff)} OFF
                </div>
              )}

          </div>

          <div className="p-1 md:p-3 bg-bg-10 rounded-b">
            <h2 className="text-sm md:font-extrabold text-primary-800 h-6 line-clamp-1">{product.title}</h2>
            <div className="md:flex md:items-center md:justify-between text-fta-black-100">
              <Price product={product} />
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
