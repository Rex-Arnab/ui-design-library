'use client';

import React, { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, CheckCircle, AlertCircle, Star, Users, TrendingUp, Shield } from 'lucide-react';

interface SocialProofNewsletterProps {
  className?: string;
  onSubmit?: (email: string) => void;
}

export default function SocialProofNewsletter({ className = '', onSubmit }: SocialProofNewsletterProps) {
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

  const recentSubscribers = [
    { name: 'Sarah M.', location: 'New York', initials: 'SM', color: 'bg-blue-500' },
    { name: 'James T.', location: 'London', initials: 'JT', color: 'bg-purple-500' },
    { name: 'Maria G.', location: 'Barcelona', initials: 'MG', color: 'bg-green-500' },
    { name: 'David K.', location: 'Tokyo', initials: 'DK', color: 'bg-orange-500' }
  ];

  const benefits = [
    { icon: TrendingUp, text: 'Expert insights from industry leaders' },
    { icon: Users, text: 'Join 12,000+ professionals' },
    { icon: Shield, text: 'Privacy-first, no spam guarantee' }
  ];

  return (
    <section className={`w-full py-16 px-4 ${className}`}>
      <div className="max-w-3xl mx-auto">
        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-8 md:p-12">
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
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                >
                  <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-4" />
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  Welcome to the community!
                </h3>
                <p className="text-base text-gray-600 dark:text-gray-400 mb-2">
                  You've successfully joined 12,000+ subscribers.
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-500">
                  Your first newsletter is on its way!
                </p>
              </motion.div>
            ) : (
              <motion.div
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {/* Social proof header */}
                <div className="flex flex-col sm:flex-row items-center justify-between mb-8 gap-4">
                  <div className="flex items-center gap-3">
                    {/* Avatar stack */}
                    <div className="flex -space-x-3">
                      {recentSubscribers.slice(0, 4).map((subscriber, index) => (
                        <motion.div
                          key={index}
                          initial={{ scale: 0, x: -20 }}
                          animate={{ scale: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className={`w-10 h-10 rounded-full ${subscriber.color} border-2 border-white dark:border-gray-900 flex items-center justify-center text-xs text-white font-semibold`}
                        >
                          {subscriber.initials}
                        </motion.div>
                      ))}
                    </div>
                    <div className="text-left">
                      <p className="text-sm font-semibold text-gray-900 dark:text-white">
                        12,000+ subscribers
                      </p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        Join professionals worldwide
                      </p>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-2">
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <span className="text-sm font-medium text-gray-900 dark:text-white">
                      4.9/5
                    </span>
                  </div>
                </div>

                {/* Headline */}
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3 text-center">
                  Join Our Thriving Community
                </h2>
                <p className="text-base text-gray-600 dark:text-gray-400 mb-8 text-center">
                  Get exclusive content, actionable insights, and expert tips delivered weekly.
                </p>

                {/* Benefits with icons */}
                <div className="mb-8 space-y-4">
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg"
                    >
                      <div className="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                        <benefit.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                      </div>
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {benefit.text}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Recent subscribers ticker */}
                <div className="mb-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-100 dark:border-blue-900/30">
                  <div className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                        Recent subscribers
                      </p>
                      <div className="space-y-2">
                        {recentSubscribers.map((subscriber, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5 + index * 0.1 }}
                            className="text-xs text-gray-600 dark:text-gray-400"
                          >
                            <span className="font-medium text-gray-900 dark:text-white">
                              {subscriber.name}
                            </span>{' '}
                            from {subscriber.location} just subscribed
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="flex flex-col sm:flex-row gap-3">
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
                      className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors whitespace-nowrap"
                    >
                      {status === 'loading' ? 'Joining...' : 'Join Now'}
                    </motion.button>
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
                </form>

                {/* Trust badges */}
                <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-800 flex flex-wrap items-center justify-center gap-6">
                  <div className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-green-600 dark:text-green-400" />
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      100% secure
                    </span>
                  </div>
                  <div className="w-1 h-1 rounded-full bg-gray-400"></div>
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    Weekly updates
                  </span>
                  <div className="w-1 h-1 rounded-full bg-gray-400"></div>
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    Cancel anytime
                  </span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
