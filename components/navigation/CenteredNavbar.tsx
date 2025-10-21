'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

interface NavLink {
  label: string;
  href: string;
}

interface CenteredNavbarProps {
  className?: string;
  links?: NavLink[];
  logo?: string;
}

const defaultLinks: NavLink[] = [
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
];

export default function CenteredNavbar({
  className = '',
  links = defaultLinks,
  logo = 'Creative Studio',
}: CenteredNavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('#portfolio');

  return (
    <nav
      className={`sticky top-0 z-50 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile Header */}
        <div className="flex md:hidden items-center justify-between h-16">
          <Link
            href="/"
            className="text-lg font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            {logo}
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Desktop Layout - Centered */}
        <div className="hidden md:block py-6">
          {/* Logo Centered */}
          <div className="flex justify-center mb-6">
            <Link
              href="/"
              className="text-2xl font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              {logo}
            </Link>
          </div>

          {/* Navigation Links Centered */}
          <div className="flex justify-center items-center space-x-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setActiveLink(link.href)}
                className={`relative text-sm font-medium transition-colors ${
                  activeLink === link.href
                    ? 'text-blue-600 dark:text-blue-400'
                    : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                }`}
              >
                {link.label}
                {activeLink === link.href && (
                  <motion.div
                    layoutId="centerActiveLink"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-600 dark:bg-blue-400"
                    transition={{ duration: 0.2 }}
                  />
                )}
              </a>
            ))}
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
            className="md:hidden border-t border-gray-200 dark:border-gray-800 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-2 bg-white dark:bg-gray-900">
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
                  className={`block px-3 py-2 text-base font-medium text-center rounded-md transition-colors ${
                    activeLink === link.href
                      ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
