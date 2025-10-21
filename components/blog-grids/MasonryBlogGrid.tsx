'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Calendar,
  Clock,
  User,
  Tag
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

interface MasonryBlogGridProps {
  className?: string;
  posts?: BlogPost[];
}

// Default blog posts data with varied excerpt lengths
const defaultPosts: BlogPost[] = [
  {
    id: '1',
    title: 'The Art of Minimalist Web Design',
    excerpt: 'Minimalism in web design is more than just aesthetics—it\'s a philosophy. Learn how to create impactful designs that prioritize user experience through simplicity, white space, and intentional choices. Discover techniques used by top designers.',
    author: {
      name: 'Sophie Anderson',
    },
    date: '2025-10-19',
    readTime: '6 min read',
    category: 'Design',
    tags: ['Minimalism', 'UI/UX'],
    imageUrl: '#8B5CF6',
  },
  {
    id: '2',
    title: 'Mastering React Hooks',
    excerpt: 'A deep dive into React Hooks and how they revolutionize state management and side effects in functional components.',
    author: {
      name: 'James Wilson',
    },
    date: '2025-10-17',
    readTime: '8 min read',
    category: 'Development',
    tags: ['React', 'JavaScript'],
    imageUrl: '#3B82F6',
  },
  {
    id: '3',
    title: 'Content Marketing ROI: Measuring What Matters',
    excerpt: 'Stop guessing and start measuring. This comprehensive guide walks you through setting up analytics, defining KPIs, and calculating the true ROI of your content marketing efforts. Includes templates and frameworks you can implement today.',
    author: {
      name: 'Maria Garcia',
    },
    date: '2025-10-15',
    readTime: '10 min read',
    category: 'Marketing',
    tags: ['Content', 'Analytics', 'ROI'],
    imageUrl: '#10B981',
  },
  {
    id: '4',
    title: 'Database Optimization Techniques',
    excerpt: 'Learn proven strategies to optimize database performance and reduce query times significantly.',
    author: {
      name: 'David Kumar',
    },
    date: '2025-10-13',
    readTime: '7 min read',
    category: 'Development',
    tags: ['Database', 'Performance'],
    imageUrl: '#F59E0B',
  },
  {
    id: '5',
    title: 'Product Discovery: Finding Problems Worth Solving',
    excerpt: 'The best products solve real problems. Explore frameworks and methodologies for effective product discovery, including customer interviews, market research, and validation techniques that help you build what users actually need.',
    author: {
      name: 'Rachel Kim',
    },
    date: '2025-10-11',
    readTime: '9 min read',
    category: 'Product',
    tags: ['Product Management', 'Discovery'],
    imageUrl: '#EC4899',
  },
  {
    id: '6',
    title: 'Advanced TypeScript Patterns',
    excerpt: 'Unlock the full potential of TypeScript with advanced patterns and utility types.',
    author: {
      name: 'Chris Taylor',
    },
    date: '2025-10-09',
    readTime: '12 min read',
    category: 'Development',
    tags: ['TypeScript', 'Advanced'],
    imageUrl: '#6366F1',
  },
  {
    id: '7',
    title: 'Color Psychology in Brand Design',
    excerpt: 'Colors evoke emotions and influence decisions. Understand how to strategically use color psychology in your brand design to communicate values, build trust, and drive user actions. Backed by research and real-world examples.',
    author: {
      name: 'Anna Martinez',
    },
    date: '2025-10-07',
    readTime: '5 min read',
    category: 'Design',
    tags: ['Branding', 'Psychology'],
    imageUrl: '#EF4444',
  },
  {
    id: '8',
    title: 'SEO in 2025: What You Need to Know',
    excerpt: 'Search algorithms evolve rapidly. Stay ahead with the latest SEO strategies and best practices.',
    author: {
      name: 'Tom Jackson',
    },
    date: '2025-10-05',
    readTime: '8 min read',
    category: 'Marketing',
    tags: ['SEO', 'Digital Marketing'],
    imageUrl: '#14B8A6',
  },
  {
    id: '9',
    title: 'Building Real-Time Applications with WebSockets',
    excerpt: 'Real-time features are no longer optional. Learn how to implement WebSockets for instant communication, live updates, and collaborative features. From basic connections to scaling strategies for millions of concurrent users.',
    author: {
      name: 'Lisa Chen',
    },
    date: '2025-10-03',
    readTime: '11 min read',
    category: 'Development',
    tags: ['WebSockets', 'Real-time'],
    imageUrl: '#F97316',
  },
];

// Category colors
const categoryColors: Record<string, string> = {
  'Design': 'bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300',
  'Development': 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300',
  'Marketing': 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300',
  'Product': 'bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300',
};

// Format date helper
const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });
};

const MasonryBlogGrid: React.FC<MasonryBlogGridProps> = ({
  className = '',
  posts = defaultPosts
}) => {
  return (
    <section className={`py-16 px-4 sm:px-6 lg:px-8 ${className}`}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Explore Our Blog
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
            Curated insights and stories from our team of experts
          </p>
        </div>

        {/* Masonry Grid using CSS columns */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6">
          {posts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="break-inside-avoid mb-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              {/* Image */}
              <div
                className="aspect-video w-full"
                style={{ backgroundColor: post.imageUrl }}
              />

              {/* Content */}
              <div className="p-6">
                {/* Category */}
                <span
                  className={`inline-block px-3 py-1 text-xs font-semibold rounded-full mb-3 ${
                    categoryColors[post.category] || categoryColors['Design']
                  }`}
                >
                  {post.category}
                </span>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {post.title}
                </h3>

                {/* Excerpt - no line-clamp for varied heights */}
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  {post.excerpt}
                </p>

                {/* Tags */}
                {post.tags && post.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1 px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs rounded"
                      >
                        <Tag className="w-3 h-3" />
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                {/* Meta Information */}
                <div className="flex flex-wrap gap-4 text-xs text-gray-500 dark:text-gray-500 pt-4 border-t border-gray-200 dark:border-gray-800">
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
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MasonryBlogGrid;
