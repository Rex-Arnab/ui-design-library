'use client';

import React, { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, CheckCircle, AlertCircle } from 'lucide-react';

interface InlineNewsletterProps {
  className?: string;
  onSubmit?: (email: string) => void;
}

export default function InlineNewsletter({ className = '', onSubmit }: InlineNewsletterProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!isValidEmail(email)) {
      setStatus('error');
      return;
    }

    setStatus('loading');

    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      if (onSubmit) {
        onSubmit(email);
      }
    }, 1000);
  };

  return (
    <section className={`w-full py-16 px-4 ${className}`}>
      <div className="max-w-4xl mx-auto">
        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-8 md:p-12">
          {/* Headline */}
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3">
              Stay Updated with Our Newsletter
            </h2>
            <p className="text-base text-gray-600 dark:text-gray-400">
              Get the latest insights, tips, and updates delivered directly to your inbox. No spam, ever.
            </p>
          </div>

          <AnimatePresence mode="wait">
            {status === 'success' ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="text-center py-8"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                >
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                </motion.div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Thanks for subscribing!
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Check your email to confirm your subscription.
                </p>
              </motion.div>
            ) : (
              <motion.div
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {/* Form */}
                <form onSubmit={handleSubmit} className="mb-6">
                  <div className="flex flex-col sm:flex-row gap-3 max-w-2xl mx-auto">
                    <div className="flex-1 relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          if (status === 'error') setStatus('idle');
                        }}
                        placeholder="Enter your email address"
                        className="w-full pl-11 pr-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        disabled={status === 'loading'}
                        aria-label="Email address"
                      />
                    </div>
                    <motion.button
                      type="submit"
                      disabled={status === 'loading' || !email}
                      whileHover={{ scale: status === 'loading' ? 1 : 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors whitespace-nowrap"
                    >
                      {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
                    </motion.button>
                  </div>

                  {/* Error message */}
                  <AnimatePresence>
                    {status === 'error' && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="flex items-center justify-center gap-2 mt-3 text-red-600 dark:text-red-400 text-sm"
                      >
                        <AlertCircle className="w-4 h-4" />
                        <span>Please enter a valid email address</span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </form>

                {/* Social proof and privacy */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-2">
                      <div className="w-7 h-7 rounded-full bg-blue-500 border-2 border-white dark:border-gray-900 flex items-center justify-center text-xs text-white font-medium">
                        A
                      </div>
                      <div className="w-7 h-7 rounded-full bg-purple-500 border-2 border-white dark:border-gray-900 flex items-center justify-center text-xs text-white font-medium">
                        B
                      </div>
                      <div className="w-7 h-7 rounded-full bg-green-500 border-2 border-white dark:border-gray-900 flex items-center justify-center text-xs text-white font-medium">
                        C
                      </div>
                    </div>
                    <span className="font-medium text-gray-900 dark:text-white">
                      Join 50,000+ subscribers
                    </span>
                  </div>
                  <div className="hidden sm:block w-1 h-1 rounded-full bg-gray-400"></div>
                  <span>Weekly updates • Unsubscribe anytime</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
