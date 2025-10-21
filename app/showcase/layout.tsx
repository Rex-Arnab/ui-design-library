"use client";

import { useState } from "react";
import { Menu, PanelLeftClose, PanelLeft } from "lucide-react";
import { Sidebar } from "@/components/showcase/sidebar";
import { ThemeToggle } from "@/components/theme-toggle";
import { CustomButton } from "@/components/custom-ui/CustomButton";
import { CustomSheet, CustomSheetContent, CustomSheetTrigger } from "@/components/custom-ui/CustomSheet";

/**
 * ShowcaseLayout - Dashboard layout for the showcase pages
 *
 * Features:
 * - Collapsible sidebar on desktop
 * - Fixed sidebar on desktop (w-64, 256px when expanded)
 * - Mobile sheet menu with hamburger button
 * - Theme toggle in header
 * - Responsive behavior (mobile: full-width, desktop: sidebar + main)
 * - Properly centered content on all screen sizes
 */
export default function ShowcaseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className="flex min-h-screen">
      {/* Desktop Sidebar - Hidden on mobile, collapsible on desktop */}
      <aside className={`hidden lg:flex flex-col fixed inset-y-0 z-50 border-r bg-background transition-all duration-300 ${
        sidebarCollapsed ? "w-0 border-0" : "w-64"
      }`}>
        {!sidebarCollapsed && <Sidebar />}
      </aside>

      {/* Main Content Area */}
      <div className={`flex-1 w-full transition-all duration-300 ${
        sidebarCollapsed ? "lg:ml-0" : "lg:ml-64"
      }`}>
        {/* Header Bar - Sticky at top */}
        <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="flex h-16 items-center justify-between px-4 lg:px-8">
            {/* Mobile Menu Button - Only visible on mobile */}
            <div className="lg:hidden">
              <CustomSheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                <CustomSheetTrigger asChild>
                  <CustomButton
                    variant="ghost"
                    size="icon"
                    aria-label="Open navigation menu"
                  >
                    <Menu className="h-5 w-5" />
                  </CustomButton>
                </CustomSheetTrigger>
                <CustomSheetContent side="left" className="w-64 p-0">
                  <Sidebar onNavigate={() => setMobileMenuOpen(false)} />
                </CustomSheetContent>
              </CustomSheet>
            </div>

            {/* Desktop Sidebar Toggle - Only visible on desktop */}
            <div className="hidden lg:block">
              <CustomButton
                variant="ghost"
                size="icon"
                onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
                aria-label={sidebarCollapsed ? "Expand sidebar" : "Collapse sidebar"}
              >
                {sidebarCollapsed ? (
                  <PanelLeft className="h-5 w-5" />
                ) : (
                  <PanelLeftClose className="h-5 w-5" />
                )}
              </CustomButton>
            </div>

            {/* Spacer */}
            <div className="flex-1" />

            {/* Theme Toggle - Always visible */}
            <ThemeToggle />
          </div>
        </header>

        {/* Page Content - Now properly centered */}
        <main className="p-4 lg:p-8">
          <div className="max-w-7xl mx-auto w-full">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
