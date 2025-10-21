"use client";

import { motion } from "framer-motion";
import { Rocket, BarChart, Shield, Zap, ArrowRight, PlayCircle, type LucideIcon } from "lucide-react";

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
  primaryCTA: string;
  secondaryCTA: string;
}

interface CTAFocusedProps {
  className?: string;
}

/**
 * CTAFocused - Feature section with prominent CTAs
 *
 * Features:
 * - Each feature has its own CTA buttons
 * - Primary and secondary button styles
 * - Card-based layout with hover effects
 * - Action-oriented copy ("Get Started", "Try It", "Learn More")
 * - Button hover states with smooth animations
 * - Icon-driven visual hierarchy
 */
export function CTAFocused({ className = "" }: CTAFocusedProps) {
  const features: Feature[] = [
    {
      icon: Rocket,
      title: "Launch in Minutes",
      description: "Deploy your first project in under 5 minutes with our one-click setup. No complex configuration required.",
      primaryCTA: "Get Started Free",
      secondaryCTA: "Watch Demo"
    },
    {
      icon: BarChart,
      title: "Track Performance",
      description: "Real-time analytics dashboard with customizable metrics. Monitor what matters to your business.",
      primaryCTA: "Try Analytics",
      secondaryCTA: "See Examples"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level encryption and compliance. SOC 2 Type II certified with automatic security updates.",
      primaryCTA: "View Security",
      secondaryCTA: "Read Docs"
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Sub-100ms response times worldwide. Built on globally distributed infrastructure for maximum speed.",
      primaryCTA: "Test Speed",
      secondaryCTA: "Learn How"
    }
  ];

  return (
    <section className={`py-20 px-4 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 ${className}`}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
            Everything You Need to Build Great Products
          </h2>
          <p className="text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Powerful features with zero complexity. Choose what works for you.
          </p>
        </motion.div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -4 }}
                className="group p-8 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-xl hover:border-blue-200 dark:hover:border-blue-800 transition-all duration-300"
              >
                {/* Icon */}
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-200">
                  <Icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  {feature.description}
                </p>

                {/* CTAs */}
                <div className="flex flex-wrap gap-3">
                  <button className="flex items-center gap-2 px-5 py-2.5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-200 group/btn">
                    {feature.primaryCTA}
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
                  </button>
                  <button className="flex items-center gap-2 px-5 py-2.5 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white font-semibold rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200">
                    <PlayCircle className="w-4 h-4" />
                    {feature.secondaryCTA}
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-block p-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 rounded-2xl border border-blue-200 dark:border-blue-900">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
              Ready to get started?
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
              Join 10,000+ teams already building with our platform
            </p>
            <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200">
              Start Free Trial
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
