"use client";

import { Circle } from "lucide-react";

interface HistoryEvent {
  date: string;
  title: string;
  description: string;
}

interface YearGroup {
  year: string;
  events: HistoryEvent[];
}

interface HistoryTimelineProps {
  yearGroups?: YearGroup[];
  className?: string;
}

export function HistoryTimeline({ yearGroups: customYearGroups, className = "" }: HistoryTimelineProps) {
  const defaultYearGroups: YearGroup[] = [
    {
      year: "2024",
      events: [
        {
          date: "October",
          title: "Global Expansion",
          description: "Opened offices in London, Tokyo, and Singapore.",
        },
        {
          date: "June",
          title: "Series B Funding",
          description: "Raised $25M to accelerate product development.",
        },
        {
          date: "February",
          title: "Product 2.0 Launch",
          description: "Complete platform redesign with new features.",
        },
      ],
    },
    {
      year: "2023",
      events: [
        {
          date: "November",
          title: "100K Users",
          description: "Reached the milestone of 100,000 active users.",
        },
        {
          date: "July",
          title: "Mobile App",
          description: "Released iOS and Android applications.",
        },
        {
          date: "March",
          title: "Series A",
          description: "Secured $10M Series A funding round.",
        },
      ],
    },
    {
      year: "2022",
      events: [
        {
          date: "September",
          title: "Public Beta",
          description: "Opened platform to public beta testers.",
        },
        {
          date: "January",
          title: "Company Founded",
          description: "Started with a team of 5 in San Francisco.",
        },
      ],
    },
  ];

  const yearGroups = customYearGroups || defaultYearGroups;

  return (
    <section className={`py-12 px-4 ${className}`}>
      <div className="max-w-3xl mx-auto">
        <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
          Company History
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-10">
          Our journey from founding to today
        </p>

        <div className="relative">
          <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-700" />

          <div className="space-y-10">
            {yearGroups.map((yearGroup, yearIdx) => (
              <div key={yearIdx} className="relative">
                {/* Year header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center relative z-10">
                    <Circle className="w-2 h-2 fill-white text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {yearGroup.year}
                  </h3>
                </div>

                {/* Events for this year */}
                <div className="ml-6 space-y-5">
                  {yearGroup.events.map((event, eventIdx) => (
                    <div key={eventIdx} className="relative pl-6 border-l-2 border-gray-200 dark:border-gray-800">
                      <time className="block text-xs font-medium text-gray-500 dark:text-gray-400 mb-1">
                        {event.date}
                      </time>
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
                        {event.title}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {event.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Est. marker at bottom */}
          <div className="flex items-center gap-4 mt-6 ml-0">
            <div className="w-6 h-6 rounded-full bg-gray-400 dark:bg-gray-600 flex items-center justify-center relative z-10">
              <Circle className="w-2 h-2 fill-white text-white" />
            </div>
            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
              Est. {yearGroups[yearGroups.length - 1].year}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
