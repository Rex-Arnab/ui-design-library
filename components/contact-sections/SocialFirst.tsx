"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Twitter, Linkedin, Facebook, Instagram, Youtube, Github, Send } from "lucide-react";

interface FormData {
  email: string;
  message: string;
}

interface SocialFirstProps {
  className?: string;
}

/**
 * SocialFirst - Social links emphasized
 *
 * Features:
 * - Large, prominent social media buttons
 * - Twitter, LinkedIn, Facebook, Instagram, YouTube, GitHub
 * - "Connect with us" heading
 * - Secondary email form below
 * - Community-focused design
 * - Perfect for brands with strong social presence
 */
export function SocialFirst({ className = "" }: SocialFirstProps) {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const socialLinks = [
    {
      name: "Twitter",
      icon: Twitter,
      handle: "@company",
      url: "#",
      color: "bg-blue-400 hover:bg-blue-500",
      followers: "12.5K",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      handle: "/company/yourcompany",
      url: "#",
      color: "bg-blue-600 hover:bg-blue-700",
      followers: "8.2K",
    },
    {
      name: "Facebook",
      icon: Facebook,
      handle: "@yourcompany",
      url: "#",
      color: "bg-blue-700 hover:bg-blue-800",
      followers: "15K",
    },
    {
      name: "Instagram",
      icon: Instagram,
      handle: "@company",
      url: "#",
      color: "bg-pink-600 hover:bg-pink-700",
      followers: "22K",
    },
    {
      name: "YouTube",
      icon: Youtube,
      handle: "@companyofficial",
      url: "#",
      color: "bg-red-600 hover:bg-red-700",
      followers: "5.1K",
    },
    {
      name: "GitHub",
      icon: Github,
      handle: "@company",
      url: "#",
      color: "bg-gray-800 hover:bg-gray-900",
      followers: "3.4K",
    },
  ];

  const validateForm = () => {
    const newErrors: Partial<FormData> = {};
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email";
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
    <section className={`py-16 px-4 bg-white dark:bg-gray-900 ${className}`}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">
            Connect With Us
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Join our community on your favorite platform
          </p>
        </motion.div>

        {/* Social Media Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-16">
          {socialLinks.map((social, idx) => {
            const Icon = social.icon;
            return (
              <motion.a
                key={social.name}
                href={social.url}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className={`group relative p-6 ${social.color} text-white rounded-xl shadow-lg transition-all duration-200`}
              >
                <div className="flex flex-col items-center text-center">
                  <Icon className="w-10 h-10 mb-3" />
                  <h3 className="font-semibold text-base mb-1">{social.name}</h3>
                  <p className="text-sm opacity-90 mb-2">{social.handle}</p>
                  <p className="text-xs opacity-75">{social.followers} followers</p>
                </div>
              </motion.a>
            );
          })}
        </div>

        {/* Divider */}
        <div className="relative mb-12">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300 dark:border-gray-700" />
          </div>
          <div className="relative flex justify-center">
            <span className="px-4 bg-white dark:bg-gray-900 text-sm text-gray-500 dark:text-gray-400">
              or send us a direct message
            </span>
          </div>
        </div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="max-w-2xl mx-auto"
        >
          {submitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Send className="w-8 h-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Message Sent!
              </h3>
              <p className="text-base text-gray-600 dark:text-gray-400">
                We&apos;ll get back to you soon
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email Address
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
                  Your Message
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
                  placeholder="Tell us how we can help..."
                />
                {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gray-900 dark:bg-white hover:bg-gray-800 dark:hover:bg-gray-100 text-white dark:text-gray-900 font-semibold py-3 px-6 rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
