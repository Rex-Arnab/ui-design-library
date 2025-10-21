import { PageHeader } from "@/components/showcase/page-header";
import { ComponentPreview } from "@/components/showcase/component-preview";
import GridTestimonials from "@/components/testimonials/GridTestimonials";
import CarouselTestimonials from "@/components/testimonials/CarouselTestimonials";
import MarqueeTestimonials from "@/components/testimonials/MarqueeTestimonials";
import FeaturedTestimonial from "@/components/testimonials/FeaturedTestimonial";
import VideoTestimonials from "@/components/testimonials/VideoTestimonials";
import SocialProofTestimonials from "@/components/testimonials/SocialProofTestimonials";
import WallTestimonials from "@/components/testimonials/WallTestimonials";
import MinimalTestimonials from "@/components/testimonials/MinimalTestimonials";

export default function TestimonialsPage() {
  return (
    <div className="space-y-16">
      <PageHeader
        title="Testimonial Components"
        description="Social proof and testimonial components with various presentation styles. Built with Tailwind CSS and Framer Motion for impactful customer stories. Choose from 8 testimonial layouts."
        badge="8 Components"
        badgeVariant="default"
      />

      <ComponentPreview
        title="Grid Testimonials"
        description="Classic 3-column grid with star ratings and customer cards. Perfect for displaying multiple testimonials at once."
      >
        <GridTestimonials />
      </ComponentPreview>

      <ComponentPreview
        title="Carousel Testimonials"
        description="Featured carousel with navigation arrows and auto-rotate functionality. Great for highlighting key testimonials."
      >
        <CarouselTestimonials />
      </ComponentPreview>

      <ComponentPreview
        title="Marquee Testimonials"
        description="Infinite scroll animation with two rows moving in opposite directions. Eye-catching and dynamic presentation."
      >
        <MarqueeTestimonials />
      </ComponentPreview>

      <ComponentPreview
        title="Featured Testimonial"
        description="Single large featured testimonial with accompanying stats and metrics. Ideal for hero sections."
      >
        <FeaturedTestimonial />
      </ComponentPreview>

      <ComponentPreview
        title="Video Testimonials"
        description="Video testimonial grid with play buttons and modal view for full video experience. Powerful for conversions."
      >
        <VideoTestimonials />
      </ComponentPreview>

      <ComponentPreview
        title="Social Proof Testimonials"
        description="Twitter/LinkedIn style cards with platform icons and engagement metrics. Modern social media aesthetic."
      >
        <SocialProofTestimonials />
      </ComponentPreview>

      <ComponentPreview
        title="Wall Testimonials"
        description="Masonry/Pinterest-style wall layout with category filtering for large collections. Versatile and browseable."
      >
        <WallTestimonials />
      </ComponentPreview>

      <ComponentPreview
        title="Minimal Testimonials"
        description="Ultra-clean single column layout with maximum whitespace and elegant typography. Perfect for focused impact."
      >
        <MinimalTestimonials />
      </ComponentPreview>
    </div>
  );
}
