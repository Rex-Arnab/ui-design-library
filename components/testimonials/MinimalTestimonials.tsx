'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatarUrl?: string;
  imageUrl?: string;
  platform?: 'twitter' | 'linkedin' | 'google' | 'trustpilot';
  metrics?: {
    likes?: number;
    retweets?: number;
  };
}

interface MinimalTestimonialsProps {
  className?: string;
  testimonials?: Testimonial[];
}

const defaultTestimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Alexandra Mitchell',
    role: 'Chief Executive Officer',
    company: 'TechVentures Inc',
    content: 'This platform has fundamentally changed how we operate as a business. The clarity it brings to our processes and the efficiency gains we\'ve experienced are beyond what we imagined possible. Every team member is more productive, more aligned, and more satisfied with their work.',
    rating: 5,
  },
  {
    id: '2',
    name: 'Marcus Chen',
    role: 'VP of Engineering',
    company: 'CloudScale Systems',
    content: 'As a technical leader, I\'m extremely particular about the tools we adopt. This platform exceeded my high expectations in every way. The architecture is sound, the performance is excellent, and the developer experience is outstanding. It\'s become an essential part of our infrastructure.',
    rating: 5,
  },
  {
    id: '3',
    name: 'Sophia Rodriguez',
    role: 'Head of Product',
    company: 'InnovateLabs',
    content: 'We evaluated dozens of solutions before making our choice. This platform stood out for its thoughtful design, comprehensive features, and exceptional support. Six months in, we\'re seeing measurable improvements across all our key metrics. It was absolutely the right decision.',
    rating: 5,
  },
  {
    id: '4',
    name: 'David Park',
    role: 'Founder & CTO',
    company: 'StartupHub',
    content: 'Building a startup is hard enough without worrying about tools that don\'t work well. This platform just works - reliably, consistently, and beautifully. It scales with us as we grow and adapts to our changing needs. I recommend it to every founder I meet.',
    rating: 5,
  },
  {
    id: '5',
    name: 'Emily Watson',
    role: 'Director of Operations',
    company: 'GlobalTech Corp',
    content: 'The operational efficiency we\'ve gained is remarkable. Tasks that used to consume hours now take minutes. Our team can focus on strategic work instead of administrative overhead. The ROI was clear within the first quarter, and the benefits continue to compound.',
    rating: 5,
  },
  {
    id: '6',
    name: 'James Anderson',
    role: 'Chief Marketing Officer',
    company: 'GrowthAgency',
    content: 'The insights and analytics have transformed our marketing strategy. We can now make data-driven decisions with confidence, and our campaigns are performing better than ever. The platform has become central to how we operate and plan for the future.',
    rating: 5,
  },
];

const MinimalTestimonials: React.FC<MinimalTestimonialsProps> = ({
  className = '',
  testimonials = defaultTestimonials,
}) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section className={`py-24 px-4 sm:px-6 lg:px-8 ${className}`}>
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Trusted by industry leaders and innovators worldwide.
            </p>
          </motion.div>
        </div>

        {/* Testimonials Stack */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-16"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              variants={item}
              className="text-center"
            >
              {/* Quote Icon */}
              <div className="flex justify-center mb-8">
                <Quote className="w-12 h-12 text-gray-300 dark:text-gray-700" />
              </div>

              {/* Content */}
              <blockquote className="mb-8">
                <p className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed font-light">
                  &ldquo;{testimonial.content}&rdquo;
                </p>
              </blockquote>

              {/* Customer Info */}
              <cite className="not-italic">
                <p className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {testimonial.name}
                </p>
                <p className="text-base text-gray-600 dark:text-gray-400">
                  {testimonial.role}
                </p>
                <p className="text-base text-gray-600 dark:text-gray-400">
                  {testimonial.company}
                </p>
              </cite>

              {/* Divider (except for last item) */}
              {index < testimonials.length - 1 && (
                <div className="mt-16 flex justify-center">
                  <div className="w-12 h-px bg-gray-300 dark:bg-gray-700" />
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="text-center mt-20"
        >
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            Join thousands of satisfied customers
          </p>
          <button className="px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg font-semibold text-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors">
            Start Your Journey
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default MinimalTestimonials;
