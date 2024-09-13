import React, { useState } from 'react';
import { FaStar, FaRegStar } from 'react-icons/fa';

interface StarRatingProps {
  totalStars?: number;    // Total number of stars (default 5)
  defaultRating?: number; // Default rating (optional)
}

export default function StarRating({ totalStars = 5, defaultRating = 0 }: StarRatingProps) {
  const [rating, setRating] = useState(defaultRating);      // Store the current rating
  const [clickedStar, setClickedStar] = useState<number | null>(null); // Track which star was clicked for animation

  const handleRating = (rate: number) => {
    setRating(rate);
    setClickedStar(rate);
    setTimeout(() => setClickedStar(null), 300); // Reset animation state after 300ms
  };

  return (
    <div className="flex space-x-1">
      {Array.from({ length: totalStars }, (_, index) => {
        const starIndex = index + 1;
        const isPop = starIndex === clickedStar; // Apply pop animation only to the clicked star

        return (
          <button
            key={starIndex}
            onClick={() => handleRating(starIndex)}
            className="focus:outline-none"
          >
            <div
              className={`transition-transform duration-300 ${
                isPop ? 'scale-125' : ''
              }`} // Apply scale animation on click
            >
              {starIndex <= rating ? (
                <FaStar className="text-yellow-400 w-4 h-4" /> // Filled star
              ) : (
                <FaRegStar className="text-gray-400 w-4 h-4" /> // Empty star
              )}
            </div>
          </button>
        );
      })}
    </div>
  );
}
