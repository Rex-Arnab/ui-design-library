'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, Star, StarHalf, ChevronLeft, ChevronRight } from 'lucide-react';

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

interface CarouselTestimonialsProps {
  className?: string;
  testimonials?: Testimonial[];
  autoRotate?: boolean;
  rotateInterval?: number;
}

const defaultTestimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Alexandra Wong',
    role: 'Founder & CEO',
    company: 'StartupLabs',
    content: 'This is hands down the best investment we\'ve made for our business. The platform is intuitive, powerful, and has scaled beautifully with our growth. Our team productivity has increased by 60% and we\'re shipping features faster than ever.',
    rating: 5,
  },
  {
    id: '2',
    name: 'Marcus Johnson',
    role: 'VP of Engineering',
    company: 'TechCorp',
    content: 'As an engineering leader, I\'m incredibly impressed with the technical excellence of this product. The API is well-designed, the documentation is comprehensive, and the performance is outstanding. It\'s rare to find a solution that checks all the boxes.',
    rating: 5,
  },
  {
    id: '3',
    name: 'Sophia Martinez',
    role: 'Chief Marketing Officer',
    company: 'GrowthAgency',
    content: 'The analytics and insights we get from this platform have transformed our marketing strategy. We can now make data-driven decisions with confidence. The ROI has been phenomenal, and our campaigns are performing better than ever.',
    rating: 5,
  },
  {
    id: '4',
    name: 'Ryan O\'Connor',
    role: 'Product Director',
    company: 'InnovateTech',
    content: 'Our product team loves this platform. The collaboration features are top-notch, and the user experience is seamless. We\'ve been able to streamline our entire product development process, from ideation to launch.',
    rating: 4.5,
  },
  {
    id: '5',
    name: 'Priya Sharma',
    role: 'Head of Operations',
    company: 'Enterprise Solutions',
    content: 'The operational efficiency gains have been remarkable. What used to take our team weeks now takes days. The automation capabilities are sophisticated yet easy to configure. This platform has become mission-critical for our organization.',
    rating: 5,
  },
  {
    id: '6',
    name: 'Thomas Anderson',
    role: 'CTO',
    company: 'SecureCloud',
    content: 'Security and compliance are our top priorities, and this platform exceeds our stringent requirements. The enterprise-grade security features, combined with excellent performance, make it the perfect choice for our infrastructure needs.',
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
  ];
  const index = parseInt(id, 10) % colors.length;
  return colors[index];
};

const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  return (
    <div className="flex gap-1 justify-center">
      {[...Array(fullStars)].map((_, i) => (
        <Star key={`full-${i}`} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
      ))}
      {hasHalfStar && (
        <StarHalf className="w-5 h-5 fill-yellow-400 text-yellow-400" />
      )}
      {[...Array(5 - Math.ceil(rating))].map((_, i) => (
        <Star key={`empty-${i}`} className="w-5 h-5 text-gray-300 dark:text-gray-600" />
      ))}
    </div>
  );
};

const CarouselTestimonials: React.FC<CarouselTestimonialsProps> = ({
  className = '',
  testimonials = defaultTestimonials,
  autoRotate = true,
  rotateInterval = 5000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (!autoRotate) return;

    const interval = setInterval(() => {
      next();
    }, rotateInterval);

    return () => clearInterval(interval);
  }, [currentIndex, autoRotate, rotateInterval]);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className={`py-16 px-4 sm:px-6 lg:px-8 ${className}`}>
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Loved by Industry Leaders
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            See why thousands of companies trust us with their most important work.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Main Testimonial */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 sm:p-12 border border-gray-200 dark:border-gray-800 shadow-xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="text-center"
              >
                {/* Quote Icon */}
                <div className="mb-6 flex justify-center">
                  <Quote className="w-12 h-12 text-gray-400 dark:text-gray-600" />
                </div>

                {/* Rating */}
                <div className="mb-6">
                  <StarRating rating={currentTestimonial.rating} />
                </div>

                {/* Content */}
                <blockquote className="mb-8">
                  <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
                    &ldquo;{currentTestimonial.content}&rdquo;
                  </p>
                </blockquote>

                {/* Customer Info */}
                <div className="flex flex-col items-center gap-4">
                  {/* Avatar */}
                  <div
                    className={`w-16 h-16 rounded-full ${getAvatarColor(
                      currentTestimonial.id
                    )} flex items-center justify-center`}
                  >
                    <span className="text-white font-semibold text-lg">
                      {getInitials(currentTestimonial.name)}
                    </span>
                  </div>

                  {/* Name and Role */}
                  <cite className="not-italic">
                    <p className="font-semibold text-lg text-gray-900 dark:text-white">
                      {currentTestimonial.name}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {currentTestimonial.role} at {currentTestimonial.company}
                    </p>
                  </cite>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-6 w-12 h-12 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg flex items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600 dark:text-gray-400" />
          </button>

          <button
            onClick={next}
            aria-label="Next testimonial"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-6 w-12 h-12 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg flex items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-gray-600 dark:text-gray-400" />
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              aria-label={`Go to testimonial ${index + 1}`}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-gray-900 dark:bg-white w-8'
                  : 'bg-gray-300 dark:bg-gray-700'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CarouselTestimonials;
