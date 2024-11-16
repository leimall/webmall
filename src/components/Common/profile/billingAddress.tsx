"use client"
import { useEffect, useState } from 'react';
import { message } from 'antd'; // 使用 Ant Design 的 message 组件来显示反馈信息
import { getCountry, createBillingAddress, updateBillingAddress, getBillingAddress } from '@/apis/address';
import type { CountryItem } from '@/types/category';
import type { AddressItem, BillingAddressItem } from '@/types/address';

import Dropdown from '@/components/UI/CommDropdown';

interface ModalProps {
  address?: AddressItem | null;
}


const BillingAddressModa:  React.FC<ModalProps> = ({ address }) => {
  const [countries, setCountries] = useState<CountryItem[]>([]);
  const [total, setTotal] = useState(0);
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [formData, setFormData] = useState<BillingAddressItem>();

  const fetchCountry = async () => {
    try {
      const response = await getCountry();
      setCountries(response.data.list);
    } catch (error) {
      message.error("Failed to fetch countries");
    }
  };

  useEffect(() => {
    fetchCountry();
    handleGetBillingAddress()
  }, []);

  const handleGetBillingAddress = async () => {
    try {
      const response = await getBillingAddress();
      if (response.code === 0) {
        setFormData(response.data);
      }
    } catch (error) {
      message.error("Failed to fetch billing addresses");
    }
  };

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCountry = countries.find((country: CountryItem) => country.code === e.target.value);
    if (selectedCountry) {
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
  };


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // if (formData.ID) {
    //   try {
    //     const response = await updateBillingAddress(formData);
    //     message.success("Update Address Successfully");
    //   } catch (error) {
    //     message.error("Failed to update address");
    //   }

    // } else {
    //   try {
    //     const response = await createBillingAddress(formData);
    //     message.success("Address added successfully");
    //   } catch (error) {
    //     message.error("Failed to add address");
    //   }
    // }
  };

  const handleSelect = (selectedOption: { value: string; label: string }) => {
  };
  const handleCheckboxChange = () => {
  }

  const onCancel = () => {
  }


  const countryOptions = [
    { name_en: 'United States', code: 'US', flagUrl: '/flags/us.svg' },
    { name_en: 'Canada', code: 'CA', flagUrl: '/flags/ca.svg' },
    { name_en: 'United Kingdom', code: 'UK', flagUrl: '/flags/uk.svg' },
    // 可以继续添加国家
  ];

  const handleSelectCountry = (selectedCountry: { value: string; label: string }) => {
    console.log('Selected country:', selectedCountry);
    // 在此处处理选中的国家逻辑
  };


  return (
    <div>
      <div className="flex items-center py-4 md:py-8">
        <input
          id="isDefault"
          name="isDefault"
          type="checkbox"
          onChange={handleCheckboxChange}
          className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
        />
        <label htmlFor="isDefault" className="ml-2 text-sm">Set as default address.</label>
      </div>
      <div>
        {address?.ID}
      </div>
      <form onSubmit={handleSubmit} className="mt-2">
        <div>
          <h3 className="text-base text-gray-800 mb-4">Personal Details</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <input
                id="firstName"
                name="firstName"
                type="text"
                value={formData?.firstName}
                onChange={handleChange}
                placeholder="First Name"
                className="px-4 py-3 bg-gray-50 focus:bg-transparent text-fta-primary-700 w-full text-sm rounded-md focus:outline-fta-primary-300" />
            </div>

            <div>
              <input
                id="lastName"
                name="lastName"
                type="text"
                value={formData?.lastName}
                onChange={handleChange}
                placeholder="Last Name"
                className="px-4 py-3 bg-gray-50 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-fta-primary-300" />
            </div>

            <div>
              <input
                id="email"
                name="email"
                type="text"
                value={formData?.email}
                onChange={handleChange}
                placeholder="Email"
                className="px-4 py-3 bg-gray-50 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-fta-primary-300" />
            </div>

            <div>
              <input
                id="phone"
                name="phone"
                type="text"
                value={formData?.phone}
                onChange={handleChange}
                placeholder="Phone No."
                className="px-4 py-3 bg-gray-50 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-fta-primary-300" />
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
              value={formData?.street1}
              onChange={handleChange}
              placeholder="Address Line"
              className="px-4 py-3 bg-gray-50 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-fta-primary-300" />
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <input id="city"
                name="city"
                type="text"
                value={formData?.city}
                onChange={handleChange}
                placeholder="City"
                className="px-4 py-3 bg-gray-50 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-fta-primary-300" />
            </div>
            <div>
              <input id="zipCode"
                name="zipCode"
                type="text"
                value={formData?.zipCode}
                onChange={handleChange}
                placeholder="Zip Code"
                className="px-4 py-3 bg-gray-50 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-fta-primary-300" />
            </div>
            <div>
              <Dropdown title='Select Country' options={countryOptions} onSelect={handleSelectCountry} />
            </div>
            <div>
              <Dropdown title='Select State' options={countryOptions} onSelect={handleSelectCountry} />
            </div>
          </div>


          <div className="flex mt-4 gap-4 max-md:flex-col">
            <button type="button" onClick={onCancel} className="rounded-md px-6 py-3 w-full text-sm tracking-wide bg-transparent hover:bg-gray-50 border border-gray-300 text-gray-800 max-md:order-1">Cancel</button>
            <button type="submit" className="w-full px-4 py-2 text-white bg-indigo-600 rounded-md">OK</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default BillingAddressModa;