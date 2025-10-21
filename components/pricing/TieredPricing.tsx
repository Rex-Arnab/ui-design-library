"use client";

import { motion } from "framer-motion";
import { Zap, Users, Database, TrendingUp, Check } from "lucide-react";
import { useState } from "react";

interface UsageTier {
  name: string;
  min: number;
  max: number;
  pricePerUnit: number;
  features: string[];
}

interface TieredPricingProps {
  className?: string;
}

/**
 * TieredPricing - Usage-based pricing with slider
 *
 * Features:
 * - Usage slider for estimation
 * - Progressive tier unlocks visualization
 * - Real-time price calculation
 * - Visual meter/gauge components
 * - "Pay as you grow" messaging
 * - Multiple usage metrics (users, storage, API calls)
 */
export function TieredPricing({ className = "" }: TieredPricingProps) {
  const [userCount, setUserCount] = useState(10);
  const [apiCalls, setApiCalls] = useState(10000);

  const userTiers: UsageTier[] = [
    {
      name: "Starter",
      min: 1,
      max: 10,
      pricePerUnit: 15,
      features: ["Basic features", "Email support"]
    },
    {
      name: "Growth",
      min: 11,
      max: 50,
      pricePerUnit: 12,
      features: ["Advanced features", "Priority support", "API access"]
    },
    {
      name: "Scale",
      min: 51,
      max: 200,
      pricePerUnit: 10,
      features: ["All features", "24/7 support", "Custom integrations"]
    },
    {
      name: "Enterprise",
      min: 201,
      max: 1000,
      pricePerUnit: 8,
      features: ["Enterprise features", "Dedicated support", "SLA guarantee"]
    }
  ];

  const apiTiers = [
    { min: 0, max: 10000, price: 0, name: "Free" },
    { min: 10001, max: 100000, price: 29, name: "Basic" },
    { min: 100001, max: 500000, price: 99, name: "Pro" },
    { min: 500001, max: 1000000, price: 249, name: "Business" }
  ];

  const calculateUserPrice = () => {
    const tier = userTiers.find(t => userCount >= t.min && userCount <= t.max);
    return tier ? userCount * tier.pricePerUnit : 0;
  };

  const calculateApiPrice = () => {
    const tier = apiTiers.find(t => apiCalls >= t.min && apiCalls <= t.max);
    return tier ? tier.price : 0;
  };

  const getCurrentUserTier = () => {
    return userTiers.find(t => userCount >= t.min && userCount <= t.max);
  };

  const getCurrentApiTier = () => {
    return apiTiers.find(t => apiCalls >= t.min && apiCalls <= t.max);
  };

  const totalPrice = calculateUserPrice() + calculateApiPrice();

  const getTierProgress = (tierIndex: number) => {
    const tier = userTiers[tierIndex];
    if (userCount < tier.min) return 0;
    if (userCount > tier.max) return 100;
    const range = tier.max - tier.min;
    const progress = ((userCount - tier.min) / range) * 100;
    return progress;
  };

  return (
    <section className={`py-20 px-4 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 ${className}`}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Pay as You Grow
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Flexible usage-based pricing that scales with your business. Only pay for what you use.
          </p>
        </motion.div>

        {/* Price Calculator Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-12 border border-gray-200 dark:border-gray-700"
        >
          {/* Total Price Display */}
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wide mb-2">
              Your Estimated Monthly Cost
            </p>
            <motion.div
              key={totalPrice}
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              className="text-6xl font-bold text-gray-900 dark:text-white mb-2"
            >
              ${totalPrice}
              <span className="text-2xl text-gray-500 dark:text-gray-400">/month</span>
            </motion.div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Based on your current usage selection
            </p>
          </div>

          {/* User Count Slider */}
          <div className="mb-12">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <label className="font-semibold text-gray-900 dark:text-white">
                  Team Members
                </label>
              </div>
              <div className="text-right">
                <span className="text-3xl font-bold text-gray-900 dark:text-white">
                  {userCount}
                </span>
                <span className="text-sm text-gray-600 dark:text-gray-400 ml-2">
                  users
                </span>
              </div>
            </div>

            {/* Slider */}
            <input
              type="range"
              min="1"
              max="1000"
              value={userCount}
              onChange={(e) => setUserCount(parseInt(e.target.value))}
              className="w-full h-3 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer slider-thumb"
              style={{
                background: `linear-gradient(to right, rgb(59, 130, 246) 0%, rgb(59, 130, 246) ${(userCount / 1000) * 100}%, rgb(229, 231, 235) ${(userCount / 1000) * 100}%, rgb(229, 231, 235) 100%)`
              }}
            />

            <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-2">
              <span>1</span>
              <span>1000+</span>
            </div>

            {/* Current Tier Info */}
            {getCurrentUserTier() && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-blue-900 dark:text-blue-100">
                    {getCurrentUserTier()!.name} Tier
                  </span>
                  <span className="text-sm text-blue-700 dark:text-blue-300">
                    ${getCurrentUserTier()!.pricePerUnit}/user
                  </span>
                </div>
                <ul className="space-y-1">
                  {getCurrentUserTier()!.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-blue-800 dark:text-blue-200">
                      <Check className="w-4 h-4" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </div>

          {/* API Calls Slider */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                <label className="font-semibold text-gray-900 dark:text-white">
                  Monthly API Calls
                </label>
              </div>
              <div className="text-right">
                <span className="text-3xl font-bold text-gray-900 dark:text-white">
                  {apiCalls.toLocaleString()}
                </span>
              </div>
            </div>

            {/* Slider */}
            <input
              type="range"
              min="0"
              max="1000000"
              step="1000"
              value={apiCalls}
              onChange={(e) => setApiCalls(parseInt(e.target.value))}
              className="w-full h-3 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer"
              style={{
                background: `linear-gradient(to right, rgb(147, 51, 234) 0%, rgb(147, 51, 234) ${(apiCalls / 1000000) * 100}%, rgb(229, 231, 235) ${(apiCalls / 1000000) * 100}%, rgb(229, 231, 235) 100%)`
              }}
            />

            <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-2">
              <span>0</span>
              <span>1M+</span>
            </div>

            {/* Current API Tier Info */}
            {getCurrentApiTier() && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-xl"
              >
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-purple-900 dark:text-purple-100">
                    {getCurrentApiTier()!.name} API Tier
                  </span>
                  <span className="text-sm text-purple-700 dark:text-purple-300">
                    {getCurrentApiTier()!.price === 0 ? 'Free' : `$${getCurrentApiTier()!.price}/month`}
                  </span>
                </div>
              </motion.div>
            )}
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="flex-1 py-3 px-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all">
              Get Started
            </button>
            <button className="flex-1 py-3 px-6 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-900 dark:text-white font-semibold rounded-xl transition-all">
              Contact Sales
            </button>
          </div>
        </motion.div>

        {/* Tier Progression Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-700"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Pricing Tiers by Team Size
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {userTiers.map((tier, index) => {
              const isActive = userCount >= tier.min && userCount <= tier.max;
              const progress = getTierProgress(index);

              return (
                <motion.div
                  key={tier.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + (index * 0.1) }}
                  className={`p-6 rounded-xl border-2 transition-all ${
                    isActive
                      ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                      : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800'
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <h4 className={`font-bold ${isActive ? 'text-blue-900 dark:text-blue-100' : 'text-gray-900 dark:text-white'}`}>
                      {tier.name}
                    </h4>
                    {isActive && (
                      <TrendingUp className="w-5 h-5 text-blue-600" />
                    )}
                  </div>

                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    {tier.min}-{tier.max} users
                  </p>

                  <div className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    ${tier.pricePerUnit}
                    <span className="text-sm text-gray-500 dark:text-gray-400">/user</span>
                  </div>

                  {/* Progress Bar */}
                  {isActive && (
                    <div className="mb-4">
                      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${progress}%` }}
                          transition={{ duration: 0.5 }}
                          className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                        />
                      </div>
                    </div>
                  )}

                  <ul className="space-y-2">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-gray-700 dark:text-gray-300">
                        <Check className="w-3 h-3 text-green-500 flex-shrink-0 mt-0.5" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {[
            { icon: TrendingUp, title: "Scale Automatically", text: "Your pricing grows with your usage" },
            { icon: Database, title: "No Surprises", text: "Transparent pricing with real-time estimates" },
            { icon: Zap, title: "Start Free", text: "Begin with our free tier and upgrade anytime" }
          ].map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <div key={idx} className="text-center p-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 mb-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                  {benefit.title}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {benefit.text}
                </p>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
