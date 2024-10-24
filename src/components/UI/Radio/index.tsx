import React, { useState } from 'react';

import type { AddressItem } from '@/types/address';
import item from '@/components/Common/Category/item';

interface AddressSelectorProps {
  addresses: AddressItem[];
  defaultValue?: number;
  onSelect: (address: AddressItem) => void;
}

const AddressSelector: React.FC<AddressSelectorProps> = ({ addresses, defaultValue, onSelect }) => {
  const [selectedValue, setSelectedValue] = useState<number | undefined>(defaultValue);

  const handleSelect = (address: AddressItem) => {
    setSelectedValue(address.ID);
    onSelect(address);  // 回传选中的地址
  };

  return (
    <div className="w-full px-1 sm:max-w-xl sm:rounded-lg">
      {addresses.map((e) => (
        <div key={e.ID} className="flex items-center py-2">
          <input
            type="radio"
            name="address"
            id={e.ID.toString()}
            checked={selectedValue === e.ID}  // 根据状态 checked
            onChange={() => handleSelect(e)}    // 改变时触发
            className="mr-2"
          />
          <label htmlFor={e.ID.toString()} className="cursor-pointer w-full">
            <div className={`border relative rounded-md p-4 ${selectedValue === e.ID ? "border-fta-background-400" : ''}`} key={e.ID} >
              {e.isDefault ? <div className="absolute top-0 right-0 bg-orange-600 text-white text-xs px-2 py-1 rounded-bl-md">Default</div> : ''}
              <p className='font-bold'>{e.firstName} {e.lastName} {e.phone}</p>
              <p>{e.street1}, {e.city}, {e.state}</p>
              <p>{e.country}, {e.zipCode}</p>
              <p>{e.email}</p>
            </div>
          </label>
        </div>
      ))}
    </div>
  );
};

export default AddressSelector;
