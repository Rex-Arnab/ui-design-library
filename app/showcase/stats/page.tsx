import { PageHeader } from "@/components/showcase/page-header";
import { ComponentPreview } from "@/components/showcase/component-preview";
import SimpleStats from "@/components/stats/SimpleStats";
import AnimatedCounterStats from "@/components/stats/AnimatedCounterStats";
import ProgressBarStats from "@/components/stats/ProgressBarStats";
import ComparisonStats from "@/components/stats/ComparisonStats";
import IconStats from "@/components/stats/IconStats";
import ChartIntegratedStats from "@/components/stats/ChartIntegratedStats";

export default function StatsPage() {
  return (
    <div className="space-y-16">
      <PageHeader
        title="Stats & Metrics Components"
        description="Data visualization components for displaying statistics and key metrics. Built with Tailwind CSS and Framer Motion for engaging presentations. Choose from 6 stats visualization styles."
        badge="6 Components"
        badgeVariant="default"
      />

      <ComponentPreview
        title="Simple Stats"
        description="Classic 4-column grid with large numbers, descriptive labels, and icons with hover effects. Perfect for dashboards."
      >
        <SimpleStats />
      </ComponentPreview>

      <ComponentPreview
        title="Animated Counter Stats"
        description="Stats with animated count-up effect from zero, percentage changes, and trend indicators. Great for dynamic presentations."
      >
        <AnimatedCounterStats />
      </ComponentPreview>

      <ComponentPreview
        title="Progress Bar Stats"
        description="Statistics with horizontal progress bar visualizations for goal tracking with color-coded bars. Ideal for showing progress."
      >
        <ProgressBarStats />
      </ComponentPreview>

      <ComponentPreview
        title="Comparison Stats"
        description="Side-by-side comparison showing This Month vs Last Month with percentage change calculations. Perfect for reporting."
      >
        <ComparisonStats />
      </ComponentPreview>

      <ComponentPreview
        title="Icon Stats"
        description="Large colorful icon circles with icon, number, and label layout plus decorative badges. Visually engaging design."
      >
        <IconStats />
      </ComponentPreview>

      <ComponentPreview
        title="Chart Integrated Stats"
        description="Mini chart visualizations per stat with sparkline-style graphs and hover interactions. Professional data presentation."
      >
        <ChartIntegratedStats />
      </ComponentPreview>
    </div>
  );
}
