'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface FAQ {
  id: string;
  question: string;
  answer: string;
}

interface TwoColumnFAQProps {
  className?: string;
  leftFAQs?: FAQ[];
  rightFAQs?: FAQ[];
}

const defaultLeftFAQs: FAQ[] = [
  {
    id: 'left-1',
    question: 'What is included in the free plan?',
    answer:
      'The free plan includes up to 5 users, 10GB storage, basic features, email support, and access to our mobile apps. Perfect for small teams getting started.',
  },
  {
    id: 'left-2',
    question: 'How secure is my information?',
    answer:
      'We use bank-level encryption (AES-256) and are compliant with SOC 2, GDPR, and HIPAA. Your data is stored in secure data centers with 24/7 monitoring.',
  },
  {
    id: 'left-3',
    question: 'Can I upgrade or downgrade anytime?',
    answer:
      'Yes, you have complete flexibility. Upgrades are instant, and downgrades take effect at your next billing cycle. No penalties or hidden fees.',
  },
  {
    id: 'left-4',
    question: 'Do you offer educational discounts?',
    answer:
      'Yes, we offer 50% off for verified students and educators. Non-profit organizations also qualify for special pricing. Contact our sales team for details.',
  },
];

const defaultRightFAQs: FAQ[] = [
  {
    id: 'right-1',
    question: 'What payment methods are accepted?',
    answer:
      'We accept Visa, MasterCard, American Express, PayPal, and wire transfers for annual plans. All transactions are processed securely via Stripe.',
  },
  {
    id: 'right-2',
    question: 'Is there a setup fee?',
    answer:
      'No, there are no setup fees for any plan. You only pay for your subscription. Enterprise customers receive free onboarding and migration assistance.',
  },
  {
    id: 'right-3',
    question: 'Can I try before I buy?',
    answer:
      'Absolutely! We offer a 14-day free trial with full access to all features. No credit card required to start your trial.',
  },
  {
    id: 'right-4',
    question: 'What kind of support do you provide?',
    answer:
      'All plans include email support. Paid plans get priority support with faster response times. Enterprise customers receive dedicated account managers and phone support.',
  },
];

export default function TwoColumnFAQ({
  className = '',
  leftFAQs = defaultLeftFAQs,
  rightFAQs = defaultRightFAQs,
}: TwoColumnFAQProps) {
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

  const renderFAQColumn = (faqs: FAQ[]) => (
    <div className="space-y-4">
      {faqs.map((faq) => {
        const isOpen = openIds.has(faq.id);

        return (
          <div
            key={faq.id}
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
                {faq.question}
              </h3>
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.2, ease: 'easeInOut' }}
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
                  transition={{ duration: 0.25, ease: 'easeInOut' }}
                  style={{ overflow: 'hidden' }}
                >
                  <div className="px-5 pb-4 pt-0">
                    <div className="border-t border-gray-200 dark:border-gray-800 pt-3">
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
  );

  return (
    <div className={`w-full max-w-7xl mx-auto px-4 py-12 ${className}`}>
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
          Frequently Asked Questions
        </h2>
        <p className="text-base text-gray-600 dark:text-gray-400">
          Quick answers to questions you may have
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
        {renderFAQColumn(leftFAQs)}
        {renderFAQColumn(rightFAQs)}
      </div>

      <div className="mt-12 text-center">
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
          Still have questions? We are here to help.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#contact"
            className="px-6 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 rounded-lg transition-colors"
          >
            Contact Support
          </a>
          <a
            href="#docs"
            className="px-6 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-colors"
          >
            View Documentation
          </a>
        </div>
      </div>
    </div>
  );
}
