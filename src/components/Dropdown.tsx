import React from "react";
import Link from "next/link";
import { FaChevronDown, FaChevronUp } from "react-icons/fa"; // Import the icons

interface DropdownProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  title: string;
  items: { href: string; label: string }[];
}

export default function Dropdown({
  isOpen,
  setIsOpen,
  title,
  items,
}: DropdownProps) {
  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className=" py-2 px-3 text-gray-900 rounded transition-all ease-in-out duration-300 md:hover:bg-gray-100 md:hover:bg-transparent hover:text-white md:p-0 dark:text-white/85 flex items-center space-x-1"
      >
        <span className="text-sm">{title}</span>
        <div
          className={`transition-transform duration-700 ease-in-out ${
            isOpen ? "rotate-[360deg]" : "rotate-0"
          }`}
        >
          {isOpen ? <FaChevronUp size={12} /> : <FaChevronDown size={12} />}
        </div>
      </button>

      {isOpen && (
        <div className="absolute z-10 mt-2 ml-2.5 md:ml-0 bg-white rounded-lg shadow-xl dark:bg-white min-w-60 ">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block text-sm px-4 py-2 m-2 text-gray-900 dark:text-[#97144d] rounded-md hover:bg-white/30 dark:hover:bg-[#97144d] dark:hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
