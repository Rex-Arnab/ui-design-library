'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Star, Quote } from 'lucide-react';

interface SocialProofCTAProps {
  className?: string;
}

export default function SocialProofCTA({ className = '' }: SocialProofCTAProps) {
  const avatars = [
    { id: 1, initials: 'JD', color: 'bg-blue-500' },
    { id: 2, initials: 'SM', color: 'bg-purple-500' },
    { id: 3, initials: 'AK', color: 'bg-green-500' },
    { id: 4, initials: 'LM', color: 'bg-orange-500' },
    { id: 5, initials: 'TC', color: 'bg-pink-500' },
  ];

  return (
    <section
      className={`bg-gray-50 py-16 dark:bg-gray-900 sm:py-20 lg:py-24 ${className}`}
    >
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: 'easeOut' as const }}
          className="text-center"
        >
          {/* Social Proof Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-4 py-2 text-sm font-semibold text-green-700 dark:border-green-900 dark:bg-green-950 dark:text-green-300"
          >
            <div className="flex h-2 w-2 items-center justify-center">
              <div className="absolute h-2 w-2 animate-ping rounded-full bg-green-500"></div>
              <div className="h-2 w-2 rounded-full bg-green-500"></div>
            </div>
            <span>18 people signed up in the last hour</span>
          </motion.div>

          {/* Avatar Stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mb-6 flex justify-center"
          >
            <div className="flex -space-x-3">
              {avatars.map((avatar, index) => (
                <motion.div
                  key={avatar.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.4 }}
                  className={`flex h-12 w-12 items-center justify-center rounded-full border-2 border-white font-semibold text-white dark:border-gray-900 ${avatar.color}`}
                >
                  {avatar.initials}
                </motion.div>
              ))}
              <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-white bg-gray-200 text-sm font-semibold text-gray-600 dark:border-gray-900 dark:bg-gray-700 dark:text-gray-300">
                +12K
              </div>
            </div>
          </motion.div>

          {/* Star Rating */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mb-4 flex items-center justify-center gap-1"
          >
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className="h-5 w-5 fill-yellow-400 text-yellow-400"
              />
            ))}
            <span className="ml-2 text-sm font-medium text-gray-600 dark:text-gray-400">
              4.9 out of 5
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-3xl lg:text-4xl"
          >
            Join 12,000+ teams already growing faster
          </motion.h2>

          {/* Testimonial Quote */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="relative mx-auto mb-8 max-w-2xl rounded-2xl border border-gray-200 bg-white p-8 dark:border-gray-800 dark:bg-gray-950"
          >
            <Quote className="absolute left-4 top-4 h-8 w-8 text-gray-200 dark:text-gray-800" />

            <blockquote className="relative text-base italic text-gray-700 dark:text-gray-300 sm:text-lg">
              &ldquo;This platform completely transformed how we work. We shipped our
              product 3 months ahead of schedule and our team productivity
              increased by 10x. I can&apos;t imagine going back to the old way.&rdquo;
            </blockquote>

            <div className="mt-6 flex items-center justify-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-500 font-semibold text-white">
                SK
              </div>
              <div className="text-left">
                <div className="text-sm font-semibold text-gray-900 dark:text-white">
                  Sarah Kim
                </div>
                <div className="text-xs text-gray-600 dark:text-gray-400">
                  CEO, TechStart Inc
                </div>
              </div>
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group inline-flex items-center gap-2 rounded-lg bg-blue-600 px-8 py-3.5 text-base font-semibold text-white shadow-lg transition-all hover:bg-blue-700 hover:shadow-xl dark:bg-blue-500 dark:hover:bg-blue-600"
            >
              <span>Start Free Trial</span>
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 rounded-lg border-2 border-gray-300 bg-white px-8 py-3.5 text-base font-semibold text-gray-900 transition-all hover:border-gray-400 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-900 dark:text-white dark:hover:border-gray-600 dark:hover:bg-gray-800"
            >
              <span>See Reviews</span>
            </motion.button>
          </motion.div>

          {/* Trust Badge */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="mt-6 text-sm text-gray-500 dark:text-gray-500"
          >
            No credit card required • Free 14-day trial • Cancel anytime
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
