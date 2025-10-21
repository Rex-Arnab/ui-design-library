"use client";

import { CheckCircle2, Circle, Clock } from "lucide-react";

interface RoadmapItem {
  title: string;
  status: "completed" | "in-progress" | "planned";
}

interface RoadmapQuarter {
  quarter: string;
  items: RoadmapItem[];
}

interface RoadmapProps {
  quarters?: RoadmapQuarter[];
  className?: string;
}

export function Roadmap({ quarters: customQuarters, className = "" }: RoadmapProps) {
  const defaultQuarters: RoadmapQuarter[] = [
    {
      quarter: "Q1 2024",
      items: [
        { title: "User authentication system", status: "completed" },
        { title: "Dashboard redesign", status: "completed" },
        { title: "Mobile app beta", status: "completed" },
      ],
    },
    {
      quarter: "Q2 2024",
      items: [
        { title: "Advanced analytics", status: "completed" },
        { title: "API v2 launch", status: "completed" },
        { title: "Team collaboration features", status: "in-progress" },
      ],
    },
    {
      quarter: "Q3 2024",
      items: [
        { title: "AI-powered recommendations", status: "in-progress" },
        { title: "White-label solution", status: "in-progress" },
        { title: "Enterprise SSO", status: "planned" },
      ],
    },
    {
      quarter: "Q4 2024",
      items: [
        { title: "Mobile SDK release", status: "planned" },
        { title: "Advanced security features", status: "planned" },
        { title: "Global expansion", status: "planned" },
      ],
    },
  ];

  const quarters = customQuarters || defaultQuarters;

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/30";
      case "in-progress":
        return "text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30";
      case "planned":
        return "text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-800";
      default:
        return "text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-800";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle2 className="w-4 h-4" />;
      case "in-progress":
        return <Clock className="w-4 h-4" />;
      case "planned":
        return <Circle className="w-4 h-4" />;
      default:
        return <Circle className="w-4 h-4" />;
    }
  };

  return (
    <section className={`py-12 px-4 ${className}`}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
          Product Roadmap 2024
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-8">
          Our quarterly development plans and progress
        </p>

        {/* Legend */}
        <div className="flex flex-wrap gap-4 mb-8">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400" />
            <span className="text-xs text-gray-600 dark:text-gray-400">Completed</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span className="text-xs text-gray-600 dark:text-gray-400">In Progress</span>
          </div>
          <div className="flex items-center gap-2">
            <Circle className="w-4 h-4 text-gray-600 dark:text-gray-400" />
            <span className="text-xs text-gray-600 dark:text-gray-400">Planned</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {quarters.map((quarter, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-5"
            >
              <h3 className="text-base font-bold text-gray-900 dark:text-white mb-4 pb-3 border-b border-gray-200 dark:border-gray-700">
                {quarter.quarter}
              </h3>

              <ul className="space-y-3">
                {quarter.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="flex items-start gap-2">
                    <span className={`flex-shrink-0 mt-0.5 ${getStatusColor(item.status)}`}>
                      {getStatusIcon(item.status)}
                    </span>
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      {item.title}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
