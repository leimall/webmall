"use client"
import { useEffect, useState } from 'react';
import { message, Select } from 'antd'; // 使用 Ant Design 的 message 组件来显示反馈信息
import { getCountry, createMyselfAddress, getMyselfAddress } from '@/apis/address';
import type { CountryItem } from '@/types/category';
import type { AddressItem } from '@/types/address';

import Dropdown from '@/components/UI/Dropdown';

export default function Address() {
  const [isOpen, setIsOpen ] = useState(false)
  const [countries, setCountries] = useState<CountryItem[]>([]);
  const [address, setAddress] = useState<AddressItem[]>([]);
  const [total, setTotal] = useState(0);
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);


  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    street1: '',
    email: '',
    city: '',
    state: '',
    country: '',
    countryCode: '',
    zipCode: '',
    phone: '',
    isDefault: 0,
  });

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

  useEffect(() => {
    fetchMyselfAddress();
    fetchCountry();
  }, []);

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCountry = countries.find((country: CountryItem) => country.code === e.target.value);
    if (selectedCountry) {
      setFormData({
        ...formData,
        country: selectedCountry.name_en,
        countryCode: selectedCountry.code,
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleIsDefault = (event: React.ChangeEvent<HTMLInputElement>) => {
    // 检查复选框是否被选中
    if (event.target.checked) {
      setFormData({
        ...formData,
        isDefault:1
      })
    } else {
      setFormData({
        ...formData,
        isDefault:0
      })
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // try {
    //   const response = await createMyselfAddress(formData);
    //   message.success("Address added successfully");
    // } catch (error) {
    //   message.error("Failed to add address");
    // }
  };

  const handleSelect = (selectedOption: { value: string; label: string }) => {
    setFormData({
      ...formData,
      country: selectedOption.label,
      countryCode: selectedOption.value,
    });;
  };

  const handleOpenAddAddress = () => {
   setIsOpen(!isOpen) 
  }


  return (
    <div>
    <div className={`w-full text-right  px-1 sm:max-w-xl sm:rounded-lg  ${!isOpen ? 'block' : 'hidden'}`}>
    <button type="button" onClick={handleOpenAddAddress}
        className="px-3 py-2.5 rounded-lg text-white text-sm tracking-wider font-medium border border-current outline-none bg-orange-700 hover:bg-orange-800 active:bg-orange-700">Add New Address</button>
    </div>
    <div className={`w-full px-1 sm:max-w-xl sm:rounded-lg  ${isOpen ? 'block' : 'hidden'}`}>
      <div className="w-full h-max rounded-md sticky top-0">
      <h2 className="text-xl py-4 font-bold text-gray-800">Complete your address information</h2>
        <form onSubmit={handleSubmit} className="mt-2">
          <div>
            <h3 className="text-base text-gray-800 mb-4">Personal Details</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First Name"
                  className="px-4 py-3 bg-gray-50 focus:bg-transparent text-primary-700 w-full text-sm rounded-md focus:outline-primary-300" />
              </div>

              <div>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last Name"
                  className="px-4 py-3 bg-gray-50 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-primary-300" />
              </div>

              <div>
                <input
                  id="email"
                  name="email"
                  type="text"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="px-4 py-3 bg-gray-50 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-primary-300" />
              </div>

              <div>
                <input
                  id="phone"
                  name="phone"
                  type="text"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone No."
                  className="px-4 py-3 bg-gray-50 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-primary-300" />
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-base text-gray-800 mb-4">Shipping Address</h3>
            <div className='py-4'>
              <input
                id="street1"
                name="street1"
                type="text"
                value={formData.street1}
                onChange={handleChange}
                placeholder="Address Line"
                className="px-4 py-3 bg-gray-50 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-primary-300" />
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>

                <input id="city"
                  name="city"
                  type="text"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="City"
                  className="px-4 py-3 bg-gray-50 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-primary-300" />
              </div>
              <div>
                <input
                  id="state"
                  name="state"
                  type="text"
                  value={formData.state}
                  onChange={handleChange}
                  placeholder="State"
                  className="px-4 py-3 bg-gray-50 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-primary-300" />
              </div>
              <div>
                <input id="zipCode"
                  name="zipCode"
                  type="text"
                  value={formData.zipCode}
                  onChange={handleChange}
                  placeholder="Zip Code"
                  className="px-4 py-3 bg-gray-50 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-primary-300" />
              </div>
              <div>
                <Dropdown options={countries} onSelect={handleSelect} />
              </div>
            </div>

            <div className="flex items-center py-4 md:py-8">
              <input
                id="isDefault"
                name="isDefault"
                type="checkbox"
                onChange={handleIsDefault}
                className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
              />
              <label htmlFor="isDefault" className="ml-2 text-sm">Set as default address.</label>
            </div>

            <div className="flex gap-4 max-md:flex-col">
              <button type="button" onClick={handleOpenAddAddress} className="rounded-md px-6 py-3 w-full text-sm tracking-wide bg-transparent hover:bg-gray-50 border border-gray-300 text-gray-800 max-md:order-1">Cancel</button>
              <button type="submit" className="w-full px-4 py-2 text-white bg-indigo-600 rounded-md">save</button>
            </div>
          </div>
        </form>
      </div >
    </div >
    </div>
  )
}