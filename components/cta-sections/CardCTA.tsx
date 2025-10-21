'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Rocket } from 'lucide-react';

interface CardCTAProps {
  className?: string;
}

export default function CardCTA({ className = '' }: CardCTAProps) {
  return (
    <section
      className={`bg-white py-16 dark:bg-gray-950 sm:py-20 lg:py-24 ${className}`}
    >
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: 'easeOut' as const }}
          className="relative overflow-hidden rounded-2xl border-2 border-gray-200 bg-white p-8 shadow-2xl dark:border-gray-800 dark:bg-gray-900 sm:p-12 lg:p-16"
        >
          {/* Background decorative elements */}
          <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-blue-50 opacity-50 blur-3xl dark:bg-blue-950"></div>
          <div className="absolute bottom-0 left-0 h-40 w-40 rounded-full bg-purple-50 opacity-50 blur-3xl dark:bg-purple-950"></div>

          {/* Content */}
          <div className="relative text-center">
            {/* Icon */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{
                type: 'spring',
                stiffness: 200,
                damping: 15,
                delay: 0.2,
              }}
              className="mb-6 inline-flex"
            >
              <div className="rounded-2xl bg-blue-100 p-4 dark:bg-blue-950">
                <Rocket className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-3xl"
            >
              Launch your project in record time
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="mb-8 text-base text-gray-600 dark:text-gray-400 sm:text-lg"
            >
              Stop building from scratch. Use our pre-built components and
              templates to ship your product 10x faster. Start with a free trial
              today.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="mb-8 grid grid-cols-3 gap-6 border-y border-gray-200 py-6 dark:border-gray-800"
            >
              <div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">
                  10k+
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Active Users
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">
                  98%
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Satisfaction
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">
                  4.9
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Avg Rating
                </div>
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group inline-flex items-center gap-2 rounded-lg bg-blue-600 px-8 py-3.5 text-base font-semibold text-white shadow-lg transition-all hover:bg-blue-700 hover:shadow-xl dark:bg-blue-500 dark:hover:bg-blue-600"
              >
                <span>Get Started Now</span>
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </motion.button>

              <p className="mt-4 text-sm text-gray-500 dark:text-gray-500">
                No credit card required • Free 14-day trial
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
