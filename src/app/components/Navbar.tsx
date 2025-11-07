'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/services', label: 'Services' },
    { href: '/distillation', label: 'Distillation Process' },
    { href: '/contact', label: 'Contact Us' },
  ];

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 font-roboto">
      <nav className={`
        bg-gray-300 shadow-md
        flex flex-col md:flex-row
        transition-all duration-300 ease-in-out
        ${isMenuOpen ? 'h-screen md:h-auto' : 'h-16 md:h-16'}
        overflow-hidden
      `}>
        {/* Left section with logo */}
        <div className="flex items-center justify-between md:justify-start h-16 md:h-16 flex-shrink-0">
          <div className="
            py-3 px-4
            flex items-center
            group
          ">
            <div className="text-[#0070c0] flex items-center">
              <Link 
                href="/" 
                className="no-underline text-[#0070c0] hover:text-[#005a9e] flex items-center transition-all duration-300"
                onClick={handleLinkClick}
              >
                {/* Logo Image */}
                <img 
                  src="/logo.png" 
                  alt="Company Logo" 
                  className="h-7 w-auto transition-all duration-300 hover:scale-140"
                />
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden p-4 text-[#0070c0] hover:bg-gray-50 rounded-lg transition-all duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="text-xl transition-transform duration-200 hover:scale-110">
              {isMenuOpen ? '✕' : '☰'}
            </span>
          </button>
        </div>

        {/* Navigation links */}
        <div className={`
          flex flex-col md:flex-row 
          md:ml-auto md:items-center
          transition-all duration-300
          ${isMenuOpen ? 'flex' : 'hidden md:flex'}
        `}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`
                relative
                py-3 px-4
                text-center
                no-underline
                transition-all duration-300 ease-out
                border-t border-gray-100 md:border-t-0
                transform md:-skew-x-12
                font-medium
                text-sm
                group
                ${pathname === link.href 
                  ? 'text-white bg-gradient-to-r from-[#0070c0] to-[#005a9e] md:bg-gradient-to-r md:from-[#0070c0] md:to-[#005a9e] shadow-inner' 
                  : 'text-[#0070c0] hover:text-white hover:bg-gradient-to-r hover:from-[#0070c0] hover:to-[#005a9e] hover:shadow-lg'
                }
              `}
              onClick={handleLinkClick}
            >
              <span className="md:transform md:skew-x-12 block transition-all duration-200">
                {link.label}
              </span>
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;