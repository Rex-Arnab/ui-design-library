"use client";

import { Clock } from "lucide-react";

interface ProcessStep {
  id?: string;
  number: number;
  title: string;
  instructions: string;
  timeEstimate?: string;
}

interface StepByStepProps {
  steps?: ProcessStep[];
  className?: string;
}

export function StepByStep({ steps: customSteps, className = "" }: StepByStepProps) {
  const defaultSteps: ProcessStep[] = [
    {
      id: "1",
      number: 1,
      title: "Create Your Account",
      instructions:
        "Fill out the registration form with your email and create a secure password. Verify your email address by clicking the link we send you.",
      timeEstimate: "2 minutes",
    },
    {
      id: "2",
      number: 2,
      title: "Set Up Your Profile",
      instructions:
        "Add your personal information, upload a profile photo, and tell us about your interests. This helps us personalize your experience.",
      timeEstimate: "5 minutes",
    },
    {
      id: "3",
      number: 3,
      title: "Connect Your Tools",
      instructions:
        "Integrate with your favorite apps and services. We support over 50 integrations including Slack, Google Drive, and GitHub.",
      timeEstimate: "10 minutes",
    },
    {
      id: "4",
      number: 4,
      title: "Invite Team Members",
      instructions:
        "Add your colleagues to collaborate together. Send invitations via email and assign appropriate roles and permissions.",
      timeEstimate: "3 minutes",
    },
    {
      id: "5",
      number: 5,
      title: "Start Creating",
      instructions:
        "You're all set! Create your first project and explore all the features. Check out our tutorial videos and documentation for guidance.",
      timeEstimate: "1 minute",
    },
  ];

  const steps = customSteps || defaultSteps;

  return (
    <section className={`py-12 px-4 ${className}`}>
      <div className="max-w-3xl mx-auto">
        <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
          Getting Started Guide
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-10">
          Follow these steps to set up your account
        </p>

        <div className="space-y-6">
          {steps.map((step, idx) => (
            <div
              key={step.id || idx}
              className="flex gap-5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-5 hover:shadow-md transition-shadow"
            >
              {/* Number circle */}
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center">
                  <span className="text-lg font-bold text-white">{step.number}</span>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <h3 className="text-base font-semibold text-gray-900 dark:text-white">
                    {step.title}
                  </h3>
                  {step.timeEstimate && (
                    <div className="flex items-center gap-1 px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded text-xs text-gray-600 dark:text-gray-400 flex-shrink-0">
                      <Clock className="w-3 h-3" />
                      {step.timeEstimate}
                    </div>
                  )}
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {step.instructions}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
          <p className="text-sm text-blue-900 dark:text-blue-300">
            <span className="font-semibold">Total estimated time:</span>{" "}
            {steps.reduce((acc, step) => {
              if (!step.timeEstimate) return acc;
              const minutes = parseInt(step.timeEstimate);
              return acc + (isNaN(minutes) ? 0 : minutes);
            }, 0)}{" "}
            minutes
          </p>
        </div>
      </div>
    </section>
  );
}
