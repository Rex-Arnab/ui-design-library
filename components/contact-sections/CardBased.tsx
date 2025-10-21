"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MessageCircle, MapPin, ArrowRight } from "lucide-react";

interface CardBasedProps {
  className?: string;
}

/**
 * CardBased - Multiple contact option cards
 *
 * Features:
 * - Grid of contact method cards (Email, Phone, Chat, Visit)
 * - Each card is clickable with hover effects
 * - Icon + title + description per card
 * - Choose your preferred method approach
 * - Modal or action on card click
 * - Modern, user-friendly design
 */
export function CardBased({ className = "" }: CardBasedProps) {
  const [selectedMethod, setSelectedMethod] = useState<string | null>(null);

  const contactMethods = [
    {
      id: "email",
      icon: Mail,
      title: "Email Us",
      description: "Send us an email and we'll respond within 24 hours",
      detail: "contact@company.com",
      action: "Send Email",
      color: "blue",
    },
    {
      id: "phone",
      icon: Phone,
      title: "Call Us",
      description: "Speak with our team Monday-Friday, 9am-5pm PST",
      detail: "+1 (555) 123-4567",
      action: "Call Now",
      color: "green",
    },
    {
      id: "chat",
      icon: MessageCircle,
      title: "Live Chat",
      description: "Chat with our support team in real-time",
      detail: "Available now",
      action: "Start Chat",
      color: "purple",
    },
    {
      id: "visit",
      icon: MapPin,
      title: "Visit Office",
      description: "Come see us at our office location",
      detail: "123 Business St, SF, CA",
      action: "Get Directions",
      color: "orange",
    },
  ];

  const colorClasses = {
    blue: {
      bg: "bg-blue-50 dark:bg-blue-900/20",
      icon: "bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400",
      border: "border-blue-200 dark:border-blue-800",
      button: "bg-blue-600 hover:bg-blue-700",
    },
    green: {
      bg: "bg-green-50 dark:bg-green-900/20",
      icon: "bg-green-100 dark:bg-green-900/40 text-green-600 dark:text-green-400",
      border: "border-green-200 dark:border-green-800",
      button: "bg-green-600 hover:bg-green-700",
    },
    purple: {
      bg: "bg-purple-50 dark:bg-purple-900/20",
      icon: "bg-purple-100 dark:bg-purple-900/40 text-purple-600 dark:text-purple-400",
      border: "border-purple-200 dark:border-purple-800",
      button: "bg-purple-600 hover:bg-purple-700",
    },
    orange: {
      bg: "bg-orange-50 dark:bg-orange-900/20",
      icon: "bg-orange-100 dark:bg-orange-900/40 text-orange-600 dark:text-orange-400",
      border: "border-orange-200 dark:border-orange-800",
      button: "bg-orange-600 hover:bg-orange-700",
    },
  };

  return (
    <section className={`py-16 px-4 bg-white dark:bg-gray-900 ${className}`}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
            How Would You Like to Connect?
          </h2>
          <p className="text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Choose your preferred method of contact and we&apos;ll be happy to assist you
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {contactMethods.map((method, idx) => {
            const Icon = method.icon;
            const colors = colorClasses[method.color as keyof typeof colorClasses];

            return (
              <motion.div
                key={method.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -4 }}
                className={`group relative p-6 bg-white dark:bg-gray-800 border-2 ${
                  selectedMethod === method.id
                    ? colors.border
                    : "border-gray-200 dark:border-gray-700"
                } rounded-xl hover:shadow-lg transition-all duration-200 cursor-pointer`}
                onClick={() => setSelectedMethod(method.id)}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-14 h-14 ${colors.icon} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <Icon className="w-7 h-7" />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                      {method.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                      {method.description}
                    </p>
                    <p className="text-sm font-medium text-gray-900 dark:text-white mb-3">
                      {method.detail}
                    </p>

                    <button
                      className={`inline-flex items-center gap-2 px-4 py-2 ${colors.button} text-white text-sm font-medium rounded-lg transition-colors`}
                    >
                      {method.action}
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>

                {selectedMethod === method.id && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className={`absolute -top-2 -right-2 w-8 h-8 ${colors.button} rounded-full flex items-center justify-center text-white`}
                  >
                    <span className="text-lg">✓</span>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 text-center"
        >
          <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-2">
            Business Hours
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Monday - Friday: 9:00 AM - 5:00 PM PST
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Saturday - Sunday: Closed
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-500 mt-3">
            For urgent matters outside business hours, please email us and we&apos;ll respond as soon as possible.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
