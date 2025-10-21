"use client";

import { Circle } from "lucide-react";

interface TimelineEvent {
  id?: string;
  date: string;
  title: string;
  description?: string;
}

interface HorizontalSimpleProps {
  events?: TimelineEvent[];
  className?: string;
}

export function HorizontalSimple({ events: customEvents, className = "" }: HorizontalSimpleProps) {
  const defaultEvents: TimelineEvent[] = [
    {
      id: "1",
      date: "Q1 2024",
      title: "Planning",
      description: "Strategy & roadmap",
    },
    {
      id: "2",
      date: "Q2 2024",
      title: "Development",
      description: "Core features",
    },
    {
      id: "3",
      date: "Q3 2024",
      title: "Testing",
      description: "QA & feedback",
    },
    {
      id: "4",
      date: "Q4 2024",
      title: "Launch",
      description: "Public release",
    },
  ];

  const events = customEvents || defaultEvents;

  return (
    <section className={`py-12 px-4 ${className}`}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-2 text-center">
          2024 Roadmap
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-12 text-center">
          Our quarterly milestones
        </p>

        {/* Desktop: Horizontal */}
        <div className="hidden md:block">
          <div className="relative">
            <div className="absolute left-0 right-0 top-4 h-0.5 bg-gray-300 dark:bg-gray-700" />

            <div className="relative grid grid-cols-4 gap-4">
              {events.map((event, idx) => (
                <div key={event.id || idx} className="text-center">
                  <div className="flex justify-center mb-3">
                    <div className="w-8 h-8 rounded-full bg-blue-600 border-4 border-white dark:border-gray-900 flex items-center justify-center relative z-10">
                      <Circle className="w-3 h-3 fill-white text-white" />
                    </div>
                  </div>

                  <time className="block text-xs font-medium text-gray-500 dark:text-gray-400 mb-1">
                    {event.date}
                  </time>

                  <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
                    {event.title}
                  </h3>

                  {event.description && (
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      {event.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile: Vertical */}
        <div className="md:hidden">
          <ol className="relative border-l-2 border-gray-300 dark:border-gray-700 ml-3">
            {events.map((event, idx) => (
              <li key={event.id || idx} className="mb-8 last:mb-0 ml-6">
                <span className="absolute flex items-center justify-center w-4 h-4 bg-white dark:bg-gray-900 border-2 border-blue-600 rounded-full -left-2.5 ring-4 ring-white dark:ring-gray-900">
                  <Circle className="w-1.5 h-1.5 fill-blue-600 text-blue-600" />
                </span>

                <time className="block text-xs font-medium text-gray-500 dark:text-gray-400 mb-1">
                  {event.date}
                </time>

                <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
                  {event.title}
                </h3>

                {event.description && (
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                    {event.description}
                  </p>
                )}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
