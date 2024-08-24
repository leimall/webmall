// pages/product/[id].tsx

import React, { useEffect, useRef } from 'react';
import { Carousel, Divider, Rate, Tag, } from 'antd';
import { useProductStore } from '@/stores/useProductStore';
import QuestCart from "@/components/UI/QuestCart";
import { useCartStore } from '@/stores/useCartStore';
import Link from 'next/link';
import Image from "next/image";
import type { CarouselRef } from 'antd/es/carousel';
import ReviewList from '@/components/Common/ReviewList';
import type { Review } from '@/types/review';
import CatagoryListOfDetails from '@/components/Common/Category/CatagoryListOfDetails';
import DetailsRecommendList from './DetailsRecommendList';
import type { ProductDetail } from '@/types/products';
import MarkdownPage from '@/components/Common/md';


export default function ProductDetail({ product }: { product: ProductDetail }) {
	const { selectedImageIndex, setSelectedImageIndex } = useProductStore();
  const { setQuantity, addItem, items } = useCartStore();
	const existingItem = items.find(item => item.ID=== product?.ID);
	const quantity = existingItem ? existingItem.quantity : 0;
  const [skuTitle, setSkuTitle] = React.useState<string>('Color');
  const [size, setSize] = React.useState<string>('M');
  const [sizeList, setSizeList] = React.useState<string[]>(['L', 'M', 'S', 'XL']);

  const handleAddToCart = () => {
		if (existingItem) {
			setQuantity(product.ID, quantity + 1);
		} else {
			addItem({
        ...product,
				quantity: quantity + 1,
				rating: 4.5,
				reviews: 15,
			});
		}
	};
	const newProduct = {
    ...product,
		quantity: quantity + 1,
		rating: 4.5,
		reviews: 15,
	}
  


	const carouselRef = useRef<CarouselRef>(null);

	useEffect(() => {
		if (carouselRef.current) {
			carouselRef.current.goTo(selectedImageIndex, false);
		}
    if(product.Sku.title) {
      setSkuTitle(product.Sku.title);
    }
    if(product.Sku.List.length > 0) {
      setSizeList(product.Sku.List.map((sku) => sku.title));
    }
	}, [selectedImageIndex]);

	return (
		<>
			<div className="container mx-auto mb-18">
				<div className="flex flex-col md:flex-row">
					<div className="w-full md:w-1/2 pr-0 md:pr-10">
						<Carousel ref={carouselRef} afterChange={setSelectedImageIndex}>
							{product.ImageList.map((image, index) => (
								<div key={index} className="relative w-full h-0 pb-[100%] overflow-hidden rounded-t-2xl mx-auto">
									<Image
										src={image.img_url}
										alt={product.title}
										fill
										sizes="100vw"
										className="w-full h-auto rounded-md"
									/>
								</div>
							))}
						</Carousel>

						<div className="flex flex-wrap gap-4 mt-5 mb-5">
							{product.ImageList.map((image, index) => (
								<img
									key={index}
									src={image.img_url}
									alt={product.title}
									className={`w-16 h-16 border-2 cursor-pointer ${selectedImageIndex === index ? 'border-green-500' : 'border-gray3'} `}
									onClick={() => setSelectedImageIndex(index)}
								/>
							))}
						</div>
					</div>
					<div className="lg:w-1/2 pl-0 md:pl-20">
						<h1 className="text-lg md:text-2xl font-bold">{product.title}</h1>
						<div className="flex items-center">
							<Rate allowHalf defaultValue={product.price}></Rate>
							<div className="text-gray-700 text-md pl-4">{product.price}</div>
							<p className="text-gray-600 text-sm pl-2">({product.price} Ratings)</p>
						</div>
						<Divider />
						<div className='pb-2'>
							<p className="text-fta-primary-500 text-lg md:text-2xl font-bold">${product.price}</p>
							<p className="text-gray-500 text-sm mt-2"><del>$199.99</del> <span className="text-sm ml-1">Tax included</span></p>
						</div>
						<Tag color="cyan">FREE Returns</Tag>
						<Tag color="red">Get $10 off instantly</Tag>

						<Divider />
						<div>
							<h2 className="text-md md:text-xl font-bold text-gray-800">Choose a {skuTitle}</h2>
							<div className="flex flex-wrap gap-4 mt-4">
                {
                  sizeList.map((e, index) => (
                    <button
                      key={index}
                      type="button"
                      className={`w-10 h-10 border hover:border-gray-800 font-semibold text-sm rounded-md flex items-center justify-center shrink-0 ${e === size ? 'border-gray-800' : 'border-gray-300'}`}
                      onClick={() => setSize(e)}
                    >
                      {e}
                    </button>
                  ))
                }
							</div>
						</div>
						<Divider />

						<div>
							<h2 className="font-bold">Brand: Kenmore</h2>
							<div>Product Dimensions: 17.75"D x 21.5"W x 15.25"H</div>
							<div>Special Feature: Portable, Non-Stick Surface, Removable Grease Tray, Compact, Warming Rack</div>
							<div>Color: Turquoise</div>
						</div>
						<Divider />
						<div className="my-4">
							<h2 className="text-lg font-bold">About this item</h2>
							<ul className="list-disc ml-4 text-gray-700">
                {product.desction}
							</ul>
						</div>

						{quantity > 0 && (
							<div className="my-4 flex flex-col align-middle justify-end md:flex-row md:items-start">
								<div className='mr-2 align-bottom h-full sm:mb-5'>Quantify:    </div>
								<div className='flex w-full mr-5 sm:mb-5'>
									<QuestCart product={newProduct} />
								</div>

								<div className="w-full sm:mb-5">
									<Link href="/cart">
										<button className="text-white w-full bg-fta-primary-400 hover:bg-fta-primary-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2.5 py-1.5 text-center">Buy Now</button>
									</Link>
								</div>
								<div className="flex mt-4">
								</div>
							</div>
						)}

						{quantity <= 0 && (
							<div className="flex flex-wrap gap-4">
							<button onClick={handleAddToCart} type="button" className="min-w-[200px] px-4 py-3 bg-fta-primary-500 hover:bg-fta-primary-600 text-white text-sm font-semibold rounded-md">Buy now</button>
							<button onClick={handleAddToCart} type="button" className="min-w-[200px] px-4 py-2.5 border border-fta-primary-500 bg-transparent hover:bg-fta-background-100 text-fta-primary-500 text-sm font-semibold rounded-md">Add to cart</button>
						</div>
						)}
					</div>
				</div>

				<div className="flex flex-col md:flex-row">
					<div className="w-full md:w-7/8 my-8">
            <MarkdownPage markdown={product.Detail[0].content} />
						<div className="my-8">
							<ReviewList reviews={product.reviews} />
						</div>
					</div>
					<div className="hidden md:block lg:w-1/2 px-4 lg:visible xl:visible sm:invisible sx:invisible">
						<CatagoryListOfDetails />
					</div>
				</div>

				<Divider />

				<DetailsRecommendList />

			</div>
		</>
	);
}
