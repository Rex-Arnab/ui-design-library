"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface SingleMessageHeroProps {
  className?: string;
}

/**
 * SingleMessageHero - Minimal, zen-like hero section
 *
 * Features:
 * - Ultra-minimal design
 * - One powerful headline
 * - Generous whitespace
 * - Single centered CTA
 * - Subtle background pattern
 * - Perfect typography hierarchy
 */
export function SingleMessageHero({ className = "" }: SingleMessageHeroProps) {
  return (
    <section className={`relative min-h-[600px] md:min-h-[700px] flex items-center justify-center overflow-hidden ${className}`}>
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-slate-950 dark:via-slate-900 dark:to-blue-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_50%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:6rem_6rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)] dark:bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)]" />
      </div>

      {/* Floating Gradient Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-400/30 to-purple-400/30 dark:from-blue-600/20 dark:to-purple-600/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 10, repeat: Infinity, delay: 1 }}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-purple-400/30 to-pink-400/30 dark:from-purple-600/20 dark:to-pink-600/20 rounded-full blur-3xl"
      />

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-32 md:py-40">
        <div className="max-w-5xl mx-auto text-center space-y-12">
          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tight"
          >
            <span className="text-gray-900 dark:text-white">
              Build products
            </span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400">
              people love
            </span>
          </motion.h1>

          {/* Subheadline (optional, subtle) */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            The complete platform for building modern web applications with speed, security, and scale.
          </motion.p>

          {/* Single CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="pt-8"
          >
            <button className="group relative px-10 py-5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold text-lg rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 overflow-hidden">
              {/* Animated background gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Button content */}
              <span className="relative flex items-center gap-3">
                Get Started
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </motion.div>

          {/* Subtle trust indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            className="pt-12"
          >
            <p className="text-sm text-gray-500 dark:text-gray-500">
              Trusted by 10,000+ teams worldwide
            </p>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade for smooth transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-slate-950 to-transparent" />
    </section>
  );
}
