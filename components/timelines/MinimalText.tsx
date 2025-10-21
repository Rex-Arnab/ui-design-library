"use client";

interface TimelineEvent {
  id?: string;
  date: string;
  title: string;
  description?: string;
}

interface MinimalTextProps {
  events?: TimelineEvent[];
  className?: string;
}

export function MinimalText({ events: customEvents, className = "" }: MinimalTextProps) {
  const defaultEvents: TimelineEvent[] = [
    {
      id: "1",
      date: "2024",
      title: "Platform reaches 1M users globally",
      description: "Expanded to 100+ countries with localized support.",
    },
    {
      id: "2",
      date: "2023",
      title: "Series C funding of $100M raised",
      description: "Led by premier venture capital firms.",
    },
    {
      id: "3",
      date: "2022",
      title: "Launched enterprise solution",
      description: "Custom features for Fortune 500 companies.",
    },
    {
      id: "4",
      date: "2021",
      title: "Mobile app downloaded 10M times",
      description: "Top-rated in app stores worldwide.",
    },
    {
      id: "5",
      date: "2020",
      title: "Company founded in San Francisco",
      description: "Started with a team of 4 passionate individuals.",
    },
  ];

  const events = customEvents || defaultEvents;

  return (
    <section className={`py-16 px-4 ${className}`}>
      <div className="max-w-2xl mx-auto">
        <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-16 text-center">
          Milestones
        </h2>

        <div className="space-y-12">
          {events.map((event, idx) => (
            <div key={event.id || idx} className="group">
              <time className="block text-xs font-medium text-gray-400 dark:text-gray-600 mb-3 tracking-wider uppercase">
                {event.date}
              </time>
              <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-2 leading-relaxed">
                {event.title}
              </h3>
              {event.description && (
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                  {event.description}
                </p>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800">
          <p className="text-xs text-gray-400 dark:text-gray-600 text-center tracking-wider uppercase">
            The journey continues
          </p>
        </div>
      </div>
    </section>
  );
}
