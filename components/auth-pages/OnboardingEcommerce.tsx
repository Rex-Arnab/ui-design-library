"use client";

import { motion } from "framer-motion";
import { ShoppingBag, Gift, Percent, Truck, ArrowRight } from "lucide-react";

interface OnboardingEcommerceProps {
  className?: string;
}

/**
 * OnboardingEcommerce - Post-registration welcome for e-commerce
 */
export function OnboardingEcommerce({ className = "" }: OnboardingEcommerceProps) {
  const benefits = [
    { icon: Gift, title: "Welcome Bonus", desc: "$10 off your first order" },
    { icon: Percent, title: "Exclusive Deals", desc: "Member-only discounts up to 50%" },
    { icon: Truck, title: "Free Shipping", desc: "On orders over $50" }
  ];

  return (
    <div className={`min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50 dark:from-gray-900 dark:via-pink-950 dark:to-purple-950 px-4 ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-3xl"
      >
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-700">
          {/* Header Section */}
          <div className="bg-gradient-to-r from-orange-500 to-pink-500 px-8 py-12 text-white text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full mb-6"
            >
              <ShoppingBag className="w-10 h-10" />
            </motion.div>
            <h1 className="text-4xl font-bold mb-3">Welcome to Our Store!</h1>
            <p className="text-xl text-white/90">Thanks for joining - here&apos;s what you get</p>
          </div>

          {/* Benefits Grid */}
          <div className="p-8">
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                  className="text-center p-6 bg-gradient-to-br from-orange-50 to-pink-50 dark:from-orange-900/20 dark:to-pink-900/20 rounded-xl border border-orange-200 dark:border-orange-900"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-500 to-pink-500 rounded-full mb-4">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{benefit.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{benefit.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="text-center"
            >
              <button className="px-8 py-4 bg-gradient-to-r from-orange-600 to-pink-600 hover:from-orange-700 hover:to-pink-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all inline-flex items-center gap-2">
                Start Shopping
                <ArrowRight className="w-5 h-5" />
              </button>
              <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
                Your $10 welcome bonus is ready to use!
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
