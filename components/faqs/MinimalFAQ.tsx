'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

interface FAQ {
  id: string;
  question: string;
  answer: string;
}

interface MinimalFAQProps {
  className?: string;
  faqs?: FAQ[];
}

const defaultFAQs: FAQ[] = [
  {
    id: '1',
    question: 'How does your service work?',
    answer:
      'Our service provides a streamlined workflow for managing your projects. Sign up, create your workspace, invite team members, and start collaborating immediately. Everything syncs in real-time across all devices.',
  },
  {
    id: '2',
    question: 'What makes you different from competitors?',
    answer:
      'We focus on simplicity and speed. While others add complexity, we remove it. Our interface is intuitive, our performance is exceptional, and our pricing is transparent. No hidden fees, no complicated features you will never use.',
  },
  {
    id: '3',
    question: 'Can I try it before committing?',
    answer:
      'Yes. Start with our free plan or try any paid plan free for 14 days. No credit card required for the trial. Explore all features and decide if we are the right fit for your team.',
  },
  {
    id: '4',
    question: 'How quickly can I get started?',
    answer:
      'You can be up and running in under 2 minutes. Create an account, set up your workspace, and invite your team. Our guided onboarding ensures you understand the core features immediately.',
  },
  {
    id: '5',
    question: 'What kind of support do you offer?',
    answer:
      'All customers get email support with 24-hour response times. Paid plans include priority support, live chat, and access to our knowledge base. Enterprise customers receive dedicated account managers.',
  },
  {
    id: '6',
    question: 'Is my data backed up?',
    answer:
      'Yes. We perform automated backups every 6 hours with 30-day retention. Your data is replicated across multiple secure data centers. Enterprise plans include custom backup schedules and extended retention.',
  },
  {
    id: '7',
    question: 'Can I cancel anytime?',
    answer:
      'Absolutely. Cancel with one click from your account settings. No questions, no hassle, no cancellation fees. Your data remains accessible for 30 days after cancellation.',
  },
  {
    id: '8',
    question: 'Do you offer team training?',
    answer:
      'Yes. We provide self-service tutorials, documentation, and video guides for all users. Enterprise customers receive personalized team training sessions and ongoing education programs.',
  },
];

export default function MinimalFAQ({
  className = '',
  faqs = defaultFAQs,
}: MinimalFAQProps) {
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
    <div className={`w-full max-w-3xl mx-auto px-4 py-16 ${className}`}>
      <div className="mb-16">
        <h2 className="text-4xl font-light text-gray-900 dark:text-white mb-4">
          Questions
        </h2>
        <p className="text-base text-gray-500 dark:text-gray-400 font-light">
          Simple answers to common inquiries
        </p>
      </div>

      <div className="space-y-0">
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
                className="w-full py-8 flex items-start gap-6 cursor-pointer group focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
              >
                <motion.div
                  animate={{ rotate: isOpen ? 90 : 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="flex-shrink-0 mt-1"
                >
                  <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors" />
                </motion.div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-normal text-gray-900 dark:text-white mb-0 text-left group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {faq.question}
                  </h3>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`answer-${faq.id}`}
                        initial={{ height: 0, opacity: 0, marginTop: 0 }}
                        animate={{ height: 'auto', opacity: 1, marginTop: 16 }}
                        exit={{ height: 0, opacity: 0, marginTop: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        style={{ overflow: 'hidden' }}
                      >
                        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed font-light">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-20 pt-12 border-t border-gray-200 dark:border-gray-800">
        <p className="text-sm text-gray-500 dark:text-gray-400 font-light text-center">
          More questions?{' '}
          <a
            href="#contact"
            className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors underline decoration-gray-300 dark:decoration-gray-700 underline-offset-4"
          >
            Get in touch
          </a>
        </p>
      </div>
    </div>
  );
}
