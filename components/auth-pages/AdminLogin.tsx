"use client";

import { motion } from "framer-motion";
import { Mail, Lock, Eye, EyeOff, Shield, Smartphone } from "lucide-react";
import { useState } from "react";

interface AdminLoginProps {
  className?: string;
}

/**
 * AdminLogin - Professional security-focused login with 2FA
 *
 * Features:
 * - Professional dark theme
 * - Email and password fields
 * - Optional 2FA code input
 * - Security badges and indicators
 * - IP address logging notice
 * - Admin-specific branding
 */
export function AdminLogin({ className = "" }: AdminLoginProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [show2FA, setShow2FA] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    twoFACode: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!show2FA) {
      // Simulate checking credentials and enabling 2FA
      setShow2FA(true);
    } else {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        alert("Admin login successful!");
      }, 1500);
    }
  };

  return (
    <div className={`min-h-screen flex bg-slate-900 ${className}`}>
      {/* Background Pattern - Full Page */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(30deg,rgba(59,130,246,0.3)_12%,transparent_12.5%,transparent_87%,rgba(59,130,246,0.3)_87.5%,rgba(59,130,246,0.3)),linear-gradient(150deg,rgba(59,130,246,0.3)_12%,transparent_12.5%,transparent_87%,rgba(59,130,246,0.3)_87.5%,rgba(59,130,246,0.3))] bg-[length:80px_140px]" />
      </div>

      {/* Main Content - Centered */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex-1 flex items-center justify-center p-8 relative z-10"
      >
        <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="hidden lg:block"
          >
            <div className="flex items-center gap-3 mb-8">
              <Shield className="w-12 h-12 text-blue-400" />
              <span className="text-3xl font-bold text-white">Admin Portal</span>
            </div>
            <h2 className="text-5xl font-bold text-white mb-6">
              Secure Administrator Access
            </h2>
            <p className="text-xl text-gray-400 mb-12">
              Advanced security features including two-factor authentication, IP logging, and session management.
            </p>

            {/* Security Features */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Two-Factor Authentication</h3>
                  <p className="text-gray-400 text-sm">Enhanced security with 2FA verification for all admin accounts</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center flex-shrink-0">
                  <Lock className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Encrypted Connections</h3>
                  <p className="text-gray-400 text-sm">All communications are encrypted with 256-bit SSL/TLS</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center flex-shrink-0">
                  <Smartphone className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Activity Monitoring</h3>
                  <p className="text-gray-400 text-sm">Real-time logging and monitoring of all admin actions</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="w-full"
          >
            {/* Security Badge */}
            <div className="flex items-center justify-center gap-2 mb-8 text-blue-400">
              <Shield className="w-5 h-5" />
              <span className="text-sm font-medium">Secure Admin Portal</span>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-xl rounded-2xl shadow-2xl p-8 lg:p-12 border border-slate-700">
              {/* Header */}
              <div className="text-center mb-8">
                <motion.div
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5, duration: 0.4 }}
                  className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl mb-4 shadow-lg shadow-blue-500/50"
                >
                  <Lock className="w-8 h-8 text-white" />
                </motion.div>
                <h1 className="text-3xl font-bold text-white mb-2">
                  Admin Dashboard
                </h1>
                <p className="text-gray-400">
                  {show2FA ? "Enter verification code" : "Secure access for administrators"}
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Field */}
            {!show2FA && (
              <>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Admin Email
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-gray-500" />
                    </div>
                    <input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="block w-full pl-10 pr-3 py-3 border border-slate-600 rounded-xl bg-slate-700/50 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                      placeholder="admin@company.com"
                      required
                      aria-label="Admin email address"
                    />
                  </div>
                </div>

                {/* Password Field */}
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock className="h-5 w-5 text-gray-500" />
                    </div>
                    <input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      className="block w-full pl-10 pr-12 py-3 border border-slate-600 rounded-xl bg-slate-700/50 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                      placeholder="Enter your password"
                      required
                      aria-label="Password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-gray-300"
                      aria-label={showPassword ? "Hide password" : "Show password"}
                    >
                      {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>
                </div>
              </>
            )}

            {/* 2FA Code Field */}
            {show2FA && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <label htmlFor="twoFA" className="block text-sm font-medium text-gray-300 mb-2">
                  Two-Factor Authentication Code
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Smartphone className="h-5 w-5 text-gray-500" />
                  </div>
                  <input
                    id="twoFA"
                    type="text"
                    value={formData.twoFACode}
                    onChange={(e) => setFormData({ ...formData, twoFACode: e.target.value.replace(/\D/g, '').slice(0, 6) })}
                    className="block w-full pl-10 pr-3 py-3 border border-slate-600 rounded-xl bg-slate-700/50 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-center text-2xl tracking-widest font-mono"
                    placeholder="000000"
                    required
                    maxLength={6}
                    aria-label="Two-factor authentication code"
                  />
                </div>
                <p className="mt-2 text-sm text-gray-400">
                  Enter the 6-digit code from your authenticator app
                </p>
              </motion.div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold rounded-xl shadow-lg shadow-blue-500/30 hover:shadow-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Verifying...
                </>
              ) : show2FA ? (
                <>
                  <Shield className="w-5 h-5" />
                  Verify & Sign In
                </>
              ) : (
                "Continue"
              )}
            </button>

            {/* Back Button for 2FA */}
            {show2FA && (
              <button
                type="button"
                onClick={() => setShow2FA(false)}
                className="w-full py-2 text-sm text-gray-400 hover:text-white transition-colors"
              >
                ← Back to login
              </button>
            )}
          </form>

              {/* Security Notice */}
              <div className="mt-6 p-4 bg-slate-700/50 border border-slate-600 rounded-xl">
                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                  <div className="text-sm text-gray-400">
                    <p className="font-medium text-gray-300 mb-1">Security Notice</p>
                    <p>This is a secure connection. All login attempts are logged and monitored for security purposes.</p>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="mt-6 text-center">
                <a href="#" className="text-sm text-blue-400 hover:text-blue-300 font-medium">
                  Need help accessing your account?
                </a>
              </div>
            </div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="mt-6 flex items-center justify-center gap-6 text-sm text-gray-500"
            >
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                <span>256-bit SSL</span>
              </div>
              <div className="flex items-center gap-2">
                <Lock className="w-4 h-4" />
                <span>SOC 2 Certified</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
