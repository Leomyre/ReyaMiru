'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react';

export default function Header() {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`bg-gray-800/50 backdrop-filter backdrop-blur-lg border-b border-gray-700/20 sticky top-0 z-50 ${scrolling ? 'shadow-lg' : 'shadow-none'} transition-shadow duration-300 ease-in-out`}
    >
      <nav className="container mx-auto px-6 py-4">
        <ul className="flex space-x-8 justify-center">
          <li>
            <Link 
              href="/" 
              className={`text-gray-200 hover:text-blue-400 transition-colors duration-300 font-medium ${scrolling ? 'text-white' : 'text-gray-200'}`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              href="/services" 
              className={`text-gray-200 hover:text-blue-400 transition-colors duration-300 font-medium ${scrolling ? 'text-white' : 'text-gray-200'}`}
            >
              Services
            </Link>
          </li>
          <li>
            <Link 
              href="/projects" 
              className={`text-gray-200 hover:text-blue-400 transition-colors duration-300 font-medium ${scrolling ? 'text-white' : 'text-gray-200'}`}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link 
              href="/skills" 
              className={`text-gray-200 hover:text-blue-400 transition-colors duration-300 font-medium ${scrolling ? 'text-white' : 'text-gray-200'}`}
            >
              Ability
            </Link>
          </li>
          <li>
            <Link 
              href="/contact" 
              className={`text-gray-200 hover:text-blue-400 transition-colors duration-300 font-medium ${scrolling ? 'text-white' : 'text-gray-200'}`}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
