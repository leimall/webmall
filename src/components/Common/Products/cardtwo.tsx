import Image from "next/image";
import type { Product } from "@/types/products";
import Link from "next/link";
import QuestCart from "@/components/UI/QuestCart";
import Price from "./price"
import CustomRate from "@/components/Common/Rate"


export default function ProductCardOne({ product }: { product: Product }) {
  const calculateDiscountPercentage = (priceOff: number): string => {
    return (100 - priceOff).toFixed(0) + '%';
  };


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
            {product.priceOff && (
              <div className="absolute top-2 right-2 bg-red-500 text-white text-xs md:text-sm font-bold p-1 rounded md:px-2 md:py-1">
                {calculateDiscountPercentage(product.priceOff)} OFF
              </div>
            )}
            <div className="absolute inset-0"></div>
          </div>

          <div className="p-1 md:p-3">
            <h2 className="text-sm md:font-extrabold text-primary-800 h-6 line-clamp-1">{product.title}</h2>
            {/* <p className="text-primary-600 text-xs mt-2 h-12 line-clamp-3">{product.desction}</p> */}
            {/* <div className="md:flex md:items-center mt-2.5 mb-3">
							<div className="flex items-center space-x-1 rtl:space-x-reverse">
              <CustomRate rating={product.Review.average} />
							</div>
							<span className="bg-fta-accent1 text-primary-300 text-xs font-semibold px-2.5 py-0.5 rounded ms-3">{product.Review.average}</span>
							<span className="text-sm text-fta-black-100 font-medium ms-3">({product.Review.reviews} Reviews)</span>
						</div> */}
            <div className="md:flex md:items-center md:justify-between text-fta-black-100">
              <Price product={product} />
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
