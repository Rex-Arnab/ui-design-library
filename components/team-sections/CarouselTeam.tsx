'use client';

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Twitter, Mail, ChevronLeft, ChevronRight } from 'lucide-react';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  department?: string;
  location?: string;
  imageUrl?: string;
  social?: {
    linkedin?: string;
    twitter?: string;
    email?: string;
    github?: string;
  };
}

interface CarouselTeamProps {
  className?: string;
  members?: TeamMember[];
}

const defaultMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Alexandra Kim',
    role: 'Founder & CEO',
    bio: 'Serial entrepreneur with three successful exits. Passionate about democratizing technology and building teams that change the world.',
    location: 'San Francisco, CA',
    social: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
      email: 'mailto:alex@company.com',
    },
  },
  {
    id: '2',
    name: 'Rafael Santos',
    role: 'Chief Product Officer',
    bio: 'Product visionary who led product strategy at Spotify. Believes in data-driven decisions combined with intuitive design.',
    location: 'New York, NY',
    social: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
      email: 'mailto:rafael@company.com',
    },
  },
  {
    id: '3',
    name: 'Priya Sharma',
    role: 'VP of Engineering',
    bio: 'Infrastructure expert who scaled systems to billions of requests at Netflix. Loves solving complex distributed problems.',
    location: 'Seattle, WA',
    social: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
      email: 'mailto:priya@company.com',
    },
  },
  {
    id: '4',
    name: 'Connor O\'Brien',
    role: 'Creative Director',
    bio: 'Award-winning designer with a portfolio spanning Nike, Apple, and Tesla. Master of visual storytelling.',
    location: 'Los Angeles, CA',
    social: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
      email: 'mailto:connor@company.com',
    },
  },
  {
    id: '5',
    name: 'Maya Thompson',
    role: 'Head of Customer Success',
    bio: 'Customer advocate who transformed support into a revenue driver. Expert in building world-class customer experiences.',
    location: 'Austin, TX',
    social: {
      linkedin: 'https://linkedin.com',
      email: 'mailto:maya@company.com',
    },
  },
  {
    id: '6',
    name: 'Kenji Tanaka',
    role: 'Lead Data Scientist',
    bio: 'ML researcher with Ph.D. from MIT. Built AI systems powering recommendations for millions of users.',
    location: 'Boston, MA',
    social: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
      email: 'mailto:kenji@company.com',
    },
  },
];

const avatarColors = [
  'bg-blue-500',
  'bg-green-500',
  'bg-purple-500',
  'bg-orange-500',
  'bg-pink-500',
  'bg-indigo-500',
];

const getInitials = (name: string): string => {
  const parts = name.split(' ');
  return parts.map(part => part[0]).join('').toUpperCase();
};

const CarouselTeam: React.FC<CarouselTeamProps> = ({
  className = '',
  members = defaultMembers
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      const newScrollLeft = scrollContainerRef.current.scrollLeft + (direction === 'right' ? scrollAmount : -scrollAmount);
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className={`py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-950 ${className}`}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Our Leadership Team
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Meet the visionaries and innovators driving our mission forward.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white dark:bg-gray-800 rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow border border-gray-200 dark:border-gray-700"
            aria-label="Previous"
          >
            <ChevronLeft className="w-6 h-6 text-gray-900 dark:text-white" />
          </button>

          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white dark:bg-gray-800 rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow border border-gray-200 dark:border-gray-700"
            aria-label="Next"
          >
            <ChevronRight className="w-6 h-6 text-gray-900 dark:text-white" />
          </button>

          {/* Scrollable Container */}
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {members.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex-shrink-0 w-80 snap-center"
              >
                <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-8 h-full hover:shadow-xl transition-shadow">
                  {/* Avatar */}
                  <div className="flex justify-center mb-6">
                    <div className={`w-24 h-24 rounded-full ${avatarColors[index % avatarColors.length]} flex items-center justify-center text-white text-2xl font-bold`}>
                      {getInitials(member.name)}
                    </div>
                  </div>

                  {/* Info */}
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {member.name}
                    </h3>
                    <p className="text-sm text-blue-600 dark:text-blue-400 mb-4">
                      {member.role}
                    </p>
                    {member.location && (
                      <p className="text-sm text-gray-500 dark:text-gray-500 mb-4">
                        {member.location}
                      </p>
                    )}
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {member.bio}
                    </p>
                  </div>

                  {/* Social Links */}
                  {member.social && (
                    <div className="flex justify-center gap-4 pt-6 border-t border-gray-200 dark:border-gray-800">
                      {member.social.linkedin && (
                        <a
                          href={member.social.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                        >
                          <Linkedin className="w-5 h-5" />
                        </a>
                      )}
                      {member.social.twitter && (
                        <a
                          href={member.social.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 hover:text-blue-400 dark:text-gray-400 dark:hover:text-blue-300 transition-colors"
                        >
                          <Twitter className="w-5 h-5" />
                        </a>
                      )}
                      {member.social.email && (
                        <a
                          href={member.social.email}
                          className="text-gray-600 hover:text-red-600 dark:text-gray-400 dark:hover:text-red-400 transition-colors"
                        >
                          <Mail className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarouselTeam;
