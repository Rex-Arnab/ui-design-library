'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

interface BannerCTAProps {
  className?: string;
}

export default function BannerCTA({ className = '' }: BannerCTAProps) {
  return (
    <section
      className={`bg-blue-600 py-4 dark:bg-blue-500 ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="mx-auto max-w-7xl px-6 lg:px-8"
      >
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          {/* Left - Message */}
          <div className="flex items-center gap-3 text-center sm:text-left">
            <motion.div
              animate={{
                rotate: [0, 10, -10, 10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 3,
              }}
            >
              <Sparkles className="h-6 w-6 text-yellow-300" />
            </motion.div>

            <div>
              <p className="text-base font-semibold text-white sm:text-lg">
                Special Offer: Get 3 months free on annual plans
              </p>
              <p className="text-sm text-blue-100">
                Limited time only. Ends December 31st.
              </p>
            </div>
          </div>

          {/* Right - CTA */}
          <div className="flex flex-shrink-0 items-center gap-3">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group inline-flex items-center gap-2 rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-blue-600 shadow-lg transition-all hover:bg-blue-50 hover:shadow-xl dark:bg-gray-900 dark:text-blue-400 dark:hover:bg-gray-800"
            >
              <span>Claim Offer</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </motion.button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
