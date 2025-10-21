'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Linkedin, Twitter, Mail, Code, Palette, TrendingUp, Users, Wrench } from 'lucide-react';

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

interface DepartmentTeamProps {
  className?: string;
  members?: TeamMember[];
}

const defaultMembers: TeamMember[] = [
  // Engineering
  {
    id: '1',
    name: 'Alex Rivera',
    role: 'VP of Engineering',
    bio: 'Leading our engineering teams to build scalable, reliable systems.',
    department: 'Engineering',
    social: { linkedin: 'https://linkedin.com', email: 'mailto:alex@company.com' },
  },
  {
    id: '2',
    name: 'Priya Sharma',
    role: 'Senior Backend Engineer',
    bio: 'Architecting distributed systems and microservices.',
    department: 'Engineering',
    social: { linkedin: 'https://linkedin.com' },
  },
  {
    id: '3',
    name: 'Marcus Chen',
    role: 'Frontend Lead',
    bio: 'Building delightful user interfaces with modern web technologies.',
    department: 'Engineering',
    social: { linkedin: 'https://linkedin.com', twitter: 'https://twitter.com' },
  },

  // Design
  {
    id: '4',
    name: 'Sofia Martinez',
    role: 'Head of Design',
    bio: 'Creating beautiful, accessible experiences for all users.',
    department: 'Design',
    social: { linkedin: 'https://linkedin.com', twitter: 'https://twitter.com' },
  },
  {
    id: '5',
    name: 'Liam O\'Brien',
    role: 'Product Designer',
    bio: 'Solving complex problems through thoughtful design.',
    department: 'Design',
    social: { linkedin: 'https://linkedin.com' },
  },
  {
    id: '6',
    name: 'Maya Patel',
    role: 'UX Researcher',
    bio: 'Understanding user needs through research and testing.',
    department: 'Design',
    social: { linkedin: 'https://linkedin.com', email: 'mailto:maya@company.com' },
  },

  // Product
  {
    id: '7',
    name: 'Jordan Blake',
    role: 'Chief Product Officer',
    bio: 'Defining product strategy and roadmap.',
    department: 'Product',
    social: { linkedin: 'https://linkedin.com', twitter: 'https://twitter.com' },
  },
  {
    id: '8',
    name: 'Emma Wilson',
    role: 'Senior Product Manager',
    bio: 'Shipping features that customers love.',
    department: 'Product',
    social: { linkedin: 'https://linkedin.com' },
  },

  // Marketing
  {
    id: '9',
    name: 'David Kim',
    role: 'Head of Marketing',
    bio: 'Growing our brand and reaching new audiences.',
    department: 'Marketing',
    social: { linkedin: 'https://linkedin.com', twitter: 'https://twitter.com' },
  },
  {
    id: '10',
    name: 'Lisa Anderson',
    role: 'Content Marketing Manager',
    bio: 'Creating compelling content that drives engagement.',
    department: 'Marketing',
    social: { linkedin: 'https://linkedin.com', twitter: 'https://twitter.com' },
  },

  // Operations
  {
    id: '11',
    name: 'Robert Taylor',
    role: 'VP of Operations',
    bio: 'Ensuring smooth day-to-day operations.',
    department: 'Operations',
    social: { linkedin: 'https://linkedin.com', email: 'mailto:robert@company.com' },
  },
  {
    id: '12',
    name: 'Nina Garcia',
    role: 'Customer Success Lead',
    bio: 'Making sure our customers achieve their goals.',
    department: 'Operations',
    social: { linkedin: 'https://linkedin.com' },
  },
];

const departments = [
  { id: 'Engineering', name: 'Engineering', icon: Code, color: 'blue' },
  { id: 'Design', name: 'Design', icon: Palette, color: 'purple' },
  { id: 'Product', name: 'Product', icon: Users, color: 'green' },
  { id: 'Marketing', name: 'Marketing', icon: TrendingUp, color: 'orange' },
  { id: 'Operations', name: 'Operations', icon: Wrench, color: 'pink' },
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

const DepartmentTeam: React.FC<DepartmentTeamProps> = ({
  className = '',
  members = defaultMembers
}) => {
  const [activeDepartment, setActiveDepartment] = useState('Engineering');

  const filteredMembers = members.filter(m => m.department === activeDepartment);

  return (
    <section className={`py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-950 ${className}`}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Our Team by Department
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Explore our talented team members organized by their areas of expertise
          </p>
        </div>

        {/* Department Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {departments.map((dept) => {
            const Icon = dept.icon;
            const isActive = activeDepartment === dept.id;
            const memberCount = members.filter(m => m.department === dept.id).length;

            return (
              <button
                key={dept.id}
                onClick={() => setActiveDepartment(dept.id)}
                className={`
                  flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all
                  ${isActive
                    ? `bg-${dept.color}-100 dark:bg-${dept.color}-900/30 text-${dept.color}-700 dark:text-${dept.color}-300 border-2 border-${dept.color}-500`
                    : 'bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 border-2 border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700'
                  }
                `}
              >
                <Icon className="w-5 h-5" />
                <span>{dept.name}</span>
                <span className={`text-xs px-2 py-0.5 rounded-full ${isActive ? 'bg-white/50 dark:bg-black/20' : 'bg-gray-100 dark:bg-gray-800'}`}>
                  {memberCount}
                </span>
              </button>
            );
          })}
        </div>

        {/* Team Members Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeDepartment}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6 hover:shadow-lg transition-shadow"
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
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {member.bio}
                  </p>
                </div>

                {/* Social Links */}
                {member.social && (
                  <div className="flex justify-center gap-3 pt-4 border-t border-gray-200 dark:border-gray-800">
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
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default DepartmentTeam;
