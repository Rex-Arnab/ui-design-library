'use client';

import { motion } from 'framer-motion';
import { TrendingUp, Users, Target, Award, Zap } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Stat {
  id: string;
  label: string;
  value: number;
  target: number;
  icon: LucideIcon;
  color: string;
}

interface ProgressBarStatsProps {
  className?: string;
  stats?: Stat[];
}

const defaultStats: Stat[] = [
  {
    id: '1',
    label: 'Revenue Goal',
    value: 75000,
    target: 100000,
    icon: TrendingUp,
    color: 'bg-blue-500',
  },
  {
    id: '2',
    label: 'User Acquisition',
    value: 8500,
    target: 10000,
    icon: Users,
    color: 'bg-green-500',
  },
  {
    id: '3',
    label: 'Customer Satisfaction',
    value: 92,
    target: 100,
    icon: Award,
    color: 'bg-purple-500',
  },
  {
    id: '4',
    label: 'Project Milestones',
    value: 18,
    target: 24,
    icon: Target,
    color: 'bg-orange-500',
  },
  {
    id: '5',
    label: 'Performance Score',
    value: 88,
    target: 100,
    icon: Zap,
    color: 'bg-pink-500',
  },
];

const formatNumber = (num: number): string => {
  if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
  if (num >= 1000) return `${(num / 1000).toFixed(1)}K`;
  return num.toString();
};

export default function ProgressBarStats({
  className = '',
  stats = defaultStats,
}: ProgressBarStatsProps) {
  return (
    <section className={`py-12 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="space-y-8">
          {stats.map((stat, index) => {
            const percentage = Math.min((stat.value / stat.target) * 100, 100);
            const IconComponent = stat.icon;

            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 ${stat.color} rounded-lg flex items-center justify-center text-white`}
                    >
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
                        {stat.label}
                      </h3>
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        {formatNumber(stat.value)} / {formatNumber(stat.target)}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">
                      {percentage.toFixed(0)}%
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">
                      to goal
                    </div>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="relative">
                  <div className="w-full h-2 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                    <motion.div
                      className={`h-full ${stat.color} rounded-full`}
                      initial={{ width: 0 }}
                      animate={{ width: `${percentage}%` }}
                      transition={{ duration: 1.5, ease: 'easeOut', delay: index * 0.1 }}
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
