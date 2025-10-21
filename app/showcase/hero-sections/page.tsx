import { PageHeader } from "@/components/showcase/page-header";
import { ComponentPreview } from "@/components/showcase/component-preview";
import { TravelHero } from "@/components/hero-sections/TravelHero";
import { CybersecurityHero } from "@/components/hero-sections/CybersecurityHero";
import { LMSHero } from "@/components/hero-sections/LMSHero";
import { SingleMessageHero } from "@/components/hero-sections/SingleMessageHero";
import { MultiColumnHero } from "@/components/hero-sections/MultiColumnHero";
import { TwoColumnContentHero } from "@/components/hero-sections/TwoColumnContentHero";
import { CTAFocusedHero } from "@/components/hero-sections/CTAFocusedHero";
import { CodeFocusedHero } from "@/components/hero-sections/CodeFocusedHero";
import { SaaSProductHero } from "@/components/hero-sections/SaaSProductHero";
import { EcommerceHero } from "@/components/hero-sections/EcommerceHero";
import { PortfolioHero } from "@/components/hero-sections/PortfolioHero";
import { AgencyHero } from "@/components/hero-sections/AgencyHero";
import { FintechHero } from "@/components/hero-sections/FintechHero";
import { Web3Hero } from "@/components/hero-sections/Web3Hero";

