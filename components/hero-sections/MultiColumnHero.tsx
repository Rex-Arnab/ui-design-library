"use client";

import { motion } from "framer-motion";
import { Zap, Shield, Rocket, Code, ArrowRight } from "lucide-react";

interface MultiColumnHeroProps {
  className?: string;
}

/**
 * MultiColumnHero - Asymmetric split layout hero
 *
 * Features:
 * - 60/40 split layout
 * - Left: Hero content with headline, description, CTAs
 * - Right: Large image/mockup
 * - Diagonal dividers and creative shapes
 * - Staggered animations
 * - Responsive: stacks on mobile
 */
export function MultiColumnHero({ className = "" }: MultiColumnHeroProps) {
  const features = [
    { icon: Zap, text: "Lightning fast performance" },
    { icon: Shield, text: "Enterprise-grade security" },
    { icon: Rocket, text: "Scale effortlessly" },
  ];

  return (
    <section className={`relative min-h-[700px] bg-white dark:bg-slate-950 overflow-hidden ${className}`}>
      {/* Background Shapes */}
      <div className="absolute inset-0 z-0">
        {/* Diagonal Divider */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-900 dark:to-purple-950/30 transform origin-top-right skew-x-6" />

        {/* Decorative Circles */}
        <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-16 md:py-24">
        <div className="grid lg:grid-cols-5 gap-12 items-center min-h-[600px]">
          {/* Left Column - 60% - Content */}
          <div className="lg:col-span-3 space-y-8">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 border border-blue-200 dark:border-blue-800 rounded-full text-blue-700 dark:text-blue-300 text-sm font-medium">
                <Code className="w-4 h-4" />
                Now in Public Beta
              </span>
            </motion.div>

            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-6"
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-gray-900 dark:text-white">
                Ship faster with
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                  modern tools
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl">
                Build, deploy, and scale your applications with the most advanced development platform. Everything you need in one place.
              </p>
            </motion.div>

            {/* Feature List */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                    <feature.icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-lg text-gray-700 dark:text-gray-300 font-medium">
                    {feature.text}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <button className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2">
                Start Building Free
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-white dark:bg-slate-900 border-2 border-gray-300 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-500 text-gray-900 dark:text-white font-semibold rounded-xl transition-all duration-200">
                Schedule Demo
              </button>
            </motion.div>

            {/* Social Proof */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="pt-8 border-t border-gray-200 dark:border-slate-800"
            >
              <p className="text-sm text-gray-500 dark:text-gray-500 mb-4">Trusted by industry leaders</p>
              <div className="flex flex-wrap gap-8 items-center opacity-60">
                {["Stripe", "Vercel", "GitHub", "Shopify"].map((company) => (
                  <div key={company} className="text-gray-400 dark:text-gray-600 font-semibold text-lg">
                    {company}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column - 40% - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-2 relative"
          >
            {/* Mockup Container */}
            <div className="relative">
              {/* Floating Cards */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-8 -left-8 z-20 bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-2xl border border-gray-200 dark:border-slate-700"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Performance</div>
                    <div className="text-lg font-bold text-gray-900 dark:text-white">98.9%</div>
                  </div>
                </div>
                <div className="h-2 bg-gray-200 dark:bg-slate-700 rounded-full overflow-hidden">
                  <div className="h-full w-[98.9%] bg-gradient-to-r from-green-400 to-emerald-500" />
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -bottom-8 -right-8 z-20 bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-2xl border border-gray-200 dark:border-slate-700"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl flex items-center justify-center">
                    <Rocket className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Deployments</div>
                    <div className="text-lg font-bold text-gray-900 dark:text-white">1,247</div>
                  </div>
                </div>
                <div className="text-xs text-green-600 dark:text-green-400 font-medium">↑ 23% this week</div>
              </motion.div>

              {/* Main Visual - Dashboard Mockup */}
              <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 shadow-2xl border border-slate-700">
                {/* Browser Chrome */}
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-3 h-3 bg-red-500 rounded-full" />
                  <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                  <div className="w-3 h-3 bg-green-500 rounded-full" />
                </div>

                {/* Code Editor Simulation */}
                <div className="space-y-2 font-mono text-sm">
                  <div className="text-purple-400">import <span className="text-blue-400">{'{ Component }'}</span> from <span className="text-green-400">&apos;react&apos;</span></div>
                  <div className="text-purple-400">import <span className="text-blue-400">{'{ motion }'}</span> from <span className="text-green-400">&apos;framer-motion&apos;</span></div>
                  <div className="h-4" />
                  <div className="text-blue-400">export default function <span className="text-yellow-400">Hero</span>() {'{'}</div>
                  <div className="pl-4 text-purple-400">return (</div>
                  <div className="pl-8 text-gray-400">{'<motion.div>'}</div>
                  <div className="pl-12 text-green-400">Build Amazing Things</div>
                  <div className="pl-8 text-gray-400">{'</motion.div>'}</div>
                  <div className="pl-4 text-purple-400">)</div>
                  <div className="text-blue-400">{'}'}</div>
                </div>

                {/* Cursor */}
                <motion.div
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="inline-block w-2 h-5 bg-blue-400 ml-1"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
