'use client'
import ProductList from '@/components/Common/checkout/productItem';
import { useEffect, useState } from 'react';
import { useOrderStore } from '@/stores/useOrdersStore';
import { getCountry, getMyselfAddress, setDefaultAddress } from '@/apis/address'
import type { AddressItem } from '@/types/address';
import AddressPage from '@/components/Common/address';

import AddressSelector from '@/components/UI/Radio';
import ToggleContent from '@/components/Common/checkout/Toggle';

import AddressSkeleton from '@/components/Common/address/skeleton'
import { Order } from '@/types/stores/orders';
import AddressModal from '@/components/Common/profile/address';

const CheckoutPage = () => {
  const { order } = useOrderStore();
  const [updateOrder, setUpdateOrder] = useState<Order>() || null;
  const [address, setAddress] = useState<AddressItem[]>([]);
  const [defaultAddress, setDefaultAddress] = useState('Please select the shipping address.');
  const [items, setItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState(true)
  const [num, setNum] = useState(1)
  const [isModal, setIsModal] = useState(false)

  const [formData, setFormData] = useState<AddressItem | null>(null);

  // useEffect(() => {
  //   if (authenticated) {

  //   } else{

  //   }
  // }, [authenticated])

  useEffect(() => {
    setLoading(true);
    if (order?.products) {
      setItems(order?.products)
    }
    getAddress()
  }, [order]);

  useEffect(() => {
    if (order?.shippingAddressId) {
      if (address && address.length > 0) {
        const finddefautl = address.find((e) => e.ID === order.shippingAddressId)
        if (finddefautl) {
          setSeletedAddress(finddefautl)
          setValue(false)
          handleShippingAddressID(finddefautl.ID)
          setNum(finddefautl.ID)
        }
      }
    } else {
      if (address && address.length > 0) {
        const finddefautl = address.find((e) => e.isDefault === num)
        if (finddefautl) {
          setSeletedAddress(finddefautl)
          setValue(false)
          handleShippingAddressID(finddefautl.ID)
          setNum(finddefautl.ID)
        }
      }
    }
    setLoading(false)
  }, [address])



  const getAddress = async () => {
    const res = await getMyselfAddress()
    if (res.code === 0) {
      setAddress(res.data?.list ?? [])
    }
  }

  const handleShippingAddressID = (id: number) => {
    setUpdateOrder((order) => {
      if (order) {
        return { ...order, shippingAddressId: id }
      }
      return { shippingAddressId: id } as Order
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

  const handleAddressSelect = (selectedAddress: AddressItem) => {
    setSeletedAddress(selectedAddress)
    handleShippingAddressID(selectedAddress.ID)
  };

  const handleSNewAddress = () => {
    setFormData(null)
    setIsModal(true)
  };
  const handleCloseModal = () => {
    setIsModal(false)
  }


  return (
    <div>
      <div className="relative mx-auto max-w-c-1024 py-5 justify-between align-items:flex-end px-2 md:px-8 2xl:px-0">
        <h2 className="text-2xl font-bold text-gray-800 pb-2 md:pb-8">Complete your information</h2>

        {loading ? (
          <AddressSkeleton />
        ) : (
          <div className="flex flex-col  md:flex-row ">
            <div className="w-full md:w-7/12">
              <div className="space-y-4">
                <h3>Set shipping address</h3>
                <ToggleContent title={defaultAddress} value={value}>
                  <AddressSelector
                    addresses={address}
                    defaultValue={num}
                    onSelect={handleAddressSelect}
                  />
                  <div className='text-right'>
                  <button type="button" onClick={handleSNewAddress}
                    className="px-3 py-2.5 rounded-lg text-white text-sm tracking-wider font-medium border border-current outline-none bg-orange-700 hover:bg-orange-800 active:bg-orange-700">Add New Address</button>
                  </div>
                </ToggleContent>
                <h3>Checkout</h3>
                <ToggleContent title="Fill in payment information" value={true}>
                  <p className="text-sm text-gray-600">Content for the second question goes here.</p>
                </ToggleContent>
              </div>
            </div>
            <div className='w-full md:w-5/12 md:ml-8 sx:ml-0 '>
              <div className="border rounded-md md:mt-0 mt-4 sm:ml-0 p-4 bg-background-back1">
                {items.map((item) => (
                  <ProductList item={item} key={item.product_id} />
                ))}
                <div className='flex justify-between'>
                  <div className="text-md font-bold">Total:</div>
                  <div className="text-md font-bold text-red-600">${order?.totalPrice.toFixed(2)}</div>
                </div>
              </div>
            </div>
          </div>
        )}
        <AddressModal isOpen={isModal} initialData={formData}  onClose={handleCloseModal} onGetData={getAddress} />
      </div>
    </div>
  );
}

export default CheckoutPage;
