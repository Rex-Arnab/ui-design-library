'use client';

import React, { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, CheckCircle, AlertCircle, Zap, TrendingUp, Bell } from 'lucide-react';

interface CenteredNewsletterProps {
  className?: string;
  onSubmit?: (email: string) => void;
}

export default function CenteredNewsletter({ className = '', onSubmit }: CenteredNewsletterProps) {
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

  const benefits = [
    { icon: Zap, text: 'Exclusive tips and strategies' },
    { icon: TrendingUp, text: 'Industry trends and insights' },
    { icon: Bell, text: 'Early access to new features' }
  ];

  return (
    <section className={`w-full py-16 px-4 ${className}`}>
      <div className="max-w-2xl mx-auto">
        <div className="bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-800 rounded-2xl p-8 md:p-12 text-center">
          <AnimatePresence mode="wait">
            {status === 'success' ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="py-8"
              >
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.1 }}
                >
                  <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  Welcome aboard!
                </h3>
                <p className="text-base text-gray-600 dark:text-gray-400 mb-4">
                  You're now subscribed to our newsletter.
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-500">
                  Watch your inbox for great content coming your way!
                </p>
              </motion.div>
            ) : (
              <motion.div
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {/* Icon badge */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                  className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-6"
                >
                  <Mail className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </motion.div>

                {/* Headline */}
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3">
                  Get Weekly Insights
                </h2>
                <p className="text-base text-gray-600 dark:text-gray-400 mb-8">
                  Join our community and receive expert advice, actionable tips, and the latest trends every week.
                </p>

                {/* Benefits list */}
                <div className="mb-8 space-y-3">
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-3 text-left justify-center"
                    >
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center">
                        <benefit.icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                      </div>
                      <span className="text-sm text-gray-700 dark:text-gray-300">
                        {benefit.text}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="relative">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (status === 'error') setStatus('idle');
                      }}
                      placeholder="Enter your email address"
                      className="w-full px-4 py-4 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-center"
                      disabled={status === 'loading'}
                      aria-label="Email address"
                    />
                  </div>

                  {/* Error message */}
                  <AnimatePresence>
                    {status === 'error' && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="flex items-center justify-center gap-2 text-red-600 dark:text-red-400 text-sm"
                      >
                        <AlertCircle className="w-4 h-4" />
                        <span>Please enter a valid email address</span>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <motion.button
                    type="submit"
                    disabled={status === 'loading' || !email}
                    whileHover={{ scale: status === 'loading' ? 1 : 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors text-base"
                  >
                    {status === 'loading' ? 'Subscribing...' : 'Subscribe Now'}
                  </motion.button>
                </form>

                {/* Trust indicators */}
                <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-800">
                  <div className="flex items-center justify-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="font-medium text-gray-900 dark:text-white">
                      15,000+ active subscribers
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-500">
                    We respect your privacy. Unsubscribe at any time.
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
