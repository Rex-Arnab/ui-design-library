'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Twitter, Mail, Users, Globe, Award } from 'lucide-react';

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

interface HeroTeamProps {
  className?: string;
  members?: TeamMember[];
}

const defaultMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Victoria Chen',
    role: 'Founder & CEO',
    bio: 'Entrepreneur who sold previous startup to Google. Believes in radical transparency and remote-first culture.',
    location: 'San Francisco, CA',
    social: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
      email: 'mailto:victoria@company.com',
    },
  },
  {
    id: '2',
    name: 'Marcus Johnson',
    role: 'Chief Product Officer',
    bio: 'Product visionary who led innovation at Airbnb. Expert in marketplace dynamics and user psychology.',
    location: 'New York, NY',
    social: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
    },
  },
  {
    id: '3',
    name: 'Aria Patel',
    role: 'VP of Engineering',
    bio: 'Infrastructure specialist who scaled systems at Uber. Passionate about mentorship and engineering culture.',
    location: 'Seattle, WA',
    social: {
      linkedin: 'https://linkedin.com',
      email: 'mailto:aria@company.com',
    },
  },
  {
    id: '4',
    name: 'Lucas Martin',
    role: 'Head of Design',
    bio: 'Design leader focused on accessibility. Former principal designer at Microsoft and Adobe.',
    location: 'Austin, TX',
    social: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
    },
  },
  {
    id: '5',
    name: 'Nina Rodriguez',
    role: 'VP of Sales',
    bio: 'Sales strategist who grew revenue from $0 to $50M ARR at previous company.',
    location: 'Chicago, IL',
    social: {
      linkedin: 'https://linkedin.com',
      email: 'mailto:nina@company.com',
    },
  },
  {
    id: '6',
    name: 'James Kim',
    role: 'Head of Marketing',
    bio: 'Growth expert specializing in viral loops. Built marketing teams at Dropbox and Slack.',
    location: 'Los Angeles, CA',
    social: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
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

const HeroTeam: React.FC<HeroTeamProps> = ({
  className = '',
  members = defaultMembers
}) => {
  return (
    <section className={`py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 ${className}`}>
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6"
          >
            Built by people who care
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-12"
          >
            We&apos;re a diverse team of designers, engineers, and problem-solvers from around the world, united by our mission to build products that make a difference.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto mb-16"
          >
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Users className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                <p className="text-3xl font-bold text-gray-900 dark:text-white">50+</p>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Team Members</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Globe className="w-6 h-6 text-green-600 dark:text-green-400" />
                <p className="text-3xl font-bold text-gray-900 dark:text-white">12</p>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Countries</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Award className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                <p className="text-3xl font-bold text-gray-900 dark:text-white">100%</p>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Remote First</p>
            </div>
          </motion.div>
        </div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Our Values
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Transparency</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Open communication and honest feedback at every level
              </p>
            </div>
            <div className="text-center">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Innovation</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Continuously pushing boundaries and trying new things
              </p>
            </div>
            <div className="text-center">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Impact</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Building products that genuinely improve people&apos;s lives
              </p>
            </div>
          </div>
        </motion.div>

        {/* Leadership Team */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Leadership Team
          </h3>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {members.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 hover:shadow-xl transition-all"
            >
              {/* Avatar */}
              <div className="flex justify-center mb-4">
                <div className={`w-20 h-20 rounded-full ${avatarColors[index % avatarColors.length]} flex items-center justify-center text-white text-xl font-semibold`}>
                  {getInitials(member.name)}
                </div>
              </div>

              {/* Info */}
              <div className="text-center mb-4">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                  {member.name}
                </h4>
                <p className="text-sm text-blue-600 dark:text-blue-400 mb-2">
                  {member.role}
                </p>
                {member.location && (
                  <p className="text-xs text-gray-500 dark:text-gray-500 mb-3">
                    {member.location}
                  </p>
                )}
                <p className="text-sm text-gray-600 dark:text-gray-400">
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

export default HeroTeam;
