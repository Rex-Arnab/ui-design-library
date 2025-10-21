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

interface ImageFirstBlogGridProps {
  className?: string;
  posts?: BlogPost[];
}

// Default blog posts data
const defaultPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Visual Storytelling in Modern Web Design',
    excerpt: 'Discover how to leverage compelling visuals and narratives to create memorable user experiences that drive engagement and conversions.',
    author: {
      name: 'Isabella Martinez',
    },
    date: '2025-10-20',
    readTime: '7 min read',
    category: 'Design',
    imageUrl: '#6366F1',
  },
  {
    id: '2',
    title: 'Building High-Performance React Applications',
    excerpt: 'Learn advanced optimization techniques to build React apps that are lightning-fast and scale effortlessly.',
    author: {
      name: 'Ryan Johnson',
    },
    date: '2025-10-18',
    readTime: '10 min read',
    category: 'Development',
    imageUrl: '#3B82F6',
  },
  {
    id: '3',
    title: 'The Psychology of Conversion Rate Optimization',
    excerpt: 'Understand the cognitive biases and psychological principles that influence user behavior and drive conversions.',
    author: {
      name: 'Sophia Chen',
    },
    date: '2025-10-16',
    readTime: '8 min read',
    category: 'Marketing',
    imageUrl: '#10B981',
  },
  {
    id: '4',
    title: 'Designing Accessible Color Systems',
    excerpt: 'Create beautiful color palettes that work for everyone, including users with visual impairments.',
    author: {
      name: 'Marcus Davis',
    },
    date: '2025-10-14',
    readTime: '6 min read',
    category: 'Design',
    imageUrl: '#8B5CF6',
  },
  {
    id: '5',
    title: 'API Architecture for Scale',
    excerpt: 'Design API architectures that handle millions of requests while maintaining reliability and performance.',
    author: {
      name: 'Emily Thompson',
    },
    date: '2025-10-12',
    readTime: '12 min read',
    category: 'Development',
    imageUrl: '#F59E0B',
  },
  {
    id: '6',
    title: 'Product-Market Fit: A Practical Guide',
    excerpt: 'Navigate the journey to product-market fit with proven frameworks and real-world case studies.',
    author: {
      name: 'David Park',
    },
    date: '2025-10-10',
    readTime: '9 min read',
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

const ImageFirstBlogGrid: React.FC<ImageFirstBlogGridProps> = ({
  className = '',
  posts = defaultPosts
}) => {
  return (
    <section className={`py-16 px-4 sm:px-6 lg:px-8 ${className}`}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Stories
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Visual narratives and insights from our creative team
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-xl overflow-hidden cursor-pointer"
            >
              {/* Image Container with Overlay */}
              <div className="relative aspect-[4/3] overflow-hidden">
                {/* Colored Background (Image Placeholder) */}
                <div
                  className="absolute inset-0 transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundColor: post.imageUrl }}
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors duration-300" />

                {/* Content Overlay */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                  {/* Category Badge */}
                  <div className="mb-3">
                    <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-semibold rounded-full">
                      {post.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-white/90 transition-colors">
                    {post.title}
                  </h3>

                  {/* Excerpt - Hidden by default, shown on hover */}
                  <p className="text-sm text-white/90 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 line-clamp-2">
                    {post.excerpt}
                  </p>

                  {/* Meta Information */}
                  <div className="flex flex-wrap items-center gap-4 text-xs text-white/80 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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

                  {/* Read More Link */}
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href="#"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:gap-3 transition-all"
                    >
                      Read story
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 ring-2 ring-transparent group-hover:ring-white/20 rounded-xl transition-all duration-300 pointer-events-none" />
            </motion.article>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-12 text-center">
          <button className="px-8 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors">
            Explore All Stories
          </button>
        </div>
      </div>
    </section>
  );
};

export default ImageFirstBlogGrid;
