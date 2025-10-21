'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, StarHalf, Filter } from 'lucide-react';

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

interface WallTestimonialsProps {
  className?: string;
  testimonials?: Testimonial[];
}

const defaultTestimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Jessica Lee',
    role: 'CEO',
    company: 'TechStart',
    content: 'Absolutely transformative for our business. The ROI was clear within the first month.',
    rating: 5,
  },
  {
    id: '2',
    name: 'Michael Brown',
    role: 'Product Manager',
    company: 'InnovateCo',
    content: 'The best tool we\'ve ever used. Our team productivity has skyrocketed and we\'re shipping features faster than ever before.',
    rating: 5,
  },
  {
    id: '3',
    name: 'Sarah Davis',
    role: 'CTO',
    company: 'CloudTech',
    content: 'Outstanding technical architecture and performance.',
    rating: 5,
  },
  {
    id: '4',
    name: 'David Wilson',
    role: 'Marketing Director',
    company: 'GrowthHub',
    content: 'The analytics dashboard is incredible. We can now make data-driven decisions with confidence and our campaigns are performing better than ever.',
    rating: 4.5,
  },
  {
    id: '5',
    name: 'Emily Chen',
    role: 'Engineering Lead',
    company: 'DevTools',
    content: 'Clean, well-designed API. Integration was a breeze.',
    rating: 5,
  },
  {
    id: '6',
    name: 'James Martinez',
    role: 'VP Operations',
    company: 'EnterpriseCo',
    content: 'Streamlined our entire workflow. What used to take hours now takes minutes. The efficiency gains have been remarkable.',
    rating: 5,
  },
  {
    id: '7',
    name: 'Lisa Anderson',
    role: 'Head of Sales',
    company: 'SalesForce',
    content: 'Game-changer for our sales process.',
    rating: 5,
  },
  {
    id: '8',
    name: 'Robert Taylor',
    role: 'Designer',
    company: 'CreativeStudio',
    content: 'Beautiful interface with powerful features. The user experience is seamless and intuitive.',
    rating: 5,
  },
  {
    id: '9',
    name: 'Amanda White',
    role: 'Founder',
    company: 'StartupLabs',
    content: 'Worth every penny. Our startup scaled from 5 to 50 employees and this platform scaled right with us.',
    rating: 4.5,
  },
  {
    id: '10',
    name: 'Chris Johnson',
    role: 'DevOps Engineer',
    company: 'CloudScale',
    content: 'Reliable, fast, and secure. Everything we needed.',
    rating: 5,
  },
  {
    id: '11',
    name: 'Nina Patel',
    role: 'Product Designer',
    company: 'DesignCo',
    content: 'The collaboration features are phenomenal. Our distributed team feels more connected than ever before.',
    rating: 5,
  },
  {
    id: '12',
    name: 'Tom Garcia',
    role: 'CFO',
    company: 'FinTech',
    content: 'Clear ROI and transparent pricing.',
    rating: 5,
  },
  {
    id: '13',
    name: 'Rachel Kim',
    role: 'Customer Success',
    company: 'SupportHub',
    content: 'Our customers love it as much as we do.',
    rating: 5,
  },
  {
    id: '14',
    name: 'Daniel Park',
    role: 'Tech Lead',
    company: 'DataCorp',
    content: 'The performance improvements alone justify the cost. Our applications are faster and more responsive than ever.',
    rating: 5,
  },
  {
    id: '15',
    name: 'Sophie Turner',
    role: 'Operations Manager',
    company: 'LogiTech',
    content: 'Automation features saved us hundreds of hours.',
    rating: 4.5,
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
    'bg-fuchsia-500',
    'bg-lime-500',
    'bg-amber-500',
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

const WallTestimonials: React.FC<WallTestimonialsProps> = ({
  className = '',
  testimonials = defaultTestimonials,
}) => {
  const [filterRating, setFilterRating] = useState<number | null>(null);

  const filteredTestimonials = filterRating
    ? testimonials.filter((t) => Math.floor(t.rating) === filterRating)
    : testimonials;

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, scale: 0.9 },
    show: { opacity: 1, scale: 1 },
  };

  return (
    <section className={`py-16 px-4 sm:px-6 lg:px-8 ${className}`}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Customer Reviews
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Thousands of reviews from real customers who love our platform.
          </p>
        </div>

        {/* Filter */}
        <div className="flex items-center justify-center gap-2 mb-8 flex-wrap">
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
            <Filter className="w-4 h-4" />
            <span className="font-medium">Filter:</span>
          </div>
          <button
            onClick={() => setFilterRating(null)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              filterRating === null
                ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            All Reviews
          </button>
          {[5, 4].map((rating) => (
            <button
              key={rating}
              onClick={() => setFilterRating(rating)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors flex items-center gap-1.5 ${
                filterRating === rating
                  ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              <span>{rating}</span>
              <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <motion.div
          key={filterRating}
          variants={container}
          initial="hidden"
          animate="show"
          className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4"
        >
          {filteredTestimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={item}
              whileHover={{ scale: 1.02 }}
              className="break-inside-avoid bg-white dark:bg-gray-900 rounded-lg p-4 border border-gray-200 dark:border-gray-800 hover:shadow-md transition-shadow duration-300"
            >
              {/* Rating */}
              <div className="mb-3">
                <StarRating rating={testimonial.rating} />
              </div>

              {/* Content */}
              <blockquote className="mb-4">
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  {testimonial.content}
                </p>
              </blockquote>

              {/* Customer Info */}
              <div className="flex items-center gap-3">
                {/* Avatar */}
                <div
                  className={`w-9 h-9 rounded-full ${getAvatarColor(
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
                    {testimonial.role}
                  </p>
                </cite>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-8 px-8 py-6 bg-gray-50 dark:bg-gray-800 rounded-2xl">
            <div>
              <p className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
                4.9
              </p>
              <div className="flex justify-center mb-1">
                <StarRating rating={5} />
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Average Rating
              </p>
            </div>
            <div className="w-px h-12 bg-gray-300 dark:bg-gray-700 hidden sm:block" />
            <div>
              <p className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
                10,000+
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Customer Reviews
              </p>
            </div>
            <div className="w-px h-12 bg-gray-300 dark:bg-gray-700 hidden sm:block" />
            <div>
              <p className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
                98%
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Satisfaction Rate
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WallTestimonials;
