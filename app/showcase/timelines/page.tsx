import { PageHeader } from "@/components/showcase/page-header";
import { ComponentPreview } from "@/components/showcase/component-preview";
import { VerticalSimple } from "@/components/timelines/VerticalSimple";
import { VerticalCards } from "@/components/timelines/VerticalCards";
import { HorizontalSimple } from "@/components/timelines/HorizontalSimple";
import { HorizontalCards } from "@/components/timelines/HorizontalCards";
import { Alternating } from "@/components/timelines/Alternating";
import { Roadmap } from "@/components/timelines/Roadmap";
import { ProgressTracker } from "@/components/timelines/ProgressTracker";
import { HistoryTimeline } from "@/components/timelines/HistoryTimeline";
import { EventTimeline } from "@/components/timelines/EventTimeline";
import { Milestone } from "@/components/timelines/Milestone";
import { Clickable } from "@/components/timelines/Clickable";
import { Animated } from "@/components/timelines/Animated";
import { FilterableTimeline } from "@/components/timelines/FilterableTimeline";
import { Comparison } from "@/components/timelines/Comparison";
import { MinimalText } from "@/components/timelines/MinimalText";
import { IconTimeline } from "@/components/timelines/IconTimeline";
import { ImageTimeline } from "@/components/timelines/ImageTimeline";
import { StatTimeline } from "@/components/timelines/StatTimeline";
import { StepByStep } from "@/components/timelines/StepByStep";
import { CurvedConnector } from "@/components/timelines/CurvedConnector";

