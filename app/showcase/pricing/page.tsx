import { PageHeader } from "@/components/showcase/page-header";
import { ComponentPreview } from "@/components/showcase/component-preview";
import { SimplePricing } from "@/components/pricing/SimplePricing";
import { ComparisonTable } from "@/components/pricing/ComparisonTable";
import { TogglePricing } from "@/components/pricing/TogglePricing";
import { TieredPricing } from "@/components/pricing/TieredPricing";
import { FreemiumPricing } from "@/components/pricing/FreemiumPricing";
import { EnterpriseFocus } from "@/components/pricing/EnterpriseFocus";
import { FeatureRichPricing } from "@/components/pricing/FeatureRichPricing";
import { MinimalPricing } from "@/components/pricing/MinimalPricing";

export default function PricingShowcase() {
  return (
    <div className="space-y-16">
      <PageHeader
        title="Pricing Components"
        description="Beautiful, conversion-optimized pricing components for every use case. From simple 3-tier layouts to complex usage-based calculators. Built with pure Tailwind CSS and Framer Motion."
        badge="8 Variants"
        badgeVariant="default"
      />

      {/* Comparison Table */}
      <section className="bg-muted/50 rounded-xl p-8 border">
        <h2 className="text-2xl font-semibold mb-6">Choose the Right Pricing Layout</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4 font-semibold">Component</th>
                <th className="text-left py-3 px-4 font-semibold">Best For</th>
                <th className="text-left py-3 px-4 font-semibold">Key Features</th>
                <th className="text-left py-3 px-4 font-semibold">Conversion Focus</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              <tr>
                <td className="py-3 px-4 font-medium">SimplePricing</td>
                <td className="py-3 px-4">SaaS, subscription services</td>
                <td className="py-3 px-4">3-tier cards, hover effects, Most Popular badge</td>
                <td className="py-3 px-4">Clear CTA hierarchy, social proof</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">ComparisonTable</td>
                <td className="py-3 px-4">Feature-rich products, B2B</td>
                <td className="py-3 px-4">Expandable categories, sticky header, matrix view</td>
                <td className="py-3 px-4">Feature comparison, upgrade justification</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">TogglePricing</td>
                <td className="py-3 px-4">Annual upsell, billing flexibility</td>
                <td className="py-3 px-4">Monthly/annual toggle, savings display, animations</td>
                <td className="py-3 px-4">17% savings highlight, urgency</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">TieredPricing</td>
                <td className="py-3 px-4">APIs, usage-based products</td>
                <td className="py-3 px-4">Interactive sliders, real-time calculation, meters</td>
                <td className="py-3 px-4">Pay-as-you-grow, transparent pricing</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">FreemiumPricing</td>
                <td className="py-3 px-4">Free tier products, PLG strategy</td>
                <td className="py-3 px-4">Emphasized free plan, upgrade path, FAQ</td>
                <td className="py-3 px-4">No barriers, trust indicators, upgrade benefits</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">EnterpriseFocus</td>
                <td className="py-3 px-4">B2B, custom pricing, sales-led</td>
                <td className="py-3 px-4">Contact form modal, logo carousel, volume discounts</td>
                <td className="py-3 px-4">Multiple contact points, enterprise features</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">FeatureRichPricing</td>
                <td className="py-3 px-4">Complex products, 4+ tiers</td>
                <td className="py-3 px-4">Categorized features, tooltips, 4-tier layout</td>
                <td className="py-3 px-4">Overwhelming value, education focus</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">MinimalPricing</td>
                <td className="py-3 px-4">Simple products, 1-2 tiers</td>
                <td className="py-3 px-4">Large typography, whitespace, subtle animations</td>
                <td className="py-3 px-4">Clarity over features, trust-building</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Best Practices Section */}
      <section className="bg-blue-50 dark:bg-blue-950/20 rounded-xl p-8 border border-blue-200 dark:border-blue-900">
        <h2 className="text-2xl font-semibold mb-6 text-blue-900 dark:text-blue-100">
          Conversion Optimization Best Practices
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold mb-3 text-blue-800 dark:text-blue-200">Visual Hierarchy</h3>
            <ul className="space-y-2 text-sm text-blue-900 dark:text-blue-100">
              <li>• Use &quot;Most Popular&quot; badges to guide users</li>
              <li>• Emphasize recommended tier with size, color, or position</li>
              <li>• Make CTAs action-oriented (&quot;Start Free Trial&quot; vs &quot;Sign Up&quot;)</li>
              <li>• Show annual savings prominently (17-20% typical)</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3 text-blue-800 dark:text-blue-200">Trust & Social Proof</h3>
            <ul className="space-y-2 text-sm text-blue-900 dark:text-blue-100">
              <li>• Add user counts (&quot;Join 10,000+ users&quot;)</li>
              <li>• Include money-back guarantees</li>
              <li>• Show &quot;No credit card required&quot; for trials</li>
              <li>• Display customer logos or testimonials</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3 text-blue-800 dark:text-blue-200">Feature Communication</h3>
            <ul className="space-y-2 text-sm text-blue-900 dark:text-blue-100">
              <li>• List features in order of importance</li>
              <li>• Use icons for visual scanning</li>
              <li>• Show what&apos;s excluded (strikethrough or X marks)</li>
              <li>• Add tooltips for complex features</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3 text-blue-800 dark:text-blue-200">Psychological Triggers</h3>
            <ul className="space-y-2 text-sm text-blue-900 dark:text-blue-100">
              <li>• Create urgency (&quot;Limited time: Save 20%&quot;)</li>
              <li>• Anchor pricing (show highest tier first)</li>
              <li>• Use charm pricing ($29 vs $30)</li>
              <li>• Highlight savings in dollars, not just percentages</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Standard Layouts */}
      <section className="space-y-12">
        <h2 className="text-3xl font-bold">Standard Pricing Layouts</h2>

        {/* Simple Pricing */}
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-semibold mb-2">SimplePricing</h3>
            <p className="text-muted-foreground">
              Classic 3-tier pricing layout with card-based design. Perfect for SaaS products with clear feature differentiation.
              Includes hover animations, Most Popular badge, and trust indicators.
            </p>
          </div>
          <ComponentPreview title="SimplePricing Component" showCode={false} align="start">
            <div className="w-full -mx-8 -my-8">
              <SimplePricing />
            </div>
          </ComponentPreview>
        </div>

        {/* Toggle Pricing */}
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-semibold mb-2">TogglePricing</h3>
            <p className="text-muted-foreground">
              Interactive monthly/annual billing toggle with savings display. Encourages annual commitments by highlighting
              17% savings. Features smooth Framer Motion transitions on price changes.
            </p>
          </div>
          <ComponentPreview title="TogglePricing Component" showCode={false} align="start">
            <div className="w-full -mx-8 -my-8">
              <TogglePricing />
            </div>
          </ComponentPreview>
        </div>

        {/* Minimal Pricing */}
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-semibold mb-2">MinimalPricing</h3>
            <p className="text-muted-foreground">
              Ultra-clean two-tier layout emphasizing clarity over features. Large typography, generous whitespace, and
              subtle animations. Ideal for simple products or landing pages focused on conversion.
            </p>
          </div>
          <ComponentPreview title="MinimalPricing Component" showCode={false} align="start">
            <div className="w-full -mx-8 -my-8">
              <MinimalPricing />
            </div>
          </ComponentPreview>
        </div>
      </section>

      {/* Advanced Layouts */}
      <section className="space-y-12">
        <h2 className="text-3xl font-bold">Advanced Pricing Layouts</h2>

        {/* Comparison Table */}
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-semibold mb-2">ComparisonTable</h3>
            <p className="text-muted-foreground">
              Comprehensive feature comparison matrix with expandable categories. Shows detailed feature availability across
              tiers with checkmarks, X marks, and text values. Responsive: table on desktop, cards on mobile.
            </p>
          </div>
          <ComponentPreview title="ComparisonTable Component" showCode={false} align="start">
            <div className="w-full -mx-8 -my-8">
              <ComparisonTable />
            </div>
          </ComponentPreview>
        </div>

        {/* Tiered Pricing */}
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-semibold mb-2">TieredPricing</h3>
            <p className="text-muted-foreground">
              Usage-based pricing calculator with interactive sliders. Users can adjust team members (1-1000) and API calls
              (0-1M) to see real-time pricing. Features visual progress meters and tier progression display.
            </p>
          </div>
          <ComponentPreview title="TieredPricing Component" showCode={false} align="start">
            <div className="w-full -mx-8 -my-8">
              <TieredPricing />
            </div>
          </ComponentPreview>
        </div>

        {/* Feature Rich Pricing */}
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-semibold mb-2">FeatureRichPricing</h3>
            <p className="text-muted-foreground">
              Comprehensive 4-tier pricing with categorized features and tooltips. 40+ features organized into 6 categories
              (Core, Mobile, Integrations, Security, Support). Expandable sections prevent information overload.
            </p>
          </div>
          <ComponentPreview title="FeatureRichPricing Component" showCode={false} align="start">
            <div className="w-full -mx-8 -my-8">
              <FeatureRichPricing />
            </div>
          </ComponentPreview>
        </div>
      </section>

      {/* Specialized Layouts */}
      <section className="space-y-12">
        <h2 className="text-3xl font-bold">Specialized Pricing Layouts</h2>

        {/* Freemium Pricing */}
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-semibold mb-2">FreemiumPricing</h3>
            <p className="text-muted-foreground">
              Free tier emphasis with upgrade path visualization. Designed for PLG (Product-Led Growth) strategy. Features
              prominent free plan, trust indicators, FAQ section, and step-by-step upgrade journey.
            </p>
          </div>
          <ComponentPreview title="FreemiumPricing Component" showCode={false} align="start">
            <div className="w-full -mx-8 -my-8">
              <FreemiumPricing />
            </div>
          </ComponentPreview>
        </div>

        {/* Enterprise Focus */}
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-semibold mb-2">EnterpriseFocus</h3>
            <p className="text-muted-foreground">
              Enterprise tier emphasis with contact sales modal. Features custom pricing messaging, volume discounts,
              customer logo carousel, and multiple contact touchpoints. Includes full contact form with validation.
            </p>
          </div>
          <ComponentPreview title="EnterpriseFocus Component" showCode={false} align="start">
            <div className="w-full -mx-8 -my-8">
              <EnterpriseFocus />
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
              All components accept a className prop for additional styling. Pricing data is hardcoded but can be easily
              replaced with API data or CMS content.
            </p>
            <div className="bg-background rounded-lg p-4 font-mono text-sm">
              <code>{`import { SimplePricing } from '@/components/pricing/SimplePricing';

export default function PricingPage() {
  return <SimplePricing className="my-custom-class" />;
}`}</code>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Responsive Design</h3>
            <p className="text-sm text-muted-foreground">
              All components use mobile-first responsive design. Cards stack on mobile and use grid layouts on desktop.
              ComparisonTable transforms from table to cards on mobile for better UX.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Animation Performance</h3>
            <p className="text-sm text-muted-foreground">
              Framer Motion animations use GPU-accelerated properties (transform, opacity) for 60fps performance.
              Stagger animations create professional entrance effects without impacting load time.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Accessibility</h3>
            <p className="text-sm text-muted-foreground">
              All components include ARIA labels, semantic HTML, keyboard navigation, and high contrast ratios.
              Interactive elements have proper focus states and screen reader support.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Dependencies</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Components use only Tailwind CSS and Framer Motion. Icons from lucide-react. No shadcn/ui or other UI libraries required.
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
          A/B Testing & Optimization Tips
        </h2>
        <div className="grid md:grid-cols-2 gap-6 text-sm">
          <div className="space-y-3">
            <h3 className="font-semibold text-purple-800 dark:text-purple-200">Test These Elements:</h3>
            <ul className="space-y-2 text-purple-900 dark:text-purple-100">
              <li>• CTA copy (&quot;Start Free Trial&quot; vs &quot;Get Started Free&quot;)</li>
              <li>• Badge text (&quot;Most Popular&quot; vs &quot;Best Value&quot;)</li>
              <li>• Annual toggle default (monthly vs annual selected)</li>
              <li>• Feature list order (benefits-first vs features-first)</li>
              <li>• Price anchoring (show highest or lowest tier first)</li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="font-semibold text-purple-800 dark:text-purple-200">Conversion Metrics to Track:</h3>
            <ul className="space-y-2 text-purple-900 dark:text-purple-100">
              <li>• Click-through rate on CTA buttons</li>
              <li>• Annual vs monthly plan selection ratio</li>
              <li>• Time spent on pricing page</li>
              <li>• Tier selection distribution</li>
              <li>• Scroll depth and engagement with features</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
