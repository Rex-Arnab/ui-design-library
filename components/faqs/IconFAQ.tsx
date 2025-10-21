'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronDown,
  CreditCard,
  Shield,
  Users,
  HelpCircle,
  Settings,
  Zap,
  Package,
  HeadphonesIcon,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface FAQ {
  id: string;
  question: string;
  answer: string;
  category?: string;
  icon?: LucideIcon;
}

interface IconFAQProps {
  className?: string;
  faqs?: FAQ[];
}

const defaultFAQs: FAQ[] = [
  {
    id: '1',
    question: 'What payment methods do you accept?',
    answer:
      'We accept all major credit cards (Visa, MasterCard, Amex), PayPal, Apple Pay, Google Pay, and bank transfers for enterprise accounts. All transactions are secured with 256-bit SSL encryption.',
    category: 'Payment',
    icon: CreditCard,
  },
  {
    id: '2',
    question: 'How secure is my data?',
    answer:
      'Your data is encrypted at rest with AES-256 and in transit with TLS 1.3. We are SOC 2 Type II certified, GDPR compliant, and conduct regular third-party security audits. Your security is our top priority.',
    category: 'Security',
    icon: Shield,
  },
  {
    id: '3',
    question: 'Can I add team members to my account?',
    answer:
      'Yes, all paid plans support multiple team members. You can invite unlimited users on Professional and Enterprise plans. Assign roles, manage permissions, and collaborate seamlessly.',
    category: 'Team',
    icon: Users,
  },
  {
    id: '4',
    question: 'What features are included in each plan?',
    answer:
      'Each plan builds on the previous one. Free includes core features, Professional adds advanced analytics and integrations, Enterprise includes everything plus dedicated support, SLAs, and custom solutions.',
    category: 'Features',
    icon: Package,
  },
  {
    id: '5',
    question: 'How do I customize my account settings?',
    answer:
      'Navigate to Settings from the main menu. There you can customize your profile, notification preferences, security options, billing information, and workspace settings. Changes save automatically.',
    category: 'Settings',
    icon: Settings,
  },
  {
    id: '6',
    question: 'What integrations do you support?',
    answer:
      'We integrate with over 100 tools including Slack, Microsoft Teams, Google Workspace, Salesforce, HubSpot, Jira, GitHub, and more. We also provide a REST API and webhooks for custom integrations.',
    category: 'Integrations',
    icon: Zap,
  },
  {
    id: '7',
    question: 'How do I get help if I have issues?',
    answer:
      'We offer 24/7 email support for all users. Paid plans include priority support and live chat. Enterprise customers get dedicated account managers and phone support with guaranteed response times.',
    category: 'Support',
    icon: HeadphonesIcon,
  },
  {
    id: '8',
    question: 'What happens during the free trial?',
    answer:
      'You get full access to all features for 14 days. No credit card required to start. Explore everything, invite your team, and decide if we are right for you. Cancel anytime with no charges.',
    category: 'General',
    icon: HelpCircle,
  },
];

const iconColors = {
  CreditCard: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400',
  Shield: 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400',
  Users: 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400',
  Package: 'bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400',
  Settings: 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400',
  Zap: 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400',
  HeadphonesIcon:
    'bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400',
  HelpCircle: 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400',
};

export default function IconFAQ({ className = '', faqs = defaultFAQs }: IconFAQProps) {
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

  const getIconColorClass = (icon?: LucideIcon) => {
    if (!icon) return 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400';
    const iconName = icon.name as keyof typeof iconColors;
    return iconColors[iconName] || 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400';
  };

  return (
    <div className={`w-full max-w-4xl mx-auto px-4 py-12 ${className}`}>
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
          Frequently Asked Questions
        </h2>
        <p className="text-base text-gray-600 dark:text-gray-400">
          Browse common questions organized by topic
        </p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq) => {
          const isOpen = openIds.has(faq.id);
          const Icon = faq.icon || HelpCircle;
          const iconColorClass = getIconColorClass(faq.icon);

          return (
            <div
              key={faq.id}
              className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden hover:border-gray-300 dark:hover:border-gray-700 transition-colors"
            >
              <div
                role="button"
                tabIndex={0}
                aria-expanded={isOpen}
                aria-controls={`answer-${faq.id}`}
                onClick={() => toggleFAQ(faq.id)}
                onKeyDown={(e) => handleKeyDown(e, faq.id)}
                className="w-full p-5 flex items-start gap-4 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
              >
                <div
                  className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center ${iconColorClass}`}
                >
                  <Icon className="w-5 h-5" />
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-0 text-left pr-8">
                    {faq.question}
                  </h3>
                </div>

                <motion.div
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.2, ease: 'easeInOut' as const }}
                  className="flex-shrink-0 mt-0.5"
                >
                  <ChevronDown className="w-5 h-5 text-gray-500 dark:text-gray-400" />
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
                    <div className="px-5 pb-5 pt-0 pl-[4.5rem]">
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

      <div className="mt-12 bg-gray-50 dark:bg-gray-800 rounded-xl p-8 text-center">
        <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
          <HelpCircle className="w-6 h-6 text-blue-600 dark:text-blue-400" />
        </div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
          Still have questions?
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-5">
          Our team is available 24/7 to help you
        </p>
        <a
          href="#contact"
          className="inline-block px-6 py-2.5 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 rounded-lg transition-colors"
        >
          Contact Support
        </a>
      </div>
    </div>
  );
}
