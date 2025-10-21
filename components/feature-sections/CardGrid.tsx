"use client";

import { motion } from "framer-motion";
import { Zap, Shield, Users, TrendingUp, Award, Lock, type LucideIcon } from "lucide-react";

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
}

interface CardGridProps {
  className?: string;
}

/**
 * CardGrid - Classic grid of feature cards with icons
 *
 * Features:
 * - 3-column grid on desktop, responsive down to 1 column
 * - Icon in colored circle at top of each card
 * - Subtle hover lift effect with shadow increase
 * - Clean card borders and rounded corners
 * - Equal height cards with consistent spacing
 * - Stagger animation on mount
 */
export function CardGrid({ className = "" }: CardGridProps) {
  const features: Feature[] = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized for speed with sub-100ms response times across all operations. Built on modern infrastructure.",
      color: "blue"
    },
    {
      icon: Shield,
      title: "Bank-Level Security",
      description: "SOC 2 compliant with end-to-end encryption. Your data is protected with industry-leading security measures.",
      color: "purple"
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Real-time sync across your entire team. Work together seamlessly with shared workspaces and permissions.",
      color: "green"
    },
    {
      icon: TrendingUp,
      title: "Advanced Analytics",
      description: "Powerful insights and custom dashboards. Track metrics that matter with real-time data visualization.",
      color: "orange"
    },
    {
      icon: Award,
      title: "99.9% Uptime",
      description: "Enterprise-grade reliability you can count on. Monitored 24/7 with automatic failover and backups.",
      color: "indigo"
    },
    {
      icon: Lock,
      title: "SOC 2 Certified",
      description: "Independently audited security standards. Compliant with GDPR, HIPAA, and major data protection regulations.",
      color: "red"
    }
  ];

  const colorClasses = {
    blue: "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400",
    purple: "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400",
    green: "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400",
    orange: "bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400",
    indigo: "bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400",
    red: "bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400"
  };

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
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
            Powerful Features Built for Teams
          </h2>
          <p className="text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Everything you need to build amazing products and scale your business with confidence
          </p>
        </motion.div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="group p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-lg hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-200"
              >
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${colorClasses[feature.color as keyof typeof colorClasses]}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            Ready to get started?
          </p>
          <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200">
            Start Free Trial
          </button>
        </motion.div>
      </div>
    </section>
  );
}
