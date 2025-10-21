'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X, Star, StarHalf } from 'lucide-react';

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

interface VideoTestimonialsProps {
  className?: string;
  testimonials?: Testimonial[];
}

const defaultTestimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Mitchell',
    role: 'VP of Product',
    company: 'TechNova',
    content: 'Our product velocity increased by 3x after implementing this platform. The collaboration features alone are worth the investment.',
    rating: 5,
  },
  {
    id: '2',
    name: 'Carlos Rodriguez',
    role: 'CEO',
    company: 'StartupLabs',
    content: 'This is the kind of tool that makes you wonder how you ever worked without it. Absolutely essential for modern teams.',
    rating: 5,
  },
  {
    id: '3',
    name: 'Jennifer Wu',
    role: 'Engineering Director',
    company: 'CloudFirst',
    content: 'The technical foundation is solid, the API is well-designed, and the developer experience is outstanding. A rare combination.',
    rating: 5,
  },
  {
    id: '4',
    name: 'Marcus Thompson',
    role: 'Chief Marketing Officer',
    company: 'GrowthCo',
    content: 'The analytics and insights transformed our marketing strategy. We now make decisions based on real data, not gut feeling.',
    rating: 4.5,
  },
  {
    id: '5',
    name: 'Amanda Foster',
    role: 'Head of Operations',
    company: 'Enterprise Solutions',
    content: 'The efficiency gains have been remarkable. Tasks that took hours now take minutes. Our team is more productive than ever.',
    rating: 5,
  },
  {
    id: '6',
    name: 'David Chang',
    role: 'CTO',
    company: 'SecureTech',
    content: 'Security, performance, and reliability - this platform delivers on all fronts. It\'s become mission-critical for our infrastructure.',
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
    <div className="flex gap-0.5">
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

const VideoTestimonials: React.FC<VideoTestimonialsProps> = ({
  className = '',
  testimonials = defaultTestimonials,
}) => {
  const [selectedVideo, setSelectedVideo] = useState<Testimonial | null>(null);

  const openModal = (testimonial: Testimonial) => {
    setSelectedVideo(testimonial);
  };

  const closeModal = () => {
    setSelectedVideo(null);
  };

  return (
    <section className={`py-16 px-4 sm:px-6 lg:px-8 ${className}`}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Customer Video Testimonials
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Hear directly from our customers about how we've helped transform their business.
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group cursor-pointer"
              onClick={() => openModal(testimonial)}
            >
              {/* Video Thumbnail */}
              <div className="relative rounded-lg overflow-hidden mb-4 aspect-video bg-gray-200 dark:bg-gray-800">
                {/* Thumbnail with Avatar */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className={`w-24 h-24 rounded-full ${getAvatarColor(
                      testimonial.id
                    )} flex items-center justify-center opacity-60 group-hover:opacity-80 transition-opacity`}
                  >
                    <span className="text-white font-bold text-2xl">
                      {getInitials(testimonial.name)}
                    </span>
                  </div>
                </div>

                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-16 h-16 rounded-full bg-white dark:bg-gray-900 shadow-xl flex items-center justify-center group-hover:bg-gray-100 dark:group-hover:bg-gray-800 transition-colors"
                  >
                    <Play className="w-8 h-8 text-gray-900 dark:text-white ml-1" />
                  </motion.div>
                </div>

                {/* Duration Badge */}
                <div className="absolute bottom-3 right-3 px-2 py-1 bg-black/70 text-white text-xs rounded">
                  2:30
                </div>
              </div>

              {/* Customer Info */}
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  {/* Small Avatar */}
                  <div
                    className={`w-10 h-10 rounded-full ${getAvatarColor(
                      testimonial.id
                    )} flex items-center justify-center flex-shrink-0`}
                  >
                    <span className="text-white font-semibold text-xs">
                      {getInitials(testimonial.name)}
                    </span>
                  </div>

                  {/* Name and Company */}
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-gray-900 dark:text-white truncate">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 truncate">
                      {testimonial.role}
                    </p>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-2">
                  <StarRating rating={testimonial.rating} />
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {testimonial.rating}
                  </span>
                </div>

                {/* Quote Preview */}
                <p className="text-sm text-gray-700 dark:text-gray-300 line-clamp-2">
                  &ldquo;{testimonial.content}&rdquo;
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Video Modal */}
        <AnimatePresence>
          {selectedVideo && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden max-w-4xl w-full shadow-2xl"
              >
                {/* Modal Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-800">
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-12 h-12 rounded-full ${getAvatarColor(
                        selectedVideo.id
                      )} flex items-center justify-center`}
                    >
                      <span className="text-white font-semibold">
                        {getInitials(selectedVideo.name)}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-gray-900 dark:text-white">
                        {selectedVideo.name}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {selectedVideo.role} at {selectedVideo.company}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={closeModal}
                    className="w-10 h-10 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 flex items-center justify-center transition-colors"
                  >
                    <X className="w-6 h-6 text-gray-600 dark:text-gray-400" />
                  </button>
                </div>

                {/* Video Player Placeholder */}
                <div className="aspect-video bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
                  <div className="text-center">
                    <Play className="w-16 h-16 text-gray-400 dark:text-gray-600 mx-auto mb-4" />
                    <p className="text-gray-600 dark:text-gray-400">
                      Video player would be embedded here
                    </p>
                  </div>
                </div>

                {/* Modal Footer */}
                <div className="p-6 border-t border-gray-200 dark:border-gray-800">
                  <div className="mb-4">
                    <StarRating rating={selectedVideo.rating} />
                  </div>
                  <p className="text-base text-gray-700 dark:text-gray-300">
                    &ldquo;{selectedVideo.content}&rdquo;
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default VideoTestimonials;
