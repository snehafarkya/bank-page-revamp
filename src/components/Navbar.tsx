  import React, { useState, useEffect, useRef } from 'react';
  import Link from 'next/link';
  import SearchBar from './SearchBar';
  import Dropdown from './Dropdown';
  import { RxCross2, RxHamburgerMenu } from 'react-icons/rx';

  const NAV_ITEMS = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
  ];

  const DROPDOWN_ITEMS = {
    howItWorks: [
      { href: '/how-it-works/step1', label: 'Step 1' },
      { href: '/how-it-works/step2', label: 'Step 2' },
      { href: '/how-it-works/step3', label: 'Step 3' },
    ],
    services: [
      { href: '/services/web-development', label: 'Web Development' },
      { href: '/services/app-development', label: 'App Development' },
      { href: '/services/digital-marketing', label: 'Digital Marketing' },
    ],
    apis: [
      { href: '/how-it-works/step1', label: 'Step 1' },
      { href: '/how-it-works/step2', label: 'Step 2' },
      { href: '/how-it-works/step3', label: 'Step 3' },
    ],
    partners: [
      { href: '/services/web-development', label: 'Web Development' },
      { href: '/services/app-development', label: 'App Development' },
      { href: '/services/digital-marketing', label: 'Digital Marketing' },
    ],
  };

  export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
    
    const refs = {
      howItWorks: useRef<HTMLLIElement>(null),
      services: useRef<HTMLLIElement>(null),
      apis: useRef<HTMLLIElement>(null),
      partners: useRef<HTMLLIElement>(null),
    };

    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        const isClickOutside = Object.values(refs).every(
          (ref) => ref.current && !ref.current.contains(event.target as Node)
        );
        if (isClickOutside) setOpenDropdown(null);
      };

      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const toggleDropdown = (dropdownName: string) => {
      setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
    };

    return (
      <nav className="bg-white backdrop-blur-lg sticky top-0 border-gray-200 z-40 dark:bg-[#97144d]">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">AXIS BANK</span>
          </a>

          <div className="flex gap-2 md:order-2">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center p-2 text-sm text-[#97144d] rounded-lg ml-auto md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 bg-white dark:hover:bg-white dark:focus:ring-none"
              aria-controls="navbar-search"
              aria-expanded={isMobileMenuOpen ? 'true' : 'false'}
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? <RxCross2 size={20} color='#97144d' /> : <RxHamburgerMenu size={20} color='#97144d'/>}
            </button>

            <Link href={'/'} className="bg-white hidden md:flex rounded-lg py-2 px-3 hover:bg-[#dc74a1] hover:text-white hover:shadow-lg text-[#97144d] text-sm font-medium">
              Sign in
            </Link>

            <div className="md:block hidden">
              <SearchBar />
            </div>
          </div>

          <div
            className={`${
              isMobileMenuOpen ? 'block translate-x-0' : 'translate-x-full'
            } transform transition-all duration-300 ease-in-out w-full md:w-fit md:relative fixed md:top-0 md:translate-x-0 top-16 left-0 md:h-fit h-screen z-50 md:z-0 bg-gray-50 dark:bg-[#97144d]`}
            id="navbar-search"
          >
            <ul className="flex flex-col p-4 mt-4 font-medium rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-[#97144d] md:dark:bg-[#97144d]">
              {NAV_ITEMS.map(({ href, label }) => (
                <li key={label}>
                  <Link href={href} className="block text-sm py-2 px-3 text-white rounded md:bg-transparent hover:text-white md:text-white/50 md:p-0 md:dark:text-white/85">
                    {label}
                  </Link>
                </li>
              ))}

              {Object.entries(DROPDOWN_ITEMS).map(([key, items]) => (
                <li key={key} className="relative" ref={refs[key as keyof typeof refs]}>
                  <Dropdown
                    isOpen={openDropdown === key}
                    setIsOpen={() => toggleDropdown(key)}
                    title={key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}
                    items={items}
                  />
                </li>
              ))}

              <li className="mt-4 ml-2 md:hidden flex justify-between">
                <SearchBar />
                <Link href={'/'} className="bg-white rounded-lg py-2 px-3 hover:bg-[#dc74a1] hover:text-white hover:shadow-lg text-[#97144d] text-sm font-medium">
                  Sign in
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
