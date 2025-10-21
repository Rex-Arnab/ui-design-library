'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Search, ShoppingCart, User, TrendingUp } from 'lucide-react';
import Link from 'next/link';

interface NavLink {
  label: string;
  href: string;
}

interface SearchResult {
  title: string;
  category: string;
  href: string;
}

interface SearchNavbarProps {
  className?: string;
  links?: NavLink[];
  logo?: string;
  onSearch?: (query: string) => void;
}

const defaultLinks: NavLink[] = [
  { label: 'Products', href: '#products' },
  { label: 'Categories', href: '#categories' },
  { label: 'Deals', href: '#deals' },
  { label: 'New', href: '#new' },
];

const searchSuggestions: SearchResult[] = [
  { title: 'Wireless Headphones', category: 'Electronics', href: '#headphones' },
  { title: 'Running Shoes', category: 'Sports', href: '#shoes' },
  { title: 'Coffee Maker', category: 'Home', href: '#coffee' },
  { title: 'Laptop Stand', category: 'Office', href: '#stand' },
  { title: 'Yoga Mat', category: 'Fitness', href: '#yoga' },
];

export default function SearchNavbar({
  className = '',
  links = defaultLinks,
  logo = 'ShopHub',
  onSearch,
}: SearchNavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchFocused, setSearchFocused] = useState(false);
  const [activeLink, setActiveLink] = useState('#products');
  const searchRef = useRef<HTMLDivElement>(null);

  const filteredSuggestions = searchQuery
    ? searchSuggestions.filter(
        (item) =>
          item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.category.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : searchSuggestions.slice(0, 5);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setSearchFocused(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(searchQuery);
    }
    setSearchFocused(false);
  };

  return (
    <nav
      className={`sticky top-0 z-50 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="text-xl font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              {logo}
            </Link>
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden md:block flex-1 max-w-2xl mx-8" ref={searchRef}>
            <form onSubmit={handleSearch} className="relative">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setSearchFocused(true)}
                  placeholder="Search products..."
                  className="w-full pl-10 pr-4 py-2 text-sm bg-gray-100 dark:bg-gray-800 border border-transparent focus:border-blue-500 dark:focus:border-blue-400 focus:bg-white dark:focus:bg-gray-900 rounded-md outline-none transition-all"
                />
              </div>

              {/* Search Suggestions Dropdown */}
              <AnimatePresence>
                {searchFocused && filteredSuggestions.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg shadow-xl overflow-hidden"
                  >
                    <div className="py-2">
                      {searchQuery && (
                        <div className="px-4 py-2 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                          Suggestions
                        </div>
                      )}
                      {filteredSuggestions.map((result, index) => (
                        <a
                          key={index}
                          href={result.href}
                          onClick={() => {
                            setSearchFocused(false);
                            setSearchQuery('');
                          }}
                          className="flex items-center justify-between px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                        >
                          <div className="flex items-center space-x-3">
                            <TrendingUp className="w-4 h-4 text-gray-400" />
                            <span className="text-sm text-gray-900 dark:text-white">
                              {result.title}
                            </span>
                          </div>
                          <span className="text-xs text-gray-500 dark:text-gray-400">
                            {result.category}
                          </span>
                        </a>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setActiveLink(link.href)}
                className={`text-sm font-medium transition-colors ${
                  activeLink === link.href
                    ? 'text-blue-600 dark:text-blue-400'
                    : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Icons - Desktop */}
          <div className="hidden md:flex items-center space-x-3">
            <a
              href="#account"
              className="p-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              aria-label="Account"
            >
              <User className="w-5 h-5" />
            </a>
            <a
              href="#cart"
              className="relative p-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              aria-label="Shopping cart"
            >
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute top-0 right-0 w-4 h-4 bg-blue-600 text-white text-xs flex items-center justify-center rounded-full">
                3
              </span>
            </a>
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
            <div className="px-4 py-4 space-y-4 bg-white dark:bg-gray-900">
              {/* Mobile Search */}
              <form onSubmit={handleSearch} className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search products..."
                  className="w-full pl-10 pr-4 py-2 text-sm bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md outline-none focus:border-blue-500 dark:focus:border-blue-400"
                />
              </form>

              {/* Mobile Links */}
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

              {/* Mobile Icons */}
              <div className="flex items-center justify-around pt-4 border-t border-gray-200 dark:border-gray-800">
                <a
                  href="#account"
                  className="flex flex-col items-center space-y-1 text-gray-700 dark:text-gray-300"
                >
                  <User className="w-6 h-6" />
                  <span className="text-xs">Account</span>
                </a>
                <a
                  href="#cart"
                  className="relative flex flex-col items-center space-y-1 text-gray-700 dark:text-gray-300"
                >
                  <ShoppingCart className="w-6 h-6" />
                  <span className="absolute -top-1 right-6 w-4 h-4 bg-blue-600 text-white text-xs flex items-center justify-center rounded-full">
                    3
                  </span>
                  <span className="text-xs">Cart</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
