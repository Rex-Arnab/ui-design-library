"use client";

import { motion } from "framer-motion";
import { Eye, EyeOff, Zap, Shield, Heart } from "lucide-react";
import { useState } from "react";

interface RegisterTwoColumnProps {
  className?: string;
}

/**
 * RegisterTwoColumn - Split layout with benefits sidebar
 *
 * Features:
 * - Two-column layout (50/50 split)
 * - Left: Registration form
 * - Right: Benefits and features
 * - Visual feature list with icons
 * - Testimonial or trust indicators
 */
export function RegisterTwoColumn({ className = "" }: RegisterTwoColumnProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    agreeToTerms: false
  });

  const benefits = [
    { icon: Zap, title: "Lightning Fast", desc: "Get started in under 2 minutes" },
    { icon: Shield, title: "Secure & Private", desc: "Bank-level encryption for your data" },
    { icon: Heart, title: "24/7 Support", desc: "We're here to help whenever you need" }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      alert("Account created!");
    }, 2000);
  };

  return (
    <div className={`min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 ${className}`}>
      <div className="w-full max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 min-h-[600px] bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden">
          {/* Left Column - Form */}
          <div className="p-8 md:p-12 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                Get Started
              </h1>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                Create your account and join thousands of users
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Full Name
                  </label>
                  <div className="relative">
                    <input
                      id="fullName"
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="block w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="block w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="you@example.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      className="block w-full px-4 py-3 pr-12 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="Create a strong password"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400"
                    >
                      {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>
                </div>

                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.agreeToTerms}
                    onChange={(e) => setFormData({ ...formData, agreeToTerms: e.target.checked })}
                    className="mt-1 w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                    required
                  />
                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    I agree to the Terms of Service and Privacy Policy
                  </span>
                </label>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all disabled:opacity-50"
                >
                  {isLoading ? "Creating..." : "Create Account"}
                </button>
              </form>

              <p className="mt-6 text-sm text-center text-gray-600 dark:text-gray-400">
                Already have an account?{" "}
                <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">
                  Sign in
                </a>
              </p>
            </motion.div>
          </div>

          {/* Right Column - Benefits */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-blue-600 to-purple-600 p-8 md:p-12 text-white flex flex-col justify-center"
          >
            <h2 className="text-3xl font-bold mb-8">
              Why Join Us?
            </h2>

            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                  className="flex items-start gap-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    <benefit.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{benefit.title}</h3>
                    <p className="text-white/80">{benefit.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-white/20 rounded-full" />
                <div>
                  <div className="font-semibold">Sarah Johnson</div>
                  <div className="text-sm text-white/70">Product Designer</div>
                </div>
              </div>
              <p className="text-white/90 italic">
                &quot;This platform has transformed the way I work. Highly recommended!&quot;
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
