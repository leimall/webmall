import Image from "next/image";
import type { Product } from "@/types/products";
import Link from "next/link";
import QuestCart from "@/components/UI/QuestCart";
import Price from "./price"
import CustomRate from "@/components/Common/Rate"
import React, { useEffect } from "react";


export default function ProductCardOne({ product }: { product: Product }) {
  const [show, setShow] = React.useState<boolean>(true);

  const calculateDiscountPercentage = (priceOff: number): string => {
    return (100 - priceOff).toFixed(0) + '%';
  };

  useEffect(() => {
    if (product.priceOff > 0) {
      if(product.priceOff === 100) {
        setShow(false);
      }
    } else {
      setShow(false);
    }
  }, [product]);




  return (
    <>
      <Link href={`/product/${product.productId}`}>
        <div className="bg-white cursor-pointer shadow rounded hover:scale-[1.02] transition-all relative">
          <div className="relative w-full h-0 pb-[100%] rounded-t overflow-hidden mx-auto">
            <Image
              src={product.mainImg}
              alt={product.title}
              fill
              priority
              sizes="100vw"
              className="h-full w-full object-cover object-top "
            />
            { show && (
              <div className="absolute top-2 right-2 bg-red-500 text-white text-xs md:text-sm font-bold p-1 rounded md:px-2 md:py-1">
                {calculateDiscountPercentage(product.priceOff)} OFF
              </div>
            )}
            <div className="absolute inset-0"></div>
          </div>

          <div className="p-1 md:p-3">
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
