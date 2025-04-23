'use client'

import { List, Rate, message } from "antd";
import React, { useEffect } from "react";
import { getProductByComment } from "@/apis/product";
import type { ProductComment } from "@/types/product_comment";


export default function ReviewList({ productID }: { productID: string }) {
  const [reviews, setReviews] = React.useState<ProductComment[]>([]);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string | null>(null);
  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const response = await getProductByComment({ productId: productID, page: 1, pageSize: 3 });
      const { code, data } = response;
      if (code === 0 && data && data.list.length > 0) {
        setReviews(data.list);
      }
      setTimeout(() => {
        setLoading(false);
      }, 1000)
    } catch (error) {
      setLoading(false);
      message.error("Failed to fetch products");
    }
  };
  return (
    <div>
      <div className="mt-8">
        <div className="mt-8">
          <List
            itemLayout="vertical"
            dataSource={reviews}
            renderItem={review => (
              <List.Item className="border-b pb-4 mb-4">
                <div className="flex justify-between">
                  <div className="flex items-center">
                    <img src="/images/logo/hlogo.png" alt={review.userName} className="w-12 h-12 rounded-full mr-2 border" />
                    <div className="ml-1">
                      <h3 className="text-sm text-left font-bold">{review.userName}</h3>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="flex items-center ml-1">
                      <div className="text-gray-300">{review.date}</div>
                    </div>
                  </div>
                </div>

                <div className="flex py-1">
                  <div className="flex items-center">
                    <Rate disabled style={{ fontSize: 16, color: '#FF9100FF' }} allowHalf defaultValue={review.star} />
                  </div>
                  <h3 className="text-md ml-4 font-bold">{review.title}</h3>
                </div>

                <div className="pl-13 py-1 text-left">
                  <div className="text-sm break-words text-slate-500">{review.content}</div>
                </div>
              </List.Item>
            )}
          />

        </div>
      </div>
    </div>
  )
}