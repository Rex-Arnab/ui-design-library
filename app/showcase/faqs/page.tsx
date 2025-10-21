import { PageHeader } from "@/components/showcase/page-header";
import { ComponentPreview } from "@/components/showcase/component-preview";
import AccordionFAQ from "@/components/faqs/AccordionFAQ";
import PlusMinusFAQ from "@/components/faqs/PlusMinusFAQ";
import TwoColumnFAQ from "@/components/faqs/TwoColumnFAQ";
import CategorizedFAQ from "@/components/faqs/CategorizedFAQ";
import SearchableFAQ from "@/components/faqs/SearchableFAQ";
import CardFAQ from "@/components/faqs/CardFAQ";
import MinimalFAQ from "@/components/faqs/MinimalFAQ";
import IconFAQ from "@/components/faqs/IconFAQ";

export default function FAQsPage() {
  return (
    <div className="space-y-16">
      <PageHeader
        title="FAQ Components"
        description="Interactive FAQ components with various interaction patterns and layouts. Built with Tailwind CSS and Framer Motion for smooth animations. Choose from 8 different FAQ styles."
        badge="8 Components"
        badgeVariant="default"
      />

      <ComponentPreview
        title="Accordion FAQ"
        description="Classic accordion with single item open at a time and chevron rotation. Perfect for traditional FAQ pages."
      >
        <AccordionFAQ />
      </ComponentPreview>

      <ComponentPreview
        title="Plus/Minus FAQ"
        description="Plus/minus icon toggle allowing multiple FAQs to remain open simultaneously. Great for comprehensive documentation."
      >
        <PlusMinusFAQ />
      </ComponentPreview>

      <ComponentPreview
        title="Two-Column FAQ"
        description="Two-column grid layout that stacks responsively on mobile. Space-efficient design for many questions."
      >
        <TwoColumnFAQ />
      </ComponentPreview>

      <ComponentPreview
        title="Categorized FAQ"
        description="FAQs grouped by categories with section icons including General, Billing, Technical, Security, and Account."
      >
        <CategorizedFAQ />
      </ComponentPreview>

      <ComponentPreview
        title="Searchable FAQ"
        description="Search input with real-time filtering, text highlighting, and auto-expand matching questions. Ideal for large FAQ collections."
      >
        <SearchableFAQ />
      </ComponentPreview>

      <ComponentPreview
        title="Card FAQ"
        description="Card-based layout with shadow, hover effects, and grid arrangement. Modern visual approach to FAQs."
      >
        <CardFAQ />
      </ComponentPreview>

      <ComponentPreview
        title="Minimal FAQ"
        description="Ultra-minimal design with chevron rotation indicator and maximum whitespace. Perfect for modern, clean interfaces."
      >
        <MinimalFAQ />
      </ComponentPreview>

      <ComponentPreview
        title="Icon FAQ"
        description="Each FAQ includes a category icon in colored circles for visual categorization and improved scanability."
      >
        <IconFAQ />
      </ComponentPreview>
    </div>
  );
}
