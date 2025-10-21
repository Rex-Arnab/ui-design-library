import { PageHeader } from "@/components/showcase/page-header";
import { ComponentPreview } from "@/components/showcase/component-preview";
import ClassicBlogGrid from "@/components/blog-grids/ClassicBlogGrid";
import FeaturedBlogGrid from "@/components/blog-grids/FeaturedBlogGrid";
import MasonryBlogGrid from "@/components/blog-grids/MasonryBlogGrid";
import MinimalBlogGrid from "@/components/blog-grids/MinimalBlogGrid";
import ImageFirstBlogGrid from "@/components/blog-grids/ImageFirstBlogGrid";
import TimelineBlogGrid from "@/components/blog-grids/TimelineBlogGrid";

export default function BlogGridsPage() {
  return (
    <div className="space-y-16">
      <PageHeader
        title="Blog & Content Grid Components"
        description="Blog listing and content grid components with various layout patterns. Built with Tailwind CSS and Framer Motion for engaging content presentation. Choose from 6 blog grid styles."
        badge="6 Components"
        badgeVariant="default"
      />

      <ComponentPreview
        title="Classic Blog Grid"
        description="Traditional 3-column grid with featured images, metadata, category tags, and hover effects. Perfect for standard blog layouts."
      >
        <ClassicBlogGrid />
      </ComponentPreview>

      <ComponentPreview
        title="Featured Blog Grid"
        description="One large featured post in hero-style plus grid of smaller posts in asymmetric layout. Ideal for blog homepages."
      >
        <FeaturedBlogGrid />
      </ComponentPreview>

      <ComponentPreview
        title="Masonry Blog Grid"
        description="Pinterest-style layout with varied height cards using CSS columns for dense packed layout. Visual variety and interest."
      >
        <MasonryBlogGrid />
      </ComponentPreview>

      <ComponentPreview
        title="Minimal Blog Grid"
        description="Ultra-clean text-focused design with large typography and maximum whitespace in single column. Modern and elegant."
      >
        <MinimalBlogGrid />
      </ComponentPreview>

      <ComponentPreview
        title="Image First Blog Grid"
        description="Image-heavy design with text overlay on full-bleed images, hover reveals full content. Visually striking presentation."
      >
        <ImageFirstBlogGrid />
      </ComponentPreview>

      <ComponentPreview
        title="Timeline Blog Grid"
        description="Chronological timeline layout with posts grouped by month and vertical timeline connector. Great for archives."
      >
        <TimelineBlogGrid />
      </ComponentPreview>
    </div>
  );
}
