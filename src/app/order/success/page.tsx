// pages/order/success.tsx
"use client";

import { loadStripe } from '@stripe/stripe-js';
import { useSearchParams } from 'next/navigation';
import { Suspense, useEffect, useState } from 'react';

interface PaymentIntent {
  id: string;
  amount: number;
  currency: string;
  client_secret: string;
  status: string;
  // 可能还有其他支付意图的属性，根据你的需求添加
}

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

function SuccessPageContent() {
  const searchParams = useSearchParams();
  const [paymentIntent, setPaymentIntent] = useState<PaymentIntent | null>(null);
  const [error, setError] = useState<string | null>(null);

  const payIntent = searchParams.get('payment_intent');
  const paymentIntentClientSecret = searchParams.get('payment_intent_client_secret');
  const redirectStatus = searchParams.get('redirect_status');

  useEffect(() => {
    if (redirectStatus !== 'succeeded' || !paymentIntentClientSecret) {
      setError('Payment not found or unsuccessful.');
      return;
    }

    const fetchPaymentIntent = async () => {
      try {
        const stripe = await stripePromise;
        const paymentIntentResult = await stripe?.retrievePaymentIntent(paymentIntentClientSecret);

        if (paymentIntentResult && paymentIntentResult.paymentIntent?.status !== 'succeeded') {
          setError('Payment not successful.');
        } else {
          setPaymentIntent(paymentIntentResult?.paymentIntent as PaymentIntent);
        }
      } catch (error) {
        setError('Failed to fetch payment intent.');
      }
    };

    fetchPaymentIntent();
  }, [paymentIntentClientSecret, redirectStatus]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!paymentIntent) {
    return <div>Loading...</div>;
  }

  return (
    <div className="relative mx-auto max-w-c-1440 mt-25 items-center justify-between align-items:flex-end px-4 md:px-8 2xl:px-0 py-20">
      <h1>支付成功！</h1>
      <p>支付金额：{paymentIntent.amount / 100} 美元</p>
      <p>支付意图 ID：{paymentIntent.id}</p>
      <p>支付状态：{paymentIntent.status}</p>
    </div>
  );
}

export default function SuccessPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SuccessPageContent />
    </Suspense>
  );
}
