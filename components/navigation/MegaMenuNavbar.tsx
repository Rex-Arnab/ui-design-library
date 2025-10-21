'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Zap, Shield, TrendingUp, Users, BookOpen, Code } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface MegaMenuItem {
  label: string;
  href: string;
  description?: string;
  icon?: LucideIcon;
}

interface NavLink {
  label: string;
  href: string;
  megaMenu?: MegaMenuItem[][];
}

interface MegaMenuNavbarProps {
  className?: string;
  links?: NavLink[];
  logo?: string;
}

const defaultLinks: NavLink[] = [
  {
    label: 'Products',
    href: '#products',
    megaMenu: [
      [
        { label: 'Analytics', href: '#analytics', description: 'Track your metrics', icon: TrendingUp },
        { label: 'Security', href: '#security', description: 'Enterprise-grade protection', icon: Shield },
        { label: 'API', href: '#api', description: 'Powerful integrations', icon: Code },
      ],
      [
        { label: 'Team Collaboration', href: '#team', description: 'Work together seamlessly', icon: Users },
        { label: 'Documentation', href: '#docs', description: 'Comprehensive guides', icon: BookOpen },
        { label: 'Performance', href: '#performance', description: 'Lightning fast', icon: Zap },
      ],
    ],
  },
  { label: 'Pricing', href: '#pricing' },
  {
    label: 'Resources',
    href: '#resources',
    megaMenu: [
      [
        { label: 'Blog', href: '#blog', description: 'Latest updates and news' },
        { label: 'Case Studies', href: '#cases', description: 'Customer success stories' },
        { label: 'Help Center', href: '#help', description: 'Get support' },
      ],
      [
        { label: 'Community', href: '#community', description: 'Join our community' },
        { label: 'Events', href: '#events', description: 'Upcoming webinars' },
        { label: 'Changelog', href: '#changelog', description: 'Product updates' },
      ],
    ],
  },
  { label: 'About', href: '#about' },
];

export default function MegaMenuNavbar({
  className = '',
  links = defaultLinks,
  logo = 'MegaBrand',
}: MegaMenuNavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <nav
      className={`sticky top-0 z-50 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a
              href="/"
              className="text-xl font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              {logo}
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {links.map((link) => (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => link.megaMenu && setActiveDropdown(link.href)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a
                  href={link.href}
                  className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  {link.label}
                  {link.megaMenu && (
                    <ChevronDown className={`ml-1 w-4 h-4 transition-transform ${activeDropdown === link.href ? 'rotate-180' : ''}`} />
                  )}
                </a>

                {/* Mega Menu Dropdown */}
                {link.megaMenu && (
                  <AnimatePresence>
                    {activeDropdown === link.href && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-1/2 -translate-x-1/2 mt-2 w-[600px]"
                      >
                        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg shadow-xl overflow-hidden">
                          <div className="grid grid-cols-2 gap-6 p-6">
                            {link.megaMenu.map((column, colIndex) => (
                              <div key={colIndex} className="space-y-4">
                                {column.map((item) => {
                                  const Icon = item.icon;
                                  return (
                                    <a
                                      key={item.href}
                                      href={item.href}
                                      className="group block p-3 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                                    >
                                      <div className="flex items-start space-x-3">
                                        {Icon && (
                                          <div className="flex-shrink-0 w-10 h-10 rounded-md bg-blue-50 dark:bg-blue-950 flex items-center justify-center group-hover:bg-blue-100 dark:group-hover:bg-blue-900 transition-colors">
                                            <Icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                                          </div>
                                        )}
                                        <div className="flex-1 min-w-0">
                                          <p className="text-sm font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                            {item.label}
                                          </p>
                                          {item.description && (
                                            <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                                              {item.description}
                                            </p>
                                          )}
                                        </div>
                                      </div>
                                    </a>
                                  );
                                })}
                              </div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons - Desktop */}
          <div className="hidden lg:flex items-center space-x-3">
            <a
              href="#signin"
              className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Sign In
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

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden border-t border-gray-200 dark:border-gray-800 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-2 bg-white dark:bg-gray-900 max-h-[80vh] overflow-y-auto">
              {links.map((link, index) => (
                <div key={link.href}>
                  <a
                    href={link.href}
                    className="block px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors"
                  >
                    {link.label}
                  </a>
                  {link.megaMenu && (
                    <div className="ml-4 mt-2 space-y-2">
                      {link.megaMenu.flat().map((item) => (
                        <a
                          key={item.href}
                          href={item.href}
                          className="block px-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors"
                        >
                          {item.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Mobile CTA */}
              <div className="pt-4 space-y-2 border-t border-gray-200 dark:border-gray-800">
                <a
                  href="#signin"
                  className="block w-full px-4 py-2 text-center text-sm font-medium text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-700 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  Sign In
                </a>
                <a
                  href="#demo"
                  className="block w-full px-4 py-2 text-center text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 rounded-md transition-colors"
                >
                  Get Demo
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
