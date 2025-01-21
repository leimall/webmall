'use client'

import { Button, List, Rate, Divider, message } from "antd";
import { Review } from "@/types/review";
import { DislikeOutlined, LikeOutlined } from "@ant-design/icons";
import ReviewSummary from "./ReviewSummary";
import DetailTitle from "../Title";
import React, { useEffect } from "react";
import { getProductList } from "@/apis/product";


export default function ReviewList({ productID }: { productID: string }) {
  const [reviews, setReviews] = React.useState<Review[]>([]);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string | null>(null);
  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const response = await getProductList();
      setReviews(response.data);
      setTimeout(() => {
        setLoading(false);
      }, 1000)
    } catch (error) {
      setLoading(false);
      message.error("Failed to fetch products");
    }
  };

  const reviewss = [{
    username: "Richard",
    rating: 4.5,
    comment: "This is a very nice product. I love it.",
    profileImage: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    likes: 10,
    dislikes: 2,
    createdAt: "2021-10-10"
  }, {
    username: "Richard",
    rating: 4.5,
    comment: "This is a very nice product. I love it.",
    profileImage: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    likes: 10,
    dislikes: 2,
    createdAt: "2021-10-10"
  }, {
    username: "Richard",
    rating: 4.5,
    comment: "This is a very nice product. I love it. This is a very nice product. I love it.This is a very nice product. I love it.This is a very nice product. I love it.This is a very nice product. I love it.This is a very nice product. I love it.This is a very nice product. I love it.This is a very nice product. I love it.This is a very nice product. I love it.This is a very nice product. I love it.This is a very nice product. I love it.This is a very nice product. I love it.This is a very nice product. I love it.This is a very nice product. I love it.",
    profileImage: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    likes: 10,
    dislikes: 2,
    createdAt: "2021-10-10"
  }, {
    username: "Richard",
    rating: 4.5,
    comment: "This is a very nice product. I love it. aaaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbbbbbbbbaaaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbbbbbbbbaaaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbbbbbbbbaaaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbbbbbbbbaaaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbbbbbbbbaaaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbbbbbbbbaaaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbbbbbbbbaaaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbbbbbbbbaaaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbbbbbbbbaaaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbbbbbbbbaaaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbbbbbbbbaaaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbbbbbbbbaaaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbbbbbbbbaaaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbbbbbbbbaaaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbbbbbbbbaaaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbbbbbbbb",
    profileImage: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    likes: 10,
    dislikes: 2,
    createdAt: "2021-10-10"
  }, {
    username: "Richard",
    rating: 4.5,
    comment: "This is a very nice product. I love it.",
    profileImage: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    likes: 10,
    dislikes: 2,
    createdAt: "2021-10-10"
  }]

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
                    <img src={review.profileImage} alt={review.username} className="w-12 h-12 rounded-full mr-2" />
                    <div>
                      <h3 className="text-sm font-bold">{review.username}</h3>
                      {/* <p className="text-sm text-fta-blake1">CHINA</p> */}
                    </div>
                  </div>
                  <div className="flex items-cente">
                    <div className="flex items-center ml-1">
                      <p className="text-gray-300">{review.createdAt}</p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between">
                  <div className="flex items-center ml-1">
                    <div className="w-12"></div>
                    <Rate disabled style={{ fontSize: 16 }} allowHalf defaultValue={review.rating} />
                    <div className="text-gray-700 text-md ml-4">{review.rating}</div>
                  </div>
                </div>

                <div className="pl-13 py-4 text-left">
                  <div className="text-sm break-words text-justify text-fta-blake">{review.comment}</div>
                </div>
              </List.Item>
            )}
          />
          
        </div>
      </div>
    </div>
  )
}