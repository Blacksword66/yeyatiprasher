import React from 'react';
import Image from 'next/image';

const HorizontalCard = ({ image, title, description }) => {
  return (
    <div className=" flex flex-col md:flex-row bg-[#111] text-white rounded-xl overflow-hidden shadow-md transition-shadow duration-300 hover:shadow-green-500/30 hover:shadow-lg group max-w-3xl w-full">
      
      {/* Left: Image */}
      <div className="md:w-1/3 w-full h-48 md:h-auto relative">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      {/* Right: Content */}
      <div className="p-6 md:w-2/3">
        <h3 className="text-2xl font-semibold mb-2 group-hover:text-green-400 transition">
          {title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default HorizontalCard;