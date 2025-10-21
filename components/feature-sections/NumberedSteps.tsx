"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface Step {
  number: string;
  title: string;
  description: string;
}

interface NumberedStepsProps {
  className?: string;
  layout?: "horizontal" | "vertical";
}

/**
 * NumberedSteps - Features as numbered process steps
 *
 * Features:
 * - Large numbers (01, 02, 03...)
 * - Step title and description
 * - Arrow connectors between steps
 * - Horizontal or vertical layout options
 * - "How it works" style presentation
 * - Clear process flow visualization
 */
export function NumberedSteps({ className = "", layout = "horizontal" }: NumberedStepsProps) {
  const steps: Step[] = [
    {
      number: "01",
      title: "Create Account",
      description: "Sign up in seconds with email or social login. No credit card required for free trial."
    },
    {
      number: "02",
      title: "Configure Setup",
      description: "Customize your workspace with our guided setup wizard. Import existing data if needed."
    },
    {
      number: "03",
      title: "Invite Team",
      description: "Add team members and assign roles. Collaborate in real-time on shared projects."
    },
    {
      number: "04",
      title: "Start Building",
      description: "Launch your first project using templates or build from scratch. Deploy instantly."
    }
  ];

  if (layout === "vertical") {
    return (
      <section className={`py-20 px-4 bg-white dark:bg-gray-900 ${className}`}>
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
              Get Started in 4 Easy Steps
            </h2>
            <p className="text-base text-gray-600 dark:text-gray-400">
              From zero to production in minutes
            </p>
          </motion.div>

          {/* Vertical Steps */}
          <div className="space-y-8">
            {steps.map((step, idx) => (
              <div key={step.number}>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="flex gap-6"
                >
                  {/* Number */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                      <span className="text-2xl font-bold text-white">{step.number}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>

                {/* Arrow */}
                {idx < steps.length - 1 && (
                  <div className="ml-8 my-4">
                    <ArrowRight className="w-5 h-5 text-gray-400 dark:text-gray-600 rotate-90" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

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
            Get Started in 4 Easy Steps
          </h2>
          <p className="text-base text-gray-600 dark:text-gray-400">
            From zero to production in minutes
          </p>
        </motion.div>

        {/* Horizontal Steps */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="relative"
            >
              {/* Arrow Connector (Desktop) */}
              {idx < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-full w-8 z-0">
                  <ArrowRight className="w-6 h-6 text-gray-300 dark:text-gray-700 -ml-3" />
                </div>
              )}

              {/* Step Card */}
              <div className="relative z-10">
                {/* Number */}
                <div className="mb-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl shadow-lg">
                    <span className="text-2xl font-bold text-white">{step.number}</span>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200">
            Get Started Now
          </button>
        </motion.div>
      </div>
    </section>
  );
}
