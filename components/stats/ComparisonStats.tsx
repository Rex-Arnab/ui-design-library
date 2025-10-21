'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowUp,
  ArrowDown,
  TrendingUp,
  Users,
  ShoppingCart,
  DollarSign,
  type LucideIcon
} from 'lucide-react';

// TypeScript Interfaces
interface ComparisonData {
  period: string;
  value: number;
}

interface Stat {
  id: string;
  label: string;
  current: ComparisonData;
  previous: ComparisonData;
  icon: LucideIcon;
  prefix?: string;
  suffix?: string;
}

interface ComparisonStatsProps {
  className?: string;
  stats?: Stat[];
}

// Default stats data
const defaultStats: Stat[] = [
  {
    id: '1',
    label: 'Revenue',
    current: { period: 'This Month', value: 125000 },
    previous: { period: 'Last Month', value: 98000 },
    icon: DollarSign,
    prefix: '$',
  },
  {
    id: '2',
    label: 'New Customers',
    current: { period: 'This Week', value: 342 },
    previous: { period: 'Last Week', value: 289 },
    icon: Users,
  },
  {
    id: '3',
    label: 'Total Orders',
    current: { period: 'Today', value: 89 },
    previous: { period: 'Yesterday', value: 112 },
    icon: ShoppingCart,
  },
  {
    id: '4',
    label: 'Growth Rate',
    current: { period: 'Q4 2024', value: 32 },
    previous: { period: 'Q3 2024', value: 24 },
    icon: TrendingUp,
    suffix: '%',
  },
];

// Format number helper
const formatNumber = (num: number): string => {
  if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
  if (num >= 1000) return `${(num / 1000).toFixed(1)}K`;
  return num.toString();
};

// Calculate percentage change
const calculateChange = (current: number, previous: number): number => {
  if (previous === 0) return 0;
  return ((current - previous) / previous) * 100;
};

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut' as const,
    },
  },
};

const ComparisonStats: React.FC<ComparisonStatsProps> = ({
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
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {stats.map((stat) => {
            const Icon = stat.icon;
            const changePercentage = calculateChange(
              stat.current.value,
              stat.previous.value
            );
            const isPositive = changePercentage > 0;
            const isNegative = changePercentage < 0;
            const difference = stat.current.value - stat.previous.value;

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
                {/* Header with Icon and Label */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                    <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {stat.label}
                  </h3>
                </div>

                {/* Comparison Grid */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  {/* Current Period */}
                  <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-4">
                    <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">
                      {stat.current.period}
                    </p>
                    <div className="flex items-baseline">
                      {stat.prefix && (
                        <span className="text-lg font-bold text-gray-900 dark:text-white mr-1">
                          {stat.prefix}
                        </span>
                      )}
                      <span className="text-3xl font-bold text-gray-900 dark:text-white">
                        {formatNumber(stat.current.value)}
                      </span>
                      {stat.suffix && (
                        <span className="text-lg font-bold text-gray-900 dark:text-white ml-1">
                          {stat.suffix}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Previous Period */}
                  <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-4">
                    <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">
                      {stat.previous.period}
                    </p>
                    <div className="flex items-baseline">
                      {stat.prefix && (
                        <span className="text-lg font-semibold text-gray-600 dark:text-gray-500 mr-1">
                          {stat.prefix}
                        </span>
                      )}
                      <span className="text-3xl font-semibold text-gray-600 dark:text-gray-500">
                        {formatNumber(stat.previous.value)}
                      </span>
                      {stat.suffix && (
                        <span className="text-lg font-semibold text-gray-600 dark:text-gray-500 ml-1">
                          {stat.suffix}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Change Indicator */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-800">
                  <div className="flex items-center gap-2">
                    <div
                      className={`flex items-center gap-1 px-3 py-1.5 rounded-md font-semibold ${
                        isPositive
                          ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400'
                          : isNegative
                          ? 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400'
                          : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-400'
                      }`}
                    >
                      {isPositive && <ArrowUp className="w-4 h-4" />}
                      {isNegative && <ArrowDown className="w-4 h-4" />}
                      <span className="text-sm">
                        {isPositive ? '+' : ''}
                        {changePercentage.toFixed(1)}%
                      </span>
                    </div>
                  </div>

                  <div className="text-right">
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {isPositive ? '+' : ''}
                      {stat.prefix}
                      {formatNumber(Math.abs(difference))}
                      {stat.suffix}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default ComparisonStats;
