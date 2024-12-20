import Image from "next/image";
// import Link from "next/link";
import type { Product } from "@/types/products";
import { Card, Button } from "antd";
import Link from "next/link";
import item from "../Category/item";

export default function ProductCard({ product }: { product: Product }) {
  
	return (
    <Card className="w-full xl:w-1/2 lg:w-1/3 md:w-1/2 sm:w-full xs:w-full p-4">
			<Link href={`/product/${product.ID}`}>
      <Image
        src={product.mainImg}
        alt={product.title}
        width={500}
        height={300}
				className="rounded-t-lg"
				/>
			</Link>
			<Link href={`/product/${product.ID}`}>
      <Card.Meta title={product.title} description={product.desction} />
			</Link>
      <div className="flex justify-between items-center">
        <span className="text-xl font-bold">${product.price}</span>
        <Button type="primary">Add to Cart</Button>
      </div>
    </Card>
  );
}
