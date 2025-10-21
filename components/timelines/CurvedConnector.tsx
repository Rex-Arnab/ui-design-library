"use client";

import { motion } from "framer-motion";

interface TimelineEvent {
  id?: string;
  date: string;
  title: string;
  description: string;
}

interface CurvedConnectorProps {
  events?: TimelineEvent[];
  orientation?: "vertical" | "alternating";
  className?: string;
}

export function CurvedConnector({
  events: customEvents,
  orientation = "vertical",
  className = "",
}: CurvedConnectorProps) {
  const defaultEvents: TimelineEvent[] = [
    {
      id: "1",
      date: "2024",
      title: "Next Chapter",
      description: "Expanding into new markets with innovative products and services.",
    },
    {
      id: "2",
      date: "2023",
      title: "Scaling Up",
      description: "Grew team to 100+ members and opened offices in 5 cities.",
    },
    {
      id: "3",
      date: "2022",
      title: "Product Evolution",
      description: "Launched version 2.0 with AI-powered features and automation.",
    },
    {
      id: "4",
      date: "2021",
      title: "First Success",
      description: "Reached profitability and 10,000 paying customers.",
    },
    {
      id: "5",
      date: "2020",
      title: "The Beginning",
      description: "Started with a simple idea and passionate founding team.",
    },
  ];

  const events = customEvents || defaultEvents;

  if (orientation === "alternating") {
    return (
      <section className={`py-12 px-4 ${className}`}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-2 text-center">
            Our Story
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-12 text-center">
            The path that led us here
          </p>

          {/* Desktop: Alternating */}
          <div className="hidden md:block">
            <div className="relative">
              {/* Center line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-700 -ml-px" />

              <div className="space-y-16">
                {events.map((event, idx) => {
                  const isLeft = idx % 2 === 0;
                  return (
                    <div key={event.id || idx} className="relative">
                      <div className="grid grid-cols-2 gap-8">
                        {isLeft ? (
                          <>
                            {/* Content left */}
                            <motion.div
                              initial={{ opacity: 0, x: -30 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.5 }}
                              className="text-right pr-12"
                            >
                              <time className="block text-xs font-bold text-blue-600 dark:text-blue-400 mb-2">
                                {event.date}
                              </time>
                              <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-2">
                                {event.title}
                              </h3>
                              <p className="text-sm text-gray-600 dark:text-gray-400">
                                {event.description}
                              </p>
                            </motion.div>
                            <div />
                          </>
                        ) : (
                          <>
                            <div />
                            {/* Content right */}
                            <motion.div
                              initial={{ opacity: 0, x: 30 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.5 }}
                              className="pl-12"
                            >
                              <time className="block text-xs font-bold text-blue-600 dark:text-blue-400 mb-2">
                                {event.date}
                              </time>
                              <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-2">
                                {event.title}
                              </h3>
                              <p className="text-sm text-gray-600 dark:text-gray-400">
                                {event.description}
                              </p>
                            </motion.div>
                          </>
                        )}
                      </div>

                      {/* Center dot */}
                      <div className="absolute left-1/2 top-0 w-4 h-4 bg-blue-600 rounded-full -ml-2 ring-4 ring-white dark:ring-gray-900" />

                      {/* Curved connector to next item */}
                      {idx < events.length - 1 && (
                        <svg
                          className="absolute left-1/2 -ml-px w-24 h-16 pointer-events-none"
                          style={{ top: "1rem" }}
                        >
                          <path
                            d={
                              isLeft
                                ? "M 0 0 Q 30 20, 0 40"
                                : "M 0 0 Q -30 20, 0 40"
                            }
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            className="text-gray-300 dark:text-gray-700"
                          />
                        </svg>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Mobile: Vertical */}
          <div className="md:hidden space-y-8">
            {events.map((event, idx) => (
              <motion.div
                key={event.id || idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <time className="block text-xs font-bold text-blue-600 dark:text-blue-400 mb-2">
                  {event.date}
                </time>
                <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-2">
                  {event.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {event.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Vertical orientation with curved connectors
  return (
    <section className={`py-12 px-4 ${className}`}>
      <div className="max-w-3xl mx-auto">
        <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
          Our Story
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-10">
          The path that led us here
        </p>

        <div className="relative pl-12">
          {events.map((event, idx) => (
            <motion.div
              key={event.id || idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative mb-12 last:mb-0"
            >
              {/* Dot */}
              <div className="absolute -left-12 top-0 w-4 h-4 bg-blue-600 rounded-full ring-4 ring-white dark:ring-gray-900" />

              {/* Curved line to next item */}
              {idx < events.length - 1 && (
                <svg
                  className="absolute -left-12 w-16 h-16 pointer-events-none"
                  style={{ top: "1rem" }}
                >
                  <path
                    d="M 8 0 Q 8 30, 8 60"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-gray-300 dark:text-gray-700"
                  />
                </svg>
              )}

              {/* Content */}
              <time className="block text-xs font-bold text-blue-600 dark:text-blue-400 mb-2">
                {event.date}
              </time>
              <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-2">
                {event.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {event.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
