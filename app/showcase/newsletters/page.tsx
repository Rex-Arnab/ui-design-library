import { PageHeader } from "@/components/showcase/page-header";
import { ComponentPreview } from "@/components/showcase/component-preview";
import InlineNewsletter from "@/components/newsletter/InlineNewsletter";
import CenteredNewsletter from "@/components/newsletter/CenteredNewsletter";
import SideImageNewsletter from "@/components/newsletter/SideImageNewsletter";
import MinimalNewsletter from "@/components/newsletter/MinimalNewsletter";
import PopupNewsletter from "@/components/newsletter/PopupNewsletter";
import SocialProofNewsletter from "@/components/newsletter/SocialProofNewsletter";

export default function NewslettersPage() {
  return (
    <div className="space-y-16">
      <PageHeader
        title="Newsletter Signup Components"
        description="Conversion-optimized newsletter signup forms with various layouts and social proof elements. Built with Tailwind CSS and designed for maximum signups. Choose from 6 effective patterns."
        badge="6 Components"
        badgeVariant="default"
      />

      <ComponentPreview
        title="Inline Newsletter"
        description="Horizontal inline form layout with social proof showing subscriber count. Perfect for embedding in content."
      >
        <InlineNewsletter />
      </ComponentPreview>

      <ComponentPreview
        title="Centered Newsletter"
        description="Center-aligned vertical layout with benefits checklist highlighting value proposition. Ideal for dedicated sections."
      >
        <CenteredNewsletter />
      </ComponentPreview>

      <ComponentPreview
        title="Side Image Newsletter"
        description="Two-column split layout with name and email fields alongside visual content. Great for full-width sections."
      >
        <SideImageNewsletter />
      </ComponentPreview>

      <ComponentPreview
        title="Minimal Newsletter"
        description="Ultra-simple design with single email input. Perfect for footer placements or sidebar widgets."
      >
        <MinimalNewsletter />
      </ComponentPreview>

      <ComponentPreview
        title="Popup Newsletter"
        description="Modal/popup style with special offer messaging and close button. Effective for exit-intent or timed displays."
      >
        <PopupNewsletter />
      </ComponentPreview>

      <ComponentPreview
        title="Social Proof Newsletter"
        description="Heavy social proof with user avatars, ratings, and recent subscriber notifications. Maximizes trust and conversions."
      >
        <SocialProofNewsletter />
      </ComponentPreview>
    </div>
  );
}
