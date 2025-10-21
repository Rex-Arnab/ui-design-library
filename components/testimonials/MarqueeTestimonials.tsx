'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star, StarHalf } from 'lucide-react';

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

interface MarqueeTestimonialsProps {
  className?: string;
  testimonials?: Testimonial[];
}

const defaultTestimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Emma Stevens',
    role: 'Product Manager',
    company: 'TechFlow',
    content: 'Game-changing platform that streamlined our entire workflow. Couldn\'t imagine going back!',
    rating: 5,
  },
  {
    id: '2',
    name: 'James Liu',
    role: 'CTO',
    company: 'DataCorp',
    content: 'Outstanding performance and reliability. The best investment we\'ve made this year.',
    rating: 5,
  },
  {
    id: '3',
    name: 'Sofia Garcia',
    role: 'Marketing Lead',
    company: 'GrowthLabs',
    content: 'The analytics features are incredible. We\'ve increased our conversion rate by 45%.',
    rating: 5,
  },
  {
    id: '4',
    name: 'David Kim',
    role: 'CEO',
    company: 'StartupHQ',
    content: 'Exceeded all our expectations. The customer support team is phenomenal.',
    rating: 4.5,
  },
  {
    id: '5',
    name: 'Rachel Brown',
    role: 'Operations Director',
    company: 'LogiTech',
    content: 'Saved us hundreds of hours per month. The automation is simply brilliant.',
    rating: 5,
  },
  {
    id: '6',
    name: 'Alex Turner',
    role: 'Engineering Manager',
    company: 'DevOps Pro',
    content: 'Clean API, excellent docs, and solid performance. Developer experience is top-tier.',
    rating: 5,
  },
  {
    id: '7',
    name: 'Michelle Lee',
    role: 'VP Sales',
    company: 'SalesForce',
    content: 'Our team adoption was instant. Everyone loves using it daily.',
    rating: 5,
  },
  {
    id: '8',
    name: 'Chris Johnson',
    role: 'Head of Design',
    company: 'CreativeStudio',
    content: 'Beautiful interface with powerful features. Perfectly balances form and function.',
    rating: 5,
  },
  {
    id: '9',
    name: 'Nina Patel',
    role: 'CFO',
    company: 'FinanceHub',
    content: 'Clear ROI within the first month. Transparent pricing with no hidden costs.',
    rating: 4.5,
  },
  {
    id: '10',
    name: 'Robert Chen',
    role: 'Product Lead',
    company: 'InnovateCo',
    content: 'The collaboration features transformed how our remote team works together.',
    rating: 5,
  },
  {
    id: '11',
    name: 'Jessica White',
    role: 'Customer Success',
    company: 'SupportTeam',
    content: 'Our customer satisfaction scores improved dramatically since implementation.',
    rating: 5,
  },
  {
    id: '12',
    name: 'Tom Anderson',
    role: 'Tech Lead',
    company: 'CloudScale',
    content: 'Scales effortlessly as we grow. The infrastructure is rock-solid.',
    rating: 5,
  },
];

const getInitials = (name: string): string => {
  return name
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
};

const getAvatarColor = (id: string): string => {
  const colors = [
    'bg-blue-500',
    'bg-purple-500',
    'bg-green-500',
    'bg-orange-500',
    'bg-pink-500',
    'bg-indigo-500',
    'bg-teal-500',
    'bg-red-500',
    'bg-yellow-500',
    'bg-cyan-500',
    'bg-violet-500',
    'bg-rose-500',
  ];
  const index = parseInt(id, 10) % colors.length;
  return colors[index];
};

