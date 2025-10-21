import { PageHeader } from "@/components/showcase/page-header";
import { ComponentPreview } from "@/components/showcase/component-preview";
import GridTeam from "@/components/team-sections/GridTeam";
import CarouselTeam from "@/components/team-sections/CarouselTeam";
import BentoTeam from "@/components/team-sections/BentoTeam";
import MinimalTeam from "@/components/team-sections/MinimalTeam";
import HeroTeam from "@/components/team-sections/HeroTeam";
import CompactTeam from "@/components/team-sections/CompactTeam";
import TwoColumnTeam from "@/components/team-sections/TwoColumnTeam";
import DepartmentTeam from "@/components/team-sections/DepartmentTeam";

export default function TeamSectionsPage() {
  return (
    <div className="space-y-16">
      <PageHeader
        title="Team Section Components"
        description="Professional team and about section components with various layout patterns. Built with Tailwind CSS and Framer Motion for engaging presentations. Choose from 8 team showcase styles."
        badge="8 Components"
        badgeVariant="default"
      />

      <ComponentPreview
        title="Grid Team"
        description="Classic 3-4 column grid layout with member cards showing photo, name, role, and bio. Perfect for traditional team pages."
      >
        <GridTeam />
      </ComponentPreview>

      <ComponentPreview
        title="Carousel Team"
        description="Horizontal scrollable carousel with snap behavior for browsing through team members. Great for large teams."
      >
        <CarouselTeam />
      </ComponentPreview>

      <ComponentPreview
        title="Bento Team"
        description="Asymmetric bento box grid with different sized cards creating visual interest. Modern and dynamic layout."
      >
        <BentoTeam />
      </ComponentPreview>

      <ComponentPreview
        title="Minimal Team"
        description="Ultra-clean list layout with text-focused design and maximum whitespace. Ideal for minimalist brands."
      >
        <MinimalTeam />
      </ComponentPreview>

      <ComponentPreview
        title="Hero Team"
        description="Large hero-style section with culture statement, company stats, and featured team members. Perfect for about pages."
      >
        <HeroTeam />
      </ComponentPreview>

      <ComponentPreview
        title="Compact Team"
        description="Condensed horizontal layout with circular avatars showing many team members efficiently. Space-saving design."
      >
        <CompactTeam />
      </ComponentPreview>

      <ComponentPreview
        title="Two-Column Team"
        description="Alternating zigzag two-column pattern with detailed member profiles. Engaging for storytelling."
      >
        <TwoColumnTeam />
      </ComponentPreview>

      <ComponentPreview
        title="Department Team"
        description="Team organized by departments with tabs or sections for easy navigation. Ideal for larger organizations."
      >
        <DepartmentTeam />
      </ComponentPreview>
    </div>
  );
}