export default function TimelinesShowcase() {
  return (
    <div className="space-y-16">
      <PageHeader
        title="Timeline Components"
        description="20 unique timeline layouts for every use case. From simple vertical chronologies to interactive roadmaps and progress trackers. Clean, professional designs built with pure Tailwind CSS."
        badge="20 Variants"
        badgeVariant="default"
      />

      {/* Comparison Table */}
      <section className="bg-muted/50 rounded-xl p-8 border">
        <h2 className="text-2xl font-semibold mb-6">Timeline Component Guide</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4 font-semibold">Component</th>
                <th className="text-left py-3 px-4 font-semibold">Layout</th>
                <th className="text-left py-3 px-4 font-semibold">Best For</th>
                <th className="text-left py-3 px-4 font-semibold">Features</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              <tr>
                <td className="py-3 px-4 font-medium">VerticalSimple</td>
                <td className="py-3 px-4">Vertical line + dots</td>
                <td className="py-3 px-4">Project milestones, chronologies</td>
                <td className="py-3 px-4">Minimal, clean, text-focused</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">VerticalCards</td>
                <td className="py-3 px-4">Vertical with cards</td>
                <td className="py-3 px-4">Event listings, updates</td>
                <td className="py-3 px-4">Category badges, hover effects</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">HorizontalSimple</td>
                <td className="py-3 px-4">Horizontal markers</td>
                <td className="py-3 px-4">Quarterly roadmaps</td>
                <td className="py-3 px-4">Responsive, evenly spaced</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">HorizontalCards</td>
                <td className="py-3 px-4">Horizontal scroll</td>
                <td className="py-3 px-4">Sprint timelines, sprints</td>
                <td className="py-3 px-4">Scrollable, status icons</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">Alternating</td>
                <td className="py-3 px-4">Zigzag left-right</td>
                <td className="py-3 px-4">Visual storytelling</td>
                <td className="py-3 px-4">Balanced, scroll animations</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">Roadmap</td>
                <td className="py-3 px-4">Quarterly grid</td>
                <td className="py-3 px-4">Product roadmaps</td>
                <td className="py-3 px-4">Status colors, Q1-Q4 layout</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">ProgressTracker</td>
                <td className="py-3 px-4">Numbered steps</td>
                <td className="py-3 px-4">Onboarding, workflows</td>
                <td className="py-3 px-4">Completion states, progress line</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">HistoryTimeline</td>
                <td className="py-3 px-4">Year groupings</td>
                <td className="py-3 px-4">Company history, anniversaries</td>
                <td className="py-3 px-4">Year headers, nested events</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">EventTimeline</td>
                <td className="py-3 px-4">Event cards</td>
                <td className="py-3 px-4">Meeting schedules, agendas</td>
                <td className="py-3 px-4">Time, location, participants</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">Milestone</td>
                <td className="py-3 px-4">Achievement focus</td>
                <td className="py-3 px-4">Major milestones, victories</td>
                <td className="py-3 px-4">Large metrics, achievement icons</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">Clickable</td>
                <td className="py-3 px-4">Accordion style</td>
                <td className="py-3 px-4">Detailed event info</td>
                <td className="py-3 px-4">Expand/collapse, interactive</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">Animated</td>
                <td className="py-3 px-4">Scroll-triggered</td>
                <td className="py-3 px-4">Landing pages, storytelling</td>
                <td className="py-3 px-4">Fade in, stagger, line animation</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">FilterableTimeline</td>
                <td className="py-3 px-4">Filtered view</td>
                <td className="py-3 px-4">Multi-category events</td>
                <td className="py-3 px-4">Category filters, transitions</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">Comparison</td>
                <td className="py-3 px-4">Side-by-side</td>
                <td className="py-3 px-4">Company comparisons, A/B</td>
                <td className="py-3 px-4">Dual timelines, shared dates</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">MinimalText</td>
                <td className="py-3 px-4">Text only</td>
                <td className="py-3 px-4">Clean, simple chronologies</td>
                <td className="py-3 px-4">No decorations, typography focus</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">IconTimeline</td>
                <td className="py-3 px-4">Icon + text</td>
                <td className="py-3 px-4">Feature releases, updates</td>
                <td className="py-3 px-4">Colored icon circles, visual cues</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">ImageTimeline</td>
                <td className="py-3 px-4">Images + text</td>
                <td className="py-3 px-4">Event highlights, galleries</td>
                <td className="py-3 px-4">Image thumbnails, cards</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">StatTimeline</td>
                <td className="py-3 px-4">Metrics focus</td>
                <td className="py-3 px-4">Growth milestones, KPIs</td>
                <td className="py-3 px-4">Big numbers, growth indicators</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">StepByStep</td>
                <td className="py-3 px-4">Instructions</td>
                <td className="py-3 px-4">Tutorials, guides, processes</td>
                <td className="py-3 px-4">Time estimates, detailed steps</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">CurvedConnector</td>
                <td className="py-3 px-4">Curved SVG paths</td>
                <td className="py-3 px-4">Unique visual style</td>
                <td className="py-3 px-4">Organic flow, bezier curves</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Basic Vertical Layouts */}
      <section className="space-y-12">
        <h2 className="text-3xl font-bold">Basic Vertical Layouts</h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-semibold mb-2">VerticalSimple</h3>
            <p className="text-muted-foreground">
              Classic vertical timeline with left-aligned line and minimal circle markers. Perfect for straightforward chronologies.
            </p>
          </div>
          <ComponentPreview title="VerticalSimple Component" showCode={false} align="start">
            <div className="w-full -mx-8 -my-8">
              <VerticalSimple />
            </div>
          </ComponentPreview>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-semibold mb-2">VerticalCards</h3>
            <p className="text-muted-foreground">
              Vertical timeline with card containers, category badges, and stagger animations. Ideal for event listings.
            </p>
          </div>
          <ComponentPreview title="VerticalCards Component" showCode={false} align="start">
            <div className="w-full -mx-8 -my-8">
              <VerticalCards />
            </div>
          </ComponentPreview>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-semibold mb-2">MinimalText</h3>
            <p className="text-muted-foreground">
              Ultra-minimal text-only timeline with no decorations. Typography-focused, maximum whitespace.
            </p>
          </div>
          <ComponentPreview title="MinimalText Component" showCode={false} align="start">
            <div className="w-full -mx-8 -my-8">
              <MinimalText />
            </div>
          </ComponentPreview>
        </div>
      </section>

      {/* Horizontal Layouts */}
      <section className="space-y-12">
        <h2 className="text-3xl font-bold">Horizontal Layouts</h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-semibold mb-2">HorizontalSimple</h3>
            <p className="text-muted-foreground">
              Horizontal timeline with evenly spaced markers. Responsive: becomes vertical on mobile. Ideal for quarterly roadmaps.
            </p>
          </div>
          <ComponentPreview title="HorizontalSimple Component" showCode={false} align="start">
            <div className="w-full -mx-8 -my-8">
              <HorizontalSimple />
            </div>
          </ComponentPreview>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-semibold mb-2">HorizontalCards</h3>
            <p className="text-muted-foreground">
              Horizontal scrollable cards with arrow connectors. Perfect for sprint timelines and agile workflows.
            </p>
          </div>
          <ComponentPreview title="HorizontalCards Component" showCode={false} align="start">
            <div className="w-full -mx-8 -my-8">
              <HorizontalCards />
            </div>
          </ComponentPreview>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-semibold mb-2">Alternating</h3>
            <p className="text-muted-foreground">
              Zigzag left-right alternating layout with center vertical line. Creates visual balance. Desktop only, stacks on mobile.
            </p>
          </div>
          <ComponentPreview title="Alternating Component" showCode={false} align="start">
            <div className="w-full -mx-8 -my-8">
              <Alternating />
            </div>
          </ComponentPreview>
        </div>
      </section>

      {/* Specialized Roadmap & Progress */}
      <section className="space-y-12">
        <h2 className="text-3xl font-bold">Roadmaps & Progress</h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-semibold mb-2">Roadmap</h3>
            <p className="text-muted-foreground">
              Product roadmap with quarterly grid layout. Status-based color coding (completed, in-progress, planned).
            </p>
          </div>
          <ComponentPreview title="Roadmap Component" showCode={false} align="start">
            <div className="w-full -mx-8 -my-8">
              <Roadmap />
            </div>
          </ComponentPreview>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-semibold mb-2">ProgressTracker</h3>
            <p className="text-muted-foreground">
              Numbered step circles with three states: completed, current, and upcoming. Perfect for onboarding flows.
            </p>
          </div>
          <ComponentPreview title="ProgressTracker Component" showCode={false} align="start">
            <div className="w-full -mx-8 -my-8">
              <ProgressTracker />
            </div>
          </ComponentPreview>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-semibold mb-2">StepByStep</h3>
            <p className="text-muted-foreground">
              Detailed instruction timeline with numbered circles and time estimates. Tutorial/onboarding style.
            </p>
          </div>
          <ComponentPreview title="StepByStep Component" showCode={false} align="start">
            <div className="w-full -mx-8 -my-8">
              <StepByStep />
            </div>
          </ComponentPreview>
        </div>
      </section>

      {/* History & Events */}
      <section className="space-y-12">
        <h2 className="text-3xl font-bold">History & Events</h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-semibold mb-2">HistoryTimeline</h3>
            <p className="text-muted-foreground">
              Company history with year-based groupings. Large year headers with multiple events nested underneath.
            </p>
          </div>
          <ComponentPreview title="HistoryTimeline Component" showCode={false} align="start">
            <div className="w-full -mx-8 -my-8">
              <HistoryTimeline />
            </div>
          </ComponentPreview>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-semibold mb-2">EventTimeline</h3>
            <p className="text-muted-foreground">
              Event cards with full metadata: date, time, location, participants. Type badges for different event categories.
            </p>
          </div>
          <ComponentPreview title="EventTimeline Component" showCode={false} align="start">
            <div className="w-full -mx-8 -my-8">
              <EventTimeline />
            </div>
          </ComponentPreview>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-semibold mb-2">Milestone</h3>
            <p className="text-muted-foreground">
              Achievement-focused timeline with large metrics and achievement icons. Celebration-worthy moments emphasized.
            </p>
          </div>
          <ComponentPreview title="Milestone Component" showCode={false} align="start">
            <div className="w-full -mx-8 -my-8">
              <Milestone />
            </div>
          </ComponentPreview>
        </div>
      </section>

      {/* Interactive Timelines */}
      <section className="space-y-12">
        <h2 className="text-3xl font-bold">Interactive Timelines</h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-semibold mb-2">Clickable</h3>
            <p className="text-muted-foreground">
              Accordion-style timeline with expand/collapse functionality. Click to reveal full details, one expanded at a time.
            </p>
          </div>
          <ComponentPreview title="Clickable Component" showCode={false} align="start">
            <div className="w-full -mx-8 -my-8">
              <Clickable />
            </div>
          </ComponentPreview>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-semibold mb-2">Animated</h3>
            <p className="text-muted-foreground">
              Scroll-triggered animations with fade in, stagger effects, and animated line drawing. Perfect for landing pages.
            </p>
          </div>
          <ComponentPreview title="Animated Component" showCode={false} align="start">
            <div className="w-full -mx-8 -my-8">
              <Animated />
            </div>
          </ComponentPreview>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-semibold mb-2">FilterableTimeline</h3>
            <p className="text-muted-foreground">
              Category filter buttons with smooth transitions. Filter by Development, Design, Marketing, or show all.
            </p>
          </div>
          <ComponentPreview title="FilterableTimeline Component" showCode={false} align="start">
            <div className="w-full -mx-8 -my-8">
              <FilterableTimeline />
            </div>
          </ComponentPreview>
        </div>
      </section>

      {/* Visual Variants */}
      <section className="space-y-12">
        <h2 className="text-3xl font-bold">Visual Variants</h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-semibold mb-2">IconTimeline</h3>
            <p className="text-muted-foreground">
              Icons for each event in colored circle backgrounds. Visual cues make events scannable and memorable.
            </p>
          </div>
          <ComponentPreview title="IconTimeline Component" showCode={false} align="start">
            <div className="w-full -mx-8 -my-8">
              <IconTimeline />
            </div>
          </ComponentPreview>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-semibold mb-2">ImageTimeline</h3>
            <p className="text-muted-foreground">
              Event timeline with image thumbnails. Horizontal card layout perfect for event highlights and photo galleries.
            </p>
          </div>
          <ComponentPreview title="ImageTimeline Component" showCode={false} align="start">
            <div className="w-full -mx-8 -my-8">
              <ImageTimeline />
            </div>
          </ComponentPreview>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-semibold mb-2">CurvedConnector</h3>
            <p className="text-muted-foreground">
              Unique curved SVG paths between events. Organic, flowing feel with bezier curve animations.
            </p>
          </div>
          <ComponentPreview title="CurvedConnector Component" showCode={false} align="start">
            <div className="w-full -mx-8 -my-8">
              <CurvedConnector />
            </div>
          </ComponentPreview>
        </div>
      </section>

      {/* Data-Driven */}
      <section className="space-y-12">
        <h2 className="text-3xl font-bold">Data-Driven Timelines</h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-semibold mb-2">StatTimeline</h3>
            <p className="text-muted-foreground">
              Timeline with big metrics emphasis. Revenue, users, satisfaction scores with growth indicators.
            </p>
          </div>
          <ComponentPreview title="StatTimeline Component" showCode={false} align="start">
            <div className="w-full -mx-8 -my-8">
              <StatTimeline />
            </div>
          </ComponentPreview>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-semibold mb-2">Comparison</h3>
            <p className="text-muted-foreground">
              Side-by-side dual timeline for company comparisons. Shared time scale highlights differences.
            </p>
          </div>
          <ComponentPreview title="Comparison Component" showCode={false} align="start">
            <div className="w-full -mx-8 -my-8">
              <Comparison />
            </div>
          </ComponentPreview>
        </div>
      </section>

      {/* Implementation Notes */}
      <section className="bg-muted/50 rounded-xl p-8 border">
        <h2 className="text-2xl font-semibold mb-6">Implementation Guide</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold mb-2">Usage</h3>
            <p className="text-sm text-muted-foreground mb-3">
              All timeline components accept an optional events array prop. If not provided, they use default sample data.
            </p>
            <div className="bg-background rounded-lg p-4 font-mono text-sm">
              <code>{`import { VerticalSimple } from '@/components/timelines/VerticalSimple';

const myEvents = [
  { date: 'Jan 2024', title: 'Project Start', description: 'Kickoff meeting' },
  { date: 'Feb 2024', title: 'MVP Launch', description: 'First release' },
];

<VerticalSimple events={myEvents} />`}</code>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Responsive Design</h3>
            <p className="text-sm text-muted-foreground">
              All components are mobile-first responsive. Horizontal layouts become vertical on mobile. Cards stack appropriately.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Animation Performance</h3>
            <p className="text-sm text-muted-foreground">
              Scroll-triggered animations use Intersection Observer via Framer Motion&apos;s useInView hook. GPU-accelerated transforms ensure smooth 60fps performance.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Customization</h3>
            <p className="text-sm text-muted-foreground">
              Pass className prop for additional styling. Modify default events data directly in component files for permanent changes.
            </p>
          </div>
        </div>
      </section>

      {/* Selection Guide */}
      <section className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 rounded-xl p-8 border border-blue-200 dark:border-blue-900">
        <h2 className="text-2xl font-semibold mb-6 text-blue-900 dark:text-blue-100">
          Which Timeline Should I Use?
        </h2>
        <div className="grid md:grid-cols-2 gap-6 text-sm">
          <div className="space-y-3">
            <h3 className="font-semibold text-blue-800 dark:text-blue-200">For Simple Chronologies</h3>
            <ul className="space-y-2 text-blue-900 dark:text-blue-100">
              <li>• <strong>VerticalSimple:</strong> Basic events list</li>
              <li>• <strong>MinimalText:</strong> Text-only, ultra clean</li>
              <li>• <strong>IconTimeline:</strong> Add visual icons</li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="font-semibold text-blue-800 dark:text-blue-200">For Product/Project Work</h3>
            <ul className="space-y-2 text-blue-900 dark:text-blue-100">
              <li>• <strong>Roadmap:</strong> Quarterly planning</li>
              <li>• <strong>ProgressTracker:</strong> Workflow steps</li>
              <li>• <strong>HorizontalCards:</strong> Sprint timelines</li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="font-semibold text-blue-800 dark:text-blue-200">For Storytelling</h3>
            <ul className="space-y-2 text-blue-900 dark:text-blue-100">
              <li>• <strong>Alternating:</strong> Visual balance</li>
              <li>• <strong>ImageTimeline:</strong> Photo galleries</li>
              <li>• <strong>HistoryTimeline:</strong> Company history</li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="font-semibold text-blue-800 dark:text-blue-200">For Interactive Pages</h3>
            <ul className="space-y-2 text-blue-900 dark:text-blue-100">
              <li>• <strong>Clickable:</strong> Detailed info on demand</li>
              <li>• <strong>FilterableTimeline:</strong> Multi-category</li>
              <li>• <strong>Animated:</strong> Landing page flair</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
