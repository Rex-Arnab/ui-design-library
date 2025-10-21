"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Globe, Clock, Linkedin, Twitter, Facebook, Check } from "lucide-react";

interface IconGridProps {
  className?: string;
}

/**
 * IconGrid - Grid of contact methods with icons
 *
 * Features:
 * - Clean grid layout of contact information
 * - Icon, label, and detail for each method
 * - Click to copy functionality
 * - No form, just contact information
 * - Clean icon presentation
 * - Perfect for simple contact pages
 */
export function IconGrid({ className = "" }: IconGridProps) {
  const [copied, setCopied] = useState<string | null>(null);

  const contactInfo = [
    {
      id: "email",
      icon: Mail,
      label: "Email",
      value: "contact@company.com",
      copyable: true,
    },
    {
      id: "phone",
      icon: Phone,
      label: "Phone",
      value: "+1 (555) 123-4567",
      copyable: true,
    },
    {
      id: "address",
      icon: MapPin,
      label: "Address",
      value: "123 Business St, Suite 100, San Francisco, CA 94102",
      copyable: false,
    },
    {
      id: "website",
      icon: Globe,
      label: "Website",
      value: "www.company.com",
      copyable: true,
    },
    {
      id: "hours",
      icon: Clock,
      label: "Business Hours",
      value: "Mon-Fri: 9am - 5pm PST",
      copyable: false,
    },
    {
      id: "linkedin",
      icon: Linkedin,
      label: "LinkedIn",
      value: "/company/yourcompany",
      copyable: true,
    },
  ];

  const handleCopy = async (value: string, id: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(id);
      setTimeout(() => setCopied(null), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <section className={`py-16 px-4 bg-gray-50 dark:bg-gray-950 ${className}`}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
            Contact Information
          </h2>
          <p className="text-base text-gray-600 dark:text-gray-400">
            Reach out to us through any of these channels
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {contactInfo.map((item, idx) => {
            const Icon = item.icon;
            const isCopied = copied === item.id;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                onClick={() => item.copyable && handleCopy(item.value, item.id)}
                className={`group relative p-6 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 hover:shadow-md transition-all duration-200 ${
                  item.copyable ? "cursor-pointer" : ""
                }`}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-blue-600 dark:text-blue-400" />
                  </div>

                  <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                    {item.label}
                  </h3>

                  <p className="text-sm text-gray-600 dark:text-gray-400 break-all">
                    {item.value}
                  </p>

                  {item.copyable && (
                    <div className="mt-3">
                      {isCopied ? (
                        <motion.span
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          className="inline-flex items-center gap-1 text-xs text-green-600 dark:text-green-400 font-medium"
                        >
                          <Check className="w-3 h-3" />
                          Copied!
                        </motion.span>
                      ) : (
                        <span className="text-xs text-blue-600 dark:text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity font-medium">
                          Click to copy
                        </span>
                      )}
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Social Links Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-4">
            Follow Us
          </h3>
          <div className="flex justify-center gap-4">
            <a
              href="#"
              className="w-12 h-12 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-full flex items-center justify-center hover:border-blue-500 dark:hover:border-blue-500 hover:shadow-md transition-all"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            </a>
            <a
              href="#"
              className="w-12 h-12 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-full flex items-center justify-center hover:border-blue-500 dark:hover:border-blue-500 hover:shadow-md transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            </a>
            <a
              href="#"
              className="w-12 h-12 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-full flex items-center justify-center hover:border-blue-500 dark:hover:border-blue-500 hover:shadow-md transition-all"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            </a>
          </div>
        </motion.div>

        {/* Additional Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-8 p-6 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl text-center"
        >
          <p className="text-sm text-blue-900 dark:text-blue-300">
            We typically respond to all inquiries within 24 hours during business days.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
