"use client";



interface ComparisonEvent {
  date: string;
  companyA: {
    title: string;
    description: string;
  };
  companyB: {
    title: string;
    description: string;
  };
}

interface ComparisonProps {
  events?: ComparisonEvent[];
  labelA?: string;
  labelB?: string;
  className?: string;
}

export function Comparison({
  events: customEvents,
  labelA = "Company A",
  labelB = "Company B",
  className = "",
}: ComparisonProps) {
  const defaultEvents: ComparisonEvent[] = [
    {
      date: "2024",
      companyA: {
        title: "AI Integration",
        description: "Launched AI-powered analytics with machine learning capabilities.",
      },
      companyB: {
        title: "Basic Analytics",
        description: "Released standard reporting dashboard with manual insights.",
      },
    },
    {
      date: "2023",
      companyA: {
        title: "Global Expansion",
        description: "Opened offices in 10 countries with 24/7 support.",
      },
      companyB: {
        title: "Regional Focus",
        description: "Maintained operations in 3 countries with limited hours.",
      },
    },
    {
      date: "2022",
      companyA: {
        title: "Series B - $50M",
        description: "Raised significant funding for rapid scaling.",
      },
      companyB: {
        title: "Series A - $10M",
        description: "Secured initial growth capital from investors.",
      },
    },
    {
      date: "2021",
      companyA: {
        title: "Mobile-First Launch",
        description: "Released native iOS and Android apps from day one.",
      },
      companyB: {
        title: "Web Only",
        description: "Started with web platform, mobile planned for future.",
      },
    },
  ];

  const events = customEvents || defaultEvents;

  return (
    <section className={`py-12 px-4 ${className}`}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-2 text-center">
          Side-by-Side Comparison
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-12 text-center">
          Compare our journey with industry competitors
        </p>

        {/* Desktop: Side by side */}
        <div className="hidden md:block">
          <div className="relative">
            {/* Headers */}
            <div className="grid grid-cols-2 gap-8 mb-8">
              <div className="text-center">
                <h3 className="text-base font-bold text-blue-600 dark:text-blue-400">
                  {labelA}
                </h3>
              </div>
              <div className="text-center">
                <h3 className="text-base font-bold text-gray-600 dark:text-gray-400">
                  {labelB}
                </h3>
              </div>
            </div>

            {/* Center timeline line */}
            <div className="absolute left-1/2 top-20 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-700 -ml-px" />

            {/* Events */}
            <div className="space-y-10">
              {events.map((event, idx) => (
                <div key={idx} className="relative">
                  {/* Center date marker */}
                  <div className="absolute left-1/2 -translate-x-1/2 -top-2 z-10">
                    <div className="bg-white dark:bg-gray-900 px-3 py-1 rounded-full border-2 border-blue-600 ring-4 ring-white dark:ring-gray-900">
                      <span className="text-xs font-bold text-blue-600 dark:text-blue-400">
                        {event.date}
                      </span>
                    </div>
                  </div>

                  {/* Two columns */}
                  <div className="grid grid-cols-2 gap-8 pt-6">
                    {/* Company A - Left */}
                    <div className="text-right pr-8">
                      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                        <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
                          {event.companyA.title}
                        </h4>
                        <p className="text-xs text-gray-600 dark:text-gray-400">
                          {event.companyA.description}
                        </p>
                      </div>
                    </div>

                    {/* Company B - Right */}
                    <div className="pl-8">
                      <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                        <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
                          {event.companyB.title}
                        </h4>
                        <p className="text-xs text-gray-600 dark:text-gray-400">
                          {event.companyB.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile: Stacked */}
        <div className="md:hidden space-y-8">
          {events.map((event, idx) => (
            <div key={idx} className="space-y-4">
              <div className="flex items-center justify-center">
                <div className="bg-blue-600 px-3 py-1 rounded-full">
                  <span className="text-xs font-bold text-white">{event.date}</span>
                </div>
              </div>

              <div className="space-y-3">
                <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                  <div className="text-xs font-medium text-blue-600 dark:text-blue-400 mb-2">
                    {labelA}
                  </div>
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
                    {event.companyA.title}
                  </h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    {event.companyA.description}
                  </p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                  <div className="text-xs font-medium text-gray-600 dark:text-gray-400 mb-2">
                    {labelB}
                  </div>
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
                    {event.companyB.title}
                  </h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    {event.companyB.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
