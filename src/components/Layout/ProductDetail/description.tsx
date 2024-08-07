"use client"
import Image from 'next/image';
import DetailTitle from "@/components/Common/Title";
import { Divider } from 'antd';


export default function Description() {
	const desImage = [{
		alt: "Product Image",
		url: "/products/001.jpg"
	}, {
		alt: "Product Image",
		url: "/products/002.jpg"
	}, {
		alt: "Product Image",
		url: "/products/003.jpg"
	}, {
		alt: "Product Image",
		url: "/products/004.jpg"
	}, {
		alt: "Product Image",
		url: "/products/005.jpg"
	}, {
		alt: "Product Image",
		url: "/products/006.jpg"
	}, {
		alt: "Product Image",
		url: "/products/007.jpg"
	}]
	return (
		<div>
			<DetailTitle title="Description" />
			<Divider />
			<div className="">
				{
					desImage.map((item, index) => (
						<Image
							src={item.url}
							alt={item.alt || "Product Image"}
							key={index}
							width={500} // 指定图片的宽度
							height={300} // 指定图片的高度
							className="w-full" // 保持图片宽度充满容器
							layout="responsive" // 如果需要响应式图片，可以使用此属性
							quality={100} // 可以调整图片质量
						/>

					))
				}
			</div>
		</div>
	)
}