"use client"
import { useEffect, useState } from 'react';
import { message } from 'antd'; // 使用 Ant Design 的 message 组件来显示反馈信息
import { getCountry, createMyselfAddress, updateMyselfAddress } from '@/apis/address';
import type { CountryItem } from '@/types/category';
import type { AddressItem } from '@/types/address';

import Dropdown from '@/components/UI/Dropdown';

interface ModalProps {
  isOpen: boolean;
  initialData?: AddressItem | null;
  onClose: () => void;
  onGetData: () => void;
}

const AddressModal: React.FC<ModalProps> = ({ isOpen, initialData, onClose, onGetData }) => {
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
  const init = {
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
  }

  const fetchCountry = async () => {
    try {
      const response = await getCountry();
      setCountries(response.data.list);
    } catch (error) {
      message.error("Failed to fetch countries");
    }
  };

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    } else {
      setFormData(init)
    }
  }, [initialData, isOpen]);

  useEffect(() => {
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
        isDefault: 1
      })
    } else {
      setFormData({
        ...formData,
        isDefault: 0
      })
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (initialData) {
      try {
        const response = await updateMyselfAddress(formData);
        message.success("Update Address Successfully");
      } catch (error) {
        message.error("Failed to update address");
      }

    } else {
      try {
        const response = await createMyselfAddress(formData);
        message.success("Address added successfully");
      } catch (error) {
        message.error("Failed to add address");
      }
    }
    onGetData()
    onClose()
  };

  const handleSelect = (selectedOption: { value: string; label: string }) => {
    setFormData({
      ...formData,
      country: selectedOption.label,
      countryCode: selectedOption.value,
    });;
  };


  return (
    <div className={`${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
      <div className="fixed inset-0 p-4 flex flex-wrap justify-center items-center w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto font-[sans-serif]">
        <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-8 relative">
          <div className="flex items-center">
            <h3 className="text-blue-600 text-xl font-bold flex-1">{initialData ? 'Edit Address' : 'Add New Address'}</h3>
            <svg xmlns="http://www.w3.org/2000/svg" onClick={onClose} className="w-3 ml-2 cursor-pointer shrink-0 fill-gray-400 hover:fill-red-500"
              viewBox="0 0 320.591 320.591">
              <path
                d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                data-original="#000000"></path>
              <path
                d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                data-original="#000000"></path>
            </svg>
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
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="First Name"
                    className="px-4 py-3 bg-gray-50 focus:bg-transparent text-fta-primary-700 w-full text-sm rounded-md focus:outline-fta-primary-300" />
                </div>

                <div>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Last Name"
                    className="px-4 py-3 bg-gray-50 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-fta-primary-300" />
                </div>

                <div>
                  <input
                    id="email"
                    name="email"
                    type="text"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="px-4 py-3 bg-gray-50 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-fta-primary-300" />
                </div>

                <div>
                  <input
                    id="phone"
                    name="phone"
                    type="text"
                    value={formData.phone}
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
                  value={formData.street1}
                  onChange={handleChange}
                  placeholder="Address Line"
                  className="px-4 py-3 bg-gray-50 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-fta-primary-300" />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>

                  <input id="city"
                    name="city"
                    type="text"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="City"
                    className="px-4 py-3 bg-gray-50 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-fta-primary-300" />
                </div>
                <div>
                  <input
                    id="state"
                    name="state"
                    type="text"
                    value={formData.state}
                    onChange={handleChange}
                    placeholder="State"
                    className="px-4 py-3 bg-gray-50 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-fta-primary-300" />
                </div>
                <div>
                  <input id="zipCode"
                    name="zipCode"
                    type="text"
                    value={formData.zipCode}
                    onChange={handleChange}
                    placeholder="Zip Code"
                    className="px-4 py-3 bg-gray-50 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-fta-primary-300" />
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
                <button type="button" onClick={onClose} className="rounded-md px-6 py-3 w-full text-sm tracking-wide bg-transparent hover:bg-gray-50 border border-gray-300 text-gray-800 max-md:order-1">Cancel</button>
                <button type="submit" className="w-full px-4 py-2 text-white bg-indigo-600 rounded-md">{initialData ? "Save" : "Create"}</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AddressModal;