"use client"

import { useEffect, useState } from 'react';
import { message } from 'antd'; // 使用 Ant Design 的 message 组件来显示反馈信息
import { getCountry, createMyselfAddress, getMyselfAddress } from '@/apis/address';

export default function ProfilePage() {
  const [countries, setCountries] = useState([]);
  const [address, setAddress] = useState([]);
  const [total, setTotal] = useState(0);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    street1: '',
    street2: '',
    city: '',
    region: '',
    country: '',
    countryCode: '',
    zipCode: '',
    phone: '',
  });


  const fetchMyselfAddress = async () => {
    try {
      const response = await getMyselfAddress();
      setAddress(response.data.list);
      setTotal(response.data.total);
    } catch (error) {
      message.error("Failed to fetch captcha");
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
  const handleCountryChange = (e: any) => {
    const selectedCountry = countries.find(country => country.code === e.target.value);
    setFormData({
      ...formData,
      country: selectedCountry.name_en,
      countryCode: selectedCountry.code,
    });
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await createMyselfAddress(formData);
      message.success("Signed up successfully");
    } catch (error) {
      message.error(" to sign in");
    }
  };

  return (
    <div className="relative mx-auto max-w-c-1280 py-5 items-center justify-between align-items:flex-end px-4 md:px-8 2xl:px-0">
      <div className="bg-white w-full flex flex-col gap-5 px-3 md:px-16 lg:px-28 md:flex-row text-[#161931]">
        <div className="hidden py-4 md:w-1/3 lg:w-1/4 md:block">
          <div className="sticky flex flex-col gap-2 p-4 text-sm border-r border-indigo-100 top-12">
            <h2 className="pl-3 mb-4 text-2xl font-semibold">Settings</h2>
            <a href="#" className="flex items-center px-3 py-2.5 font-semibold hover:text-indigo-900 hover:border hover:rounded-full">
              Profile
            </a>
            <a href="#" className="flex items-center px-3 py-2.5 font-bold bg-white text-indigo-900 border rounded-full">
              Address
            </a>
            <a href="#" className="flex items-center px-3 py-2.5 font-semibold hover:text-indigo-900 hover:border hover:rounded-full">
              Notifications
            </a>
            <a href="#" className="flex items-center px-3 py-2.5 font-semibold hover:text-indigo-900 hover:border hover:rounded-full">
              PRO Account
            </a>
          </div>
        </div>
        <div className="w-full min-h-screen py-1 md:w-2/3 lg:w-3/4">
          <div className="p-2 md:p-4">
              {total > 0 ? (
                <div className="w-full px-0 md:px-6 pb-8 mt-8 sm:max-w-xl sm:rounded-lg">
                  <h3 className="text-lg font-semibold">Your Addresses</h3>
                  <ul className="mt-4 space-y-4">
                    {address.map((item) => (
                      <li key={item.id} className="p-4 border border-gray-300 rounded-md">
                        <p>{item.firstName} {item.lastName}</p>
                        <p>{item.street1}</p>
                        <p>{item.street2}</p>
                        <p>{item.city}, {item.region}</p>
                        <p>{item.country}, {item.zipCode}</p>
                        <p>{item.phone}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <p className="mt-8">No addresses available.</p>
              )}
            <div className="w-full px-0 md:px-6 pb-8 mt-8 sm:max-w-xl sm:rounded-lg">
              <h2 className="pl-6 text-2xl font-bold sm:text-xl">Address</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="flex flex-col">
                  <label htmlFor="firstName" className="text-sm font-medium">First Name</label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="mt-1 p-2 border border-gray-300 rounded-md"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="lastName" className="text-sm font-medium">Last Name</label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="mt-1 p-2 border border-gray-300 rounded-md"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="street1" className="text-sm font-medium">Street 1</label>
                  <input
                    id="street1"
                    name="street1"
                    type="text"
                    value={formData.street1}
                    onChange={handleChange}
                    className="mt-1 p-2 border border-gray-300 rounded-md"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="street2" className="text-sm font-medium">Street 2 (optional)</label>
                  <input
                    id="street2"
                    name="street2"
                    type="text"
                    value={formData.street2}
                    onChange={handleChange}
                    className="mt-1 p-2 border border-gray-300 rounded-md"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="city" className="text-sm font-medium">City</label>
                  <input
                    id="city"
                    name="city"
                    type="text"
                    value={formData.city}
                    onChange={handleChange}
                    className="mt-1 p-2 border border-gray-300 rounded-md"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="region" className="text-sm font-medium">Region</label>
                  <input
                    id="region"
                    name="region"
                    type="text"
                    value={formData.region}
                    onChange={handleChange}
                    className="mt-1 p-2 border border-gray-300 rounded-md"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="country" className="text-sm font-medium">Country</label>
                  <select
                    id="country"
                    name="country"
                    value={formData.countryCode}
                    onChange={handleCountryChange}
                    className="mt-1 p-2 border border-gray-300 rounded-md"
                  >
                    {countries.map((country) => (
                      <option key={country.id} value={country.code}>
                        {country.name_en} - {country.code}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex flex-col">
                  <label htmlFor="zipCode" className="text-sm font-medium">Zip Code</label>
                  <input
                    id="zipCode"
                    name="zipCode"
                    type="text"
                    value={formData.zipCode}
                    onChange={handleChange}
                    className="mt-1 p-2 border border-gray-300 rounded-md"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="phone" className="text-sm font-medium">Phone Number</label>
                  <input
                    id="phone"
                    name="phone"
                    type="text"
                    value={formData.phone}
                    onChange={handleChange}
                    className="mt-1 p-2 border border-gray-300 rounded-md"
                  />
                </div>
                <div className="flex items-center">
                  <input
                    id="saveInfo"
                    name="saveInfo"
                    type="checkbox"
                    className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
                  />
                  <label htmlFor="saveInfo" className="ml-2 text-sm">Save this information for next time.</label>
                </div>
                <div>
                  <button type="submit" className="w-full px-4 py-2 text-white bg-indigo-600 rounded-md">save</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
