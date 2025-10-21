"use client";

import { motion } from "framer-motion";
import { Quote, Zap, Shield, Users, type LucideIcon } from "lucide-react";

interface FeatureTestimonial {
  icon: LucideIcon;
  feature: string;
  description: string;
  quote: string;
  author: {
    name: string;
    role: string;
    company: string;
    avatar: string;
  };
}

interface TestimonialProps {
  className?: string;
}

/**
 * Testimonial - Features with customer proof
 *
 * Features:
 * - Feature description paired with customer quote
 * - Customer quote beneath feature
 * - Avatar, name, company for social proof
 * - "How customers use X feature" angle
 * - Builds trust through real stories
 * - Icon-driven feature presentation
 */
export function Testimonial({ className = "" }: TestimonialProps) {
  const features: FeatureTestimonial[] = [
    {
      icon: Zap,
      feature: "Real-Time Collaboration",
      description: "Work together seamlessly with live updates, shared workspaces, and instant sync across all devices.",
      quote: "The real-time collaboration has completely transformed how our distributed team works. We've cut meeting time by 50% and ship features twice as fast.",
      author: {
        name: "Sarah Chen",
        role: "Engineering Lead",
        company: "TechCorp",
        avatar: "SC"
      }
    },
    {
      icon: Shield,
      feature: "Enterprise Security",
      description: "Bank-level encryption, SOC 2 certification, and compliance with major data protection regulations.",
      quote: "Security was our biggest concern when choosing a platform. The SOC 2 compliance and detailed audit logs gave us complete peace of mind.",
      author: {
        name: "Michael Rodriguez",
        role: "CTO",
        company: "FinanceApp",
        avatar: "MR"
      }
    },
    {
      icon: Users,
      feature: "Team Management",
      description: "Role-based permissions, team workspaces, and granular access control for organizations of any size.",
      quote: "Managing 200+ team members across 15 projects used to be a nightmare. Now we have complete visibility and control in one place.",
      author: {
        name: "Emily Thompson",
        role: "Operations Director",
        company: "GlobalCo",
        avatar: "ET"
      }
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
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
            Loved by Teams Everywhere
          </h2>
          <p className="text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            See how real teams are using our features to build better products
          </p>
        </motion.div>

        {/* Feature Testimonials */}
        <div className="space-y-16">
          {features.map((item, idx) => {
            const Icon = item.icon;
            const isEven = idx % 2 === 0;

            return (
              <motion.div
                key={item.feature}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`grid md:grid-cols-2 gap-12 items-start ${
                  !isEven ? "md:grid-flow-dense" : ""
                }`}
              >
                {/* Feature Description */}
                <div className={!isEven ? "md:col-start-2" : ""}>
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                    {item.feature}
                  </h3>
                  <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Testimonial Card */}
                <div className={!isEven ? "md:col-start-1 md:row-start-1" : ""}>
                  <div className="p-8 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
                    {/* Quote Icon */}
                    <Quote className="w-8 h-8 text-blue-600 dark:text-blue-400 mb-4" />

                    {/* Quote */}
                    <blockquote className="text-base text-gray-700 dark:text-gray-300 mb-6 leading-relaxed italic">
                      &quot;{item.quote}&quot;
                    </blockquote>

                    {/* Author */}
                    <div className="flex items-center gap-4">
                      {/* Avatar */}
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-sm font-bold text-white">
                          {item.author.avatar}
                        </span>
                      </div>

                      {/* Info */}
                      <div>
                        <div className="font-semibold text-gray-900 dark:text-white">
                          {item.author.name}
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          {item.author.role} at {item.author.company}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="inline-block p-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 rounded-xl border border-blue-200 dark:border-blue-900">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
              Join 10,000+ Happy Customers
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
              Start building better products today with a 14-day free trial
            </p>
            <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200">
              Start Free Trial
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
