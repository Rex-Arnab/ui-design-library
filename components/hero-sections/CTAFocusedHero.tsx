"use client";

import { motion } from "framer-motion";
import { Check, Star, Users, TrendingUp, Shield, Award, Timer, ArrowRight, PlayCircle } from "lucide-react";
import { useEffect, useState } from "react";

interface CTAFocusedHeroProps {
  className?: string;
}

/**
 * CTAFocusedHero - Conversion-optimized hero section
 *
 * Features:
 * - Bold value proposition
 * - Multiple action buttons (primary, secondary, tertiary)
 * - Social proof (ratings, testimonials, user count)
 * - Urgency indicators (countdown, limited spots)
 * - Trust badges (security, guarantees)
 * - Eye-catching colors
 */
export function CTAFocusedHero({ className = "" }: CTAFocusedHeroProps) {
  const [timeLeft, setTimeLeft] = useState({ hours: 23, minutes: 45, seconds: 30 });

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className={`relative min-h-[800px] bg-gradient-to-br from-orange-50 via-rose-50 to-pink-50 dark:from-slate-950 dark:via-rose-950/20 dark:to-purple-950/20 overflow-hidden ${className}`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(251,146,60,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(244,63,94,0.15),transparent_50%)]" />
      </div>

      {/* Floating Trust Badges */}
      <motion.div
        animate={{ y: [0, -10, 0], rotate: [0, 3, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute top-20 left-10 md:left-20 z-10 bg-white dark:bg-slate-800 px-4 py-2 rounded-full shadow-xl border border-orange-200 dark:border-orange-900 flex items-center gap-2"
      >
        <Award className="w-5 h-5 text-orange-500" />
        <span className="text-sm font-semibold text-gray-900 dark:text-white">#1 Rated Platform</span>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0], rotate: [0, -3, 0] }}
        transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
        className="absolute top-32 right-10 md:right-32 z-10 bg-white dark:bg-slate-800 px-4 py-2 rounded-full shadow-xl border border-green-200 dark:border-green-900 flex items-center gap-2"
      >
        <Shield className="w-5 h-5 text-green-500" />
        <span className="text-sm font-semibold text-gray-900 dark:text-white">Money-Back Guarantee</span>
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-5xl mx-auto">
          {/* Urgency Banner */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8 text-center"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-orange-500 to-rose-500 text-white rounded-full shadow-lg">
              <Timer className="w-5 h-5 animate-pulse" />
              <span className="font-semibold">Limited Time Offer Ends In:</span>
              <div className="flex items-center gap-2 font-mono font-bold">
                <span>{String(timeLeft.hours).padStart(2, '0')}</span>:
                <span>{String(timeLeft.minutes).padStart(2, '0')}</span>:
                <span>{String(timeLeft.seconds).padStart(2, '0')}</span>
              </div>
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center space-y-6"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-gray-900 dark:text-white">
              Transform Your Business
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-rose-600 to-pink-600 dark:from-orange-400 dark:via-rose-400 dark:to-pink-400">
                in Just 30 Days
              </span>
            </h1>

            <p className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 font-semibold">
              Join 50,000+ professionals already growing faster
            </p>

            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Get instant access to our complete platform, expert training, and dedicated support. No technical skills required.
            </p>
          </motion.div>

          {/* Social Proof - Ratings */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center items-center gap-8 mt-8 flex-wrap"
          >
            <div className="flex items-center gap-2">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">4.9/5 from 2,500+ reviews</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">50,234 Active Users</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-green-600 dark:text-green-400" />
              <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">150% Avg. Growth</span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 space-y-4"
          >
            {/* Primary CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group relative px-10 py-5 bg-gradient-to-r from-orange-600 to-rose-600 hover:from-orange-700 hover:to-rose-700 text-white font-bold text-lg rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-rose-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative flex items-center gap-3">
                  Get Started Now - 50% OFF
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>

              <button className="px-10 py-5 bg-white dark:bg-slate-800 border-2 border-gray-300 dark:border-slate-700 hover:border-rose-500 dark:hover:border-rose-500 text-gray-900 dark:text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-3">
                <PlayCircle className="w-6 h-6" />
                Watch 2-Min Demo
              </button>
            </div>

            {/* Trust Indicators Below CTA */}
            <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-600 dark:text-gray-400 pt-4">
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-500" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-500" />
                <span>14-day money-back guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-500" />
                <span>Cancel anytime</span>
              </div>
            </div>
          </motion.div>

          {/* Value Props Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 grid md:grid-cols-3 gap-6"
          >
            {[
              { icon: Shield, title: "Enterprise Security", desc: "Bank-level encryption" },
              { icon: Users, title: "Expert Support", desc: "24/7 live chat assistance" },
              { icon: TrendingUp, title: "Proven Results", desc: "150% average ROI" }
            ].map((item, index) => (
              <div key={index} className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-xl border border-gray-200 dark:border-slate-700">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-rose-500 rounded-xl flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{item.desc}</p>
              </div>
            ))}
          </motion.div>

          {/* Testimonial */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16 bg-gradient-to-r from-white to-orange-50 dark:from-slate-800 dark:to-slate-900 rounded-2xl p-8 shadow-xl border border-orange-200 dark:border-orange-900"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-orange-500 to-rose-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                JD
              </div>
              <div className="flex-1">
                <div className="flex mb-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-lg text-gray-900 dark:text-white italic mb-3">
                  &quot;This platform completely transformed how we operate. Within 2 weeks, we saw a 200% increase in productivity. The ROI was immediate!&quot;
                </p>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">Jane Doe</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">CEO, TechCorp Inc.</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Urgency Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 text-center"
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-rose-100 dark:bg-rose-900/30 border border-rose-300 dark:border-rose-800 rounded-full text-rose-700 dark:text-rose-300 font-semibold">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-rose-500"></span>
              </span>
              Only 7 spots left at this price!
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
