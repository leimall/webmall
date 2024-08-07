import { useState } from 'react';
import { CartItem } from '@/types/stores/cart';
import CartListItem from '../CartListItem';
import { Divider } from 'antd';

type ShoppingCartListProps = {
	items: CartItem[];
};

export default function ShoppingCartList({ items }: ShoppingCartListProps) {
	const [cartItems] = useState<CartItem[]>(items);

	const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

	return (
		<div className="flex flex-col md:flex-row">
			<div className="flex-1">
				{cartItems.map((item) => (
					<CartListItem item={item} />
				))}
			</div>

			<div className="w-full md:w-1/4 md:ml-8 sx:ml-0 rounded-md md:mt-0 mt-4 sm:ml-0 p-8 bg-fta-primary-50">
				<div className="px-4">
					<h2 className="text-2xl font-bold">Product Summary</h2>
					<p className="text-gray-500">No products selected</p>
				</div>
				<div className="px-4">
					<Divider />
					<p className="flex justify-between text-gray-600 py-1">
						<span >Total Price</span>
						<span>${totalPrice}</span>
					</p>
					<p className="flex justify-between text-gray-600 py-1">
						<span>Total Price (Discount)</span>
						<span>$0</span>
					</p>
					<p className="flex justify-between text-gray-600 py-1">
						<span>Tax & Fee</span>
						<span>$0</span>
					</p>
					<Divider />
				</div>
				<div className="px-4 pb-4">
					<div className="flex justify-between font-bold text-lg mt-4">
						<span>Total Price</span>
						<span>${totalPrice}</span>
					</div>
				</div>
				<button className="mt-4 bg-fta-primary-500">
					Checkout
				</button>
			</div>
		</div>
	);
}
