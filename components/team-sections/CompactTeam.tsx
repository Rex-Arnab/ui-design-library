'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Twitter } from 'lucide-react';

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

interface CompactTeamProps {
  className?: string;
  members?: TeamMember[];
}

const defaultMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    role: 'CEO',
    bio: 'Leading the company vision',
    social: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
    },
  },
  {
    id: '2',
    name: 'Michael Chen',
    role: 'CTO',
    bio: 'Technology strategy',
    social: {
      linkedin: 'https://linkedin.com',
    },
  },
  {
    id: '3',
    name: 'Emily Davis',
    role: 'CPO',
    bio: 'Product innovation',
    social: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
    },
  },
  {
    id: '4',
    name: 'David Wilson',
    role: 'CFO',
    bio: 'Financial operations',
    social: {
      linkedin: 'https://linkedin.com',
    },
  },
  {
    id: '5',
    name: 'Lisa Martinez',
    role: 'CMO',
    bio: 'Marketing & growth',
    social: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
    },
  },
  {
    id: '6',
    name: 'James Anderson',
    role: 'VP Sales',
    bio: 'Revenue growth',
    social: {
      linkedin: 'https://linkedin.com',
    },
  },
  {
    id: '7',
    name: 'Maria Garcia',
    role: 'VP Design',
    bio: 'User experience',
    social: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
    },
  },
  {
    id: '8',
    name: 'Robert Lee',
    role: 'VP Eng',
    bio: 'Engineering excellence',
    social: {
      linkedin: 'https://linkedin.com',
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
  'bg-teal-500',
  'bg-red-500',
];

const getInitials = (name: string): string => {
  const parts = name.split(' ');
  return parts.map(part => part[0]).join('').toUpperCase();
};

const CompactTeam: React.FC<CompactTeamProps> = ({
  className = '',
  members = defaultMembers
}) => {
  return (
    <section className={`py-12 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 ${className}`}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            Leadership
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Meet our executive team
          </p>
        </div>

        {/* Desktop: Horizontal Scroll */}
        <div className="hidden md:block">
          <div className="flex items-start gap-8 overflow-x-auto pb-4 scrollbar-hide">
            {members.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="flex-shrink-0 text-center group"
              >
                {/* Avatar */}
                <div className="mb-3">
                  <div className={`w-16 h-16 rounded-full ${avatarColors[index % avatarColors.length]} flex items-center justify-center text-white text-sm font-semibold mx-auto group-hover:scale-110 transition-transform`}>
                    {getInitials(member.name)}
                  </div>
                </div>

                {/* Info */}
                <div className="mb-2">
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-white whitespace-nowrap">
                    {member.name}
                  </h3>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    {member.role}
                  </p>
                </div>

                {/* Social Links */}
                {member.social && (
                  <div className="flex justify-center gap-2">
                    {member.social.linkedin && (
                      <a
                        href={member.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-blue-600 dark:text-gray-600 dark:hover:text-blue-400 transition-colors"
                      >
                        <Linkedin className="w-4 h-4" />
                      </a>
                    )}
                    {member.social.twitter && (
                      <a
                        href={member.social.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-blue-400 dark:text-gray-600 dark:hover:text-blue-300 transition-colors"
                      >
                        <Twitter className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile: Grid */}
        <div className="md:hidden grid grid-cols-2 gap-6">
          {members.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="text-center"
            >
              {/* Avatar */}
              <div className="mb-3">
                <div className={`w-16 h-16 rounded-full ${avatarColors[index % avatarColors.length]} flex items-center justify-center text-white text-sm font-semibold mx-auto`}>
                  {getInitials(member.name)}
                </div>
              </div>

              {/* Info */}
              <div className="mb-2">
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
                  {member.name}
                </h3>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  {member.role}
                </p>
              </div>

              {/* Social Links */}
              {member.social && (
                <div className="flex justify-center gap-2">
                  {member.social.linkedin && (
                    <a
                      href={member.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-blue-600 dark:text-gray-600 dark:hover:text-blue-400 transition-colors"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  )}
                  {member.social.twitter && (
                    <a
                      href={member.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-blue-400 dark:text-gray-600 dark:hover:text-blue-300 transition-colors"
                    >
                      <Twitter className="w-4 h-4" />
                    </a>
                  )}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompactTeam;
