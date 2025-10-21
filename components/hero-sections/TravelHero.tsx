"use client";

import { motion } from "framer-motion";
import { Search, MapPin, Calendar, Users, ArrowRight } from "lucide-react";

interface TravelHeroProps {
  className?: string;
}

/**
 * TravelHero - Full-width hero section for travel websites
 *
 * Features:
 * - Large background image with gradient overlay
 * - Integrated search bar with destination/date inputs
 * - Floating destination badges
 * - Bold, adventurous typography
 * - Fully responsive design
 */
export function TravelHero({ className = "" }: TravelHeroProps) {
  return (
    <section className={`relative min-h-[600px] md:min-h-[700px] flex items-center justify-center overflow-hidden ${className}`}>
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-gradient-to-br from-blue-600/90 via-purple-600/80 to-pink-600/90"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1920')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundBlendMode: "overlay"
          }}
        />
        {/* Additional gradient for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>

      {/* Floating Badges */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="absolute top-20 left-4 md:left-20 z-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 text-white text-sm font-medium"
      >
        <MapPin className="inline-block w-4 h-4 mr-2" />
        Paris, France
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute top-32 right-4 md:right-32 z-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 text-white text-sm font-medium"
      >
        <MapPin className="inline-block w-4 h-4 mr-2" />
        Bali, Indonesia
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              Explore the World
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-300">
                Your Way
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
              Discover unforgettable destinations and create memories that last a lifetime
            </p>
          </motion.div>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-4 md:p-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Destination Input */}
              <div className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
                <MapPin className="w-5 h-5 text-gray-400" />
                <div className="flex-1">
                  <label className="text-xs text-gray-500 dark:text-gray-400 font-medium">Destination</label>
                  <input
                    type="text"
                    placeholder="Where to?"
                    className="w-full bg-transparent border-0 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none text-sm"
                  />
                </div>
              </div>

              {/* Check-in Date */}
              <div className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
                <Calendar className="w-5 h-5 text-gray-400" />
                <div className="flex-1">
                  <label className="text-xs text-gray-500 dark:text-gray-400 font-medium">Check In</label>
                  <input
                    type="text"
                    placeholder="Add date"
                    className="w-full bg-transparent border-0 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none text-sm"
                  />
                </div>
              </div>

              {/* Check-out Date */}
              <div className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
                <Calendar className="w-5 h-5 text-gray-400" />
                <div className="flex-1">
                  <label className="text-xs text-gray-500 dark:text-gray-400 font-medium">Check Out</label>
                  <input
                    type="text"
                    placeholder="Add date"
                    className="w-full bg-transparent border-0 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none text-sm"
                  />
                </div>
              </div>

              {/* Guests */}
              <div className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
                <Users className="w-5 h-5 text-gray-400" />
                <div className="flex-1">
                  <label className="text-xs text-gray-500 dark:text-gray-400 font-medium">Guests</label>
                  <input
                    type="text"
                    placeholder="Add guests"
                    className="w-full bg-transparent border-0 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none text-sm"
                  />
                </div>
              </div>
            </div>

            {/* Search Button */}
            <button className="mt-4 w-full md:w-auto px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group">
              <Search className="w-5 h-5" />
              Search Adventures
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-8 text-white"
          >
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold">200+</div>
              <div className="text-sm text-white/80">Destinations</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold">50K+</div>
              <div className="text-sm text-white/80">Happy Travelers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold">4.9★</div>
              <div className="text-sm text-white/80">Average Rating</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
