"use client";

import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";

interface TimelineEvent {
  id?: string;
  date: string;
  metric: string;
  title: string;
  description: string;
  growth?: string;
}

interface StatTimelineProps {
  events?: TimelineEvent[];
  className?: string;
}

export function StatTimeline({ events: customEvents, className = "" }: StatTimelineProps) {
  const defaultEvents: TimelineEvent[] = [
    {
      id: "1",
      date: "Q4 2024",
      metric: "$50M",
      title: "Annual Revenue",
      description: "Achieved record-breaking revenue with 250% year-over-year growth.",
      growth: "+250%",
    },
    {
      id: "2",
      date: "Q3 2024",
      metric: "1M+",
      title: "Active Users",
      description: "Crossed the milestone of one million monthly active users.",
      growth: "+180%",
    },
    {
      id: "3",
      date: "Q2 2024",
      metric: "500K",
      title: "Mobile Downloads",
      description: "Mobile app reached half a million downloads across iOS and Android.",
      growth: "+320%",
    },
    {
      id: "4",
      date: "Q1 2024",
      metric: "98%",
      title: "Customer Satisfaction",
      description: "Maintained industry-leading satisfaction score based on 50K+ surveys.",
      growth: "+5%",
    },
    {
      id: "5",
      date: "Q4 2023",
      metric: "150",
      title: "Team Members",
      description: "Grew team to 150 talented individuals across 10 countries.",
      growth: "+400%",
    },
  ];

  const events = customEvents || defaultEvents;

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section className={`py-12 px-4 ${className}`}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
          Growth Metrics
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-10">
          Our data-driven journey to success
        </p>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {events.map((event, idx) => (
            <motion.div
              key={event.id || idx}
              variants={item}
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <time className="block text-xs font-medium text-gray-500 dark:text-gray-400 mb-3">
                {event.date}
              </time>

              <div className="flex items-baseline gap-3 mb-2">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                  {event.metric}
                </div>
                {event.growth && (
                  <div className="flex items-center gap-1 px-2 py-0.5 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded text-xs font-medium">
                    <TrendingUp className="w-3 h-3" />
                    {event.growth}
                  </div>
                )}
              </div>

              <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-2">
                {event.title}
              </h3>

              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                {event.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
