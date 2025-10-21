import { PageHeader } from "@/components/showcase/page-header";
import { ComponentPreview } from "@/components/showcase/component-preview";
import MultiColumnFooter from "@/components/footers/MultiColumnFooter";
import MinimalFooter from "@/components/footers/MinimalFooter";
import NewsletterFooter from "@/components/footers/NewsletterFooter";
import SocialFooter from "@/components/footers/SocialFooter";
import MegaFooter from "@/components/footers/MegaFooter";
import CenteredFooter from "@/components/footers/CenteredFooter";
import SplitFooter from "@/components/footers/SplitFooter";
import CompactFooter from "@/components/footers/CompactFooter";

export default function FootersPage() {
  return (
    <div className="space-y-16">
      <PageHeader
        title="Footer Components"
        description="Production-ready footer components for different use cases. Each footer is custom-built with Tailwind CSS, responsive design, and dark mode support. Choose from 8 unique footer layouts."
        badge="8 Components"
        badgeVariant="default"
      />

      <ComponentPreview
        title="Multi-Column Footer"
        description="Classic 4-column layout with logo, multiple navigation sections, and social icons. Perfect for content-rich websites and large applications."
      >
        <MultiColumnFooter />
      </ComponentPreview>

      <ComponentPreview
        title="Minimal Footer"
        description="Ultra-clean single row design with maximum whitespace and essential links. Ideal for portfolios and minimal landing pages."
      >
        <MinimalFooter />
      </ComponentPreview>

      <ComponentPreview
        title="Newsletter Footer"
        description="Footer with integrated newsletter signup form and benefits list. Great for blogs and content-driven websites."
      >
        <NewsletterFooter />
      </ComponentPreview>

      <ComponentPreview
        title="Social Footer"
        description="Large social media icon buttons with follower counts. Perfect for creator websites and social-first brands."
      >
        <SocialFooter />
      </ComponentPreview>

      <ComponentPreview
        title="Mega Footer"
        description="Extensive 5-6 column sitemap with trust badges and comprehensive navigation. Ideal for large enterprise websites."
      >
        <MegaFooter />
      </ComponentPreview>

      <ComponentPreview
        title="Centered Footer"
        description="Center-aligned stacked layout with logo, navigation, social icons, and copyright. Works well for modern, balanced designs."
      >
        <CenteredFooter />
      </ComponentPreview>

      <ComponentPreview
        title="Split Footer"
        description="Two-column split design with brand information on left and navigation on right. Clean and organized layout."
      >
        <SplitFooter />
      </ComponentPreview>

      <ComponentPreview
        title="Compact Footer"
        description="Minimal height single row footer with collapsible accordion navigation on mobile. Space-efficient design."
      >
        <CompactFooter />
      </ComponentPreview>
    </div>
  );
}
