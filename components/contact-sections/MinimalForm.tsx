"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface MinimalFormProps {
  className?: string;
}

/**
 * MinimalForm - Ultra-clean single column form
 *
 * Features:
 * - Maximum whitespace and breathing room
 * - Minimal borders and decorations
 * - Large typography for impact
 * - Floating label effect
 * - Clean submit button with arrow
 * - Perfect for modern, clean brands
 */
export function MinimalForm({ className = "" }: MinimalFormProps) {
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
    if (!formData.name.trim()) newErrors.name = "Required";
    if (!formData.email.trim()) {
      newErrors.email = "Required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email";
    }
    if (!formData.message.trim()) newErrors.message = "Required";
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

  if (submitted) {
    return (
      <section className={`py-24 px-4 bg-white dark:bg-gray-950 ${className}`}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-xl mx-auto text-center"
        >
          <h2 className="text-5xl font-light text-gray-900 dark:text-white mb-6">
            Thank you
          </h2>
          <p className="text-lg text-gray-500 dark:text-gray-400">
            We&apos;ll be in touch soon
          </p>
        </motion.div>
      </section>
    );
  }

  return (
    <section className={`py-24 px-4 bg-white dark:bg-gray-950 ${className}`}>
      <div className="max-w-xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 text-center"
        >
          <h2 className="text-5xl font-light text-gray-900 dark:text-white mb-4">
            Let&apos;s talk
          </h2>
          <p className="text-lg text-gray-500 dark:text-gray-400">
            We&apos;re here to help
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          onSubmit={handleSubmit}
          className="space-y-12"
        >
          <div className="relative">
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`peer w-full px-0 py-4 bg-transparent border-b-2 ${
                errors.name ? "border-red-500" : "border-gray-200 dark:border-gray-800"
              } focus:border-gray-900 dark:focus:border-white outline-none transition-colors text-xl text-gray-900 dark:text-white placeholder-transparent`}
              placeholder="Name"
            />
            <label
              htmlFor="name"
              className="absolute left-0 -top-5 text-sm text-gray-500 dark:text-gray-400 transition-all peer-placeholder-shown:text-xl peer-placeholder-shown:top-4 peer-focus:-top-5 peer-focus:text-sm"
            >
              Name
            </label>
            {errors.name && (
              <p className="mt-2 text-xs text-red-500">{errors.name}</p>
            )}
          </div>

          <div className="relative">
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`peer w-full px-0 py-4 bg-transparent border-b-2 ${
                errors.email ? "border-red-500" : "border-gray-200 dark:border-gray-800"
              } focus:border-gray-900 dark:focus:border-white outline-none transition-colors text-xl text-gray-900 dark:text-white placeholder-transparent`}
              placeholder="Email"
            />
            <label
              htmlFor="email"
              className="absolute left-0 -top-5 text-sm text-gray-500 dark:text-gray-400 transition-all peer-placeholder-shown:text-xl peer-placeholder-shown:top-4 peer-focus:-top-5 peer-focus:text-sm"
            >
              Email
            </label>
            {errors.email && (
              <p className="mt-2 text-xs text-red-500">{errors.email}</p>
            )}
          </div>

          <div className="relative">
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className={`peer w-full px-0 py-4 bg-transparent border-b-2 ${
                errors.message ? "border-red-500" : "border-gray-200 dark:border-gray-800"
              } focus:border-gray-900 dark:focus:border-white outline-none transition-colors text-xl text-gray-900 dark:text-white placeholder-transparent resize-none`}
              placeholder="Message"
            />
            <label
              htmlFor="message"
              className="absolute left-0 -top-5 text-sm text-gray-500 dark:text-gray-400 transition-all peer-placeholder-shown:text-xl peer-placeholder-shown:top-4 peer-focus:-top-5 peer-focus:text-sm"
            >
              Message
            </label>
            {errors.message && (
              <p className="mt-2 text-xs text-red-500">{errors.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="group inline-flex items-center gap-3 text-xl font-light text-gray-900 dark:text-white hover:gap-5 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Sending..." : "Send message"}
            <ArrowRight className="w-6 h-6" />
          </button>
        </motion.form>
      </div>
    </section>
  );
}
