'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface MinimalFooterProps {
  className?: string;
}

const MinimalFooter: React.FC<MinimalFooterProps> = ({ className = '' }) => {
  const links = [
    { label: 'About', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'Privacy', href: '#' },
    { label: 'Terms', href: '#' },
    { label: 'Contact', href: '#' },
  ];

  return (
    <footer className={`bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 ${className}`}>
      <div className="max-w-7xl mx-auto px-6 py-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row justify-between items-center gap-6"
        >
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-blue-600 dark:bg-blue-500 rounded-lg flex items-center justify-center">
              <span className="text-white text-xs font-bold">UI</span>
            </div>
            <span className="text-sm font-semibold text-gray-900 dark:text-white">
              UILibrary
            </span>
          </div>

          {/* Links */}
          <nav className="flex items-center gap-8">
            <ul className="flex items-center gap-8">
              {links.map((link, index) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <motion.a
                    href={link.href}
                    whileHover={{ y: -2 }}
                    className="text-xs text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {link.label}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </nav>

          {/* Copyright */}
          <p className="text-xs text-gray-500 dark:text-gray-500">
            © {new Date().getFullYear()} UILibrary
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default MinimalFooter;
