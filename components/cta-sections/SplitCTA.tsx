'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Check, Zap, Shield, TrendingUp } from 'lucide-react';

interface SplitCTAProps {
  className?: string;
}

export default function SplitCTA({ className = '' }: SplitCTAProps) {
  const benefits = [
    {
      icon: Zap,
      text: 'Lightning-fast setup in under 5 minutes',
    },
    {
      icon: Shield,
      text: 'Enterprise-grade security and compliance',
    },
    {
      icon: TrendingUp,
      text: 'Proven to increase productivity by 10x',
    },
    {
      icon: Check,
      text: '24/7 dedicated customer support',
    },
  ];

  return (
    <section
      className={`bg-gray-50 py-16 dark:bg-gray-900 sm:py-20 lg:py-24 ${className}`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column - Copy and Benefits */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: 'easeOut' as const }}
            className="flex flex-col justify-center"
          >
            {/* Eyebrow */}
            <div className="mb-4 inline-flex">
              <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700 dark:bg-blue-950 dark:text-blue-300">
                Limited Time Offer
              </span>
            </div>

            {/* Headline */}
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Everything you need to scale your business
            </h2>

            {/* Subheadline */}
            <p className="mb-8 text-lg text-gray-600 dark:text-gray-400">
              Stop wasting time on manual processes. Automate your workflow
              and focus on what matters most - growing your business.
            </p>

            {/* Benefits List */}
            <div className="mb-8 space-y-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="flex items-start gap-3"
                >
                  <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-950">
                    <benefit.icon className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                  </div>
                  <p className="text-base text-gray-700 dark:text-gray-300">
                    {benefit.text}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="flex flex-col gap-4 sm:flex-row">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-lg transition-all hover:bg-blue-700 hover:shadow-xl dark:bg-blue-500 dark:hover:bg-blue-600"
              >
                <span>Start Free Trial</span>
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-gray-300 bg-white px-6 py-3 text-base font-semibold text-gray-900 transition-all hover:border-gray-400 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-900 dark:text-white dark:hover:border-gray-600 dark:hover:bg-gray-800"
              >
                <span>View Pricing</span>
              </motion.button>
            </div>

            {/* Trust Note */}
            <p className="mt-6 text-sm text-gray-500 dark:text-gray-500">
              Join 10,000+ companies already using our platform
            </p>
          </motion.div>

          {/* Right Column - Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: 'easeOut' as const, delay: 0.2 }}
            className="relative flex items-center justify-center"
          >
            {/* Placeholder for illustration/image */}
            <div className="relative h-full w-full overflow-hidden rounded-2xl border-2 border-gray-200 bg-white p-8 shadow-2xl dark:border-gray-800 dark:bg-gray-950">
              {/* Dashboard mockup placeholder */}
              <div className="space-y-4">
                {/* Header bar */}
                <div className="flex items-center justify-between rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                  <div className="h-4 w-32 rounded bg-gray-300 dark:bg-gray-700"></div>
                  <div className="h-4 w-20 rounded bg-gray-300 dark:bg-gray-700"></div>
                </div>

                {/* Chart area */}
                <div className="rounded-lg bg-blue-50 p-6 dark:bg-blue-950">
                  <div className="mb-4 h-6 w-40 rounded bg-blue-200 dark:bg-blue-900"></div>
                  <div className="flex items-end gap-2">
                    {[40, 60, 45, 70, 55, 80, 65].map((height, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        whileInView={{ height: `${height}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + i * 0.1, duration: 0.4 }}
                        className="w-full rounded-t bg-blue-400 dark:bg-blue-600"
                      />
                    ))}
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4">
                  {[1, 2, 3].map((item) => (
                    <div
                      key={item}
                      className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800"
                    >
                      <div className="mb-2 h-3 w-12 rounded bg-gray-300 dark:bg-gray-700"></div>
                      <div className="h-6 w-16 rounded bg-gray-400 dark:bg-gray-600"></div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute right-4 top-4 rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700 shadow-lg dark:bg-green-950 dark:text-green-300"
              >
                +250% Growth
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
