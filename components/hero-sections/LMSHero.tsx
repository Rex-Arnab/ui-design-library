"use client";

import { motion } from "framer-motion";
import { BookOpen, Play, Star, Users, Trophy, Sparkles, ArrowRight, CheckCircle } from "lucide-react";

interface LMSHeroProps {
  className?: string;
}

/**
 * LMSHero - Educational platform hero section
 *
 * Features:
 * - Friendly, colorful design
 * - Featured course cards with hover effects
 * - Student testimonial carousel
 * - Progress indicators and achievement badges
 * - Multi-colored subject accents
 */
export function LMSHero({ className = "" }: LMSHeroProps) {
  const courses = [
    { title: "Web Development", students: "45K", rating: 4.9, color: "from-blue-500 to-cyan-500" },
    { title: "Data Science", students: "32K", rating: 4.8, color: "from-purple-500 to-pink-500" },
    { title: "UI/UX Design", students: "28K", rating: 4.9, color: "from-orange-500 to-red-500" },
  ];

  return (
    <section className={`relative min-h-[700px] bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-slate-900 dark:via-slate-900 dark:to-purple-950 overflow-hidden ${className}`}>
      {/* Decorative Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300/30 dark:bg-purple-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-300/30 dark:bg-blue-600/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-pink-300/20 to-orange-300/20 dark:from-pink-600/10 dark:to-orange-600/10 rounded-full blur-3xl" />
      </div>

      {/* Floating Achievement Badges */}
      <motion.div
        animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-24 right-10 md:right-32 z-10 bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-xl border border-purple-200 dark:border-purple-900"
      >
        <Trophy className="w-8 h-8 text-yellow-500" />
      </motion.div>

      <motion.div
        animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
        className="absolute bottom-32 left-10 md:left-24 z-10 bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-xl border border-blue-200 dark:border-blue-900"
      >
        <Sparkles className="w-8 h-8 text-blue-500" />
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8 text-center lg:text-left"
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 border border-purple-200 dark:border-purple-800 rounded-full text-purple-700 dark:text-purple-300 text-sm font-medium">
                <Sparkles className="w-4 h-4" />
                Learn at Your Own Pace
              </div>

              {/* Headline */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-gray-900 dark:text-white">
                Unlock Your
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600">
                  Full Potential
                </span>
              </h1>

              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Join millions of learners worldwide. Master new skills with expert-led courses, hands-on projects, and a supportive community.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2 group">
                  Start Learning Free
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-8 py-4 bg-white dark:bg-slate-800 border-2 border-gray-300 dark:border-slate-700 hover:border-purple-500 dark:hover:border-purple-500 text-gray-900 dark:text-white font-semibold rounded-xl transition-all duration-200 flex items-center justify-center gap-2">
                  <Play className="w-5 h-5" />
                  Watch Demo
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-8 pt-4">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-sm text-gray-600 dark:text-gray-400">Free 7-day trial</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-sm text-gray-600 dark:text-gray-400">Cancel anytime</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-sm text-gray-600 dark:text-gray-400">Certificate included</span>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center lg:text-left">
                  <div className="text-3xl md:text-4xl font-bold text-purple-600 dark:text-purple-400">2.5M+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">Students</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-3xl md:text-4xl font-bold text-pink-600 dark:text-pink-400">5,000+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">Courses</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-3xl md:text-4xl font-bold text-orange-600 dark:text-orange-400">98%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">Satisfaction</div>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Featured Courses */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              {courses.map((course, index) => (
                <motion.div
                  key={course.title}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                  className="group bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-slate-700 hover:border-purple-300 dark:hover:border-purple-700 cursor-pointer"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div className={`w-14 h-14 bg-gradient-to-br ${course.color} rounded-xl flex items-center justify-center shadow-md`}>
                        <BookOpen className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                          {course.title}
                        </h3>
                        <div className="flex items-center gap-3 mt-1">
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                            <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">{course.rating}</span>
                          </div>
                          <span className="text-sm text-gray-500 dark:text-gray-400">•</span>
                          <div className="flex items-center gap-1">
                            <Users className="w-4 h-4 text-gray-400" />
                            <span className="text-sm text-gray-600 dark:text-gray-400">{course.students} students</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs text-gray-600 dark:text-gray-400">
                      <span>Course Progress</span>
                      <span>{Math.floor(Math.random() * 40 + 20)}%</span>
                    </div>
                    <div className="h-2 bg-gray-200 dark:bg-slate-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${Math.floor(Math.random() * 40 + 20)}%` }}
                        transition={{ delay: 0.8 + index * 0.2, duration: 1 }}
                        className={`h-full bg-gradient-to-r ${course.color}`}
                      />
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-xs font-medium rounded-full">
                      Beginner Friendly
                    </span>
                    <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-xs font-medium rounded-full">
                      Certificate
                    </span>
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-medium rounded-full">
                      Lifetime Access
                    </span>
                  </div>
                </motion.div>
              ))}

              {/* Browse All Courses */}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="w-full py-4 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border-2 border-dashed border-purple-300 dark:border-purple-700 hover:border-purple-500 dark:hover:border-purple-500 rounded-2xl text-purple-700 dark:text-purple-300 font-semibold transition-all duration-200 flex items-center justify-center gap-2 group"
              >
                Browse All 5,000+ Courses
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
