"use client";

import { motion } from "framer-motion";
import { Check, X, Star, Zap, Crown, ArrowRight, Gift } from "lucide-react";

interface Feature {
  name: string;
  free: boolean | string;
  pro: boolean | string;
}

interface FreemiumPricingProps {
  className?: string;
}

/**
 * FreemiumPricing - Free tier emphasis pricing
 *
 * Features:
 * - Free tier highlighted with larger card
 * - Clear upgrade benefits visualization
 * - "Start Free" primary CTA
 * - Feature comparison: Free vs Paid
 * - Trust indicators (no credit card)
 * - Upgrade path visualization with arrows
 */
export function FreemiumPricing({ className = "" }: FreemiumPricingProps) {
  const features: Feature[] = [
    { name: "Projects", free: "Up to 3", pro: "Unlimited" },
    { name: "Team members", free: "1", pro: "Unlimited" },
    { name: "Storage", free: "500 MB", pro: "100 GB" },
    { name: "File uploads", free: true, pro: true },
    { name: "Basic templates", free: true, pro: true },
    { name: "Premium templates", free: false, pro: true },
    { name: "Advanced analytics", free: false, pro: true },
    { name: "Custom branding", free: false, pro: true },
    { name: "Priority support", free: false, pro: true },
    { name: "API access", free: false, pro: true },
    { name: "Export options", free: "PDF only", pro: "All formats" },
    { name: "Collaboration tools", free: false, pro: true },
  ];

  const renderValue = (value: boolean | string) => {
    if (typeof value === 'boolean') {
      return value ? (
        <Check className="w-5 h-5 text-green-500" />
      ) : (
        <X className="w-5 h-5 text-gray-300 dark:text-gray-600" />
      );
    }
    return <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{value}</span>;
  };

  return (
    <section className={`py-20 px-4 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 ${className}`}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full mb-4">
            <Gift className="w-4 h-4" />
            <span className="text-sm font-semibold">Start for Free Forever</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Try Before You Commit
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Start with our generous free plan. Upgrade when you&apos;re ready to unlock more power.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Free Plan - Emphasized */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl shadow-xl p-8 border-2 border-blue-200 dark:border-blue-700">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full mb-6">
                <Star className="w-4 h-4" />
                <span className="text-sm font-bold">Perfect to Start</span>
              </div>

              {/* Icon */}
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                Free
              </h3>

              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Everything you need to get started and explore our platform
              </p>

              {/* Price */}
              <div className="mb-8">
                <div className="flex items-baseline gap-2">
                  <span className="text-6xl font-bold text-gray-900 dark:text-white">
                    $0
                  </span>
                  <span className="text-xl text-gray-600 dark:text-gray-400">
                    forever
                  </span>
                </div>
              </div>

              {/* CTA */}
              <button className="w-full py-4 px-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 mb-6 flex items-center justify-center gap-2 group">
                Start Free Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Trust Indicators */}
              <div className="space-y-2 mb-8">
                <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                  <Check className="w-4 h-4 text-green-500" />
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                  <Check className="w-4 h-4 text-green-500" />
                  <span>Free forever, no trial period</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                  <Check className="w-4 h-4 text-green-500" />
                  <span>Upgrade or downgrade anytime</span>
                </div>
              </div>

              {/* Key Features */}
              <div className="space-y-3 pt-6 border-t border-gray-200 dark:border-gray-700">
                <p className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wide mb-4">
                  What&apos;s Included:
                </p>
                {features.filter(f => f.free !== false).slice(0, 6).map((feature, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + (idx * 0.05) }}
                    className="flex items-center justify-between"
                  >
                    <span className="text-sm text-gray-700 dark:text-gray-300">{feature.name}</span>
                    {renderValue(feature.free)}
                  </motion.div>
                ))}
              </div>

              {/* Social Proof */}
              <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                  Join <span className="font-bold text-gray-900 dark:text-white">50,000+</span> users already using the free plan
                </p>
              </div>
            </div>
          </motion.div>

          {/* Pro Plan */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-700 h-full flex flex-col">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full mb-6 self-start">
                <Crown className="w-4 h-4" />
                <span className="text-sm font-bold">Unlock Everything</span>
              </div>

              {/* Icon */}
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 mb-6">
                <Crown className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                Pro
              </h3>

              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Unlock unlimited potential with all premium features
              </p>

              {/* Price */}
              <div className="mb-8">
                <div className="flex items-baseline gap-2">
                  <span className="text-6xl font-bold text-gray-900 dark:text-white">
                    $29
                  </span>
                  <span className="text-xl text-gray-600 dark:text-gray-400">
                    /month
                  </span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  or $290/year (save 17%)
                </p>
              </div>

              {/* CTA */}
              <button className="w-full py-4 px-6 bg-gray-900 dark:bg-gray-700 hover:bg-gray-800 dark:hover:bg-gray-600 text-white font-bold rounded-xl transition-all duration-200 mb-6 flex items-center justify-center gap-2">
                Start 14-Day Free Trial
              </button>

              {/* Upgrade Benefits */}
              <div className="mb-8 p-4 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl">
                <p className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
                  Upgrade to unlock:
                </p>
                <ul className="space-y-2">
                  {[
                    "Unlimited projects & team members",
                    "100 GB storage (200x more)",
                    "All premium templates",
                    "Advanced analytics & reporting",
                    "Priority support & onboarding"
                  ].map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                      <Check className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              {/* All Features */}
              <div className="space-y-3 pt-6 border-t border-gray-200 dark:border-gray-700 flex-grow">
                <p className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wide mb-4">
                  Everything in Free, Plus:
                </p>
                {features.filter(f => f.pro !== f.free).map((feature, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + (idx * 0.05) }}
                    className="flex items-center justify-between"
                  >
                    <span className="text-sm text-gray-700 dark:text-gray-300">{feature.name}</span>
                    {renderValue(feature.pro)}
                  </motion.div>
                ))}
              </div>

              {/* Money Back Guarantee */}
              <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                  <span className="font-bold text-gray-900 dark:text-white">30-day money-back guarantee</span>
                  <br />
                  No questions asked
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Upgrade Path Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-xl p-8 text-white text-center"
        >
          <h3 className="text-2xl font-bold mb-4">
            Start Free, Upgrade When You&apos;re Ready
          </h3>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            We believe in earning your business. That&apos;s why we offer a generous free tier with no time limits.
            Upgrade to Pro when you need more power.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-3">
                <span className="text-2xl font-bold">1</span>
              </div>
              <p className="font-semibold">Sign up free</p>
              <p className="text-sm text-blue-100">No credit card needed</p>
            </div>

            <ArrowRight className="w-8 h-8 hidden md:block" />
            <div className="md:hidden">↓</div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-3">
                <span className="text-2xl font-bold">2</span>
              </div>
              <p className="font-semibold">Explore & create</p>
              <p className="text-sm text-blue-100">Build real projects</p>
            </div>

            <ArrowRight className="w-8 h-8 hidden md:block" />
            <div className="md:hidden">↓</div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-3">
                <span className="text-2xl font-bold">3</span>
              </div>
              <p className="font-semibold">Upgrade to Pro</p>
              <p className="text-sm text-blue-100">When you need more</p>
            </div>
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Frequently Asked Questions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left max-w-4xl mx-auto">
            {[
              {
                q: "Is the free plan really free forever?",
                a: "Yes! Our free plan has no time limits and requires no credit card."
              },
              {
                q: "Can I upgrade or downgrade anytime?",
                a: "Absolutely. Change your plan whenever you want with no penalties."
              },
              {
                q: "What happens to my data if I downgrade?",
                a: "Your data is always safe. Some features may be limited but data is preserved."
              },
              {
                q: "Do you offer refunds?",
                a: "Yes, we offer a 30-day money-back guarantee on all paid plans."
              }
            ].map((faq, idx) => (
              <div key={idx} className="p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">{faq.q}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">{faq.a}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
