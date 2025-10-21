'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Search, X } from 'lucide-react';

interface FAQ {
  id: string;
  question: string;
  answer: string;
}

interface SearchableFAQProps {
  className?: string;
  faqs?: FAQ[];
}

const defaultFAQs: FAQ[] = [
  {
    id: '1',
    question: 'What is your refund policy?',
    answer:
      'We offer a 30-day money-back guarantee for all new subscriptions. If you are not satisfied with our service, contact our support team within 30 days of your initial purchase for a full refund.',
  },
  {
    id: '2',
    question: 'How do I cancel my subscription?',
    answer:
      'You can cancel your subscription at any time from your account settings. Navigate to Billing > Subscription, then click "Cancel Subscription." Your account will remain active until the end of your current billing period.',
  },
  {
    id: '3',
    question: 'Do you offer custom enterprise plans?',
    answer:
      'Yes, we offer custom enterprise solutions with dedicated support, SLAs, custom integrations, and volume pricing. Contact our sales team to discuss your specific requirements.',
  },
  {
    id: '4',
    question: 'Can I export my data?',
    answer:
      'Yes, you can export all your data at any time in CSV, JSON, or Excel format. Go to Settings > Data Export and select your preferred format. Enterprise customers can schedule automated exports.',
  },
  {
    id: '5',
    question: 'What integrations do you support?',
    answer:
      'We integrate with over 100 popular tools including Slack, Google Workspace, Microsoft Teams, Salesforce, HubSpot, Jira, and more. We also provide a REST API for custom integrations.',
  },
  {
    id: '6',
    question: 'Is there a mobile app available?',
    answer:
      'Yes, we have native mobile apps for both iOS and Android. Download them from the App Store or Google Play. All your data syncs automatically across all devices.',
  },
  {
    id: '7',
    question: 'How does two-factor authentication work?',
    answer:
      'Enable 2FA in Security Settings. You can use authenticator apps (Google Authenticator, Authy) or SMS. Once enabled, you will need to enter a code from your authenticator app when logging in.',
  },
  {
    id: '8',
    question: 'What are your data retention policies?',
    answer:
      'Active accounts: data retained indefinitely. Canceled accounts: data retained for 30 days, then permanently deleted. Enterprise customers can request custom retention periods to meet compliance requirements.',
  },
  {
    id: '9',
    question: 'Do you provide training for new users?',
    answer:
      'Yes, we offer comprehensive onboarding resources including video tutorials, documentation, and live webinars. Enterprise customers receive personalized training sessions with our team.',
  },
  {
    id: '10',
    question: 'How often do you release updates?',
    answer:
      'We release minor updates and improvements weekly. Major feature releases happen monthly. All updates are automatic and require no downtime. We announce new features in our changelog.',
  },
];

export default function SearchableFAQ({
  className = '',
  faqs = defaultFAQs,
}: SearchableFAQProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [openIds, setOpenIds] = useState<Set<string>>(new Set());

  const filteredFAQs = useMemo(() => {
    if (!searchQuery.trim()) return faqs;

    const query = searchQuery.toLowerCase();
    return faqs.filter(
      (faq) =>
        faq.question.toLowerCase().includes(query) ||
        faq.answer.toLowerCase().includes(query)
    );
  }, [faqs, searchQuery]);

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

  const clearSearch = () => {
    setSearchQuery('');
  };

  const highlightText = (text: string, query: string) => {
    if (!query.trim()) return text;

    const parts = text.split(new RegExp(`(${query})`, 'gi'));
    return parts.map((part, index) =>
      part.toLowerCase() === query.toLowerCase() ? (
        <mark
          key={index}
          className="bg-yellow-200 dark:bg-yellow-900/50 text-gray-900 dark:text-white rounded px-0.5"
        >
          {part}
        </mark>
      ) : (
        part
      )
    );
  };

  return (
    <div className={`w-full max-w-3xl mx-auto px-4 py-12 ${className}`}>
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
          How can we help?
        </h2>
        <p className="text-base text-gray-600 dark:text-gray-400">
          Search our knowledge base for quick answers
        </p>
      </div>

      <div className="mb-8">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for answers..."
            className="w-full pl-11 pr-12 py-3.5 text-sm text-gray-900 dark:text-white bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors placeholder:text-gray-500 dark:placeholder:text-gray-400"
          />
          {searchQuery && (
            <button
              onClick={clearSearch}
              className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
            >
              <X className="h-5 w-5" />
            </button>
          )}
        </div>
      </div>

      <AnimatePresence mode="wait">
        {filteredFAQs.length > 0 ? (
          <motion.div
            key="results"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="space-y-3"
          >
            {filteredFAQs.map((faq, index) => {
              const isOpen = openIds.has(faq.id);

              return (
                <motion.div
                  key={faq.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 overflow-hidden"
                >
                  <div
                    role="button"
                    tabIndex={0}
                    aria-expanded={isOpen}
                    aria-controls={`answer-${faq.id}`}
                    onClick={() => toggleFAQ(faq.id)}
                    onKeyDown={(e) => handleKeyDown(e, faq.id)}
                    className="w-full px-5 py-4 flex items-start justify-between cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
                  >
                    <h3 className="text-sm font-medium text-gray-900 dark:text-white pr-6 text-left">
                      {highlightText(faq.question, searchQuery)}
                    </h3>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.2, ease: 'easeInOut' as const }}
                      className="flex-shrink-0 mt-0.5"
                    >
                      <ChevronDown className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                    </motion.div>
                  </div>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`answer-${faq.id}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' as const }}
                        style={{ overflow: 'hidden' }}
                      >
                        <div className="px-5 pb-4 pt-0">
                          <div className="border-t border-gray-200 dark:border-gray-800 pt-3">
                            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                              {highlightText(faq.answer, searchQuery)}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </motion.div>
        ) : (
          <motion.div
            key="no-results"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="text-center py-12"
          >
            <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              No results found
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
              We couldn&apos;t find any FAQs matching &ldquo;{searchQuery}&rdquo;
            </p>
            <button
              onClick={clearSearch}
              className="text-sm text-blue-600 dark:text-blue-400 hover:underline font-medium"
            >
              Clear search
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mt-12 text-center">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Can&apos;t find what you&apos;re looking for?{' '}
          <a
            href="#contact"
            className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
          >
            Contact our support team
          </a>
        </p>
      </div>
    </div>
  );
}
