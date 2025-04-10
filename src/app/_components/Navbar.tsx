"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '~/components/ui/button';

export default function Navbar() {
  const pathname = usePathname();
  
  // Function to determine if a link is active
  const isActive = (path: string) => pathname === path;

  return (
    <nav className="sticky top-0 z-50 w-full bg-white border-b-2 border-black py-4 px-4 md:px-6 shadow-[0px_4px_0px_0px_rgba(0,0,0,1)]">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <Link href="/" className="text-2xl font-extrabold mb-4 md:mb-0 no-underline">
          <span className="bg-primary p-2 border-2 border-black">VIBE</span>
          <span className="p-1">CHECK</span>
        </Link>
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 items-center">
          <Link 
            href="/" 
            className={`text-foreground font-bold no-underline border-b-2 ${isActive('/') ? 'border-primary' : 'border-transparent'} hover:text-primary transition-colors`}
          >
            Home
          </Link>
          <Link 
            href="/products" 
            className={`text-foreground font-bold no-underline border-b-2 ${isActive('/products') ? 'border-primary' : 'border-transparent'} hover:text-primary transition-colors`}
          >
            Products
          </Link>
          <Link 
            href="/about" 
            className={`text-foreground font-bold no-underline border-b-2 ${isActive('/about') ? 'border-primary' : 'border-transparent'} hover:text-primary transition-colors`}
          >
            About
          </Link>
          <Link 
            href="/contact" 
            className={`text-foreground font-bold no-underline border-b-2 ${isActive('/contact') ? 'border-primary' : 'border-transparent'} hover:text-primary transition-colors`}
          >
            Contact
          </Link>
          <Link href="/signup" className="no-underline ml-2">
            <Button 
              variant="accent" 
              size="sm" 
              className="text-white font-bold border-2 border-black px-4 py-1 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
            >
              Sign Up
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}