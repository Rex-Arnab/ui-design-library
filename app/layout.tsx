import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics";

const inter = Inter({
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "UI Template Library - 136+ Production-Ready Components",
  description: "The only UI library you need. Copy production-ready components built with Next.js, TypeScript, and Tailwind CSS. Free, open-source, and ready to ship.",
  keywords: ["UI components", "React components", "Next.js", "TypeScript", "Tailwind CSS", "component library", "design system"],
  authors: [{ name: "UI Template Library" }],
  openGraph: {
    title: "UI Template Library - 136+ Production-Ready Components",
    description: "Copy production-ready components built with Next.js, TypeScript, and Tailwind CSS.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "UI Template Library - 136+ Production-Ready Components",
    description: "Copy production-ready components built with Next.js, TypeScript, and Tailwind CSS.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <GoogleAnalytics />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
