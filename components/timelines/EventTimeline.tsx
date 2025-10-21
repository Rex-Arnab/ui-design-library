"use client";

import { Calendar, MapPin, Users } from "lucide-react";

interface TimelineEvent {
  id?: string;
  date: string;
  time: string;
  title: string;
  type: "meeting" | "launch" | "update" | "deadline";
  location?: string;
  participants?: string;
}

interface EventTimelineProps {
  events?: TimelineEvent[];
  className?: string;
}

export function EventTimeline({ events: customEvents, className = "" }: EventTimelineProps) {
  const defaultEvents: TimelineEvent[] = [
    {
      id: "1",
      date: "Dec 15, 2024",
      time: "2:00 PM",
      title: "Product Launch Event",
      type: "launch",
      location: "Virtual Event",
      participants: "All team members",
    },
    {
      id: "2",
      date: "Dec 12, 2024",
      time: "10:30 AM",
      title: "Engineering Team Sync",
      type: "meeting",
      location: "Conference Room A",
      participants: "Engineering team",
    },
    {
      id: "3",
      date: "Dec 10, 2024",
      time: "3:00 PM",
      title: "Platform Update v2.5",
      type: "update",
      location: "Production",
    },
    {
      id: "4",
      date: "Dec 8, 2024",
      time: "5:00 PM",
      title: "Q4 Report Deadline",
      type: "deadline",
      location: "Finance Department",
    },
    {
      id: "5",
      date: "Dec 5, 2024",
      time: "11:00 AM",
      title: "Client Presentation",
      type: "meeting",
      location: "Client Office",
      participants: "Sales team + Client",
    },
  ];

  const events = customEvents || defaultEvents;

  const getTypeStyles = (type: string) => {
    switch (type) {
      case "meeting":
        return "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400";
      case "launch":
        return "bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400";
      case "update":
        return "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400";
      case "deadline":
        return "bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400";
      default:
        return "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-400";
    }
  };

  return (
    <section className={`py-12 px-4 ${className}`}>
      <div className="max-w-3xl mx-auto">
        <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
          Upcoming Events
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-8">
          Stay updated with our latest activities
        </p>

        <div className="space-y-4">
          {events.map((event, idx) => (
            <div
              key={event.id || idx}
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <div className="flex items-start gap-3 flex-1">
                  <Calendar className="w-5 h-5 text-gray-400 dark:text-gray-500 flex-shrink-0 mt-0.5" />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <time className="text-xs font-medium text-gray-900 dark:text-white">
                        {event.date}
                      </time>
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        {event.time}
                      </span>
                    </div>
                    <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
                      {event.title}
                    </h3>
                  </div>
                </div>

                <span
                  className={`px-2 py-1 text-xs font-medium rounded flex-shrink-0 ${getTypeStyles(
                    event.type
                  )}`}
                >
                  {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                </span>
              </div>

              <div className="ml-8 space-y-1">
                {event.location && (
                  <div className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{event.location}</span>
                  </div>
                )}
                {event.participants && (
                  <div className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400">
                    <Users className="w-3.5 h-3.5" />
                    <span>{event.participants}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
