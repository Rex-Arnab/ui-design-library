"use client";

import { motion } from "framer-motion";
import { Check, Zap, Shield, Users, TrendingUp, Lock, Globe, Headphones, Code, Gauge, type LucideIcon } from "lucide-react";

interface Feature {
  icon: LucideIcon;
  text: string;
}

interface IconListProps {
  className?: string;
}

/**
 * IconList - Simple icon + text list layout
 *
 * Features:
 * - Minimal design, text-focused
 * - Small icons to left of text
 * - Tight spacing, scannable layout
 * - Two-column layout on desktop
 * - Perfect for long feature lists
 * - No cards, just clean rows
 */
export function IconList({ className = "" }: IconListProps) {
  const features: Feature[] = [
    { icon: Zap, text: "Lightning-fast performance with sub-100ms response times" },
    { icon: Shield, text: "Bank-level encryption and SOC 2 Type II certification" },
    { icon: Users, text: "Unlimited team members on all plans" },
    { icon: TrendingUp, text: "Real-time analytics and custom dashboards" },
    { icon: Lock, text: "Two-factor authentication and SSO support" },
    { icon: Globe, text: "Global CDN with 99.99% uptime guarantee" },
    { icon: Headphones, text: "24/7 customer support via chat, email, and phone" },
    { icon: Code, text: "Comprehensive REST API with webhooks" },
    { icon: Check, text: "Free 14-day trial with no credit card required" },
    { icon: Gauge, text: "Advanced performance monitoring and alerts" }
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
            Everything Included
          </h2>
          <p className="text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            All the features you need to build, scale, and succeed
          </p>
        </motion.div>

        {/* Feature List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-5">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="flex items-start gap-3 group"
              >
                <div className="flex-shrink-0 w-5 h-5 mt-0.5">
                  <Icon className="w-5 h-5 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-200" />
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  {feature.text}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-16 pt-12 border-t border-gray-200 dark:border-gray-800"
        >
          <div className="text-center">
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
              And many more features being added every week
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors duration-200">
                View Full Feature List
              </button>
              <button className="px-6 py-3 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white font-semibold rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200">
                Start Free Trial
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
