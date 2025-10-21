"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface TimelineEvent {
  id: string;
  date: string;
  title: string;
  description: string;
  details?: string;
}

interface ClickableProps {
  events?: TimelineEvent[];
  className?: string;
}

export function Clickable({ events: customEvents, className = "" }: ClickableProps) {
  const defaultEvents: TimelineEvent[] = [
    {
      id: "1",
      date: "Q4 2024",
      title: "Product Launch 2.0",
      description: "Major platform update with new features",
      details:
        "This comprehensive update includes a completely redesigned dashboard, advanced analytics capabilities, improved mobile experience, and integration with 50+ third-party services. We've also introduced AI-powered recommendations and enhanced security features.",
    },
    {
      id: "2",
      date: "Q3 2024",
      title: "Series B Funding",
      description: "Raised $25M to expand operations",
      details:
        "Led by prominent venture capital firms, this funding round will accelerate our growth plans, including expanding our engineering team, opening new offices in Europe and Asia, and investing heavily in R&D for next-generation features.",
    },
    {
      id: "3",
      date: "Q2 2024",
      title: "100K User Milestone",
      description: "Reached significant user growth target",
      details:
        "We crossed 100,000 active users across 75 countries, representing a 400% increase from the previous year. Our user retention rate improved to 85%, and customer satisfaction scores reached an all-time high of 4.8/5.",
    },
    {
      id: "4",
      date: "Q1 2024",
      title: "Mobile App Release",
      description: "Launched iOS and Android applications",
      details:
        "Our mobile apps bring the full power of our platform to smartphones and tablets. Built with React Native for seamless cross-platform performance, the apps include offline mode, push notifications, and biometric authentication.",
    },
  ];

  const events = customEvents || defaultEvents;
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section className={`py-12 px-4 ${className}`}>
      <div className="max-w-3xl mx-auto">
        <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
          Interactive Timeline
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-8">
          Click any event to view full details
        </p>

        <div className="space-y-3">
          {events.map((event) => {
            const isExpanded = expandedId === event.id;
            return (
              <div
                key={event.id}
                className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleExpand(event.id)}
                  className="w-full px-5 py-4 flex items-center justify-between gap-4 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                  aria-expanded={isExpanded}
                >
                  <div className="flex-1 text-left">
                    <div className="flex items-center gap-3 mb-1">
                      <time className="text-xs font-medium text-gray-500 dark:text-gray-400">
                        {event.date}
                      </time>
                      <div className="w-1 h-1 rounded-full bg-gray-400 dark:bg-gray-600" />
                      <span className="text-xs text-gray-600 dark:text-gray-400">
                        {isExpanded ? "Click to collapse" : "Click to expand"}
                      </span>
                    </div>
                    <h3 className="text-base font-semibold text-gray-900 dark:text-white">
                      {event.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      {event.description}
                    </p>
                  </div>

                  <motion.div
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="w-5 h-5 text-gray-400 dark:text-gray-500 flex-shrink-0" />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isExpanded && event.details && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-5 pb-4 border-t border-gray-200 dark:border-gray-700">
                        <div className="pt-4">
                          <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                            {event.details}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
