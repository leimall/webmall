import React, { useEffect, useState } from 'react';

interface ToggleContentProps {
  title: React.ReactNode;
  children: React.ReactNode;
  value: boolean;
}

const ToggleContent: React.FC<ToggleContentProps> = ({ title, children, value }) => {
  const [isOpen, setIsOpen] = useState(false); // Track the open/close state

  const toggleContent = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (value) {
      setIsOpen(true)
    }
  }, [value]);

  const plusPath = "M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z";

  // Define the SVG path for the minus icon
  const minusPath = "M0 10h24v4h-24z";



  return (
    <div className="space-y-4">
      <div className="bg-white border rounded-md">
        <button
          type="button"
          onClick={toggleContent}
          className="w-full text-base font-semibold text-left p-6 text-[#333] flex items-center"
        >
          <div className="mr-4">{title}</div>
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 fill-current ml-auto shrink-0 transform transition-transform" viewBox="0 0 24 24">
            <path d={isOpen ? minusPath : plusPath} />
          </svg>
        </button>

        {/* Hidden content - toggled */}
        <div className={`pb-3 md:pb-6 px-3 md:px-6 ${isOpen ? 'block' : 'hidden'}`}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default ToggleContent;
