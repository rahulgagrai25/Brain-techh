'use client'
import React, { useState, useEffect } from 'react';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('#home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['#home', '#about-us', '#services', '#distillation-process', '#contact-us'];
      const scrollPosition = window.scrollY;

      sections.forEach(section => {
        const element = document.querySelector(section) as HTMLElement | null;
        if (element) {
          const offsetTop = element.offsetTop - 100;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveLink(section);
          }
        }
      });
    };

    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about-us', label: 'About Us' },
    { href: '#services', label: 'Services' },
    { href: '#distillation-process', label: 'Distillation Process' },
    { href: '#contact-us', label: 'Contact Us' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 font-roboto">
      <nav className={`
        bg-gray-300 shadow-md
        flex flex-col md:flex-row
        transition-all duration-300 ease-in-out
        ${isMenuOpen ? 'h-screen md:h-auto' : 'h-16 md:h-16'}
        overflow-hidden
      `}>
        {/* Left section with logo - Background removed */}
        <div className="flex items-center justify-between md:justify-start h-16 md:h-16 flex-shrink-0">
          <div className="
            py-3 px-4
            flex items-center
            group
          ">
            <div className="text-[#0070c0] flex items-center">
              <a 
                href="#home" 
                className="no-underline text-[#0070c0] hover:text-[#005a9e] flex items-center transition-all duration-300"
              >
                {/* Logo Image - Replace src with your actual logo path */}
                <img 
                  src="/logo.png" 
                  alt="Company Logo" 
                  className="h-7 w-auto transition-all duration-300 hover:scale-140"
                />
              </a>
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

        {/* Navigation links - Hover line effect removed */}
        <div className={`
          flex flex-col md:flex-row 
          md:ml-auto md:items-center
          transition-all duration-300
          ${isMenuOpen ? 'flex' : 'hidden md:flex'}
        `}>
          {navLinks.map((link) => (
            <a
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
                ${activeLink === link.href 
                  ? 'text-white bg-gradient-to-r from-[#0070c0] to-[#005a9e] md:bg-gradient-to-r md:from-[#0070c0] md:to-[#005a9e] shadow-inner' 
                  : 'text-[#0070c0] hover:text-white hover:bg-gradient-to-r hover:from-[#0070c0] hover:to-[#005a9e] hover:shadow-lg'
                }
              `}
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="md:transform md:skew-x-12 block transition-all duration-200">
                {link.label}
              </span>
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;