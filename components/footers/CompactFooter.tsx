'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Facebook, Twitter, Linkedin, Github } from 'lucide-react';

interface CompactFooterProps {
  className?: string;
}

const CompactFooter: React.FC<CompactFooterProps> = ({ className = '' }) => {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  const sections = {
    product: {
      title: 'Product',
      links: [
        { label: 'Features', href: '#' },
        { label: 'Pricing', href: '#' },
        { label: 'Docs', href: '#' },
        { label: 'API', href: '#' },
      ],
    },
    company: {
      title: 'Company',
      links: [
        { label: 'About', href: '#' },
        { label: 'Blog', href: '#' },
        { label: 'Careers', href: '#' },
        { label: 'Press', href: '#' },
      ],
    },
    support: {
      title: 'Support',
      links: [
        { label: 'Help', href: '#' },
        { label: 'Contact', href: '#' },
        { label: 'Status', href: '#' },
        { label: 'FAQ', href: '#' },
      ],
    },
    legal: {
      title: 'Legal',
      links: [
        { label: 'Privacy', href: '#' },
        { label: 'Terms', href: '#' },
        { label: 'Cookies', href: '#' },
        { label: 'Licenses', href: '#' },
      ],
    },
  };

  const socialLinks = [
    { Icon: Facebook, href: '#', label: 'Facebook' },
    { Icon: Twitter, href: '#', label: 'Twitter' },
    { Icon: Linkedin, href: '#', label: 'LinkedIn' },
    { Icon: Github, href: '#', label: 'GitHub' },
  ];

  return (
    <footer className={`bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 ${className}`}>
      {/* Desktop View - Single Row */}
      <div className="hidden lg:block max-w-7xl mx-auto px-6 py-6">
        <div className="flex items-center justify-between gap-8">
          {/* Logo */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <div className="w-8 h-8 bg-blue-600 dark:bg-blue-500 rounded-lg flex items-center justify-center">
              <span className="text-white text-xs font-bold">UI</span>
            </div>
            <span className="text-sm font-semibold text-gray-900 dark:text-white">
              UILibrary
            </span>
          </div>

          {/* Navigation Sections */}
          <div className="flex items-center gap-8 flex-1">
            {Object.entries(sections).map(([key, section]) => (
              <div key={key} className="flex items-center gap-4">
                <span className="text-xs font-semibold text-gray-900 dark:text-white whitespace-nowrap">
                  {section.title}
                </span>
                <nav>
                  <ul className="flex items-center gap-4">
                    {section.links.map((link) => (
                      <li key={link.label}>
                        <motion.a
                          href={link.href}
                          whileHover={{ y: -1 }}
                          className="text-xs text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors whitespace-nowrap"
                        >
                          {link.label}
                        </motion.a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            ))}
          </div>

          {/* Social Links and Copyright */}
          <div className="flex items-center gap-6 flex-shrink-0">
            <div className="flex items-center gap-2">
              {socialLinks.map(({ Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  aria-label={label}
                  whileHover={{ scale: 1.1, y: -1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-8 h-8 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500 transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-500 whitespace-nowrap">
              © {new Date().getFullYear()} UILibrary
            </p>
          </div>
        </div>
      </div>

      {/* Mobile View - Accordion */}
      <div className="lg:hidden max-w-7xl mx-auto px-6 py-8">
        {/* Logo */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 dark:bg-blue-500 rounded-lg flex items-center justify-center">
              <span className="text-white text-xs font-bold">UI</span>
            </div>
            <span className="text-sm font-semibold text-gray-900 dark:text-white">
              UILibrary
            </span>
          </div>
        </div>

        {/* Accordion Sections */}
        <div className="space-y-2 mb-6">
          {Object.entries(sections).map(([key, section]) => (
            <div
              key={key}
              className="border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleSection(key)}
                className="w-full flex items-center justify-between px-4 py-3 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                <span className="text-sm font-semibold text-gray-900 dark:text-white">
                  {section.title}
                </span>
                <motion.div
                  animate={{ rotate: openSection === key ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                </motion.div>
              </button>

              <AnimatePresence>
                {openSection === key && (
                  <motion.nav
                    initial={{ height: 0 }}
                    animate={{ height: 'auto' }}
                    exit={{ height: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <ul className="px-4 py-3 space-y-2 bg-white dark:bg-gray-900">
                      {section.links.map((link) => (
                        <li key={link.label}>
                          <a
                            href={link.href}
                            className="text-xs text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors block py-1"
                          >
                            {link.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </motion.nav>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-3 mb-6">
          {socialLinks.map(({ Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              aria-label={label}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="w-9 h-9 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500 transition-colors"
            >
              <Icon className="w-4 h-4" />
            </motion.a>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-center pt-6 border-t border-gray-200 dark:border-gray-800">
          <p className="text-xs text-gray-500 dark:text-gray-500">
            © {new Date().getFullYear()} UILibrary. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default CompactFooter;
