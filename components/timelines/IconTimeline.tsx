"use client";

import { Bell, CheckCircle2, Code, Rocket, Users, Zap } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface TimelineEvent {
  id?: string;
  date: string;
  title: string;
  description: string;
  icon: "rocket" | "check" | "bell" | "users" | "code" | "zap";
  color?: "blue" | "green" | "purple" | "orange" | "red" | "indigo";
}

interface IconTimelineProps {
  events?: TimelineEvent[];
  className?: string;
}

export function IconTimeline({ events: customEvents, className = "" }: IconTimelineProps) {
  const defaultEvents: TimelineEvent[] = [
    {
      id: "1",
      date: "Dec 2024",
      title: "Product Launch",
      description: "Successfully launched version 2.0 to all users worldwide.",
      icon: "rocket",
      color: "blue",
    },
    {
      id: "2",
      date: "Nov 2024",
      title: "Feature Complete",
      description: "All planned features implemented and tested.",
      icon: "check",
      color: "green",
    },
    {
      id: "3",
      date: "Oct 2024",
      title: "Beta Release",
      description: "Opened beta program to 1,000 early adopters.",
      icon: "bell",
      color: "purple",
    },
    {
      id: "4",
      date: "Sep 2024",
      title: "Team Expansion",
      description: "Hired 15 new team members across all departments.",
      icon: "users",
      color: "orange",
    },
    {
      id: "5",
      date: "Aug 2024",
      title: "Development Start",
      description: "Kicked off development sprint with core features.",
      icon: "code",
      color: "indigo",
    },
  ];

  const events = customEvents || defaultEvents;

  const iconMap: Record<string, LucideIcon> = {
    rocket: Rocket,
    check: CheckCircle2,
    bell: Bell,
    users: Users,
    code: Code,
    zap: Zap,
  };

  const colorMap: Record<string, { bg: string; text: string }> = {
    blue: { bg: "bg-blue-100 dark:bg-blue-900/30", text: "text-blue-600 dark:text-blue-400" },
    green: { bg: "bg-green-100 dark:bg-green-900/30", text: "text-green-600 dark:text-green-400" },
    purple: {
      bg: "bg-purple-100 dark:bg-purple-900/30",
      text: "text-purple-600 dark:text-purple-400",
    },
    orange: {
      bg: "bg-orange-100 dark:bg-orange-900/30",
      text: "text-orange-600 dark:text-orange-400",
    },
    red: { bg: "bg-red-100 dark:bg-red-900/30", text: "text-red-600 dark:text-red-400" },
    indigo: {
      bg: "bg-indigo-100 dark:bg-indigo-900/30",
      text: "text-indigo-600 dark:text-indigo-400",
    },
  };

  const getIcon = (iconType: string) => {
    const Icon = iconMap[iconType] || Rocket;
    return Icon;
  };

  const getColors = (color?: string) => {
    return colorMap[color || "blue"];
  };

  return (
    <section className={`py-12 px-4 ${className}`}>
      <div className="max-w-3xl mx-auto">
        <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
          Development Timeline
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-10">
          Track our progress from concept to launch
        </p>

        <div className="space-y-6">
          {events.map((event, idx) => {
            const Icon = getIcon(event.icon);
            const colors = getColors(event.color);

            return (
              <div key={event.id || idx} className="flex items-start gap-4">
                {/* Icon */}
                <div
                  className={`flex-shrink-0 w-12 h-12 rounded-full ${colors.bg} flex items-center justify-center`}
                >
                  <Icon className={`w-6 h-6 ${colors.text}`} />
                </div>

                {/* Content */}
                <div className="flex-1 pt-1">
                  <time className="block text-xs font-medium text-gray-500 dark:text-gray-400 mb-1">
                    {event.date}
                  </time>
                  <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-1">
                    {event.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {event.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
