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

interface MinimalTeamProps {
  className?: string;
  members?: TeamMember[];
}

const defaultMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Emma Wilson',
    role: 'Chief Executive Officer',
    bio: 'Leading product strategy and company vision',
    social: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
      email: 'mailto:emma@company.com',
    },
  },
  {
    id: '2',
    name: 'Liam Anderson',
    role: 'Chief Technology Officer',
    bio: 'Architecting scalable systems and infrastructure',
    social: {
      linkedin: 'https://linkedin.com',
      github: 'https://github.com/Rex-Arnab/ui-design-library',
      email: 'mailto:liam@company.com',
    },
  },
  {
    id: '3',
    name: 'Sophia Martinez',
    role: 'Head of Design',
    bio: 'Crafting beautiful and intuitive user experiences',
    social: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
    },
  },
  {
    id: '4',
    name: 'Noah Thompson',
    role: 'VP of Product',
    bio: 'Driving product innovation and market fit',
    social: {
      linkedin: 'https://linkedin.com',
      email: 'mailto:noah@company.com',
    },
  },
  {
    id: '5',
    name: 'Ava Garcia',
    role: 'Head of Marketing',
    bio: 'Building brand awareness and growth strategies',
    social: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
      email: 'mailto:ava@company.com',
    },
  },
  {
    id: '6',
    name: 'Ethan Davis',
    role: 'VP of Sales',
    bio: 'Scaling revenue and customer relationships',
    social: {
      linkedin: 'https://linkedin.com',
      email: 'mailto:ethan@company.com',
    },
  },
  {
    id: '7',
    name: 'Isabella Brown',
    role: 'Engineering Manager',
    bio: 'Building high-performing engineering teams',
    social: {
      linkedin: 'https://linkedin.com',
      github: 'https://github.com/Rex-Arnab/ui-design-library',
    },
  },
  {
    id: '8',
    name: 'Mason Lee',
    role: 'Senior Product Designer',
    bio: 'Designing delightful digital experiences',
    social: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
    },
  },
];

const MinimalTeam: React.FC<MinimalTeamProps> = ({
  className = '',
  members = defaultMembers
}) => {
  return (
    <section className={`py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 ${className}`}>
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Team
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            The people making it happen
          </p>
        </div>

        {/* Team List */}
        <div className="space-y-1">
          {members.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group"
            >
              <div className="py-6 border-b border-gray-200 dark:border-gray-800 hover:border-gray-400 dark:hover:border-gray-600 transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  {/* Name and Role */}
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                      {member.name}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                      {member.role}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-500">
                      {member.bio}
                    </p>
                  </div>

                  {/* Social Links */}
                  {member.social && (
                    <div className="flex gap-4 sm:flex-shrink-0">
                      {member.social.linkedin && (
                        <a
                          href={member.social.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-blue-600 dark:text-gray-600 dark:hover:text-blue-400 transition-colors"
                        >
                          <Linkedin className="w-5 h-5" />
                        </a>
                      )}
                      {member.social.twitter && (
                        <a
                          href={member.social.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-blue-400 dark:text-gray-600 dark:hover:text-blue-300 transition-colors"
                        >
                          <Twitter className="w-5 h-5" />
                        </a>
                      )}
                      {member.social.github && (
                        <a
                          href={member.social.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-gray-900 dark:text-gray-600 dark:hover:text-white transition-colors"
                        >
                          <Github className="w-5 h-5" />
                        </a>
                      )}
                      {member.social.email && (
                        <a
                          href={member.social.email}
                          className="text-gray-400 hover:text-red-600 dark:text-gray-600 dark:hover:text-red-400 transition-colors"
                        >
                          <Mail className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MinimalTeam;
