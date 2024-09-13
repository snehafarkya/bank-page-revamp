import React from "react";
import { LuFileAxis3D } from "react-icons/lu";
import { MdOutlineArrowOutward } from "react-icons/md";
import StarRating from "./SarIcon";
import Link from "next/link";

// Define a type for the items
interface FeaturedCardProps {
  items: Array<{ id: number; title: string; desc: string ; rating:number;votes:number; defaultRating:number}>; // Full list of items
  itemsPerPage: number; // Number of items to show per page
  currentPage: number; // Current page number
  totalPages: number; // Total number of pages
  handlePageChange: (page: number) => void; // Function to handle page changes
}

const FeaturedCard: React.FC<FeaturedCardProps> = ({
  items,
  // itemsPerPage,
  currentPage,
  totalPages,
  handlePageChange,
}) => {
  return (
    <div className="flex w-fit flex-col gap-4">
      {/* Card Section */}
      <div className="grid md:grid-cols-2 grid-cols-1  h-fit flex-wrap gap-4">
        {items.map((item) => (
          <div
            key={item.id}
            className="max-w-[370px] p-6 bg-white cursor-pointer border border-gray-200 rounded-lg shadow dark:bg-white/60 group hover:scale-[1.006] transition ease-in-out duration-200 hover:shadow-lg dark:border-gray-100"
          >
            <LuFileAxis3D size={32} />
            <div className="flex justify-between gap-2 items-center">
              <h5 className=" text-xl font-semibold tracking-tight text-gray-900 dark:text-black">
                {item.title}
              </h5>
              <p className="text-sm">{item.rating} ({item.votes} votes)</p>
            </div>
            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400 text-ellipsis line-clamp-2">
              {item.desc}
            </p>
            <div className="flex justify-between items-center">
            <Link
              href={`/products/${item.id}`}
              className="inline-flex underline-offset-2 group-hover:scale-[1.006] font-medium items-center text-[#97144d] group-hover:underline"
            >
              View more
              <MdOutlineArrowOutward className="group-hover:translate-x-[3px] group-hover:-translate-y-[3px] transition ease-in-out duration-200" />
            </Link>
            <StarRating totalStars={5} defaultRating={item.defaultRating} />
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center items-center gap-4 mt-6">
        <button
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
          className="px-4 py-2 hover:bg-white hover:text-[#97144d] hover:shadow-lg transition-all ease-in-out duration-300 bg-[#97144d] text-white rounded disabled:text-white disabled:cursor-not-allowed disabled:transition-none disabled:shadow-none disabled:bg-gray-300"
        >
          Previous
        </button>

        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`px-4 py-2 ${
              currentPage === index + 1
                ? "bg-[#97144d] text-white"
                : "bg-white text-black hover:bg-white hover:text-[#97144d] hover:shadow-lg transition-all ease-in-out duration-300"
            } border border-gray-300 rounded `}
          >
            {index + 1}
          </button>
        ))}

        <button
          disabled={currentPage === totalPages}
          onClick={() => handlePageChange(currentPage + 1)}
          className="px-4 py-2 hover:bg-white hover:text-[#97144d] hover:shadow-lg transition-all ease-in-out duration-300 bg-[#97144d] text-white rounded disabled:text-white disabled:cursor-not-allowed disabled:transition-none disabled:shadow-none disabled:bg-gray-300"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default FeaturedCard;
