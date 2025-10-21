"use client";

import { motion } from "framer-motion";
import { Check, Shield, Phone, Clock, Users, Award, Building2, Headphones, Star } from "lucide-react";
import { useState } from "react";

interface EnterpriseFocusProps {
  className?: string;
}

/**
 * EnterpriseFocus - Enterprise tier emphasis pricing
 *
 * Features:
 * - Enterprise plan highlighted and emphasized
 * - "Contact Sales" CTA with modal trigger
 * - Custom pricing messaging
 * - Volume discount indicators
 * - Dedicated support badges
 * - Logo carousel for enterprise customers
 * - Trust and security emphasis
 */
export function EnterpriseFocus({ className = "" }: EnterpriseFocusProps) {
  const [showContactModal, setShowContactModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    employees: "",
    message: ""
  });

  const enterpriseFeatures = [
    { icon: Shield, title: "Enterprise-grade Security", desc: "SOC 2, HIPAA, GDPR compliance" },
    { icon: Phone, title: "Dedicated Account Manager", desc: "Personal support for your team" },
    { icon: Clock, title: "99.99% SLA Guarantee", desc: "Maximum uptime assurance" },
    { icon: Users, title: "Unlimited Team Members", desc: "No limits on collaboration" },
    { icon: Award, title: "Priority Support 24/7", desc: "Phone, email, and chat support" },
    { icon: Building2, title: "Custom Onboarding", desc: "Tailored implementation plan" }
  ];

  const enterpriseLogos = [
    "Acme Corp", "TechGiant", "Global Inc", "Innovation Labs", "Enterprise Co", "Future Systems"
  ];

  const standardPlans = [
    {
      name: "Professional",
      price: 79,
      description: "For growing teams",
      features: [
        "Up to 20 team members",
        "50 GB storage",
        "Advanced analytics",
        "Priority email support",
        "API access"
      ]
    },
    {
      name: "Business",
      price: 149,
      description: "For established companies",
      features: [
        "Up to 100 team members",
        "200 GB storage",
        "Custom reporting",
        "Phone & email support",
        "Advanced integrations",
        "SSO (SAML)"
      ]
    }
  ];

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! Our sales team will contact you within 24 hours.");
    setShowContactModal(false);
    setFormData({ name: "", email: "", company: "", employees: "", message: "" });
  };

  return (
    <section className={`py-20 px-4 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 ${className}`}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Enterprise-Ready Solutions
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Powerful features and dedicated support for organizations that demand the best
          </p>
        </motion.div>

        {/* Main Layout: Standard Plans + Enterprise Highlight */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Standard Plans */}
          {standardPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                {plan.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                {plan.description}
              </p>

              <div className="mb-8">
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-bold text-gray-900 dark:text-white">
                    ${plan.price}
                  </span>
                  <span className="text-gray-600 dark:text-gray-400">/month</span>
                </div>
              </div>

              <button className="w-full py-3 px-6 bg-gray-900 dark:bg-gray-700 hover:bg-gray-800 dark:hover:bg-gray-600 text-white font-semibold rounded-xl transition-all mb-8">
                Get Started
              </button>

              <ul className="space-y-3">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Enterprise Plan - Emphasized */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="lg:row-span-1"
          >
            <div className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-2xl shadow-2xl p-8 text-white h-full">
              {/* Recommended Badge */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <div className="px-4 py-1.5 bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 text-sm font-bold rounded-full shadow-lg flex items-center gap-1">
                  <Star className="w-4 h-4" />
                  Recommended for Large Teams
                </div>
              </div>

              {/* Icon */}
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm mb-6 mt-4">
                <Building2 className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-3xl font-bold mb-2">
                Enterprise
              </h3>
              <p className="text-blue-100 mb-6">
                Custom solutions for large organizations
              </p>

              <div className="mb-8">
                <div className="text-5xl font-bold mb-2">
                  Custom
                </div>
                <p className="text-blue-100">
                  Pricing tailored to your needs
                </p>
              </div>

              <button
                onClick={() => setShowContactModal(true)}
                className="w-full py-4 px-6 bg-white text-purple-600 hover:bg-blue-50 font-bold rounded-xl transition-all mb-8 shadow-lg hover:shadow-xl"
              >
                Contact Sales Team
              </button>

              {/* Volume Discount Indicator */}
              <div className="mb-8 p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                <p className="text-sm font-semibold mb-2 flex items-center gap-2">
                  <Award className="w-4 h-4" />
                  Volume Discounts Available
                </p>
                <p className="text-xs text-blue-100">
                  Significant savings for teams of 500+ users
                </p>
              </div>

              <ul className="space-y-3">
                <li className="text-sm font-semibold text-blue-100">
                  Everything in Business, plus:
                </li>
                {[
                  "Unlimited team members & storage",
                  "Custom SLA & uptime guarantee",
                  "Dedicated account manager",
                  "24/7 priority phone support",
                  "Custom integrations & API limits",
                  "Advanced security & compliance",
                  "Custom contract terms",
                  "Volume discounts"
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Enterprise Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Enterprise-Grade Features
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {enterpriseFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + (index * 0.1) }}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {feature.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Customer Logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wide mb-8">
            Trusted by Leading Organizations
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12">
            {enterpriseLogos.map((logo, idx) => (
              <motion.div
                key={logo}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 + (idx * 0.1) }}
                className="text-gray-400 dark:text-gray-600 font-bold text-xl"
              >
                {logo}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="bg-gradient-to-r from-gray-900 to-gray-800 dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-xl p-8 md:p-12 text-center"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm mb-6">
            <Headphones className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Scale Your Business?
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Our enterprise team is ready to discuss custom solutions tailored to your organization&apos;s needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setShowContactModal(true)}
              className="px-8 py-4 bg-white text-gray-900 hover:bg-gray-100 font-bold rounded-xl transition-all shadow-lg hover:shadow-xl"
            >
              Schedule a Demo
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-white text-white hover:bg-white/10 font-bold rounded-xl transition-all">
              Download Enterprise Guide
            </button>
          </div>
        </motion.div>

        {/* Contact Modal */}
        {showContactModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowContactModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 max-w-lg w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Contact Our Enterprise Team
              </h3>

              <form onSubmit={handleContactSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="john@company.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Acme Inc"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Number of Employees
                  </label>
                  <select
                    value={formData.employees}
                    onChange={(e) => setFormData({ ...formData, employees: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select range</option>
                    <option value="1-50">1-50</option>
                    <option value="51-200">51-200</option>
                    <option value="201-500">201-500</option>
                    <option value="501-1000">501-1000</option>
                    <option value="1000+">1000+</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    placeholder="Tell us about your needs..."
                  />
                </div>

                <div className="flex gap-4 pt-4">
                  <button
                    type="submit"
                    className="flex-1 py-3 px-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl transition-all"
                  >
                    Send Message
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowContactModal(false)}
                    className="flex-1 py-3 px-6 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-900 dark:text-white font-semibold rounded-xl transition-all"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
