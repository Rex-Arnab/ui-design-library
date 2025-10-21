'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Twitter, Mail, Github } from 'lucide-react';

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

interface GridTeamProps {
  className?: string;
  members?: TeamMember[];
}

const defaultMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Sarah Chen',
    role: 'Chief Executive Officer',
    bio: 'Former VP at Google with 15+ years experience in scaling tech companies. Passionate about building products that matter.',
    department: 'Executive',
    location: 'San Francisco, CA',
    social: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
      email: 'mailto:sarah@company.com',
    },
  },
  {
    id: '2',
    name: 'Marcus Johnson',
    role: 'Chief Technology Officer',
    bio: 'System architect with deep expertise in distributed systems. Led engineering teams at Stripe and Amazon.',
    department: 'Engineering',
    location: 'Seattle, WA',
    social: {
      linkedin: 'https://linkedin.com',
      github: 'https://github.com/Rex-Arnab/ui-design-library',
      email: 'mailto:marcus@company.com',
    },
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    role: 'Head of Design',
    bio: 'Award-winning designer focused on creating delightful user experiences. Previously at Airbnb and Figma.',
    department: 'Design',
    location: 'New York, NY',
    social: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
      email: 'mailto:emily@company.com',
    },
  },
  {
    id: '4',
    name: 'David Park',
    role: 'VP of Engineering',
    bio: 'Full-stack engineer passionate about developer experience and building scalable infrastructure.',
    department: 'Engineering',
    location: 'Austin, TX',
    social: {
      linkedin: 'https://linkedin.com',
      github: 'https://github.com/Rex-Arnab/ui-design-library',
      twitter: 'https://twitter.com',
    },
  },
  {
    id: '5',
    name: 'Aisha Patel',
    role: 'Head of Product',
    bio: 'Product leader with a track record of shipping products that customers love. Former PM at Notion.',
    department: 'Product',
    location: 'San Francisco, CA',
    social: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
      email: 'mailto:aisha@company.com',
    },
  },
  {
    id: '6',
    name: 'James Wilson',
    role: 'VP of Sales',
    bio: 'Sales strategist who helped scale revenue from $1M to $100M ARR at previous SaaS startup.',
    department: 'Sales',
    location: 'Chicago, IL',
    social: {
      linkedin: 'https://linkedin.com',
      email: 'mailto:james@company.com',
    },
  },
  {
    id: '7',
    name: 'Lisa Martinez',
    role: 'Head of Marketing',
    bio: 'Growth marketing expert specializing in B2B SaaS. Built marketing teams at Slack and HubSpot.',
    department: 'Marketing',
    location: 'Boston, MA',
    social: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
      email: 'mailto:lisa@company.com',
    },
  },
  {
    id: '8',
    name: 'Tom Zhang',
    role: 'Lead Engineer',
    bio: 'Backend specialist focused on performance optimization and system reliability at scale.',
    department: 'Engineering',
    location: 'Vancouver, BC',
    social: {
      linkedin: 'https://linkedin.com',
      github: 'https://github.com/Rex-Arnab/ui-design-library',
      email: 'mailto:tom@company.com',
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

const GridTeam: React.FC<GridTeamProps> = ({
  className = '',
  members = defaultMembers
}) => {
  return (
    <section className={`py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 ${className}`}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Meet Our Team
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            We&apos;re a diverse team of designers, engineers, and problem solvers united by our mission to build exceptional products.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {members.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6 hover:shadow-lg transition-shadow"
            >
              {/* Avatar */}
              <div className="flex justify-center mb-4">
                <div className={`w-20 h-20 rounded-full ${avatarColors[index % avatarColors.length]} flex items-center justify-center text-white text-xl font-semibold`}>
                  {getInitials(member.name)}
                </div>
              </div>

              {/* Info */}
              <div className="text-center mb-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                  {member.name}
                </h3>
                <p className="text-sm text-blue-600 dark:text-blue-400 mb-3">
                  {member.role}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-3">
                  {member.bio}
                </p>
              </div>

              {/* Social Links */}
              {member.social && (
                <div className="flex justify-center gap-3 pt-4 border-t border-gray-200 dark:border-gray-700">
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
                  {member.social.github && (
                    <a
                      href={member.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                    >
                      <Github className="w-5 h-5" />
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GridTeam;
