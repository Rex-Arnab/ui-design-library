'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface FAQ {
  id: string;
  question: string;
  answer: string;
}

interface AccordionFAQProps {
  className?: string;
  faqs?: FAQ[];
}

const defaultFAQs: FAQ[] = [
  {
    id: '1',
    question: 'What payment methods do you accept?',
    answer:
      'We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for enterprise plans. All payments are processed securely through our encrypted payment gateway.',
  },
  {
    id: '2',
    question: 'Can I change my plan at any time?',
    answer:
      'Yes, you can upgrade or downgrade your plan at any time. When upgrading, you will be charged a prorated amount for the remainder of your billing cycle. When downgrading, the change will take effect at the start of your next billing period.',
  },
  {
    id: '3',
    question: 'What is your refund policy?',
    answer:
      'We offer a 30-day money-back guarantee for all new subscriptions. If you are not satisfied with our service, contact our support team within 30 days of your initial purchase for a full refund. No questions asked.',
  },
  {
    id: '4',
    question: 'Do you offer customer support?',
    answer:
      'Yes, we provide 24/7 customer support via email and live chat. Premium and Enterprise plan customers also get priority support with dedicated account managers and phone support during business hours.',
  },
  {
    id: '5',
    question: 'Is my data secure?',
    answer:
      'Absolutely. We use industry-standard encryption (AES-256) for data at rest and TLS 1.3 for data in transit. We are SOC 2 Type II certified and comply with GDPR, CCPA, and other major data protection regulations.',
  },
  {
    id: '6',
    question: 'Can I cancel my subscription?',
    answer:
      'Yes, you can cancel your subscription at any time from your account settings. Your account will remain active until the end of your current billing period. No cancellation fees apply.',
  },
  {
    id: '7',
    question: 'Do you offer a free trial?',
    answer:
      'Yes, we offer a 14-day free trial for all plans. No credit card required to start. You can explore all features and decide which plan works best for you before committing.',
  },
  {
    id: '8',
    question: 'How do I get started?',
    answer:
      'Simply click the "Get Started" button, choose your plan, and create your account. Our onboarding wizard will guide you through the setup process. You can have everything up and running in less than 5 minutes.',
  },
];

export default function AccordionFAQ({
  className = '',
  faqs = defaultFAQs,
}: AccordionFAQProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  const handleKeyDown = (e: React.KeyboardEvent, id: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleFAQ(id);
    }
  };

  return (
    <div className={`w-full max-w-3xl mx-auto px-4 py-12 ${className}`}>
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
          Frequently Asked Questions
        </h2>
        <p className="text-base text-gray-600 dark:text-gray-400">
          Find answers to common questions about our service
        </p>
      </div>

      <div className="space-y-0 border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden">
        {faqs.map((faq, index) => {
          const isOpen = openId === faq.id;
          const isLast = index === faqs.length - 1;

          return (
            <div
              key={faq.id}
              className={`${
                !isLast ? 'border-b border-gray-200 dark:border-gray-800' : ''
              }`}
            >
              <div
                role="button"
                tabIndex={0}
                aria-expanded={isOpen}
                aria-controls={`answer-${faq.id}`}
                onClick={() => toggleFAQ(faq.id)}
                onKeyDown={(e) => handleKeyDown(e, faq.id)}
                className="w-full px-6 py-5 flex items-center justify-between cursor-pointer bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
              >
                <h3 className="text-base font-medium text-gray-900 dark:text-white pr-8 text-left">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' as const }}
                  className="flex-shrink-0"
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
                    <div className="px-6 pb-5 bg-white dark:bg-gray-900">
                      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      <div className="mt-8 text-center">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Still have questions?{' '}
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
