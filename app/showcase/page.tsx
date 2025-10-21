"use client";

import Link from "next/link";
import {
  ArrowRight,
  MousePointerClick,
  LayoutGrid,
  FileText,
  Table,
  Flame,
  Lock,
  DollarSign,
  Boxes,
  Clock,
  Layers,
  Target,
  HelpCircle,
  MailOpen,
  Users,
  Quote,
  Menu,
  TrendingUp,
  Newspaper,
  Package,
  Eye,
  FolderTree,
  Sparkles,
} from "lucide-react";
import { PageHeader } from "@/components/showcase/page-header";
import { CustomButton } from "@/components/custom-ui/CustomButton";
import {
  CustomCard,
  CustomCardContent,
  CustomCardDescription,
  CustomCardFooter,
  CustomCardHeader,
  CustomCardTitle,
} from "@/components/custom-ui/CustomCard";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const basicComponents = [
  {
    title: "Buttons",
    description: "Interactive button components with various styles, sizes, and states",
    icon: MousePointerClick,
    href: "/showcase/buttons",
    items: ["Primary", "Secondary", "Outline", "Ghost", "Link", "Destructive"],
    color: "text-blue-600 dark:text-blue-400",
    bgColor: "bg-blue-50 dark:bg-blue-950/30",
  },
  {
    title: "Cards",
    description: "Flexible card layouts for content organization and display",
    icon: LayoutGrid,
    href: "/showcase/cards",
    items: ["Basic Cards", "With Images", "With Actions", "Stats Cards"],
    color: "text-purple-600 dark:text-purple-400",
    bgColor: "bg-purple-50 dark:bg-purple-950/30",
  },
  {
    title: "Forms",
    description: "Form inputs, validation patterns, and user input components",
    icon: FileText,
    href: "/showcase/forms",
    items: ["Text Inputs", "Selects", "Checkboxes", "Radio Groups", "Validation"],
    color: "text-green-600 dark:text-green-400",
    bgColor: "bg-green-50 dark:bg-green-950/30",
  },
  {
    title: "Data Tables",
    description: "Sortable, filterable data tables for displaying structured data",
    icon: Table,
    href: "/showcase/data-tables",
    items: ["Basic Tables", "Sortable Columns", "Actions", "Status Badges"],
    color: "text-orange-600 dark:text-orange-400",
    bgColor: "bg-orange-50 dark:bg-orange-950/30",
  },
];

const patterns = [
  {
    title: "Hero Sections",
    description: "Production-ready hero designs for landing pages",
    icon: Flame,
    href: "/showcase/hero-sections",
    badge: "14 Variants",
    items: ["Travel", "SaaS", "E-commerce", "Portfolio", "Agency", "Fintech"],
  },
  {
    title: "Auth Pages",
    description: "Authentication flows and login/signup forms",
    icon: Lock,
    href: "/showcase/auth-pages",
    badge: "13 Pages",
    items: ["Login", "Signup", "Social Login", "2FA", "Forgot Password", "Onboarding"],
  },
  {
    title: "Pricing",
    description: "Conversion-optimized pricing layouts",
    icon: DollarSign,
    href: "/showcase/pricing",
    badge: "8 Variants",
    items: ["Simple", "Comparison", "Toggle", "Tiered", "Freemium", "Enterprise"],
  },
  {
    title: "Feature Sections",
    description: "Feature showcase layouts for product pages",
    icon: Boxes,
    href: "/showcase/feature-sections",
    badge: "15 Variants",
    items: ["Card Grid", "Image Features", "Bento", "Timeline", "Stats", "Testimonials"],
  },
  {
    title: "Timelines",
    description: "Timeline and roadmap components",
    icon: Clock,
    href: "/showcase/timelines",
    badge: "20 Variants",
    items: ["Vertical", "Horizontal", "Roadmap", "Progress", "History", "Events"],
  },
  {
    title: "Footers",
    description: "Footer section layouts for websites",
    icon: Layers,
    href: "/showcase/footers",
    badge: "8 Variants",
    items: ["Multi-Column", "Minimal", "Newsletter", "Social", "Mega", "Centered"],
  },
  {
    title: "CTA Sections",
    description: "Call-to-action sections for conversions",
    icon: Target,
    href: "/showcase/cta-sections",
    badge: "6 Variants",
    items: ["Hero CTA", "Minimal", "Split", "Banner", "Card", "Social Proof"],
  },
  {
    title: "FAQs",
    description: "FAQ and accordion components",
    icon: HelpCircle,
    href: "/showcase/faqs",
    badge: "8 Variants",
    items: ["Accordion", "Two-Column", "Categorized", "Searchable", "Card", "Icon"],
  },
  {
    title: "Newsletters",
    description: "Newsletter signup forms",
    icon: MailOpen,
    href: "/showcase/newsletters",
    badge: "6 Variants",
    items: ["Inline", "Centered", "Side Image", "Minimal", "Popup", "Social Proof"],
  },
  {
    title: "Team Sections",
    description: "Team and about page layouts",
    icon: Users,
    href: "/showcase/team-sections",
    badge: "8 Variants",
    items: ["Grid", "Carousel", "Bento", "Minimal", "Hero", "Department"],
  },
  {
    title: "Testimonials",
    description: "Customer testimonial sections",
    icon: Quote,
    href: "/showcase/testimonials",
    badge: "8 Variants",
    items: ["Grid", "Carousel", "Marquee", "Featured", "Video", "Wall"],
  },
  {
    title: "Navigation",
    description: "Navbar and menu components",
    icon: Menu,
    href: "/showcase/navigation",
    badge: "8 Variants",
    items: ["Simple", "Mega Menu", "Sidebar", "Transparent", "Search", "Multi-Level"],
  },
  {
    title: "Stats & Metrics",
    description: "Statistics and metrics displays",
    icon: TrendingUp,
    href: "/showcase/stats",
    badge: "6 Variants",
    items: ["Simple", "Animated Counter", "Progress Bar", "Comparison", "Charts"],
  },
  {
    title: "Blog Grids",
    description: "Blog and content grid layouts",
    icon: Newspaper,
    href: "/showcase/blog-grids",
    badge: "6 Variants",
    items: ["Classic", "Featured", "Masonry", "Minimal", "Image-First", "Timeline"],
  },
];

