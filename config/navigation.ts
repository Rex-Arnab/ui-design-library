import {
  Home,
  MousePointerClick,
  LayoutGrid,
  FileText,
  Table,
  Mail,
  LayoutDashboard,
  Bell,
  FileCode,
  Sparkles,
  Flame,
  Lock,
  DollarSign,
  Boxes,
  Clock,
  MessageSquare,
  Layers,
  Target,
  HelpCircle,
  MailOpen,
  Users,
  Quote,
  Menu,
  TrendingUp,
  Newspaper,
  Compass,
  type LucideIcon,
} from "lucide-react";

/**
 * Navigation item configuration
 */
export interface NavItem {
  /** Display title for the navigation item */
  title: string;
  /** Route path */
  href: string;
  /** Optional Lucide icon component */
  icon?: LucideIcon;
  /** Optional badge configuration */
  badge?: {
    text: string;
    variant?: "default" | "secondary" | "destructive" | "outline";
  };
  /** Description shown in tooltips or cards */
  description?: string;
}

/**
 * Navigation section containing grouped items
 */
export interface NavSection {
  /** Section title */
  title: string;
  /** Navigation items in this section */
  items: NavItem[];
  /** Whether section is expanded by default */
  defaultOpen?: boolean;
}

/**
 * Complete navigation configuration for the showcase
 */
export const navigationSections: NavSection[] = [
  {
    title: "Getting Started",
    defaultOpen: true,
    items: [
      {
        title: "Overview",
        href: "/showcase",
        icon: Home,
        description: "Introduction to the component library",
      },
      {
        title: "Philosophy",
        href: "/showcase/philosophy",
        icon: Compass,
        description: "Design, business, and MVP principles",
      },
    ],
  },
  {
    title: "Components",
    defaultOpen: true,
    items: [
      {
        title: "Buttons",
        href: "/showcase/buttons",
        icon: MousePointerClick,
        description: "Interactive button components",
      },
      {
        title: "Cards",
        href: "/showcase/cards",
        icon: LayoutGrid,
        description: "Content container patterns",
      },
      {
        title: "Forms",
        href: "/showcase/forms",
        icon: FileText,
        description: "Form inputs and validation",
      },
      {
        title: "Data Tables",
        href: "/showcase/data-tables",
        icon: Table,
        description: "Sortable and filterable tables",
      },
    ],
  },
  {
    title: "Patterns",
    defaultOpen: true,
    items: [
      {
        title: "Hero Sections",
        href: "/showcase/hero-sections",
        icon: Flame,
        description: "Production-ready hero designs",
        badge: {
          text: "14 Heroes",
          variant: "secondary",
        },
      },
      {
        title: "Auth Pages",
        href: "/showcase/auth-pages",
        icon: Lock,
        description: "Authentication flows & forms",
        badge: {
          text: "13 Pages",
          variant: "secondary",
        },
      },
      {
        title: "Pricing",
        href: "/showcase/pricing",
        icon: DollarSign,
        description: "Conversion-optimized pricing layouts",
        badge: {
          text: "8 Variants",
          variant: "secondary",
        },
      },
      {
        title: "Feature Sections",
        href: "/showcase/feature-sections",
        icon: Boxes,
        description: "Feature showcase layouts",
        badge: {
          text: "15 Variants",
          variant: "secondary",
        },
      },
      {
        title: "Timelines",
        href: "/showcase/timelines",
        icon: Clock,
        description: "Timeline & roadmap components",
        badge: {
          text: "20 Variants",
          variant: "secondary",
        },
      },
      {
        title: "Footers",
        href: "/showcase/footers",
        icon: Layers,
        description: "Footer section layouts",
        badge: {
          text: "8 Variants",
          variant: "secondary",
        },
      },
      {
        title: "CTA Sections",
        href: "/showcase/cta-sections",
        icon: Target,
        description: "Call-to-action sections",
        badge: {
          text: "6 Variants",
          variant: "secondary",
        },
      },
      {
        title: "FAQs",
        href: "/showcase/faqs",
        icon: HelpCircle,
        description: "FAQ & accordion components",
        badge: {
          text: "8 Variants",
          variant: "secondary",
        },
      },
      {
        title: "Newsletters",
        href: "/showcase/newsletters",
        icon: MailOpen,
        description: "Newsletter signup forms",
        badge: {
          text: "6 Variants",
          variant: "secondary",
        },
      },
      {
        title: "Team Sections",
        href: "/showcase/team-sections",
        icon: Users,
        description: "Team & about layouts",
        badge: {
          text: "8 Variants",
          variant: "secondary",
        },
      },
      {
        title: "Testimonials",
        href: "/showcase/testimonials",
        icon: Quote,
        description: "Customer testimonial sections",
        badge: {
          text: "8 Variants",
          variant: "secondary",
        },
      },
      {
        title: "Navigation",
        href: "/showcase/navigation",
        icon: Menu,
        description: "Navbar & menu components",
        badge: {
          text: "8 Variants",
          variant: "secondary",
        },
      },
      {
        title: "Stats & Metrics",
        href: "/showcase/stats",
        icon: TrendingUp,
        description: "Statistics & metrics displays",
        badge: {
          text: "6 Variants",
          variant: "secondary",
        },
      },
      {
        title: "Blog Grids",
        href: "/showcase/blog-grids",
        icon: Newspaper,
        description: "Blog & content grid layouts",
        badge: {
          text: "6 Variants",
          variant: "secondary",
        },
      },
    ],
  },
  {
    title: "Advanced",
    defaultOpen: true,
    items: [
      {
        title: "Notifications",
        href: "/showcase/notifications",
        icon: Bell,
        description: "Toast notifications with Sonner",
      },
      {
        title: "MDX Docs",
        href: "/showcase/mdx-docs",
        icon: FileCode,
        description: "Interactive docs with MDX",
      },
      {
        title: "Animations",
        href: "/showcase/animations",
        icon: Sparkles,
        description: "Framer Motion examples",
      },
    ],
  },
  {
    title: "Examples",
    defaultOpen: false,
    items: [
      {
        title: "Contact Form",
        href: "/showcase/examples/contact-form",
        icon: Mail,
        description: "Complete form with validation",
      },
      {
        title: "Dashboard",
        href: "/showcase/examples/dashboard",
        icon: LayoutDashboard,
        description: "Dashboard layout example",
        badge: {
          text: "Future",
          variant: "secondary",
        },
      },
    ],
  },
];
