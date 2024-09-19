import React from 'react';
import { Rate, Progress, Button, Flex } from 'antd';
import { MinusOutlined, PlusOutlined, StarOutlined } from '@ant-design/icons';

const reviewSummary = {
  averageRating: 4.8,
  totalReviews: 1250,
  ratingsDistribution: [
    { stars: 5.0, count: 2823 },
    { stars: 4.0, count: 38 },
    { stars: 3.0, count: 4 },
    { stars: 2.0, count: 0 },
    { stars: 1.0, count: 0 },
  ],
};

export default function ReviewSummary() {
  const rate = reviewSummary.averageRating / 5.0 * 100;
  return (
    <div className='pt-8'>
      <h1 className="text-3xl font-bold text-fta-primary-600 mb-4">Customer Reviews</h1>
      <div className="p-4 bg-white rounded-md border-2 border-gray-50">
        <div className="flex items-center mt-4">
          <div className="flex flex-col items-center mr-8">
            <div className="text-4xl font-bold text-fta-primary-600">
              {reviewSummary.averageRating}
            </div>
            <Rate disabled defaultValue={reviewSummary.averageRating} allowHalf />
            <div className="text-gray-600 mt-2">from <span className='font-bold'>{reviewSummary.totalReviews.toLocaleString()}</span>  reviews</div>
          </div>
          <div className="flex-1">
            {reviewSummary.ratingsDistribution.map((rating, index) => (
              <div key={index} className="flex items-center mb-2">
                <span className="text-gray-600 w-8">{rating.stars}
                  <StarOutlined style={{ color: '#FFD700' }} />
                </span>
                <Progress
                  percent={(rating.count / reviewSummary.totalReviews) * 100}
                  showInfo={false}
                  strokeColor={rating.stars === 5 ? '#8d1a25' : '#f7cfe3'}
                  className="flex-1 mx-2"
                />
                <span className="text-fta-primary-600 w-12 text-right">{rating.count}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
