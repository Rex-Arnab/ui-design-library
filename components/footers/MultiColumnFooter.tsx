'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Linkedin, Github, Instagram } from 'lucide-react';

interface MultiColumnFooterProps {
  className?: string;
}

const MultiColumnFooter: React.FC<MultiColumnFooterProps> = ({ className = '' }) => {
  const companyLinks = [
    { label: 'About Us', href: '#' },
    { label: 'Careers', href: '#' },
    { label: 'Press', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'Contact', href: '#' },
  ];

  const productLinks = [
    { label: 'Features', href: '#' },
    { label: 'Pricing', href: '#' },
    { label: 'Documentation', href: '#' },
    { label: 'API Reference', href: '#' },
    { label: 'Changelog', href: '#' },
  ];

  const resourcesLinks = [
    { label: 'Community', href: '#' },
    { label: 'Tutorials', href: '#' },
    { label: 'Support', href: '#' },
    { label: 'Status', href: '#' },
    { label: 'Partners', href: '#' },
  ];

  const legalLinks = [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Cookie Policy', href: '#' },
    { label: 'Licenses', href: '#' },
  ];

  const socialLinks = [
    { Icon: Facebook, href: '#', label: 'Facebook' },
    { Icon: Twitter, href: '#', label: 'Twitter' },
    { Icon: Linkedin, href: '#', label: 'LinkedIn' },
    { Icon: Github, href: 'https://github.com/Rex-Arnab/ui-design-library', label: 'GitHub' },
    { Icon: Instagram, href: '#', label: 'Instagram' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <footer className={`bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 ${className}`}>
      <div className="max-w-7xl mx-auto px-6 py-12 lg:py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12"
        >
          {/* Logo and Tagline */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-blue-600 dark:bg-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white text-sm font-bold">UI</span>
              </div>
              <span className="text-base font-semibold text-gray-900 dark:text-white">
                UILibrary
              </span>
            </div>
            <p className="text-xs text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              Beautiful components for modern web applications. Built with care for developers.
            </p>
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
          </motion.div>

          {/* Company Links */}
          <motion.div variants={itemVariants}>
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
          </motion.div>

          {/* Product Links */}
          <motion.div variants={itemVariants}>
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
          </motion.div>

          {/* Resources Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">
              Resources
            </h3>
            <nav>
              <ul className="space-y-3">
                {resourcesLinks.map((link) => (
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
          </motion.div>

          {/* Legal Links */}
          <motion.div variants={itemVariants}>
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
          </motion.div>
        </motion.div>

        {/* Bottom Copyright Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-gray-500 dark:text-gray-500">
              © {new Date().getFullYear()} UILibrary. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a
                href="#"
                className="text-xs text-gray-500 dark:text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Sitemap
              </a>
              <a
                href="#"
                className="text-xs text-gray-500 dark:text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Accessibility
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default MultiColumnFooter;
