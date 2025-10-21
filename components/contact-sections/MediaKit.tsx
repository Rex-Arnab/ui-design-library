"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Newspaper, Download, Mail, Phone, Send } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  publication: string;
  deadline: string;
  topic: string;
  message: string;
}

interface MediaKitProps {
  className?: string;
}

/**
 * MediaKit - Press/media contact
 *
 * Features:
 * - Press contact details prominently displayed
 * - Download press kit button
 * - Media inquiry form
 * - Brand assets links
 * - Journalist-focused design
 * - Professional press room aesthetic
 */
export function MediaKit({ className = "" }: MediaKitProps) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    publication: "",
    deadline: "",
    topic: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const pressResources = [
    { name: "Full Press Kit", size: "12 MB", type: "ZIP" },
    { name: "Company Logos", size: "3 MB", type: "ZIP" },
    { name: "Executive Photos", size: "8 MB", type: "ZIP" },
    { name: "Brand Guidelines", size: "2 MB", type: "PDF" },
  ];

  const validateForm = () => {
    const newErrors: Partial<FormData> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email";
    }
    if (!formData.publication.trim()) newErrors.publication = "Publication is required";
    if (!formData.topic.trim()) newErrors.topic = "Topic is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
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
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
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
          className="max-w-2xl mx-auto text-center"
        >
          <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
            <Send className="w-10 h-10 text-green-600 dark:text-green-400" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            Media Inquiry Received
          </h2>
          <p className="text-base text-gray-600 dark:text-gray-400">
            Thank you for your interest in covering our story. Our PR team will respond to your
            inquiry within 24 hours.
          </p>
        </motion.div>
      </section>
    );
  }

  return (
    <section className={`py-16 px-4 bg-white dark:bg-gray-900 ${className}`}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
            <Newspaper className="w-8 h-8 text-blue-600 dark:text-blue-400" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
            Press & Media Center
          </h2>
          <p className="text-base text-gray-600 dark:text-gray-400">
            Resources and contact information for journalists and media professionals
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Press Contact */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border border-blue-200 dark:border-blue-800 rounded-2xl p-8"
          >
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
              Press Contact
            </h3>

            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">PR Manager</p>
                <p className="text-lg font-semibold text-gray-900 dark:text-white">
                  Sarah Williams
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <a
                  href="mailto:press@company.com"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  press@company.com
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <a
                  href="tel:+15551234567"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  +1 (555) 123-4567
                </a>
              </div>

              <div className="pt-4 border-t border-blue-200 dark:border-blue-700">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  <strong>Note:</strong> For urgent press inquiries, please call directly. We
                  typically respond to email inquiries within 4 hours during business days.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Press Resources */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-8"
          >
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
              Press Resources
            </h3>

            <div className="space-y-3">
              {pressResources.map((resource, idx) => (
                <button
                  key={idx}
                  className="w-full flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-750 border border-gray-200 dark:border-gray-700 rounded-lg transition-colors group"
                >
                  <div className="text-left">
                    <p className="text-sm font-semibold text-gray-900 dark:text-white">
                      {resource.name}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {resource.type} • {resource.size}
                    </p>
                  </div>
                  <Download className="w-5 h-5 text-blue-600 dark:text-blue-400 group-hover:translate-y-0.5 transition-transform" />
                </button>
              ))}
            </div>

            <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
              <p className="text-xs text-blue-900 dark:text-blue-300">
                All brand assets are for press and media use only. Please review our brand guidelines
                before use.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Media Inquiry Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              Submit a Media Inquiry
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
              Fill out the form below for interview requests, story ideas, or press inquiries
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
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
                    className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border ${
                      errors.name ? "border-red-500" : "border-gray-200 dark:border-gray-700"
                    } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors text-gray-900 dark:text-white`}
                    placeholder="Jane Reporter"
                  />
                  {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
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
                    className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border ${
                      errors.email ? "border-red-500" : "border-gray-200 dark:border-gray-700"
                    } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors text-gray-900 dark:text-white`}
                    placeholder="jane@newspaper.com"
                  />
                  {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="publication" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Publication/Outlet *
                  </label>
                  <input
                    type="text"
                    id="publication"
                    name="publication"
                    value={formData.publication}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border ${
                      errors.publication ? "border-red-500" : "border-gray-200 dark:border-gray-700"
                    } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors text-gray-900 dark:text-white`}
                    placeholder="TechCrunch, Forbes, etc."
                  />
                  {errors.publication && (
                    <p className="mt-1 text-xs text-red-500">{errors.publication}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="deadline" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Deadline (Optional)
                  </label>
                  <input
                    type="date"
                    id="deadline"
                    name="deadline"
                    value={formData.deadline}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors text-gray-900 dark:text-white"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="topic" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Story Topic/Angle *
                </label>
                <input
                  type="text"
                  id="topic"
                  name="topic"
                  value={formData.topic}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border ${
                    errors.topic ? "border-red-500" : "border-gray-200 dark:border-gray-700"
                  } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors text-gray-900 dark:text-white`}
                  placeholder="What is your story about?"
                />
                {errors.topic && <p className="mt-1 text-xs text-red-500">{errors.topic}</p>}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Inquiry Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border ${
                    errors.message ? "border-red-500" : "border-gray-200 dark:border-gray-700"
                  } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors text-gray-900 dark:text-white resize-none`}
                  placeholder="Please provide details about your inquiry, interview questions, or information needed..."
                />
                {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Submit Inquiry
                  </>
                )}
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
