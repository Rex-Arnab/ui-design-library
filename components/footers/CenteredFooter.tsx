'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Linkedin, Github, Instagram, Youtube } from 'lucide-react';

interface CenteredFooterProps {
  className?: string;
}

const CenteredFooter: React.FC<CenteredFooterProps> = ({ className = '' }) => {
  const navigationLinks = [
    { label: 'Home', href: '#' },
    { label: 'About', href: '#' },
    { label: 'Services', href: '#' },
    { label: 'Portfolio', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'Contact', href: '#' },
  ];

  const legalLinks = [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Cookie Policy', href: '#' },
  ];

  const socialLinks = [
    { Icon: Facebook, href: '#', label: 'Facebook' },
    { Icon: Twitter, href: '#', label: 'Twitter' },
    { Icon: Linkedin, href: '#', label: 'LinkedIn' },
    { Icon: Github, href: 'https://github.com/Rex-Arnab/ui-design-library', label: 'GitHub' },
    { Icon: Instagram, href: '#', label: 'Instagram' },
    { Icon: Youtube, href: '#', label: 'YouTube' },
  ];

  return (
    <footer className={`bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 ${className}`}>
      <div className="max-w-4xl mx-auto px-6 py-12 lg:py-16">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            <div className="flex items-center justify-center gap-2 mb-3">
              <div className="w-12 h-12 bg-blue-600 dark:bg-blue-500 rounded-xl flex items-center justify-center">
                <span className="text-white text-base font-bold">UI</span>
              </div>
              <span className="text-lg font-semibold text-gray-900 dark:text-white">
                UILibrary
              </span>
            </div>
            <p className="text-xs text-gray-600 dark:text-gray-400 max-w-md leading-relaxed">
              Crafting beautiful digital experiences with clean code and thoughtful design.
            </p>
          </motion.div>

          {/* Main Navigation */}
          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mb-8"
          >
            <ul className="flex flex-wrap justify-center items-center gap-x-8 gap-y-3">
              {navigationLinks.map((link, index) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + index * 0.05 }}
                >
                  <motion.a
                    href={link.href}
                    whileHover={{ y: -2 }}
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
                  >
                    {link.label}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.nav>

          {/* Social Media Icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mb-8"
          >
            <div className="flex items-center justify-center gap-3">
              {socialLinks.map(({ Icon, href, label }, index) => (
                <motion.a
                  key={label}
                  href={href}
                  aria-label={label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.05 }}
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500 transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Legal Links */}
          <motion.nav
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mb-6"
          >
            <ul className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-xs text-gray-500 dark:text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.nav>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="pt-6 border-t border-gray-200 dark:border-gray-800 w-full"
          >
            <p className="text-xs text-gray-500 dark:text-gray-500">
              © {new Date().getFullYear()} UILibrary. All rights reserved. Made with care in San Francisco.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default CenteredFooter;
