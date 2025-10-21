"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface TimelineEvent {
  id?: string;
  date: string;
  title: string;
  description: string;
}

interface AlternatingProps {
  events?: TimelineEvent[];
  className?: string;
}

export function Alternating({ events: customEvents, className = "" }: AlternatingProps) {
  const defaultEvents: TimelineEvent[] = [
    {
      id: "1",
      date: "January 2024",
      title: "Foundation",
      description: "Established core infrastructure and assembled the founding team.",
    },
    {
      id: "2",
      date: "March 2024",
      title: "First Product",
      description: "Launched MVP with essential features to early adopters.",
    },
    {
      id: "3",
      date: "May 2024",
      title: "Growth Phase",
      description: "Scaled operations and onboarded first 1,000 customers.",
    },
    {
      id: "4",
      date: "July 2024",
      title: "Expansion",
      description: "Opened new markets and expanded product offerings.",
    },
    {
      id: "5",
      date: "September 2024",
      title: "Innovation",
      description: "Released advanced features based on customer feedback.",
    },
  ];

  const events = customEvents || defaultEvents;

  return (
    <section className={`py-12 px-4 ${className}`}>
      <div className="max-w-5xl mx-auto">
        <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-2 text-center">
          Our Journey
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-12 text-center">
          Key milestones that shaped our company
        </p>

        {/* Desktop: Alternating */}
        <div className="hidden md:block">
          <div className="relative">
            {/* Center line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-700 -ml-px" />

            <div className="space-y-12">
              {events.map((event, idx) => {
                const isLeft = idx % 2 === 0;
                return (
                  <TimelineItem
                    key={event.id || idx}
                    event={event}
                    isLeft={isLeft}
                  />
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile: Stacked */}
        <div className="md:hidden">
          <ol className="relative border-l-2 border-gray-300 dark:border-gray-700 ml-3">
            {events.map((event, idx) => (
              <li key={event.id || idx} className="mb-8 last:mb-0 ml-6">
                <span className="absolute flex items-center justify-center w-3 h-3 bg-blue-600 rounded-full -left-1.5 ring-4 ring-white dark:ring-gray-900" />

                <time className="block text-xs font-medium text-gray-500 dark:text-gray-400 mb-1">
                  {event.date}
                </time>

                <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-1">
                  {event.title}
                </h3>

                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {event.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function TimelineItem({ event, isLeft }: { event: TimelineEvent; isLeft: boolean }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="relative grid grid-cols-2 gap-8"
    >
      {isLeft ? (
        <>
          {/* Content on left */}
          <div className="text-right pr-8">
            <time className="block text-xs font-medium text-gray-500 dark:text-gray-400 mb-2">
              {event.date}
            </time>
            <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-2">
              {event.title}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {event.description}
            </p>
          </div>
          {/* Empty space on right */}
          <div />
        </>
      ) : (
        <>
          {/* Empty space on left */}
          <div />
          {/* Content on right */}
          <div className="pl-8">
            <time className="block text-xs font-medium text-gray-500 dark:text-gray-400 mb-2">
              {event.date}
            </time>
            <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-2">
              {event.title}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {event.description}
            </p>
          </div>
        </>
      )}

      {/* Center dot */}
      <div className="absolute left-1/2 top-0 w-3 h-3 bg-blue-600 rounded-full -ml-1.5 ring-4 ring-white dark:ring-gray-900" />
    </motion.div>
  );
}
