'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Twitter, Mail, MapPin } from 'lucide-react';

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

interface TwoColumnTeamProps {
  className?: string;
  members?: TeamMember[];
}

const defaultMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Rachel Kim',
    role: 'Chief Executive Officer',
    bio: 'Rachel brings 15 years of leadership experience from Fortune 500 companies. She founded this company with a vision to revolutionize how teams collaborate. Under her leadership, we have grown from 5 to 200+ employees and secured $50M in funding. She is passionate about building inclusive workplaces and mentoring the next generation of leaders.',
    location: 'San Francisco, CA',
    social: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
      email: 'mailto:rachel@company.com',
    },
  },
  {
    id: '2',
    name: 'Daniel Okonkwo',
    role: 'Chief Technology Officer',
    bio: 'Daniel is a systems architect with deep expertise in distributed computing and machine learning infrastructure. He previously led engineering teams at Google and Amazon, where he built systems processing billions of requests daily. At our company, he is responsible for our technical vision and ensuring we stay at the cutting edge of technology while maintaining exceptional reliability.',
    location: 'Seattle, WA',
    social: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
      email: 'mailto:daniel@company.com',
    },
  },
  {
    id: '3',
    name: 'Sofia Rodriguez',
    role: 'Chief Product Officer',
    bio: 'Sofia has spent her career obsessing over user experience. She led product teams at Spotify and Notion, shipping features used by millions daily. She believes great products come from deep user empathy and data-driven iteration. At our company, she works closely with customers to ensure we are building exactly what they need.',
    location: 'New York, NY',
    social: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
    },
  },
  {
    id: '4',
    name: 'Alexander Chen',
    role: 'VP of Engineering',
    bio: 'Alexander is passionate about developer experience and engineering excellence. He has built and scaled engineering teams at startups and large companies alike. His focus is on creating a culture where engineers can do their best work, with modern tools, clear processes, and strong mentorship. He is also an advocate for open source and regularly contributes to major projects.',
    location: 'Austin, TX',
    social: {
      linkedin: 'https://linkedin.com',
      email: 'mailto:alex@company.com',
    },
  },
  {
    id: '5',
    name: 'Maya Thompson',
    role: 'Head of Design',
    bio: 'Maya is an award-winning designer who believes design is about solving problems, not just making things pretty. She has worked with brands like Apple, Nike, and Airbnb. Her design philosophy centers on accessibility, inclusivity, and creating experiences that delight users. She leads our design team with a focus on systematic thinking and collaborative iteration.',
    location: 'Los Angeles, CA',
    social: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
      email: 'mailto:maya@company.com',
    },
  },
  {
    id: '6',
    name: 'James Park',
    role: 'VP of Sales',
    bio: 'James has a proven track record of building and scaling sales organizations. He helped his previous company grow from $1M to $100M ARR in just four years. His approach to sales is consultative and customer-focused, believing that the best sales come from solving real customer problems. He is building a world-class sales team focused on long-term customer success.',
    location: 'Chicago, IL',
    social: {
      linkedin: 'https://linkedin.com',
      email: 'mailto:james@company.com',
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

const TwoColumnTeam: React.FC<TwoColumnTeamProps> = ({
  className = '',
  members = defaultMembers
}) => {
  return (
    <section className={`py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 ${className}`}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Meet the Team
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Get to know the leaders behind our mission and vision
          </p>
        </div>

        {/* Team Members - Alternating Layout */}
        <div className="space-y-20">
          {members.map((member, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12 items-center`}
              >
                {/* Avatar Side */}
                <div className="flex-shrink-0">
                  <div className={`w-48 h-48 rounded-2xl ${avatarColors[index % avatarColors.length]} flex items-center justify-center text-white text-5xl font-bold shadow-lg`}>
                    {getInitials(member.name)}
                  </div>
                </div>

                {/* Content Side */}
                <div className="flex-1">
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {member.name}
                    </h3>
                    <p className="text-lg text-blue-600 dark:text-blue-400 mb-2">
                      {member.role}
                    </p>
                    {member.location && (
                      <div className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400">
                        <MapPin className="w-4 h-4" />
                        {member.location}
                      </div>
                    )}
                  </div>

                  <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                    {member.bio}
                  </p>

                  {/* Social Links */}
                  {member.social && (
                    <div className="flex gap-4">
                      {member.social.linkedin && (
                        <a
                          href={member.social.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                        >
                          <Linkedin className="w-5 h-5" />
                          <span>LinkedIn</span>
                        </a>
                      )}
                      {member.social.twitter && (
                        <a
                          href={member.social.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-blue-400 dark:text-gray-400 dark:hover:text-blue-300 transition-colors"
                        >
                          <Twitter className="w-5 h-5" />
                          <span>Twitter</span>
                        </a>
                      )}
                      {member.social.email && (
                        <a
                          href={member.social.email}
                          className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-red-600 dark:text-gray-400 dark:hover:text-red-400 transition-colors"
                        >
                          <Mail className="w-5 h-5" />
                          <span>Email</span>
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TwoColumnTeam;
