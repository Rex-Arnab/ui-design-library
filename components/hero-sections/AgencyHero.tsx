"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Award, Zap } from "lucide-react";

interface AgencyHeroProps {
  className?: string;
}

/**
 * AgencyHero - Bold typography with case study previews
 *
 * Features:
 * - Large bold typography
 * - Case study showcase cards
 * - Client logos
 * - Achievement metrics
 * - Strong visual hierarchy
 * - Professional agency branding
 */
export function AgencyHero({ className = "" }: AgencyHeroProps) {
  const caseStudies = [
    { client: "TechCorp", result: "+350% Revenue", industry: "SaaS" },
    { client: "FinanceHub", result: "2M+ Users", industry: "Fintech" },
    { client: "RetailPro", result: "+180% Growth", industry: "E-commerce" }
  ];

  const stats = [
    { value: "200+", label: "Projects Delivered" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "50+", label: "Team Members" },
    { value: "15+", label: "Years Experience" }
  ];

  return (
    <section className={`relative min-h-[800px] overflow-hidden bg-black text-white ${className}`}>
      {/* Gradient Mesh Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/30 rounded-full blur-3xl" />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px]" />

      <div className="relative container mx-auto px-4 py-16 md:py-24">
        <div className="space-y-20">
          {/* Top Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Award Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-4 py-2 rounded-full text-sm font-medium"
              >
                <Award className="w-4 h-4 text-yellow-400" />
                Award-Winning Digital Agency
              </motion.div>

              {/* Massive Headline */}
              <div className="space-y-4">
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="text-6xl md:text-8xl font-black leading-none tracking-tight"
                >
                  WE BUILD
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">
                    BRANDS
                  </span>
                  <br />
                  THAT SCALE
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="text-xl text-gray-400 max-w-xl"
                >
                  We partner with ambitious companies to create transformative digital experiences
                  that drive measurable growth and lasting impact.
                </motion.p>
              </div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <button className="px-8 py-4 bg-white text-black font-bold rounded-none hover:bg-gray-100 transition-all duration-200 flex items-center justify-center gap-2 group">
                  START A PROJECT
                  <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
                <button className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-none hover:bg-white hover:text-black transition-all duration-200">
                  VIEW CASE STUDIES
                </button>
              </motion.div>

              {/* Services List */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.6 }}
                className="flex flex-wrap gap-4 text-sm text-gray-400 pt-4"
              >
                {["Brand Strategy", "Digital Design", "Development", "Growth Marketing"].map((service) => (
                  <div key={service} className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-purple-400" />
                    <span>{service}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right - Case Studies */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              {caseStudies.map((study, index) => (
                <motion.div
                  key={study.client}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.2, duration: 0.6 }}
                  whileHover={{ x: 10 }}
                  className="group bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/30 rounded-none p-6 cursor-pointer transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="space-y-2">
                      <div className="text-sm text-gray-400 uppercase tracking-wider">
                        {study.industry}
                      </div>
                      <h3 className="text-2xl font-bold">{study.client}</h3>
                    </div>
                    <ArrowUpRight className="w-6 h-6 text-gray-400 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                  </div>
                  <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                    {study.result}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Bottom Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="border-t border-white/10 pt-12"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.4 + index * 0.1, duration: 0.6 }}
                  className="text-center space-y-2"
                >
                  <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Client Logos */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.8 }}
            className="border-t border-white/10 pt-12"
          >
            <div className="text-center mb-8">
              <div className="text-sm text-gray-400 uppercase tracking-wider mb-4">
                TRUSTED BY INDUSTRY LEADERS
              </div>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-12 opacity-50">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div
                  key={i}
                  className="w-32 h-12 bg-white/10 rounded flex items-center justify-center text-white/50 font-bold"
                >
                  BRAND {i}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
