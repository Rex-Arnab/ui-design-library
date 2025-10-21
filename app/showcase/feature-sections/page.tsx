import { PageHeader } from "@/components/showcase/page-header";
import { ComponentPreview } from "@/components/showcase/component-preview";
import { CardGrid } from "@/components/feature-sections/CardGrid";
import { ImageFeatures } from "@/components/feature-sections/ImageFeatures";
import { DescriptionImage } from "@/components/feature-sections/DescriptionImage";
import { CTAFocused } from "@/components/feature-sections/CTAFocused";
import { GradientAccent } from "@/components/feature-sections/GradientAccent";
import { IconList } from "@/components/feature-sections/IconList";
import { Timeline } from "@/components/feature-sections/Timeline";
import { Comparison } from "@/components/feature-sections/Comparison";
import { NumberedSteps } from "@/components/feature-sections/NumberedSteps";
import { Bento } from "@/components/feature-sections/Bento";
import { Spotlight } from "@/components/feature-sections/Spotlight";
import { TabSwitcher } from "@/components/feature-sections/TabSwitcher";
import { Minimal } from "@/components/feature-sections/Minimal";
import { Stats } from "@/components/feature-sections/Stats";
import { Testimonial } from "@/components/feature-sections/Testimonial";

export default function FeatureSectionsShowcase() {
  return (
    <div className="space-y-16">
      <PageHeader
        title="Feature Section Components"
        description="Professional, conversion-optimized feature sections for every use case. From minimal text-only layouts to rich testimonial grids. Built with pure Tailwind CSS and Framer Motion."
        badge="15 Variants"
        badgeVariant="default"
      />

      {/* Comparison Table */}
      <section className="bg-muted/50 rounded-xl p-8 border">
        <h2 className="text-2xl font-semibold mb-6">Choose the Right Feature Layout</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4 font-semibold">Component</th>
                <th className="text-left py-3 px-4 font-semibold">Best For</th>
                <th className="text-left py-3 px-4 font-semibold">Visual Style</th>
                <th className="text-left py-3 px-4 font-semibold">Use Case</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              <tr>
                <td className="py-3 px-4 font-medium">CardGrid</td>
                <td className="py-3 px-4">SaaS products, general features</td>
                <td className="py-3 px-4">3-column icon cards, equal weight</td>
                <td className="py-3 px-4">Showcasing 6-8 core features</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">ImageFeatures</td>
                <td className="py-3 px-4">Product demos, visual features</td>
                <td className="py-3 px-4">Images + text, alternating</td>
                <td className="py-3 px-4">Features with visual proof</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">DescriptionImage</td>
                <td className="py-3 px-4">In-depth explanations</td>
                <td className="py-3 px-4">Zigzag text-image layout</td>
                <td className="py-3 px-4">Detailed feature breakdowns</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">CTAFocused</td>
                <td className="py-3 px-4">Conversion-driven pages</td>
                <td className="py-3 px-4">Cards with dual CTAs</td>
                <td className="py-3 px-4">Multiple conversion touchpoints</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">GradientAccent</td>
                <td className="py-3 px-4">Modern, premium products</td>
                <td className="py-3 px-4">Subtle gradient backgrounds</td>
                <td className="py-3 px-4">Contemporary aesthetic</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">IconList</td>
                <td className="py-3 px-4">Comprehensive feature lists</td>
                <td className="py-3 px-4">Minimal two-column list</td>
                <td className="py-3 px-4">10+ features, scannable</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">Timeline</td>
                <td className="py-3 px-4">Process flows, roadmaps</td>
                <td className="py-3 px-4">Vertical timeline with steps</td>
                <td className="py-3 px-4">Sequential progression</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">Comparison</td>
                <td className="py-3 px-4">Upgrade justification, tiers</td>
                <td className="py-3 px-4">Before/After side-by-side</td>
                <td className="py-3 px-4">Feature differentiation</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">NumberedSteps</td>
                <td className="py-3 px-4">&quot;How it works&quot; sections</td>
                <td className="py-3 px-4">Large numbers (01, 02, 03)</td>
                <td className="py-3 px-4">Step-by-step processes</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">Bento</td>
                <td className="py-3 px-4">Modern landing pages</td>
                <td className="py-3 px-4">Asymmetric grid layout</td>
                <td className="py-3 px-4">Dynamic, visual variety</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">Spotlight</td>
                <td className="py-3 px-4">Primary value prop emphasis</td>
                <td className="py-3 px-4">1 large + 3 small cards</td>
                <td className="py-3 px-4">Hero feature with support</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">TabSwitcher</td>
                <td className="py-3 px-4">Multiple user personas</td>
                <td className="py-3 px-4">Tabbed feature categories</td>
                <td className="py-3 px-4">Developers, Teams, Enterprise</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">Minimal</td>
                <td className="py-3 px-4">Simple products, clarity-first</td>
                <td className="py-3 px-4">Text-only, max whitespace</td>
                <td className="py-3 px-4">Clean messaging</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">Stats</td>
                <td className="py-3 px-4">Data-driven products</td>
                <td className="py-3 px-4">Big numbers, animated</td>
                <td className="py-3 px-4">Metrics, social proof</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">Testimonial</td>
                <td className="py-3 px-4">Trust-building, validation</td>
                <td className="py-3 px-4">Feature + customer quote</td>
                <td className="py-3 px-4">Customer success stories</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Design Guidelines */}
      <section className="bg-blue-50 dark:bg-blue-950/20 rounded-xl p-8 border border-blue-200 dark:border-blue-900">
        <h2 className="text-2xl font-semibold mb-6 text-blue-900 dark:text-blue-100">
          Design Principles
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold mb-3 text-blue-800 dark:text-blue-200">Typography Hierarchy</h3>
            <ul className="space-y-2 text-sm text-blue-900 dark:text-blue-100">
              <li>• Section headings: text-2xl to text-3xl, font-bold</li>
              <li>• Feature titles: text-base to text-lg, font-semibold</li>
              <li>• Descriptions: text-sm to text-base</li>
              <li>• Small text: text-xs for metadata</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3 text-blue-800 dark:text-blue-200">Visual Balance</h3>
            <ul className="space-y-2 text-sm text-blue-900 dark:text-blue-100">
              <li>• Generous whitespace (py-16 to py-24 sections)</li>
              <li>• Consistent icon sizes (w-5 h-5 to w-8 h-8)</li>
              <li>• Grid gaps: gap-6 to gap-8</li>
              <li>• Card padding: p-6 to p-8</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3 text-blue-800 dark:text-blue-200">Color Usage</h3>
            <ul className="space-y-2 text-sm text-blue-900 dark:text-blue-100">
              <li>• Primary: blue-600, purple-600, indigo-600</li>
              <li>• Accents: green-500, orange-500 sparingly</li>
              <li>• Neutral: gray-50 to gray-900</li>
              <li>• Dark mode: muted colors, darker grays</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3 text-blue-800 dark:text-blue-200">Animation Timing</h3>
            <ul className="space-y-2 text-sm text-blue-900 dark:text-blue-100">
              <li>• Fade in: 0.5-0.6s duration</li>
              <li>• Stagger delay: 0.1s between items</li>
              <li>• Hover: 0.3s transition</li>
              <li>• Scroll-triggered: viewport threshold 0.2</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Classic Layouts */}
      <section className="space-y-12">
        <h2 className="text-3xl font-bold">Classic Layouts</h2>

        {/* CardGrid */}
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-semibold mb-2">CardGrid</h3>
            <p className="text-muted-foreground">
              Classic 3-column grid with icon cards. Perfect for showcasing 6-8 core features with equal visual weight.
              Features color-coded icons, hover lift effects, and stagger animations.
            </p>
          </div>
          <ComponentPreview title="CardGrid Component" showCode={false} align="start">
            <div className="w-full -mx-8 -my-8">
              <CardGrid />
            </div>
          </ComponentPreview>
        </div>

        {/* IconList */}
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-semibold mb-2">IconList</h3>
            <p className="text-muted-foreground">
              Minimal two-column list with small icons. Text-focused, scannable design perfect for comprehensive
              feature lists (10+ items). No cards or borders—just clean rows.
            </p>
          </div>
          <ComponentPreview title="IconList Component" showCode={false} align="start">
            <div className="w-full -mx-8 -my-8">
              <IconList />
            </div>
          </ComponentPreview>
        </div>

        {/* Minimal */}
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-semibold mb-2">Minimal</h3>
            <p className="text-muted-foreground">
              Ultra-clean text-only design with maximum whitespace. Focus on clarity over decoration—perfect for
              simple product messaging with large typography and generous negative space.
            </p>
          </div>
          <ComponentPreview title="Minimal Component" showCode={false} align="start">
            <div className="w-full -mx-8 -my-8">
              <Minimal />
            </div>
          </ComponentPreview>
        </div>
      </section>

      {/* Visual-Rich Layouts */}
      <section className="space-y-12">
        <h2 className="text-3xl font-bold">Visual-Rich Layouts</h2>

        {/* ImageFeatures */}
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-semibold mb-2">ImageFeatures</h3>
            <p className="text-muted-foreground">
              Features paired with image placeholders in alternating layout. Includes benefit lists with checkmarks
              and scroll-triggered animations. Ideal for product features with visual demonstrations.
            </p>
          </div>
          <ComponentPreview title="ImageFeatures Component" showCode={false} align="start">
            <div className="w-full -mx-8 -my-8">
              <ImageFeatures />
            </div>
          </ComponentPreview>
        </div>

        {/* DescriptionImage */}
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-semibold mb-2">DescriptionImage</h3>
            <p className="text-muted-foreground">
              Zigzag alternating text-image layout with large sections per feature. Features badge labels, generous
              spacing, and CTA buttons per section. Best for in-depth feature explanations.
            </p>
          </div>
          <ComponentPreview title="DescriptionImage Component" showCode={false} align="start">
            <div className="w-full -mx-8 -my-8">
              <DescriptionImage />
            </div>
          </ComponentPreview>
        </div>

        {/* Bento */}
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-semibold mb-2">Bento</h3>
            <p className="text-muted-foreground">
              Modern bento box grid with asymmetric layout using CSS Grid. Some cards span multiple columns/rows
              creating dynamic visual variety. Mix of icon cards, text cards, and gradient accents.
            </p>
          </div>
          <ComponentPreview title="Bento Component" showCode={false} align="start">
            <div className="w-full -mx-8 -my-8">
              <Bento />
            </div>
          </ComponentPreview>
        </div>

        {/* GradientAccent */}
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-semibold mb-2">GradientAccent</h3>
            <p className="text-muted-foreground">
              Features with subtle gradient backgrounds and border effects on hover. Tasteful blue-purple color schemes
              with muted dark mode gradients. Modern aesthetic without overwhelming design.
            </p>
          </div>
          <ComponentPreview title="GradientAccent Component" showCode={false} align="start">
            <div className="w-full -mx-8 -my-8">
              <GradientAccent />
            </div>
          </ComponentPreview>
        </div>
      </section>

      {/* Interactive Layouts */}
      <section className="space-y-12">
        <h2 className="text-3xl font-bold">Interactive Layouts</h2>

        {/* TabSwitcher */}
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-semibold mb-2">TabSwitcher</h3>
            <p className="text-muted-foreground">
              Tabbed feature sections with AnimatePresence for smooth transitions. Perfect for multiple user personas
              (Developers, Designers, Teams, Enterprise). Includes keyboard navigation support.
            </p>
          </div>
          <ComponentPreview title="TabSwitcher Component" showCode={false} align="start">
            <div className="w-full -mx-8 -my-8">
              <TabSwitcher />
            </div>
          </ComponentPreview>
        </div>

        {/* CTAFocused */}
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-semibold mb-2">CTAFocused</h3>
            <p className="text-muted-foreground">
              Feature cards with dual CTAs (primary + secondary). Action-oriented buttons like &quot;Get Started&quot;
              and &quot;Watch Demo&quot;. Optimized for conversion with multiple touchpoints.
            </p>
          </div>
          <ComponentPreview title="CTAFocused Component" showCode={false} align="start">
            <div className="w-full -mx-8 -my-8">
              <CTAFocused />
            </div>
          </ComponentPreview>
        </div>

        {/* Spotlight */}
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-semibold mb-2">Spotlight</h3>
            <p className="text-muted-foreground">
              One large hero feature card with 3 smaller supporting features. Main feature includes stats display
              and gradient glow effects. Clear visual hierarchy emphasizing main value proposition.
            </p>
          </div>
          <ComponentPreview title="Spotlight Component" showCode={false} align="start">
            <div className="w-full -mx-8 -my-8">
              <Spotlight />
            </div>
          </ComponentPreview>
        </div>
      </section>

      {/* Process & Timeline Layouts */}
      <section className="space-y-12">
        <h2 className="text-3xl font-bold">Process & Timeline Layouts</h2>

        {/* NumberedSteps */}
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-semibold mb-2">NumberedSteps</h3>
            <p className="text-muted-foreground">
              Numbered process steps with large numbers (01, 02, 03...). Supports both horizontal and vertical layouts.
              Features arrow connectors and gradient number backgrounds. Perfect for &quot;How it works&quot; sections.
            </p>
          </div>
          <ComponentPreview title="NumberedSteps Component" showCode={false} align="start">
            <div className="w-full -mx-8 -my-8">
              <NumberedSteps />
            </div>
          </ComponentPreview>
        </div>

        {/* Timeline */}
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-semibold mb-2">Timeline</h3>
            <p className="text-muted-foreground">
              Vertical timeline with connector line and circle markers. Shows progression through numbered steps
              with completed/incomplete states. Includes scroll-triggered animations.
            </p>
          </div>
          <ComponentPreview title="Timeline Component" showCode={false} align="start">
            <div className="w-full -mx-8 -my-8">
              <Timeline />
            </div>
          </ComponentPreview>
        </div>
      </section>

      {/* Comparison & Social Proof */}
      <section className="space-y-12">
        <h2 className="text-3xl font-bold">Comparison & Social Proof</h2>

        {/* Comparison */}
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-semibold mb-2">Comparison</h3>
            <p className="text-muted-foreground">
              Before/After or Basic vs Pro comparison table. Side-by-side feature comparison with checkmarks,
              X marks, and text values. Highlights differences clearly with responsive transformation on mobile.
            </p>
          </div>
          <ComponentPreview title="Comparison Component" showCode={false} align="start">
            <div className="w-full -mx-8 -my-8">
              <Comparison />
            </div>
          </ComponentPreview>
        </div>

        {/* Stats */}
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-semibold mb-2">Stats</h3>
            <p className="text-muted-foreground">
              Features with big numbers and animated count-up effect. Uses scroll-triggered animations to display
              metrics like &quot;10M+ Users&quot;, &quot;99.99% Uptime&quot;. Data-driven social proof.
            </p>
          </div>
          <ComponentPreview title="Stats Component" showCode={false} align="start">
            <div className="w-full -mx-8 -my-8">
              <Stats />
            </div>
          </ComponentPreview>
        </div>

        {/* Testimonial */}
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-semibold mb-2">Testimonial</h3>
            <p className="text-muted-foreground">
              Features paired with customer testimonials. Alternating layout with feature description on one side,
              customer quote card on other. Includes avatars and credentials for trust-building.
            </p>
          </div>
          <ComponentPreview title="Testimonial Component" showCode={false} align="start">
            <div className="w-full -mx-8 -my-8">
              <Testimonial />
            </div>
          </ComponentPreview>
        </div>
      </section>

      {/* Implementation Notes */}
      <section className="bg-muted/50 rounded-xl p-8 border">
        <h2 className="text-2xl font-semibold mb-6">Implementation Notes</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold mb-2">Customization</h3>
            <p className="text-sm text-muted-foreground mb-3">
              All components accept a className prop for additional styling. Feature data is hardcoded but can be
              easily replaced with CMS or API data.
            </p>
            <div className="bg-background rounded-lg p-4 font-mono text-sm">
              <code>{`import { CardGrid } from '@/components/feature-sections/CardGrid';

export default function FeaturesPage() {
  return <CardGrid className="my-custom-class" />;
}`}</code>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Responsive Behavior</h3>
            <p className="text-sm text-muted-foreground">
              All components use mobile-first responsive design. Grids collapse to single column on mobile,
              expand to 2-3 columns on tablets, and full width on desktop. Images and text stack appropriately.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Animation Performance</h3>
            <p className="text-sm text-muted-foreground">
              Framer Motion animations use GPU-accelerated properties (transform, opacity). Scroll-triggered
              animations use Intersection Observer for optimal performance. Stats component includes count-up
              animation triggered on viewport entry.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Accessibility</h3>
            <p className="text-sm text-muted-foreground">
              Components use semantic HTML (section, h2, h3, ul, li), proper heading hierarchy, ARIA labels
              where needed, and keyboard navigation for interactive elements like tabs.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Dependencies</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Components use only Tailwind CSS and Framer Motion. Icons from lucide-react. No shadcn/ui required.
            </p>
            <div className="bg-background rounded-lg p-4 font-mono text-sm">
              <code>{`"dependencies": {
  "framer-motion": "^12.23.24",
  "lucide-react": "latest"
}`}</code>
            </div>
          </div>
        </div>
      </section>

      {/* Usage Tips */}
      <section className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 rounded-xl p-8 border border-purple-200 dark:border-purple-900">
        <h2 className="text-2xl font-semibold mb-6 text-purple-900 dark:text-purple-100">
          Component Selection Guide
        </h2>
        <div className="grid md:grid-cols-2 gap-6 text-sm">
          <div className="space-y-3">
            <h3 className="font-semibold text-purple-800 dark:text-purple-200">When to Use Grid Layouts</h3>
            <ul className="space-y-2 text-purple-900 dark:text-purple-100">
              <li>• <strong>CardGrid:</strong> 6-8 features, equal importance</li>
              <li>• <strong>IconList:</strong> 10+ features, scannable lists</li>
              <li>• <strong>Bento:</strong> Visual variety, modern aesthetic</li>
              <li>• <strong>GradientAccent:</strong> Premium products, contemporary</li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="font-semibold text-purple-800 dark:text-purple-200">When to Use Image-Heavy</h3>
            <ul className="space-y-2 text-purple-900 dark:text-purple-100">
              <li>• <strong>ImageFeatures:</strong> Product screenshots, demos</li>
              <li>• <strong>DescriptionImage:</strong> In-depth explanations</li>
              <li>• <strong>Spotlight:</strong> One hero feature emphasized</li>
              <li>• <strong>Testimonial:</strong> Social proof with faces</li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="font-semibold text-purple-800 dark:text-purple-200">When to Use Interactive</h3>
            <ul className="space-y-2 text-purple-900 dark:text-purple-100">
              <li>• <strong>TabSwitcher:</strong> Multiple personas/categories</li>
              <li>• <strong>CTAFocused:</strong> Conversion-driven pages</li>
              <li>• <strong>Stats:</strong> Data-driven products, metrics</li>
              <li>• <strong>Comparison:</strong> Tier justification</li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="font-semibold text-purple-800 dark:text-purple-200">When to Use Process Flows</h3>
            <ul className="space-y-2 text-purple-900 dark:text-purple-100">
              <li>• <strong>NumberedSteps:</strong> &quot;How it works&quot; sections</li>
              <li>• <strong>Timeline:</strong> Roadmaps, progression</li>
              <li>• <strong>Minimal:</strong> Simple products, clarity-first</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
