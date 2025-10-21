'use client';

import React, { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle, AlertCircle } from 'lucide-react';

interface MinimalNewsletterProps {
  className?: string;
  onSubmit?: (email: string) => void;
}

export default function MinimalNewsletter({ className = '', onSubmit }: MinimalNewsletterProps) {
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
    <section className={`w-full py-12 px-4 ${className}`}>
      <div className="max-w-xl mx-auto">
        <AnimatePresence mode="wait">
          {status === 'success' ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="text-center py-6"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                className="inline-block mb-3"
              >
                <CheckCircle className="w-12 h-12 text-green-500" />
              </motion.div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                You're subscribed!
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Thanks for joining us.
              </p>
            </motion.div>
          ) : (
            <motion.div
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {/* Minimal headline */}
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
                Get updates in your inbox
              </h2>

              {/* Form */}
              <form onSubmit={handleSubmit}>
                <div className="flex flex-col sm:flex-row gap-2">
                  <div className="flex-1 relative">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (status === 'error') setStatus('idle');
                      }}
                      placeholder="you@example.com"
                      className="w-full px-4 py-2.5 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm"
                      disabled={status === 'loading'}
                      aria-label="Email address"
                    />
                  </div>
                  <motion.button
                    type="submit"
                    disabled={status === 'loading' || !email}
                    whileHover={{ scale: status === 'loading' ? 1 : 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-6 py-2.5 bg-gray-900 dark:bg-white hover:bg-gray-800 dark:hover:bg-gray-100 text-white dark:text-gray-900 font-medium rounded-lg disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2 text-sm whitespace-nowrap"
                  >
                    {status === 'loading' ? (
                      'Subscribing...'
                    ) : (
                      <>
                        Subscribe
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </motion.button>
                </div>

                {/* Error message */}
                <AnimatePresence>
                  {status === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="flex items-center gap-2 mt-2 text-red-600 dark:text-red-400 text-sm"
                    >
                      <AlertCircle className="w-4 h-4" />
                      <span>Please enter a valid email</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>

              {/* Privacy note */}
              <p className="mt-3 text-xs text-center text-gray-500 dark:text-gray-500">
                No spam. Unsubscribe anytime.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
