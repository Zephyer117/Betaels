'use client';

import { useState, useEffect } from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaBars, FaTimes } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';

const socialLinks = [
  { icon: <FaFacebook />, url: 'https://facebook.com', title: 'Facebook' },
  { icon: <FaInstagram />, url: 'https://instagram.com', title: 'Instagram' },
  { icon: <FaLinkedin />, url: 'https://linkedin.com', title: 'LinkedIn' },
];

const navLinks = [
  { name: 'Home', href: '#herosection' },
  { name: 'About Us', href: '#about' },
  { name: 'Gallery', href: '#portfolio' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Blogs', href: '#blog' },
  { name: 'Contact', href: '#contact' },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      {/* Top Bar */}
      <div className="bg-sky-600 text-white py-2 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-sm font-medium">
            Welcome to Beatles - Your Digital Partner
          </div>
          <div className="flex items-center space-x-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-xl py-2 hover:text-gray-600 transition-all duration-300"
                aria-label={social.title}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`${isScrolled ? 'py-2' : 'py-4'} bg-white transition-all duration-300 px-4`}>
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center h-10">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="text-2xl font-bold text-gray-800">
                <Image src="/Images/Beatels.png" alt="Logo" width={50} height={50} />    
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="flex gap-5">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-md text-gray-700 hover:text-sky-600 rounded-md font-bold transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-sky-600 focus:outline-none"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? (
                  <FaTimes className="block h-6 w-6" />
                ) : (
                  <FaBars className="block h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg rounded-b-lg">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-sky-600 hover:bg-gray-100"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="flex justify-center space-x-4 py-4 border-t border-gray-200 mt-2">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-sky-600 transition-colors duration-300"
                    aria-label={social.title}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;