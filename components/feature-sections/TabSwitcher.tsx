"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code, Palette, Zap, Shield, type LucideIcon } from "lucide-react";

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface Tab {
  id: string;
  label: string;
  features: Feature[];
}

interface TabSwitcherProps {
  className?: string;
}

/**
 * TabSwitcher - Tabbed feature sections
 *
 * Features:
 * - Tab navigation at top (Categories, Use Cases, etc.)
 * - Content area shows features for selected tab
 * - Smooth transition between tabs with AnimatePresence
 * - 3-4 tabs with 3-4 features per tab
 * - Keyboard navigation support
 * - Active tab highlighting
 */
export function TabSwitcher({ className = "" }: TabSwitcherProps) {
  const [activeTab, setActiveTab] = useState("developers");

  const tabs: Tab[] = [
    {
      id: "developers",
      label: "For Developers",
      features: [
        {
          icon: Code,
          title: "Powerful API",
          description: "Comprehensive REST API with GraphQL support. Build custom integrations with ease."
        },
        {
          icon: Zap,
          title: "Fast Build Times",
          description: "Optimized build pipeline with intelligent caching. Deploy in under 60 seconds."
        },
        {
          icon: Shield,
          title: "Type Safety",
          description: "Full TypeScript support with auto-generated types for your API endpoints."
        }
      ]
    },
    {
      id: "designers",
      label: "For Designers",
      features: [
        {
          icon: Palette,
          title: "Design System",
          description: "Pre-built components following modern design principles. Customize with ease."
        },
        {
          icon: Zap,
          title: "Live Preview",
          description: "See changes instantly with hot reload. No more waiting for builds."
        },
        {
          icon: Code,
          title: "Design Tokens",
          description: "Consistent styling with CSS variables. Light and dark mode out of the box."
        }
      ]
    },
    {
      id: "teams",
      label: "For Teams",
      features: [
        {
          icon: Shield,
          title: "Access Control",
          description: "Role-based permissions and team workspaces. Keep your data secure."
        },
        {
          icon: Zap,
          title: "Real-Time Sync",
          description: "Collaborate seamlessly with live updates across all team members."
        },
        {
          icon: Code,
          title: "Audit Logs",
          description: "Complete activity history for compliance and debugging purposes."
        }
      ]
    },
    {
      id: "enterprise",
      label: "Enterprise",
      features: [
        {
          icon: Shield,
          title: "SSO & SAML",
          description: "Enterprise authentication with your existing identity provider."
        },
        {
          icon: Zap,
          title: "SLA Guarantee",
          description: "99.99% uptime with dedicated support and priority incident response."
        },
        {
          icon: Code,
          title: "Custom Contracts",
          description: "Flexible terms and volume discounts for large organizations."
        }
      ]
    }
  ];

  const currentTab = tabs.find(tab => tab.id === activeTab) || tabs[0];

  return (
    <section className={`py-20 px-4 bg-white dark:bg-gray-900 ${className}`}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
            Built for Everyone
          </h2>
          <p className="text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Powerful features tailored to your role and workflow
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 border-b border-gray-200 dark:border-gray-800">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 font-semibold text-sm rounded-t-lg transition-all duration-200 relative ${
                activeTab === tab.id
                  ? 'text-blue-600 dark:text-blue-400'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
              }`}
              aria-label={`View features for ${tab.label}`}
            >
              {tab.label}
              {activeTab === tab.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 dark:bg-blue-400"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {currentTab.features.map((feature, idx) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-lg hover:border-blue-200 dark:hover:border-blue-800 transition-all duration-200"
                  >
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
            Ready to get started with {currentTab.label.toLowerCase()}?
          </p>
          <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200">
            Start Free Trial
          </button>
        </motion.div>
      </div>
    </section>
  );
}
