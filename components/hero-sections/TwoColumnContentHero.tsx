"use client";

import { motion } from "framer-motion";
import { Layers, Zap, Shield, Users, Globe, TrendingUp, ArrowRight } from "lucide-react";

interface TwoColumnContentHeroProps {
  className?: string;
}

/**
 * TwoColumnContentHero - Grid-based feature highlights
 *
 * Features:
 * - Icon + Title + Description in each column
 * - Equal weight distribution
 * - Subtle hover effects on feature cards
 * - Multiple CTA options
 * - Clean, organized layout
 */
export function TwoColumnContentHero({ className = "" }: TwoColumnContentHeroProps) {
  const features = [
    {
      icon: Layers,
      title: "Component Library",
      description: "Access 1000+ pre-built components ready to use in your projects.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized for performance with lazy loading and code splitting.",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Shield,
      title: "Secure by Default",
      description: "Built with security best practices and regular audits.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Work together seamlessly with real-time updates and sharing.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Globe,
      title: "Global CDN",
      description: "Deliver your content faster with our worldwide edge network.",
      color: "from-indigo-500 to-blue-500"
    },
    {
      icon: TrendingUp,
      title: "Analytics Included",
      description: "Track performance and user behavior with built-in analytics.",
      color: "from-pink-500 to-rose-500"
    }
  ];

  return (
    <section className={`relative min-h-[800px] bg-gradient-to-b from-white via-gray-50 to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 overflow-hidden ${className}`}>
      {/* Background Decoration */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-gradient-to-br from-blue-100/50 via-purple-100/50 to-pink-100/50 dark:from-blue-950/30 dark:via-purple-950/30 dark:to-pink-950/30 rounded-full blur-3xl" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Header Section */}
          <div className="text-center space-y-6 max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 rounded-full text-blue-700 dark:text-blue-300 text-sm font-medium">
                <Layers className="w-4 h-4" />
                Everything you need to succeed
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-gray-900 dark:text-white"
            >
              A platform built for
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400">
                modern teams
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed"
            >
              Powerful features that help you build, ship, and scale your applications faster than ever before.
            </motion.p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="group"
              >
                <div className="h-full bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-2xl p-8 hover:shadow-2xl hover:border-gray-300 dark:hover:border-slate-700 transition-all duration-300 cursor-pointer">
                  {/* Icon */}
                  <div className="relative mb-6">
                    <div className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <feature.icon className="w-7 h-7 text-white" />
                    </div>
                    {/* Glow effect on hover */}
                    <div className={`absolute inset-0 w-14 h-14 bg-gradient-to-br ${feature.color} rounded-xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300`} />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 dark:group-hover:from-blue-400 dark:group-hover:to-purple-400 transition-all duration-300">
                    {feature.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Hover indicator */}
                  <div className="mt-6 flex items-center gap-2 text-blue-600 dark:text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-sm font-medium">Learn more</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="text-center space-y-6 pt-8"
          >
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Ready to transform your workflow?
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2">
                Get Started Free
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button className="px-8 py-4 bg-white dark:bg-slate-900 border-2 border-gray-300 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-500 text-gray-900 dark:text-white font-semibold rounded-xl transition-all duration-200">
                View Documentation
              </button>

              <button className="px-8 py-4 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-semibold transition-colors duration-200">
                Talk to Sales
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-6 pt-8 text-sm text-gray-500 dark:text-gray-500">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span>No credit card required</span>
              </div>
              <span className="hidden sm:block">•</span>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                <span>14-day free trial</span>
              </div>
              <span className="hidden sm:block">•</span>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
                <span>Cancel anytime</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
