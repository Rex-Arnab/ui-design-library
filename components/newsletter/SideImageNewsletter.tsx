'use client';

import React, { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, CheckCircle, AlertCircle, Check, User } from 'lucide-react';

interface SideImageNewsletterProps {
  className?: string;
  onSubmit?: (data: { name: string; email: string }) => void;
}

export default function SideImageNewsletter({ className = '', onSubmit }: SideImageNewsletterProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!isValidEmail(email) || !name.trim()) {
      setStatus('error');
      return;
    }

    setStatus('loading');

    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      if (onSubmit) {
        onSubmit({ name, email });
      }
    }, 1000);
  };

  const benefits = [
    'Weekly expert insights and industry news',
    'Exclusive tips and actionable strategies',
    'Early access to new products and features',
    'Free downloadable resources and guides'
  ];

  return (
    <section className={`w-full py-16 px-4 ${className}`}>
      <div className="max-w-6xl mx-auto">
        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden">
          <div className="grid md:grid-cols-2 gap-0">
            {/* Left: Form Content */}
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="text-center md:text-left py-8"
                  >
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                      className="inline-block"
                    >
                      <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                      You&apos;re all set, {name.split(' ')[0]}!
                    </h3>
                    <p className="text-base text-gray-600 dark:text-gray-400 mb-2">
                      Thanks for joining our community.
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-500">
                      Check your inbox for a confirmation email.
                    </p>
                  </motion.div>
                ) : (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 rounded-full text-sm font-medium mb-6">
                      <Mail className="w-4 h-4" />
                      <span>Newsletter</span>
                    </div>

                    {/* Headline */}
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3">
                      Stay in the Loop
                    </h2>
                    <p className="text-base text-gray-600 dark:text-gray-400 mb-6">
                      Subscribe to our newsletter and get the latest updates, tips, and exclusive content delivered to your inbox.
                    </p>

                    {/* Benefits */}
                    <div className="mb-8 space-y-3">
                      {benefits.map((benefit, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-start gap-3"
                        >
                          <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mt-0.5">
                            <Check className="w-3 h-3 text-green-600 dark:text-green-400" />
                          </div>
                          <span className="text-sm text-gray-700 dark:text-gray-300">
                            {benefit}
                          </span>
                        </motion.div>
                      ))}
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="text"
                          value={name}
                          onChange={(e) => {
                            setName(e.target.value);
                            if (status === 'error') setStatus('idle');
                          }}
                          placeholder="Your name"
                          className="w-full pl-11 pr-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                          disabled={status === 'loading'}
                          aria-label="Name"
                        />
                      </div>

                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => {
                            setEmail(e.target.value);
                            if (status === 'error') setStatus('idle');
                          }}
                          placeholder="Your email address"
                          className="w-full pl-11 pr-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
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
                            className="flex items-center gap-2 text-red-600 dark:text-red-400 text-sm"
                          >
                            <AlertCircle className="w-4 h-4" />
                            <span>Please fill in all fields correctly</span>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      <motion.button
                        type="submit"
                        disabled={status === 'loading' || !email || !name}
                        whileHover={{ scale: status === 'loading' ? 1 : 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
                      >
                        {status === 'loading' ? 'Subscribing...' : 'Subscribe Now'}
                      </motion.button>
                    </form>

                    {/* Privacy note */}
                    <p className="mt-4 text-xs text-gray-500 dark:text-gray-500">
                      We respect your privacy. Unsubscribe at any time. No spam, ever.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Right: Image Placeholder */}
            <div className="hidden md:block relative bg-blue-50 dark:bg-blue-900/20 border-l border-gray-200 dark:border-gray-800">
              <div className="absolute inset-0 flex items-center justify-center p-12">
                <div className="text-center">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="relative"
                  >
                    {/* Illustration placeholder */}
                    <div className="w-64 h-64 mx-auto mb-6 bg-white dark:bg-gray-800 rounded-2xl border-2 border-gray-200 dark:border-gray-700 flex items-center justify-center">
                      <Mail className="w-32 h-32 text-blue-300 dark:text-blue-700" />
                    </div>

                    {/* Floating elements */}
                    <motion.div
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' as const }}
                      className="absolute top-0 right-0 w-16 h-16 bg-blue-100 dark:bg-blue-800 rounded-lg flex items-center justify-center shadow-lg"
                    >
                      <CheckCircle className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                    </motion.div>

                    <motion.div
                      animate={{ y: [0, 10, 0] }}
                      transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' as const, delay: 0.5 }}
                      className="absolute bottom-0 left-0 w-16 h-16 bg-purple-100 dark:bg-purple-800 rounded-lg flex items-center justify-center shadow-lg"
                    >
                      <Mail className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                    </motion.div>
                  </motion.div>

                  <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                    Join 25,000+ professionals
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
