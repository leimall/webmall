import Image from "next/image";
import type { Product } from "@/types/products";
import Link from "next/link";
import QuestCart from "@/components/UI/QuestCart";


export default function ProductCardOne({ product }: { product: Product }) {
	return (
		<>

			<div className="w-full max-w-sm bg-white border border-gray-300 rounded-lg shadow-pink100 hover:shadow-pink400">
				<Link href={`/product/${product.ID}`}>
					<Image
						src={product.mainImg}
						alt={product.title}
						layout="responsive"
						width={16}   // 这里的宽度和高度可以根据你的需求设置比例
						height={9}   // 例如，这里设置的是 16:9 的比例
						className="rounded-t-lg"
					/>
				</Link>
				<div className="px-4 pb-3 pt-2">
					<Link href={`/product/${product.ID}`}>
						<h5 className="text-lg font-semibold tracking-tight text-fta-blake1">{product.name}</h5>
					</Link>
					<div className="flex items-center mt-2.5 mb-3">
						<div className="flex items-center space-x-1 rtl:space-x-reverse">
							<svg className="w-4 h-4 text-yellow-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
								<path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
							</svg>
						</div>
						<span className="bg-fta-accent1 text-fta-primary-300 text-xs font-semibold px-2.5 py-0.5 rounded ms-3">5.0</span>
						<span className="text-sm text-gray-500 ms-3">({product.price} reviews)</span>
					</div>
					<div className="flex items-center justify-between text-[14px] md:text-md">
						<span className="text-md md:text-xl font-bold text-fta-primary-500">${product.price}</span>
						<Link href={`/product/${product.ID}`}>
							<button className="text-white bg-fta-primary-500 hover:bg-fta-primary-500 focus:ring-4 focus:outline-none font-medium rounded-lg px-2 md:px-5 py-1 md:py-2.5 text-center">
								Add to cart
							</button>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
}
