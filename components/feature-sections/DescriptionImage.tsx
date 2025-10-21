"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface Feature {
  badge: string;
  title: string;
  description: string;
  cta: string;
}

interface DescriptionImageProps {
  className?: string;
}

/**
 * DescriptionImage - Alternating text-image layout (zigzag)
 *
 * Features:
 * - Large section per feature with generous spacing
 * - Alternating layout: text left/image right, then image left/text right
 * - Badge labels for feature categories
 * - CTA button per feature section
 * - Large readable text with hierarchy
 * - Smooth scroll-triggered animations
 */
export function DescriptionImage({ className = "" }: DescriptionImageProps) {
  const features: Feature[] = [
    {
      badge: "Performance",
      title: "Built for Speed and Scale",
      description: "Experience lightning-fast performance with our globally distributed infrastructure. Sub-100ms response times across all regions, with automatic scaling to handle traffic spikes. Our CDN ensures your content is always delivered at maximum speed.",
      cta: "View Performance Metrics"
    },
    {
      badge: "Security",
      title: "Enterprise-Grade Protection",
      description: "Your data is protected by military-grade encryption and industry-leading security practices. SOC 2 Type II certified, GDPR compliant, and regularly audited by independent security experts. Two-factor authentication and SSO included.",
      cta: "Learn About Security"
    },
    {
      badge: "Integration",
      title: "Connect Everything You Use",
      description: "Seamlessly integrate with over 1,000 popular tools and services. Our comprehensive REST API and webhook system lets you build custom workflows tailored to your needs. OAuth 2.0 authentication ensures secure connections.",
      cta: "Explore Integrations"
    }
  ];

  return (
    <section className={`py-20 px-4 bg-white dark:bg-gray-900 ${className}`}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
            Everything You Need to Succeed
          </h2>
          <p className="text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Powerful features designed to help you build better products faster
          </p>
        </motion.div>

        {/* Feature Sections */}
        <div className="space-y-32">
          {features.map((feature, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-150px" }}
                transition={{ duration: 0.7 }}
                className={`grid md:grid-cols-2 gap-16 items-center ${
                  !isEven ? "md:grid-flow-dense" : ""
                }`}
              >
                {/* Image */}
                <div className={!isEven ? "md:col-start-1" : ""}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-700 bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 dark:from-indigo-900/20 dark:via-purple-900/20 dark:to-pink-900/20 aspect-[5/4]"
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-gray-400 dark:text-gray-600 text-sm font-medium">
                        {feature.badge} Illustration
                      </div>
                    </div>
                    {/* Decorative Grid */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                  </motion.div>
                </div>

                {/* Content */}
                <div className={!isEven ? "md:col-start-2 md:row-start-1" : ""}>
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    <div className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-semibold rounded-full mb-4">
                      {feature.badge}
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-base text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                      {feature.description}
                    </p>
                    <button className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors duration-200 group">
                      {feature.cta}
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                    </button>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
