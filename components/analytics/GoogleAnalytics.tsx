"use client";

import Script from "next/script";

/**
 * Google Analytics component for tracking page views and events
 *
 * Usage:
 * Add to app/layout.tsx inside the <body> tag
 *
 * Requirements:
 * - Set NEXT_PUBLIC_GA_MEASUREMENT_ID in .env.local
 * - GA4 property created in Google Analytics
 */
export function GoogleAnalytics() {
  const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "G-TP5JDG34QV";

  // Don't load GA in development or if measurement ID is not set
  if (!measurementId || process.env.NODE_ENV !== "production") {
    return null;
  }

  return (
    <>
      {/* Google Analytics Script */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${measurementId}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  );
}
