"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { AlertCircle, Paperclip, Send, CheckCircle } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  category: string;
  priority: string;
  subject: string;
  description: string;
}

interface SupportCenterProps {
  className?: string;
}

/**
 * SupportCenter - Ticket submission style
 *
 * Features:
 * - Issue category dropdown
 * - Priority selection (Low, Medium, High, Urgent)
 * - File attachment area (placeholder)
 * - Ticket number generation message
 * - Technical support aesthetic
 * - Help desk focused design
 */
export function SupportCenter({ className = "" }: SupportCenterProps) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    category: "technical",
    priority: "medium",
    subject: "",
    description: "",
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [ticketNumber, setTicketNumber] = useState("");

  const categories = [
    { value: "technical", label: "Technical Issue" },
    { value: "billing", label: "Billing Question" },
    { value: "account", label: "Account Access" },
    { value: "feature", label: "Feature Request" },
    { value: "bug", label: "Bug Report" },
    { value: "other", label: "Other" },
  ];

  const priorities = [
    { value: "low", label: "Low", color: "text-gray-600 dark:text-gray-400" },
    { value: "medium", label: "Medium", color: "text-blue-600 dark:text-blue-400" },
    { value: "high", label: "High", color: "text-orange-600 dark:text-orange-400" },
    { value: "urgent", label: "Urgent", color: "text-red-600 dark:text-red-400" },
  ];

  const validateForm = () => {
    const newErrors: Partial<FormData> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email";
    }
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.description.trim()) newErrors.description = "Description is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    // Generate ticket number
    const ticket = `TKT-${Date.now().toString().slice(-6)}`;
    setTicketNumber(ticket);
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
      <section className={`py-16 px-4 bg-white dark:bg-gray-900 ${className}`}>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-green-50 dark:bg-green-900/20 border-2 border-green-200 dark:border-green-800 rounded-2xl p-8 text-center">
            <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-10 h-10 text-green-600 dark:text-green-400" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Ticket Created Successfully!
            </h2>
            <div className="inline-block px-4 py-2 bg-white dark:bg-gray-800 border border-green-300 dark:border-green-700 rounded-lg mb-4">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Your Ticket Number</p>
              <p className="text-2xl font-mono font-bold text-green-600 dark:text-green-400">
                {ticketNumber}
              </p>
            </div>
            <p className="text-base text-gray-600 dark:text-gray-400 mb-6">
              We&apos;ve received your support request. A confirmation email has been sent to{" "}
              <strong>{formData.email}</strong>
            </p>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 text-left">
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                What happens next?
              </h3>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 dark:text-green-400">•</span>
                  <span>
                    Our support team will review your ticket based on priority:{" "}
                    <strong className={priorities.find((p) => p.value === formData.priority)?.color}>
                      {priorities.find((p) => p.value === formData.priority)?.label}
                    </strong>
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 dark:text-green-400">•</span>
                  <span>Expected response time: 2-24 hours depending on priority</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 dark:text-green-400">•</span>
                  <span>You can reply to the confirmation email to add more details</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </section>
    );
  }

  return (
    <section className={`py-16 px-4 bg-white dark:bg-gray-900 ${className}`}>
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
            <AlertCircle className="w-8 h-8 text-blue-600 dark:text-blue-400" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
            Submit a Support Ticket
          </h2>
          <p className="text-base text-gray-600 dark:text-gray-400">
            Fill out the form below and we&apos;ll get back to you as soon as possible
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-3 bg-white dark:bg-gray-800 border ${
                  errors.name ? "border-red-500" : "border-gray-300 dark:border-gray-700"
                } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors text-gray-900 dark:text-white`}
                placeholder="Your name"
              />
              {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 bg-white dark:bg-gray-800 border ${
                  errors.email ? "border-red-500" : "border-gray-300 dark:border-gray-700"
                } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors text-gray-900 dark:text-white`}
                placeholder="you@example.com"
              />
              {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Issue Category *
              </label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors text-gray-900 dark:text-white"
              >
                {categories.map((cat) => (
                  <option key={cat.value} value={cat.value}>
                    {cat.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="priority" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Priority Level *
              </label>
              <select
                id="priority"
                name="priority"
                value={formData.priority}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors text-gray-900 dark:text-white"
              >
                {priorities.map((pri) => (
                  <option key={pri.value} value={pri.value}>
                    {pri.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Subject *
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className={`w-full px-4 py-3 bg-white dark:bg-gray-800 border ${
                errors.subject ? "border-red-500" : "border-gray-300 dark:border-gray-700"
              } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors text-gray-900 dark:text-white`}
              placeholder="Brief summary of your issue"
            />
            {errors.subject && <p className="mt-1 text-xs text-red-500">{errors.subject}</p>}
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Detailed Description *
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={6}
              className={`w-full px-4 py-3 bg-white dark:bg-gray-800 border ${
                errors.description ? "border-red-500" : "border-gray-300 dark:border-gray-700"
              } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors text-gray-900 dark:text-white resize-none`}
              placeholder="Please provide as much detail as possible about your issue, including steps to reproduce if applicable..."
            />
            {errors.description && <p className="mt-1 text-xs text-red-500">{errors.description}</p>}
          </div>

          {/* File Attachment Placeholder */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Attachments (Optional)
            </label>
            <div className="border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-lg p-6 text-center hover:border-blue-400 dark:hover:border-blue-500 transition-colors cursor-pointer">
              <Paperclip className="w-8 h-8 text-gray-400 mx-auto mb-2" />
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Click to upload or drag and drop
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                Screenshots, logs, or other relevant files
              </p>
            </div>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
            <p className="text-sm text-yellow-900 dark:text-yellow-300">
              <strong>Tip:</strong> For faster resolution, include error messages, screenshots, and
              steps to reproduce the issue.
            </p>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                Creating Ticket...
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                Submit Ticket
              </>
            )}
          </button>
        </motion.form>
      </div>
    </section>
  );
}
