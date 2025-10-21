"use client";

import { motion } from "framer-motion";
import { Shield, Lock, Code, Search, MapPin, Briefcase, ArrowRight, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

interface CybersecurityHeroProps {
  className?: string;
}

/**
 * CybersecurityHero - Professional tech-focused hero for job boards
 *
 * Features:
 * - Dark theme with blue/cyan accents
 * - Animated grid background pattern
 * - Security-themed iconography
 * - Job search interface
 * - Animated statistics counter
 * - Company logo carousel
 */
export function CybersecurityHero({ className = "" }: CybersecurityHeroProps) {
  const [activeJobs, setActiveJobs] = useState(0);
  const [companies, setCompanies] = useState(0);

  // Animated counter effect
  useEffect(() => {
    const jobInterval = setInterval(() => {
      setActiveJobs((prev) => (prev < 1234 ? prev + 50 : 1234));
    }, 50);
    const companyInterval = setInterval(() => {
      setCompanies((prev) => (prev < 450 ? prev + 15 : 450));
    }, 50);

    return () => {
      clearInterval(jobInterval);
      clearInterval(companyInterval);
    };
  }, []);

  return (
    <section className={`relative min-h-[700px] bg-slate-950 text-white overflow-hidden ${className}`}>
      {/* Animated Grid Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 via-transparent to-blue-500/10" />
      </div>

      {/* Floating Security Icons */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute top-20 right-10 md:right-32 z-10 p-4 bg-cyan-500/10 backdrop-blur-sm border border-cyan-500/20 rounded-xl"
      >
        <Shield className="w-8 h-8 text-cyan-400" />
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
        className="absolute bottom-32 left-10 md:left-32 z-10 p-4 bg-blue-500/10 backdrop-blur-sm border border-blue-500/20 rounded-xl"
      >
        <Lock className="w-8 h-8 text-blue-400" />
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-300 text-sm font-medium">
                <Shield className="w-4 h-4" />
                Secure Your Future
              </div>

              {/* Headline */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Land Your Dream
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                  Cybersecurity Role
                </span>
              </h1>

              <p className="text-xl text-gray-300 leading-relaxed">
                Connect with top companies hiring security professionals. From penetration testers to security architects.
              </p>

              {/* Job Search */}
              <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-4 shadow-2xl">
                <div className="grid md:grid-cols-3 gap-3">
                  <div className="flex items-center gap-3 p-3 bg-slate-800/50 rounded-xl">
                    <Briefcase className="w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Job role..."
                      className="flex-1 bg-transparent border-0 text-white placeholder-gray-400 focus:outline-none text-sm"
                    />
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-slate-800/50 rounded-xl">
                    <MapPin className="w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Location..."
                      className="flex-1 bg-transparent border-0 text-white placeholder-gray-400 focus:outline-none text-sm"
                    />
                  </div>
                  <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold rounded-xl transition-all duration-200 flex items-center justify-center gap-2 group">
                    <Search className="w-5 h-5" />
                    Search
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>

              {/* Stats */}
              <div className="flex flex-wrap gap-8">
                <div className="space-y-1">
                  <div className="text-4xl font-bold text-cyan-400">
                    {activeJobs.toLocaleString()}+
                  </div>
                  <div className="text-sm text-gray-400">Active Jobs</div>
                </div>
                <div className="space-y-1">
                  <div className="text-4xl font-bold text-blue-400">
                    {companies}+
                  </div>
                  <div className="text-sm text-gray-400">Companies</div>
                </div>
                <div className="space-y-1">
                  <div className="text-4xl font-bold text-purple-400">98%</div>
                  <div className="text-sm text-gray-400">Placement Rate</div>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Featured Jobs */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-4"
            >
              {/* Featured Job Card 1 */}
              <div className="group bg-slate-900/50 backdrop-blur-sm border border-slate-800 hover:border-cyan-500/50 rounded-xl p-6 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10 cursor-pointer">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-white">Senior Security Engineer</h3>
                      <p className="text-sm text-gray-400">TechCorp Inc.</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-green-500/10 text-green-400 text-xs font-medium rounded-full border border-green-500/20">
                    Remote
                  </span>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-400">
                  <span>$120K - $180K</span>
                  <span>•</span>
                  <span>Full-time</span>
                  <span>•</span>
                  <span>San Francisco, CA</span>
                </div>
                <div className="mt-4 flex gap-2">
                  <span className="px-2 py-1 bg-cyan-500/10 text-cyan-300 text-xs rounded-md">Penetration Testing</span>
                  <span className="px-2 py-1 bg-blue-500/10 text-blue-300 text-xs rounded-md">SIEM</span>
                  <span className="px-2 py-1 bg-purple-500/10 text-purple-300 text-xs rounded-md">Cloud Security</span>
                </div>
              </div>

              {/* Featured Job Card 2 */}
              <div className="group bg-slate-900/50 backdrop-blur-sm border border-slate-800 hover:border-blue-500/50 rounded-xl p-6 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 cursor-pointer">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                      <Code className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-white">Application Security Analyst</h3>
                      <p className="text-sm text-gray-400">SecureNet Solutions</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-blue-500/10 text-blue-400 text-xs font-medium rounded-full border border-blue-500/20">
                    Hybrid
                  </span>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-400">
                  <span>$100K - $140K</span>
                  <span>•</span>
                  <span>Full-time</span>
                  <span>•</span>
                  <span>New York, NY</span>
                </div>
                <div className="mt-4 flex gap-2">
                  <span className="px-2 py-1 bg-blue-500/10 text-blue-300 text-xs rounded-md">OWASP</span>
                  <span className="px-2 py-1 bg-purple-500/10 text-purple-300 text-xs rounded-md">DevSecOps</span>
                  <span className="px-2 py-1 bg-pink-500/10 text-pink-300 text-xs rounded-md">AppSec</span>
                </div>
              </div>

              {/* View All Jobs Link */}
              <button className="w-full py-4 border border-slate-800 hover:border-cyan-500/50 rounded-xl text-gray-300 hover:text-white font-medium transition-all duration-200 flex items-center justify-center gap-2 group">
                View All {activeJobs.toLocaleString()}+ Jobs
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </div>

          {/* Trusted By Companies */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-20 text-center"
          >
            <p className="text-sm text-gray-400 mb-6">Trusted by leading cybersecurity teams</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-50">
              {["AWS", "Google Cloud", "Microsoft", "Cloudflare", "Palo Alto"].map((company) => (
                <div key={company} className="text-gray-500 font-semibold text-lg">
                  {company}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
