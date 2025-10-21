'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface FAQ {
  id: string;
  question: string;
  answer: string;
}

interface CardFAQProps {
  className?: string;
  faqs?: FAQ[];
}

const defaultFAQs: FAQ[] = [
  {
    id: '1',
    question: 'How long is the free trial?',
    answer:
      'We offer a 14-day free trial with full access to all features. No credit card required to start. You can explore the platform and upgrade to a paid plan when you are ready.',
  },
  {
    id: '2',
    question: 'Can I switch plans later?',
    answer:
      'Yes, you can upgrade or downgrade your plan at any time. Changes to higher plans take effect immediately, while downgrades apply at the start of your next billing cycle.',
  },
  {
    id: '3',
    question: 'What happens if I exceed my plan limits?',
    answer:
      'We will notify you when you approach your limits. You can upgrade your plan or purchase additional capacity. We never automatically charge you without permission.',
  },
  {
    id: '4',
    question: 'Do you offer discounts for non-profits?',
    answer:
      'Yes, we offer 50% discounts for verified non-profit organizations and educational institutions. Contact our sales team with your documentation to apply.',
  },
  {
    id: '5',
    question: 'Is my payment information secure?',
    answer:
      'Absolutely. We use Stripe for payment processing, which is PCI DSS Level 1 certified. We never store your credit card information on our servers.',
  },
  {
    id: '6',
    question: 'Can I get a custom plan for my business?',
    answer:
      'Yes, we offer custom enterprise plans with flexible pricing, dedicated support, SLAs, and custom features. Contact our sales team to discuss your specific needs.',
  },
];

export default function CardFAQ({ className = '', faqs = defaultFAQs }: CardFAQProps) {
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
    <div className={`w-full max-w-6xl mx-auto px-4 py-12 ${className}`}>
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
          Common Questions
        </h2>
        <p className="text-base text-gray-600 dark:text-gray-400">
          Get quick answers to frequently asked questions
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {faqs.map((faq) => {
          const isOpen = openIds.has(faq.id);

          return (
            <motion.div
              key={faq.id}
              layout
              className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden shadow-sm hover:shadow-md dark:hover:shadow-lg dark:hover:shadow-black/20 transition-shadow"
            >
              <div
                role="button"
                tabIndex={0}
                aria-expanded={isOpen}
                aria-controls={`answer-${faq.id}`}
                onClick={() => toggleFAQ(faq.id)}
                onKeyDown={(e) => handleKeyDown(e, faq.id)}
                className="w-full p-6 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-base font-semibold text-gray-900 dark:text-white text-left">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2, ease: 'easeInOut' }}
                    className="flex-shrink-0 mt-1"
                  >
                    <ChevronDown className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                  </motion.div>
                </div>
              </div>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    id={`answer-${faq.id}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    style={{ overflow: 'hidden' }}
                  >
                    <div className="px-6 pb-6 pt-0">
                      <div className="border-t border-gray-200 dark:border-gray-800 pt-4">
                        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>

      <div className="mt-12 text-center bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-8 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
          Need personalized help?
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-5">
          Our team is standing by to answer your questions
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <a
            href="#chat"
            className="px-5 py-2.5 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 rounded-lg transition-colors"
          >
            Start Live Chat
          </a>
          <a
            href="#email"
            className="px-5 py-2.5 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-colors"
          >
            Email Support
          </a>
        </div>
      </div>
    </div>
  );
}
