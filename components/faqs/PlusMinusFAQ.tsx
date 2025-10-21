'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

interface FAQ {
  id: string;
  question: string;
  answer: string;
}

interface PlusMinusFAQProps {
  className?: string;
  faqs?: FAQ[];
}

const defaultFAQs: FAQ[] = [
  {
    id: '1',
    question: 'How does your pricing work?',
    answer:
      'Our pricing is based on the number of users and features you need. We offer monthly and annual billing options, with annual plans receiving a 20% discount. You can start with our free plan and upgrade as your needs grow.',
  },
  {
    id: '2',
    question: 'What happens to my data if I cancel?',
    answer:
      'Your data remains accessible for 30 days after cancellation. During this period, you can export all your data or reactivate your subscription. After 30 days, data is permanently deleted from our servers in compliance with data protection regulations.',
  },
  {
    id: '3',
    question: 'Can I integrate with other tools?',
    answer:
      'Yes, we offer integrations with over 100 popular tools including Slack, Google Workspace, Microsoft Teams, Salesforce, and more. We also provide a REST API and webhooks for custom integrations.',
  },
  {
    id: '4',
    question: 'Do you provide training and onboarding?',
    answer:
      'We provide comprehensive documentation, video tutorials, and webinars for all users. Enterprise customers receive personalized onboarding sessions with dedicated training specialists to ensure your team gets up to speed quickly.',
  },
  {
    id: '5',
    question: 'What are your uptime guarantees?',
    answer:
      'We maintain a 99.9% uptime SLA for all paid plans. Our infrastructure is hosted on AWS with redundancy across multiple regions. We provide real-time status updates and incident reports on our status page.',
  },
  {
    id: '6',
    question: 'Can I customize the platform for my brand?',
    answer:
      'Yes, Professional and Enterprise plans include white-labeling options. You can customize colors, logos, domain names, and even remove our branding entirely to create a seamless experience for your users.',
  },
  {
    id: '7',
    question: 'How do you handle data backups?',
    answer:
      'We perform automated backups every 6 hours with 30-day retention. Enterprise customers can request custom backup schedules and longer retention periods. All backups are encrypted and stored in geographically distributed locations.',
  },
];

export default function PlusMinusFAQ({
  className = '',
  faqs = defaultFAQs,
}: PlusMinusFAQProps) {
  const [openIds, setOpenIds] = useState<Set<string>>(new Set());

  const toggleFAQ = (id: string) => {
    setOpenIds((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const handleKeyDown = (e: React.KeyboardEvent, id: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleFAQ(id);
    }
  };

  return (
    <div className={`w-full max-w-4xl mx-auto px-4 py-12 ${className}`}>
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
          Common Questions
        </h2>
        <p className="text-base text-gray-600 dark:text-gray-400">
          Everything you need to know about our platform
        </p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq) => {
          const isOpen = openIds.has(faq.id);

          return (
            <div
              key={faq.id}
              className="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 overflow-hidden hover:border-gray-300 dark:hover:border-gray-700 transition-colors"
            >
              <div
                role="button"
                tabIndex={0}
                aria-expanded={isOpen}
                aria-controls={`answer-${faq.id}`}
                onClick={() => toggleFAQ(faq.id)}
                onKeyDown={(e) => handleKeyDown(e, faq.id)}
                className="w-full px-6 py-5 flex items-start justify-between cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
              >
                <h3 className="text-base font-medium text-gray-900 dark:text-white pr-8 text-left">
                  {faq.question}
                </h3>
                <motion.div
                  initial={false}
                  animate={{ rotate: isOpen ? 90 : 0 }}
                  transition={{ duration: 0.2, ease: 'easeInOut' as const }}
                  className="flex-shrink-0 mt-0.5"
                >
                  {isOpen ? (
                    <Minus className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  ) : (
                    <Plus className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                  )}
                </motion.div>
              </div>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    id={`answer-${faq.id}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' as const }}
                    style={{ overflow: 'hidden' }}
                  >
                    <div className="px-6 pb-5 pt-0">
                      <div className="border-t border-gray-200 dark:border-gray-800 pt-4">
                        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      <div className="mt-12 text-center bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Need more help?{' '}
          <a
            href="#support"
            className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
          >
            Visit our help center
          </a>{' '}
          or{' '}
          <a
            href="#chat"
            className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
          >
            chat with support
          </a>
        </p>
      </div>
    </div>
  );
}
