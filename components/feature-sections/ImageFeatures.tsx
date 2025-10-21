"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

interface Feature {
  title: string;
  description: string;
  benefits: string[];
  imagePosition: "left" | "right";
}

interface ImageFeaturesProps {
  className?: string;
}

/**
 * ImageFeatures - Features with accompanying images/screenshots
 *
 * Features:
 * - Grid layout with image + text pairs
 * - Images alternate left/right per row
 * - Placeholder images with aspect ratio
 * - Benefit lists with checkmarks
 * - Clean, modern presentation
 * - Responsive: stacks on mobile
 */
export function ImageFeatures({ className = "" }: ImageFeaturesProps) {
  const features: Feature[] = [
    {
      title: "Real-Time Collaboration",
      description: "Work together seamlessly with your team. See changes instantly as they happen with live cursors and collaborative editing.",
      benefits: [
        "Live cursor tracking for all team members",
        "Instant sync across all devices",
        "Conflict-free editing with CRDT technology",
        "Comment and annotate directly on content"
      ],
      imagePosition: "left"
    },
    {
      title: "Advanced Analytics Dashboard",
      description: "Get deep insights into your business metrics with customizable dashboards and real-time reporting tools.",
      benefits: [
        "Custom dashboard builder",
        "Real-time data visualization",
        "Export reports in multiple formats",
        "Automated insights and recommendations"
      ],
      imagePosition: "right"
    },
    {
      title: "Seamless Integrations",
      description: "Connect with over 1,000+ apps and services. Build custom workflows with our powerful API and webhooks.",
      benefits: [
        "Pre-built integrations with popular tools",
        "Robust REST API with comprehensive docs",
        "Webhook support for real-time events",
        "OAuth 2.0 authentication"
      ],
      imagePosition: "left"
    }
  ];

  return (
    <section className={`py-20 px-4 bg-gray-50 dark:bg-gray-900 ${className}`}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
            Features That Accelerate Your Work
          </h2>
          <p className="text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Built for modern teams who need speed, reliability, and powerful integrations
          </p>
        </motion.div>

        {/* Feature Sections */}
        <div className="space-y-24">
          {features.map((feature, idx) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`grid md:grid-cols-2 gap-12 items-center ${
                feature.imagePosition === "right" ? "md:grid-flow-dense" : ""
              }`}
            >
              {/* Image */}
              <div className={feature.imagePosition === "right" ? "md:col-start-2" : ""}>
                <div className="relative rounded-xl overflow-hidden shadow-xl border border-gray-200 dark:border-gray-700 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 aspect-[4/3]">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-gray-400 dark:text-gray-600 text-sm font-medium">
                      Feature Preview
                    </div>
                  </div>
                  {/* Decorative Elements */}
                  <div className="absolute top-4 left-4 w-16 h-16 bg-white/50 dark:bg-gray-800/50 rounded-lg"></div>
                  <div className="absolute bottom-4 right-4 w-24 h-24 bg-white/50 dark:bg-gray-800/50 rounded-lg"></div>
                </div>
              </div>

              {/* Content */}
              <div className={feature.imagePosition === "right" ? "md:col-start-1 md:row-start-1" : ""}>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-base text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  {feature.description}
                </p>
                <ul className="space-y-3">
                  {feature.benefits.map((benefit, bidx) => (
                    <motion.li
                      key={bidx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + (bidx * 0.1) }}
                      className="flex items-start gap-3"
                    >
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">
                        {benefit}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
