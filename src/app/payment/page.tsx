'use client'
import { Suspense, useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import LoadingOverlay from './overlay';

interface PaymentQueryParams {
  merchant_transaction_id: string;
  payment_currency_code: string;
  payment_amount: string;
  payment_status: string;
  order_amount: string;
}

const PaymentPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PaymentContent />
    </Suspense>
  );
}
function PaymentContent () {
  const searchParams = useSearchParams();
  const [paymentInfo, setPaymentInfo] = useState<PaymentQueryParams>({
    merchant_transaction_id: '',
    payment_currency_code: 'N/A',
    payment_amount: '0.00',
    payment_status: 'Unknown',
    order_amount: '0.00',
  });
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // 获取查询参数
    const merchant_transaction_id = searchParams.get('merchant_transaction_id');
    const payment_currency_code = searchParams.get('payment_currency_code');
    const payment_amount = searchParams.get('payment_amount');
    const payment_status = searchParams.get('payment_status');
    const order_amount = searchParams.get('order_amount');
    // 只在有订单 ID 的情况下更新支付信息
    if (merchant_transaction_id) {
      setPaymentInfo({
        merchant_transaction_id: merchant_transaction_id,
        payment_currency_code: payment_currency_code || 'N/A',
        payment_amount: payment_amount || '0.00',
        payment_status: payment_status || 'Unknown',
        order_amount: order_amount || '0.00',
      });
    }
    const timer = setTimeout(() => {
      setLoading(false);
      return () => clearTimeout(timer); // 清除定时器
    }, 300);
  }, [searchParams]);

  const updatePaymentStatus = (payment_status: string) => {
    setPaymentInfo({...paymentInfo, payment_status });
  };



  return (
    <div className="relative flex flex-col justify-center items-center py-12 px-6">
      <LoadingOverlay isLoading={loading} />
      <div className="max-w-md w-full bg-white border border-gray-300 rounded-lg p-8">
        <div className="flex justify-center mb-6">
          {paymentInfo?.payment_status === 'PS' ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 text-green-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 110-12 6 6 0 010 12zm3.707-7.707a1 1 0 00-1.414 1.414L10 11.414l-2.293-2.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l4-4a1 1 0 000-1.414z" clipRule="evenodd" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 text-red-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M18 10c0-4.418-3.582-8-8-8s-8 3.582-8 8 3.582 8 8 8 8-3.582 8-8zm-8 6a6 6 0 100-12 6 6 0 000 12z" clipRule="evenodd" />
            </svg>
          )}
        </div>

        <h1 className="text-3xl font-bold text-center mb-4">{paymentInfo?.payment_status === 'PS' ? 'Payment Success' : 'Payment Failed'}</h1>

        {paymentInfo ? (
          <div>
            <p className="text-lg mb-2 text-gray-700">Order Id: <span className="font-semibold text-blue-500">{paymentInfo.merchant_transaction_id}</span></p>
            <p className="text-lg mb-2 text-gray-700">Order Amount: <span className="font-semibold">{paymentInfo.order_amount}</span></p>
            <p className="text-lg mb-2 text-gray-700">Payment Amount: <span className="font-semibold text-red-600">{paymentInfo.payment_amount}</span>
            <span className="font-semibold text-md px-2">({paymentInfo.payment_currency_code})</span>
            </p>
            <p className="text-lg mb-4 text-gray-700">Payment Status: <span className={`font-semibold ${paymentInfo.payment_status === 'PS' ? 'text-green-500' : 'text-red-500'}`}>{paymentInfo.payment_status === 'PS' ? 'SUCCESS' : 'Failed'}</span></p>
          </div>
        ) : (
          <p className="text-lg text-gray-600">Loading payment information...</p>
        )}

        <div className="mt-6 flex justify-center space-x-4">
          <a href="/" className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-600 transition duration-300">return to home</a>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