export default function HeroSectionsPage() {
  return (
    <div className="space-y-16">
      <PageHeader
        title="Hero Section Examples"
        description="Production-ready hero sections for different use cases. Each hero is custom-built with Tailwind CSS, Framer Motion animations, and fully responsive designs. 14 unique designs to choose from."
        badge="14 Heroes"
        badgeVariant="default"
      />

      {/* Hero Comparison Table */}
      <section className="bg-muted/50 rounded-xl p-8 border">
        <h2 className="text-2xl font-semibold mb-6">Choose the Right Hero</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4 font-semibold">Hero Type</th>
                <th className="text-left py-3 px-4 font-semibold">Best For</th>
                <th className="text-left py-3 px-4 font-semibold">Key Features</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              <tr>
                <td className="py-3 px-4 font-medium">Travel</td>
                <td className="py-3 px-4">Travel websites, booking platforms</td>
                <td className="py-3 px-4">Search bar, destination badges, immersive imagery</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">Cybersecurity</td>
                <td className="py-3 px-4">Job boards, tech platforms, B2B SaaS</td>
                <td className="py-3 px-4">Professional dark theme, animated stats, trust badges</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">LMS</td>
                <td className="py-3 px-4">Learning platforms, course websites</td>
                <td className="py-3 px-4">Colorful design, course cards, progress indicators</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">Single Message</td>
                <td className="py-3 px-4">Product launches, landing pages, portfolios</td>
                <td className="py-3 px-4">Minimal design, powerful headline, focused CTA</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">Multi-Column</td>
                <td className="py-3 px-4">SaaS platforms, tech products</td>
                <td className="py-3 px-4">Split layout, feature highlights, visual mockups</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">Two-Column Content</td>
                <td className="py-3 px-4">Enterprise software, business tools</td>
                <td className="py-3 px-4">Feature grid, multiple CTAs, organized layout</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">CTA-Focused</td>
                <td className="py-3 px-4">Marketing campaigns, conversions</td>
                <td className="py-3 px-4">Urgency elements, social proof, multiple CTAs</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">Code-Focused</td>
                <td className="py-3 px-4">Developer tools, UI libraries, APIs</td>
                <td className="py-3 px-4">Code editor aesthetic, syntax highlighting, tech stack</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">SaaS Product</td>
                <td className="py-3 px-4">SaaS platforms, productivity tools</td>
                <td className="py-3 px-4">Clean layout, product mockup, feature highlights</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">E-commerce</td>
                <td className="py-3 px-4">Online stores, marketplaces</td>
                <td className="py-3 px-4">Product showcase, category grid, shop CTA</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">Portfolio</td>
                <td className="py-3 px-4">Creative professionals, freelancers</td>
                <td className="py-3 px-4">Project gallery, personal branding, work showcase</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">Agency</td>
                <td className="py-3 px-4">Design agencies, studios, consultancies</td>
                <td className="py-3 px-4">Bold typography, case studies, client logos</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">Fintech</td>
                <td className="py-3 px-4">Banking apps, financial services</td>
                <td className="py-3 px-4">Trust badges, security features, financial metrics</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">Web3/Crypto</td>
                <td className="py-3 px-4">NFT platforms, blockchain projects</td>
                <td className="py-3 px-4">Modern gradients, crypto aesthetic, wallet connect</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Travel Hero */}
      <section className="space-y-6">
        <div>
          <h2 className="text-3xl font-semibold mb-2">Travel Website Hero</h2>
          <p className="text-muted-foreground">
            Full-width hero with immersive background imagery, integrated search functionality, and floating destination badges.
            Perfect for travel booking platforms and tourism websites.
          </p>
        </div>
        <ComponentPreview
          title="Travel Hero"
          description="Large hero with search bar and adventure-focused design"
          showCode={false}
          align="start"
        >
          <div className="w-full -mx-8 -my-8">
            <TravelHero />
          </div>
        </ComponentPreview>
        <details className="bg-muted/50 rounded-lg p-6">
          <summary className="cursor-pointer font-semibold text-lg mb-4">View Implementation Code</summary>
          <div className="bg-slate-950 rounded-lg p-6 overflow-x-auto">
            <pre className="text-sm text-gray-300 font-mono">
{`import { TravelHero } from '@/components/hero-sections/TravelHero'

export default function Page() {
  return <TravelHero />
}`}
            </pre>
          </div>
        </details>
      </section>

      {/* Cybersecurity Hero */}
      <section className="space-y-6">
        <div>
          <h2 className="text-3xl font-semibold mb-2">Cybersecurity Job Board Hero</h2>
          <p className="text-muted-foreground">
            Professional dark-themed hero with animated grid background, job search interface, and real-time statistics counter.
            Ideal for tech job boards and B2B platforms.
          </p>
        </div>
        <ComponentPreview
          title="Cybersecurity Hero"
          description="Dark theme with animated stats and job listings"
          showCode={false}
          align="start"
        >
          <div className="w-full -mx-8 -my-8">
            <CybersecurityHero />
          </div>
        </ComponentPreview>
        <details className="bg-muted/50 rounded-lg p-6">
          <summary className="cursor-pointer font-semibold text-lg mb-4">View Implementation Code</summary>
          <div className="bg-slate-950 rounded-lg p-6 overflow-x-auto">
            <pre className="text-sm text-gray-300 font-mono">
{`import { CybersecurityHero } from '@/components/hero-sections/CybersecurityHero'

export default function Page() {
  return <CybersecurityHero />
}`}
            </pre>
          </div>
        </details>
      </section>

      {/* LMS Hero */}
      <section className="space-y-6">
        <div>
          <h2 className="text-3xl font-semibold mb-2">Learning Platform Hero</h2>
          <p className="text-muted-foreground">
            Friendly, colorful design with featured course cards, progress indicators, and achievement badges.
            Perfect for online learning platforms and educational websites.
          </p>
        </div>
        <ComponentPreview
          title="LMS Hero"
          description="Educational design with course cards and progress tracking"
          showCode={false}
          align="start"
        >
          <div className="w-full -mx-8 -my-8">
            <LMSHero />
          </div>
        </ComponentPreview>
        <details className="bg-muted/50 rounded-lg p-6">
          <summary className="cursor-pointer font-semibold text-lg mb-4">View Implementation Code</summary>
          <div className="bg-slate-950 rounded-lg p-6 overflow-x-auto">
            <pre className="text-sm text-gray-300 font-mono">
{`import { LMSHero } from '@/components/hero-sections/LMSHero'

export default function Page() {
  return <LMSHero />
}`}
            </pre>
          </div>
        </details>
      </section>

      {/* Single Message Hero */}
      <section className="space-y-6">
        <div>
          <h2 className="text-3xl font-semibold mb-2">Single Message Hero</h2>
          <p className="text-muted-foreground">
            Ultra-minimal, zen-like design with one powerful headline and generous whitespace.
            Ideal for product launches, portfolios, and focused landing pages.
          </p>
        </div>
        <ComponentPreview
          title="Single Message Hero"
          description="Minimal design with powerful typography and single CTA"
          showCode={false}
          align="start"
        >
          <div className="w-full -mx-8 -my-8">
            <SingleMessageHero />
          </div>
        </ComponentPreview>
        <details className="bg-muted/50 rounded-lg p-6">
          <summary className="cursor-pointer font-semibold text-lg mb-4">View Implementation Code</summary>
          <div className="bg-slate-950 rounded-lg p-6 overflow-x-auto">
            <pre className="text-sm text-gray-300 font-mono">
{`import { SingleMessageHero } from '@/components/hero-sections/SingleMessageHero'

export default function Page() {
  return <SingleMessageHero />
}`}
            </pre>
          </div>
        </details>
      </section>

      {/* Multi-Column Hero */}
      <section className="space-y-6">
        <div>
          <h2 className="text-3xl font-semibold mb-2">Multi-Column Split Hero</h2>
          <p className="text-muted-foreground">
            Asymmetric 60/40 split layout with content on the left and visual mockup on the right.
            Features diagonal dividers and staggered animations. Great for SaaS and tech products.
          </p>
        </div>
        <ComponentPreview
          title="Multi-Column Hero"
          description="Split layout with floating feature cards"
          showCode={false}
          align="start"
        >
          <div className="w-full -mx-8 -my-8">
            <MultiColumnHero />
          </div>
        </ComponentPreview>
        <details className="bg-muted/50 rounded-lg p-6">
          <summary className="cursor-pointer font-semibold text-lg mb-4">View Implementation Code</summary>
          <div className="bg-slate-950 rounded-lg p-6 overflow-x-auto">
            <pre className="text-sm text-gray-300 font-mono">
{`import { MultiColumnHero } from '@/components/hero-sections/MultiColumnHero'

export default function Page() {
  return <MultiColumnHero />
}`}
            </pre>
          </div>
        </details>
      </section>

      {/* Two-Column Content Hero */}
      <section className="space-y-6">
        <div>
          <h2 className="text-3xl font-semibold mb-2">Two-Column Feature Grid Hero</h2>
          <p className="text-muted-foreground">
            Clean, organized layout with feature cards in a grid. Each card includes an icon, title, and description.
            Perfect for enterprise software and business tools showcasing multiple features.
          </p>
        </div>
        <ComponentPreview
          title="Two-Column Content Hero"
          description="Feature grid with hover effects and multiple CTAs"
          showCode={false}
          align="start"
        >
          <div className="w-full -mx-8 -my-8">
            <TwoColumnContentHero />
          </div>
        </ComponentPreview>
        <details className="bg-muted/50 rounded-lg p-6">
          <summary className="cursor-pointer font-semibold text-lg mb-4">View Implementation Code</summary>
          <div className="bg-slate-950 rounded-lg p-6 overflow-x-auto">
            <pre className="text-sm text-gray-300 font-mono">
{`import { TwoColumnContentHero } from '@/components/hero-sections/TwoColumnContentHero'

export default function Page() {
  return <TwoColumnContentHero />
}`}
            </pre>
          </div>
        </details>
      </section>

      {/* CTA-Focused Hero */}
      <section className="space-y-6">
        <div>
          <h2 className="text-3xl font-semibold mb-2">CTA-Focused Conversion Hero</h2>
          <p className="text-muted-foreground">
            Optimized for conversions with urgency elements (countdown timer), social proof, testimonials, and multiple CTAs.
            Includes trust badges and money-back guarantee messaging. Perfect for marketing campaigns.
          </p>
        </div>
        <ComponentPreview
          title="CTA-Focused Hero"
          description="Conversion-optimized with countdown and social proof"
          showCode={false}
          align="start"
        >
          <div className="w-full -mx-8 -my-8">
            <CTAFocusedHero />
          </div>
        </ComponentPreview>
        <details className="bg-muted/50 rounded-lg p-6">
          <summary className="cursor-pointer font-semibold text-lg mb-4">View Implementation Code</summary>
          <div className="bg-slate-950 rounded-lg p-6 overflow-x-auto">
            <pre className="text-sm text-gray-300 font-mono">
{`import { CTAFocusedHero } from '@/components/hero-sections/CTAFocusedHero'

export default function Page() {
  return <CTAFocusedHero />
}`}
            </pre>
          </div>
        </details>
      </section>

      {/* Code-Focused Hero */}
      <section className="space-y-6">
        <div>
          <h2 className="text-3xl font-semibold mb-2">Code-Focused Developer Hero</h2>
          <p className="text-muted-foreground">
            Terminal and IDE aesthetic with syntax-highlighted code editor, animated typing effect, and tech stack badges.
            Perfect for developer tools, UI libraries, APIs, and technical documentation sites.
          </p>
        </div>
        <ComponentPreview
          title="Code-Focused Hero"
          description="Developer-focused with code editor and terminal aesthetics"
          showCode={false}
          align="start"
        >
          <div className="w-full -mx-8 -my-8">
            <CodeFocusedHero />
          </div>
        </ComponentPreview>
        <details className="bg-muted/50 rounded-lg p-6">
          <summary className="cursor-pointer font-semibold text-lg mb-4">View Implementation Code</summary>
          <div className="bg-slate-950 rounded-lg p-6 overflow-x-auto">
            <pre className="text-sm text-gray-300 font-mono">
{`import { CodeFocusedHero } from '@/components/hero-sections/CodeFocusedHero'

export default function Page() {
  return <CodeFocusedHero />
}`}
            </pre>
          </div>
        </details>
      </section>

      {/* Customization Guide */}
      <section className="bg-muted/50 rounded-xl p-8 border space-y-6">
        <h2 className="text-2xl font-semibold">Customization Guide</h2>

        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Colors & Gradients</h3>
            <p className="text-muted-foreground mb-3">
              All heroes use Tailwind CSS classes for easy color customization. Update gradient colors by modifying classes like:
            </p>
            <code className="block bg-slate-950 text-gray-300 p-4 rounded-lg text-sm">
              from-blue-600 to-purple-600 → from-green-600 to-teal-600
            </code>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Typography</h3>
            <p className="text-muted-foreground mb-3">
              Adjust font sizes using Tailwind text utilities:
            </p>
            <code className="block bg-slate-950 text-gray-300 p-4 rounded-lg text-sm">
              text-5xl md:text-6xl lg:text-7xl
            </code>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Animations</h3>
            <p className="text-muted-foreground mb-3">
              All animations use Framer Motion. Customize animation duration, delay, and easing:
            </p>
            <code className="block bg-slate-950 text-gray-300 p-4 rounded-lg text-sm">
              {`transition={{ duration: 0.8, delay: 0.2 }}`}
            </code>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Background Images</h3>
            <p className="text-muted-foreground mb-3">
              Replace placeholder images with your own by updating the background URL:
            </p>
            <code className="block bg-slate-950 text-gray-300 p-4 rounded-lg text-sm">
              backgroundImage: &quot;url(&apos;your-image-url.jpg&apos;)&quot;
            </code>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Dark Mode</h3>
            <p className="text-muted-foreground mb-3">
              All heroes support dark mode via Tailwind&apos;s dark: prefix:
            </p>
            <code className="block bg-slate-950 text-gray-300 p-4 rounded-lg text-sm">
              bg-white dark:bg-slate-900
            </code>
          </div>
        </div>
      </section>

      {/* SaaS Product Hero */}
      <section className="space-y-6">
        <div>
          <h2 className="text-3xl font-semibold mb-2">SaaS Product Hero</h2>
          <p className="text-muted-foreground">
            Clean and modern hero designed for SaaS platforms. Features product mockup, key benefits, and clear value proposition.
          </p>
        </div>
        <ComponentPreview
          title="SaaS Product Hero"
          description="Professional SaaS landing page hero"
          showCode={false}
          align="start"
        >
          <div className="w-full -mx-8 -my-8">
            <SaaSProductHero />
          </div>
        </ComponentPreview>
      </section>

      {/* E-commerce Hero */}
      <section className="space-y-6">
        <div>
          <h2 className="text-3xl font-semibold mb-2">E-commerce Hero</h2>
          <p className="text-muted-foreground">
            Product-focused hero for online stores with category highlights, featured products, and shopping CTAs.
          </p>
        </div>
        <ComponentPreview
          title="E-commerce Hero"
          description="Shopping-focused hero with product grid"
          showCode={false}
          align="start"
        >
          <div className="w-full -mx-8 -my-8">
            <EcommerceHero />
          </div>
        </ComponentPreview>
      </section>

      {/* Portfolio Hero */}
      <section className="space-y-6">
        <div>
          <h2 className="text-3xl font-semibold mb-2">Portfolio Hero</h2>
          <p className="text-muted-foreground">
            Creative hero for designers, developers, and freelancers. Showcases work samples and personal branding.
          </p>
        </div>
        <ComponentPreview
          title="Portfolio Hero"
          description="Creative professional portfolio hero"
          showCode={false}
          align="start"
        >
          <div className="w-full -mx-8 -my-8">
            <PortfolioHero />
          </div>
        </ComponentPreview>
      </section>

      {/* Agency Hero */}
      <section className="space-y-6">
        <div>
          <h2 className="text-3xl font-semibold mb-2">Agency Hero</h2>
          <p className="text-muted-foreground">
            Bold and impactful hero for design agencies and studios. Features case study previews and client testimonials.
          </p>
        </div>
        <ComponentPreview
          title="Agency Hero"
          description="Agency/studio hero with bold typography"
          showCode={false}
          align="start"
        >
          <div className="w-full -mx-8 -my-8">
            <AgencyHero />
          </div>
        </ComponentPreview>
      </section>

      {/* Fintech Hero */}
      <section className="space-y-6">
        <div>
          <h2 className="text-3xl font-semibold mb-2">Fintech Hero</h2>
          <p className="text-muted-foreground">
            Trust-focused hero for financial services. Emphasizes security, compliance, and financial metrics.
          </p>
        </div>
        <ComponentPreview
          title="Fintech Hero"
          description="Banking/finance hero with trust badges"
          showCode={false}
          align="start"
        >
          <div className="w-full -mx-8 -my-8">
            <FintechHero />
          </div>
        </ComponentPreview>
      </section>

      {/* Web3 Hero */}
      <section className="space-y-6">
        <div>
          <h2 className="text-3xl font-semibold mb-2">Web3/Crypto Hero</h2>
          <p className="text-muted-foreground">
            Modern gradient-heavy hero for blockchain projects and NFT platforms. Features wallet connect and crypto aesthetic.
          </p>
        </div>
        <ComponentPreview
          title="Web3 Hero"
          description="NFT/blockchain hero with modern gradients"
          showCode={false}
          align="start"
        >
          <div className="w-full -mx-8 -my-8">
            <Web3Hero />
          </div>
        </ComponentPreview>
      </section>

      {/* Best Practices */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Hero Section Best Practices</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="border rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-3 text-green-600 dark:text-green-400">✓ Do</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Keep headlines clear and concise (under 10 words)</li>
              <li>• Use high-quality, optimized images</li>
              <li>• Make CTAs prominent and actionable</li>
              <li>• Test on mobile devices first</li>
              <li>• Include social proof when available</li>
              <li>• Ensure text contrast for readability</li>
            </ul>
          </div>

          <div className="border rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-3 text-red-600 dark:text-red-400">✗ Don&apos;t</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Overcrowd with too many elements</li>
              <li>• Use low-quality or slow-loading images</li>
              <li>• Hide important CTAs below the fold</li>
              <li>• Use too many different fonts</li>
              <li>• Neglect accessibility (contrast, ARIA labels)</li>
              <li>• Auto-play videos with sound</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Performance Tips */}
      <section className="bg-blue-50 dark:bg-blue-950/20 rounded-xl p-8 border border-blue-200 dark:border-blue-900">
        <h2 className="text-2xl font-semibold mb-4">Performance Optimization</h2>
        <ul className="space-y-3 text-muted-foreground">
          <li className="flex items-start gap-3">
            <span className="text-blue-600 dark:text-blue-400 font-bold">→</span>
            <span><strong>Image Optimization:</strong> Use Next.js Image component with proper width/height attributes and WebP format</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-600 dark:text-blue-400 font-bold">→</span>
            <span><strong>Lazy Loading:</strong> Load background images and animations only when visible in viewport</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-600 dark:text-blue-400 font-bold">→</span>
            <span><strong>Animation Performance:</strong> Use transform and opacity for animations instead of layout properties</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-600 dark:text-blue-400 font-bold">→</span>
            <span><strong>Font Loading:</strong> Preload critical fonts and use font-display: swap</span>
          </li>
        </ul>
      </section>
    </div>
  );
}
