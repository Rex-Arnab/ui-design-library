"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Check, X, ChevronDown, Info, Zap, Rocket, Crown, Star, Shield, Headphones, Code, Smartphone, type LucideIcon } from "lucide-react";
import { useState } from "react";

interface Feature {
  name: string;
  starter: boolean | string;
  professional: boolean | string;
  business: boolean | string;
  enterprise: boolean | string;
  tooltip?: string;
}

interface FeatureCategory {
  name: string;
  icon: LucideIcon;
  features: Feature[];
}

interface FeatureRichPricingProps {
  className?: string;
}

/**
 * FeatureRichPricing - Expandable feature-rich pricing
 *
 * Features:
 * - Expandable/collapsible feature sections
 * - Categorized features (Security, Integrations, Support, etc.)
 * - "See all features" accordion functionality
 * - Detailed tooltips for features
 * - 4-tier layout option
 * - Per-feature availability matrix
 */
export function FeatureRichPricing({ className = "" }: FeatureRichPricingProps) {
  const [expandedCategories, setExpandedCategories] = useState<string[]>(["Core Features"]);
  const [hoveredFeature, setHoveredFeature] = useState<string | null>(null);

  const plans = [
    {
      name: "Starter",
      price: 29,
      icon: Zap,
      color: "from-gray-500 to-gray-600",
      description: "For individuals"
    },
    {
      name: "Professional",
      price: 79,
      icon: Rocket,
      color: "from-blue-500 to-purple-500",
      popular: true,
      description: "For small teams"
    },
    {
      name: "Business",
      price: 149,
      icon: Star,
      color: "from-purple-500 to-pink-500",
      description: "For growing companies"
    },
    {
      name: "Enterprise",
      price: "Custom",
      icon: Crown,
      color: "from-orange-500 to-red-500",
      description: "For large organizations"
    }
  ];

  const categories: FeatureCategory[] = [
    {
      name: "Core Features",
      icon: Zap,
      features: [
        { name: "Projects", starter: "5", professional: "25", business: "Unlimited", enterprise: "Unlimited" },
        { name: "Team members", starter: "3", professional: "10", business: "50", enterprise: "Unlimited" },
        { name: "Storage", starter: "5 GB", professional: "50 GB", business: "500 GB", enterprise: "Unlimited" },
        { name: "File uploads", starter: true, professional: true, business: true, enterprise: true },
        { name: "Version history", starter: "7 days", professional: "30 days", business: "1 year", enterprise: "Unlimited", tooltip: "Access to previous versions of your files" },
        { name: "Export options", starter: "PDF", professional: "PDF, CSV", business: "All formats", enterprise: "All formats" }
      ]
    },
    {
      name: "Collaboration",
      icon: Smartphone,
      features: [
        { name: "Real-time collaboration", starter: false, professional: true, business: true, enterprise: true },
        { name: "Comments & mentions", starter: false, professional: true, business: true, enterprise: true },
        { name: "Guest access", starter: false, professional: "Limited", business: "Unlimited", enterprise: "Unlimited" },
        { name: "Shared workspaces", starter: false, professional: "3", business: "Unlimited", enterprise: "Unlimited" },
        { name: "Activity tracking", starter: false, professional: true, business: true, enterprise: true },
        { name: "Custom permissions", starter: false, professional: false, business: true, enterprise: true }
      ]
    },
    {
      name: "Analytics & Reporting",
      icon: Code,
      features: [
        { name: "Basic analytics", starter: true, professional: true, business: true, enterprise: true },
        { name: "Advanced analytics", starter: false, professional: true, business: true, enterprise: true },
        { name: "Custom reports", starter: false, professional: false, business: true, enterprise: true },
        { name: "Scheduled reports", starter: false, professional: false, business: true, enterprise: true },
        { name: "Data export", starter: "Manual", professional: "Manual", business: "Automated", enterprise: "Automated" },
        { name: "API analytics", starter: false, professional: false, business: true, enterprise: true, tooltip: "Track API usage and performance" }
      ]
    },
    {
      name: "Security & Compliance",
      icon: Shield,
      features: [
        { name: "SSL encryption", starter: true, professional: true, business: true, enterprise: true },
        { name: "2FA authentication", starter: true, professional: true, business: true, enterprise: true },
        { name: "SSO (SAML)", starter: false, professional: false, business: true, enterprise: true },
        { name: "Advanced permissions", starter: false, professional: false, business: true, enterprise: true },
        { name: "Audit logs", starter: false, professional: false, business: "90 days", enterprise: "Unlimited" },
        { name: "SOC 2 compliance", starter: false, professional: false, business: false, enterprise: true },
        { name: "HIPAA compliance", starter: false, professional: false, business: false, enterprise: true },
        { name: "Custom security policies", starter: false, professional: false, business: false, enterprise: true }
      ]
    },
    {
      name: "Integrations & API",
      icon: Code,
      features: [
        { name: "Pre-built integrations", starter: "5", professional: "25", business: "Unlimited", enterprise: "Unlimited" },
        { name: "API access", starter: false, professional: "Limited", business: "Full", enterprise: "Full" },
        { name: "API rate limit", starter: "N/A", professional: "1000/day", business: "10000/day", enterprise: "Custom" },
        { name: "Webhooks", starter: false, professional: "5", business: "50", enterprise: "Unlimited" },
        { name: "Custom integrations", starter: false, professional: false, business: true, enterprise: true },
        { name: "Zapier access", starter: false, professional: true, business: true, enterprise: true }
      ]
    },
    {
      name: "Support",
      icon: Headphones,
      features: [
        { name: "Email support", starter: "Business hours", professional: "24/5", business: "24/7", enterprise: "24/7" },
        { name: "Live chat", starter: false, professional: true, business: true, enterprise: true },
        { name: "Phone support", starter: false, professional: false, business: true, enterprise: true },
        { name: "Response time SLA", starter: "48h", professional: "24h", business: "4h", enterprise: "1h" },
        { name: "Dedicated account manager", starter: false, professional: false, business: false, enterprise: true },
        { name: "Onboarding assistance", starter: false, professional: false, business: true, enterprise: true },
        { name: "Custom training", starter: false, professional: false, business: false, enterprise: true }
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

  const renderValue = (value: boolean | string) => {
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
            Complete Feature Comparison
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Explore every feature across all plans. Find the perfect fit for your needs.
          </p>
        </motion.div>

        {/* Plan Headers - Desktop */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="hidden lg:block sticky top-0 bg-white dark:bg-gray-900 z-20 pb-6"
        >
          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="grid grid-cols-5 gap-6">
              <div className="col-span-1 flex items-end pb-4">
                <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                  Features by Category
                </p>
              </div>

              {plans.map((plan) => {
                const Icon = plan.icon;
                return (
                  <div key={plan.name} className="text-center">
                    {plan.popular && (
                      <div className="mb-2">
                        <span className="inline-block px-3 py-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-bold rounded-full">
                          Most Popular
                        </span>
                      </div>
                    )}
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${plan.color} mb-3`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                      {plan.name}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                      {plan.description}
                    </p>
                    <div className="text-3xl font-bold text-gray-900 dark:text-white">
                      {typeof plan.price === 'number' ? `$${plan.price}` : plan.price}
                      {typeof plan.price === 'number' && (
                        <span className="text-sm text-gray-500 dark:text-gray-400 font-normal">/mo</span>
                      )}
                    </div>
                    <button
                      className={`mt-4 w-full py-2 px-4 rounded-lg font-semibold transition-all ${
                        plan.popular
                          ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg'
                          : 'bg-gray-900 dark:bg-gray-700 text-white hover:bg-gray-800 dark:hover:bg-gray-600'
                      }`}
                    >
                      {typeof plan.price === 'number' ? 'Get Started' : 'Contact Sales'}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Feature Categories - Desktop */}
        <div className="hidden lg:block space-y-4 mt-8">
          {categories.map((category, catIndex) => {
            const isExpanded = expandedCategories.includes(category.name);
            const CategoryIcon = category.icon;

            return (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + (catIndex * 0.1) }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden"
              >
                {/* Category Header */}
                <button
                  onClick={() => toggleCategory(category.name)}
                  className="w-full p-6 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                      <CategoryIcon className="w-5 h-5 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                      {category.name}
                    </h4>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      ({category.features.length} features)
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-500 transition-transform ${
                      isExpanded ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {/* Category Features */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-gray-200 dark:border-gray-700">
                        {category.features.map((feature) => (
                          <div
                            key={feature.name}
                            className="grid grid-cols-5 gap-6 p-6 hover:bg-gray-50 dark:hover:bg-gray-700/30 transition-colors border-b border-gray-100 dark:border-gray-700 last:border-0"
                            onMouseEnter={() => setHoveredFeature(feature.name)}
                            onMouseLeave={() => setHoveredFeature(null)}
                          >
                            <div className="col-span-1 flex items-center gap-2">
                              <span className="text-sm text-gray-700 dark:text-gray-300">
                                {feature.name}
                              </span>
                              {feature.tooltip && (
                                <div className="relative group">
                                  <Info className="w-4 h-4 text-gray-400 cursor-help" />
                                  {hoveredFeature === feature.name && (
                                    <div className="absolute left-0 top-6 w-64 p-3 bg-gray-900 text-white text-xs rounded-lg shadow-lg z-30">
                                      {feature.tooltip}
                                    </div>
                                  )}
                                </div>
                              )}
                            </div>
                            <div className="flex items-center justify-center">
                              {renderValue(feature.starter)}
                            </div>
                            <div className="flex items-center justify-center">
                              {renderValue(feature.professional)}
                            </div>
                            <div className="flex items-center justify-center">
                              {renderValue(feature.business)}
                            </div>
                            <div className="flex items-center justify-center">
                              {renderValue(feature.enterprise)}
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile View - Cards */}
        <div className="lg:hidden space-y-6">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden"
              >
                {/* Plan Header */}
                <div className="p-6 bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
                  {plan.popular && (
                    <div className="mb-3">
                      <span className="inline-block px-3 py-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-bold rounded-full">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${plan.color} mb-4`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                    {plan.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {plan.description}
                  </p>
                  <div className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                    {typeof plan.price === 'number' ? `$${plan.price}` : plan.price}
                    {typeof plan.price === 'number' && (
                      <span className="text-lg text-gray-500 dark:text-gray-400 font-normal">/month</span>
                    )}
                  </div>
                  <button
                    className={`w-full py-3 rounded-xl font-semibold transition-all ${
                      plan.popular
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                        : 'bg-gray-900 dark:bg-gray-700 text-white'
                    }`}
                  >
                    {typeof plan.price === 'number' ? 'Get Started' : 'Contact Sales'}
                  </button>
                </div>

                {/* Plan Features by Category */}
                <div className="p-6">
                  {categories.map((category) => {
                    const CategoryIcon = category.icon;
                    return (
                      <div key={category.name} className="mb-6 last:mb-0">
                        <div className="flex items-center gap-2 mb-3">
                          <CategoryIcon className="w-5 h-5 text-blue-600" />
                          <h4 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wide">
                            {category.name}
                          </h4>
                        </div>
                        <ul className="space-y-2">
                          {category.features.map((feature) => {
                            const value = feature[plan.name.toLowerCase() as keyof typeof feature];
                            return (
                              <li key={feature.name} className="flex items-center justify-between text-sm">
                                <span className="text-gray-700 dark:text-gray-300">{feature.name}</span>
                                <span>{renderValue(value as string | boolean)}</span>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Still have questions about which plan is right for you?
          </p>
          <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all">
            Talk to Sales
          </button>
        </motion.div>
      </div>
    </section>
  );
}
