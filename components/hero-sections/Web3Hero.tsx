"use client";

import { motion } from "framer-motion";
import { Wallet, TrendingUp, Shield, Coins, Sparkles, ArrowRight, Globe } from "lucide-react";

interface Web3HeroProps {
  className?: string;
}

/**
 * Web3Hero - Modern gradient-heavy crypto aesthetic
 *
 * Features:
 * - Vibrant gradients and glassmorphism
 * - Crypto wallet integration
 * - NFT/Token showcase
 * - Blockchain metrics
 * - Animated gradient backgrounds
 * - Web3 wallet connect button
 */
export function Web3Hero({ className = "" }: Web3HeroProps) {
  const cryptoStats = [
    { value: "$2.4B+", label: "Total Volume" },
    { value: "500K+", label: "Active Users" },
    { value: "15K+", label: "NFTs Minted" }
  ];

  const features = [
    { icon: Wallet, title: "Multi-Chain Support", desc: "ETH, SOL, MATIC & more" },
    { icon: Shield, title: "Secure & Audited", desc: "Smart contracts verified" },
    { icon: TrendingUp, title: "Instant Swaps", desc: "Low fees, fast trades" }
  ];

  return (
    <section className={`relative min-h-[800px] overflow-hidden bg-black ${className}`}>
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-1/2 -left-1/4 w-full h-full bg-gradient-to-br from-purple-600 via-pink-500 to-orange-500 opacity-30 blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-1/2 -right-1/4 w-full h-full bg-gradient-to-tl from-blue-600 via-cyan-500 to-teal-500 opacity-30 blur-3xl"
        />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px]" />

      <div className="relative container mx-auto px-4 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-xl border border-purple-500/30 text-purple-300 px-4 py-2 rounded-full text-sm font-medium"
            >
              <Sparkles className="w-4 h-4" />
              The Future of Decentralized Finance
            </motion.div>

            {/* Headline */}
            <div className="space-y-6">
              <h1 className="text-6xl md:text-8xl font-black text-white leading-none">
                ENTER THE
                <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 animate-gradient">
                  METAVERSE
                </span>
              </h1>
              <p className="text-xl text-gray-300 max-w-xl">
                Trade, collect, and earn in the decentralized economy. Join millions building the future
                of digital ownership and finance.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                  className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all duration-300"
                >
                  <feature.icon className="w-6 h-6 text-purple-400 mb-2" />
                  <div className="text-sm font-semibold text-white">{feature.title}</div>
                  <div className="text-xs text-gray-400">{feature.desc}</div>
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
              <button className="px-8 py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 hover:from-purple-700 hover:via-pink-700 hover:to-orange-700 text-white font-bold rounded-xl shadow-2xl shadow-purple-500/50 transition-all duration-200 flex items-center justify-center gap-2 group">
                <Wallet className="w-5 h-5" />
                Connect Wallet
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-xl hover:bg-white/20 border border-white/20 text-white font-bold rounded-xl transition-all duration-200 flex items-center justify-center gap-2">
                <Globe className="w-5 h-5" />
                Explore dApps
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="flex flex-wrap gap-8 pt-6 border-t border-white/10"
            >
              {cryptoStats.map((stat) => (
                <div key={stat.label} className="space-y-1">
                  <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right - NFT/Crypto Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Main NFT Card */}
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-xl border border-purple-500/30 rounded-3xl p-8 overflow-hidden"
            >
              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 rounded-3xl blur-2xl opacity-20" />

              <div className="relative space-y-6">
                {/* NFT Image Placeholder */}
                <div className="aspect-square bg-gradient-to-br from-purple-600 via-pink-600 to-orange-600 rounded-2xl overflow-hidden relative">
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <Coins className="w-24 h-24 text-white opacity-50" />
                  </div>
                  {/* Rarity Badge */}
                  <div className="absolute top-4 right-4 bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-bold">
                    RARE
                  </div>
                </div>

                {/* NFT Info */}
                <div className="space-y-4">
                  <div>
                    <div className="text-2xl font-bold text-white">Cosmic #8745</div>
                    <div className="text-sm text-gray-400">Metaverse Collection</div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-gray-400">Current Price</div>
                      <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                        2.5 ETH
                      </div>
                    </div>
                    <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-xl transition-all duration-200">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Floating Price Cards */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="absolute -top-6 -left-6 bg-green-500/20 backdrop-blur-xl border border-green-500/30 rounded-2xl p-4"
            >
              <div className="flex items-center gap-3">
                <TrendingUp className="w-8 h-8 text-green-400" />
                <div>
                  <div className="text-2xl font-bold text-green-400">+127%</div>
                  <div className="text-xs text-gray-300">24h Change</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="absolute -bottom-6 -right-6 bg-blue-500/20 backdrop-blur-xl border border-blue-500/30 rounded-2xl p-4"
            >
              <div className="flex items-center gap-3">
                <Shield className="w-8 h-8 text-blue-400" />
                <div>
                  <div className="text-sm font-bold text-white">Verified</div>
                  <div className="text-xs text-gray-300">Contract Audited</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 5s ease infinite;
        }
      `}</style>
    </section>
  );
}
