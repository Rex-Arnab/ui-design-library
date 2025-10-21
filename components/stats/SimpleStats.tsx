'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  TrendingUp,
  Users,
  DollarSign,
  Target,
  type LucideIcon
} from 'lucide-react';

// TypeScript Interfaces
interface Stat {
  id: string;
  label: string;
  value: number | string;
  icon: LucideIcon;
  prefix?: string;
  suffix?: string;
}

interface SimpleStatsProps {
  className?: string;
  stats?: Stat[];
}

// Default stats data
const defaultStats: Stat[] = [
  {
    id: '1',
    label: 'Total Revenue',
    value: '2.5M',
    icon: DollarSign,
    prefix: '$',
  },
  {
    id: '2',
    label: 'Active Users',
    value: '50,000',
    icon: Users,
    suffix: '+',
  },
  {
    id: '3',
    label: 'Conversion Rate',
    value: '3.2',
    icon: Target,
    suffix: '%',
  },
  {
    id: '4',
    label: 'Growth Rate',
    value: '32',
    icon: TrendingUp,
    suffix: '%',
  },
];

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

const SimpleStats: React.FC<SimpleStatsProps> = ({
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
                {/* Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                    <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                </div>

                {/* Value */}
                <div className="mb-2">
                  <div className="flex items-baseline">
                    {stat.prefix && (
                      <span className="text-2xl font-bold text-gray-900 dark:text-white mr-1">
                        {stat.prefix}
                      </span>
                    )}
                    <span className="text-4xl font-bold text-gray-900 dark:text-white">
                      {stat.value}
                    </span>
                    {stat.suffix && (
                      <span className="text-2xl font-bold text-gray-900 dark:text-white ml-1">
                        {stat.suffix}
                      </span>
                    )}
                  </div>
                </div>

                {/* Label */}
                <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default SimpleStats;
