"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import {
  navigationSections,
  type NavSection,
} from "@/config/navigation";
import { trackNavigation } from "@/lib/analytics";

/**
 * Props for the Sidebar component
 */
interface SidebarProps {
  /**
   * Callback when navigation item clicked (for mobile close)
   */
  onNavigate?: () => void;
}

/**
 * Sidebar - Main navigation component for the showcase dashboard
 *
 * Displays hierarchical navigation with collapsible sections, active states,
 * and optional badges.
 *
 * @example
 * ```tsx
 * <Sidebar onNavigate={() => setMobileMenuOpen(false)} />
 * ```
 */
export function Sidebar({ onNavigate }: SidebarProps) {
  const pathname = usePathname();

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="px-3 py-4 border-b">
        <h2 className="text-lg font-bold">UI Showcase</h2>
        <p className="text-xs text-muted-foreground">Component Library</p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-4">
        {navigationSections.map((section) => (
          <NavSectionComponent
            key={section.title}
            section={section}
            pathname={pathname}
            onNavigate={onNavigate}
          />
        ))}
      </nav>

      {/* Footer */}
      <div className="border-t p-4">
        <p className="text-xs text-muted-foreground">Version 1.0.0</p>
      </div>
    </div>
  );
}

/**
 * NavSectionComponent - Collapsible navigation section
 */
function NavSectionComponent({
  section,
  pathname,
  onNavigate,
}: {
  section: NavSection;
  pathname?: string;
  onNavigate?: () => void;
}) {
  const [isOpen, setIsOpen] = useState(section.defaultOpen ?? false);

  return (
    <div className="space-y-1">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full px-3 py-2 text-sm font-semibold text-foreground hover:bg-accent rounded-lg transition-colors"
        aria-expanded={isOpen}
        aria-label={`${isOpen ? 'Collapse' : 'Expand'} ${section.title} section`}
      >
        <span>{section.title}</span>
        <ChevronDown
          className={cn(
            "h-4 w-4 transition-transform",
            isOpen && "rotate-180"
          )}
        />
      </button>

      {isOpen && (
        <div className="ml-2 space-y-1 border-l pl-4">
          {section.items.map((item) => {
            const isActive = pathname === item.href;
            const IconComponent = item.icon;

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => {
                  trackNavigation(item.title, "sidebar");
                  onNavigate?.();
                }}
                className={cn(
                  "flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition-colors",
                  isActive
                    ? "bg-accent text-accent-foreground font-medium"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                )}
                aria-current={isActive ? "page" : undefined}
              >
                {IconComponent && <IconComponent className="h-4 w-4 flex-shrink-0" />}
                <span className="flex-1 truncate">{item.title}</span>
                {item.badge && (
                  <Badge variant={item.badge.variant || "secondary"} className="text-xs flex-shrink-0">
                    {item.badge.text}
                  </Badge>
                )}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
