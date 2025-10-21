"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Handshake, Send, Building2 } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  company: string;
  website: string;
  partnershipType: string;
  companyRevenue: string;
  employeeCount: string;
  description: string;
}

interface PartnershipFormProps {
  className?: string;
}

/**
 * PartnershipForm - B2B partnership inquiry
 *
 * Features:
 * - Company details section
 * - Partnership type selection
 * - Revenue/size fields for qualification
 * - "Let's collaborate" messaging
 * - Professional, business-focused
 * - Strategic partnership emphasis
 */
export function PartnershipForm({ className = "" }: PartnershipFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    website: "",
    partnershipType: "reseller",
    companyRevenue: "not-disclosed",
    employeeCount: "1-10",
    description: "",
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const partnershipTypes = [
    { value: "reseller", label: "Reseller Partner" },
    { value: "technology", label: "Technology Integration" },
    { value: "referral", label: "Referral Partner" },
    { value: "agency", label: "Agency Partner" },
    { value: "strategic", label: "Strategic Alliance" },
    { value: "other", label: "Other Partnership" },
  ];

  const revenueRanges = [
    { value: "not-disclosed", label: "Prefer not to disclose" },
    { value: "under-1m", label: "Under $1M" },
    { value: "1m-10m", label: "$1M - $10M" },
    { value: "10m-50m", label: "$10M - $50M" },
    { value: "50m-100m", label: "$50M - $100M" },
    { value: "100m+", label: "$100M+" },
  ];

  const employeeCounts = [
    { value: "1-10", label: "1-10 employees" },
    { value: "11-50", label: "11-50 employees" },
    { value: "51-200", label: "51-200 employees" },
    { value: "201-500", label: "201-500 employees" },
    { value: "501-1000", label: "501-1000 employees" },
    { value: "1000+", label: "1000+ employees" },
  ];

  const validateForm = () => {
    const newErrors: Partial<FormData> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email";
    }
    if (!formData.company.trim()) newErrors.company = "Company name is required";
    if (!formData.description.trim()) newErrors.description = "Description is required";
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
          className="max-w-2xl mx-auto"
        >
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 border-2 border-purple-200 dark:border-purple-800 rounded-2xl p-8 text-center">
            <div className="w-20 h-20 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
              <Handshake className="w-10 h-10 text-purple-600 dark:text-purple-400" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Thank You for Your Interest!
            </h2>
            <p className="text-base text-gray-600 dark:text-gray-400 mb-6">
              We&apos;re excited about the potential of partnering with {formData.company}. Our
              partnerships team will review your submission and reach out within 3 business days.
            </p>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 text-left">
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                Next Steps
              </h3>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 dark:text-purple-400">•</span>
                  <span>Our partnerships team will evaluate the opportunity</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 dark:text-purple-400">•</span>
                  <span>We&apos;ll schedule an introductory call to discuss synergies</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 dark:text-purple-400">•</span>
                  <span>Together, we&apos;ll explore how we can create mutual value</span>
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
          <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
            <Handshake className="w-8 h-8 text-purple-600 dark:text-purple-400" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
            Partner With Us
          </h2>
          <p className="text-base text-gray-600 dark:text-gray-400">
            Let&apos;s explore how we can collaborate and create value together
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
              Contact Information
            </h3>
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
                  } rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-colors text-gray-900 dark:text-white`}
                  placeholder="John Doe"
                />
                {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Business Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-white dark:bg-gray-800 border ${
                    errors.email ? "border-red-500" : "border-gray-300 dark:border-gray-700"
                  } rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-colors text-gray-900 dark:text-white`}
                  placeholder="john@company.com"
                />
                {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
              </div>
            </div>
          </div>

          {/* Company Details */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700 flex items-center gap-2">
              <Building2 className="w-5 h-5" />
              Company Details
            </h3>
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-white dark:bg-gray-800 border ${
                      errors.company ? "border-red-500" : "border-gray-300 dark:border-gray-700"
                    } rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-colors text-gray-900 dark:text-white`}
                    placeholder="Acme Corporation"
                  />
                  {errors.company && <p className="mt-1 text-xs text-red-500">{errors.company}</p>}
                </div>

                <div>
                  <label htmlFor="website" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Website (Optional)
                  </label>
                  <input
                    type="url"
                    id="website"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-colors text-gray-900 dark:text-white"
                    placeholder="https://www.company.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label htmlFor="partnershipType" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Partnership Type
                  </label>
                  <select
                    id="partnershipType"
                    name="partnershipType"
                    value={formData.partnershipType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-colors text-gray-900 dark:text-white"
                  >
                    {partnershipTypes.map((type) => (
                      <option key={type.value} value={type.value}>
                        {type.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="employeeCount" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Company Size
                  </label>
                  <select
                    id="employeeCount"
                    name="employeeCount"
                    value={formData.employeeCount}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-colors text-gray-900 dark:text-white"
                  >
                    {employeeCounts.map((count) => (
                      <option key={count.value} value={count.value}>
                        {count.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="companyRevenue" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Annual Revenue
                  </label>
                  <select
                    id="companyRevenue"
                    name="companyRevenue"
                    value={formData.companyRevenue}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-colors text-gray-900 dark:text-white"
                  >
                    {revenueRanges.map((revenue) => (
                      <option key={revenue.value} value={revenue.value}>
                        {revenue.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Partnership Details */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
              Partnership Opportunity
            </h3>
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Tell Us About Your Partnership Vision *
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows={6}
                className={`w-full px-4 py-3 bg-white dark:bg-gray-800 border ${
                  errors.description ? "border-red-500" : "border-gray-300 dark:border-gray-700"
                } rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-colors text-gray-900 dark:text-white resize-none`}
                placeholder="Describe how you envision our partnership. What value can we create together? What makes this a good fit?"
              />
              {errors.description && <p className="mt-1 text-xs text-red-500">{errors.description}</p>}
            </div>
          </div>

          <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-4">
            <p className="text-sm text-purple-900 dark:text-purple-300">
              <strong>Partnership Evaluation:</strong> We carefully review all partnership inquiries to
              ensure strategic alignment and mutual value creation. Qualified opportunities typically
              move to a discovery call within 3-5 business days.
            </p>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-lg"
          >
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                Submitting...
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                Submit Partnership Inquiry
              </>
            )}
          </button>
        </motion.form>
      </div>
    </section>
  );
}
