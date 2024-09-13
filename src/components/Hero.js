import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import FeaturedCard from './featuredCard';
import Aside from './Aside';
import fake from "./FakeData.json";
import Navbar from '@/components/Navbar';
import Chatbot from './Chatbot';

export default function Index() {
  const ITEMS_PER_PAGE = 6;
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);

  // This useEffect ensures that the page is set based on the router query
  useEffect(() => {
    const page = parseInt(router.query.page ) || 1;
    setCurrentPage(page);
  }, [router.query.page]);

  // Pagination logic to get paginated items
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const paginatedItems = fake.slice(startIndex, endIndex);

  const totalPages = Math.ceil(fake.length / ITEMS_PER_PAGE);

  const handlePageChange = (page) => {
    // Ensure the page change is valid before pushing to router
    if (page >= 1 && page <= totalPages) {
      router.push(`/products?page=${page}`); // Change URL to reflect the page
    }
  };


  return (
    <>
      <Navbar />
      <div className="flex flex-col justify-center items-center mt-8 gap-4">
        <h1 className="text-3xl font-bold text-[#97144d]">Featured Products</h1>
        <p className='text-center px-4'>Explore a wide range of APIs and choose the best ones for your use case</p>
      </div>
      <div className='flex flex-col md:flex-row my-10 mx-auto gap-10 md:w-[80%] w-max justify-center'>
        <div className="rounded-xl w-fit mx-auto md:mx-0 flex flex-col">
          <Aside />
        </div>

        <FeaturedCard
          items={paginatedItems}  // Pass paginatedItems to FeaturedCard
          itemsPerPage={ITEMS_PER_PAGE}  // Ensure itemsPerPage is passed
          currentPage={currentPage}
          totalPages={totalPages}
          handlePageChange={handlePageChange}
        />
        <Chatbot />
      </div>
    </>
  );
}
