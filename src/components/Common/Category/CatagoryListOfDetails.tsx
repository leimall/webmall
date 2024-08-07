import type { Category } from "@/types/products";

export default function CatagoryListOfDetails() {

	interface Category {
		id: string;
		title: string;
		description: string;
		imageUrl: string;
	}

	const categories: Category[] = [
		{
			id: '1',
			title: 'Electronics',
			description: 'Discover the latest electronics and gadgets.',
			imageUrl: 'https://example.com/electronics.jpg',
		},
		{
			id: '2',
			title: 'Fashion',
			description: 'Stay stylish with the latest fashion trends.',
			imageUrl: 'https://example.com/fashion.jpg',
		},
		{
			id: '3',
			title: 'Home & Garden',
			description: 'Enhance your living space with our selection.',
			imageUrl: 'https://example.com/home-garden.jpg',
		},
		{
			id: '4',
			title: 'Health & Beauty',
			description: 'Look and feel your best with health and beauty products.',
			imageUrl: 'https://example.com/health-beauty.jpg',
		},
		{
			id: '5',
			title: 'Toys & Games',
			description: 'Find fun and educational toys for all ages.',
			imageUrl: 'https://example.com/toys-games.jpg',
		},
	];


	return (
		<div className="border-2 border-fta-primary-100 rounded-md p-6 my-8 ml-8">
			<div className="container mx-auto py-2">
					{categories.map((category) => (
						<div key={category.id} className="bg-white p-4 rounded shadow mb-4">
							<h2 className="mt-2 text-xl font-semibold">{category.title}</h2>
							<p className="space-y-3 list-disc mt-6 pl-4 text-sm text-gray-500">{category.description}</p>
						</div>
					))}
			</div>
		</div>
	)
}