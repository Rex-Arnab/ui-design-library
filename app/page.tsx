"use client";

import Link from "next/link";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import {
  ArrowRight,
  Github,
  Layout,
  Copy,
  Smartphone,
  Moon,
  Eye,
  Zap,
  Package,
  Sparkles,
  Box,
  Target,
  TrendingUp,
  Check,
} from "lucide-react";
import { useRef, useEffect } from "react";
import {
  trackHeroCtaClick,
  trackCategoryClick,
  trackExternalLink,
  trackScrollDepth,
} from "@/lib/analytics";

const features = [
  {
    title: "136+ Components",
    description: "Production-ready components built with modern web standards. From heroes to footers, we've got everything.",
    icon: Package,
    stat: "136+",
  },
  {
    title: "Zero Dependencies",
    description: "No bloated libraries. Pure custom code you can understand, modify, and own completely.",
    icon: Box,
    stat: "0",
  },
  {
    title: "Copy & Deploy",
    description: "Every component includes copy-ready code. No configuration, no setup - just paste and ship.",
    icon: Copy,
    stat: "1-Click",
  },
  {
    title: "Dark Mode Native",
    description: "Built dark-mode first. Every component looks stunning in both light and dark themes.",
    icon: Moon,
    stat: "100%",
  },
  {
    title: "Mobile Optimized",
    description: "Responsive by design. Touch-friendly interactions that feel native on every device.",
    icon: Smartphone,
    stat: "Mobile-First",
  },
  {
    title: "Accessible",
    description: "WCAG 2.1 AA compliant with proper ARIA labels, keyboard navigation, and screen reader support.",
    icon: Eye,
    stat: "AA",
  },
];

const categories = [
  { name: "Hero Sections", count: 14, color: "bg-cyan-500" },
  { name: "Authentication", count: 13, color: "bg-purple-500" },
  { name: "Pricing Tables", count: 8, color: "bg-pink-500" },
  { name: "Feature Sections", count: 15, color: "bg-orange-500" },
  { name: "Timeline Components", count: 20, color: "bg-emerald-500" },
  { name: "Footer Designs", count: 8, color: "bg-blue-500" },
  { name: "CTA Sections", count: 6, color: "bg-red-500" },
  { name: "FAQ Components", count: 8, color: "bg-yellow-500" },
  { name: "Newsletter Forms", count: 6, color: "bg-teal-500" },
  { name: "Team Sections", count: 8, color: "bg-indigo-500" },
  { name: "Testimonials", count: 8, color: "bg-fuchsia-500" },
  { name: "Navigation", count: 8, color: "bg-lime-500" },
];

const stats = [
  { label: "Components", value: "136+" },
  { label: "Lines of Code", value: "24.5K+" },
  { label: "Dark Mode", value: "100%" },
  { label: "TypeScript", value: "100%" },
];

