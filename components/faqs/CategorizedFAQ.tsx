'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, CreditCard, Settings, HelpCircle, Shield, Zap } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface FAQ {
  id: string;
  question: string;
  answer: string;
  category?: string;
  icon?: LucideIcon;
}

interface Category {
  id: string;
  name: string;
  icon: LucideIcon;
  faqs: FAQ[];
}

interface CategorizedFAQProps {
  className?: string;
  categories?: Category[];
}

const defaultCategories: Category[] = [
  {
    id: 'general',
    name: 'General',
    icon: HelpCircle,
    faqs: [
      {
        id: 'gen-1',
        question: 'What is your platform about?',
        answer:
          'We provide a comprehensive solution for teams to collaborate, manage projects, and streamline workflows. Our platform integrates with your favorite tools and scales with your business.',
      },
      {
        id: 'gen-2',
        question: 'Who should use this platform?',
        answer:
          'Our platform is designed for teams of all sizes - from startups to enterprises. Whether you are in tech, marketing, education, or any other industry, our tools adapt to your needs.',
      },
    ],
  },
  {
    id: 'billing',
    name: 'Billing & Pricing',
    icon: CreditCard,
    faqs: [
      {
        id: 'bill-1',
        question: 'How does billing work?',
        answer:
          'We bill monthly or annually based on your chosen plan. Annual subscriptions receive a 20% discount. You can upgrade, downgrade, or cancel at any time from your account settings.',
      },
      {
        id: 'bill-2',
        question: 'What payment methods do you accept?',
        answer:
          'We accept all major credit cards, PayPal, and ACH transfers for annual enterprise plans. All payments are processed securely through Stripe with PCI DSS compliance.',
      },
      {
        id: 'bill-3',
        question: 'Do you offer refunds?',
        answer:
          'Yes, we have a 30-day money-back guarantee. If you are not satisfied, contact us within 30 days of your purchase for a full refund, no questions asked.',
      },
    ],
  },
  {
    id: 'technical',
    name: 'Technical',
    icon: Zap,
    faqs: [
      {
        id: 'tech-1',
        question: 'What are the system requirements?',
        answer:
          'Our platform is web-based and works on any modern browser (Chrome, Firefox, Safari, Edge). We also offer native mobile apps for iOS and Android. No special software installation required.',
      },
      {
        id: 'tech-2',
        question: 'Do you provide an API?',
        answer:
          'Yes, we offer a comprehensive REST API with detailed documentation. Enterprise customers also get GraphQL access and dedicated API support with higher rate limits.',
      },
      {
        id: 'tech-3',
        question: 'How do I migrate my data?',
        answer:
          'We provide automated migration tools for popular platforms. Our support team can assist with custom migrations, and enterprise customers receive white-glove migration services at no extra cost.',
      },
    ],
  },
  {
    id: 'security',
    name: 'Security & Privacy',
    icon: Shield,
    faqs: [
      {
        id: 'sec-1',
        question: 'How do you protect my data?',
        answer:
          'We use AES-256 encryption at rest and TLS 1.3 in transit. Our infrastructure is SOC 2 Type II certified, GDPR compliant, and undergoes regular third-party security audits.',
      },
      {
        id: 'sec-2',
        question: 'Where is my data stored?',
        answer:
          'Data is stored in secure AWS data centers with your choice of region (US, EU, Asia-Pacific). Enterprise customers can request specific data residency requirements.',
      },
    ],
  },
  {
    id: 'account',
    name: 'Account Management',
    icon: Settings,
    faqs: [
      {
        id: 'acc-1',
        question: 'How do I add team members?',
        answer:
          'Go to Settings > Team, click "Invite Member," and enter their email. They will receive an invitation link. You can assign roles and permissions during the invitation process.',
      },
      {
        id: 'acc-2',
        question: 'Can I delete my account?',
        answer:
          'Yes, you can delete your account at any time from Settings > Account > Delete Account. Your data will be permanently removed within 30 days. This action cannot be undone.',
      },
    ],
  },
];

export default function CategorizedFAQ({
  className = '',
  categories = defaultCategories,
}: CategorizedFAQProps) {
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
          Help Center
        </h2>
        <p className="text-base text-gray-600 dark:text-gray-400">
          Browse by category to find answers to your questions
        </p>
      </div>

      <div className="space-y-8">
        {categories.map((category) => {
          const Icon = category.icon;

          return (
            <div key={category.id} className="space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                  <Icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {category.name}
                </h3>
              </div>

              <div className="space-y-3 pl-0 md:pl-11">
                {category.faqs.map((faq) => {
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
                        <h4 className="text-sm font-medium text-gray-900 dark:text-white pr-6 text-left">
                          {faq.question}
                        </h4>
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
            </div>
          );
        })}
      </div>

      <div className="mt-12 text-center bg-gray-50 dark:bg-gray-800 rounded-xl p-8">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
          Didn't find what you were looking for?
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-5">
          Our support team is ready to help you
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
