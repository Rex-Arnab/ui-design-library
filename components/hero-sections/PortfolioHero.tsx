"use client";

import { motion } from "framer-motion";
import { Palette, Code, Sparkles, ExternalLink, Github, Linkedin } from "lucide-react";

interface PortfolioHeroProps {
  className?: string;
}

/**
 * PortfolioHero - Creative professional emphasis hero
 *
 * Features:
 * - Large typography with creative flair
 * - Work showcase cards
 * - Social media links
 * - Skills tags
 * - Availability status
 * - Personal branding elements
 */
export function PortfolioHero({ className = "" }: PortfolioHeroProps) {
  const skills = ["UI/UX Design", "React", "TypeScript", "Figma", "Framer Motion"];

  const projects = [
    { title: "E-commerce Platform", category: "Web Design", color: "from-blue-500 to-cyan-500" },
    { title: "Mobile Banking App", category: "UI/UX", color: "from-purple-500 to-pink-500" },
    { title: "SaaS Dashboard", category: "Product Design", color: "from-orange-500 to-red-500" }
  ];

  return (
    <section className={`relative min-h-[700px] overflow-hidden bg-white dark:bg-gray-900 ${className}`}>
      {/* Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear" as const
          }}
          className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-400 to-pink-400 dark:from-purple-600 dark:to-pink-600 rounded-full blur-3xl opacity-20"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear" as const
          }}
          className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-400 to-cyan-400 dark:from-blue-600 dark:to-cyan-600 rounded-full blur-3xl opacity-20"
        />
      </div>

      <div className="relative container mx-auto px-4 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-4 py-2 rounded-full text-sm font-medium"
            >
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              Available for freelance
            </motion.div>

            {/* Main Headline */}
            <div className="space-y-6">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-5xl md:text-7xl font-bold leading-tight"
              >
                <span className="text-gray-900 dark:text-white">Creative</span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400">
                  Designer
                </span>
                <br />
                <span className="text-gray-900 dark:text-white">&amp; Developer</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-xl"
              >
                I craft beautiful digital experiences that merge stunning design with powerful functionality.
                Let&apos;s build something amazing together.
              </motion.p>
            </div>

            {/* Skills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="flex flex-wrap gap-3"
            >
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium hover:scale-105 transition-transform cursor-default"
                >
                  {skill}
                </span>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2 group">
                View My Work
                <ExternalLink className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-900 dark:text-white font-semibold rounded-xl border-2 border-gray-200 dark:border-gray-700 transition-all duration-200">
                Download CV
              </button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.6 }}
              className="flex items-center gap-4 pt-4"
            >
              <span className="text-sm text-gray-600 dark:text-gray-400">Follow me:</span>
              {[
                { icon: Github, href: "#" },
                { icon: Linkedin, href: "#" },
                { icon: Palette, href: "#" }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-gray-100 dark:bg-gray-800 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 text-gray-700 dark:text-gray-300 hover:text-white rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
                  aria-label="Social media link"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right - Work Showcase */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Featured Work Grid */}
            <div className="space-y-6">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.2, duration: 0.6 }}
                  whileHover={{ scale: 1.05, x: 10 }}
                  className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700 cursor-pointer"
                >
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-10 group-hover:opacity-20 transition-opacity`} />

                  <div className="relative p-6 flex items-center justify-between">
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {project.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {project.category}
                      </p>
                    </div>
                    <div className={`w-12 h-12 bg-gradient-to-r ${project.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      {index === 0 && <Code className="w-6 h-6 text-white" />}
                      {index === 1 && <Palette className="w-6 h-6 text-white" />}
                      {index === 2 && <Sparkles className="w-6 h-6 text-white" />}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Floating Stats */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="absolute -top-6 -right-6 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-6 border border-gray-200 dark:border-gray-700"
            >
              <div className="text-center space-y-1">
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  50+
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Projects Completed
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.4, duration: 0.6 }}
              className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-6 border border-gray-200 dark:border-gray-700"
            >
              <div className="text-center space-y-1">
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  5 Years
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Experience
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
