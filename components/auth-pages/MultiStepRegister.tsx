"use client";

import { motion, AnimatePresence } from "framer-motion";
import { User, Mail, Lock, ChevronRight, ChevronLeft, Check } from "lucide-react";
import { useState } from "react";

interface MultiStepRegisterProps {
  className?: string;
}

/**
 * MultiStepRegister - LMS wizard-style registration with progress
 *
 * Steps:
 * 1. Personal Info
 * 2. Account Setup
 * 3. Preferences/Interests
 */
export function MultiStepRegister({ className = "" }: MultiStepRegisterProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    // Step 1
    fullName: "",
    email: "",
    // Step 2
    password: "",
    confirmPassword: "",
    // Step 3
    interests: [] as string[],
    experience: ""
  });

  const totalSteps = 3;
  const interests = ["Web Development", "Mobile Development", "Data Science", "UI/UX Design", "DevOps", "Cloud Computing"];
  const experienceLevels = ["Beginner", "Intermediate", "Advanced", "Expert"];

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        alert("Registration complete!");
      }, 1500);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const toggleInterest = (interest: string) => {
    setFormData({
      ...formData,
      interests: formData.interests.includes(interest)
        ? formData.interests.filter(i => i !== interest)
        : [...formData.interests, interest]
    });
  };

  return (
    <div className={`min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 dark:from-gray-900 dark:via-purple-950 dark:to-pink-950 px-4 py-12 ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-2xl"
      >
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700">
          {/* Progress Bar */}
          <div className="bg-gray-50 dark:bg-gray-900 px-8 py-6">
            <div className="flex items-center justify-between mb-4">
              {[1, 2, 3].map((step) => (
                <div key={step} className="flex items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all ${
                    step < currentStep ? 'bg-green-500 text-white' :
                    step === currentStep ? 'bg-purple-600 text-white' :
                    'bg-gray-200 dark:bg-gray-700 text-gray-500'
                  }`}>
                    {step < currentStep ? <Check className="w-5 h-5" /> : step}
                  </div>
                  {step < 3 && (
                    <div className={`w-full h-1 mx-2 ${
                      step < currentStep ? 'bg-green-500' : 'bg-gray-200 dark:bg-gray-700'
                    }`} style={{ minWidth: '60px', maxWidth: '120px' }} />
                  )}
                </div>
              ))}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Step {currentStep} of {totalSteps}
            </div>
          </div>

          {/* Form Content */}
          <div className="p-8">
            <AnimatePresence mode="wait">
              {/* Step 1: Personal Info */}
              {currentStep === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      Personal Information
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400">
                      Tell us a bit about yourself
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Full Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="John Doe"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="you@example.com"
                        required
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 2: Account Setup */}
              {currentStep === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      Account Setup
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400">
                      Create a secure password for your account
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Password
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="password"
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="Create a strong password"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Confirm Password
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="password"
                        value={formData.confirmPassword}
                        onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="Confirm your password"
                        required
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 3: Preferences */}
              {currentStep === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      Learning Preferences
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400">
                      Help us personalize your experience
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                      Areas of Interest (select all that apply)
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      {interests.map((interest) => (
                        <button
                          key={interest}
                          type="button"
                          onClick={() => toggleInterest(interest)}
                          className={`px-4 py-3 rounded-lg border-2 transition-all text-sm font-medium ${
                            formData.interests.includes(interest)
                              ? 'border-purple-600 bg-purple-50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300'
                              : 'border-gray-300 dark:border-gray-600 hover:border-purple-400 text-gray-700 dark:text-gray-300'
                          }`}
                        >
                          {interest}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                      Experience Level
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      {experienceLevels.map((level) => (
                        <button
                          key={level}
                          type="button"
                          onClick={() => setFormData({ ...formData, experience: level })}
                          className={`px-4 py-3 rounded-lg border-2 transition-all text-sm font-medium ${
                            formData.experience === level
                              ? 'border-purple-600 bg-purple-50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300'
                              : 'border-gray-300 dark:border-gray-600 hover:border-purple-400 text-gray-700 dark:text-gray-300'
                          }`}
                        >
                          {level}
                        </button>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
              <button
                type="button"
                onClick={handlePrev}
                disabled={currentStep === 1}
                className="px-6 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
              >
                <ChevronLeft className="w-4 h-4" />
                Previous
              </button>

              <button
                type="button"
                onClick={handleNext}
                disabled={isLoading}
                className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-lg transition-all disabled:opacity-50 flex items-center gap-2"
              >
                {currentStep === totalSteps ? (
                  isLoading ? "Completing..." : "Complete"
                ) : (
                  <>
                    Next
                    <ChevronRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
