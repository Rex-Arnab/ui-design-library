"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

interface Feature {
  title: string;
  description: string;
}

interface MinimalProps {
  className?: string;
}

/**
 * Minimal - Ultra-clean text-only features
 *
 * Features:
 * - Maximum whitespace and breathing room
 * - Small, subtle icons (optional checkmarks)
 * - Large negative space
 * - Focus on typography
 * - No cards, no borders
 * - List or grid of features
 */
export function Minimal({ className = "" }: MinimalProps) {
  const features: Feature[] = [
    {
      title: "Fast",
      description: "Built for speed from the ground up"
    },
    {
      title: "Secure",
      description: "Your data is safe with us"
    },
    {
      title: "Simple",
      description: "No complexity, just results"
    },
    {
      title: "Scalable",
      description: "Grow without limitations"
    },
    {
      title: "Reliable",
      description: "Always there when you need it"
    },
    {
      title: "Beautiful",
      description: "Design that delights"
    }
  ];

  return (
    <section className={`py-32 px-4 bg-white dark:bg-gray-900 ${className}`}>
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-32"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
            Everything you need.
            <br />
            Nothing you don&apos;t.
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
            Simple, powerful, and built for the way you work
          </p>
        </motion.div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-16">
          {features.map((feature, idx) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + (idx * 0.1) }}
              className="group"
            >
              {/* Optional Check Icon */}
              <div className="mb-4">
                <Check className="w-6 h-6 text-gray-400 dark:text-gray-600 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300" />
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-32 text-center"
        >
          <div className="h-px w-24 bg-gray-300 dark:bg-gray-700 mx-auto mb-12"></div>
          <p className="text-sm text-gray-500 dark:text-gray-500 mb-8">
            Join thousands of teams already building with our platform
          </p>
          <button className="px-8 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors duration-200">
            Get Started
          </button>
        </motion.div>
      </div>
    </section>
  );
}
