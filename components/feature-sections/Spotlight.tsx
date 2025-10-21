"use client";

import { motion } from "framer-motion";
import { Sparkles, Zap, Shield, Globe, type LucideIcon } from "lucide-react";

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface SpotlightProps {
  className?: string;
}

/**
 * Spotlight - One large feature + smaller supporting features
 *
 * Features:
 * - Hero feature: large card, prominent placement
 * - 3-4 smaller feature cards below/around
 * - Emphasizes main value proposition
 * - Secondary features support main feature
 * - Clear visual hierarchy
 * - Gradient accents on hero card
 */
export function Spotlight({ className = "" }: SpotlightProps) {
  const mainFeature = {
    icon: Sparkles,
    title: "AI-Powered Automation",
    description: "Transform your workflow with intelligent automation. Our advanced machine learning models analyze patterns, predict outcomes, and automate repetitive tasks so you can focus on what matters most. Save hours every week while improving accuracy and consistency.",
    stats: [
      { label: "Time Saved", value: "10+ hrs/week" },
      { label: "Accuracy", value: "99.9%" },
      { label: "Tasks Automated", value: "500K+" }
    ]
  };

  const supportingFeatures: Feature[] = [
    {
      icon: Zap,
      title: "Real-Time Processing",
      description: "Process data instantly with our high-performance infrastructure"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Your data protected with military-grade encryption"
    },
    {
      icon: Globe,
      title: "Global Scale",
      description: "Deploy worldwide with automatic scaling and redundancy"
    }
  ];

  return (
    <section className={`py-20 px-4 bg-white dark:bg-gray-900 ${className}`}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
            The Future of Productivity
          </h2>
          <p className="text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Powered by cutting-edge technology and built for scale
          </p>
        </motion.div>

        {/* Main Spotlight Feature */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative mb-12"
        >
          {/* Gradient Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl blur-2xl opacity-20"></div>

          {/* Main Card */}
          <div className="relative p-12 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 rounded-3xl border border-blue-200 dark:border-blue-900 overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>

            <div className="relative grid md:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl mb-6">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  {mainFeature.title}
                </h3>
                <p className="text-base text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                  {mainFeature.description}
                </p>
                <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200">
                  Explore AI Features
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6">
                {mainFeature.stats.map((stat, idx) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + (idx * 0.1) }}
                    className="text-center p-4 bg-white/50 dark:bg-gray-800/50 rounded-xl backdrop-blur-sm"
                  >
                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">
                      {stat.value}
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Supporting Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {supportingFeatures.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + (idx * 0.1) }}
                whileHover={{ y: -4 }}
                className="p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-200"
              >
                <div className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
