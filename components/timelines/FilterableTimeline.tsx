"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Circle } from "lucide-react";
import { useState } from "react";

interface TimelineEvent {
  id: string;
  date: string;
  title: string;
  description: string;
  category: string;
}

interface FilterableTimelineProps {
  events?: TimelineEvent[];
  categories?: string[];
  className?: string;
}

export function FilterableTimeline({
  events: customEvents,
  categories: customCategories,
  className = "",
}: FilterableTimelineProps) {
  const defaultEvents: TimelineEvent[] = [
    {
      id: "1",
      date: "Dec 2024",
      title: "AI Assistant Launch",
      description: "Released intelligent AI-powered assistant for customer support.",
      category: "Product",
    },
    {
      id: "2",
      date: "Nov 2024",
      title: "Series B Funding",
      description: "Raised $30M to accelerate growth and expansion.",
      category: "Business",
    },
    {
      id: "3",
      date: "Oct 2024",
      title: "Engineering Team Doubles",
      description: "Hired 25 new engineers across frontend, backend, and DevOps.",
      category: "Team",
    },
    {
      id: "4",
      date: "Sep 2024",
      title: "Mobile App 2.0",
      description: "Complete redesign of mobile applications with offline support.",
      category: "Product",
    },
    {
      id: "5",
      date: "Aug 2024",
      title: "Partnership with Enterprise Co",
      description: "Strategic partnership to integrate with major enterprise software.",
      category: "Business",
    },
    {
      id: "6",
      date: "Jul 2024",
      title: "Design System Launch",
      description: "Released comprehensive design system for consistency.",
      category: "Product",
    },
    {
      id: "7",
      date: "Jun 2024",
      title: "First International Office",
      description: "Opened our first office in London, UK.",
      category: "Team",
    },
  ];

  const defaultCategories = ["All", "Product", "Business", "Team"];

  const events = customEvents || defaultEvents;
  const categories = customCategories || defaultCategories;
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredEvents =
    activeFilter === "All"
      ? events
      : events.filter((event) => event.category === activeFilter);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Product":
        return "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400";
      case "Business":
        return "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400";
      case "Team":
        return "bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400";
      default:
        return "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-400";
    }
  };

  return (
    <section className={`py-12 px-4 ${className}`}>
      <div className="max-w-3xl mx-auto">
        <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
          Company Timeline
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
          Filter by category to explore specific events
        </p>

        {/* Filter buttons */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                activeFilter === category
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-700" />

          <AnimatePresence mode="popLayout">
            <motion.div layout className="space-y-6">
              {filteredEvents.map((event) => (
                <motion.div
                  key={event.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="relative pl-10"
                >
                  {/* Dot */}
                  <div className="absolute left-0 top-0 w-6 h-6 rounded-full bg-white dark:bg-gray-900 border-2 border-blue-600 flex items-center justify-center ring-4 ring-white dark:ring-gray-900">
                    <Circle className="w-2 h-2 fill-blue-600 text-blue-600" />
                  </div>

                  {/* Content */}
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <time className="text-xs font-medium text-gray-500 dark:text-gray-400">
                        {event.date}
                      </time>
                      <span
                        className={`px-2 py-0.5 text-xs font-medium rounded ${getCategoryColor(
                          event.category
                        )}`}
                      >
                        {event.category}
                      </span>
                    </div>
                    <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-1">
                      {event.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {event.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Empty state */}
          {filteredEvents.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-sm text-gray-500 dark:text-gray-400">
                No events found for this category
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
