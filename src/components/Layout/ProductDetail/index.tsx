// pages/product/[id].tsx

import React, { useEffect, useRef } from 'react';
import { Button, Carousel, Divider, Rate, Tag, } from 'antd';
import { useProductStore } from '@/stores/useProductStore';
import QuestCart from "@/components/UI/QuestCart";
import { useCartStore } from '@/stores/useCartStore';
import Link from 'next/link';
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
	reviews: Review[];
	details: string;
	specifications: { key: string; value: string }[];
}

// 假数据
const ProductData: Product = {
	id: 1,
	title: "Kenmore 2-Burner Portable Tabletop Retro Gas Grill",
	price: 173.06,
	description: "Fast and Easy Assembly: The new Kenmore 2-Burner Retro Portable Gas Grill arrives almost fully pre-assembled for quick setup and mainly requires installation of the side handles.",
	gallery: [
		{ url: "/products/001.jpg" },
		{ url: "/products/002.jpg" },
		{ url: "/products/003.jpg" },
	],
	image: "/products/000.jpg",
	reviews: [
		{
			username: 'Darrell Steward',
			rating: 5,
			comment: 'This is an amazing product I have.',
			createdAt: 'July 2, 2020 03:29 PM',
			likes: 128,
			dislikes: 3,
			profileImage: 'https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png',
		},
		{
			username: 'Darlene Robertson',
			rating: 5,
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
		<div className="container mx-auto mb-18">
			<div className="flex flex-col md:flex-row">
				<div className="w-full md:w-1/2">
					<Carousel ref={carouselRef} afterChange={setSelectedImageIndex}>
						{product.gallery.map((image, index) => (
							<div key={index}>
								<img src={image.url} alt={product.title} className="w-full h-auto" />
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
				<div className="lg:w-1/2 p-4">
					<h1 className="text-2xl font-bold">{product.title}</h1>
					<div className="flex items-center my-4">
						<Rate allowHalf defaultValue={4.5} className="my-2"></Rate>
						<div className="text-gray-700 text-md ml-4">4.5</div>
						<p className="text-gray-600 text-sm ml-2">(15 ratings)</p>
					</div>
					<div className="text-xl text-red-600 font-bold my-2">-13% ${product.price}</div>
					<div className="text-gray-500 text-sm line-through">$199.99</div>
					<Tag color="cyan">FREE Returns</Tag>
					<Tag color="red" className="my-4">Get $10 off instantly</Tag>

					<div className="my-4">
						<div className="font-bold">Size: </div>
						<div className="flex space-x-2 my-2">
							<Button className="w-10 h-10" style={{ backgroundColor: '#d9f7be' }}>L</Button>
							<Button className="w-10 h-10" style={{ backgroundColor: '#f7d9be' }}>M</Button>
							<Button className="w-10 h-10" style={{ backgroundColor: '#f7bebe' }}>S</Button>
						</div>
					</div>

					<div className="my-4">
						<div className="font-bold">Brand: Kenmore</div>
						<div>Product Dimensions: 17.75"D x 21.5"W x 15.25"H</div>
						<div>Special Feature: Portable, Non-Stick Surface, Removable Grease Tray, Compact, Warming Rack</div>
						<div>Color: Turquoise</div>
					</div>

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
						<div className="flex my-4">
							<button onClick={handleAddToCart} className="w-full md:w-1/2 mr-2 text-white bg-fta-primary-400 hover:bg-fta-primary-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2.5 py-1.5 text-center">Buy Now</button>
							<button onClick={handleAddToCart} className="w-full md:w-1/2 border-2 border-fta-primary-300 text-fta-primary-500 bg-fta-accent1 hover:bg-fta-primary-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2.5 py-1.5 text-center">Add to Cart</button>
						</div>
					)}
				</div>
			</div>
			<div className="flex flex-col md:flex-row">
				<div className="w-full md:w-7/8">
					<Description />
					<div className="my-8">
						<ReviewList reviews={product.reviews} />
					</div>
				</div>
				<div className="lg:w-1/2 px-4 lg:visible xl:visible sm:invisible sx:invisible">

					<CatagoryListOfDetails />


				</div>
			</div>

			<Divider />

			<DetailsRecommendList />

		</div>
	);
}