const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  return (
    <div className="flex gap-0.5">
      {[...Array(fullStars)].map((_, i) => (
        <Star key={`full-${i}`} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
      ))}
      {hasHalfStar && (
        <StarHalf className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
      )}
      {[...Array(5 - Math.ceil(rating))].map((_, i) => (
        <Star key={`empty-${i}`} className="w-3.5 h-3.5 text-gray-300 dark:text-gray-600" />
      ))}
    </div>
  );
};

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => (
  <div className="bg-white dark:bg-gray-900 rounded-lg p-5 border border-gray-200 dark:border-gray-800 w-80 flex-shrink-0">
    {/* Rating */}
    <div className="mb-3">
      <StarRating rating={testimonial.rating} />
    </div>

    {/* Content */}
    <blockquote className="mb-4">
      <p className="text-sm text-gray-700 dark:text-gray-300 line-clamp-3">
        {testimonial.content}
      </p>
    </blockquote>

    {/* Customer Info */}
    <div className="flex items-center gap-3">
      {/* Avatar */}
      <div
        className={`w-10 h-10 rounded-full ${getAvatarColor(
          testimonial.id
        )} flex items-center justify-center flex-shrink-0`}
      >
        <span className="text-white font-semibold text-xs">
          {getInitials(testimonial.name)}
        </span>
      </div>

      {/* Name and Role */}
      <cite className="not-italic flex-1 min-w-0">
        <p className="font-semibold text-sm text-gray-900 dark:text-white truncate">
          {testimonial.name}
        </p>
        <p className="text-xs text-gray-600 dark:text-gray-400 truncate">
          {testimonial.role}, {testimonial.company}
        </p>
      </cite>
    </div>
  </div>
);

const MarqueeTestimonials: React.FC<MarqueeTestimonialsProps> = ({
  className = '',
  testimonials = defaultTestimonials,
}) => {
  // Split testimonials into two rows
  const firstRow = testimonials.slice(0, Math.ceil(testimonials.length / 2));
  const secondRow = testimonials.slice(Math.ceil(testimonials.length / 2));

  return (
    <section className={`py-16 overflow-hidden ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Trusted by Thousands
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            See what our customers are saying about their experience with our platform.
          </p>
        </div>
      </div>

      {/* Marquee Container */}
      <div className="space-y-6">
        {/* First Row - Scroll Right */}
        <div className="relative">
          <div className="flex gap-4">
            <motion.div
              animate={{
                x: [0, -1920],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: 'loop',
                  duration: 30,
                  ease: 'linear' as const,
                },
              }}
              className="flex gap-4 flex-shrink-0"
            >
              {[...firstRow, ...firstRow].map((testimonial, index) => (
                <TestimonialCard
                  key={`first-row-${testimonial.id}-${index}`}
                  testimonial={testimonial}
                />
              ))}
            </motion.div>

            <motion.div
              animate={{
                x: [0, -1920],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: 'loop',
                  duration: 30,
                  ease: 'linear' as const,
                },
              }}
              className="flex gap-4 flex-shrink-0"
            >
              {[...firstRow, ...firstRow].map((testimonial, index) => (
                <TestimonialCard
                  key={`first-row-duplicate-${testimonial.id}-${index}`}
                  testimonial={testimonial}
                />
              ))}
            </motion.div>
          </div>
        </div>

        {/* Second Row - Scroll Left */}
        <div className="relative">
          <div className="flex gap-4">
            <motion.div
              animate={{
                x: [-1920, 0],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: 'loop',
                  duration: 30,
                  ease: 'linear' as const,
                },
              }}
              className="flex gap-4 flex-shrink-0"
            >
              {[...secondRow, ...secondRow].map((testimonial, index) => (
                <TestimonialCard
                  key={`second-row-${testimonial.id}-${index}`}
                  testimonial={testimonial}
                />
              ))}
            </motion.div>

            <motion.div
              animate={{
                x: [-1920, 0],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: 'loop',
                  duration: 30,
                  ease: 'linear' as const,
                },
              }}
              className="flex gap-4 flex-shrink-0"
            >
              {[...secondRow, ...secondRow].map((testimonial, index) => (
                <TestimonialCard
                  key={`second-row-duplicate-${testimonial.id}-${index}`}
                  testimonial={testimonial}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarqueeTestimonials;
