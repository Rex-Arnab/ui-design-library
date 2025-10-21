'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star, StarHalf, TrendingUp, Users, Zap } from 'lucide-react';

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

interface FeaturedTestimonialProps {
  className?: string;
  testimonial?: Testimonial;
}

const defaultTestimonial: Testimonial = {
  id: '1',
  name: 'Michael Richardson',
  role: 'Chief Executive Officer',
  company: 'GlobalTech Enterprises',
  content: 'When we first evaluated this platform, we were skeptical about the bold claims. But after three months of use across our entire organization of 500+ employees, I can confidently say this has been the most transformative technology investment we\'ve made in the past five years. The impact has been measurable across every department. Our engineering team shipped 40% more features, our sales team closed deals 25% faster, and our customer support team reduced response times by half. The ROI was clear within the first quarter, and the platform has continued to deliver value every single day. What truly sets this apart is the thoughtful design, the reliability, and the outstanding customer support. This isn\'t just a tool - it\'s become the foundation of how we operate as a modern, efficient organization.',
  rating: 5,
};

const getInitials = (name: string): string => {
  return name
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
};

const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  return (
    <div className="flex gap-1">
      {[...Array(fullStars)].map((_, i) => (
        <Star key={`full-${i}`} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
      ))}
      {hasHalfStar && (
        <StarHalf className="w-6 h-6 fill-yellow-400 text-yellow-400" />
      )}
      {[...Array(5 - Math.ceil(rating))].map((_, i) => (
        <Star key={`empty-${i}`} className="w-6 h-6 text-gray-300 dark:text-gray-600" />
      ))}
    </div>
  );
};

const FeaturedTestimonial: React.FC<FeaturedTestimonialProps> = ({
  className = '',
  testimonial = defaultTestimonial,
}) => {
  const stats = [
    {
      icon: TrendingUp,
      value: '40%',
      label: 'Productivity Increase',
    },
    {
      icon: Users,
      value: '500+',
      label: 'Team Members',
    },
    {
      icon: Zap,
      value: '25%',
      label: 'Faster Delivery',
    },
  ];

  return (
    <section className={`py-20 px-4 sm:px-6 lg:px-8 ${className}`}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Featured Success Story
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Discover how industry leaders are transforming their businesses with our platform.
            </p>
          </motion.div>
        </div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden shadow-2xl"
        >
          <div className="grid lg:grid-cols-5 gap-0">
            {/* Left Column - Customer Photo */}
            <div className="lg:col-span-2 bg-gray-100 dark:bg-gray-800 flex items-center justify-center p-12">
              <div className="text-center">
                {/* Large Avatar */}
                <div className="w-48 h-48 rounded-full bg-blue-500 flex items-center justify-center mx-auto mb-6 shadow-xl">
                  <span className="text-white font-bold text-5xl">
                    {getInitials(testimonial.name)}
                  </span>
                </div>

                {/* Company Logo Placeholder */}
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center px-6 py-3 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700">
                    <span className="text-lg font-semibold text-gray-900 dark:text-white">
                      {testimonial.company}
                    </span>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex justify-center">
                  <StarRating rating={testimonial.rating} />
                </div>
              </div>
            </div>

            {/* Right Column - Testimonial Content */}
            <div className="lg:col-span-3 p-8 sm:p-12">
              {/* Large Quote Mark */}
              <div className="mb-6">
                <Quote className="w-16 h-16 text-gray-300 dark:text-gray-700" />
              </div>

              {/* Testimonial Text */}
              <blockquote className="mb-8">
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  {testimonial.content}
                </p>
              </blockquote>

              {/* Customer Info */}
              <cite className="not-italic mb-8 block">
                <p className="font-bold text-xl text-gray-900 dark:text-white mb-1">
                  {testimonial.name}
                </p>
                <p className="text-base text-gray-600 dark:text-gray-400">
                  {testimonial.role}
                </p>
              </cite>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200 dark:border-gray-800">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className="flex justify-center mb-2">
                      <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                        <stat.icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                      </div>
                    </div>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                      {stat.value}
                    </p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      {stat.label}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-base text-gray-600 dark:text-gray-400 mb-6">
            Join thousands of companies already seeing results
          </p>
          <button className="px-8 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg font-semibold hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors">
            Get Started Today
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedTestimonial;
