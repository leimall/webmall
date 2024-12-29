"use client"
import { useEffect, useState } from 'react';
import { message } from 'antd'; // 使用 Ant Design 的 message 组件来显示反馈信息
import { getCountry, getMyselfAddress, setDefaultAddress, deleteAddress } from '@/apis/address';
import type { CountryItem } from '@/types/category';
import type { AddressItem } from '@/types/address';
import { useAuthenticated } from '@/hooks/useAuthentication';
import AddressModal from '@/components/Common/profile/address';
// import address from '@/components/Common/address';

export default function AddressPage() {
  const { authenticated } = useAuthenticated();
  const [countries, setCountries] = useState<CountryItem[]>([]);
  const [address, setAddress] = useState<AddressItem[]>([]);
  const [total, setTotal] = useState(0);
  const [isModal, setIsModal] = useState(false)

  const [formData, setFormData] = useState<AddressItem | null>(null);
  const [modeTitle, setModeTitle] = useState<"create" | "edit">("create");

  // useEffect(() => {
  //   if (authenticated) {

  //   } else{

  //   }
  // }, [authenticated])

  useEffect(() => {
    fetchMyselfAddress();
    fetchCountry();
  }, []);

  const fetchMyselfAddress = async () => {
    try {
      const response = await getMyselfAddress();
      setAddress(response.data?.list ?? []);
      setTotal(response.data?.total ?? 0);
    } catch (error) {
      message.error("Failed to fetch address");
    }
  };

  const fetchCountry = async () => {
    try {
      const response = await getCountry();
      setCountries(response.data.list);
    } catch (error) {
      message.error("Failed to fetch countries");
    }
  };



  const handleSetDefaultAddress = async (id: number) => {
    try {
      const response = await setDefaultAddress({id});
      message.success("Address set as default successfully");
      fetchMyselfAddress();
    } catch (error) {
      message.error("Failed to set address as default");
    }
  };

  const handleDeleteAddress = async (id: number) => {
    try {
      const response = await deleteAddress({id});
      message.success("Address deleted successfully");
      fetchMyselfAddress();
    } catch (error) {
      message.error("Failed to delete address");
    }
  };

  const handleEditAddress = (address: AddressItem) => {
    setFormData(address)
    setModeTitle("edit")
    setIsModal(true)
  };

  const handleSNewAddress =  () => {
    setFormData(null)
    setModeTitle("create")
    setIsModal(true)
  };
  const handleCloseModal = () => {
    setIsModal(false)
  }

  return (
    <div className="relative mx-auto max-w-c-1024 items-center justify-between align-items:flex-end md:px-8 2xl:px-0">
      <div className="bg-white w-full flex flex-col md:px-16 lg:px-28 md:flex-row text-[#161931]">
        <div className="hidden py-4 md:w-1/3 lg:w-1/4 md:block">
          <div className="sticky flex flex-col gap-2 p-4 text-sm border-r border-indigo-100 top-12">
            <h2 className="pl-3 mb-4 text-center text-2xl font-semibold">Settings</h2>
            <a href="/profile/myself" className="flex justify-center items-center px-3 py-2.5 font-semibold hover:text-fta-primary-500 hover:border hover:rounded-full border-fta-primary-500">
              Profile
            </a>
            <a href="/profile/orders" className="flex justify-center items-center px-3 py-2.5 font-semibold hover:text-fta-primary-500 hover:border hover:rounded-full border-fta-primary-500">
              Order
            </a>
            <div className="flex text-bold items-center justify-center px-3 py-2.5 font-bold bg-white text-fta-primary-500 border rounded-full border-fta-primary-500">
              Address
            </div>
            {/* <a href="#" className="flex items-center px-3 py-2.5 font-semibold hover:text-fta-primary-500 hover:border hover:rounded-full">
              PRO Account
            </a> */}
          </div>
        </div>
        <div className="w-full min-h-screen py-1 md:w-2/3 lg:w-3/4">
          <div className="p-2 md:p-4">
            {total > 0 ? (
              <div className="w-full px-0 md:px-6 pb-8 sm:max-w-xl sm:rounded-lg">
                <div className='flex justify-between'>
                <h3 className="text-lg font-semibold">Your Addresses</h3>
                <button
                className="bg-yellow-700 hover:bg-yellow-900 text-xs text-white  py-1 px-2 rounded"
                onClick={handleSNewAddress}
              >
                New Address
              </button>

                </div>
                <ul className="mt-4 space-y-4">
                  {address.map((item: AddressItem) => (
                    <li key={item.ID} className={`${item.isDefault ? "border-fta-background-400": ""} p-4 border rounded-md relative`}>
                      {item.isDefault ? <div className="absolute top-0 right-0 bg-orange-600 text-white text-xs px-2 py-1 rounded-bl-md">Default</div> : ''}
                      <p>{item.firstName} {item.lastName} {item.phone}</p>
                      <p>{item.line1},</p>
                      <p>{item.line2}, {item.city}, {item.state}</p>
                      <p>{item.country}, {item.postalCode}</p>

                     
                        <div className="text-right space-x-2">
                          <button
                            className="bg-blue-600 hover:bg-blue-800 text-xs text-white py-1 px-2 rounded"
                            onClick={() => handleEditAddress(item)}
                          >
                            Edit
                          </button>
                          <button
                            className="bg-zinc-500 hover:bg-zinc-700 text-xs text-white py-1 px-2 rounded"
                            onClick={() => handleDeleteAddress(item.ID)}
                          >
                            Delete
                          </button>
                          {!item.isDefault && (
                          <button
                            className="bg-yellow-700 hover:bg-yellow-900 text-xs text-white py-1 px-2 rounded"
                            onClick={() => handleSetDefaultAddress(item.ID)}
                          >
                            Set Default
                          </button>
                          )}
                        </div>
                      
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <p className="mt-8">No addresses available.</p>
            )}
            <div>
              <AddressModal isOpen={isModal} addressData={formData} onClose={handleCloseModal} onGetData={fetchMyselfAddress} mode={modeTitle} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
