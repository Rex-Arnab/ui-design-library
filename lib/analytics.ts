/**
 * Google Analytics Event Tracking Utilities
 *
 * Provides type-safe functions for tracking user interactions
 * Only sends events in production when GA measurement ID is configured
 */

// Extend the Window interface to include gtag
declare global {
  interface Window {
    gtag?: (
      command: string,
      targetId: string,
      config?: Record<string, unknown>
    ) => void;
  }
}

/**
 * Check if Google Analytics is available
 */
const isGAAvailable = (): boolean => {
  return (
    typeof window !== "undefined" &&
    typeof window.gtag === "function" &&
    process.env.NODE_ENV === "production"
  );
};

/**
 * Track page view
 * Automatically called on route changes by Next.js
 */
export const trackPageView = (url: string) => {
  if (!isGAAvailable()) return;

  window.gtag?.("config", process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID!, {
    page_path: url,
  });
};

/**
 * Track custom events
 */
export const trackEvent = (
  eventName: string,
  eventParams?: Record<string, unknown>
) => {
  if (!isGAAvailable()) return;

  window.gtag?.("event", eventName, eventParams);
};

/**
 * Pre-defined event tracking functions for common interactions
 */

// Landing page events
export const trackHeroCtaClick = (ctaType: "primary" | "secondary") => {
  trackEvent("hero_cta_click", {
    event_category: "engagement",
    event_label: ctaType,
    page: "landing",
  });
};

export const trackCategoryClick = (categoryName: string) => {
  trackEvent("category_click", {
    event_category: "engagement",
    event_label: categoryName,
    page: "landing",
  });
};

// Showcase page events
export const trackComponentView = (componentCategory: string) => {
  trackEvent("component_view", {
    event_category: "showcase",
    event_label: componentCategory,
  });
};

export const trackComponentCopy = (componentName: string) => {
  trackEvent("component_copy", {
    event_category: "engagement",
    event_label: componentName,
    value: 1,
  });
};

export const trackCodePreview = (componentName: string) => {
  trackEvent("code_preview", {
    event_category: "engagement",
    event_label: componentName,
  });
};

// Philosophy page events
export const trackPhilosophyRead = (categoryName: string) => {
  trackEvent("philosophy_read", {
    event_category: "content",
    event_label: categoryName,
  });
};

export const trackPhilosophyScroll = (scrollDepth: number) => {
  trackEvent("philosophy_scroll", {
    event_category: "engagement",
    value: scrollDepth,
  });
};

// Navigation events
export const trackSidebarToggle = (action: "open" | "close") => {
  trackEvent("sidebar_toggle", {
    event_category: "navigation",
    event_label: action,
  });
};

export const trackThemeToggle = (theme: "light" | "dark") => {
  trackEvent("theme_toggle", {
    event_category: "settings",
    event_label: theme,
  });
};

export const trackNavigation = (destination: string, source: string) => {
  trackEvent("navigation", {
    event_category: "navigation",
    event_label: destination,
    source: source,
  });
};

// Social/External link tracking
export const trackExternalLink = (url: string, linkText: string) => {
  trackEvent("external_link_click", {
    event_category: "engagement",
    event_label: linkText,
    url: url,
  });
};

export const trackSocialClick = (platform: string) => {
  trackEvent("social_click", {
    event_category: "social",
    event_label: platform,
  });
};

// Search and filter events (if implemented)
export const trackSearch = (searchTerm: string) => {
  trackEvent("search", {
    event_category: "engagement",
    search_term: searchTerm,
  });
};

export const trackFilter = (filterType: string, filterValue: string) => {
  trackEvent("filter", {
    event_category: "engagement",
    filter_type: filterType,
    filter_value: filterValue,
  });
};

// Performance tracking
export const trackPerformance = (metricName: string, value: number) => {
  trackEvent("performance", {
    event_category: "technical",
    metric_name: metricName,
    value: value,
  });
};

// Error tracking
export const trackError = (errorMessage: string, errorLocation: string) => {
  trackEvent("error", {
    event_category: "error",
    error_message: errorMessage,
    error_location: errorLocation,
  });
};

// Engagement metrics
export const trackTimeOnPage = (seconds: number, pageName: string) => {
  trackEvent("time_on_page", {
    event_category: "engagement",
    event_label: pageName,
    value: seconds,
  });
};

export const trackScrollDepth = (percentage: number, pageName: string) => {
  trackEvent("scroll_depth", {
    event_category: "engagement",
    event_label: pageName,
    value: percentage,
  });
};
