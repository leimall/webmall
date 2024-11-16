'use client'
import ProductList from '@/components/Common/checkout/productItem';
import { useEffect, useState } from 'react';
import { getCountry, getMyselfAddress, getBillingAddress, createBillingAddress, updateBillingAddress } from '@/apis/address'
import { updateOrderInfo, getOneOrderById } from '@/apis/orders'
import type { AddressItem, BillingAddressItem } from '@/types/address';
import LoadingOverlay from './overlay';

import AddressSelector from '@/components/UI/Radio';
import ToggleContent from '@/components/Common/checkout/Toggle';

import AddressSkeleton from '@/components/Common/address/skeleton'
import { Order, OrderType } from '@/types/stores/orders';
import AddressModal from '@/components/Common/profile/address';
import PaymentForm from '@/components/Common/checkout/payment';
import { useOrderStore } from '@/stores/useOrdersStore';
import Script from 'next/script';
import { message } from 'antd';
import LoadingPayment from './LoadingPayment';
import BillingAddressModal from '@/components/Common/profile/billingAddress';
import { postCreatLLPayOrder } from '@/apis/llpay';
import type { ReqCreateOrderType } from '@/types/llpay/createOrder'
import { useNowBuyStore } from '@/stores/useNowBuyStore';
import { useCartStore } from '@/stores/useCartStore';


