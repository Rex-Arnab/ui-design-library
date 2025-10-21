"use client";

import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Award, Users, ArrowRight } from "lucide-react";

interface OnboardingEducationProps {
  className?: string;
}

/**
 * OnboardingEducation - Post-registration welcome for educational platforms
 */
export function OnboardingEducation({ className = "" }: OnboardingEducationProps) {
  return (
    <div className={`min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-purple-950 dark:to-pink-950 px-4 ${className}`}>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-4xl"
      >
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 md:p-12 border border-gray-200 dark:border-gray-700">
          {/* Header */}
          <div className="text-center mb-12">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full mb-6"
            >
              <GraduationCap className="w-12 h-12 text-white" />
            </motion.div>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Welcome to Your Learning Journey!
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              You&apos;re now part of a community of 100,000+ learners
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { icon: BookOpen, title: "1000+ Courses", desc: "Expert-led content" },
              { icon: Award, title: "Certificates", desc: "Earn recognized credentials" },
              { icon: Users, title: "Community", desc: "Learn with peers" }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                className="text-center p-6 bg-gray-50 dark:bg-gray-700 rounded-xl"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-full mb-4">
                  <feature.icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{feature.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Recommended Courses */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-6 border border-blue-200 dark:border-blue-900 mb-8"
          >
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
              Recommended for you:
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {["Introduction to Web Development", "Python for Beginners"].map((course) => (
                <div
                  key={course}
                  className="bg-white dark:bg-gray-700 rounded-lg p-4 border border-gray-200 dark:border-gray-600 hover:shadow-md transition-shadow cursor-pointer"
                >
                  <div className="w-full h-24 bg-gradient-to-br from-blue-400 to-purple-400 rounded-lg mb-3" />
                  <div className="font-medium text-gray-900 dark:text-white">{course}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">4.5★ • 12 hours</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-center"
          >
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all inline-flex items-center gap-2">
              Browse All Courses
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
