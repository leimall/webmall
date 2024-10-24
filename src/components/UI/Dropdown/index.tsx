import { useState } from 'react';
import type { CountryItem } from '@/types/category';

interface DropdownOption {
  label: string;
  value: string;
  flagUrl: string;
}

interface DropdownProps {
  options: CountryItem[];
  onSelect: (option: { value: string; label: string }) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLabel, setSelectedLabel] = useState<string | null>(null);
  const [selectedValue, setSelectedValue] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>(''); // 新增搜索输入框的状态

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (option: CountryItem) => {
    setSelectedLabel(option.name_en);
    setSelectedValue(option.code);
    setIsOpen(false);
    onSelect({ value: option.code, label: option.name_en });
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  // 根据搜索词过滤下拉选项
  const filteredOptions = options.filter((option) =>
    option.name_en.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="relative w-full mx-auto">
      <div onClick={toggleDropdown} className='flex items-center justify-between px-4 py-3 bg-gray-50 hover:bg-transparent text-gray-800 w-full text-sm rounded-md hover:border-fta-primary-300 border-2 border-transparent transition-all duration-300'>
        <div className='w-full'>
          {selectedLabel ?
            <div className='flex justify-between items-center'>
              <div>{selectedLabel}</div>
              <div className='text-xs text-gray-400'>{selectedValue}</div>
            </div>
            : <p className='text-gray-400'>Select Country</p>}
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" className="w-3 ml-3 text-gray-500 inline" viewBox="0 0 24 24">
          <path
            fillRule="evenodd"
            d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
            clipRule="evenodd"
          />
        </svg>

      </div>

      {isOpen && (
        <ul className="absolute block shadow-lg bg-white py-2 px-2 z-10 min-w-full w-max rounded max-h-96 overflow-auto max-w-16">
          <li className="mb-2">
            <input
              placeholder="Search..."
              className="px-4 py-2.5 w-full rounded text-[#333] text-sm border-none outline-blue-600 bg-blue-50 focus:bg-transparent"
              value={searchTerm}
              onChange={handleSearch} // 绑定搜索输入框
            />
          </li>
          {filteredOptions.length > 0 ? (
            filteredOptions.map((option) => (
              <li
                key={option.name_en}
                className="py-2.5 px-4 hover:bg-blue-50 rounded text-black text-sm cursor-pointer"
                onClick={() => handleSelect(option)}
              >
                <div className="flex justify-between items-center">
                 <div>{option.name_en}</div>
                 <div className='text-xs text-gray-400'>{option.code}</div>
                </div>
              </li>
            ))
          ) : (
            <li className="py-2.5 px-4 text-black text-sm">No results found</li>
          )}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
