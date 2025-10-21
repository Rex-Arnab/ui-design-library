'use client';

import React, { useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import {
  ArrowUp,
  ArrowDown,
  TrendingUp,
  Users,
  ShoppingCart,
  Star,
  type LucideIcon
} from 'lucide-react';

// TypeScript Interfaces
interface Stat {
  id: string;
  label: string;
  value: number;
  icon: LucideIcon;
  change?: number;
  trend?: 'up' | 'down' | 'neutral';
  prefix?: string;
  suffix?: string;
  timePeriod?: string;
}

interface AnimatedCounterStatsProps {
  className?: string;
  stats?: Stat[];
}

// Default stats data
const defaultStats: Stat[] = [
  {
    id: '1',
    label: 'Monthly Revenue',
    value: 120000,
    icon: TrendingUp,
    change: 15,
    trend: 'up',
    prefix: '$',
    timePeriod: 'vs last month',
  },
  {
    id: '2',
    label: 'Total Users',
    value: 1243,
    icon: Users,
    change: 8,
    trend: 'up',
    timePeriod: 'vs last month',
  },
  {
    id: '3',
    label: 'Orders Today',
    value: 89,
    icon: ShoppingCart,
    change: -3,
    trend: 'down',
    timePeriod: 'vs yesterday',
  },
  {
    id: '4',
    label: 'Customer Rating',
    value: 4.9,
    icon: Star,
    change: 2,
    trend: 'up',
    suffix: '/5',
    timePeriod: 'vs last week',
  },
];

// Format number helper
const _formatNumber =(num: number): string => {
  if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
  if (num >= 1000) return `${(num / 1000).toFixed(1)}K`;
  return num.toString();
};

// Animated Counter Component
const AnimatedCounter: React.FC<{
  value: number;
  prefix?: string;
  suffix?: string;
}> = ({ value, prefix = '', suffix = '' }) => {
  const counter = useMotionValue(0);
  const rounded = useTransform(counter, (latest) => {
    // Handle decimals
    if (value % 1 !== 0) {
      return latest.toFixed(1);
    }
    return Math.round(latest).toLocaleString();
  });

  const nodeRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const controls = animate(counter, value, {
      duration: 2,
      ease: 'easeOut' as const,
    });

    return controls.stop;
  }, [counter, value]);

  return (
    <div className="flex items-baseline">
      {prefix && (
        <span className="text-2xl font-bold text-gray-900 dark:text-white mr-1">
          {prefix}
        </span>
      )}
      <motion.span
        ref={nodeRef}
        className="text-4xl font-bold text-gray-900 dark:text-white"
      >
        {rounded}
      </motion.span>
      {suffix && (
        <span className="text-2xl font-bold text-gray-600 dark:text-gray-400 ml-1">
          {suffix}
        </span>
      )}
    </div>
  );
};

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut' as const,
    },
  },
};

const AnimatedCounterStats: React.FC<AnimatedCounterStatsProps> = ({
  className = '',
  stats = defaultStats
}) => {
  return (
    <section className={`py-16 px-4 sm:px-6 lg:px-8 ${className}`}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stats.map((stat) => {
            const Icon = stat.icon;
            const isPositive = stat.trend === 'up';
            const isNegative = stat.trend === 'down';

            return (
              <motion.div
                key={stat.id}
                variants={itemVariants}
                whileHover={{
                  y: -4,
                  transition: { duration: 0.2 }
                }}
                className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
              >
                {/* Icon and Change Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                    <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>

                  {/* Percentage Change */}
                  {stat.change !== undefined && (
                    <div
                      className={`flex items-center gap-1 px-2 py-1 rounded-md text-xs font-semibold ${
                        isPositive
                          ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400'
                          : isNegative
                          ? 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400'
                          : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-400'
                      }`}
                    >
                      {isPositive && <ArrowUp className="w-3 h-3" />}
                      {isNegative && <ArrowDown className="w-3 h-3" />}
                      <span>
                        {isPositive ? '+' : ''}
                        {stat.change}%
                      </span>
                    </div>
                  )}
                </div>

                {/* Animated Counter Value */}
                <div className="mb-2">
                  <AnimatedCounter
                    value={stat.value}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                  />
                </div>

                {/* Label */}
                <p className="text-sm text-gray-900 dark:text-white font-medium mb-1">
                  {stat.label}
                </p>

                {/* Time Period */}
                {stat.timePeriod && (
                  <p className="text-xs text-gray-500 dark:text-gray-500">
                    {stat.timePeriod}
                  </p>
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default AnimatedCounterStats;
