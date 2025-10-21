"use client";

import { motion } from "framer-motion";
import { Rocket, Check, ArrowRight } from "lucide-react";

interface OnboardingSaaSProps {
  className?: string;
}

/**
 * OnboardingSaaS - Post-registration welcome for SaaS products
 */
export function OnboardingSaaS({ className = "" }: OnboardingSaaSProps) {
  const steps = [
    { title: "Create your workspace", desc: "Set up your team environment", done: true },
    { title: "Invite team members", desc: "Collaborate with your colleagues", done: false },
    { title: "Start your first project", desc: "Begin building amazing things", done: false }
  ];

  return (
    <div className={`min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-indigo-950 dark:to-purple-950 px-4 ${className}`}>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-2xl text-center"
      >
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-12 border border-gray-200 dark:border-gray-700">
          {/* Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full mb-6"
          >
            <Rocket className="w-12 h-12 text-white" />
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Welcome to Your Workspace!
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl text-gray-600 dark:text-gray-400 mb-12"
          >
            Let&apos;s get you set up in just a few steps
          </motion.p>

          {/* Steps */}
          <div className="space-y-4 mb-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                className={`flex items-center gap-4 p-4 rounded-xl border-2 transition-all ${
                  step.done
                    ? 'border-green-500 bg-green-50 dark:bg-green-900/20'
                    : 'border-gray-200 dark:border-gray-700 hover:border-blue-500'
                }`}
              >
                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                  step.done ? 'bg-green-500' : 'bg-gray-200 dark:bg-gray-700'
                }`}>
                  {step.done ? (
                    <Check className="w-5 h-5 text-white" />
                  ) : (
                    <span className="text-sm font-semibold text-gray-600 dark:text-gray-400">{index + 1}</span>
                  )}
                </div>
                <div className="text-left flex-1">
                  <div className="font-semibold text-gray-900 dark:text-white">{step.title}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{step.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2 mx-auto"
          >
            Get Started
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}
