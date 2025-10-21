"use client";

import { Circle } from "lucide-react";

interface TimelineEvent {
  id?: string;
  date: string;
  title: string;
  description?: string;
}

interface VerticalSimpleProps {
  events?: TimelineEvent[];
  className?: string;
}

export function VerticalSimple({ events: customEvents, className = "" }: VerticalSimpleProps) {
  const defaultEvents: TimelineEvent[] = [
    {
      id: "1",
      date: "Jan 2024",
      title: "Project Kickoff",
      description: "Initial planning phase with stakeholder meetings and requirement gathering sessions.",
    },
    {
      id: "2",
      date: "Feb 2024",
      title: "Development Start",
      description: "Core features implementation begins with frontend and backend setup.",
    },
    {
      id: "3",
      date: "Mar 2024",
      title: "Alpha Release",
      description: "First internal release for testing with key features implemented.",
    },
    {
      id: "4",
      date: "Apr 2024",
      title: "Beta Testing",
      description: "Public beta launch with selected users providing feedback.",
    },
    {
      id: "5",
      date: "May 2024",
      title: "Production Launch",
      description: "Official release to all users with full feature set available.",
    },
  ];

  const events = customEvents || defaultEvents;

  return (
    <section className={`py-12 px-4 ${className}`}>
      <div className="max-w-3xl mx-auto">
        <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
          Project Timeline
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-8">
          Track our journey from concept to launch
        </p>

        <ol className="relative border-l-2 border-gray-300 dark:border-gray-700 ml-3">
          {events.map((event, idx) => (
            <li key={event.id || idx} className="mb-8 last:mb-0 ml-6">
              <span className="absolute flex items-center justify-center w-4 h-4 bg-white dark:bg-gray-900 border-2 border-blue-600 rounded-full -left-2.5 ring-4 ring-white dark:ring-gray-900">
                <Circle className="w-1.5 h-1.5 fill-blue-600 text-blue-600" />
              </span>

              <time className="block text-xs font-medium text-gray-500 dark:text-gray-400 mb-1">
                {event.date}
              </time>

              <h3 className="text-base font-semibold text-gray-900 dark:text-white">
                {event.title}
              </h3>

              {event.description && (
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  {event.description}
                </p>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