export default function Home() {
  const heroRef = useRef(null);
  const featuresRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  const featuresInView = useInView(featuresRef, { once: true, margin: "-100px" });

  // Track scroll depth
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      const percentage = Math.round(latest * 100);
      // Track at 25%, 50%, 75%, 100%
      if (percentage === 25 || percentage === 50 || percentage === 75 || percentage === 100) {
        trackScrollDepth(percentage, "landing");
      }
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <div className="flex flex-col min-h-screen bg-black text-white overflow-x-hidden">
      {/* Navigation Bar - Floating brutalist style */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl"
      >
        <nav className="bg-zinc-900 border-4 border-white shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-cyan-500 flex items-center justify-center border-2 border-white rotate-6 group-hover:rotate-12 transition-transform">
              <Layout className="h-6 w-6 text-black -rotate-6 group-hover:-rotate-12" />
            </div>
            <span className="font-black text-xl tracking-tighter">UI.LIBRARY</span>
          </Link>
          <div className="flex items-center gap-3">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackExternalLink("https://github.com", "GitHub - Header")}
              className="bg-white text-black px-6 py-2.5 font-bold border-2 border-white hover:bg-black hover:text-white transition-all duration-200 flex items-center gap-2 shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1"
            >
              <Github className="h-4 w-4" />
              <span className="hidden sm:inline">GITHUB</span>
            </a>
          </div>
        </nav>
      </motion.header>

      {/* Hero Section - Bold geometric with floating shapes */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center px-4 pt-32 pb-20 overflow-hidden"
      >
        {/* Animated Background Shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear" as const,
            }}
            className="absolute -top-20 -left-20 w-96 h-96 bg-purple-600 opacity-20"
            style={{ y }}
          />
          <motion.div
            animate={{
              rotate: [360, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear" as const,
            }}
            className="absolute top-1/4 right-0 w-64 h-64 bg-cyan-500 opacity-20"
          />
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut" as const,
            }}
            className="absolute bottom-20 left-1/4 w-80 h-80 bg-pink-500 opacity-20 rounded-full"
          />
          <motion.div
            animate={{
              y: [-20, 20, -20],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut" as const,
            }}
            className="absolute top-1/3 left-1/3 w-32 h-32 bg-orange-500 opacity-30 rotate-45"
          />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          style={{ opacity }}
          className="relative z-10 max-w-6xl mx-auto text-center space-y-8"
        >
          {/* Top badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-purple-600 text-white px-4 py-2 font-bold border-2 border-white shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]"
          >
            <Sparkles className="h-4 w-4" />
            <span className="text-sm">136+ PRODUCTION-READY COMPONENTS</span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black leading-none tracking-tighter"
          >
            <span className="block">BUILD</span>
            <span className="block text-cyan-500">FASTER.</span>
            <span className="block">SHIP</span>
            <span className="block text-pink-500">SOONER.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-xl sm:text-2xl md:text-3xl text-zinc-400 max-w-4xl mx-auto font-bold leading-relaxed"
          >
            The only UI library you need. Copy production-ready components built with Next.js, TypeScript, and Tailwind CSS. No dependencies. No BS.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
          >
            <Link
              href="/showcase"
              onClick={() => trackHeroCtaClick("primary")}
              className="group relative bg-white text-black px-8 py-5 text-lg font-black border-4 border-white shadow-[8px_8px_0px_0px_rgba(6,182,212,1)] hover:shadow-none hover:translate-x-2 hover:translate-y-2 transition-all duration-200 flex items-center gap-3"
            >
              <span>BROWSE COMPONENTS</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                trackHeroCtaClick("secondary");
                trackExternalLink("https://github.com", "GitHub - Hero");
              }}
              className="bg-transparent text-white px-8 py-5 text-lg font-black border-4 border-white hover:bg-white hover:text-black transition-all duration-200 flex items-center gap-3"
            >
              <Github className="h-5 w-5" />
              <span>VIEW ON GITHUB</span>
            </a>
          </motion.div>

          {/* Stats bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-12 max-w-4xl mx-auto"
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-zinc-900 border-2 border-white p-4 shadow-[4px_4px_0px_0px_rgba(255,255,255,0.3)]"
              >
                <div className="text-3xl font-black text-cyan-500">{stat.value}</div>
                <div className="text-sm font-bold text-zinc-400 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          style={{ opacity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" as const }}
            className="w-0.5 h-12 bg-cyan-500"
          />
        </motion.div>
      </section>

      {/* Features Grid - Card-based with stagger animation */}
      <section ref={featuresRef} className="relative py-20 px-4 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={featuresInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter mb-6">
              WHY DEVELOPERS
              <span className="block text-cyan-500">LOVE THIS LIBRARY</span>
            </h2>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto font-bold">
              Built by developers, for developers. No fluff, no marketing BS - just components that work.
            </p>
          </motion.div>

          {/* Features grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                animate={featuresInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-zinc-900 border-2 border-zinc-800 p-6 hover:border-white transition-all duration-300 overflow-hidden"
              >
                {/* Hover effect background */}
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-5 transition-opacity duration-300" />

                <div className="relative">
                  {/* Stat badge */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-cyan-500 border-2 border-white flex items-center justify-center">
                      <feature.icon className="h-6 w-6 text-black" />
                    </div>
                    <div className="text-2xl font-black text-cyan-500">{feature.stat}</div>
                  </div>

                  <h3 className="text-xl font-black mb-3 tracking-tight">{feature.title}</h3>
                  <p className="text-zinc-400 font-medium leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Component Categories - Masonry style showcase */}
      <section className="relative py-20 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter mb-6"
            >
              <span className="block">12 CATEGORIES.</span>
              <span className="block text-pink-500">INFINITE POSSIBILITIES.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-zinc-400 max-w-3xl mx-auto font-bold"
            >
              From hero sections to footers, authentication pages to pricing tables - we&apos;ve got every component category covered.
            </motion.p>
          </div>

          {/* Categories grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ scale: 1.05, rotate: 2 }}
                onClick={() => trackCategoryClick(category.name)}
                className="group relative bg-zinc-900 border-2 border-zinc-800 p-6 hover:border-white transition-all duration-300 cursor-pointer"
              >
                <div className={`w-3 h-3 ${category.color} absolute top-4 right-4`} />
                <div className="text-3xl font-black mb-2">{category.count}</div>
                <div className="text-sm font-bold text-zinc-400 uppercase tracking-wide">
                  {category.name}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof / Benefits Section */}
      <section className="relative py-20 px-4 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter mb-6">
              STOP REINVENTING
              <span className="block text-orange-500">THE WHEEL</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: "Ship 10x Faster",
                description: "Stop wasting weeks building components from scratch. Copy, paste, ship in minutes.",
                color: "bg-yellow-500",
              },
              {
                icon: Target,
                title: "Focus on Business Logic",
                description: "Let us handle the UI. You focus on what makes your product unique.",
                color: "bg-cyan-500",
              },
              {
                icon: TrendingUp,
                title: "Production-Ready Code",
                description: "Every component is battle-tested, accessible, and ready for production.",
                color: "bg-pink-500",
              },
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative bg-zinc-900 border-2 border-white p-8 shadow-[8px_8px_0px_0px_rgba(255,255,255,0.1)]"
              >
                <div className={`w-16 h-16 ${benefit.color} border-2 border-white flex items-center justify-center mb-6`}>
                  <benefit.icon className="h-8 w-8 text-black" />
                </div>
                <h3 className="text-2xl font-black mb-4 tracking-tight">{benefit.title}</h3>
                <p className="text-zinc-400 font-medium text-lg leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA - High contrast */}
      <section className="relative py-32 px-4 bg-cyan-500 text-black">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter leading-none">
              READY TO BUILD
              <span className="block">SOMETHING GREAT?</span>
            </h2>
            <p className="text-xl sm:text-2xl font-bold opacity-80 max-w-2xl mx-auto">
              Join thousands of developers who are building faster with our component library.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Link
                href="/showcase"
                className="bg-black text-white px-10 py-6 text-lg font-black border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-2 hover:translate-y-2 transition-all duration-200 flex items-center gap-3"
              >
                <span>START BUILDING NOW</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>

            {/* Feature checkmarks */}
            <div className="flex flex-wrap justify-center gap-6 pt-8">
              {["Free Forever", "MIT License", "No Sign-up Required", "100% Open Source"].map(
                (item) => (
                  <div key={item} className="flex items-center gap-2 font-bold">
                    <div className="w-6 h-6 bg-black flex items-center justify-center border-2 border-black">
                      <Check className="h-4 w-4 text-cyan-500" />
                    </div>
                    <span>{item}</span>
                  </div>
                )
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer - Brutalist minimal */}
      <footer className="bg-black border-t-4 border-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-cyan-500 flex items-center justify-center border-2 border-white rotate-6">
                  <Layout className="h-6 w-6 text-black -rotate-6" />
                </div>
                <span className="font-black text-xl tracking-tighter">UI.LIBRARY</span>
              </div>
              <p className="text-zinc-400 font-medium">
                Production-ready UI components built for modern web applications.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-black mb-4 text-lg">QUICK LINKS</h3>
              <ul className="space-y-2">
                {["Components", "Documentation", "GitHub", "License"].map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-zinc-400 hover:text-white font-medium transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="font-black mb-4 text-lg">RESOURCES</h3>
              <ul className="space-y-2">
                {["Getting Started", "Examples", "Best Practices", "Support"].map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-zinc-400 hover:text-white font-medium transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t-2 border-zinc-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-zinc-500 font-medium text-sm">
              © 2025 UI LIBRARY. MIT LICENSE. BUILD ANYTHING.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="text-zinc-500 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-zinc-500 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
