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
import Description from './description';
import CatagoryListOfDetails from '@/components/Common/Category/CatagoryListOfDetails';
import DetailsRecommendList from './DetailsRecommendList';

// 定义产品数据的类型
interface Product {
	id: number;
	title: string;
	price: number;
	description: string;
	gallery: { url: string }[];
	image: string;
	rating: number,
	reviews: number,
	reviewsList: Review[];
	details: string;
	specifications: { key: string; value: string }[];
}

// 假数据
const ProductData: Product = {
	id: 1,
	title: "Kenmore 2-Burner Portable Tabletop Retro Gas Grill",
	price: 173.06,
	rating: 4,
	reviews: 15,
	description: "Fast and Easy Assembly: The new Kenmore 2-Burner Retro Portable Gas Grill arrives almost fully pre-assembled for quick setup and mainly requires installation of the side handles.",
	gallery: [
		{ url: "/products/001.jpg" },
		{ url: "/products/002.jpg" },
		{ url: "/products/003.jpg" },
	],
	image: "/products/000.jpg",
	reviewsList: [
		{
			username: 'Darrell Steward',
			rating: 4.5,
			comment: 'This is an amazing product I have.',
			createdAt: 'July 2, 2020 03:29 PM',
			likes: 128,
			dislikes: 3,
			profileImage: 'https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png',
		},
		{
			username: 'Darlene Robertson',
			rating: 3.5,
			comment: 'This is an amazing product I have.',
			createdAt: 'July 2, 2020 10:04 PM',
			likes: 82,
			dislikes: 1,
			profileImage: 'https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png',
		},
	],
	details: "This is a detailed description of the product. It includes information about its features, benefits, and usage.",
	specifications: [
		{ key: "Brand", value: "Kenmore" },
		{ key: "Product Dimensions", value: "17.75\"D x 21.5\"W x 15.25\"H" },
		{ key: "Special Feature", value: "Portable, Non-Stick Surface, Removable Grease Tray, Compact, Warming Rack" },
		{ key: "Color", value: "Turquoise" },
		{ key: "Fuel Type", value: "Gas" },
	]
};

export default function ProductDetail() {
	const product: Product | null = ProductData;
	const { selectedImageIndex, setSelectedImageIndex } = useProductStore();
	const { setQuantity, addItem, items } = useCartStore();
	const existingItem = items.find(item => item.id === product?.id);
	const quantity = existingItem ? existingItem.quantity : 0;

	const handleAddToCart = () => {
		if (existingItem) {
			setQuantity(product?.id, quantity + 1);
		} else {
			addItem({
				id: Number(product.id),
				title: product.title,
				price: product.price,
				description: product.description,
				quantity: quantity + 1,
				imageUrl: product.gallery[0].url,
				name: product.title,
				rating: 4.5,
				reviews: 15,
			});
		}
	};
	const newProduct = {
		id: Number(product.id),
		title: product.title,
		price: product.price,
		description: product.description,
		quantity: quantity + 1,
		imageUrl: product.gallery[0].url,
		name: product.title,
		rating: 4.5,
		reviews: 15,
	}

	const carouselRef = useRef<CarouselRef>(null);

	useEffect(() => {
		if (carouselRef.current) {
			carouselRef.current.goTo(selectedImageIndex, false);
		}
	}, [selectedImageIndex]);

	return (
		<>
			<div className="container mx-auto mb-18">
				<div className="flex flex-col md:flex-row">
					<div className="w-full md:w-1/2 pr-0 md:pr-10">
						<Carousel ref={carouselRef} afterChange={setSelectedImageIndex}>
							{product.gallery.map((image, index) => (
								<div key={index} className="relative w-full h-0 pb-[100%] overflow-hidden rounded-t-2xl mx-auto">
									<Image
										src={image.url}
										alt={product.title}
										fill
										sizes="100vw"
										className="w-full h-auto rounded-md"
									/>
								</div>
							))}
						</Carousel>

						<div className="flex flex-wrap gap-4 mt-5 mb-5">
							{product.gallery.map((image, index) => (
								<img
									key={index}
									src={image.url}
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
							<Rate allowHalf defaultValue={product.rating}></Rate>
							<div className="text-gray-700 text-md pl-4">{product.rating}</div>
							<p className="text-gray-600 text-sm pl-2">({product.reviews} Ratings)</p>
						</div>
						<Divider />
						<div className='pb-2'>
							<p className="text-fta-primary-500 text-lg md:text-2xl font-bold">${product.price}</p>
							<p className="text-gray-500 text-sm mt-2"><del>$$199.99</del> <span className="text-sm ml-1">Tax included</span></p>
						</div>
						<Tag color="cyan">FREE Returns</Tag>
						<Tag color="red">Get $10 off instantly</Tag>

						<Divider />
						<div>
							<h2 className="text-md md:text-xl font-bold text-gray-800">Choose a Size</h2>
							<div className="flex flex-wrap gap-4 mt-4">
								<button type="button" className="w-10 h-10 border hover:border-gray-800 font-semibold text-sm rounded-md flex items-center justify-center shrink-0">S</button>
								<button type="button" className="w-10 h-10 border hover:border-gray-800 border-gray-800 font-semibold text-sm rounded-md flex items-center justify-center shrink-0">M</button>
								<button type="button" className="w-10 h-10 border hover:border-gray-800 font-semibold text-sm rounded-md flex items-center justify-center shrink-0">L</button>
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
								<li>Fast and Easy Assembly: The new Kenmore 2-Burner Retro Portable Gas Grill arrives almost fully pre-assembled for quick setup and mainly requires installation of the side handles.</li>
								<li>Generous Cooking Surface: Two-burner propane grill with 343 sq inches of grilling area, ideal for 9 burgers.</li>
								<li>Sleek Retro Design: Portable gas grill with nostalgic design, versatile for use on tabletop surfaces.</li>
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
					<div className="w-full md:w-7/8">
						<Description />
						<div className="my-8">
							<ReviewList reviews={product.reviewsList} />
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
