'use client';

import { assets } from '@/assets/assets';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`w-full px-6 py-4 sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/60 backdrop-blur-md shadow-lg'
          : ''
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center">
          <a href="#">
            <Image
              src={assets.logo}
              alt="Yeyati Logo"
              width={50}
              height={50}
              className="invert cursor-pointer"
              priority
            />
          </a>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6 justify-center flex-1">
          <a href="#" className="text-white hover:text-green-300 transition">Home</a>
          <a href="#about" className="text-white hover:text-green-300 transition">About Me</a>
          <a href="#work" className="text-white hover:text-green-300 transition">Work</a>
          <a href="#contact" className="text-white hover:text-green-300 transition">Contact Me</a>
        </div>

        {/* Desktop Social Icons */}
        <div className="hidden md:flex items-center space-x-4">
          <a href="https://github.com/Blacksword66" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-white hover:text-green-300 transition text-xl" />
          </a>
          <a href="https://www.linkedin.com/in/yeyati-prasher-b5981127a/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-white hover:text-green-300 transition text-xl" />
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu (Sliding Panel) */}
      <div
        className={`fixed top-0 right-0 h-full w-3/4 bg-black z-40 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col px-6 py-10 space-y-6">
          <button onClick={closeMenu} className="self-end text-white">
            <HiX size={28} />
          </button>
          <a href="#home" onClick={closeMenu} className="text-white hover:text-green-400 transition text-lg">Home</a>
          <a href="#about" onClick={closeMenu} className="text-white hover:text-green-400 transition text-lg">About Me</a>
          <a href="#work" onClick={closeMenu} className="text-white hover:text-green-400 transition text-lg">Work</a>
          <a href="#contact" onClick={closeMenu} className="text-white hover:text-green-400 transition text-lg">Contact Me</a>

          <div className="flex space-x-4 pt-4">
            <a href="https://github.com/Blacksword66" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-white hover:text-green-300 transition text-2xl" />
            </a>
            <a href="https://www.linkedin.com/in/yeyati-prasher-b5981127a/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-white hover:text-green-300 transition text-2xl" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;