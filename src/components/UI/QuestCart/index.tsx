// components/QuantityControl.tsx
import React, { useEffect, useState } from 'react';
import { useCartStore } from '@/stores/useCartStore';
import { CartItem } from '@/types/stores/cart';
import { Product } from '@/types/products';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';


export default function QuestCart({ product }: { product: Product }) {
	const [quantity, setQuantity] = useState(0);
	const addItem = useCartStore((state) => state.addItem);
	const removeItem = useCartStore((state) => state.removeItem);
	const setCartQuantity = useCartStore((state) => state.setQuantity);

	useEffect(() => {
		// const cartItem = useCartStore.getState().items.find(item => item.ID === product.ID);
		// if (cartItem) {
		// 	setQuantity(cartItem.quantity);
		// }
	}, [product.ID]);

	const handleAdd = () => {
		setQuantity((prev) => prev + 1);
	};

	const handleRemove = () => {
		if (quantity > 0) {
			setQuantity((prev) => prev - 1);
			if (quantity - 1 === 0) {
				// removeItem(product.ID);
			} else {
				// setCartQuantity(product.ID, quantity - 1);
			}
		}
	};

	return (
		<div className="flex items-center">
			{quantity === 0 ? (
				<button onClick={handleAdd} className="text-white bg-primary-500 hover:bg-primary-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
					Add to cart
				</button>
			) : (
				<div className="flex items-center">
					<button onClick={handleRemove} className="text-white bg-primary-500 hover:bg-primary-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2.5 py-1.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
						<MinusOutlined />
					</button>
					<span className="mx-2 text-primary-500 font-bold">{quantity}</span>
					<button onClick={handleAdd} className="text-white bg-primary-500 hover:bg-primary-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2.5 py-1.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
						<PlusOutlined />
					</button>
				</div>
			)}
		</div>
	);
}