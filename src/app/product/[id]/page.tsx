"use client"
import { getProductDetail } from "@/apis/product";
import ProductDetailPage from "@/components/Layout/ProductDetail/new";
import type { ProductDetail } from "@/types/products";
import { message } from "antd";
import { useParams, useRouter } from "next/navigation";
import React from "react";
import { useEffect } from "react";



export default function Detail({ params }: { params: { id: string } }) {
	const { id } = useParams();
  const [product, setProduct] = React.useState<ProductDetail | null>(null);


  const fetchData = async () => {
    try {
      const productId = Array.isArray(id) ? id[0] : id;
      const response = await getProductDetail(productId);
      if(response.code === 0) {
        setProduct(response.data);
        console.error("object", response.data);
      } else {
        message.error("Failed to fetch products");
      }
    } catch (error) {
      message.error("Failed to fetch products");
    }
  };
  
  useEffect(() => {
    fetchData()
  }, []);

	return (
		<div className="relative mx-auto max-w-c-1440 py-5 items-center justify-between align-items:flex-end px-4 md:px-8 2xl:px-0">
			{product && <ProductDetailPage product={product} />}
		</div>
	);
}
