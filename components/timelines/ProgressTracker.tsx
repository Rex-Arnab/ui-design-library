"use client";

import { Check } from "lucide-react";

interface ProgressStep {
  id?: string;
  number: number;
  title: string;
  description: string;
  status: "completed" | "current" | "upcoming";
}

interface ProgressTrackerProps {
  steps?: ProgressStep[];
  className?: string;
}

export function ProgressTracker({ steps: customSteps, className = "" }: ProgressTrackerProps) {
  const defaultSteps: ProgressStep[] = [
    {
      id: "1",
      number: 1,
      title: "Create Account",
      description: "Sign up with email and password",
      status: "completed",
    },
    {
      id: "2",
      number: 2,
      title: "Verify Email",
      description: "Click the link we sent you",
      status: "completed",
    },
    {
      id: "3",
      number: 3,
      title: "Complete Profile",
      description: "Add your personal information",
      status: "current",
    },
    {
      id: "4",
      number: 4,
      title: "Start Using",
      description: "Explore features and get started",
      status: "upcoming",
    },
  ];

  const steps = customSteps || defaultSteps;

  const getStepStyles = (status: string) => {
    switch (status) {
      case "completed":
        return {
          circle: "bg-green-600 border-green-600 text-white",
          text: "text-gray-900 dark:text-white",
          line: "bg-green-600",
        };
      case "current":
        return {
          circle: "bg-blue-600 border-blue-600 text-white ring-4 ring-blue-100 dark:ring-blue-900/30",
          text: "text-gray-900 dark:text-white",
          line: "bg-gray-300 dark:bg-gray-700",
        };
      case "upcoming":
        return {
          circle: "bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-700 text-gray-400 dark:text-gray-600",
          text: "text-gray-500 dark:text-gray-400",
          line: "bg-gray-300 dark:bg-gray-700",
        };
      default:
        return {
          circle: "bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-700 text-gray-400",
          text: "text-gray-500",
          line: "bg-gray-300",
        };
    }
  };

  return (
    <section className={`py-12 px-4 ${className}`}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-2 text-center">
          Getting Started
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-12 text-center">
          Follow these steps to complete your setup
        </p>

        {/* Desktop: Horizontal */}
        <div className="hidden md:block">
          <div className="relative">
            <div className="flex justify-between items-center">
              {steps.map((step, idx) => {
                const styles = getStepStyles(step.status);
                return (
                  <div key={step.id || idx} className="flex-1 relative">
                    <div className="flex flex-col items-center">
                      {/* Circle */}
                      <div
                        className={`w-12 h-12 rounded-full border-2 flex items-center justify-center font-semibold text-sm relative z-10 ${styles.circle}`}
                      >
                        {step.status === "completed" ? (
                          <Check className="w-5 h-5" />
                        ) : (
                          step.number
                        )}
                      </div>

                      {/* Text */}
                      <div className="mt-4 text-center">
                        <h3 className={`text-sm font-semibold mb-1 ${styles.text}`}>
                          {step.title}
                        </h3>
                        <p className="text-xs text-gray-500 dark:text-gray-400 max-w-[140px]">
                          {step.description}
                        </p>
                      </div>
                    </div>

                    {/* Connecting line */}
                    {idx < steps.length - 1 && (
                      <div className="absolute top-6 left-1/2 w-full h-0.5 -z-0">
                        <div className={`h-full ${styles.line}`} />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile: Vertical */}
        <div className="md:hidden">
          <div className="relative">
            {steps.map((step, idx) => {
              const styles = getStepStyles(step.status);
              return (
                <div key={step.id || idx} className="relative pb-8 last:pb-0">
                  <div className="flex items-start gap-4">
                    {/* Circle */}
                    <div
                      className={`w-10 h-10 rounded-full border-2 flex items-center justify-center font-semibold text-sm flex-shrink-0 ${styles.circle}`}
                    >
                      {step.status === "completed" ? (
                        <Check className="w-5 h-5" />
                      ) : (
                        step.number
                      )}
                    </div>

                    {/* Text */}
                    <div className="flex-1 pt-1">
                      <h3 className={`text-sm font-semibold mb-1 ${styles.text}`}>
                        {step.title}
                      </h3>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Connecting line */}
                  {idx < steps.length - 1 && (
                    <div className="absolute left-5 top-10 bottom-0 w-0.5 -ml-px">
                      <div className={`h-full ${styles.line}`} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
