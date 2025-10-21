"use client";

import { Calendar } from "lucide-react";

interface TimelineEvent {
  id?: string;
  date: string;
  title: string;
  description: string;
  image?: string;
}

interface ImageTimelineProps {
  events?: TimelineEvent[];
  className?: string;
}

export function ImageTimeline({ events: customEvents, className = "" }: ImageTimelineProps) {
  const defaultEvents: TimelineEvent[] = [
    {
      id: "1",
      date: "December 2024",
      title: "Annual Conference",
      description: "Hosted our biggest event with 5,000 attendees from around the world.",
      image: "/placeholder-conference.jpg",
    },
    {
      id: "2",
      date: "October 2024",
      title: "New Office Opening",
      description: "Opened our new headquarters with state-of-the-art facilities.",
      image: "/placeholder-office.jpg",
    },
    {
      id: "3",
      date: "August 2024",
      title: "Team Retreat",
      description: "Company-wide retreat to celebrate achievements and plan for the future.",
      image: "/placeholder-retreat.jpg",
    },
    {
      id: "4",
      date: "June 2024",
      title: "Product Launch Event",
      description: "Unveiled our latest product to enthusiastic audience and press.",
      image: "/placeholder-launch.jpg",
    },
  ];

  const events = customEvents || defaultEvents;

  return (
    <section className={`py-12 px-4 ${className}`}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
          Event Highlights
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-10">
          Visual journey through our key moments
        </p>

        <div className="space-y-8">
          {events.map((event, idx) => (
            <div
              key={event.id || idx}
              className="flex flex-col md:flex-row gap-5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
            >
              {/* Image */}
              <div className="md:w-64 flex-shrink-0 bg-gray-200 dark:bg-gray-700 aspect-video md:aspect-square relative overflow-hidden">
                {event.image ? (
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <Calendar className="w-12 h-12 text-gray-400 dark:text-gray-600" />
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="flex-1 p-5 md:p-6">
                <time className="block text-xs font-medium text-gray-500 dark:text-gray-400 mb-2">
                  {event.date}
                </time>
                <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-2">
                  {event.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
