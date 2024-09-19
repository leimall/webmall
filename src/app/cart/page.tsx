'use client'
import { Typography, Row, Col } from 'antd';
import { useCartStore } from '@/stores/useCartStore';
import { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from '@/components/Common/pay/CheckoutForm';
import '@/styles/pay.css';
import ShoppingCartList from '@/components/Common/ShoppingCartList/one';
import Link from 'next/link';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

export default function Cart() {
  const { items, addItem,  removeItem } = useCartStore();
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
    <div className="relative mx-auto max-w-c-1280 py-5 justify-between align-items:flex-end px-4 md:px-8 2xl:px-0">
      <div>
        <ul className="flex items-center font-[sans-serif] space-x-4 mb-4">
          <Link href={'/'} passHref>
            <li className="text-gray-500 text-base cursor-pointer">
              Home
            </li>
          </Link>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" className="fill-gray-400 w-3.5 -rotate-90" viewBox="0 0 24 24">
              <path fill-rule="evenodd"
                d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
                clip-rule="evenodd" data-original="#000000"></path>
            </svg>
          </li>
          <li className="text-gray-800 text-base font-bold cursor-pointer">
            Shopping Cart
          </li>
        </ul>
      </div>
      <h1 className="text-xl md:text-3xl py-1 md:py-4 mb-4">Shopping Cart</h1>
      {items.length === 0 ? (
        <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
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
