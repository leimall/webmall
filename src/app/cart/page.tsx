'use client'
import { Typography, Row, Col } from 'antd';
import { useCartStore } from '@/stores/useCartStore';
import { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from '@/components/Common/pay/CheckoutForm';
import CartListItem from '@/components/Common/CartListItem';
import '@/styles/pay.css';
import ShoppingCartList from '@/components/Common/ShoppingCartList/one';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

export default function Cart() {
	const { items } = useCartStore();
	const [clientSecret, setClientSecret] = useState<string | null>(null);

	const totalPrice = items.reduce((total, item) => total + item.price * item.quantity, 0);
	const totalAmount = totalPrice * 100;

	const handleCheckout = async () => {
		const response = await fetch('/api/create-payment-intent', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ amount: totalAmount }),
		})
		if (response.ok) {
			const data = await response.json();
			setClientSecret(data.clientSecret);
		} else {
			console.error('Error creating payment intent');
		}
	};

	const appearance = {
		theme: 'stripe',
	};

	const options = {
		clientSecret,
		appearance,
	};

	return (
		<div className="relative mx-auto max-w-c-1280 py-5 items-center justify-between align-items:flex-end px-4 md:px-8 2xl:px-0">
			{items.length === 0 ? (
				<div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
					<h1 className="text-2xl mb-4">Shopping Cart</h1>
					<div className="bg-white sm:rounded-lg p-6 text-center">
						<p className="text-3xl lg:h-96">Your cart is empty</p>
					</div>
				</div>
			) : (
				<ShoppingCartList />
			)}

			<div className='mb-8'>
				{clientSecret && (
					<Elements stripe={stripePromise} options={{ clientSecret }}>
						<CheckoutForm />
					</Elements>
				)}
			</div>
		</div>
	);
}
