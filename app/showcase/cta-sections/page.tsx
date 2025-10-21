import { PageHeader } from "@/components/showcase/page-header";
import { ComponentPreview } from "@/components/showcase/component-preview";
import HeroCTA from "@/components/cta-sections/HeroCTA";
import MinimalCTA from "@/components/cta-sections/MinimalCTA";
import SplitCTA from "@/components/cta-sections/SplitCTA";
import BannerCTA from "@/components/cta-sections/BannerCTA";
import CardCTA from "@/components/cta-sections/CardCTA";
import SocialProofCTA from "@/components/cta-sections/SocialProofCTA";

export default function CTASectionsPage() {
  return (
    <div className="space-y-16">
      <PageHeader
        title="Call-to-Action Sections"
        description="Conversion-optimized CTA components designed to drive user action. Each variant is crafted with Tailwind CSS and features compelling layouts. Choose from 6 proven CTA patterns."
        badge="6 Components"
        badgeVariant="default"
      />

      <ComponentPreview
        title="Hero CTA"
        description="Large hero-style CTA with compelling headline, trust indicators, and customer logos. Perfect for homepage conversions."
      >
        <HeroCTA />
      </ComponentPreview>

      <ComponentPreview
        title="Minimal CTA"
        description="Ultra-clean centered design with maximum whitespace and single focused action. Works well for content pages."
      >
        <MinimalCTA />
      </ComponentPreview>

      <ComponentPreview
        title="Split CTA"
        description="Two-column split layout with benefits list on left and visual mockup on right. Ideal for feature-driven products."
      >
        <SplitCTA />
      </ComponentPreview>

      <ComponentPreview
        title="Banner CTA"
        description="Horizontal banner style perfect for sticky positioning and persistent calls to action. Great for announcements."
      >
        <BannerCTA />
      </ComponentPreview>

      <ComponentPreview
        title="Card CTA"
        description="Card-style CTA with icon, statistics, and elevated shadow. Stands out within content sections."
      >
        <CardCTA />
      </ComponentPreview>

      <ComponentPreview
        title="Social Proof CTA"
        description="CTA with heavy social proof including testimonials, ratings, and user avatars. Maximizes trust and conversions."
      >
        <SocialProofCTA />
      </ComponentPreview>
    </div>
  );
}
