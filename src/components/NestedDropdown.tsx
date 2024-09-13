import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp, FaPlus, FaMinus } from 'react-icons/fa';

interface DropdownItem {
  label: string;
  subItems?: DropdownItem[];
}

interface DropdownProps {
  title: string;
  items: DropdownItem[];
  initiallyOpen?: boolean;
  isNested?: boolean; // Flag to check if it's a nested dropdown
}

const Dropdown: React.FC<DropdownProps> = ({ title, items, initiallyOpen = false, isNested = false }) => {
  const [isOpen, setIsOpen] = useState(initiallyOpen);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className={`mb-4 ${isNested ? 'ml-6' : ''}`}>
      <button
        className={`flex justify-between items-center w-full py-3 px-4 text-left ${
          isNested ? 'bg-transparent shadow-none  text-gray-700' : 'bg-gray-100 text-gray-800'
        } rounded-lg shadow-md hover:bg-gray-200 transition-all`}
        onClick={toggleDropdown}
      >
        <span className={`text-base  ${isNested ? 'text-sm font-normal' : 'text-base font-medium'}`}>
          {title}
        </span>
        {/* Toggle between Chevron for main dropdown and Plus/Minus for nested dropdown */}
        <div className={`transition-transform duration-1000 ease-in-out ${isOpen ? 'rotate-[360deg]' : 'rotate-0'}`}>

        {isOpen ? (
          isNested ? <FaMinus size={12} /> : <FaChevronUp size={14} />
        ) : (
          isNested ? <FaPlus size={12} /> : <FaChevronDown size={14} />
        )}
        </div>
      </button>

      {isOpen && (
        <div className={`mt-3 text-sm space-y-2 ${isNested ? 'text-gray-600' : 'text-gray-700'}`}>
          {items.map((item, index) => (
            <div key={index}>
              {item.subItems ? (
                <Dropdown
                  title={item.label}
                  items={item.subItems}
                  initiallyOpen={false}
                  isNested={true} // Mark nested dropdown
                />
              ) : (
                <p className="hover:text-blue-500 transition-colors cursor-pointer">
                  - {item.label}
                </p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
