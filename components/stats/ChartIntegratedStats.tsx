'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  TrendingUp,
  Users,
  DollarSign,
  ShoppingCart,
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
  chartData?: number[];
  change?: number;
  trend?: 'up' | 'down' | 'neutral';
}

interface ChartIntegratedStatsProps {
  className?: string;
  stats?: Stat[];
}

// Default stats data with chart data
const defaultStats: Stat[] = [
  {
    id: '1',
    label: 'Monthly Revenue',
    value: '120K',
    icon: DollarSign,
    prefix: '$',
    chartData: [45, 52, 48, 58, 65, 70, 75, 82, 88, 95, 100, 108],
    change: 15,
    trend: 'up',
  },
  {
    id: '2',
    label: 'Active Users',
    value: '8,543',
    icon: Users,
    chartData: [30, 35, 38, 42, 48, 55, 62, 70, 78, 85, 92, 100],
    change: 8,
    trend: 'up',
  },
  {
    id: '3',
    label: 'Total Orders',
    value: '1,234',
    icon: ShoppingCart,
    chartData: [60, 58, 55, 52, 48, 45, 50, 54, 58, 62, 68, 72],
    change: -3,
    trend: 'down',
  },
  {
    id: '4',
    label: 'Conversion Rate',
    value: '3.2',
    icon: TrendingUp,
    suffix: '%',
    chartData: [25, 28, 32, 30, 35, 40, 45, 50, 55, 60, 65, 70],
    change: 12,
    trend: 'up',
  },
];

// Mini Chart Component
const MiniChart: React.FC<{
  data: number[];
  color: string;
  hoveredIndex: number | null;
  onHover: (index: number | null) => void;
}> = ({ data, color, hoveredIndex, onHover }) => {
  const maxValue = Math.max(...data);
  const normalizedData = data.map((value) => (value / maxValue) * 100);

  return (
    <div className="flex gap-1 h-16 items-end">
      {normalizedData.map((value, index) => (
        <motion.div
          key={index}
          className={`flex-1 rounded-t cursor-pointer transition-opacity ${color}`}
          initial={{ height: 0 }}
          whileInView={{ height: `${value}%` }}
          viewport={{ once: true }}
          transition={{
            delay: index * 0.05,
            duration: 0.5,
            ease: 'easeOut',
          }}
          whileHover={{ opacity: 0.8 }}
          onMouseEnter={() => onHover(index)}
          onMouseLeave={() => onHover(null)}
          style={{
            opacity: hoveredIndex === null || hoveredIndex === index ? 1 : 0.5,
          }}
        />
      ))}
    </div>
  );
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
      ease: 'easeOut',
    },
  },
};

const ChartIntegratedStats: React.FC<ChartIntegratedStatsProps> = ({
  className = '',
  stats = defaultStats
}) => {
  const [hoveredStates, setHoveredStates] = useState<{ [key: string]: number | null }>({});

  const handleHover = (statId: string, index: number | null) => {
    setHoveredStates((prev) => ({ ...prev, [statId]: index }));
  };

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
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            const isPositive = stat.trend === 'up';
            const isNegative = stat.trend === 'down';

            // Different colors for each stat
            const chartColors = [
              'bg-blue-500 dark:bg-blue-600',
              'bg-green-500 dark:bg-green-600',
              'bg-purple-500 dark:bg-purple-600',
              'bg-orange-500 dark:bg-orange-600',
            ];
            const chartColor = chartColors[idx % chartColors.length];

            const iconColors = [
              'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400',
              'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400',
              'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400',
              'bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400',
            ];
            const iconColor = iconColors[idx % iconColors.length];

            return (
              <motion.div
                key={stat.id}
                variants={itemVariants}
                className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${iconColor}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                        {stat.label}
                      </h3>
                      <div className="flex items-baseline mt-1">
                        {stat.prefix && (
                          <span className="text-xl font-bold text-gray-900 dark:text-white mr-1">
                            {stat.prefix}
                          </span>
                        )}
                        <span className="text-3xl font-bold text-gray-900 dark:text-white">
                          {stat.value}
                        </span>
                        {stat.suffix && (
                          <span className="text-xl font-bold text-gray-900 dark:text-white ml-1">
                            {stat.suffix}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Change Badge */}
                  {stat.change !== undefined && (
                    <div
                      className={`px-2 py-1 rounded-md text-xs font-semibold ${
                        isPositive
                          ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400'
                          : isNegative
                          ? 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400'
                          : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-400'
                      }`}
                    >
                      {isPositive ? '+' : ''}
                      {stat.change}%
                    </div>
                  )}
                </div>

                {/* Mini Chart */}
                {stat.chartData && (
                  <div className="mt-4">
                    <MiniChart
                      data={stat.chartData}
                      color={chartColor}
                      hoveredIndex={hoveredStates[stat.id] ?? null}
                      onHover={(index) => handleHover(stat.id, index)}
                    />

                    {/* Chart Labels */}
                    <div className="flex justify-between mt-2 text-xs text-gray-500 dark:text-gray-500">
                      <span>Jan</span>
                      <span>Dec</span>
                    </div>

                    {/* Hovered Value Display */}
                    {hoveredStates[stat.id] !== null && hoveredStates[stat.id] !== undefined && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-2 text-center text-sm text-gray-700 dark:text-gray-300"
                      >
                        Value: {stat.chartData[hoveredStates[stat.id]!]}
                      </motion.div>
                    )}
                  </div>
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default ChartIntegratedStats;
