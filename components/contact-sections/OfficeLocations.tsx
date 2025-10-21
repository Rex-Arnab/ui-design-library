"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Globe } from "lucide-react";

interface OfficeLocationsProps {
  className?: string;
}

/**
 * OfficeLocations - Multiple office addresses
 *
 * Features:
 * - List or grid of office locations
 * - Address, phone, email per office
 * - Headquarters and Regional offices
 * - Map icon or placeholder per location
 * - Global company presence
 * - Perfect for international companies
 */
export function OfficeLocations({ className = "" }: OfficeLocationsProps) {
  const offices = [
    {
      id: "hq",
      name: "Headquarters",
      city: "San Francisco",
      country: "USA",
      address: "123 Business Street, Suite 100",
      addressLine2: "San Francisco, CA 94102",
      phone: "+1 (555) 123-4567",
      email: "sf@company.com",
      isHQ: true,
      timezone: "PST",
    },
    {
      id: "ny",
      name: "New York Office",
      city: "New York",
      country: "USA",
      address: "456 Madison Avenue, Floor 15",
      addressLine2: "New York, NY 10022",
      phone: "+1 (555) 987-6543",
      email: "ny@company.com",
      isHQ: false,
      timezone: "EST",
    },
    {
      id: "london",
      name: "London Office",
      city: "London",
      country: "UK",
      address: "78 Westminster Bridge Road",
      addressLine2: "London, SE1 7UD",
      phone: "+44 20 1234 5678",
      email: "london@company.com",
      isHQ: false,
      timezone: "GMT",
    },
    {
      id: "tokyo",
      name: "Tokyo Office",
      city: "Tokyo",
      country: "Japan",
      address: "1-2-3 Shibuya, Shibuya-ku",
      addressLine2: "Tokyo, 150-0002",
      phone: "+81 3 1234 5678",
      email: "tokyo@company.com",
      isHQ: false,
      timezone: "JST",
    },
    {
      id: "sydney",
      name: "Sydney Office",
      city: "Sydney",
      country: "Australia",
      address: "123 George Street",
      addressLine2: "Sydney, NSW 2000",
      phone: "+61 2 1234 5678",
      email: "sydney@company.com",
      isHQ: false,
      timezone: "AEDT",
    },
    {
      id: "berlin",
      name: "Berlin Office",
      city: "Berlin",
      country: "Germany",
      address: "Friedrichstraße 123",
      addressLine2: "10117 Berlin",
      phone: "+49 30 1234 5678",
      email: "berlin@company.com",
      isHQ: false,
      timezone: "CET",
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
            Our Global Offices
          </h2>
          <p className="text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            We have teams around the world ready to assist you. Contact the office nearest to you.
          </p>
        </motion.div>

        {/* Headquarters Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          {offices
            .filter((office) => office.isHQ)
            .map((office) => (
              <div
                key={office.id}
                className="p-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-2 border-blue-200 dark:border-blue-800 rounded-2xl"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {office.name}
                      </h3>
                      <span className="px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full">
                        HQ
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                      {office.city}, {office.country} • {office.timezone}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-start gap-3">
                        <MapPin className="w-5 h-5 text-gray-600 dark:text-gray-400 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-sm text-gray-900 dark:text-white font-medium">
                            {office.address}
                          </p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            {office.addressLine2}
                          </p>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center gap-3">
                          <Phone className="w-5 h-5 text-gray-600 dark:text-gray-400 flex-shrink-0" />
                          <a
                            href={`tel:${office.phone}`}
                            className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
                          >
                            {office.phone}
                          </a>
                        </div>
                        <div className="flex items-center gap-3">
                          <Mail className="w-5 h-5 text-gray-600 dark:text-gray-400 flex-shrink-0" />
                          <a
                            href={`mailto:${office.email}`}
                            className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
                          >
                            {office.email}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </motion.div>

        {/* Regional Offices */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
            Regional Offices
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {offices
              .filter((office) => !office.isHQ)
              .map((office, idx) => (
                <motion.div
                  key={office.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + idx * 0.05 }}
                  className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Globe className="w-6 h-6 text-gray-600 dark:text-gray-400" />
                    </div>
                    <div>
                      <h4 className="text-base font-semibold text-gray-900 dark:text-white">
                        {office.name}
                      </h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {office.city}, {office.country}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3 text-sm">
                    <div className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-gray-900 dark:text-white">{office.address}</p>
                        <p className="text-gray-600 dark:text-gray-400">{office.addressLine2}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-gray-400 flex-shrink-0" />
                      <a
                        href={`tel:${office.phone}`}
                        className="text-blue-600 dark:text-blue-400 hover:underline"
                      >
                        {office.phone}
                      </a>
                    </div>

                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-gray-400 flex-shrink-0" />
                      <a
                        href={`mailto:${office.email}`}
                        className="text-blue-600 dark:text-blue-400 hover:underline"
                      >
                        {office.email}
                      </a>
                    </div>

                    <div className="pt-2 border-t border-gray-200 dark:border-gray-700">
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        Timezone: {office.timezone}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
          </div>
        </div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-12 p-6 bg-gray-50 dark:bg-gray-800 rounded-xl text-center"
        >
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Can&apos;t find an office near you? Contact our headquarters and we&apos;ll direct you to the right team.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
