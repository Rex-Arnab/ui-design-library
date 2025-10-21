"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";

interface MinimalPricingProps {
  className?: string;
}

/**
 * MinimalPricing - Ultra-clean minimal pricing layout
 *
 * Features:
 * - Ultra-clean single or two-tier layout
 * - Focus on one clear value proposition
 * - Large typography for impact
 * - Generous white space
 * - Single strong CTA
 * - Subtle animations only
 * - Perfect for simple product offerings
 */
export function MinimalPricing({ className = "" }: MinimalPricingProps) {
  const essentialFeatures = [
    "Unlimited projects",
    "10 GB storage",
    "Email support",
    "Mobile app access",
    "Basic analytics"
  ];

  const proFeatures = [
    "Everything in Essential",
    "Unlimited storage",
    "Priority support 24/7",
    "Advanced analytics",
    "API access",
    "Custom integrations",
    "Team collaboration",
    "Export in all formats"
  ];

  return (
    <section className={`py-32 px-4 bg-white dark:bg-gray-900 ${className}`}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            Simple,
            <br />
            Honest Pricing
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-light">
            Choose the plan that works for you. No hidden fees, no surprises.
          </p>
        </motion.div>

        {/* Two-Tier Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 max-w-5xl mx-auto">
          {/* Essential Plan */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="relative"
          >
            <div className="space-y-8">
              {/* Plan Name */}
              <div>
                <h3 className="text-2xl font-medium text-gray-900 dark:text-white mb-2">
                  Essential
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  For individuals and small teams
                </p>
              </div>

              {/* Price */}
              <div>
                <div className="flex items-baseline gap-2">
                  <span className="text-6xl md:text-7xl font-bold text-gray-900 dark:text-white">
                    $15
                  </span>
                  <span className="text-2xl text-gray-500 dark:text-gray-400">
                    /month
                  </span>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-500 mt-3">
                  Billed monthly, cancel anytime
                </p>
              </div>

              {/* CTA */}
              <button className="group w-full py-4 px-8 bg-gray-900 dark:bg-white hover:bg-gray-800 dark:hover:bg-gray-100 text-white dark:text-gray-900 font-medium rounded-2xl transition-all duration-300 flex items-center justify-center gap-3">
                Start Free Trial
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Features */}
              <div className="pt-8 border-t border-gray-200 dark:border-gray-800">
                <p className="text-sm font-medium text-gray-900 dark:text-white mb-6 uppercase tracking-wider">
                  What&apos;s included
                </p>
                <ul className="space-y-4">
                  {essentialFeatures.map((feature, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + (idx * 0.1), duration: 0.5 }}
                      className="flex items-start gap-3"
                    >
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center mt-0.5">
                        <Check className="w-4 h-4 text-gray-900 dark:text-white" />
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">
                        {feature}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Pro Plan - Emphasized */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative md:-mt-8 md:mb-8"
          >
            {/* Recommended Badge */}
            <div className="absolute -top-6 left-0 right-0 flex justify-center">
              <div className="px-4 py-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-sm font-medium rounded-full">
                Recommended
              </div>
            </div>

            <div className="h-full bg-gray-50 dark:bg-gray-800 rounded-3xl p-10 border-2 border-gray-200 dark:border-gray-700">
              <div className="space-y-8">
                {/* Plan Name */}
                <div>
                  <h3 className="text-2xl font-medium text-gray-900 dark:text-white mb-2">
                    Pro
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    For professionals and growing teams
                  </p>
                </div>

                {/* Price */}
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-6xl md:text-7xl font-bold text-gray-900 dark:text-white">
                      $49
                    </span>
                    <span className="text-2xl text-gray-500 dark:text-gray-400">
                      /month
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-500 mt-3">
                    or $470/year (save $118)
                  </p>
                </div>

                {/* CTA */}
                <button className="group w-full py-4 px-8 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-3">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>

                {/* Features */}
                <div className="pt-8 border-t border-gray-200 dark:border-gray-700">
                  <p className="text-sm font-medium text-gray-900 dark:text-white mb-6 uppercase tracking-wider">
                    Everything in Essential, plus
                  </p>
                  <ul className="space-y-4">
                    {proFeatures.slice(1).map((feature, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + (idx * 0.1), duration: 0.5 }}
                        className="flex items-start gap-3"
                      >
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mt-0.5">
                          <Check className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                        </div>
                        <span className="text-gray-700 dark:text-gray-300">
                          {feature}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-24 text-center space-y-8"
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-sm text-gray-600 dark:text-gray-400">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                <Check className="w-3 h-3 text-green-600 dark:text-green-400" />
              </div>
              <span>14-day free trial</span>
            </div>
            <div className="hidden md:block w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-700" />
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                <Check className="w-3 h-3 text-green-600 dark:text-green-400" />
              </div>
              <span>No credit card required</span>
            </div>
            <div className="hidden md:block w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-700" />
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                <Check className="w-3 h-3 text-green-600 dark:text-green-400" />
              </div>
              <span>Cancel anytime</span>
            </div>
          </div>

          <p className="text-gray-500 dark:text-gray-500 max-w-2xl mx-auto">
            Join over <span className="font-semibold text-gray-900 dark:text-white">25,000</span> users who trust us with their projects
          </p>
        </motion.div>

        {/* Enterprise CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-24 text-center py-16 border-t border-gray-200 dark:border-gray-800"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Need a custom plan?
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            We offer tailored solutions for enterprises and large teams with specific requirements.
          </p>
          <button className="inline-flex items-center gap-2 px-8 py-3 bg-transparent hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-900 dark:text-white font-medium rounded-2xl border-2 border-gray-900 dark:border-white transition-all duration-300 group">
            Contact Sales
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
