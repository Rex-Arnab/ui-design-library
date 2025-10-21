"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Check, Zap, Rocket, Crown, Sparkles, type LucideIcon } from "lucide-react";
import { useState } from "react";

interface PricingPlan {
  name: string;
  monthlyPrice: number;
  annualPrice: number;
  description: string;
  features: string[];
  cta: string;
  popular?: boolean;
  icon: LucideIcon;
}

interface TogglePricingProps {
  className?: string;
}

/**
 * TogglePricing - Monthly/Annual toggle pricing
 *
 * Features:
 * - Interactive monthly/annual toggle switch
 * - "Save 20%" badge for annual billing
 * - Animated price changes on toggle
 * - Smooth Framer Motion transitions
 * - 3-tier card layout
 * - Clear savings display
 */
export function TogglePricing({ className = "" }: TogglePricingProps) {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'annual'>('annual');

  const plans: PricingPlan[] = [
    {
      name: "Starter",
      monthlyPrice: 29,
      annualPrice: 24,
      description: "Perfect for individuals getting started",
      icon: Zap,
      cta: "Start Free Trial",
      features: [
        "Up to 5 team members",
        "10 GB storage",
        "Basic analytics",
        "Email support",
        "Mobile app access",
        "Community forum"
      ]
    },
    {
      name: "Professional",
      monthlyPrice: 79,
      annualPrice: 65,
      description: "Best for growing teams and businesses",
      icon: Rocket,
      cta: "Start Free Trial",
      popular: true,
      features: [
        "Up to 20 team members",
        "50 GB storage",
        "Advanced analytics & reporting",
        "Priority email & chat support",
        "API access & webhooks",
        "Custom integrations",
        "Advanced security features",
        "Team collaboration tools"
      ]
    },
    {
      name: "Enterprise",
      monthlyPrice: 199,
      annualPrice: 165,
      description: "Advanced features for large organizations",
      icon: Crown,
      cta: "Contact Sales",
      features: [
        "Unlimited team members",
        "Unlimited storage",
        "Custom analytics & reporting",
        "24/7 phone & email support",
        "Full API access",
        "Custom integrations & SSO",
        "Dedicated account manager",
        "SLA guarantee",
        "Advanced compliance features"
      ]
    }
  ];

  const savingsPercentage = 17; // Approximate savings

  return (
    <section className={`py-20 px-4 bg-white dark:bg-gray-900 ${className}`}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Flexible Pricing for Every Team
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            Save up to {savingsPercentage}% with annual billing
          </p>

          {/* Billing Toggle */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="inline-flex items-center gap-4 bg-gray-100 dark:bg-gray-800 p-2 rounded-full"
          >
            <button
              onClick={() => setBillingPeriod('monthly')}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                billingPeriod === 'monthly'
                  ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-md'
                  : 'text-gray-600 dark:text-gray-400'
              }`}
              aria-label="Select monthly billing"
              aria-pressed={billingPeriod === 'monthly'}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingPeriod('annual')}
              className={`relative px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                billingPeriod === 'annual'
                  ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-md'
                  : 'text-gray-600 dark:text-gray-400'
              }`}
              aria-label="Select annual billing"
              aria-pressed={billingPeriod === 'annual'}
            >
              Annual
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-2 -right-2 px-2 py-0.5 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-bold rounded-full"
              >
                Save {savingsPercentage}%
              </motion.span>
            </button>
          </motion.div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-6">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            const currentPrice = billingPeriod === 'monthly' ? plan.monthlyPrice : plan.annualPrice;
            const annualTotal = plan.annualPrice * 12;
            const monthlySavings = plan.monthlyPrice - plan.annualPrice;

            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.02, y: -8 }}
                className={`relative bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 ${
                  plan.popular
                    ? 'ring-2 ring-blue-500 dark:ring-blue-400'
                    : 'border border-gray-200 dark:border-gray-700'
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-10">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.3, type: "spring" }}
                      className="px-4 py-1.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-bold rounded-full shadow-lg flex items-center gap-1"
                    >
                      <Sparkles className="w-4 h-4" />
                      Most Popular
                    </motion.div>
                  </div>
                )}

                <div className="p-8">
                  {/* Icon & Name */}
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-6 ${
                    plan.popular
                      ? 'bg-gradient-to-br from-blue-500 to-purple-500'
                      : 'bg-gray-100 dark:bg-gray-700'
                  }`}>
                    <Icon className={`w-7 h-7 ${plan.popular ? 'text-white' : 'text-gray-700 dark:text-gray-300'}`} />
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {plan.name}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400 mb-6 min-h-[48px]">
                    {plan.description}
                  </p>

                  {/* Animated Price */}
                  <div className="mb-6">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={billingPeriod}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="flex items-baseline gap-1 mb-2">
                          <span className="text-5xl font-bold text-gray-900 dark:text-white">
                            ${currentPrice}
                          </span>
                          <span className="text-gray-600 dark:text-gray-400">
                            /month
                          </span>
                        </div>

                        {billingPeriod === 'annual' ? (
                          <div className="space-y-1">
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              ${annualTotal} billed annually
                            </p>
                            <p className="text-sm font-semibold text-green-600 dark:text-green-400">
                              Save ${monthlySavings}/month
                            </p>
                          </div>
                        ) : (
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            Billed monthly
                          </p>
                        )}
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  {/* CTA Button */}
                  <button
                    className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-200 mb-8 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl'
                        : 'bg-gray-900 dark:bg-gray-700 hover:bg-gray-800 dark:hover:bg-gray-600 text-white'
                    }`}
                    aria-label={`${plan.cta} for ${plan.name} plan`}
                  >
                    {plan.cta}
                  </button>

                  {/* Features */}
                  <div className="space-y-4">
                    <p className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wide">
                      Everything in {plan.name}:
                    </p>
                    <ul className="space-y-3">
                      {plan.features.map((feature, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.5 + (idx * 0.05) }}
                          className="flex items-start gap-3"
                        >
                          <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-700 dark:text-gray-300">
                            {feature}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-6 text-sm text-gray-600 dark:text-gray-400">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-500" />
              <span>14-day free trial</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-500" />
              <span>No credit card required</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-500" />
              <span>Cancel anytime</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
