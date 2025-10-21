'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Twitter, Linkedin, Github, Instagram, Youtube, MessageCircle, Mail } from 'lucide-react';

interface SocialFooterProps {
  className?: string;
}

const SocialFooter: React.FC<SocialFooterProps> = ({ className = '' }) => {
  const socialPlatforms = [
    {
      name: 'Twitter',
      Icon: Twitter,
      href: '#',
      color: 'hover:bg-blue-400 hover:border-blue-400',
      followers: '24K',
    },
    {
      name: 'GitHub',
      Icon: Github,
      href: '#',
      color: 'hover:bg-gray-700 hover:border-gray-700',
      followers: '12K',
    },
    {
      name: 'LinkedIn',
      Icon: Linkedin,
      href: '#',
      color: 'hover:bg-blue-700 hover:border-blue-700',
      followers: '8K',
    },
    {
      name: 'YouTube',
      Icon: Youtube,
      href: '#',
      color: 'hover:bg-red-600 hover:border-red-600',
      followers: '15K',
    },
    {
      name: 'Instagram',
      Icon: Instagram,
      href: '#',
      color: 'hover:bg-pink-600 hover:border-pink-600',
      followers: '32K',
    },
    {
      name: 'Discord',
      Icon: MessageCircle,
      href: '#',
      color: 'hover:bg-indigo-600 hover:border-indigo-600',
      followers: '5K',
    },
  ];

  const quickLinks = [
    { label: 'About', href: '#' },
    { label: 'Contact', href: '#' },
    { label: 'Privacy', href: '#' },
    { label: 'Terms', href: '#' },
  ];

  return (
    <footer className={`bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 ${className}`}>
      <div className="max-w-6xl mx-auto px-6 py-12 lg:py-16">
        {/* Logo and Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="w-10 h-10 bg-blue-600 dark:bg-blue-500 rounded-xl flex items-center justify-center">
              <span className="text-white text-base font-bold">UI</span>
            </div>
            <span className="text-base font-semibold text-gray-900 dark:text-white">
              UILibrary
            </span>
          </div>
          <p className="text-xs text-gray-600 dark:text-gray-400 max-w-md mx-auto">
            Connect with us on your favorite platform. We&apos;d love to hear from you!
          </p>
        </motion.div>

        {/* Social Media Icons Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12"
        >
          {socialPlatforms.map((platform, index) => (
            <motion.a
              key={platform.name}
              href={platform.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -4, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`group relative bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-xl p-6 text-center transition-all hover:shadow-lg ${platform.color}`}
            >
              <div className="flex flex-col items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center group-hover:bg-white dark:group-hover:bg-gray-900 transition-colors">
                  <platform.Icon className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900 dark:text-white group-hover:text-white transition-colors">
                    {platform.name}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-500 group-hover:text-white/80 transition-colors">
                    {platform.followers} followers
                  </p>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Contact Email */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mb-8"
        >
          <motion.a
            href="mailto:hello@uilibrary.com"
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white text-sm font-medium rounded-lg transition-colors"
          >
            <Mail className="w-4 h-4" />
            hello@uilibrary.com
          </motion.a>
        </motion.div>

        {/* Bottom Links and Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="pt-8 border-t border-gray-200 dark:border-gray-800"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <nav>
              <ul className="flex items-center gap-6">
                {quickLinks.map((link) => (
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
            <p className="text-xs text-gray-500 dark:text-gray-500">
              © {new Date().getFullYear()} UILibrary. All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default SocialFooter;
