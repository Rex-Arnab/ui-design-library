"use client";

import { motion } from "framer-motion";
import { CheckCircle, Circle, type LucideIcon } from "lucide-react";

interface TimelineStep {
  number: string;
  title: string;
  description: string;
  completed?: boolean;
}

interface TimelineProps {
  className?: string;
}

/**
 * Timeline - Features as timeline/journey
 *
 * Features:
 * - Vertical timeline with connector line
 * - Circle markers for each step
 * - Feature content to right of marker
 * - Shows progression/process flow
 * - Step numbers with visual hierarchy
 * - Animated entrance on scroll
 */
export function Timeline({ className = "" }: TimelineProps) {
  const steps: TimelineStep[] = [
    {
      number: "01",
      title: "Sign Up & Configure",
      description: "Create your account in seconds. No credit card required for the free trial. Set up your workspace with our guided onboarding process.",
      completed: true
    },
    {
      number: "02",
      title: "Connect Your Tools",
      description: "Integrate with your existing workflow. Connect Slack, GitHub, Google Drive, and 1,000+ other apps with one-click authentication.",
      completed: true
    },
    {
      number: "03",
      title: "Invite Your Team",
      description: "Add team members and set permissions. Create shared workspaces with role-based access control. Everyone stays in sync automatically.",
      completed: true
    },
    {
      number: "04",
      title: "Build & Deploy",
      description: "Start building your first project. Use our templates or create from scratch. Deploy to production with a single click when ready.",
      completed: false
    },
    {
      number: "05",
      title: "Monitor & Scale",
      description: "Track performance with real-time analytics. Scale automatically as your user base grows. We handle the infrastructure complexity.",
      completed: false
    }
  ];

  return (
    <section className={`py-20 px-4 bg-gray-50 dark:bg-gray-900 ${className}`}>
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
            How It Works
          </h2>
          <p className="text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Get up and running in 5 simple steps. From signup to production in minutes.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700"></div>

          {/* Steps */}
          <div className="space-y-12">
            {steps.map((step, idx) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative flex gap-8"
              >
                {/* Marker */}
                <div className="relative flex-shrink-0">
                  {step.completed ? (
                    <div className="w-12 h-12 bg-blue-600 dark:bg-blue-500 rounded-full flex items-center justify-center border-4 border-white dark:border-gray-900 shadow-lg">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                  ) : (
                    <div className="w-12 h-12 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center border-4 border-white dark:border-gray-900 shadow-lg">
                      <Circle className="w-6 h-6 text-gray-400 dark:text-gray-600" />
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 pb-12">
                  <div className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-bold rounded-full mb-3">
                    Step {step.number}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-block p-8 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              Ready to Get Started?
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
              Join thousands of teams building better products
            </p>
            <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200">
              Start Your Free Trial
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
