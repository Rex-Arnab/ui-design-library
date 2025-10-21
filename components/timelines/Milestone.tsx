"use client";

import { motion } from "framer-motion";
import { Award, Rocket, Star, Trophy, TrendingUp, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface MilestoneEvent {
  id?: string;
  date: string;
  title: string;
  metric: string;
  description: string;
  icon: "trophy" | "star" | "rocket" | "award" | "users" | "trending";
}

interface MilestoneProps {
  events?: MilestoneEvent[];
  orientation?: "horizontal" | "vertical";
  className?: string;
}

export function Milestone({
  events: customEvents,
  orientation = "vertical",
  className = "",
}: MilestoneProps) {
  const defaultEvents: MilestoneEvent[] = [
    {
      id: "1",
      date: "December 2024",
      title: "Industry Recognition",
      metric: "Best SaaS Product",
      description: "Won the prestigious Tech Innovation Award for excellence in software development.",
      icon: "trophy",
    },
    {
      id: "2",
      date: "September 2024",
      title: "Revenue Milestone",
      metric: "$10M ARR",
      description: "Achieved $10 million in annual recurring revenue, growing 300% year-over-year.",
      icon: "trending",
    },
    {
      id: "3",
      date: "June 2024",
      title: "User Growth",
      metric: "500K Users",
      description: "Reached half a million active users across 50 countries worldwide.",
      icon: "users",
    },
    {
      id: "4",
      date: "March 2024",
      title: "Product Excellence",
      metric: "4.9/5 Rating",
      description: "Maintained exceptional customer satisfaction with 10,000+ reviews.",
      icon: "star",
    },
  ];

  const events = customEvents || defaultEvents;

  const iconMap: Record<string, LucideIcon> = {
    trophy: Trophy,
    star: Star,
    rocket: Rocket,
    award: Award,
    users: Users,
    trending: TrendingUp,
  };

  const getIcon = (iconType: string) => {
    const Icon = iconMap[iconType] || Trophy;
    return <Icon className="w-6 h-6 text-white" />;
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  if (orientation === "horizontal") {
    return (
      <section className={`py-12 px-4 ${className}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-2 text-center">
            Major Achievements
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-12 text-center">
            Celebrating our biggest wins
          </p>

          <div className="overflow-x-auto pb-4">
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="flex gap-6 min-w-max"
            >
              {events.map((event, idx) => (
                <motion.div
                  key={event.id || idx}
                  variants={item}
                  className="w-72 flex-shrink-0"
                >
                  <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 h-full">
                    <div className="w-14 h-14 rounded-full bg-blue-600 flex items-center justify-center mb-4">
                      {getIcon(event.icon)}
                    </div>

                    <time className="block text-xs font-medium text-gray-500 dark:text-gray-400 mb-2">
                      {event.date}
                    </time>

                    <div className="mb-3">
                      <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">
                        {event.metric}
                      </div>
                      <h3 className="text-base font-semibold text-gray-900 dark:text-white">
                        {event.title}
                      </h3>
                    </div>

                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {event.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={`py-12 px-4 ${className}`}>
      <div className="max-w-3xl mx-auto">
        <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
          Major Achievements
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-10">
          Celebrating our biggest wins
        </p>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-8"
        >
          {events.map((event, idx) => (
            <motion.div key={event.id || idx} variants={item}>
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-blue-600 flex items-center justify-center">
                  {getIcon(event.icon)}
                </div>

                <div className="flex-1">
                  <time className="block text-xs font-medium text-gray-500 dark:text-gray-400 mb-2">
                    {event.date}
                  </time>

                  <div className="mb-2">
                    <div className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-1">
                      {event.metric}
                    </div>
                    <h3 className="text-base font-semibold text-gray-900 dark:text-white">
                      {event.title}
                    </h3>
                  </div>

                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {event.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
