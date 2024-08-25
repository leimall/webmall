import Image from "next/image";
import type { Product } from "@/types/products";
import Link from "next/link";
import QuestCart from "@/components/UI/QuestCart";


export default function ProductCardOne({ product }: { product: Product }) {
	return (
		<>
			<Link href={`/product/${product.productId}`}>
				<div className="bg-white cursor-pointer hover:shadow-md transition-all relative">
					<div className="relative w-full h-0 pb-[100%] overflow-hidden mx-auto">
						<Image
							src={product.mainImg}
							alt={product.title}
							fill
							sizes="100vw"
						/>
						<div className="absolute inset-0"></div>
					</div>

					<div className="p-5">
						<h3 className="text-lg font-extrabold text-fta-primary-800">{product.title}</h3>
						<p className="text-fta-primary-600 text-md mt-2">{product.desction}</p>
						<div className="flex items-center mt-2.5 mb-3">
							<div className="flex items-center space-x-1 rtl:space-x-reverse">
								<svg className="w-4 h-4 text-yellow-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
									<path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
								</svg>
							</div>
							<span className="bg-fta-accent1 text-fta-primary-300 text-xs font-semibold px-2.5 py-0.5 rounded ms-3">5.0</span>
							<span className="text-sm text-fta-black-100 font-medium ms-3">({product.price} reviews)</span>
						</div>
						<div className="flex items-center justify-between text-fta-black-100">
							<h4 className="text-lg text-fta-primary-500 font-bold">${product.price}</h4>
							<div className="bg-fta-primary-500 text-white p-2 rounded-md">Add to cart</div>
						</div>
					</div>
				</div>
			</Link>
		</>
	);
}