const stats = [
  {
    value: 120,
    suffix: "+",
    label: "Components",
    icon: Package,
    description: "Production-ready",
  },
  {
    value: 25,
    suffix: "+",
    label: "Showcase Pages",
    icon: Eye,
    description: "Interactive demos",
  },
  {
    value: 14,
    suffix: "",
    label: "Categories",
    icon: FolderTree,
    description: "Well organized",
  },
  {
    value: 100,
    suffix: "%",
    label: "Custom Built",
    icon: Sparkles,
    description: "No dependencies",
  },
];

function AnimatedCounter({ end, suffix = "", duration = 2000 }: { end: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);

      // Easing function (easeOutQuad)
      const easeOut = 1 - Math.pow(1 - percentage, 3);
      setCount(Math.floor(end * easeOut));

      if (percentage < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function ShowcasePage() {
  return (
    <div className="space-y-16 pb-16">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="relative">
          {/* Decorative Background Pattern */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute top-0 left-1/4 w-96 h-96 border border-gray-200 dark:border-gray-800 rounded-full opacity-20" />
            <div className="absolute top-20 right-1/4 w-64 h-64 border border-gray-200 dark:border-gray-800 rounded-full opacity-20" />
          </div>

          <div className="text-center max-w-4xl mx-auto py-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 mb-6"
            >
              <Sparkles className="h-4 w-4 text-blue-600 dark:text-blue-400" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Production-Ready UI Components
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-gray-900 dark:text-white"
            >
              Welcome to
              <span className="block mt-2 bg-clip-text text-transparent bg-[linear-gradient(to_right,#3b82f6,#8b5cf6,#ec4899)]">
                UI Showcase
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
            >
              A comprehensive collection of production-ready UI components. Built with Next.js,
              TypeScript, Tailwind CSS v4, and Framer Motion. All components are fully responsive,
              support dark mode, and are ready to copy into your projects.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex items-center justify-center gap-4 mt-8"
            >
              <CustomButton size="lg" asChild>
                <Link href="/showcase/buttons">
                  Explore Components
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </CustomButton>
              <CustomButton size="lg" variant="outline" asChild>
                <Link href="/showcase/hero-sections">View Patterns</Link>
              </CustomButton>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Stats Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div key={stat.label} variants={itemVariants}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="group relative bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-8 text-center overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  {/* Decorative corner accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-blue-500/20 dark:border-blue-400/20 rounded-tr-2xl" />

                  <div className="relative z-10">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gray-100 dark:bg-gray-800 mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="h-6 w-6 text-gray-700 dark:text-gray-300" />
                    </div>

                    <div className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2">
                      <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                    </div>

                    <div className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
                      {stat.label}
                    </div>

                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      {stat.description}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Basic Components Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <div className="space-y-8">
          {/* Section Header */}
          <div className="flex items-center gap-4">
            <div className="h-px flex-1 bg-gray-200 dark:bg-gray-800" />
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                Basic Components
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Essential building blocks for any application
              </p>
            </div>
            <div className="h-px flex-1 bg-gray-200 dark:bg-gray-800" />
          </div>

          {/* Components Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {basicComponents.map((category, index) => {
              const Icon = category.icon;
              return (
                <motion.div key={category.title} variants={itemVariants}>
                  <motion.div
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
                  >
                    <CustomCard className="h-full border-2 hover:border-gray-400 dark:hover:border-gray-600 transition-all shadow-sm hover:shadow-lg">
                      <CustomCardHeader>
                        <div className={`inline-flex p-3 rounded-xl ${category.bgColor} mb-3`}>
                          <Icon className={`h-7 w-7 ${category.color}`} />
                        </div>
                        <CustomCardTitle className="text-xl">{category.title}</CustomCardTitle>
                        <CustomCardDescription className="text-sm leading-relaxed">
                          {category.description}
                        </CustomCardDescription>
                      </CustomCardHeader>
                      <CustomCardContent>
                        <ul className="space-y-2.5 text-sm text-gray-600 dark:text-gray-400">
                          {category.items.map((item) => (
                            <li key={item} className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-gray-400 dark:bg-gray-500" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </CustomCardContent>
                      <CustomCardFooter>
                        <CustomButton
                          variant="outline"
                          className="w-full group hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 transition-colors"
                          asChild
                        >
                          <Link href={category.href}>
                            Explore
                            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                          </Link>
                        </CustomButton>
                      </CustomCardFooter>
                    </CustomCard>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>

      {/* Pattern Components Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <div className="space-y-8">
          {/* Section Header */}
          <div className="flex items-center gap-4">
            <div className="h-px flex-1 bg-gray-200 dark:bg-gray-800" />
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                Pattern Components
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Production-ready sections for your website
              </p>
            </div>
            <div className="h-px flex-1 bg-gray-200 dark:bg-gray-800" />
          </div>

          {/* Patterns Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {patterns.map((pattern, index) => {
              const Icon = pattern.icon;
              return (
                <motion.div key={pattern.title} variants={itemVariants}>
                  <motion.div
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
                  >
                    <CustomCard className="h-full border-2 hover:border-blue-400 dark:hover:border-blue-600 transition-all shadow-sm hover:shadow-lg group">
                      <CustomCardHeader>
                        <div className="flex items-start justify-between mb-3">
                          <div className="p-3 rounded-xl bg-blue-50 dark:bg-blue-950/30 group-hover:scale-110 transition-transform">
                            <Icon className="h-7 w-7 text-blue-600 dark:text-blue-400" />
                          </div>
                          {pattern.badge && (
                            <span className="text-xs px-3 py-1.5 bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 rounded-full font-medium border border-blue-200 dark:border-blue-800">
                              {pattern.badge}
                            </span>
                          )}
                        </div>
                        <CustomCardTitle className="text-xl">{pattern.title}</CustomCardTitle>
                        <CustomCardDescription className="text-sm leading-relaxed">
                          {pattern.description}
                        </CustomCardDescription>
                      </CustomCardHeader>
                      <CustomCardContent>
                        <ul className="space-y-2.5 text-sm text-gray-600 dark:text-gray-400">
                          {pattern.items.map((item) => (
                            <li key={item} className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-blue-400 dark:bg-blue-500" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </CustomCardContent>
                      <CustomCardFooter>
                        <CustomButton
                          variant="outline"
                          className="w-full group/btn hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500 hover:border-blue-600 dark:hover:border-blue-500 transition-colors"
                          asChild
                        >
                          <Link href={pattern.href}>
                            View All
                            <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                          </Link>
                        </CustomButton>
                      </CustomCardFooter>
                    </CustomCard>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>

      {/* Footer CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative"
      >
        <div className="relative bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-800 rounded-3xl p-12 text-center overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-40 h-40 border-t-2 border-l-2 border-gray-200 dark:border-gray-800 rounded-tl-3xl" />
          <div className="absolute bottom-0 right-0 w-40 h-40 border-b-2 border-r-2 border-gray-200 dark:border-gray-800 rounded-br-3xl" />

          <div className="relative z-10">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Ready to build something amazing?
            </h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
              Start exploring our collection of components and patterns. Copy, customize, and use them
              in your next project. All components are production-ready and fully customizable.
            </p>
            <div className="flex items-center justify-center gap-4">
              <CustomButton size="lg" asChild>
                <Link href="/showcase/hero-sections">
                  Browse Patterns
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </CustomButton>
              <CustomButton size="lg" variant="outline" asChild>
                <Link href="/showcase/buttons">View Components</Link>
              </CustomButton>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
