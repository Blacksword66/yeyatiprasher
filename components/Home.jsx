import { assets } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';
import { FaGlobe } from "react-icons/fa";

const Hehe = () => {
  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="max-w-4xl w-full flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Text Section */}
        <div className="text-left flex flex-col items-center order-1 md:order-none ">
          <h1>Yeyati Prasher</h1>
          <p className="text-gray-400 text-base md:text-lg max-w-xl leading-relaxed mb-6">
            Budding software developer 💻 <br/>
            Machine Learning enthusiast 🧠 <br/>
            And somewhat of a nerd 🤓<br/>
            Say Hello!👋
          </p>
          <a href="#contact">
            <button className="bg-green-600 text-white px-6 py-3 rounded-md shadow-lg font-semibold
            text-lg hover:bg-green-700 transition duration-200 hover:shadow-green-500/40 shadow-green-500/30
            flex flex-row justify-center items-center">
              Let's Connect<FaGlobe className='ml-2'/>
            </button>
          </a>
        </div>

        {/* Image Section (always visible, below text on mobile) */}
        <div className="order-2 md:order-none mt-8x` md:mt-0 flex justify-center w-full md:w-auto">
          <Image
            alt="my photo"
            src={assets.photu}
            width={256}
            height={256}
            className="rounded-full object-cover w-64 h-64"
          />
        </div>
        
      </div>
    </section>
  );
};

export default Hehe;