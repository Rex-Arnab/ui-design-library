'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronDown,
  ChevronLeft,
  LayoutDashboard,
  Users,
  FileText,
  Settings,
  BarChart3,
  Mail,
  Calendar,
  HelpCircle,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface NavLink {
  label: string;
  href: string;
  icon: LucideIcon;
  children?: Omit<NavLink, 'icon' | 'children'>[];
  badge?: string;
}

interface SidebarNavProps {
  className?: string;
  links?: NavLink[];
  logo?: string;
}

const defaultLinks: NavLink[] = [
  { label: 'Dashboard', href: '#dashboard', icon: LayoutDashboard },
  {
    label: 'Team',
    href: '#team',
    icon: Users,
    children: [
      { label: 'Members', href: '#members' },
      { label: 'Roles', href: '#roles' },
      { label: 'Invitations', href: '#invitations', badge: '3' },
    ],
  },
  { label: 'Analytics', href: '#analytics', icon: BarChart3 },
  {
    label: 'Documents',
    href: '#documents',
    icon: FileText,
    children: [
      { label: 'All Files', href: '#files' },
      { label: 'Shared', href: '#shared' },
      { label: 'Archived', href: '#archived' },
    ],
  },
  { label: 'Messages', href: '#messages', icon: Mail, badge: '12' },
  { label: 'Calendar', href: '#calendar', icon: Calendar },
  {
    label: 'Settings',
    href: '#settings',
    icon: Settings,
    children: [
      { label: 'Profile', href: '#profile' },
      { label: 'Billing', href: '#billing' },
      { label: 'Security', href: '#security' },
    ],
  },
  { label: 'Help', href: '#help', icon: HelpCircle },
];

export default function SidebarNav({
  className = '',
  links = defaultLinks,
  logo = 'Dashboard',
}: SidebarNavProps) {
  const [collapsed, setCollapsed] = useState(false);
  const [expandedSections, setExpandedSections] = useState<string[]>(['#team']);
  const [activeLink, setActiveLink] = useState('#dashboard');

  const toggleSection = (href: string) => {
    setExpandedSections((prev) =>
      prev.includes(href) ? prev.filter((item) => item !== href) : [...prev, href]
    );
  };

  return (
    <aside
      className={`fixed left-0 top-0 h-screen bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 transition-all duration-300 ${
        collapsed ? 'w-20' : 'w-64'
      } ${className}`}
    >
      <div className="flex flex-col h-full">
        {/* Logo & Collapse Button */}
        <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200 dark:border-gray-800">
          {!collapsed && (
            <a
              href="/"
              className="text-xl font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              {logo}
            </a>
          )}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className={`p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors ${
              collapsed ? 'mx-auto' : ''
            }`}
            aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          >
            <ChevronLeft
              className={`w-5 h-5 transition-transform ${collapsed ? 'rotate-180' : ''}`}
            />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-4 px-2">
          <ul className="space-y-1">
            {links.map((link) => {
              const Icon = link.icon;
              const isExpanded = expandedSections.includes(link.href);
              const isActive = activeLink === link.href;
              const hasChildren = link.children && link.children.length > 0;

              return (
                <li key={link.href}>
                  {/* Parent Link */}
                  <div
                    className={`flex items-center ${
                      hasChildren && !collapsed ? 'cursor-pointer' : ''
                    }`}
                    onClick={() => {
                      if (hasChildren && !collapsed) {
                        toggleSection(link.href);
                      } else {
                        setActiveLink(link.href);
                      }
                    }}
                  >
                    <a
                      href={link.href}
                      onClick={(e) => {
                        if (hasChildren && !collapsed) e.preventDefault();
                        setActiveLink(link.href);
                      }}
                      className={`group flex items-center flex-1 px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                        isActive
                          ? 'bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400'
                          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                      }`}
                      title={collapsed ? link.label : undefined}
                    >
                      <Icon className="w-5 h-5 flex-shrink-0" />
                      {!collapsed && (
                        <>
                          <span className="ml-3 flex-1">{link.label}</span>
                          {link.badge && (
                            <span className="ml-auto px-2 py-0.5 text-xs font-semibold bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full">
                              {link.badge}
                            </span>
                          )}
                          {hasChildren && (
                            <ChevronDown
                              className={`ml-2 w-4 h-4 transition-transform ${
                                isExpanded ? 'rotate-180' : ''
                              }`}
                            />
                          )}
                        </>
                      )}
                    </a>
                  </div>

                  {/* Children Links */}
                  {hasChildren && !collapsed && (
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.ul
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="ml-8 mt-1 space-y-1 overflow-hidden"
                        >
                          {link.children.map((child) => (
                            <li key={child.href}>
                              <a
                                href={child.href}
                                onClick={() => setActiveLink(child.href)}
                                className={`flex items-center px-3 py-2 text-sm rounded-md transition-colors ${
                                  activeLink === child.href
                                    ? 'bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400'
                                    : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                                }`}
                              >
                                <span className="flex-1">{child.label}</span>
                                {child.badge && (
                                  <span className="ml-auto px-2 py-0.5 text-xs font-semibold bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full">
                                    {child.badge}
                                  </span>
                                )}
                              </a>
                            </li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        {/* User Profile Section */}
        <div className="border-t border-gray-200 dark:border-gray-800 p-4">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-semibold text-sm">
              JD
            </div>
            {!collapsed && (
              <div className="ml-3 flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                  John Doe
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                  john@example.com
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </aside>
  );
}
