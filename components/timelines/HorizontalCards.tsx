"use client";

import { ArrowRight, CheckCircle2, Clock, Rocket } from "lucide-react";

interface TimelineEvent {
  id?: string;
  date: string;
  title: string;
  description: string;
  icon?: "check" | "clock" | "rocket";
}

interface HorizontalCardsProps {
  events?: TimelineEvent[];
  className?: string;
}

export function HorizontalCards({ events: customEvents, className = "" }: HorizontalCardsProps) {
  const defaultEvents: TimelineEvent[] = [
    {
      id: "1",
      date: "Week 1",
      title: "Discovery",
      description: "Research and user interviews",
      icon: "check",
    },
    {
      id: "2",
      date: "Week 2-3",
      title: "Design",
      description: "Wireframes and prototypes",
      icon: "check",
    },
    {
      id: "3",
      date: "Week 4-6",
      title: "Development",
      description: "Building core features",
      icon: "clock",
    },
    {
      id: "4",
      date: "Week 7",
      title: "Testing",
      description: "QA and user testing",
      icon: "rocket",
    },
    {
      id: "5",
      date: "Week 8",
      title: "Launch",
      description: "Production deployment",
      icon: "rocket",
    },
  ];

  const events = customEvents || defaultEvents;

  const getIcon = (iconType?: string) => {
    switch (iconType) {
      case "check":
        return <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400" />;
      case "clock":
        return <Clock className="w-5 h-5 text-blue-600 dark:text-blue-400" />;
      case "rocket":
        return <Rocket className="w-5 h-5 text-purple-600 dark:text-purple-400" />;
      default:
        return <CheckCircle2 className="w-5 h-5 text-gray-600 dark:text-gray-400" />;
    }
  };

  return (
    <section className={`py-12 px-4 ${className}`}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
          Sprint Timeline
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-8">
          Our 8-week development cycle
        </p>

        <div className="relative">
          {/* Horizontal scroll container */}
          <div className="overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-700">
            <div className="flex gap-4 min-w-max px-1">
              {events.map((event, idx) => (
                <div key={event.id || idx} className="flex items-center">
                  {/* Card */}
                  <div className="w-64 flex-shrink-0 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="flex-shrink-0 w-9 h-9 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
                        {getIcon(event.icon)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <time className="block text-xs text-gray-500 dark:text-gray-400 mb-1">
                          {event.date}
                        </time>
                        <h3 className="text-sm font-semibold text-gray-900 dark:text-white truncate">
                          {event.title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-xs text-gray-600 dark:text-gray-400 line-clamp-2">
                      {event.description}
                    </p>
                  </div>

                  {/* Arrow connector */}
                  {idx < events.length - 1 && (
                    <ArrowRight className="mx-2 flex-shrink-0 w-5 h-5 text-gray-400 dark:text-gray-600" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Scroll hint */}
          <div className="flex justify-center mt-4">
            <p className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1">
              <ArrowRight className="w-3 h-3" />
              Scroll to view all phases
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
