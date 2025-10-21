"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send, Twitter, Linkedin, Facebook } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface SplitLayoutProps {
  className?: string;
}

/**
 * SplitLayout - Form left, contact info right
 *
 * Features:
 * - Two-column 50/50 split layout
 * - Contact form on left side
 * - Contact information on right (phone, email, address, hours)
 * - Icons for each contact method
 * - Social media links at bottom
 * - Professional business-focused design
 */
export function SplitLayout({ className = "" }: SplitLayoutProps) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors: Partial<FormData> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <section className={`py-16 px-4 bg-gray-50 dark:bg-gray-950 ${className}`}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-sm"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Send us a Message
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
              Fill out the form below and we&apos;ll get back to you shortly
            </p>

            {submitted ? (
              <div className="py-8 text-center">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Send className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                  Message Sent!
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  We&apos;ll be in touch soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border ${
                      errors.name ? "border-red-500" : "border-gray-200 dark:border-gray-700"
                    } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors text-gray-900 dark:text-white`}
                    placeholder="Your name"
                  />
                  {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border ${
                      errors.email ? "border-red-500" : "border-gray-200 dark:border-gray-700"
                    } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors text-gray-900 dark:text-white`}
                    placeholder="you@example.com"
                  />
                  {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border ${
                      errors.message ? "border-red-500" : "border-gray-200 dark:border-gray-700"
                    } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors text-gray-900 dark:text-white resize-none`}
                    placeholder="How can we help you?"
                  />
                  {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </motion.div>

          {/* Right: Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Contact Information
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Reach out to us through any of these channels
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-white dark:bg-gray-900 rounded-xl">
                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
                    Email
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    contact@company.com
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    support@company.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-white dark:bg-gray-900 rounded-xl">
                <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
                    Phone
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    +1 (555) 123-4567
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-500">
                    Mon-Fri, 9am-5pm PST
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-white dark:bg-gray-900 rounded-xl">
                <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
                    Office
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    123 Business Street, Suite 100
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    San Francisco, CA 94102
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-white dark:bg-gray-900 rounded-xl">
                <div className="w-10 h-10 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
                    Business Hours
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Monday - Friday: 9:00 AM - 5:00 PM
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Saturday - Sunday: Closed
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-4">
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
                Follow Us
              </h3>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="w-10 h-10 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg flex items-center justify-center hover:border-blue-500 dark:hover:border-blue-500 transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg flex items-center justify-center hover:border-blue-500 dark:hover:border-blue-500 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg flex items-center justify-center hover:border-blue-500 dark:hover:border-blue-500 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
