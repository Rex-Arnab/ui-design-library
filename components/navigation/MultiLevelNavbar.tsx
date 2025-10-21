'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';
import Link from 'next/link';

interface NavLink {
  label: string;
  href: string;
}

interface MultiLevelNavbarProps {
  className?: string;
  mainLinks?: NavLink[];
  utilityLinks?: NavLink[];
  logo?: string;
}

const defaultMainLinks: NavLink[] = [
  { label: 'Products', href: '#products' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Resources', href: '#resources' },
  { label: 'Company', href: '#company' },
];

const defaultUtilityLinks: NavLink[] = [
  { label: 'Support', href: '#support' },
  { label: 'Docs', href: '#docs' },
  { label: 'Blog', href: '#blog' },
];

export default function MultiLevelNavbar({
  className = '',
  mainLinks = defaultMainLinks,
  utilityLinks = defaultUtilityLinks,
  logo = 'Enterprise',
}: MultiLevelNavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMainLink, setActiveMainLink] = useState('#products');
  const [activeUtilityLink, setActiveUtilityLink] = useState('');

  return (
    <nav className={`sticky top-0 z-50 bg-white dark:bg-gray-900 ${className}`}>
      {/* Top Level - Utility Navigation */}
      <div className="bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-10">
            {/* Contact Info */}
            <div className="hidden md:flex items-center space-x-6 text-xs text-gray-600 dark:text-gray-400">
              <a
                href="tel:+1234567890"
                className="flex items-center space-x-1.5 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>+1 (234) 567-890</span>
              </a>
              <a
                href="mailto:support@example.com"
                className="flex items-center space-x-1.5 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>support@example.com</span>
              </a>
              <div className="flex items-center space-x-1.5">
                <MapPin className="w-3.5 h-3.5" />
                <span>San Francisco, CA</span>
              </div>
            </div>

            {/* Utility Links */}
            <div className="flex items-center space-x-6">
              <div className="hidden md:flex items-center space-x-4">
                {utilityLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setActiveUtilityLink(link.href)}
                    className={`text-xs font-medium transition-colors ${
                      activeUtilityLink === link.href
                        ? 'text-blue-600 dark:text-blue-400'
                        : 'text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400'
                    }`}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
              <a
                href="#signin"
                className="text-xs font-medium text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Sign In
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Level - Main Navigation */}
      <div className="border-b border-gray-200 dark:border-gray-800">
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

            {/* Main Navigation - Desktop */}
            <div className="hidden lg:flex items-center space-x-8">
              {mainLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setActiveMainLink(link.href)}
                  className={`relative text-sm font-medium transition-colors ${
                    activeMainLink === link.href
                      ? 'text-blue-600 dark:text-blue-400'
                      : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                  }`}
                >
                  {link.label}
                  {activeMainLink === link.href && (
                    <motion.div
                      layoutId="activeMainLink"
                      className="absolute -bottom-4 left-0 right-0 h-0.5 bg-blue-600 dark:bg-blue-400"
                      transition={{ duration: 0.2 }}
                    />
                  )}
                </a>
              ))}
            </div>

            {/* CTA Buttons - Desktop */}
            <div className="hidden lg:flex items-center space-x-3">
              <a
                href="#contact"
                className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Contact Sales
              </a>
              <a
                href="#demo"
                className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 rounded-md transition-colors"
              >
                Get Demo
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
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
            className="lg:hidden border-b border-gray-200 dark:border-gray-800 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-4 bg-white dark:bg-gray-900">
              {/* Main Links */}
              <div className="space-y-2">
                <div className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide px-3 mb-2">
                  Main Navigation
                </div>
                {mainLinks.map((link, index) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={() => {
                      setActiveMainLink(link.href);
                      setMobileMenuOpen(false);
                    }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className={`block px-3 py-2 text-base font-medium rounded-md transition-colors ${
                      activeMainLink === link.href
                        ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                    }`}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>

              {/* Utility Links */}
              <div className="space-y-2 pt-2 border-t border-gray-200 dark:border-gray-800">
                <div className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide px-3 mb-2">
                  Resources
                </div>
                {utilityLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>

              {/* Mobile CTA */}
              <div className="pt-4 space-y-2 border-t border-gray-200 dark:border-gray-800">
                <a
                  href="#contact"
                  className="block w-full px-4 py-2 text-center text-sm font-medium text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-700 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  Contact Sales
                </a>
                <a
                  href="#demo"
                  className="block w-full px-4 py-2 text-center text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 rounded-md transition-colors"
                >
                  Get Demo
                </a>
              </div>

              {/* Contact Info - Mobile */}
              <div className="pt-4 space-y-2 border-t border-gray-200 dark:border-gray-800">
                <a
                  href="tel:+1234567890"
                  className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-600 dark:text-gray-400"
                >
                  <Phone className="w-4 h-4" />
                  <span>+1 (234) 567-890</span>
                </a>
                <a
                  href="mailto:support@example.com"
                  className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-600 dark:text-gray-400"
                >
                  <Mail className="w-4 h-4" />
                  <span>support@example.com</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
