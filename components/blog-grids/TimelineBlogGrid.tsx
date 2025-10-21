'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Calendar,
  Clock,
  User,
  ArrowRight
} from 'lucide-react';

// TypeScript Interfaces
interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  author: {
    name: string;
    avatar?: string;
  };
  date: string;
  readTime: string;
  category: string;
  tags?: string[];
  imageUrl?: string;
  featured?: boolean;
}

interface TimelineBlogGridProps {
  className?: string;
  posts?: BlogPost[];
}

// Default blog posts data - chronologically ordered
const defaultPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Announcing Our New Design System v2.0',
    excerpt: 'We\'re thrilled to introduce the next generation of our design system, featuring enhanced accessibility, new components, and improved developer experience.',
    author: {
      name: 'Design Team',
    },
    date: '2025-10-21',
    readTime: '5 min read',
    category: 'Product',
    imageUrl: '#6366F1',
  },
  {
    id: '2',
    title: 'How We Built Real-Time Collaboration Features',
    excerpt: 'A technical deep-dive into our journey building real-time collaborative editing, from WebSockets to CRDT algorithms and conflict resolution.',
    author: {
      name: 'Michael Zhang',
    },
    date: '2025-10-19',
    readTime: '10 min read',
    category: 'Development',
    imageUrl: '#3B82F6',
  },
  {
    id: '3',
    title: 'Q3 2025 Product Update: What\'s New',
    excerpt: 'Catch up on all the features, improvements, and updates we shipped in Q3. From performance enhancements to new integrations.',
    author: {
      name: 'Sarah Johnson',
    },
    date: '2025-10-15',
    readTime: '7 min read',
    category: 'Product',
    imageUrl: '#10B981',
  },
  {
    id: '4',
    title: 'Scaling to 1 Million Users: Lessons Learned',
    excerpt: 'Our journey from startup to serving over a million users. Technical challenges, infrastructure decisions, and what we\'d do differently.',
    author: {
      name: 'David Kumar',
    },
    date: '2025-10-10',
    readTime: '12 min read',
    category: 'Development',
    imageUrl: '#F59E0B',
  },
  {
    id: '5',
    title: 'Behind the Scenes: Redesigning Our Mobile App',
    excerpt: 'The story of our mobile app redesign—from user research and prototyping to launch and what we learned along the way.',
    author: {
      name: 'Lisa Park',
    },
    date: '2025-10-05',
    readTime: '8 min read',
    category: 'Design',
    imageUrl: '#8B5CF6',
  },
  {
    id: '6',
    title: 'Introducing Dark Mode and Customization',
    excerpt: 'Dark mode is here! Plus new customization options that let you personalize your workspace exactly how you want it.',
    author: {
      name: 'Product Team',
    },
    date: '2025-09-28',
    readTime: '4 min read',
    category: 'Product',
    imageUrl: '#EC4899',
  },
];

// Format date helper
const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });
};

// Get month label for grouping
const getMonthLabel = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric'
  });
};

// Category colors
const categoryColors: Record<string, string> = {
  'Design': 'bg-purple-500',
  'Development': 'bg-blue-500',
  'Marketing': 'bg-green-500',
  'Product': 'bg-orange-500',
};

const TimelineBlogGrid: React.FC<TimelineBlogGridProps> = ({
  className = '',
  posts = defaultPosts
}) => {
  // Group posts by month
  const groupedPosts = posts.reduce((acc, post) => {
    const month = getMonthLabel(post.date);
    if (!acc[month]) {
      acc[month] = [];
    }
    acc[month].push(post);
    return acc;
  }, {} as Record<string, BlogPost[]>);

  return (
    <section className={`py-16 px-4 sm:px-6 lg:px-8 ${className}`}>
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Recent Updates
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Stay up to date with our latest news, features, and insights
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-800 hidden md:block" />

          {/* Posts grouped by month */}
          {Object.entries(groupedPosts).map(([month, monthPosts], monthIndex) => (
            <div key={month} className="mb-12 last:mb-0">
              {/* Month Label */}
              <div className="mb-8 relative">
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-blue-500 rounded-full hidden md:block -translate-x-[7.5px]" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white md:ml-8">
                  {month}
                </h3>
              </div>

              {/* Posts in this month */}
              <div className="space-y-8">
                {monthPosts.map((post, postIndex) => (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: postIndex * 0.1 }}
                    className="relative md:ml-8"
                  >
                    {/* Dot on Timeline */}
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: postIndex * 0.1 + 0.2 }}
                      className={`absolute left-0 top-6 w-3 h-3 rounded-full hidden md:block -translate-x-[13px] ${
                        categoryColors[post.category] || categoryColors['Product']
                      }`}
                    />

                    {/* Post Card */}
                    <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
                      <div className="grid md:grid-cols-3 gap-0">
                        {/* Image */}
                        <div
                          className="aspect-video md:aspect-auto"
                          style={{ backgroundColor: post.imageUrl }}
                        />

                        {/* Content */}
                        <div className="md:col-span-2 p-6">
                          {/* Category Badge */}
                          <div className="flex items-center gap-3 mb-3">
                            <span
                              className={`inline-block w-2 h-2 rounded-full ${
                                categoryColors[post.category] || categoryColors['Product']
                              }`}
                            />
                            <span className="text-xs font-semibold text-gray-500 dark:text-gray-500 uppercase tracking-wider">
                              {post.category}
                            </span>
                          </div>

                          {/* Title */}
                          <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                            {post.title}
                          </h4>

                          {/* Excerpt */}
                          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                            {post.excerpt}
                          </p>

                          {/* Meta and Link */}
                          <div className="flex flex-wrap items-center justify-between gap-4">
                            <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500 dark:text-gray-500">
                              <div className="flex items-center gap-1">
                                <User className="w-3 h-3" />
                                <span>{post.author.name}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Calendar className="w-3 h-3" />
                                <time dateTime={post.date}>{formatDate(post.date)}</time>
                              </div>
                              <div className="flex items-center gap-1">
                                <Clock className="w-3 h-3" />
                                <span>{post.readTime}</span>
                              </div>
                            </div>

                            <a
                              href="#"
                              className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors group"
                            >
                              Read more
                              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="mt-12 text-center">
          <button className="px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors">
            View Archive
          </button>
        </div>
      </div>
    </section>
  );
};

export default TimelineBlogGrid;
