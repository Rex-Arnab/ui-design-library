'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Linkedin, Github, Instagram, Mail } from 'lucide-react';

interface SplitFooterProps {
  className?: string;
}

const SplitFooter: React.FC<SplitFooterProps> = ({ className = '' }) => {
  const productLinks = [
    { label: 'Features', href: '#' },
    { label: 'Pricing', href: '#' },
    { label: 'Documentation', href: '#' },
    { label: 'Changelog', href: '#' },
  ];

  const companyLinks = [
    { label: 'About', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'Careers', href: '#' },
    { label: 'Press', href: '#' },
  ];

  const supportLinks = [
    { label: 'Help Center', href: '#' },
    { label: 'Contact', href: '#' },
    { label: 'Status', href: '#' },
    { label: 'Community', href: '#' },
  ];

  const legalLinks = [
    { label: 'Privacy', href: '#' },
    { label: 'Terms', href: '#' },
    { label: 'Security', href: '#' },
    { label: 'Cookies', href: '#' },
  ];

  const socialLinks = [
    { Icon: Facebook, href: '#', label: 'Facebook' },
    { Icon: Twitter, href: '#', label: 'Twitter' },
    { Icon: Linkedin, href: '#', label: 'LinkedIn' },
    { Icon: Github, href: '#', label: 'GitHub' },
    { Icon: Instagram, href: '#', label: 'Instagram' },
  ];

  return (
    <footer className={`bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 ${className}`}>
      <div className="max-w-7xl mx-auto px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Section - Brand and Social */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Logo and Description */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-blue-600 dark:bg-blue-500 rounded-xl flex items-center justify-center">
                  <span className="text-white text-base font-bold">UI</span>
                </div>
                <span className="text-lg font-semibold text-gray-900 dark:text-white">
                  UILibrary
                </span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed max-w-md">
                A comprehensive UI component library designed for modern web developers. Build faster, ship better products.
              </p>
            </div>

            {/* Newsletter Signup */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
                Stay Updated
              </h3>
              <p className="text-xs text-gray-600 dark:text-gray-400 mb-4">
                Get the latest updates and releases straight to your inbox.
              </p>
              <form className="flex gap-2 max-w-md">
                <div className="flex-1 relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full pl-10 pr-4 py-2.5 text-sm bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 text-gray-900 dark:text-white placeholder-gray-500"
                  />
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white text-sm font-medium rounded-lg transition-colors"
                >
                  Subscribe
                </motion.button>
              </form>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">
                Follow Us
              </h3>
              <div className="flex items-center gap-3">
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
            </div>
          </motion.div>

          {/* Right Section - Navigation Links */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {/* Product Links */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">
                Product
              </h3>
              <nav>
                <ul className="space-y-3">
                  {productLinks.map((link) => (
                    <li key={link.label}>
                      <motion.a
                        href={link.href}
                        whileHover={{ x: 2 }}
                        className="text-xs text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors inline-block"
                      >
                        {link.label}
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">
                Company
              </h3>
              <nav>
                <ul className="space-y-3">
                  {companyLinks.map((link) => (
                    <li key={link.label}>
                      <motion.a
                        href={link.href}
                        whileHover={{ x: 2 }}
                        className="text-xs text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors inline-block"
                      >
                        {link.label}
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Support Links */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">
                Support
              </h3>
              <nav>
                <ul className="space-y-3">
                  {supportLinks.map((link) => (
                    <li key={link.label}>
                      <motion.a
                        href={link.href}
                        whileHover={{ x: 2 }}
                        className="text-xs text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors inline-block"
                      >
                        {link.label}
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Legal Links */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">
                Legal
              </h3>
              <nav>
                <ul className="space-y-3">
                  {legalLinks.map((link) => (
                    <li key={link.label}>
                      <motion.a
                        href={link.href}
                        whileHover={{ x: 2 }}
                        className="text-xs text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors inline-block"
                      >
                        {link.label}
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </motion.div>
        </div>

        {/* Bottom Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-gray-500 dark:text-gray-500">
              © {new Date().getFullYear()} UILibrary. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <span className="text-xs text-gray-500 dark:text-gray-500">
                Built with Next.js and Tailwind CSS
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default SplitFooter;
