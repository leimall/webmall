import React from'react';

import CategoryItem from './item';



export default function Category() {
	const categoryList = [{
		id: 1,
		name: "Category 1",
		level: 1,
	}, {
		id: 2,
		name: "Category 2",
		level: 1,
	}, {
		id: 3,
		name: "Category 3",
		level: 1,
	}]

  return (
		<div className='flex flex-wrap gap-4 py-8'>
		{
				categoryList.map((category) => (
					<CategoryItem key={category.id} item={{ ...category, description: '', image: '', createdAt: new Date(), updatedAt: new Date() }} />
				))
		}

		</div>
  )

};

