"use client";

import { motion } from "framer-motion";
import { Check, Zap, Crown, Rocket, type LucideIcon } from "lucide-react";

interface PricingFeature {
  text: string;
  included: boolean;
}

interface PricingPlan {
  name: string;
  price: number;
  period: string;
  description: string;
  features: PricingFeature[];
  cta: string;
  popular?: boolean;
  icon: LucideIcon;
  highlight?: string;
}

interface SimplePricingProps {
  className?: string;
}

/**
 * SimplePricing - Classic 3-tier pricing layout
 *
 * Features:
 * - Card-based design with hover effects
 * - "Most Popular" badge on middle tier
 * - Icon-based feature lists with checkmarks
 * - Clear CTAs with different visual weights
 * - Annual pricing display
 * - Responsive grid layout
 */
export function SimplePricing({ className = "" }: SimplePricingProps) {
  const plans: PricingPlan[] = [
    {
      name: "Starter",
      price: 29,
      period: "month",
      description: "Perfect for individuals and small projects",
      icon: Zap,
      cta: "Start Free Trial",
      features: [
        { text: "Up to 5 team members", included: true },
        { text: "10 GB storage", included: true },
        { text: "Basic analytics", included: true },
        { text: "Email support", included: true },
        { text: "API access", included: false },
        { text: "Custom integrations", included: false },
      ]
    },
    {
      name: "Professional",
      price: 79,
      period: "month",
      description: "For growing teams and businesses",
      icon: Rocket,
      cta: "Get Started",
      popular: true,
      highlight: "Most Popular",
      features: [
        { text: "Up to 20 team members", included: true },
        { text: "50 GB storage", included: true },
        { text: "Advanced analytics", included: true },
        { text: "Priority email & chat support", included: true },
        { text: "API access", included: true },
        { text: "Custom integrations", included: false },
      ]
    },
    {
      name: "Enterprise",
      price: 199,
      period: "month",
      description: "Advanced features for large organizations",
      icon: Crown,
      cta: "Contact Sales",
      features: [
        { text: "Unlimited team members", included: true },
        { text: "Unlimited storage", included: true },
        { text: "Custom analytics & reporting", included: true },
        { text: "24/7 phone & email support", included: true },
        { text: "Full API access", included: true },
        { text: "Custom integrations & SSO", included: true },
      ]
    }
  ];

  return (
    <section className={`py-20 px-4 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 ${className}`}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Choose the perfect plan for your needs. All plans include a 14-day free trial.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
            <Check className="w-4 h-4 text-green-500" />
            <span>No credit card required</span>
            <span className="mx-2">•</span>
            <Check className="w-4 h-4 text-green-500" />
            <span>Cancel anytime</span>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-6">
          {plans.map((plan, idx) => {
            const Icon = plan.icon;
            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                whileHover={{ scale: 1.03, y: -8 }}
                className={`relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 ${
                  plan.popular
                    ? 'ring-2 ring-blue-500 dark:ring-blue-400'
                    : 'border border-gray-200 dark:border-gray-700'
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold rounded-full shadow-lg"
                  >
                    {plan.highlight}
                  </motion.div>
                )}

                <div className="p-8">
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-6 ${
                    plan.popular
                      ? 'bg-gradient-to-br from-blue-500 to-purple-500'
                      : 'bg-gray-100 dark:bg-gray-700'
                  }`}>
                    <Icon className={`w-6 h-6 ${plan.popular ? 'text-white' : 'text-gray-700 dark:text-gray-300'}`} />
                  </div>

                  {/* Plan Name */}
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {plan.name}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    {plan.description}
                  </p>

                  {/* Price */}
                  <div className="mb-8">
                    <div className="flex items-baseline gap-1">
                      <span className="text-5xl font-bold text-gray-900 dark:text-white">
                        ${plan.price}
                      </span>
                      <span className="text-gray-600 dark:text-gray-400">
                        /{plan.period}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">
                      Billed annually or ${Math.round(plan.price * 1.2)}/month monthly
                    </p>
                  </div>

                  {/* CTA Button */}
                  <button
                    className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-200 mb-8 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl'
                        : 'bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-white'
                    }`}
                    aria-label={`${plan.cta} for ${plan.name} plan`}
                  >
                    {plan.cta}
                  </button>

                  {/* Features */}
                  <div className="space-y-4">
                    <p className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wide">
                      What&apos;s included:
                    </p>
                    <ul className="space-y-3">
                      {plan.features.map((feature, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.4 + (idx * 0.05) }}
                          className="flex items-start gap-3"
                        >
                          {feature.included ? (
                            <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          ) : (
                            <div className="w-5 h-5 flex-shrink-0 mt-0.5">
                              <div className="w-full h-0.5 bg-gray-300 dark:bg-gray-600 mt-2" />
                            </div>
                          )}
                          <span className={`text-sm ${
                            feature.included
                              ? 'text-gray-700 dark:text-gray-300'
                              : 'text-gray-400 dark:text-gray-600'
                          }`}>
                            {feature.text}
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

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
            Trusted by over 10,000+ companies worldwide
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-50">
            {['Company A', 'Company B', 'Company C', 'Company D', 'Company E'].map((company) => (
              <div key={company} className="text-gray-400 dark:text-gray-600 font-semibold text-lg">
                {company}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
