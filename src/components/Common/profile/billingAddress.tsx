"use client";
import { useEffect, useState } from "react";
import { message } from "antd"; // 使用 Ant Design 的 message 组件来显示反馈信息
import {
  getCountry,
  createBillingAddress,
  updateBillingAddress,
  getBillingAddress,
} from "@/apis/address";
import type { CountryItem } from "@/types/category";
import type { AddressItem, BillingAddressItem } from "@/types/address";

import Dropdown from "@/components/UI/CommDropdown";
import Input from "@/components/UI/Input";

interface ModalProps {
  address?: AddressItem | null;
}

const BillingAddressModal: React.FC<ModalProps> = ({ address }) => {
  const [countries, setCountries] = useState<CountryItem[]>([]);
  const [isSame, setIsSame] = useState(false);
  const [formData, setFormData] = useState<BillingAddressItem>({
    ID: 0,
    userId: "",
    email: "",
    phone: "",
    firstName: "",
    lastName: "",
    line1: "",
    line2: "",
    city: "",
    state: "",
    country: "",
    postalCode: "",
  });

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
    handleGetBillingAddress();
  }, []);

  useEffect(() => {
    if (isSame && address) {
      setFormData({
        ...formData,
        userId: address.userId,
        email: address.email,
        phone: address.phone,
        firstName: address.firstName,
        lastName: address.lastName,
        line1: address.line1,
        line2: address.line2,
        city: address.city,
        state: address.state,
        country: address.country,
        postalCode: address.postalCode,
      });
    }
  }, [isSame, address]);

  const handleGetBillingAddress = async () => {
    try {
      const response = await getBillingAddress();
      if (response.code === 0 && response.data) {
        setFormData(response.data);
      }
    } catch (error) {
      message.error("Failed to fetch billing addresses");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.ID) {
      try {
        await updateBillingAddress(formData);
        message.success("Update Address Successfully");
      } catch (error) {
        message.error("Failed to update address");
      }
    } else {
      try {
        await createBillingAddress(formData);
        message.success("Address added successfully");
      } catch (error) {
        message.error("Failed to add address");
      }
    }
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsSame(e.target.checked);
  };

  const countryOptions = countries.map((country) => ({
    value: country.code,
    label: country.name_en,
  }));

  const handleSelectCountry = (selectedCountry: { value: string; label: string }) => {
    setFormData((prev) => ({
      ...prev,
      country: selectedCountry.value,
    }));
  };

  return (
    <div>
      <div className="flex items-center py-4 md:py-8">
        <input
          id="isSame"
          name="isSame"
          type="checkbox"
          checked={isSame}
          onChange={handleCheckboxChange}
          className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
        />
        <label htmlFor="isSame" className="ml-2 text-sm">
          Set as the same as the shipping address.
        </label>
      </div>
      <form onSubmit={handleSubmit} className="mt-2">
        <h3 className="text-base text-gray-800 mb-4">Personal Details</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <input
            name="firstName"
            type="text"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="First Name"
            className="px-4 py-3 bg-gray-50 w-full text-sm rounded-md"
          />
          <Input
            id="lastName"
            name="lastName"
            label="Last Name"
            required
            defaultValue=""
          />
          <input
            name="lastName"
            type="text"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Last Name"
            className="px-4 py-3 bg-gray-50 w-full text-sm rounded-md"
          />
          <input
            name="email"
            type="text"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="px-4 py-3 bg-gray-50 w-full text-sm rounded-md"
          />
          <input
            name="phone"
            type="text"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone No."
            className="px-4 py-3 bg-gray-50 w-full text-sm rounded-md"
          />
        </div>

        <h3 className="text-base text-gray-800 mb-4 mt-8">Shipping Address</h3>
        <input
          name="line1"
          type="text"
          value={formData.line1}
          onChange={handleChange}
          placeholder="Address Line"
          className="px-4 py-3 bg-gray-50 w-full text-sm rounded-md"
        />
        <div className="grid md:grid-cols-2 gap-4 mt-4">
          <input
            name="city"
            type="text"
            value={formData.city}
            onChange={handleChange}
            placeholder="City"
            className="px-4 py-3 bg-gray-50 w-full text-sm rounded-md"
          />
          <input
            name="postalCode"
            type="text"
            value={formData.postalCode}
            onChange={handleChange}
            placeholder="Zip Code"
            className="px-4 py-3 bg-gray-50 w-full text-sm rounded-md"
          />
          <Dropdown
            title="Select Country"
            options={countryOptions.map(option => ({
              name_en: option.label,
              code: option.value
            }))}
            onSelect={handleSelectCountry}
          />
        </div>

        <button
          type="submit"
          className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-md"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default BillingAddressModal;