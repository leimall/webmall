import React from 'react';
import { Rate, Progress } from 'antd';
import { StarOutlined } from '@ant-design/icons';
import type { ReviewItem } from '@/types/products';


export default function ReviewSummary({ Review }: { Review: ReviewItem }) {
  const renderStarRow = (starCount: number, starNumber: number) => {
    return (
      <div key={starNumber} className="flex items-center mb-2">
        <span className="text-gray-600 w-8">
          {starNumber}
          <StarOutlined style={{ color: '#FF9100FF' }} />
        </span>
        <Progress
          percent={(starCount / Review.reviews) * 100}
          showInfo={false}
          strokeColor={starNumber === 5 ? '#8d1a25' : '#f7cfe3'}
          className="flex-1 mx-2"
        />
        <span className="text-fta-primary-600 w-12 text-right">{starCount}</span>
      </div>
    );
  };
  return (
    <div className='pt-2'>
      <h1 className="text-xl text-left font-bold text-slate-900 mb-4">Customer Reviews</h1>
      <div className="p-4 rounded-md border border-gray-200 bg-slate-50">
        <div className="flex items-center mt-4">
          <div className="flex flex-col items-center mr-8">
            <div className="text-4xl font-bold text-fta-primary-600">
              {Review.average.toFixed(2)}
            </div>
            <Rate disabled defaultValue={Review.average} style={{ color: '#FF9100FF' }} allowHalf />
            <div className="text-gray-600 mt-2">from <span className='font-bold'>{Review.reviews.toLocaleString()}</span>  reviews</div>
          </div>
          <div className="flex-1">
            {renderStarRow(Review.star5, 5)}
            {renderStarRow(Review.star4, 4)}
            {renderStarRow(Review.star3, 3)}
            {renderStarRow(Review.star2, 2)}
            {renderStarRow(Review.star1, 1)}
          </div>
        </div>
      </div>
    </div>
  );
}
