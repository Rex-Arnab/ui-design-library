'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

interface NavLink {
  label: string;
  href: string;
  badge?: string;
}

interface SimpleNavbarProps {
  className?: string;
  links?: NavLink[];
  logo?: string;
}

const defaultLinks: NavLink[] = [
  { label: 'Features', href: '#features' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'About', href: '#about' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
];

export default function SimpleNavbar({
  className = '',
  links = defaultLinks,
  logo = 'Brand',
}: SimpleNavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('#features');

  return (
    <nav
      className={`sticky top-0 z-50 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="text-xl font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              {logo}
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setActiveLink(link.href)}
                className={`relative px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  activeLink === link.href
                    ? 'text-blue-600 dark:text-blue-400'
                    : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                }`}
              >
                {link.label}
                {link.badge && (
                  <span className="ml-1.5 px-1.5 py-0.5 text-xs font-semibold bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded">
                    {link.badge}
                  </span>
                )}
                {activeLink === link.href && (
                  <motion.div
                    layoutId="activeLink"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 dark:bg-blue-400"
                    transition={{ duration: 0.2 }}
                  />
                )}
              </a>
            ))}
          </div>

          {/* CTA Buttons - Desktop */}
          <div className="hidden md:flex items-center space-x-3">
            <a
              href="#signin"
              className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Sign In
            </a>
            <a
              href="#getstarted"
              className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 rounded-md transition-colors"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
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
                  className={`flex items-center justify-between px-3 py-2 text-base font-medium rounded-md transition-colors ${
                    activeLink === link.href
                      ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                >
                  <span>{link.label}</span>
                  {link.badge && (
                    <span className="px-1.5 py-0.5 text-xs font-semibold bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded">
                      {link.badge}
                    </span>
                  )}
                </motion.a>
              ))}

              {/* Mobile CTA Buttons */}
              <div className="pt-4 space-y-2 border-t border-gray-200 dark:border-gray-800">
                <a
                  href="#signin"
                  className="block w-full px-4 py-2 text-center text-sm font-medium text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-700 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  Sign In
                </a>
                <a
                  href="#getstarted"
                  className="block w-full px-4 py-2 text-center text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 rounded-md transition-colors"
                >
                  Get Started
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
