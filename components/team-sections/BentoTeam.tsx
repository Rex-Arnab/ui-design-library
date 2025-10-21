'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Twitter, Mail, Github, MapPin } from 'lucide-react';

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

interface BentoTeamProps {
  className?: string;
  members?: TeamMember[];
}

const defaultMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Jordan Blake',
    role: 'Co-Founder & CEO',
    bio: 'Visionary leader with 20 years in tech. Built and sold two startups before founding this company. Stanford MBA and engineer at heart.',
    location: 'San Francisco, CA',
    social: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
      email: 'mailto:jordan@company.com',
    },
  },
  {
    id: '2',
    name: 'Samantha Lee',
    role: 'Co-Founder & CTO',
    bio: 'Former tech lead at Meta. Expert in distributed systems and ML infrastructure.',
    location: 'Seattle, WA',
    social: {
      linkedin: 'https://linkedin.com',
      github: 'https://github.com/Rex-Arnab/ui-design-library',
      twitter: 'https://twitter.com',
    },
  },
  {
    id: '3',
    name: 'Diego Martinez',
    role: 'Head of Design',
    bio: 'Design leader focused on accessibility and inclusive design.',
    location: 'Austin, TX',
    social: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
    },
  },
  {
    id: '4',
    name: 'Nina Patel',
    role: 'VP of Product',
    bio: 'Product strategist who shipped 100+ features used by millions.',
    location: 'New York, NY',
    social: {
      linkedin: 'https://linkedin.com',
      email: 'mailto:nina@company.com',
    },
  },
  {
    id: '5',
    name: 'Marcus Brown',
    role: 'Engineering Manager',
    bio: 'Backend specialist passionate about developer experience and API design.',
    location: 'Chicago, IL',
    social: {
      linkedin: 'https://linkedin.com',
      github: 'https://github.com/Rex-Arnab/ui-design-library',
    },
  },
  {
    id: '6',
    name: 'Yuki Tanaka',
    role: 'Senior Designer',
    bio: 'UI/UX designer creating delightful experiences.',
    location: 'Los Angeles, CA',
    social: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
    },
  },
  {
    id: '7',
    name: 'Olivia Chen',
    role: 'Product Manager',
    bio: 'Data-driven PM focused on user growth.',
    location: 'Boston, MA',
    social: {
      linkedin: 'https://linkedin.com',
      email: 'mailto:olivia@company.com',
    },
  },
  {
    id: '8',
    name: 'Ahmed Hassan',
    role: 'DevOps Lead',
    bio: 'Infrastructure wizard ensuring 99.99% uptime.',
    location: 'Toronto, ON',
    social: {
      linkedin: 'https://linkedin.com',
      github: 'https://github.com/Rex-Arnab/ui-design-library',
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

const BentoTeam: React.FC<BentoTeamProps> = ({
  className = '',
  members = defaultMembers
}) => {
  return (
    <section className={`py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 ${className}`}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            The Team Behind the Magic
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A collective of makers, thinkers, and innovators working together to build the future.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-fr">
          {/* Large Featured Card - Founder */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2 md:row-span-2 bg-blue-50 dark:bg-blue-900/20 rounded-2xl border border-blue-200 dark:border-blue-800 p-8 hover:shadow-xl transition-shadow"
          >
            <div className="h-full flex flex-col">
              <div className="flex items-start gap-6 mb-6">
                <div className={`w-24 h-24 rounded-full ${avatarColors[0]} flex items-center justify-center text-white text-2xl font-bold flex-shrink-0`}>
                  {getInitials(members[0].name)}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {members[0].name}
                  </h3>
                  <p className="text-sm text-blue-600 dark:text-blue-400 mb-2">
                    {members[0].role}
                  </p>
                  {members[0].location && (
                    <div className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400">
                      <MapPin className="w-4 h-4" />
                      {members[0].location}
                    </div>
                  )}
                </div>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-6 flex-1">
                {members[0].bio}
              </p>
              {members[0].social && (
                <div className="flex gap-4">
                  {members[0].social.linkedin && (
                    <a href={members[0].social.linkedin} className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </a>
                  )}
                  {members[0].social.twitter && (
                    <a href={members[0].social.twitter} className="text-gray-600 hover:text-blue-400 dark:text-gray-400 dark:hover:text-blue-300 transition-colors">
                      <Twitter className="w-5 h-5" />
                    </a>
                  )}
                  {members[0].social.email && (
                    <a href={members[0].social.email} className="text-gray-600 hover:text-red-600 dark:text-gray-400 dark:hover:text-red-400 transition-colors">
                      <Mail className="w-5 h-5" />
                    </a>
                  )}
                </div>
              )}
            </div>
          </motion.div>

          {/* Medium Card - CTO */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-2 bg-purple-50 dark:bg-purple-900/20 rounded-2xl border border-purple-200 dark:border-purple-800 p-6 hover:shadow-xl transition-shadow"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className={`w-16 h-16 rounded-full ${avatarColors[1]} flex items-center justify-center text-white text-lg font-bold`}>
                {getInitials(members[1].name)}
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                  {members[1].name}
                </h3>
                <p className="text-sm text-purple-600 dark:text-purple-400">
                  {members[1].role}
                </p>
              </div>
            </div>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
              {members[1].bio}
            </p>
            {members[1].social && (
              <div className="flex gap-3">
                {members[1].social.linkedin && (
                  <a href={members[1].social.linkedin} className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                    <Linkedin className="w-4 h-4" />
                  </a>
                )}
                {members[1].social.github && (
                  <a href={members[1].social.github} className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                    <Github className="w-4 h-4" />
                  </a>
                )}
              </div>
            )}
          </motion.div>

          {/* Regular Cards */}
          {members.slice(2, 8).map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index + 2) * 0.1 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-start gap-3 mb-3">
                <div className={`w-12 h-12 rounded-full ${avatarColors[(index + 2) % avatarColors.length]} flex items-center justify-center text-white text-sm font-bold`}>
                  {getInitials(member.name)}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-bold text-gray-900 dark:text-white mb-1 truncate">
                    {member.name}
                  </h3>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    {member.role}
                  </p>
                </div>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300 line-clamp-2 mb-3">
                {member.bio}
              </p>
              {member.social && (
                <div className="flex gap-2">
                  {member.social.linkedin && (
                    <a href={member.social.linkedin} className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                      <Linkedin className="w-4 h-4" />
                    </a>
                  )}
                  {member.social.github && (
                    <a href={member.social.github} className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                  {member.social.email && (
                    <a href={member.social.email} className="text-gray-600 hover:text-red-600 dark:text-gray-400 dark:hover:text-red-400">
                      <Mail className="w-4 h-4" />
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

export default BentoTeam;
