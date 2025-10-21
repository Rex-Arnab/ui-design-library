'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Calendar,
  Clock,
  User,
  ArrowRight,
  type LucideIcon
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

interface ClassicBlogGridProps {
  className?: string;
  posts?: BlogPost[];
}

// Default blog posts data
const defaultPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Building Scalable Design Systems for Modern Web Applications',
    excerpt: 'Learn how to create and maintain design systems that scale with your product and team. Discover best practices for component architecture and token management.',
    author: {
      name: 'Sarah Chen',
    },
    date: '2025-10-18',
    readTime: '8 min read',
    category: 'Design',
    tags: ['Design Systems', 'UI/UX'],
    imageUrl: '#3B82F6',
  },
  {
    id: '2',
    title: 'The Future of React Server Components and Streaming',
    excerpt: 'Explore the latest developments in React Server Components and how streaming can dramatically improve your application performance and user experience.',
    author: {
      name: 'Michael Torres',
    },
    date: '2025-10-15',
    readTime: '10 min read',
    category: 'Development',
    tags: ['React', 'Performance'],
    imageUrl: '#10B981',
  },
  {
    id: '3',
    title: 'Content Strategy That Converts: A Data-Driven Approach',
    excerpt: 'Discover how to build a content strategy backed by data and analytics. Learn the frameworks top marketers use to drive conversions and engagement.',
    author: {
      name: 'Emily Rodriguez',
    },
    date: '2025-10-12',
    readTime: '6 min read',
    category: 'Marketing',
    tags: ['Content', 'Strategy'],
    imageUrl: '#8B5CF6',
  },
  {
    id: '4',
    title: 'Microservices Architecture: When to Use and When to Avoid',
    excerpt: 'A comprehensive guide to microservices architecture, including real-world case studies, common pitfalls, and decision frameworks for your next project.',
    author: {
      name: 'David Kim',
    },
    date: '2025-10-09',
    readTime: '12 min read',
    category: 'Development',
    tags: ['Architecture', 'Backend'],
    imageUrl: '#F59E0B',
  },
  {
    id: '5',
    title: 'Product-Led Growth: Strategies from $100M Companies',
    excerpt: 'Learn how successful companies leverage product-led growth strategies to scale efficiently. Includes actionable insights and real metrics from industry leaders.',
    author: {
      name: 'Jessica Park',
    },
    date: '2025-10-06',
    readTime: '7 min read',
    category: 'Product',
    tags: ['Growth', 'Strategy'],
    imageUrl: '#EF4444',
  },
  {
    id: '6',
    title: 'Mastering CSS Grid and Flexbox: A Visual Guide',
    excerpt: 'A complete visual guide to modern CSS layout techniques. Learn when to use Grid vs Flexbox with interactive examples and practical use cases.',
    author: {
      name: 'Alex Johnson',
    },
    date: '2025-10-03',
    readTime: '5 min read',
    category: 'Design',
    tags: ['CSS', 'Frontend'],
    imageUrl: '#EC4899',
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

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

const ClassicBlogGrid: React.FC<ClassicBlogGridProps> = ({
  className = '',
  posts = defaultPosts
}) => {
  return (
    <section className={`py-16 px-4 sm:px-6 lg:px-8 ${className}`}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Latest Articles
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Insights, tutorials, and resources to help you build better products
          </p>
        </div>

        {/* Blog Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {posts.map((post) => (
            <motion.article
              key={post.id}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col"
            >
              {/* Image Placeholder */}
              <div
                className="aspect-video w-full"
                style={{ backgroundColor: post.imageUrl }}
              />

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                {/* Category Tag */}
                <div className="mb-3">
                  <span
                    className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${
                      categoryColors[post.category] || categoryColors['Design']
                    }`}
                  >
                    {post.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-3 flex-1">
                  {post.excerpt}
                </p>

                {/* Meta Information */}
                <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500 dark:text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <time dateTime={post.date}>{formatDate(post.date)}</time>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    <span>{post.author.name}</span>
                  </div>
                </div>

                {/* Read More Link */}
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors group"
                >
                  Read more
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Load More Button */}
        <div className="mt-12 text-center">
          <button className="px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors">
            Load More Articles
          </button>
        </div>
      </div>
    </section>
  );
};

export default ClassicBlogGrid;
