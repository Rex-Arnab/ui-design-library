'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Users,
  DollarSign,
  TrendingUp,
  Star,
  Target,
  Award,
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
  color?: 'blue' | 'green' | 'purple' | 'orange' | 'pink' | 'red';
  badge?: string;
}

interface IconStatsProps {
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
    color: 'blue',
    badge: 'Top Performer',
  },
  {
    id: '2',
    label: 'Active Users',
    value: '50,000',
    icon: Users,
    suffix: '+',
    color: 'green',
  },
  {
    id: '3',
    label: 'Conversion Rate',
    value: '3.2',
    icon: Target,
    suffix: '%',
    color: 'purple',
  },
  {
    id: '4',
    label: 'Growth Rate',
    value: '32',
    icon: TrendingUp,
    suffix: '%',
    color: 'orange',
    badge: 'Rising',
  },
  {
    id: '5',
    label: 'Customer Rating',
    value: '4.9',
    icon: Star,
    suffix: '/5',
    color: 'pink',
  },
  {
    id: '6',
    label: 'Awards Won',
    value: '12',
    icon: Award,
    color: 'red',
  },
];

// Color mappings
const colorClasses = {
  blue: {
    bg: 'bg-blue-500 dark:bg-blue-600',
    light: 'bg-blue-100 dark:bg-blue-900/30',
    text: 'text-blue-600 dark:text-blue-400',
  },
  green: {
    bg: 'bg-green-500 dark:bg-green-600',
    light: 'bg-green-100 dark:bg-green-900/30',
    text: 'text-green-600 dark:text-green-400',
  },
  purple: {
    bg: 'bg-purple-500 dark:bg-purple-600',
    light: 'bg-purple-100 dark:bg-purple-900/30',
    text: 'text-purple-600 dark:text-purple-400',
  },
  orange: {
    bg: 'bg-orange-500 dark:bg-orange-600',
    light: 'bg-orange-100 dark:bg-orange-900/30',
    text: 'text-orange-600 dark:text-orange-400',
  },
  pink: {
    bg: 'bg-pink-500 dark:bg-pink-600',
    light: 'bg-pink-100 dark:bg-pink-900/30',
    text: 'text-pink-600 dark:text-pink-400',
  },
  red: {
    bg: 'bg-red-500 dark:bg-red-600',
    light: 'bg-red-100 dark:bg-red-900/30',
    text: 'text-red-600 dark:text-red-400',
  },
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

const IconStats: React.FC<IconStatsProps> = ({
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
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {stats.map((stat) => {
            const Icon = stat.icon;
            const color = stat.color || 'blue';
            const colors = colorClasses[color];

            return (
              <motion.div
                key={stat.id}
                variants={itemVariants}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.3 }
                }}
                className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6 hover:shadow-xl transition-all duration-300 relative overflow-hidden"
              >
                {/* Badge */}
                {stat.badge && (
                  <div className="absolute top-4 right-4">
                    <span className={`px-2 py-1 text-xs font-semibold rounded-md ${colors.light} ${colors.text}`}>
                      {stat.badge}
                    </span>
                  </div>
                )}

                {/* Icon Circle */}
                <div className="flex justify-center mb-6">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6, ease: 'easeInOut' as const }}
                    className={`w-20 h-20 rounded-full flex items-center justify-center ${colors.bg}`}
                  >
                    <Icon className="w-10 h-10 text-white" />
                  </motion.div>
                </div>

                {/* Value */}
                <div className="text-center mb-3">
                  <div className="flex items-baseline justify-center">
                    {stat.prefix && (
                      <span className="text-2xl font-bold text-gray-900 dark:text-white mr-1">
                        {stat.prefix}
                      </span>
                    )}
                    <span className="text-5xl font-bold text-gray-900 dark:text-white">
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
                <p className="text-center text-sm text-gray-600 dark:text-gray-400 font-medium">
                  {stat.label}
                </p>

                {/* Decorative bottom border */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 ${colors.bg}`} />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default IconStats;
