'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

interface NavLink {
  label: string;
  href: string;
}

interface TransparentNavbarProps {
  className?: string;
  links?: NavLink[];
  logo?: string;
}

const defaultLinks: NavLink[] = [
  { label: 'Features', href: '#features' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function TransparentNavbar({
  className = '',
  links = defaultLinks,
  logo = 'Elevate',
}: TransparentNavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('#features');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-md border-b border-gray-200/50 dark:border-gray-800/50'
          : 'bg-transparent'
      } ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-shrink-0"
          >
            <Link
              href="/"
              className={`text-xl font-bold transition-colors ${
                scrolled
                  ? 'text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400'
                  : 'text-white hover:text-blue-300'
              }`}
            >
              {logo}
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link, index) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={() => setActiveLink(link.href)}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative text-sm font-medium transition-colors ${
                  scrolled
                    ? activeLink === link.href
                      ? 'text-blue-600 dark:text-blue-400'
                      : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                    : activeLink === link.href
                    ? 'text-white'
                    : 'text-white/90 hover:text-white'
                }`}
              >
                {link.label}
                {activeLink === link.href && (
                  <motion.div
                    layoutId="activeLink"
                    className={`absolute -bottom-1 left-0 right-0 h-0.5 ${
                      scrolled
                        ? 'bg-blue-600 dark:bg-blue-400'
                        : 'bg-white'
                    }`}
                    transition={{ duration: 0.2 }}
                  />
                )}
              </motion.a>
            ))}
          </div>

          {/* CTA Buttons - Desktop */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="hidden md:flex items-center space-x-4"
          >
            <a
              href="#signin"
              className={`px-4 py-2 text-sm font-medium transition-colors ${
                scrolled
                  ? 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                  : 'text-white hover:text-blue-200'
              }`}
            >
              Sign In
            </a>
            <a
              href="#start"
              className={`px-6 py-2.5 text-sm font-medium rounded-md transition-all ${
                scrolled
                  ? 'text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600'
                  : 'text-gray-900 bg-white hover:bg-gray-100 shadow-lg'
              }`}
            >
              Start Free
            </a>
          </motion.div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-md transition-colors ${
                scrolled
                  ? 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                  : 'text-white hover:bg-white/10'
              }`}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-gray-200/50 dark:border-gray-800/50 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-2 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md">
              {links.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => {
                    setActiveLink(link.href);
                    setMobileMenuOpen(false);
                  }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className={`block px-3 py-2 text-base font-medium rounded-md transition-colors ${
                    activeLink === link.href
                      ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                >
                  {link.label}
                </motion.a>
              ))}

              {/* Mobile CTA */}
              <div className="pt-4 space-y-2 border-t border-gray-200 dark:border-gray-800">
                <a
                  href="#signin"
                  className="block w-full px-4 py-2 text-center text-sm font-medium text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-700 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  Sign In
                </a>
                <a
                  href="#start"
                  className="block w-full px-4 py-2 text-center text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 rounded-md transition-colors"
                >
                  Start Free
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Placeholder for Hero Content */}
      {!scrolled && (
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-600 via-blue-500 to-purple-600 h-screen pointer-events-none">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center">
            <div className="text-center text-white">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-5xl md:text-6xl font-bold mb-6"
              >
                Scroll to see navbar transform
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-xl md:text-2xl text-white/90"
              >
                From transparent to solid with blur effect
              </motion.p>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
