'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface MinimalCTAProps {
  className?: string;
}

export default function MinimalCTA({ className = '' }: MinimalCTAProps) {
  return (
    <section
      className={`bg-white py-16 dark:bg-gray-950 sm:py-24 lg:py-32 ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, ease: 'easeOut' as const }}
        className="mx-auto max-w-3xl px-6 text-center lg:px-8"
      >
        {/* Main Headline */}
        <h2 className="mb-6 text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-3xl lg:text-4xl">
          Ready to take your business to the next level?
        </h2>

        {/* Supporting Text */}
        <p className="mb-10 text-base text-gray-600 dark:text-gray-400 sm:text-lg">
          Join over 5,000 companies already growing with our platform.
          Start your journey today with a free 14-day trial.
        </p>

        {/* Single CTA Button */}
        <motion.button
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className="group inline-flex items-center gap-2 rounded-lg bg-gray-900 px-8 py-3.5 text-base font-semibold text-white shadow-lg transition-all hover:bg-gray-800 hover:shadow-xl dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100"
        >
          <span>Get Started Free</span>
          <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
        </motion.button>

        {/* Subtle Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-6 text-sm text-gray-500 dark:text-gray-500"
        >
          No credit card required • Cancel anytime
        </motion.p>
      </motion.div>

      {/* Subtle Border */}
      <div className="mx-auto mt-16 max-w-3xl border-t border-gray-200 dark:border-gray-800"></div>
    </section>
  );
}
