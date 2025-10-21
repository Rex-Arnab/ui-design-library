'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Calendar,
  ArrowRight,
  User
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

interface MinimalBlogGridProps {
  className?: string;
  posts?: BlogPost[];
}

// Default blog posts data
const defaultPosts: BlogPost[] = [
  {
    id: '1',
    title: 'The Philosophy of Product Design',
    excerpt: 'Exploring the intersection of aesthetics, function, and human behavior. What makes a product not just usable, but delightful? Dive into the principles that separate good design from great design.',
    author: {
      name: 'Marcus Chen',
    },
    date: '2025-10-20',
    readTime: '8 min read',
    category: 'Design',
  },
  {
    id: '2',
    title: 'Writing Clean, Maintainable Code',
    excerpt: 'Code is read more often than it\'s written. Learn the principles and practices that make your codebase a joy to work with, from naming conventions to architectural patterns.',
    author: {
      name: 'Elena Rodriguez',
    },
    date: '2025-10-18',
    readTime: '10 min read',
    category: 'Development',
  },
  {
    id: '3',
    title: 'Storytelling in Content Marketing',
    excerpt: 'Facts tell, but stories sell. Discover how to craft narratives that resonate with your audience and drive engagement, conversion, and loyalty.',
    author: {
      name: 'James Mitchell',
    },
    date: '2025-10-16',
    readTime: '6 min read',
    category: 'Marketing',
  },
  {
    id: '4',
    title: 'Product Metrics That Matter',
    excerpt: 'Not all metrics are created equal. Focus on the numbers that actually drive product decisions and business outcomes.',
    author: {
      name: 'Sarah Kim',
    },
    date: '2025-10-14',
    readTime: '7 min read',
    category: 'Product',
  },
  {
    id: '5',
    title: 'The Future of Web Development',
    excerpt: 'Edge computing, AI integration, and serverless architectures. Explore the technologies shaping the next decade of web development.',
    author: {
      name: 'Alex Thompson',
    },
    date: '2025-10-12',
    readTime: '9 min read',
    category: 'Development',
  },
  {
    id: '6',
    title: 'Typography for the Web',
    excerpt: 'Typography is the foundation of web design. Master the art of type selection, hierarchy, and spacing for better readability and visual impact.',
    author: {
      name: 'Nina Patel',
    },
    date: '2025-10-10',
    readTime: '5 min read',
    category: 'Design',
  },
];

// Format date helper
const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });
};

const MinimalBlogGrid: React.FC<MinimalBlogGridProps> = ({
  className = '',
  posts = defaultPosts
}) => {
  return (
    <section className={`py-24 px-4 sm:px-6 lg:px-8 ${className}`}>
      <div className="max-w-4xl mx-auto">
        {/* Minimal Header */}
        <div className="mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Writing
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Thoughts on design, development, and building products
          </p>
        </div>

        {/* Minimal Post List */}
        <div className="space-y-16">
          {posts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              {/* Category Label */}
              <div className="mb-3">
                <span className="text-sm font-medium text-gray-500 dark:text-gray-500 uppercase tracking-wider">
                  {post.category}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">
                <a href="#" className="inline-block">
                  {post.title}
                </a>
              </h3>

              {/* Excerpt */}
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                {post.excerpt}
              </p>

              {/* Meta and Read More */}
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-6 text-sm text-gray-500 dark:text-gray-500">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>{post.author.name}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <time dateTime={post.date}>{formatDate(post.date)}</time>
                  </div>
                  <span>{post.readTime}</span>
                </div>

                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-gray-900 dark:text-white hover:gap-3 transition-all group"
                >
                  Read article
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              {/* Divider */}
              {index < posts.length - 1 && (
                <div className="mt-16 h-px bg-gray-200 dark:bg-gray-800" />
              )}
            </motion.article>
          ))}
        </div>

        {/* View All Link */}
        <div className="mt-20 text-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-lg font-semibold text-gray-900 dark:text-white hover:gap-3 transition-all"
          >
            View all articles
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default MinimalBlogGrid;
