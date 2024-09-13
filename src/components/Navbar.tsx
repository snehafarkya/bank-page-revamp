import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import SearchBar from './SearchBar';
import Dropdown from './Dropdown';
import { RxCross2, RxHamburgerMenu } from 'react-icons/rx';

export default function Navbar() {
  const [isHowItWorksOpen, setIsHowItWorksOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [api, setApi] = useState(false);
  const [partner, setPartner] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const howItWorksRef = useRef(null);
  const servicesRef = useRef(null);
  const apis = useRef(null);
  const partners = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (howItWorksRef.current && !howItWorksRef.current.contains(event.target as Node)) {
        setIsHowItWorksOpen(false);
      }
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
      if (apis.current && !apis.current.contains(event.target as Node)) {
        setApi(false);
      }
      if (partners.current && !partners.current.contains(event.target as Node)) {
        setPartner(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-white backdrop-blur-lg sticky top-0 border-gray-200 z-40 dark:bg-[#97144d]">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Brand */}
        <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">AXIS BANK</span>
        </a>

        {/* Mobile menu (with hamburger button) */}
        <div className="flex gap-2 md:order-2">
          {/* Hamburger button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg ml-auto md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-white dark:focus:ring-none"
            aria-controls="navbar-search"
            aria-expanded={isMobileMenuOpen ? 'true' : 'false'}
          >
            <span className="sr-only">Open main menu</span>
            {isMobileMenuOpen ? <RxCross2/> : <RxHamburgerMenu/>}
          </button>

          {/* SearchBar - visible only on larger screens */}
          <Link href={'/'} className='bg-white hidden md:flex rounded-lg py-2 px-3 hover:bg-[#dc74a1] hover:text-white hover:shadow-lg text-[#97144d] text-sm font-medium'>
                Sign in
              </Link>
              <div className="md:block hidden">

          <SearchBar />
          </div>
        </div>

        {/* Mobile menu dropdown */}
        <div
          className={`${
            isMobileMenuOpen ? 'block translate-x-0' : 'translate-x-full'
          } transform transition-all duration-300 ease-in-out w-full md:w-fit md:relative  fixed md:top-0 md:translate-x-0 top-16 left-0 md:h-fit h-screen z-50 md:z-0 bg-gray-50 dark:bg-[#97144d]`}
          id="navbar-search"
        >
          <ul className="flex flex-col p-4 mt-4 font-medium  rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-[#97144d] md:dark:bg-[#97144d] ">
            <li>
              <Link href="/" className="block text-sm py-2 px-3 text-white rounded md:bg-transparent hover:text-white md:text-white/50 md:p-0 md:dark:text-white/85">
                Home
              </Link>
            </li>
            <li className="relative" ref={howItWorksRef}>
              <Dropdown
                isOpen={isHowItWorksOpen}
                setIsOpen={setIsHowItWorksOpen}
                title="How It Works"
                items={[
                  { href: "/how-it-works/step1", label: "Step 1" },
                  { href: "/how-it-works/step2", label: "Step 2" },
                  { href: "/how-it-works/step3", label: "Step 3" },
                ]}
              />
            </li>
            <li className="relative" ref={servicesRef}>
              <Dropdown
                isOpen={isServicesOpen}
                setIsOpen={setIsServicesOpen}
                title="Services"
                items={[
                  { href: "/services/web-development", label: "Web Development" },
                  { href: "/services/app-development", label: "App Development" },
                  { href: "/services/digital-marketing", label: "Digital Marketing" },
                ]}
              />
            </li>
            <li className="relative" ref={apis}>
              <Dropdown
                isOpen={api}
                setIsOpen={setApi}
                title="APIs"
                items={[
                  { href: "/how-it-works/step1", label: "Step 1" },
                  { href: "/how-it-works/step2", label: "Step 2" },
                  { href: "/how-it-works/step3", label: "Step 3" },
                ]}
              />
            </li>
            <li className="relative" ref={partners}>
              <Dropdown
                isOpen={partner}
                setIsOpen={setPartner}
                title="Partnership"
                items={[
                  { href: "/services/web-development", label: "Web Development" },
                  { href: "/services/app-development", label: "App Development" },
                  { href: "/services/digital-marketing", label: "Digital Marketing" },
                ]}
              />
            </li>
            <li>
              <Link href="/about" className="block text-sm py-2 px-3 text-white  rounded md:bg-transparent hover:text-white md:text-white/50 md:p-0 md:dark:text-white/85">
                About
              </Link>
            </li>
            <li className="mt-4 md:hidden flex justify-between">
              <SearchBar />
              <Link href={'/'} className='bg-white rounded-lg py-2 px-3 hover:bg-[#dc74a1] hover:text-white hover:shadow-lg text-[#97144d] text-sm font-medium'>
                Sign in
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
