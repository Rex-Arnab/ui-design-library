"use client";

import { motion, useInView } from "framer-motion";
import { Circle } from "lucide-react";
import { useRef } from "react";

interface TimelineEvent {
  id?: string;
  date: string;
  title: string;
  description: string;
}

interface AnimatedProps {
  events?: TimelineEvent[];
  className?: string;
}

export function Animated({ events: customEvents, className = "" }: AnimatedProps) {
  const defaultEvents: TimelineEvent[] = [
    {
      id: "1",
      date: "2024",
      title: "Global Expansion",
      description: "Expanded operations to 15 new countries across Europe and Asia.",
    },
    {
      id: "2",
      date: "2023",
      title: "Platform Evolution",
      description: "Launched next-generation platform with AI-powered features.",
    },
    {
      id: "3",
      date: "2022",
      title: "Market Leader",
      description: "Became the #1 solution in our category with 40% market share.",
    },
    {
      id: "4",
      date: "2021",
      title: "Series A Success",
      description: "Raised $15M in Series A funding from top-tier investors.",
    },
    {
      id: "5",
      date: "2020",
      title: "Founded",
      description: "Company founded with a vision to transform the industry.",
    },
  ];

  const events = customEvents || defaultEvents;
  const lineRef = useRef(null);
  const isLineInView = useInView(lineRef, { once: true, margin: "-100px" });

  return (
    <section className={`py-12 px-4 ${className}`}>
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
            Our Journey
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-10">
            Scroll to reveal our story
          </p>
        </motion.div>

        <div className="relative" ref={lineRef}>
          {/* Animated vertical line */}
          <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-800">
            <motion.div
              className="w-full bg-blue-600"
              initial={{ height: 0 }}
              animate={isLineInView ? { height: "100%" } : { height: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" as const }}
            />
          </div>

          <div className="space-y-10">
            {events.map((event, idx) => (
              <TimelineItem key={event.id || idx} event={event} index={idx} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineItem({ event, index }: { event: TimelineEvent; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative pl-10"
    >
      {/* Animated dot */}
      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
        className="absolute left-0 top-0"
      >
        <div className="w-6 h-6 rounded-full bg-white dark:bg-gray-900 border-2 border-blue-600 flex items-center justify-center ring-4 ring-white dark:ring-gray-900">
          <Circle className="w-2 h-2 fill-blue-600 text-blue-600" />
        </div>
      </motion.div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
      >
        <time className="block text-xs font-bold text-blue-600 dark:text-blue-400 mb-2">
          {event.date}
        </time>
        <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-2">
          {event.title}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
          {event.description}
        </p>
      </motion.div>
    </motion.div>
  );
}
