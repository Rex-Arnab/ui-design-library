"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Calendar, Clock, Check } from "lucide-react";

interface FormData {
  name: string;
  phone: string;
  email: string;
  preferredDate: string;
  preferredTime: string;
  notes: string;
}

interface CallbackRequestProps {
  className?: string;
}

/**
 * CallbackRequest - Schedule callback form
 *
 * Features:
 * - Phone number field with validation
 * - Date/time picker placeholders
 * - "We'll call you" messaging
 * - Preferred time selection
 * - Sales/support callback scheduling
 * - Professional business focus
 */
export function CallbackRequest({ className = "" }: CallbackRequestProps) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    preferredDate: "",
    preferredTime: "morning",
    notes: "",
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const timeSlots = [
    { value: "morning", label: "Morning (9am - 12pm)" },
    { value: "afternoon", label: "Afternoon (12pm - 3pm)" },
    { value: "late-afternoon", label: "Late Afternoon (3pm - 5pm)" },
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
    if (!formData.preferredDate) newErrors.preferredDate = "Please select a date";
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
      <section className={`py-16 px-4 bg-white dark:bg-gray-900 ${className}`}>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
            <Check className="w-10 h-10 text-green-600 dark:text-green-400" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            Callback Scheduled!
          </h2>
          <p className="text-base text-gray-600 dark:text-gray-400 mb-6">
            We&apos;ll call you at <strong>{formData.phone}</strong> on{" "}
            <strong>{new Date(formData.preferredDate).toLocaleDateString()}</strong> during the{" "}
            <strong>{timeSlots.find((t) => t.value === formData.preferredTime)?.label}</strong>
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            You&apos;ll also receive a confirmation email at {formData.email}
          </p>
        </motion.div>
      </section>
    );
  }

  return (
    <section className={`py-16 px-4 bg-white dark:bg-gray-900 ${className}`}>
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
            <Phone className="w-8 h-8 text-blue-600 dark:text-blue-400" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
            Request a Callback
          </h2>
          <p className="text-base text-gray-600 dark:text-gray-400">
            Schedule a time that works for you and we&apos;ll call you
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
                Full Name *
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
                placeholder="John Doe"
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
                className={`w-full px-4 py-3 bg-white dark:bg-gray-800 border ${
                  errors.phone ? "border-red-500" : "border-gray-300 dark:border-gray-700"
                } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors text-gray-900 dark:text-white`}
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
              className={`w-full px-4 py-3 bg-white dark:bg-gray-800 border ${
                errors.email ? "border-red-500" : "border-gray-300 dark:border-gray-700"
              } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors text-gray-900 dark:text-white`}
              placeholder="john@example.com"
            />
            {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
            <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
              We&apos;ll send a confirmation to this email
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="preferredDate"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                <Calendar className="w-4 h-4 inline mr-1" />
                Preferred Date *
              </label>
              <input
                type="date"
                id="preferredDate"
                name="preferredDate"
                value={formData.preferredDate}
                onChange={handleChange}
                min={new Date().toISOString().split("T")[0]}
                className={`w-full px-4 py-3 bg-white dark:bg-gray-800 border ${
                  errors.preferredDate ? "border-red-500" : "border-gray-300 dark:border-gray-700"
                } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors text-gray-900 dark:text-white`}
              />
              {errors.preferredDate && (
                <p className="mt-1 text-xs text-red-500">{errors.preferredDate}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="preferredTime"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                <Clock className="w-4 h-4 inline mr-1" />
                Preferred Time *
              </label>
              <select
                id="preferredTime"
                name="preferredTime"
                value={formData.preferredTime}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors text-gray-900 dark:text-white"
              >
                {timeSlots.map((slot) => (
                  <option key={slot.value} value={slot.value}>
                    {slot.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="notes" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Additional Notes (Optional)
            </label>
            <textarea
              id="notes"
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors text-gray-900 dark:text-white resize-none"
              placeholder="Let us know what you'd like to discuss..."
            />
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
            <p className="text-sm text-blue-900 dark:text-blue-300">
              <strong>Note:</strong> All callbacks are during business days (Monday-Friday). We&apos;ll
              call you during the selected time window.
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
                Scheduling...
              </>
            ) : (
              <>
                <Phone className="w-5 h-5" />
                Schedule Callback
              </>
            )}
          </button>
        </motion.form>
      </div>
    </section>
  );
}
