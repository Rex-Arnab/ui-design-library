"use client";

import { motion } from "framer-motion";
import { ShoppingBag, Star, TrendingUp, Package, ArrowRight } from "lucide-react";

interface EcommerceHeroProps {
  className?: string;
}

/**
 * EcommerceHero - Product showcase hero with category highlights
 *
 * Features:
 * - Featured product cards with hover effects
 * - Category navigation
 * - Special offer badges
 * - Product ratings and reviews
 * - Shopping cart integration
 * - Fully responsive design
 */
export function EcommerceHero({ className = "" }: EcommerceHeroProps) {
  const categories = ["New Arrivals", "Best Sellers", "Sale", "Electronics", "Fashion"];

  const featuredProducts = [
    { name: "Premium Headphones", price: "$199", rating: 4.8, reviews: 324 },
    { name: "Smart Watch Pro", price: "$299", rating: 4.9, reviews: 512 },
    { name: "Wireless Earbuds", price: "$129", rating: 4.7, reviews: 289 }
  ];

  return (
    <section className={`relative min-h-[700px] overflow-hidden bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50 dark:from-gray-900 dark:via-pink-950 dark:to-purple-950 ${className}`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-20 left-10 w-64 h-64 bg-orange-300 dark:bg-orange-600 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-30 animate-blob" />
        <div className="absolute top-40 right-10 w-64 h-64 bg-pink-300 dark:bg-pink-600 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-20 left-1/2 w-64 h-64 bg-purple-300 dark:bg-purple-600 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-30 animate-blob animation-delay-4000" />
      </div>

      <div className="relative container mx-auto px-4 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Sale Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white px-6 py-3 rounded-full text-sm font-bold shadow-lg"
            >
              <TrendingUp className="w-4 h-4" />
              FLASH SALE - UP TO 70% OFF
            </motion.div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white leading-tight">
                Shop the
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-pink-600 dark:from-orange-400 dark:to-pink-400">
                  Latest Trends
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-xl">
                Discover amazing products from top brands. Free shipping on orders over $50. Easy returns within 30 days.
              </p>
            </div>

            {/* Category Pills */}
            <div className="flex flex-wrap gap-3">
              {categories.map((category, index) => (
                <motion.button
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                  className="px-6 py-2 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-900 dark:text-white rounded-full border-2 border-gray-200 dark:border-gray-700 font-medium transition-all duration-200 hover:scale-105"
                >
                  {category}
                </motion.button>
              ))}
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button className="px-8 py-4 bg-gradient-to-r from-orange-600 to-pink-600 hover:from-orange-700 hover:to-pink-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2 group">
                <ShoppingBag className="w-5 h-5" />
                Shop Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-900 dark:text-white font-semibold rounded-xl border-2 border-gray-200 dark:border-gray-700 transition-all duration-200 flex items-center justify-center gap-2">
                <Package className="w-5 h-5" />
                Track Order
              </button>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="flex items-center gap-8 pt-4 border-t border-gray-200 dark:border-gray-700"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900 dark:text-white">2M+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900 dark:text-white">4.8★</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Average Rating</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900 dark:text-white">50K+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Products</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Product Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {featuredProducts.map((product, index) => (
                <motion.div
                  key={product.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.2, duration: 0.6 }}
                  className={`bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 ${
                    index === 0 ? 'sm:col-span-2' : ''
                  }`}
                >
                  {/* Product Image Placeholder */}
                  <div className="aspect-square bg-gradient-to-br from-orange-200 to-pink-200 dark:from-orange-900/30 dark:to-pink-900/30 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <ShoppingBag className="w-16 h-16 text-orange-400 dark:text-orange-500 opacity-50" />
                    </div>
                    {/* Sale Badge */}
                    {index === 0 && (
                      <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                        -30%
                      </div>
                    )}
                  </div>

                  {/* Product Info */}
                  <div className="p-6 space-y-3">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {product.name}
                    </h3>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium text-gray-900 dark:text-white">
                          {product.rating}
                        </span>
                      </div>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        ({product.reviews} reviews)
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-gray-900 dark:text-white">
                        {product.price}
                      </span>
                      <button className="px-4 py-2 bg-gradient-to-r from-orange-600 to-pink-600 hover:from-orange-700 hover:to-pink-700 text-white font-medium rounded-lg transition-all duration-200">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
}
