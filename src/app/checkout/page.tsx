'use client'
import ProductList from '@/components/Common/checkout/productItem';
import { useEffect, useState } from 'react';
import { getMyselfAddress, getBillingAddress, createORUpdateBillingAddress, setDefaultAddress } from '@/apis/address'
import { updateOrderInfo, getOneOrderById } from '@/apis/orders'
import type { AddressItem, BillingAddressItem } from '@/types/address';
import LoadingOverlay from './overlay';

import AddressSelector from '@/components/UI/Radio';
import ToggleContent from '@/components/Common/checkout/Toggle';

import AddressSkeleton from '@/components/Common/address/skeleton'
import { Order, OrderType } from '@/types/stores/orders';
import AddressModal from '@/components/Common/profile/address';
import PaymentForm from '@/components/Common/checkout/payment';
import { Checkbox, message, type CheckboxChangeEvent, type CheckboxProps } from 'antd';
import LoadingPayment from './LoadingPayment';
import BillingAddressModal from '@/components/Common/profile/billingAddress';
import { postCreatLLPayOrder } from '@/apis/llpay';
import type { ReqCreateOrderType } from '@/types/llpay/createOrder'
import { useNowBuyStore } from '@/stores/useNowBuyStore';
import { useCartStore } from '@/stores/useCartStore';
import ShowBillingAddress from '@/components/Layout/Address/showBillingAddress';
import address from '@/components/Common/address';

