"use client";

import { motion } from "framer-motion";
import { Zap, Shield, Users, TrendingUp, Globe, Code, type LucideIcon } from "lucide-react";

interface BentoItem {
  icon: LucideIcon;
  title: string;
  description: string;
  span?: string;
  gradient?: string;
}

interface BentoProps {
  className?: string;
}

/**
 * Bento - Modern bento box grid layout
 *
 * Features:
 * - CSS Grid with different sized cells
 * - Some cards span 2 columns or 2 rows
 * - Asymmetric, dynamic layout
 * - Mix of icon cards, text cards, image cards
 * - Masonry-like feel but structured
 * - Responsive: adapts on mobile
 */
export function Bento({ className = "" }: BentoProps) {
  const items: BentoItem[] = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Sub-100ms response times globally with edge computing",
      span: "md:col-span-2",
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      icon: Shield,
      title: "Secure",
      description: "Bank-level encryption",
      span: "md:row-span-2",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Real-time sync across teams",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: TrendingUp,
      title: "Analytics",
      description: "Deep insights into your metrics",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: Globe,
      title: "Global Scale",
      description: "Distributed infrastructure in 50+ regions for maximum uptime and performance",
      span: "md:col-span-2",
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      icon: Code,
      title: "Developer First",
      description: "Comprehensive APIs and SDKs",
      gradient: "from-red-500 to-pink-500"
    }
  ];

  return (
    <section className={`py-20 px-4 bg-gray-50 dark:bg-gray-900 ${className}`}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
            Built for Modern Teams
          </h2>
          <p className="text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Everything you need in one powerful platform
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[minmax(200px,auto)]">
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className={`group p-6 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 ${item.span || ''}`}
              >
                {/* Gradient Background (Subtle) */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-5 dark:group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}></div>

                {/* Content */}
                <div className="relative h-full flex flex-col">
                  {/* Icon */}
                  <div className={`w-12 h-12 bg-gradient-to-br ${item.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Text */}
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { label: "Active Users", value: "2M+" },
            { label: "Countries", value: "150+" },
            { label: "Uptime", value: "99.99%" },
            { label: "Support", value: "24/7" }
          ].map((stat, idx) => (
            <div key={stat.label} className="text-center">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + (idx * 0.1) }}
              >
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </motion.div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
