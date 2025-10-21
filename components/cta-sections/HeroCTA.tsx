'use client';

import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Star } from 'lucide-react';

interface HeroCTAProps {
  className?: string;
}

export default function HeroCTA({ className = '' }: HeroCTAProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, ease: 'easeOut' },
    },
  };

  const customers = [
    { name: 'TechCorp', logo: 'TC' },
    { name: 'InnovateLabs', logo: 'IL' },
    { name: 'DataFlow', logo: 'DF' },
    { name: 'CloudSync', logo: 'CS' },
    { name: 'NextGen', logo: 'NG' },
  ];

  return (
    <section
      className={`relative overflow-hidden bg-white dark:bg-gray-950 ${className}`}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      {/* Content Container */}
      <div className="relative mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8 lg:py-24">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="mx-auto max-w-4xl text-center"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="mb-6 inline-flex">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-sm font-medium text-blue-700 dark:border-blue-900 dark:bg-blue-950 dark:text-blue-300">
              <Star className="h-4 w-4 fill-current" />
              <span>Rated 4.9/5 by 10,000+ users</span>
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            variants={itemVariants}
            className="mb-6 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl"
          >
            Transform Your Workflow in Minutes, Not Months
          </motion.h1>

          {/* Supporting Text */}
          <motion.p
            variants={itemVariants}
            className="mb-8 text-lg text-gray-600 dark:text-gray-400 sm:text-xl"
          >
            Join thousands of teams who have streamlined their processes and
            boosted productivity by 10x. No credit card required. Cancel anytime.
          </motion.p>

          {/* Key Benefits */}
          <motion.div
            variants={itemVariants}
            className="mb-10 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-700 dark:text-gray-300"
          >
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-500" />
              <span>14-day free trial</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-500" />
              <span>No credit card needed</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-500" />
              <span>Setup in under 5 minutes</span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
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
              <span>Watch Demo</span>
            </motion.button>
          </motion.div>

          {/* Trust Indicators - Customer Logos */}
          <motion.div
            variants={itemVariants}
            className="mt-16 border-t border-gray-200 pt-12 dark:border-gray-800"
          >
            <p className="mb-8 text-sm font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
              Trusted by industry leaders
            </p>

            <motion.div
              variants={containerVariants}
              className="flex flex-wrap items-center justify-center gap-8 sm:gap-12"
            >
              {customers.map((customer) => (
                <motion.div
                  key={customer.name}
                  variants={logoVariants}
                  whileHover={{ scale: 1.1 }}
                  className="flex h-12 w-24 items-center justify-center rounded-lg border border-gray-200 bg-gray-50 px-4 py-2 font-bold text-gray-600 transition-all hover:border-gray-300 hover:bg-white dark:border-gray-800 dark:bg-gray-900 dark:text-gray-400 dark:hover:border-gray-700 dark:hover:bg-gray-800"
                >
                  {customer.logo}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
