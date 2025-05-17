// app/product/[id]/Navigation.tsx（服务器组件）
import type { ProductDetail } from "@/types/products";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa6";

export default function ProductNavigation({ product }: { product: ProductDetail }) {
  const categoryUrl = () => {
    return `/category/${product.Category[0].title.toLowerCase().replace(/\s+/g, '_')}`;
  };

  return (
    <div className="md:mb-4 mb-2">
      <ul className="flex items-center font-[sans-serif] md:space-x-4 space-x-0">
        <Link href="/" passHref>
          <li className="text-gray-800 text-base cursor-pointer relative lg:hover:after:absolute lg:after:bg-primary-200 lg:after:w-0 lg:hover:after:w-full lg:hover:after:h-[3px] lg:after:block lg:after:-bottom-1 lg:hover:text-primary-400 lg:after:transition-all lg:after:duration-300">
            Home
          </li>
        </Link>
        <li className="text-gray-500">
          <FaAngleRight className="font-bold" />
        </li>
        <Link href={categoryUrl()} passHref>
          <li className="text-gray-800 text-base cursor-pointer relative lg:hover:after:absolute lg:after:bg-primary-200 lg:after:w-0 lg:hover:after:w-full lg:hover:after:h-[3px] lg:after:block lg:after:-bottom-1 lg:hover:text-primary-400 lg:after:transition-all lg:after:duration-300">
            {product.Category[0].title}
          </li>
        </Link>
        <li className="text-gray-500">
          <FaAngleRight className="font-bold" />
        </li>
        <li className="text-gray-500 text-base">{product.title}</li>
      </ul>
    </div>
  );
}