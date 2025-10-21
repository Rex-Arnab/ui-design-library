"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

interface ComparisonItem {
  feature: string;
  before: boolean | string;
  after: boolean | string;
}

interface ComparisonProps {
  className?: string;
}

/**
 * Comparison - Before/after or vs. comparison
 *
 * Features:
 * - Two-column layout for side-by-side comparison
 * - "Before vs After" or "Basic vs Pro" style
 * - Checkmarks for included features
 * - X marks or dashes for missing features
 * - Highlights differences clearly
 * - Visual emphasis on improvements
 */
export function Comparison({ className = "" }: ComparisonProps) {
  const comparisons: ComparisonItem[] = [
    { feature: "Team Members", before: "5", after: "Unlimited" },
    { feature: "Storage Space", before: "10 GB", after: "Unlimited" },
    { feature: "API Access", before: false, after: true },
    { feature: "Advanced Analytics", before: false, after: true },
    { feature: "Priority Support", before: false, after: true },
    { feature: "Custom Integrations", before: false, after: true },
    { feature: "SSO & SAML", before: false, after: true },
    { feature: "99.99% SLA", before: false, after: true }
  ];

  return (
    <section className={`py-20 px-4 bg-white dark:bg-gray-900 ${className}`}>
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
            Why Upgrade to Pro?
          </h2>
          <p className="text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            See exactly what you get when you upgrade. More features, better performance, unlimited scale.
          </p>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden shadow-lg"
        >
          {/* Header Row */}
          <div className="grid grid-cols-3 gap-4 p-6 bg-gray-50 dark:bg-gray-800/50 border-b border-gray-200 dark:border-gray-700">
            <div className="text-sm font-semibold text-gray-700 dark:text-gray-300">
              Feature
            </div>
            <div className="text-center">
              <div className="inline-block px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm font-semibold rounded-lg">
                Basic Plan
              </div>
            </div>
            <div className="text-center">
              <div className="inline-block px-3 py-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold rounded-lg">
                Pro Plan
              </div>
            </div>
          </div>

          {/* Feature Rows */}
          <div className="divide-y divide-gray-200 dark:divide-gray-700">
            {comparisons.map((item, idx) => (
              <motion.div
                key={item.feature}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + (idx * 0.05) }}
                className="grid grid-cols-3 gap-4 p-6 hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors duration-200"
              >
                {/* Feature Name */}
                <div className="text-sm font-medium text-gray-900 dark:text-white">
                  {item.feature}
                </div>

                {/* Before/Basic */}
                <div className="flex items-center justify-center">
                  {typeof item.before === 'boolean' ? (
                    item.before ? (
                      <Check className="w-5 h-5 text-green-500" />
                    ) : (
                      <X className="w-5 h-5 text-gray-400 dark:text-gray-600" />
                    )
                  ) : (
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {item.before}
                    </span>
                  )}
                </div>

                {/* After/Pro */}
                <div className="flex items-center justify-center">
                  {typeof item.after === 'boolean' ? (
                    item.after ? (
                      <Check className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    ) : (
                      <X className="w-5 h-5 text-gray-400 dark:text-gray-600" />
                    )
                  ) : (
                    <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                      {item.after}
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="inline-block p-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 rounded-xl border border-blue-200 dark:border-blue-900">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
              Upgrade to Pro Today
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
              Get all premium features with a 30-day money-back guarantee
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200">
                Upgrade Now
              </button>
              <button className="px-8 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-semibold rounded-lg border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200">
                Compare All Plans
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
