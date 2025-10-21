"use client";

import { motion } from "framer-motion";
import { Calendar } from "lucide-react";

interface TimelineEvent {
  id?: string;
  date: string;
  title: string;
  description: string;
  category?: string;
}

interface VerticalCardsProps {
  events?: TimelineEvent[];
  className?: string;
}

export function VerticalCards({ events: customEvents, className = "" }: VerticalCardsProps) {
  const defaultEvents: TimelineEvent[] = [
    {
      id: "1",
      date: "December 2024",
      title: "Platform Launch",
      description: "Successfully launched our platform to the public with over 1,000 sign-ups in the first week.",
      category: "Product",
    },
    {
      id: "2",
      date: "November 2024",
      title: "Series A Funding",
      description: "Raised $10M in Series A funding led by leading venture capital firms.",
      category: "Business",
    },
    {
      id: "3",
      date: "October 2024",
      title: "Team Expansion",
      description: "Grew our team from 5 to 25 talented individuals across engineering and design.",
      category: "Team",
    },
    {
      id: "4",
      date: "September 2024",
      title: "Beta Program",
      description: "Launched closed beta with 100 selected users providing valuable feedback.",
      category: "Product",
    },
    {
      id: "5",
      date: "August 2024",
      title: "Company Founded",
      description: "Started with a small team and a vision to revolutionize the industry.",
      category: "Milestone",
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
      <div className="max-w-3xl mx-auto">
        <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
          Company Milestones
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-10">
          Our journey of growth and innovation
        </p>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="relative"
        >
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-800" />

          <div className="space-y-6">
            {events.map((event, idx) => (
              <motion.div key={event.id || idx} variants={item} className="relative">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center ring-4 ring-white dark:ring-gray-900 relative z-10">
                    <Calendar className="w-5 h-5 text-white" />
                  </div>

                  <div className="flex-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow">
                    {event.category && (
                      <span className="inline-block px-2 py-0.5 text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded mb-2">
                        {event.category}
                      </span>
                    )}

                    <time className="block text-xs text-gray-500 dark:text-gray-400 mb-1">
                      {event.date}
                    </time>

                    <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-2">
                      {event.title}
                    </h3>

                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {event.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
