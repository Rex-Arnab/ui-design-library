'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star, StarHalf } from 'lucide-react';

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

interface GridTestimonialsProps {
  className?: string;
  testimonials?: Testimonial[];
}

const defaultTestimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Jessica Martinez',
    role: 'CEO',
    company: 'TechVentures',
    content: 'This platform has completely transformed how our team collaborates. The intuitive interface and powerful features have boosted our productivity by 40%. Highly recommended for any growing startup.',
    rating: 5,
  },
  {
    id: '2',
    name: 'Michael Chen',
    role: 'Product Manager',
    company: 'InnovateCo',
    content: 'Outstanding customer support and a product that actually delivers on its promises. The analytics dashboard alone is worth the investment.',
    rating: 5,
  },
  {
    id: '3',
    name: 'Sarah Thompson',
    role: 'Marketing Director',
    company: 'BrandFlow',
    content: 'We switched from our legacy system and couldn\'t be happier. The migration was seamless and the team was incredibly supportive throughout the process.',
    rating: 5,
  },
  {
    id: '4',
    name: 'David Kumar',
    role: 'Engineering Lead',
    company: 'DevTools Inc',
    content: 'As a developer, I appreciate the well-documented API and clean architecture. Integration was straightforward and the performance is excellent.',
    rating: 4.5,
  },
  {
    id: '5',
    name: 'Emily Roberts',
    role: 'Operations Manager',
    company: 'LogisticsHub',
    content: 'The automation features have saved our team countless hours. What used to take days now takes minutes. Game-changer for our operations.',
    rating: 5,
  },
  {
    id: '6',
    name: 'James Wilson',
    role: 'CTO',
    company: 'CloudScale',
    content: 'Security and reliability are paramount for us. This solution meets all our compliance requirements while maintaining excellent uptime.',
    rating: 5,
  },
  {
    id: '7',
    name: 'Rachel Green',
    role: 'Head of Sales',
    company: 'SalesForce Pro',
    content: 'Our conversion rates have increased significantly since implementing this platform. The insights we gain are invaluable for our sales strategy.',
    rating: 4.5,
  },
  {
    id: '8',
    name: 'Daniel Park',
    role: 'Creative Director',
    company: 'DesignStudio',
    content: 'The collaboration features are phenomenal. Our distributed team feels more connected than ever, and project delivery has improved dramatically.',
    rating: 5,
  },
  {
    id: '9',
    name: 'Lisa Anderson',
    role: 'VP of Finance',
    company: 'FinTech Solutions',
    content: 'Transparent pricing and clear ROI. We saw positive returns within the first quarter of implementation. Excellent value for money.',
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
  ];
  const index = parseInt(id, 10) % colors.length;
  return colors[index];
};

const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  return (
    <div className="flex gap-1">
      {[...Array(fullStars)].map((_, i) => (
        <Star key={`full-${i}`} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
      ))}
      {hasHalfStar && (
        <StarHalf className="w-4 h-4 fill-yellow-400 text-yellow-400" />
      )}
      {[...Array(5 - Math.ceil(rating))].map((_, i) => (
        <Star key={`empty-${i}`} className="w-4 h-4 text-gray-300 dark:text-gray-600" />
      ))}
    </div>
  );
};

const GridTestimonials: React.FC<GridTestimonialsProps> = ({
  className = '',
  testimonials = defaultTestimonials,
}) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section className={`py-16 px-4 sm:px-6 lg:px-8 ${className}`}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Join thousands of satisfied customers who have transformed their workflow with our platform.
          </p>
        </div>

        {/* Testimonials Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={item}
              whileHover={{ y: -4 }}
              className="bg-white dark:bg-gray-900 rounded-lg p-6 border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-shadow duration-300"
            >
              {/* Quote Icon */}
              <div className="mb-4">
                <Quote className="w-8 h-8 text-gray-400 dark:text-gray-600" />
              </div>

              {/* Rating */}
              <div className="mb-4">
                <StarRating rating={testimonial.rating} />
              </div>

              {/* Content */}
              <blockquote className="mb-6">
                <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                  {testimonial.content}
                </p>
              </blockquote>

              {/* Customer Info */}
              <div className="flex items-center gap-4">
                {/* Avatar */}
                <div
                  className={`w-12 h-12 rounded-full ${getAvatarColor(
                    testimonial.id
                  )} flex items-center justify-center flex-shrink-0`}
                >
                  <span className="text-white font-semibold text-sm">
                    {getInitials(testimonial.name)}
                  </span>
                </div>

                {/* Name and Role */}
                <div className="flex-1 min-w-0">
                  <cite className="not-italic">
                    <p className="font-semibold text-gray-900 dark:text-white truncate">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 truncate">
                      {testimonial.role} at {testimonial.company}
                    </p>
                  </cite>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default GridTestimonials;
