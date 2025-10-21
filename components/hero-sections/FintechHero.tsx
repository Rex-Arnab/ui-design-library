"use client";

import { motion } from "framer-motion";
import { Shield, Lock, TrendingUp, CreditCard, CheckCircle, ArrowRight } from "lucide-react";

interface FintechHeroProps {
  className?: string;
}

/**
 * FintechHero - Trust-focused hero with security badges
 *
 * Features:
 * - Security and trust indicators
 * - Financial metrics and stats
 * - Compliance badges
 * - Mobile app showcase
 * - Professional banking aesthetic
 * - Encryption and protection messaging
 */
export function FintechHero({ className = "" }: FintechHeroProps) {
  const securityFeatures = [
    "Bank-level 256-bit encryption",
    "FDIC insured up to $250,000",
    "Two-factor authentication",
    "Real-time fraud monitoring"
  ];

  const complianceBadges = [
    "SOC 2 Type II",
    "PCI DSS",
    "ISO 27001",
    "GDPR"
  ];

  return (
    <section className={`relative min-h-[700px] overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-950 dark:via-blue-950 dark:to-indigo-950 ${className}`}>
      {/* Security Pattern Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(30deg,rgba(59,130,246,0.2)_12%,transparent_12.5%,transparent_87%,rgba(59,130,246,0.2)_87.5%,rgba(59,130,246,0.2)),linear-gradient(150deg,rgba(59,130,246,0.2)_12%,transparent_12.5%,transparent_87%,rgba(59,130,246,0.2)_87.5%,rgba(59,130,246,0.2)),linear-gradient(30deg,rgba(59,130,246,0.2)_12%,transparent_12.5%,transparent_87%,rgba(59,130,246,0.2)_87.5%,rgba(59,130,246,0.2)),linear-gradient(150deg,rgba(59,130,246,0.2)_12%,transparent_12.5%,transparent_87%,rgba(59,130,246,0.2)_87.5%,rgba(59,130,246,0.2))] bg-[length:80px_140px] bg-[position:0_0,0_0,40px_70px,40px_70px]" />
      </div>

      <div className="relative container mx-auto px-4 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Trust Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-4 py-2 rounded-full text-sm font-medium"
            >
              <Shield className="w-4 h-4" />
              Trusted by 10M+ users worldwide
            </motion.div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white leading-tight">
                Banking that
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
                  puts you first
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-xl">
                Experience the future of banking with enterprise-grade security, zero hidden fees,
                and tools that help your money grow.
              </p>
            </div>

            {/* Security Features */}
            <div className="space-y-3">
              {securityFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                  className="flex items-center gap-3"
                >
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2 group">
                Open Account
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-900 dark:text-white font-semibold rounded-xl border-2 border-gray-200 dark:border-gray-700 transition-all duration-200">
                Learn More
              </button>
            </motion.div>

            {/* Compliance Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="pt-6 border-t border-gray-200 dark:border-gray-700"
            >
              <div className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                Certified & Compliant:
              </div>
              <div className="flex flex-wrap gap-3">
                {complianceBadges.map((badge) => (
                  <div
                    key={badge}
                    className="px-4 py-2 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    {badge}
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Mobile App Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Phone Frame */}
            <div className="relative max-w-sm mx-auto">
              <div className="bg-gray-900 dark:bg-gray-800 rounded-[3rem] p-4 shadow-2xl border-8 border-gray-800 dark:border-gray-700">
                {/* Screen */}
                <div className="bg-white dark:bg-gray-900 rounded-[2.5rem] overflow-hidden aspect-[9/19]">
                  {/* Status Bar */}
                  <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-4 flex items-center justify-between">
                    <div className="text-white text-xs">9:41</div>
                    <div className="flex gap-1">
                      <div className="w-1 h-3 bg-white/70 rounded-full" />
                      <div className="w-1 h-3 bg-white/70 rounded-full" />
                      <div className="w-1 h-3 bg-white rounded-full" />
                    </div>
                  </div>

                  {/* App Content */}
                  <div className="p-6 space-y-6">
                    {/* Balance Card */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6, duration: 0.6 }}
                      className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl p-6 text-white space-y-4"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-sm opacity-90">Total Balance</span>
                        <CreditCard className="w-5 h-5 opacity-90" />
                      </div>
                      <div className="text-4xl font-bold">$124,850.00</div>
                      <div className="flex items-center gap-2 text-sm">
                        <TrendingUp className="w-4 h-4" />
                        <span>+12.5% this month</span>
                      </div>
                    </motion.div>

                    {/* Quick Actions */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8, duration: 0.6 }}
                      className="grid grid-cols-4 gap-3"
                    >
                      {[
                        { icon: ArrowRight, label: "Send" },
                        { icon: TrendingUp, label: "Invest" },
                        { icon: CreditCard, label: "Cards" },
                        { icon: Lock, label: "Vault" }
                      ].map((action, i) => (
                        <div key={i} className="text-center space-y-2">
                          <div className="w-12 h-12 mx-auto bg-gray-100 dark:bg-gray-800 rounded-xl flex items-center justify-center">
                            <action.icon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                          </div>
                          <div className="text-xs text-gray-600 dark:text-gray-400">{action.label}</div>
                        </div>
                      ))}
                    </motion.div>

                    {/* Recent Transactions */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1, duration: 0.6 }}
                      className="space-y-3"
                    >
                      <div className="text-sm font-semibold text-gray-900 dark:text-white">Recent Transactions</div>
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-xl">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full" />
                            <div>
                              <div className="text-sm font-medium text-gray-900 dark:text-white">Transaction {i}</div>
                              <div className="text-xs text-gray-500 dark:text-gray-400">Today</div>
                            </div>
                          </div>
                          <div className="text-sm font-semibold text-gray-900 dark:text-white">-$125.00</div>
                        </div>
                      ))}
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* Floating Security Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="absolute -top-4 -right-4 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-4 border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center">
                    <Shield className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Protected</div>
                    <div className="text-sm font-bold text-gray-900 dark:text-white">100%</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