const CheckoutPage = () => {
  const { clearCartItem } = useCartStore();
  const { orderId } = useNowBuyStore()
  const [myselfOrder, setMyselfOrder] = useState<OrderType | null>(null);
  const [addressloading, setAddressloading] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<'llpay' | 'paypal'>('llpay');
  const [payloading, setPayloading] = useState(false);
  const [address, setAddress] = useState<AddressItem[]>([]);
  const [billingAddress, setBillingAddress] = useState<BillingAddressItem | null>(null);
  const [defaultAddress, setDefaultAddress] = useState('Please select the shipping address.');
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState(true)
  const [checkedValue, setCheckedValue] = useState(true)
  const [isShowChecked, setIsShowChecked] = useState(true)
  const [num, setNum] = useState(1)
  const [isModal, setIsModal] = useState(false)
  const [isModalBilling, setIsModalBilling] = useState(false)
  const [modeTitle, setModeTitle] = useState<"create" | "edit">("create");

  const [formData, setFormData] = useState<AddressItem | null>(null);

  useEffect(() => {
    if (orderId) {
      getAddress()
      clearBillingAddress()
      handleGetOrder(orderId)
    }
    setTimeout(() => {
      setLoading(false)
    }, 800);
  }, [orderId]);

  useEffect(() => {
    if (myselfOrder) {
      updateAddressForOrder(num)
    }
  }, [myselfOrder])

  const clearBillingAddress = () => {
    setBillingAddress({
      ID: 0,
      userId: '',
      phone: '',
      firstName: '',
      lastName: '',
      line1: '',
      line2: '',
      email: '',
      city: '',
      state: '',
      country: '',
      postalCode: '',
    });
  }

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
    const tiem = setTimeout(() => {
      console.error("setAddressDefault", address)
      clearTimeout(tiem)
    }, 1000)
    const finddefautl = address.find((e) => e.ID === id)
    if (finddefautl) {
      console.error("setAddressDefault", id)
      setValue(false)
      optionfunc(finddefautl)
    }
  }

  const getAddress = async () => {
    try {
      const resbillingAddress = await getBillingAddress()
      if (resbillingAddress.code === 0 && resbillingAddress.data) {
        const { data } = resbillingAddress
        if (data.ID) {
          setIsShowChecked(prev => {
            const newValue = !prev;
            return newValue;
          })
          setCheckedValue(prev => {
            const newValue = !prev;
            return newValue;
          })
          setBillingAddress(data)
        } else {
          setIsShowChecked(true)
          setCheckedValue(true)
        }
      }

      const res = await getMyselfAddress()
      if (res.code === 0 && res.data) {
        const list = res.data.list
        if (list && list.length > 0) {
          setAddress(list)
          const finddefautl = list.find((e) => e.isDefault === 1)
          console.error("8888888", finddefautl);
          if (finddefautl) {
            console.error("999999", finddefautl);
            optionfunc(finddefautl)
            setValue(false)
          }
        }
      }
      console.error("sssdsdfsd", isShowChecked, checkedValue, resbillingAddress);
    } catch (error) {
      console.log(error)
    }
  }

  const optionfunc = (item: AddressItem) => {
    setNum(item.ID)
    setSeletedAddress(item)
    handleShippingAddressID(item.ID)
    updateAddressForOrder(item.ID)
    console.error("optinfunc setbilling address", item);
    if (isShowChecked && checkedValue) {
      cORuBillingAddress(item);
      console.error("optinfunc setbilling address", billingAddress);
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

  const cORuBillingAddress = async (item: any) => {
    setBillingAddress(item);
    try {
      console.error("cORuBillingAddress", item);
      const res = await createORUpdateBillingAddress(item)
    } catch (error) {
      console.log(error)
    }
  }

  const setSeletedAddress = (address: AddressItem) => {
    const fullAddress = `${address.firstName} ${address.lastName} ${address.line1}`;
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
    optionfunc(selectedAddress)
    setAddressloading(false)
  };


  const updateAddressForOrder = async (aID: number) => {
    try {
      if (myselfOrder) {
        myselfOrder.shipping_address_id = aID
        const res = await updateOrderInfo(myselfOrder)
        if (res.code === 0) {
          setMyselfOrder(myselfOrder)
        }
      }
    } catch (error) {
      console.log(error)
    }
  }

  const handlePaymentOrder = async (method: 'llpay' | 'paypal') => {
    try {
      if (myselfOrder) {
        myselfOrder.payment_method = method
        await updateOrderInfo(myselfOrder)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const handleSNewAddress = () => {
    setFormData(null)
    setModeTitle('create')
    setIsModal(true)
  };

  const handleBillingAddress = () => {
    setIsModalBilling(true)
  }

  const handleEditAddress = (address: AddressItem) => {
    setFormData(address)
    setModeTitle('edit')
    setIsModal(true)
  };

  const handleCloseModal = () => {
    setIsModal(false)
  }
  const handleCloseModalBilling = () => {
    setIsModalBilling(false)
  }

  const gotoSuccessPage = (order: any) => {
    const { merchant_transaction_id, payment_data } = order
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

        console.error("33333", cardData);
        const response = await postCreatLLPayOrder(cardData)
        const { data, msg } = response;
        console.error("33333", data, msg);
        if (data.return_code === "SUCCESS") {
          handlePaymentOrder(selectedPaymentMethod)
          const order = data.Order;
          console.error("1111111", order);
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

  const onChange: CheckboxProps['onChange'] = (checked: CheckboxChangeEvent) => {
    console.error("11111111", checked.target.checked);
    setCheckedValue(checked.target.checked);
    if (checked.target.checked) {
      const selectedShippingAddress = address.find((e) => e.ID === num);
      if (selectedShippingAddress) {
        setBillingAddress(selectedShippingAddress);
      }
    } else {
      clearBillingAddress();
    }
  };

  const BillingAddressonEdit = () => {
    setModeTitle('edit')
    setIsModalBilling(true)
  }

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
                    {
                      isShowChecked && (
                        <Checkbox checked={checkedValue} onChange={onChange}>Same as shipping address</Checkbox>
                      )
                      || billingAddress &&
                      <div className="border relative rounded-md mt-2 p-4 border-bg-400">
                        <ShowBillingAddress address={billingAddress} />
                        <button onClick={(event) => {
                          event.stopPropagation();
                          BillingAddressonEdit();
                        }} className="absolute bottom-0 z-9 right-0 bg-bg-200 text-primary-500 text-xs px-2 py-1 rounded-tl-md cursor-pointer">Edit</button>
                      </div>
                    }
                    {
                      billingAddress && checkedValue &&
                      <div className="border relative rounded-md mt-2 p-4 border-bg-400">
                        <ShowBillingAddress address={billingAddress} />
                        <button onClick={(event) => {
                          event.stopPropagation();
                          BillingAddressonEdit();
                        }} className="absolute bottom-0 z-9 right-0 bg-bg-200 text-primary-500 text-xs px-2 py-1 rounded-tl-md cursor-pointer">Edit</button>
                      </div>
                    }
                    {
                      isShowChecked && !checkedValue &&
                      <div className='text-right mt-2 md:mt-4'>
                        <button type="button" onClick={handleBillingAddress}
                          className="px-3 py-2.5 rounded-lg text-white text-sm tracking-wider font-medium border border-current outline-none bg-orange-700 hover:bg-orange-800 active:bg-orange-700">Add Billing Address</button>
                      </div>
                    }

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
        <AddressModal isOpen={isModal} onClose={handleCloseModal} onGetData={getAddress} addressData={formData} mode={modeTitle} />

        <BillingAddressModal isOpen={isModalBilling} onClose={handleCloseModalBilling} onGetData={getAddress} addressData={billingAddress} mode={modeTitle} />
      </div>
    </div>
  );
}

export default CheckoutPage;