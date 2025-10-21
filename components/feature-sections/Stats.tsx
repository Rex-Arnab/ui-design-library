"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { TrendingUp, Users, Zap, Shield, type LucideIcon } from "lucide-react";

interface StatFeature {
  icon: LucideIcon;
  stat: string;
  number: number;
  suffix: string;
  title: string;
  description: string;
}

interface StatsProps {
  className?: string;
}

/**
 * Stats - Features with statistics/metrics
 *
 * Features:
 * - Each feature has a big number/stat
 * - "99.9% Uptime", "10M+ Users", "< 100ms Response"
 * - Stat emphasized, then feature title/description
 * - Numbers animated on scroll (count-up)
 * - Clean, data-focused design
 */
export function Stats({ className = "" }: StatsProps) {
  const features: StatFeature[] = [
    {
      icon: Users,
      stat: "10M+",
      number: 10,
      suffix: "M+",
      title: "Active Users",
      description: "Trusted by millions of users worldwide across 150+ countries"
    },
    {
      icon: Zap,
      stat: "<100ms",
      number: 100,
      suffix: "ms",
      title: "Response Time",
      description: "Lightning-fast performance with sub-100ms response times globally"
    },
    {
      icon: Shield,
      stat: "99.99%",
      number: 99.99,
      suffix: "%",
      title: "Uptime SLA",
      description: "Enterprise-grade reliability with 24/7 monitoring and automatic failover"
    },
    {
      icon: TrendingUp,
      stat: "500K+",
      number: 500,
      suffix: "K+",
      title: "API Calls Daily",
      description: "Processing millions of requests with zero downtime and maximum efficiency"
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
            Trusted by Teams Worldwide
          </h2>
          <p className="text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            The numbers speak for themselves. Join thousands of successful teams.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <StatCard key={feature.title} feature={feature} index={idx} />
            );
          })}
        </div>

        {/* Bottom Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
            Want to see these numbers for your own business?
          </p>
          <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200">
            Start Free Trial
          </button>
        </motion.div>
      </div>
    </section>
  );
}

function StatCard({ feature, index }: { feature: StatFeature; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [count, setCount] = useState(0);
  const Icon = feature.icon;

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = feature.number / steps;
    const stepDuration = duration / steps;

    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= feature.number) {
        setCount(feature.number);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [isInView, feature.number]);

  const displayValue = feature.stat.startsWith("<")
    ? `<${Math.round(count)}`
    : feature.suffix === "%"
      ? count.toFixed(2)
      : Math.round(count);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="p-8 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-200"
    >
      {/* Icon */}
      <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-6">
        <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
      </div>

      {/* Stat */}
      <div className="mb-4">
        <div className="text-4xl font-bold text-gray-900 dark:text-white">
          {displayValue}{feature.suffix}
        </div>
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
        {feature.title}
      </h3>

      {/* Description */}
      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
        {feature.description}
      </p>
    </motion.div>
  );
}
