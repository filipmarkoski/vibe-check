"use client"; // Add this directive for client components

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white py-4 px-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <Link href="/" className="text-xl font-bold mb-4 md:mb-0">
          Vibe Check
        </Link>
        <div className="flex space-x-6">
          <Link 
            href="/" 
            className="hover:text-blue-400 transition-colors"
          >
            Home
          </Link>
          <Link 
            href="/products" 
            className="hover:text-blue-400 transition-colors"
          >
            Products
          </Link>
          <Link 
            href="/about" 
            className="hover:text-blue-400 transition-colors"
          >
            About
          </Link>
          <Link 
            href="/contact" 
            className="hover:text-blue-400 transition-colors"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
