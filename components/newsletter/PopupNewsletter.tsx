'use client';

import React, { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, CheckCircle, AlertCircle, X, Gift } from 'lucide-react';

interface PopupNewsletterProps {
  className?: string;
  onSubmit?: (email: string) => void;
  isOpen?: boolean;
  onClose?: () => void;
}

export default function PopupNewsletter({
  className = '',
  onSubmit,
  isOpen = true,
  onClose
}: PopupNewsletterProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [showPopup, setShowPopup] = useState(isOpen);

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
      // Auto-close after success
      setTimeout(() => {
        handleClose();
      }, 2000);
    }, 1000);
  };

  const handleClose = () => {
    setShowPopup(false);
    if (onClose) {
      onClose();
    }
  };

  const handleDismiss = () => {
    handleClose();
  };

  return (
    <AnimatePresence>
      {showPopup && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
              className={`bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-w-md w-full overflow-hidden relative ${className}`}
            >
              {/* Close button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 flex items-center justify-center transition-colors z-10"
                aria-label="Close"
              >
                <X className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              </button>

              <div className="p-8">
                <AnimatePresence mode="wait">
                  {status === 'success' ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      className="text-center py-8"
                    >
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                      >
                        <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-4" />
                      </motion.div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        You're in!
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Check your email for your exclusive offer.
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
                        className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-4"
                      >
                        <Gift className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                      </motion.div>

                      {/* Headline */}
                      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3">
                        Get 20% Off Your First Order
                      </h2>
                      <p className="text-base text-gray-600 dark:text-gray-400 mb-6">
                        Join our newsletter and receive an exclusive discount code, plus weekly tips and early access to new products.
                      </p>

                      {/* Form */}
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="relative">
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
                              <span>Please enter a valid email address</span>
                            </motion.div>
                          )}
                        </AnimatePresence>

                        <motion.button
                          type="submit"
                          disabled={status === 'loading' || !email}
                          whileHover={{ scale: status === 'loading' ? 1 : 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="w-full px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
                        >
                          {status === 'loading' ? 'Subscribing...' : 'Get My 20% Off'}
                        </motion.button>
                      </form>

                      {/* Dismiss option */}
                      <button
                        onClick={handleDismiss}
                        className="w-full mt-4 text-sm text-gray-500 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
                      >
                        No thanks, I'll pay full price
                      </button>

                      {/* Trust message */}
                      <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-800">
                        <p className="text-xs text-center text-gray-500 dark:text-gray-500">
                          Join 30,000+ subscribers. No spam, unsubscribe anytime.
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
