"use client";

import { motion } from "framer-motion";
import { Check, X, Zap, Rocket, Crown, ChevronDown } from "lucide-react";
import { useState } from "react";

interface FeatureCategory {
  name: string;
  features: {
    name: string;
    starter: boolean | string;
    professional: boolean | string;
    enterprise: boolean | string;
  }[];
}

interface ComparisonTableProps {
  className?: string;
}

/**
 * ComparisonTable - Detailed feature comparison grid
 *
 * Features:
 * - Comprehensive feature comparison matrix
 * - Expandable feature categories
 * - Checkmarks/X marks for feature availability
 * - Responsive: cards on mobile, table on desktop
 * - Sticky header on scroll
 * - Different data types (boolean, string values)
 */
export function ComparisonTable({ className = "" }: ComparisonTableProps) {
  const [expandedCategories, setExpandedCategories] = useState<string[]>([
    "Core Features",
    "Advanced Features"
  ]);

  const plans = [
    {
      name: "Starter",
      price: 29,
      icon: Zap,
      color: "from-gray-500 to-gray-600"
    },
    {
      name: "Professional",
      price: 79,
      icon: Rocket,
      color: "from-blue-500 to-purple-500",
      popular: true
    },
    {
      name: "Enterprise",
      price: 199,
      icon: Crown,
      color: "from-purple-500 to-pink-500"
    }
  ];

  const categories: FeatureCategory[] = [
    {
      name: "Core Features",
      features: [
        { name: "Team members", starter: "Up to 5", professional: "Up to 20", enterprise: "Unlimited" },
        { name: "Storage", starter: "10 GB", professional: "50 GB", enterprise: "Unlimited" },
        { name: "Projects", starter: "10", professional: "Unlimited", enterprise: "Unlimited" },
        { name: "File uploads", starter: true, professional: true, enterprise: true },
        { name: "Email support", starter: true, professional: true, enterprise: true },
      ]
    },
    {
      name: "Advanced Features",
      features: [
        { name: "Advanced analytics", starter: false, professional: true, enterprise: true },
        { name: "Custom reporting", starter: false, professional: false, enterprise: true },
        { name: "API access", starter: false, professional: true, enterprise: true },
        { name: "Webhooks", starter: false, professional: true, enterprise: true },
        { name: "Priority support", starter: false, professional: true, enterprise: true },
      ]
    },
    {
      name: "Security & Compliance",
      features: [
        { name: "2FA authentication", starter: true, professional: true, enterprise: true },
        { name: "SSO (Single Sign-On)", starter: false, professional: false, enterprise: true },
        { name: "SAML", starter: false, professional: false, enterprise: true },
        { name: "Advanced permissions", starter: false, professional: true, enterprise: true },
        { name: "Audit logs", starter: false, professional: false, enterprise: true },
        { name: "SOC 2 compliance", starter: false, professional: false, enterprise: true },
      ]
    },
    {
      name: "Integrations",
      features: [
        { name: "Slack integration", starter: true, professional: true, enterprise: true },
        { name: "Google Workspace", starter: true, professional: true, enterprise: true },
        { name: "Custom integrations", starter: false, professional: "Limited", enterprise: "Unlimited" },
        { name: "Zapier access", starter: false, professional: true, enterprise: true },
        { name: "API rate limit", starter: "100/day", professional: "1000/day", enterprise: "Unlimited" },
      ]
    },
    {
      name: "Support",
      features: [
        { name: "Email support", starter: "Business hours", professional: "24/7", enterprise: "24/7" },
        { name: "Live chat", starter: false, professional: true, enterprise: true },
        { name: "Phone support", starter: false, professional: false, enterprise: true },
        { name: "Dedicated account manager", starter: false, professional: false, enterprise: true },
        { name: "Onboarding assistance", starter: false, professional: true, enterprise: true },
        { name: "SLA guarantee", starter: false, professional: "99.9%", enterprise: "99.99%" },
      ]
    }
  ];

  const toggleCategory = (categoryName: string) => {
    setExpandedCategories(prev =>
      prev.includes(categoryName)
        ? prev.filter(c => c !== categoryName)
        : [...prev, categoryName]
    );
  };

  const renderFeatureValue = (value: boolean | string) => {
    if (typeof value === 'boolean') {
      return value ? (
        <Check className="w-5 h-5 text-green-500 mx-auto" />
      ) : (
        <X className="w-5 h-5 text-gray-300 dark:text-gray-600 mx-auto" />
      );
    }
    return <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{value}</span>;
  };

  return (
    <section className={`py-20 px-4 bg-white dark:bg-gray-900 ${className}`}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Compare Plans & Features
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Find the perfect plan with all the features you need to succeed
          </p>
        </motion.div>

        {/* Desktop Table View */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="hidden lg:block bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700"
        >
          {/* Table Header - Sticky */}
          <div className="sticky top-0 bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 z-10">
            <div className="grid grid-cols-4 gap-6 p-6">
              <div className="col-span-1">
                <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                  Features
                </p>
              </div>
              {plans.map((plan) => {
                const Icon = plan.icon;
                return (
                  <div key={plan.name} className="text-center relative">
                    {plan.popular && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-semibold rounded-full">
                        Popular
                      </div>
                    )}
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${plan.color} mb-3`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                      {plan.name}
                    </h3>
                    <div className="text-3xl font-bold text-gray-900 dark:text-white">
                      ${plan.price}
                      <span className="text-sm text-gray-500 dark:text-gray-400 font-normal">/mo</span>
                    </div>
                    <button
                      className={`mt-4 px-6 py-2 rounded-lg font-semibold transition-all ${
                        plan.popular
                          ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg'
                          : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600'
                      }`}
                    >
                      Get Started
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Table Body - Feature Categories */}
          <div className="divide-y divide-gray-200 dark:divide-gray-700">
            {categories.map((category) => {
              const isExpanded = expandedCategories.includes(category.name);

              return (
                <div key={category.name}>
                  {/* Category Header */}
                  <button
                    onClick={() => toggleCategory(category.name)}
                    className="w-full p-6 bg-gray-50 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors flex items-center justify-between group"
                  >
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white text-left">
                      {category.name}
                    </h4>
                    <ChevronDown
                      className={`w-5 h-5 text-gray-500 transition-transform ${
                        isExpanded ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {/* Category Features */}
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {category.features.map((feature, idx) => (
                        <motion.div
                          key={feature.name}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.05 }}
                          className="grid grid-cols-4 gap-6 p-6 hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors"
                        >
                          <div className="col-span-1 flex items-center">
                            <span className="text-sm text-gray-700 dark:text-gray-300">
                              {feature.name}
                            </span>
                          </div>
                          <div className="flex items-center justify-center">
                            {renderFeatureValue(feature.starter)}
                          </div>
                          <div className="flex items-center justify-center">
                            {renderFeatureValue(feature.professional)}
                          </div>
                          <div className="flex items-center justify-center">
                            {renderFeatureValue(feature.enterprise)}
                          </div>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Mobile Card View */}
        <div className="lg:hidden space-y-6">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden"
              >
                {/* Card Header */}
                <div className="p-6 bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
                  {plan.popular && (
                    <div className="inline-block px-3 py-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-semibold rounded-full mb-3">
                      Popular
                    </div>
                  )}
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${plan.color} mb-3`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {plan.name}
                  </h3>
                  <div className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                    ${plan.price}
                    <span className="text-lg text-gray-500 dark:text-gray-400 font-normal">/month</span>
                  </div>
                  <button
                    className={`w-full py-3 rounded-lg font-semibold transition-all ${
                      plan.popular
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white'
                    }`}
                  >
                    Get Started
                  </button>
                </div>

                {/* Card Features */}
                <div className="p-6">
                  {categories.map((category) => (
                    <div key={category.name} className="mb-6 last:mb-0">
                      <h4 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wide mb-3">
                        {category.name}
                      </h4>
                      <ul className="space-y-2">
                        {category.features.map((feature) => {
                          const value = feature[plan.name.toLowerCase() as keyof typeof feature];
                          return (
                            <li key={feature.name} className="flex items-center justify-between text-sm">
                              <span className="text-gray-700 dark:text-gray-300">{feature.name}</span>
                              <span>{renderFeatureValue(value)}</span>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
