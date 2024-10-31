// components/Navbar.js
"use client"
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from "../public/logo.jpg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-gray-900 text-xl font-bold">
          <Image src={logo} alt='logo' width={100} height={50} className='rounded-full hover:bg-slate-700 hover:cursor-pointer transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 ' />
        </div>
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-800 border-gray-500 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>
        <div className={`lg:flex ${isOpen ? 'block' : 'hidden'} w-full lg:w-auto`}>
          <ul className="lg:flex lg:items-center lg:space-x-6 space-y-4 lg:space-y-0 text-gray-500">
            <li>
              <Link href="/" className="hover:text-gray-300">Home</Link>
            </li>
            <li>
              <Link href="/About" className="hover:text-gray-300">About</Link>
            </li>
            <li>
              <Link href="/Skill" className="hover:text-gray-300">Skill</Link>
            </li>
            <li>
              <Link href="/Contact" className="hover:text-gray-300">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
