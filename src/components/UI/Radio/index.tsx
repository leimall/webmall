import React, { useEffect, useState } from 'react';
import type { AddressItem } from '@/types/address';

interface AddressSelectorProps {
  addresses: AddressItem[];
  defaultValue?: number;
  onSelect: (address: AddressItem) => void;
  onEdit: (address: AddressItem) => void;
}

const AddressSelector: React.FC<AddressSelectorProps> = ({ addresses, defaultValue, onSelect, onEdit }) => {
  const [selectedValue, setSelectedValue] = useState<number | undefined>(defaultValue);

  useEffect(() => {
    setSelectedValue(defaultValue);
  }, [defaultValue]);

  const handleSelect = (address: AddressItem) => {
    setSelectedValue(address.ID);
    onSelect(address);  // 回传选中的地址
  };

  return (
    <div className="w-full px-1 sm:max-w-xl sm:rounded-lg">
      {addresses.map((e) => (
        <div key={e.ID} className="flex items-center z-1 py-2 ">
          <input
            type="radio"
            name="address"
            id={e.ID.toString()}
            checked={selectedValue === e.ID}
            onChange={(event) => {
              event.stopPropagation();
              handleSelect(e);
            }}
            className="mr-2 pointer-events-none"
          />
          <label htmlFor={e.ID.toString()} className="cursor-pointer w-full z-1">
            <div
              className={`border relative rounded-md p-4 ${selectedValue === e.ID ? "border-bg-400" : ''}`}
              onClick={(event) => {
                event.stopPropagation();
                handleSelect(e);
              }}
            >
              {e.isDefault ? (
                <div className="absolute top-0 right-0 bg-orange-600 text-white text-xs px-2 py-1 rounded-bl-md">
                  Default
                </div>
              ) : (
                ''
              )}
              <p className="font-bold">{e.firstName} {e.lastName} {e.phone}</p>
              <div className="text-gray-600">
                <p>{e.line1}, {e.line2}</p>
                <p>{e.city}, {e.state}, {e.country}, {e.postalCode}</p>
                <p>{e.email}</p>
              </div>
              <button onClick={(event) => {
                event.stopPropagation();
                onEdit(e);
              }}
                className="absolute bottom-0 right-0 bg-bg-200 text-primary-500 text-xs px-2 py-1 rounded-tl-md">
                Edit
              </button>
            </div>
          </label>
        </div>
      ))}
    </div>
  );
};

export default AddressSelector;