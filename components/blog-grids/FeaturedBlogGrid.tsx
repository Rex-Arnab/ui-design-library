'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Calendar,
  Clock,
  User,
  ArrowRight,
  TrendingUp
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

interface FeaturedBlogGridProps {
  className?: string;
  posts?: BlogPost[];
}

// Default blog posts data
const defaultPosts: BlogPost[] = [
  {
    id: '1',
    title: 'The Complete Guide to Building Production-Ready AI Applications',
    excerpt: 'Dive deep into the world of AI application development. From model selection to deployment strategies, learn everything you need to build and scale AI products that users love. This comprehensive guide covers architecture patterns, best practices, and real-world case studies from leading companies.',
    author: {
      name: 'Dr. Sarah Mitchell',
    },
    date: '2025-10-20',
    readTime: '15 min read',
    category: 'Development',
    tags: ['AI', 'Machine Learning', 'Production'],
    imageUrl: '#6366F1',
    featured: true,
  },
  {
    id: '2',
    title: 'Modern CSS Techniques for Responsive Design',
    excerpt: 'Explore cutting-edge CSS features that make responsive design easier and more powerful than ever before.',
    author: {
      name: 'Alex Rivera',
    },
    date: '2025-10-18',
    readTime: '7 min read',
    category: 'Design',
    tags: ['CSS', 'Responsive'],
    imageUrl: '#EC4899',
  },
  {
    id: '3',
    title: 'TypeScript Best Practices for Large Teams',
    excerpt: 'Learn how to structure TypeScript projects for maximum developer productivity and code quality.',
    author: {
      name: 'Michael Chen',
    },
    date: '2025-10-16',
    readTime: '9 min read',
    category: 'Development',
    tags: ['TypeScript', 'Best Practices'],
    imageUrl: '#3B82F6',
  },
  {
    id: '4',
    title: 'Growth Marketing Strategies That Actually Work',
    excerpt: 'Proven tactics and frameworks used by successful startups to achieve sustainable growth.',
    author: {
      name: 'Emma Thompson',
    },
    date: '2025-10-14',
    readTime: '6 min read',
    category: 'Marketing',
    tags: ['Growth', 'Strategy'],
    imageUrl: '#10B981',
  },
  {
    id: '5',
    title: 'Building Accessible Web Applications',
    excerpt: 'A practical guide to implementing WCAG standards and creating inclusive digital experiences.',
    author: {
      name: 'Jordan Lee',
    },
    date: '2025-10-12',
    readTime: '8 min read',
    category: 'Design',
    tags: ['Accessibility', 'UX'],
    imageUrl: '#8B5CF6',
  },
  {
    id: '6',
    title: 'API Design Principles for Modern Applications',
    excerpt: 'Essential patterns and practices for designing APIs that developers love to use.',
    author: {
      name: 'Ryan Park',
    },
    date: '2025-10-10',
    readTime: '10 min read',
    category: 'Development',
    tags: ['API', 'Backend'],
    imageUrl: '#F59E0B',
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

const FeaturedBlogGrid: React.FC<FeaturedBlogGridProps> = ({
  className = '',
  posts = defaultPosts
}) => {
  const featuredPost = posts.find(post => post.featured) || posts[0];
  const secondaryPosts = posts.filter(post => post.id !== featuredPost.id);

  return (
    <section className={`py-16 px-4 sm:px-6 lg:px-8 ${className}`}>
      <div className="max-w-7xl mx-auto">
        {/* Featured Post */}
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
        >
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Featured Image */}
            <div
              className="aspect-[4/3] lg:aspect-auto w-full"
              style={{ backgroundColor: featuredPost.imageUrl }}
            />

            {/* Featured Content */}
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <span
                  className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${
                    categoryColors[featuredPost.category] || categoryColors['Design']
                  }`}
                >
                  {featuredPost.category}
                </span>
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-xs font-semibold rounded-full">
                  <TrendingUp className="w-3 h-3" />
                  Featured
                </span>
              </div>

              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                {featuredPost.title}
              </h2>

              <p className="text-base text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                {featuredPost.excerpt}
              </p>

              {/* Meta Information */}
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-500 mb-6">
                <div className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  <span className="font-medium">{featuredPost.author.name}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <time dateTime={featuredPost.date}>{formatDate(featuredPost.date)}</time>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{featuredPost.readTime}</span>
                </div>
              </div>

              {/* CTA Button */}
              <a
                href="#"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors w-fit group"
              >
                Read Article
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </motion.article>

        {/* Secondary Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {secondaryPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col"
            >
              {/* Image */}
              <div
                className="aspect-video w-full"
                style={{ backgroundColor: post.imageUrl }}
              />

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <span
                  className={`inline-block px-3 py-1 text-xs font-semibold rounded-full mb-3 w-fit ${
                    categoryColors[post.category] || categoryColors['Design']
                  }`}
                >
                  {post.category}
                </span>

                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2 flex-1">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-800">
                  <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-500">
                    <Clock className="w-3 h-3" />
                    <span>{post.readTime}</span>
                  </div>
                  <a
                    href="#"
                    className="text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                  >
                    Read
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedBlogGrid;
