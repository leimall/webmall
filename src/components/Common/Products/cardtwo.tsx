import Image from "next/image";
import type { Product } from "@/types/products";
import Link from "next/link";
import QuestCart from "@/components/UI/QuestCart";
import Price from "./price"
import CustomRate from "@/components/Common/Rate"


export default function ProductCardOne({ product }: { product: Product }) {
	return (
		<>
			<Link href={`/product/${product.productId}`}>
				<div className="bg-white cursor-pointer shadow rounded hover:scale-[1.01] transition-all relative">
					<div className="relative w-full h-0 pb-[100%] rounded-t overflow-hidden mx-auto">
						<Image
							src={product.mainImg}
							alt={product.title}
							fill
              priority
							sizes="100vw"
              className="h-full w-full object-cover object-top "
						/>
						<div className="absolute inset-0"></div>
					</div>

					<div className="p-4">
						<h2 className="text-sm font-extrabold text-fta-primary-800 h-10 line-clamp-2">{product.title}</h2>
						{/* <p className="text-fta-primary-600 text-xs mt-2 h-12 line-clamp-3">{product.desction}</p> */}
						<div className="flex items-center mt-2.5 mb-3">
							<div className="flex items-center space-x-1 rtl:space-x-reverse">
              <CustomRate rating={product.Review.average} />
							</div>
							<span className="bg-fta-accent1 text-fta-primary-300 text-xs font-semibold px-2.5 py-0.5 rounded ms-3">{product.Review.average}</span>
							<span className="text-sm text-fta-black-100 font-medium ms-3">({product.Review.reviews} Reviews)</span>
						</div>
						<div className="flex items-center justify-between text-fta-black-100">
              <Price product={product} />
							<div className="bg-white text-fta-primary-500 border p-1 rounded-md">Add to cart</div>
						</div>
					</div>
				</div>
			</Link>
		</>
	);
}
