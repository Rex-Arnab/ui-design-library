'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Twitter, Linkedin } from 'lucide-react';
import Link from 'next/link';

interface NavLink {
  label: string;
  href: string;
}

interface SplitNavbarProps {
  className?: string;
  links?: NavLink[];
  logo?: string;
}

const defaultLinks: NavLink[] = [
  { label: 'Work', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function SplitNavbar({
  className = '',
  links = defaultLinks,
  logo = 'Studio',
}: SplitNavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('#work');

  const socialLinks = [
    { icon: Github, href: '#github', label: 'GitHub' },
    { icon: Twitter, href: '#twitter', label: 'Twitter' },
    { icon: Linkedin, href: '#linkedin', label: 'LinkedIn' },
  ];

  return (
    <nav
      className={`sticky top-0 z-50 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo - Far Left */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="text-xl font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              {logo}
            </Link>
          </div>

          {/* Desktop Navigation - Far Right */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Main Links */}
            <div className="flex items-center space-x-6">
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
                      layoutId="splitActiveLink"
                      className="absolute -bottom-2 left-0 right-0 h-0.5 bg-blue-600 dark:bg-blue-400"
                      transition={{ duration: 0.2 }}
                    />
                  )}
                </a>
              ))}
            </div>

            {/* Divider */}
            <div className="h-6 w-px bg-gray-300 dark:bg-gray-700" />

            {/* Social Links */}
            <div className="flex items-center space-x-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.href}
                    href={social.href}
                    className="p-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
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
              {/* Main Links */}
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

              {/* Social Links */}
              <div className="pt-4 border-t border-gray-200 dark:border-gray-800">
                <div className="flex items-center justify-center space-x-6">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.href}
                        href={social.href}
                        className="p-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        aria-label={social.label}
                      >
                        <Icon className="w-6 h-6" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