const CheckoutPage = () => {
  const { clearCartItem } = useCartStore();
  const { orderId } = useNowBuyStore()
  const [myselfOrder, setMyselfOrder] = useState<OrderType>() || null;
  const [addressloading, setAddressloading] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<'llpay' | 'paypal'>('llpay');
  const [payloading, setPayloading] = useState(false);
  const [address, setAddress] = useState<AddressItem[]>([]);
  const [billingAddress, setBillingAddress] = useState<AddressItem>() || null;
  const [defaultAddress, setDefaultAddress] = useState('Please select the shipping address.');
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState(true)
  const [num, setNum] = useState(1)
  const [isModal, setIsModal] = useState(false)

  const [formData, setFormData] = useState<AddressItem | null>(null);

  useEffect(() => {
    if (orderId) {
      getAddress()
      handleGetOrder(orderId)
    }
    setTimeout(() => {
      setLoading(false)
    }, 1000);
  }, [orderId]);

  const handleGetOrder = async (id: string) => {
    try {
      const res = await getOneOrderById(id as string)
      if (res.code === 0 && res.data) {
        setMyselfOrder(res.data)
        setProducts(res.data.Products)
        setAddressDefault(res.data.shipping_address_id)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const setAddressDefault = (id: number) => {
    if (id === 0) {
      if (address && address.length > 0) {
        const finddefautl = address.find((e) => e.isDefault === num)
        if (finddefautl) {
          setSeletedAddress(finddefautl)
          setValue(false)
          handleShippingAddressID(finddefautl.ID)
          setNum(finddefautl.ID)
          setBillingAddress(finddefautl)
        }
      }
    } else {
      setNum(id)
      const finddefautl = address.find((e) => e.ID === id)
      if (finddefautl) {
        setSeletedAddress(finddefautl)
        setValue(false)
        handleShippingAddressID(finddefautl.ID)
        setBillingAddress(finddefautl)
      }
    }
  }

  const getAddress = async () => {
    const res = await getMyselfAddress()
    if (res.code === 0) {
      setAddress(res.data?.list ?? [])
    }
  }

  const handleShippingAddressID = (id: number) => {
    setMyselfOrder((myselfOrder) => {
      if (myselfOrder) {
        return { ...myselfOrder, shipping_address_id: id }
      }
      return myselfOrder
    })
  }


  const setSeletedAddress = (address: AddressItem) => {
    const fullAddress = `${address.firstName} ${address.lastName} ${address.street1}`;
    setDefaultAddress(fullAddress)
  }

  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const handleAddressSelect = async (selectedAddress: AddressItem) => {
    setAddressloading(true)
    setNum(selectedAddress.ID)
    setBillingAddress(selectedAddress)
    setSeletedAddress(selectedAddress)
    try {
      if (myselfOrder) {
        myselfOrder.shipping_address_id = selectedAddress.ID
        const res = await updateOrderInfo(myselfOrder)
        if (res.code === 0) {
          setMyselfOrder(myselfOrder)
          message.success('Address updated successfully')
        }
      }
      setAddressloading(false)
    } catch (error) {
      console.log(error)
      setAddressloading(false)
    }
  };

  const handlePaymentOrder = (method: 'llpay' | 'paypal') => {
    try {
      if (myselfOrder) {
        myselfOrder.payment_method = method
        updateOrderInfo(myselfOrder)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const handleSNewAddress = () => {
    setFormData(null)
    setIsModal(true)
  };

  const handleEditAddress = (address: AddressItem) => {
    setFormData(address)
    setIsModal(true)
  };

  const handleCloseModal = () => {
    setIsModal(false)
  }
  const gotoSuccessPage = (order: any) => {
    const {merchant_transaction_id, payment_data} = order
    const mid = `merchant_transaction_id=${merchant_transaction_id}&payment_currency_code=${payment_data.payment_currency_code}&payment_amount=${payment_data.payment_amount}&payment_status=${payment_data.payment_status}&order_amount=${payment_data.payment_amount}`
    const url = `http://localhost:3008/payment/?${mid}`
    window.location.href = url
  }

  const onPaymentHandler = async (cardToken: string, token: string, cardName: string) => {
    try {
      if (selectedPaymentMethod === 'llpay') {
        const cardData: ReqCreateOrderType = {
          cardToken: cardToken,
          token: token,
          cardName: cardName,
          method: 'llpay',
          orderId: orderId, // Provide empty string as fallback
        }

        const response = await postCreatLLPayOrder(cardData)
        const { data, msg } = response;
        if (data.return_code === "SUCCESS") {
          handlePaymentOrder(selectedPaymentMethod)
          const order = data.Order;
          if (order && order["3ds_status"] === "CHALLENGE") {
            console.log("3DS challenge...");
            clearCartItem();
            window.location.href = order.payment_url;
          } else {
            console.log("3DS :", order.payment_data.payment_status);
            gotoSuccessPage(order)
          }
        } else {
          console.error(`Payment failed: ${data.return_message || msg}`);
        }


      } else {
        // paypal payment
        // const res = await paypalPayment(token)
        // if (res.code === 0) {
        //   message.success('Payment successful')
        // } else {
        //   message.error('Payment failed, please try again later')
        // }
      }
      setPayloading(false)
    } catch (error) {
      message.error('Payment failed, please try again later')
      console.log(error)
      setPayloading(false)
    }
  }

  const handleLoading = async (value: boolean) => {
    setPayloading(value)
  }

  const handlePaymentMethodChange = (method: 'llpay' | 'paypal') => {
    setSelectedPaymentMethod(method);
  };



  return (
    <div>
      <div className="relative mx-auto max-w-c-1024 py-5 justify-between align-items:flex-end px-2 md:px-8 2xl:px-0">
        <LoadingPayment isLoading={payloading} />
        <h2 className="text-2xl font-bold text-gray-800 pb-2 md:pb-8">Complete your information</h2>
        {loading ? (
          <AddressSkeleton />
        ) : (
          <div className="flex flex-col  md:flex-row ">
            <div className="w-full md:w-7/12">
              <div className="space-y-4">
                <h3>Set Shipping Address</h3>
                <ToggleContent title={defaultAddress} value={value}>
                  <div className='relative'>
                    <LoadingOverlay isLoading={addressloading} />
                    <AddressSelector
                      addresses={address}
                      defaultValue={num}
                      onSelect={handleAddressSelect}
                      onEdit={handleEditAddress}
                    />
                    <div className='text-right mt-2 md:mt-4'>
                      <button type="button" onClick={handleSNewAddress}
                        className="px-3 py-2.5 rounded-lg text-white text-sm tracking-wider font-medium border border-current outline-none bg-orange-700 hover:bg-orange-800 active:bg-orange-700">Add New Address</button>
                    </div>

                  </div>
                </ToggleContent>
                <h3>Set Billing Information</h3>
                <ToggleContent title="Billing Information" value={true}>
                  <div className="flex flex-col">
                    <BillingAddressModal address={billingAddress} />
                  </div>
                </ToggleContent>
                <h3>Checkout</h3>
                <ToggleContent title="Choose your payment method" value={true}>

                  <div className="grid gap-4 sm:grid-cols-2 mt-4">
                    <div className="flex items-center">
                      <input type="radio" className="w-5 h-5 cursor-pointer" id="card"
                        checked={selectedPaymentMethod === 'llpay'}
                        onChange={() => handlePaymentMethodChange('llpay')} />
                      <label className="ml-4 flex gap-2 cursor-pointer">
                        Card
                      </label>
                    </div>

                    {/* <div className="flex items-center">
                      <input type="radio" className="w-5 h-5 cursor-pointer" id="paypal"
                        checked={selectedPaymentMethod === 'paypal'}
                        onChange={() => handlePaymentMethodChange('paypal')} />
                      <label className="ml-4 flex gap-2 cursor-pointer">
                        PayPal
                      </label>
                    </div> */}
                  </div>

                  {/* <PaymentForm onPaymentSubmit={onPaymentHandler} onLoading={handleLoading} /> */}

                  {selectedPaymentMethod === 'llpay' ? (
                    <PaymentForm onPaymentSubmit={onPaymentHandler} onLoading={handleLoading} />
                  ) : (
                    <div className="mt-6">
                      <h4 className="text-md font-medium">PayPal Selected</h4>
                      <p className="text-gray-600">Proceed with PayPal to complete the transaction.</p>
                      <button
                        onClick={(e) => onPaymentHandler('', '', '')}
                        className="mt-4 w-full bg-yellow-500 text-white font-semibold py-2 rounded-md hover:bg-yellow-600"
                      >
                        Pay with PayPal
                      </button>
                    </div>
                  )}
                </ToggleContent>
              </div>
            </div>
            <div className='w-full md:w-5/12 md:ml-8 sx:ml-0 '>
              <div className="border rounded-md md:mt-0 mt-4 sm:ml-0 p-4 bg-background-back1">
                {products.map((item) => (
                  <ProductList item={item} key={item.product_id} />
                ))}
                <div className='flex justify-between'>
                  <div className="text-md font-bold">Total:</div>
                  <div className="text-md font-bold text-red-600">${myselfOrder ? myselfOrder.total_price.toFixed(2) : 0}</div>
                </div>
              </div>
            </div>
          </div>
        )}
        <AddressModal isOpen={isModal} initialData={formData} onClose={handleCloseModal} onGetData={getAddress} />
      </div>
    </div>
  );
}

export default CheckoutPage;
