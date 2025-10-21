"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, AlertTriangle, Clock, Send } from "lucide-react";

interface FormData {
  name: string;
  phone: string;
  email: string;
  urgency: string;
  issue: string;
}

interface EmergencyContactProps {
  className?: string;
}

/**
 * EmergencyContact - Urgent support layout
 *
 * Features:
 * - High urgency visual design (red/orange)
 * - "Emergency Support" heading
 * - Phone number prominently displayed
 * - Red/orange accent colors
 * - "Available 24/7" messaging
 * - Quick access, minimal friction
 * - Critical support focused
 */
export function EmergencyContact({ className = "" }: EmergencyContactProps) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    urgency: "critical",
    issue: "",
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const urgencyLevels = [
    {
      value: "critical",
      label: "Critical - System Down",
      color: "text-red-600 dark:text-red-400",
    },
    {
      value: "high",
      label: "High - Major Impact",
      color: "text-orange-600 dark:text-orange-400",
    },
    {
      value: "medium",
      label: "Medium - Need Help Soon",
      color: "text-yellow-600 dark:text-yellow-400",
    },
  ];

  const validateForm = () => {
    const newErrors: Partial<FormData> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[\d\s\-\+\(\)]+$/.test(formData.phone)) {
      newErrors.phone = "Invalid phone number";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email";
    }
    if (!formData.issue.trim()) newErrors.issue = "Issue description is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  if (submitted) {
    return (
      <section className={`py-16 px-4 bg-red-50 dark:bg-red-950 ${className}`}>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="w-20 h-20 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
            <AlertTriangle className="w-10 h-10 text-red-600 dark:text-red-400" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            Emergency Request Received
          </h2>
          <p className="text-base text-gray-600 dark:text-gray-400 mb-6">
            Our emergency response team has been notified and will contact you immediately at{" "}
            <strong>{formData.phone}</strong>
          </p>
          <div className="bg-white dark:bg-gray-900 rounded-lg p-6 border-2 border-red-300 dark:border-red-700">
            <p className="text-sm font-semibold text-red-900 dark:text-red-300 mb-2">
              Expected Response Time: 5-15 minutes
            </p>
            <p className="text-xs text-gray-600 dark:text-gray-400">
              If you don&apos;t receive a call within 15 minutes, please call our emergency hotline
              directly.
            </p>
          </div>
        </motion.div>
      </section>
    );
  }

  return (
    <section className={`py-16 px-4 bg-red-50 dark:bg-red-950 ${className}`}>
      <div className="max-w-3xl mx-auto">
        {/* Emergency Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-full mb-4 animate-pulse">
            <AlertTriangle className="w-5 h-5" />
            <span className="text-sm font-bold">EMERGENCY SUPPORT</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
            24/7 Emergency Assistance
          </h2>
          <p className="text-base text-gray-600 dark:text-gray-400">
            For critical issues requiring immediate attention
          </p>
        </motion.div>

        {/* Emergency Phone CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <a
            href="tel:+15551234567"
            className="block bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white rounded-2xl p-8 text-center shadow-2xl transform hover:scale-105 transition-all duration-200"
          >
            <Phone className="w-16 h-16 mx-auto mb-4" />
            <p className="text-sm font-medium mb-2 opacity-90">Call Now - Available 24/7</p>
            <p className="text-4xl font-bold mb-2">+1 (555) 123-4567</p>
            <p className="text-sm opacity-75">Press 1 for immediate emergency support</p>
          </a>
        </motion.div>

        {/* Availability Notice */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-orange-50 dark:bg-orange-900/20 border-2 border-orange-200 dark:border-orange-800 rounded-xl p-6 mb-8"
        >
          <div className="flex items-start gap-4">
            <Clock className="w-6 h-6 text-orange-600 dark:text-orange-400 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-1">
                24/7 Emergency Coverage
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Our emergency response team is standing by around the clock. For non-critical issues,
                please use our regular support channels for faster resolution.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Emergency Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white dark:bg-gray-900 rounded-2xl p-8 border-2 border-gray-200 dark:border-gray-700"
        >
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
            Submit Emergency Request
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
            If you can&apos;t call, submit this form and we&apos;ll contact you immediately
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="urgency" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Urgency Level *
              </label>
              <select
                id="urgency"
                name="urgency"
                value={formData.urgency}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border-2 border-red-300 dark:border-red-700 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-colors text-gray-900 dark:text-white font-medium"
              >
                {urgencyLevels.map((level) => (
                  <option key={level.value} value={level.value}>
                    {level.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border ${
                    errors.name ? "border-red-500" : "border-gray-300 dark:border-gray-700"
                  } rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-colors text-gray-900 dark:text-white`}
                  placeholder="Your name"
                />
                {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border ${
                    errors.phone ? "border-red-500" : "border-gray-300 dark:border-gray-700"
                  } rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-colors text-gray-900 dark:text-white`}
                  placeholder="+1 (555) 123-4567"
                />
                {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border ${
                  errors.email ? "border-red-500" : "border-gray-300 dark:border-gray-700"
                } rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-colors text-gray-900 dark:text-white`}
                placeholder="you@example.com"
              />
              {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="issue" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Emergency Issue Description *
              </label>
              <textarea
                id="issue"
                name="issue"
                value={formData.issue}
                onChange={handleChange}
                rows={5}
                className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border ${
                  errors.issue ? "border-red-500" : "border-gray-300 dark:border-gray-700"
                } rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-colors text-gray-900 dark:text-white resize-none`}
                placeholder="Describe the critical issue in detail. Include error messages, what happened, and business impact..."
              />
              {errors.issue && <p className="mt-1 text-xs text-red-500">{errors.issue}</p>}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-6 rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-lg shadow-lg"
            >
              {isSubmitting ? (
                <>
                  <div className="w-6 h-6 border-3 border-white border-t-transparent rounded-full animate-spin" />
                  Submitting Emergency Request...
                </>
              ) : (
                <>
                  <Send className="w-6 h-6" />
                  Submit Emergency Request
                </>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
