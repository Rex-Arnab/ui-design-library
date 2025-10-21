'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Linkedin, Github, Mail, Phone, MapPin, Apple, Smartphone, Shield, Lock, CreditCard, Zap } from 'lucide-react';

interface MegaFooterProps {
  className?: string;
}

const MegaFooter: React.FC<MegaFooterProps> = ({ className = '' }) => {
  const productLinks = [
    { label: 'Features', href: '#' },
    { label: 'Pricing', href: '#' },
    { label: 'Security', href: '#' },
    { label: 'Enterprise', href: '#' },
    { label: 'Changelog', href: '#' },
    { label: 'Roadmap', href: '#' },
  ];

  const resourcesLinks = [
    { label: 'Documentation', href: '#' },
    { label: 'API Reference', href: '#' },
    { label: 'Guides', href: '#' },
    { label: 'Video Tutorials', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'Newsletter', href: '#' },
  ];

  const companyLinks = [
    { label: 'About Us', href: '#' },
    { label: 'Careers', href: '#' },
    { label: 'Press Kit', href: '#' },
    { label: 'Partners', href: '#' },
    { label: 'Investors', href: '#' },
    { label: 'Events', href: '#' },
  ];

  const supportLinks = [
    { label: 'Help Center', href: '#' },
    { label: 'Community', href: '#' },
    { label: 'Contact Sales', href: '#' },
    { label: 'Status Page', href: '#' },
    { label: 'Report Bug', href: '#' },
    { label: 'Request Feature', href: '#' },
  ];

  const legalLinks = [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Cookie Policy', href: '#' },
    { label: 'GDPR', href: '#' },
    { label: 'Licenses', href: '#' },
    { label: 'Sitemap', href: '#' },
  ];

  const socialLinks = [
    { Icon: Facebook, href: '#', label: 'Facebook' },
    { Icon: Twitter, href: '#', label: 'Twitter' },
    { Icon: Linkedin, href: '#', label: 'LinkedIn' },
    { Icon: Github, href: 'https://github.com/Rex-Arnab/ui-design-library', label: 'GitHub' },
  ];

  const trustBadges = [
    { Icon: Shield, label: 'SOC 2 Certified' },
    { Icon: Lock, label: 'GDPR Compliant' },
    { Icon: Zap, label: '99.9% Uptime' },
  ];

  const paymentMethods = [
    { Icon: CreditCard, label: 'Credit Cards' },
    { Icon: Apple, label: 'Apple Pay' },
    { Icon: Smartphone, label: 'Google Pay' },
  ];

  return (
    <footer className={`bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 ${className}`}>
      <div className="max-w-7xl mx-auto px-6 py-12 lg:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-6 mb-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-blue-600 dark:bg-blue-500 rounded-xl flex items-center justify-center">
                <span className="text-white text-base font-bold">UI</span>
              </div>
              <span className="text-base font-semibold text-gray-900 dark:text-white">
                UILibrary
              </span>
            </div>
            <p className="text-xs text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              Professional UI components library for modern web applications. Trusted by 10,000+ developers worldwide.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400">
                <Mail className="w-4 h-4" />
                <a href="mailto:hello@uilibrary.com" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  hello@uilibrary.com
                </a>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400">
                <MapPin className="w-4 h-4" />
                <span>San Francisco, CA 94105</span>
              </div>
            </div>

            {/* Social Links */}
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

          {/* Product Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">
              Product
            </h3>
            <nav>
              <ul className="space-y-3">
                {productLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-xs text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>

          {/* Resources Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">
              Resources
            </h3>
            <nav>
              <ul className="space-y-3">
                {resourcesLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-xs text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>

          {/* Company Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">
              Company
            </h3>
            <nav>
              <ul className="space-y-3">
                {companyLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-xs text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>

          {/* Support Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">
              Support
            </h3>
            <nav>
              <ul className="space-y-3">
                {supportLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-xs text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>
        </div>

        {/* Trust Badges and App Store Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="pb-8 mb-8 border-b border-gray-200 dark:border-gray-800"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Trust Badges */}
            <div>
              <h4 className="text-xs font-semibold text-gray-900 dark:text-white mb-4">
                Trusted & Certified
              </h4>
              <div className="flex flex-wrap gap-4">
                {trustBadges.map(({ Icon, label }) => (
                  <div
                    key={label}
                    className="flex items-center gap-2 px-3 py-2 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700"
                  >
                    <Icon className="w-4 h-4 text-green-600 dark:text-green-500" />
                    <span className="text-xs text-gray-700 dark:text-gray-300">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Payment Methods */}
            <div>
              <h4 className="text-xs font-semibold text-gray-900 dark:text-white mb-4">
                We Accept
              </h4>
              <div className="flex flex-wrap gap-4">
                {paymentMethods.map(({ Icon, label }) => (
                  <div
                    key={label}
                    className="flex items-center gap-2 px-3 py-2 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700"
                  >
                    <Icon className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                    <span className="text-xs text-gray-700 dark:text-gray-300">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-gray-500 dark:text-gray-500">
              © {new Date().getFullYear()} UILibrary. All rights reserved.
            </p>
            <nav>
              <ul className="flex items-center gap-6">
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
            </nav>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default MegaFooter;
