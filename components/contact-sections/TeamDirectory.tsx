"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, User } from "lucide-react";

interface TeamDirectoryProps {
  className?: string;
}

/**
 * TeamDirectory - Team members with contact
 *
 * Features:
 * - Grid of team member cards
 * - Photo placeholder, name, role, email
 * - "Get in touch with our team" messaging
 * - Departmental organization
 * - Personal touch for contact
 * - Perfect for service businesses
 */
export function TeamDirectory({ className = "" }: TeamDirectoryProps) {
  const departments = [
    {
      name: "Leadership",
      members: [
        {
          id: "1",
          name: "Sarah Johnson",
          role: "CEO & Founder",
          email: "sarah@company.com",
          linkedin: "#",
          department: "Leadership",
        },
        {
          id: "2",
          name: "Michael Chen",
          role: "CTO",
          email: "michael@company.com",
          linkedin: "#",
          department: "Leadership",
        },
      ],
    },
    {
      name: "Sales",
      members: [
        {
          id: "3",
          name: "Emma Davis",
          role: "Head of Sales",
          email: "emma@company.com",
          linkedin: "#",
          department: "Sales",
        },
        {
          id: "4",
          name: "James Wilson",
          role: "Sales Manager",
          email: "james@company.com",
          linkedin: "#",
          department: "Sales",
        },
      ],
    },
    {
      name: "Support",
      members: [
        {
          id: "5",
          name: "Olivia Martinez",
          role: "Support Lead",
          email: "olivia@company.com",
          linkedin: "#",
          department: "Support",
        },
        {
          id: "6",
          name: "Liam Brown",
          role: "Customer Success",
          email: "liam@company.com",
          linkedin: "#",
          department: "Support",
        },
      ],
    },
    {
      name: "Product",
      members: [
        {
          id: "7",
          name: "Ava Taylor",
          role: "Product Manager",
          email: "ava@company.com",
          linkedin: "#",
          department: "Product",
        },
        {
          id: "8",
          name: "Noah Anderson",
          role: "Product Designer",
          email: "noah@company.com",
          linkedin: "#",
          department: "Product",
        },
      ],
    },
  ];

  return (
    <section className={`py-16 px-4 bg-white dark:bg-gray-900 ${className}`}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
            Meet Our Team
          </h2>
          <p className="text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Get in touch with the right person for your needs. Our team is here to help you succeed.
          </p>
        </motion.div>

        {/* Departments */}
        <div className="space-y-12">
          {departments.map((department, deptIdx) => (
            <div key={department.name}>
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: deptIdx * 0.1 }}
                className="text-xl font-semibold text-gray-900 dark:text-white mb-6 pb-2 border-b-2 border-gray-200 dark:border-gray-700"
              >
                {department.name}
              </motion.h3>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {department.members.map((member, idx) => (
                  <motion.div
                    key={member.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: deptIdx * 0.1 + idx * 0.05 }}
                    className="group bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 hover:shadow-lg transition-all duration-200"
                  >
                    {/* Avatar Placeholder */}
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                      <User className="w-10 h-10 text-white" />
                    </div>

                    <div className="text-center">
                      <h4 className="text-base font-semibold text-gray-900 dark:text-white mb-1">
                        {member.name}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                        {member.role}
                      </p>

                      {/* Contact Actions */}
                      <div className="flex items-center justify-center gap-2">
                        <a
                          href={`mailto:${member.email}`}
                          className="p-2 bg-blue-50 dark:bg-blue-900/30 hover:bg-blue-100 dark:hover:bg-blue-900/50 text-blue-600 dark:text-blue-400 rounded-lg transition-colors"
                          aria-label={`Email ${member.name}`}
                          title={member.email}
                        >
                          <Mail className="w-4 h-4" />
                        </a>
                        <a
                          href={member.linkedin}
                          className="p-2 bg-blue-50 dark:bg-blue-900/30 hover:bg-blue-100 dark:hover:bg-blue-900/50 text-blue-600 dark:text-blue-400 rounded-lg transition-colors"
                          aria-label={`${member.name} on LinkedIn`}
                        >
                          <Linkedin className="w-4 h-4" />
                        </a>
                      </div>

                      {/* Email on hover */}
                      <p className="mt-3 text-xs text-gray-500 dark:text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity">
                        {member.email}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-12 p-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border border-blue-200 dark:border-blue-800 rounded-2xl text-center"
        >
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            Not Sure Who to Contact?
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            Send us a general inquiry and we&apos;ll route it to the right person
          </p>
          <a
            href="mailto:hello@company.com"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
          >
            <Mail className="w-5 h-5" />
            Contact General Inbox
          </a>
        </motion.div>
      </div>
    </section>
  );
}
