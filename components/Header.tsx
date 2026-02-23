'use client';

import { useState } from 'react';
import { useLenis } from 'lenis/react';

export default function Header() {
  const lenis = useLenis();
  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (id: string) => {
    if (lenis) {
      lenis.scrollTo(`#${id}`, {
        offset: -80, 
        duration: 1.5,
        lerp: 0.1,
      });
    } else {
      document.querySelector(`#${id}`)?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <header className="bg-gray-950/80 backdrop-blur-md text-white py-4 px-6 fixed w-full top-0 z-50 border-b border-gray-800/50 shadow-lg">
      <nav className="flex justify-between items-center max-w-7xl mx-auto">
        <button
          onClick={() => scrollTo('hero')}
          className="text-2xl font-bold tracking-tight bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent hover:opacity-90 transition-opacity"
        >
          DTAIN
        </button>

        {/* Desktop nav */}
        <ul className="hidden md:flex space-x-10">
          {['Giới thiệu', 'Dự án', 'Kĩ năng', 'Liên hệ'].map((item) => (
            <li key={item}>
              <button
                onClick={() => scrollTo(item.toLowerCase())}
                className="relative text-gray-300 hover:text-white transition-colors duration-300 group cursor-pointer text-lg font-medium"
              >
                {item}
                <span className="absolute left-0 bottom-[-4px] w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-400" />
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-gray-300 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-6 pb-6 text-center bg-gray-900/95 backdrop-blur-lg border-t border-gray-800">
          {['Giới thiệu', 'Dự án', 'Kĩ năng', 'Liên hệ'].map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item.toLowerCase())}
              className="block w-full text-lg text-gray-300 hover:text-white py-2"
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}