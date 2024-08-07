// components/Common/pay/StripeCheckout.tsx

import React, { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

const CheckoutForm = ({ amount, description }: { amount: number, description: string }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [isProcessing, setIsProcessing] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [clientSecret, setClientSecret] = useState<string | null>(null);

  useEffect(() => {
    // 创建支付意图
    const createPaymentIntent = async () => {
      const res = await fetch('/api/create-payment-intent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount }),
      });

      const data = await res.json();
      setClientSecret(data.clientSecret);
    };

    createPaymentIntent();
  }, [amount]);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsProcessing(true);

    if (!stripe || !elements || !clientSecret) {
      setIsProcessing(false);
      return;
    }

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: 'https://localhost:3001/order/complete',
      },
    });

    if (error) {
      setErrorMessage(error.message || 'An unexpected error occurred.');
      setIsProcessing(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {clientSecret && <PaymentElement />}
      <button type="submit" disabled={!stripe || isProcessing}>
        {isProcessing ? 'Processing...' : 'Pay now'}
      </button>
      {errorMessage && <div className="text-red-500">{errorMessage}</div>}
    </form>
  );
};

const StripeCheckout = ({ amount, description }: { amount: number, description: string }) => (
  <Elements stripe={stripePromise}>
    <CheckoutForm amount={amount} description={description} />
  </Elements>
);

export default StripeCheckout;
