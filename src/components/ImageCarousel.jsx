import React, { useState } from 'react';
import { FaArrowDown, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Image from 'next/image';

const ImageCarousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isExpanded, setIsExpanded] = useState(false);
  
    const nextImage = () => setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    const prevImage = () => setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  
    return (
      <div className="relative w-full max-w-md">
        {/* Display the current image */}
        <Image
          src={images[currentIndex]}
          alt="Project Image"
          className="rounded-lg w-full h-64 object-cover cursor-pointer"
          onClick={() => setIsExpanded(true)}
        />
        {/* Left and Right Navigation */}
        <button onClick={prevImage} className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white bg-indigo-500 p-2 rounded-full">
          <FaArrowLeft />
        </button>
        <button onClick={nextImage} className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white bg-indigo-500 p-2 rounded-full">
          <FaArrowRight />
        </button>
        <div className="text-center text-gray-500 mt-2">
          {currentIndex + 1} / {images.length}
        </div>
  
        {/* Modal for Image Expansion */}
        {isExpanded && (
          <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
            onClick={() => setIsExpanded(false)}>
            <div className="relative max-w-3xl w-full">
              <button
                onClick={() => setIsExpanded(false)}
                className="absolute top-4 right-4 h-15 w-35 text-white bg-black opacity-60 p-2 rounded z-10"
              >
                X
              </button>
              <Image src={images[currentIndex]} alt="Expanded Project" className="w-full h-auto rounded-lg" />
            </div>
          </div>
        )}
      </div>
    );
  };

  export default ImageCarousel