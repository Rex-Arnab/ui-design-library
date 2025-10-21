'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Twitter, Linkedin, Star, StarHalf, Heart, Repeat2, CheckCircle2 } from 'lucide-react';

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

interface SocialProofTestimonialsProps {
  className?: string;
  testimonials?: Testimonial[];
}

const defaultTestimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Alex Rivera',
    role: 'Product Designer',
    company: 'DesignCo',
    content: 'Just shipped our biggest feature yet using this platform. The developer experience is incredible and the docs are top-notch. Highly recommend to any team building modern products! 🚀',
    rating: 5,
    platform: 'twitter',
    metrics: {
      likes: 1243,
      retweets: 342,
    },
  },
  {
    id: '2',
    name: 'Sarah Chen',
    role: 'Engineering Manager',
    company: 'TechCorp',
    content: 'After evaluating 12 different solutions, we chose this platform and couldn\'t be happier. The technical architecture is solid, performance is excellent, and the support team is incredibly responsive.',
    rating: 5,
    platform: 'linkedin',
    metrics: {
      likes: 892,
      retweets: 156,
    },
  },
  {
    id: '3',
    name: 'Marcus Johnson',
    role: 'Startup Founder',
    company: 'StartupHub',
    content: 'This platform has been absolutely game-changing for our startup. We went from idea to production in record time. The collaboration features keep our remote team aligned and productive.',
    rating: 5,
    platform: 'twitter',
    metrics: {
      likes: 2156,
      retweets: 587,
    },
  },
  {
    id: '4',
    name: 'Emily Watson',
    role: 'VP of Marketing',
    company: 'GrowthLabs',
    content: 'The analytics dashboard alone is worth the investment. We\'ve seen our conversion rates increase by 35% since implementing this platform. Data-driven decisions have never been easier.',
    rating: 5,
    platform: 'linkedin',
    metrics: {
      likes: 645,
      retweets: 89,
    },
  },
  {
    id: '5',
    name: 'David Park',
    role: 'CTO',
    company: 'CloudScale',
    content: 'Been using this for 6 months now. The reliability and uptime are exceptional. Our engineering team loves it, and we\'ve seen significant improvements in our deployment velocity and code quality.',
    rating: 4.5,
    platform: 'twitter',
    metrics: {
      likes: 1534,
      retweets: 423,
    },
  },
  {
    id: '6',
    name: 'Lisa Anderson',
    role: 'Head of Operations',
    company: 'EnterpriseTech',
    content: 'Implemented this across our entire organization last quarter. The team adoption was seamless, and we\'re already seeing ROI. The automation features have saved us countless hours every week.',
    rating: 5,
    platform: 'linkedin',
    metrics: {
      likes: 734,
      retweets: 112,
    },
  },
  {
    id: '7',
    name: 'James Wilson',
    role: 'Software Architect',
    company: 'DevTools Inc',
    content: 'The API design is beautiful. Clean, well-documented, and follows best practices. Integration was straightforward and we had our first deployment live in days, not weeks. Impressed! 💯',
    rating: 5,
    platform: 'twitter',
    metrics: {
      likes: 1876,
      retweets: 512,
    },
  },
  {
    id: '8',
    name: 'Rachel Green',
    role: 'Product Lead',
    company: 'InnovateCo',
    content: 'This platform has transformed how we build and ship products. Our time-to-market has decreased dramatically, and the quality of our output has improved. Highly recommend to any product team.',
    rating: 5,
    platform: 'linkedin',
    metrics: {
      likes: 923,
      retweets: 178,
    },
  },
  {
    id: '9',
    name: 'Tom Martinez',
    role: 'CEO',
    company: 'FastGrowth',
    content: 'Best investment we made this year. The platform scales effortlessly as we grow, and the customer support is phenomenal. Every team member is productive from day one. Can\'t imagine working without it now.',
    rating: 5,
    platform: 'twitter',
    metrics: {
      likes: 2487,
      retweets: 721,
    },
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

const formatNumber = (num: number): string => {
  if (num >= 1000) {
    return `${(num / 1000).toFixed(1)}k`;
  }
  return num.toString();
};

const SocialProofTestimonials: React.FC<SocialProofTestimonialsProps> = ({
  className = '',
  testimonials = defaultTestimonials,
}) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
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
            Social Proof
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            See what people are saying about us on social media.
          </p>
        </div>

        {/* Social Testimonials Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={item}
              whileHover={{ y: -4 }}
              className="bg-white dark:bg-gray-900 rounded-lg p-5 border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-shadow duration-300"
            >
              {/* Header with Platform Icon */}
              <div className="flex items-start justify-between mb-3">
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

                  {/* Name and Handle */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1">
                      <p className="font-semibold text-sm text-gray-900 dark:text-white truncate">
                        {testimonial.name}
                      </p>
                      <CheckCircle2 className="w-4 h-4 text-blue-500 flex-shrink-0" />
                    </div>
                    <p className="text-xs text-gray-600 dark:text-gray-400 truncate">
                      @{testimonial.name.toLowerCase().replace(/\s+/g, '')}
                    </p>
                  </div>
                </div>

                {/* Platform Icon */}
                <div className="flex-shrink-0">
                  {testimonial.platform === 'twitter' ? (
                    <Twitter className="w-5 h-5 text-blue-400" />
                  ) : (
                    <Linkedin className="w-5 h-5 text-blue-600" />
                  )}
                </div>
              </div>

              {/* Content */}
              <blockquote className="mb-4">
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  {testimonial.content}
                </p>
              </blockquote>

              {/* Rating */}
              <div className="mb-4">
                <StarRating rating={testimonial.rating} />
              </div>

              {/* Metrics */}
              <div className="flex items-center gap-4 pt-3 border-t border-gray-100 dark:border-gray-800">
                <div className="flex items-center gap-1.5 text-gray-600 dark:text-gray-400">
                  <Heart className="w-4 h-4" />
                  <span className="text-xs font-medium">
                    {formatNumber(testimonial.metrics?.likes || 0)}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-gray-600 dark:text-gray-400">
                  <Repeat2 className="w-4 h-4" />
                  <span className="text-xs font-medium">
                    {formatNumber(testimonial.metrics?.retweets || 0)}
                  </span>
                </div>
                <div className="flex-1 text-right">
                  <p className="text-xs text-gray-500 dark:text-gray-500">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 dark:bg-gray-800 rounded-full">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className={`w-8 h-8 rounded-full ${getAvatarColor(
                    i.toString()
                  )} border-2 border-white dark:border-gray-900 flex items-center justify-center`}
                >
                  <span className="text-white font-semibold text-xs">
                    {String.fromCharCode(65 + i)}
                  </span>
                </div>
              ))}
            </div>
            <p className="text-sm font-medium text-gray-900 dark:text-white">
              Join 10,000+ satisfied customers
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialProofTestimonials;
