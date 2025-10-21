"use client";

import { motion } from "framer-motion";
import { Sparkles, Rocket, Zap, Globe, type LucideIcon } from "lucide-react";

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
  gradient: string;
}

interface GradientAccentProps {
  className?: string;
}

/**
 * GradientAccent - Features with gradient backgrounds/accents
 *
 * Features:
 * - Subtle gradient backgrounds for cards
 * - Gradient border accents on hover
 * - Blue-purple and purple-pink gradients
 * - Not overwhelming, tasteful application
 * - Dark mode with muted gradients
 * - Smooth color transitions
 */
export function GradientAccent({ className = "" }: GradientAccentProps) {
  const features: Feature[] = [
    {
      icon: Sparkles,
      title: "AI-Powered Insights",
      description: "Get intelligent recommendations powered by machine learning. Our AI analyzes patterns to help you make better decisions faster.",
      gradient: "from-blue-500 to-purple-500"
    },
    {
      icon: Rocket,
      title: "Instant Deployment",
      description: "Deploy to production with a single click. Our automated pipeline handles testing, building, and deployment seamlessly.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Zap,
      title: "Real-Time Updates",
      description: "See changes reflected instantly across all devices. WebSocket connections ensure everyone stays in sync.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Globe,
      title: "Global Scale",
      description: "Serve users worldwide with our edge network. Content delivered from the nearest location for maximum speed.",
      gradient: "from-purple-500 to-indigo-500"
    }
  ];

  return (
    <section className={`py-20 px-4 bg-white dark:bg-gray-900 ${className}`}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-1.5 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full mb-4">
            <span className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
              Next Generation Features
            </span>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
            Built for Modern Teams
          </h2>
          <p className="text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Cutting-edge technology that gives you a competitive advantage
          </p>
        </motion.div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative"
              >
                {/* Gradient Border Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-100 rounded-xl blur transition-opacity duration-300`}></div>

                {/* Card */}
                <div className="relative p-8 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 group-hover:border-transparent transition-colors duration-300">
                  {/* Gradient Background (Subtle) */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 dark:group-hover:opacity-10 rounded-xl transition-opacity duration-300`}></div>

                  {/* Content */}
                  <div className="relative">
                    {/* Icon with Gradient */}
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br ${feature.gradient} mb-5`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                      {feature.description}
                    </p>

                    {/* Gradient Learn More Link */}
                    <button className={`mt-5 text-sm font-semibold bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent hover:opacity-80 transition-opacity duration-200`}>
                      Learn more →
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Section with Gradient */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-16 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-xl opacity-20"></div>
          <div className="relative p-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 rounded-2xl border border-blue-200 dark:border-blue-900 text-center">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
              Experience the Difference
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 max-w-xl mx-auto">
              Join thousands of teams who have already transformed their workflow
            </p>
            <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200">
              Get Started Today
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
