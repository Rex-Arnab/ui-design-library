"use client";

import { motion } from "framer-motion";
import { Mail, ArrowLeft, CheckCircle } from "lucide-react";
import { useState } from "react";

interface ForgotPasswordProps {
  className?: string;
}

/**
 * ForgotPassword - Password recovery page
 */
export function ForgotPassword({ className = "" }: ForgotPasswordProps) {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <div className={`min-h-screen flex ${className}`}>
      {/* Left Side - Decorative */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="hidden lg:flex lg:w-2/5 bg-gradient-to-br from-orange-500 via-red-500 to-pink-500 p-12 flex-col justify-between relative overflow-hidden"
      >
        {/* Decorative Circles */}
        <div className="absolute top-20 right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-white/10 rounded-full blur-3xl" />

        <div className="relative z-10">
          <Mail className="w-16 h-16 text-white mb-6" />
          <h2 className="text-4xl font-bold text-white mb-4">
            Password Recovery
          </h2>
          <p className="text-xl text-orange-100">
            We&apos;ll help you reset your password and get back to your account.
          </p>
        </div>

        <div className="relative z-10 text-white/80 text-sm">
          <p>Need help? Contact our support team 24/7</p>
        </div>
      </motion.div>

      {/* Right Side - Form */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="flex-1 flex items-center justify-center p-8 bg-white dark:bg-gray-900"
      >
        <div className="w-full max-w-md">
          {!isSubmitted ? (
            <>
              <div className="mb-10">
                <div className="lg:hidden inline-flex items-center justify-center w-16 h-16 bg-orange-100 dark:bg-orange-900/30 rounded-full mb-6">
                  <Mail className="w-8 h-8 text-orange-600 dark:text-orange-400" />
                </div>
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">
                  Forgot Password?
                </h1>
                <p className="text-gray-600 dark:text-gray-400 text-lg">
                  No worries! Enter your email and we&apos;ll send you reset instructions.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="block w-full pl-10 pr-3 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all"
                      placeholder="you@example.com"
                      required
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-3 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all disabled:opacity-50"
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </div>
                  ) : (
                    "Send Reset Link"
                  )}
                </button>
              </form>

              <div className="mt-8 text-center">
                <a href="#" className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white font-medium">
                  <ArrowLeft className="w-4 h-4" />
                  Back to login
                </a>
              </div>
            </>
          ) : (
            <div className="py-8">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full mb-8">
                <CheckCircle className="w-10 h-10 text-green-600 dark:text-green-400" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Check Your Email
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-lg mb-8">
                We&apos;ve sent password reset instructions to <strong className="text-gray-900 dark:text-white">{email}</strong>
              </p>
              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-4 mb-8">
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Didn&apos;t receive the email? Check your spam folder or try again with a different email address.
                </p>
              </div>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 dark:text-orange-400 dark:hover:text-orange-300 font-medium text-lg"
              >
                <ArrowLeft className="w-5 h-5" />
                Return to login
              </a>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}
