import { PageHeader } from "@/components/showcase/page-header";
import { ComponentPreview } from "@/components/showcase/component-preview";
import { SimpleForm } from "@/components/contact-sections/SimpleForm";
import { SplitLayout } from "@/components/contact-sections/SplitLayout";
import { MinimalForm } from "@/components/contact-sections/MinimalForm";
import { InlineForm } from "@/components/contact-sections/InlineForm";
import { MultiStepForm } from "@/components/contact-sections/MultiStepForm";
import { MapIntegration } from "@/components/contact-sections/MapIntegration";
import { ImageSidebar } from "@/components/contact-sections/ImageSidebar";
import { CardBased } from "@/components/contact-sections/CardBased";
import { IconGrid } from "@/components/contact-sections/IconGrid";
import { SocialFirst } from "@/components/contact-sections/SocialFirst";
import { OfficeLocations } from "@/components/contact-sections/OfficeLocations";
import { TeamDirectory } from "@/components/contact-sections/TeamDirectory";
import { FAQ } from "@/components/contact-sections/FAQ";
import { LiveChat } from "@/components/contact-sections/LiveChat";
import { CallbackRequest } from "@/components/contact-sections/CallbackRequest";
import { SupportCenter } from "@/components/contact-sections/SupportCenter";
import { SalesInquiry } from "@/components/contact-sections/SalesInquiry";
import { PartnershipForm } from "@/components/contact-sections/PartnershipForm";
import { MediaKit } from "@/components/contact-sections/MediaKit";
import { EmergencyContact } from "@/components/contact-sections/EmergencyContact";

export default function ContactSectionsShowcase() {
  return (
    <div className="space-y-16">
      <PageHeader
        title="Contact Section Components"
        description="20 conversion-optimized contact sections for every industry and use case. From simple forms to complex multi-step wizards, all with built-in validation and success states."
        badge="20 Variants"
        badgeVariant="default"
      />

      {/* Comparison Table */}
      <section className="bg-muted/50 rounded-xl p-8 border">
        <h2 className="text-2xl font-semibold mb-6">Contact Component Selection Guide</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4 font-semibold">Component</th>
                <th className="text-left py-3 px-4 font-semibold">Layout Type</th>
                <th className="text-left py-3 px-4 font-semibold">Best For</th>
                <th className="text-left py-3 px-4 font-semibold">Key Features</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              <tr>
                <td className="py-3 px-4 font-medium">SimpleForm</td>
                <td className="py-3 px-4">Single column</td>
                <td className="py-3 px-4">General inquiries</td>
                <td className="py-3 px-4">Basic validation, success state</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">SplitLayout</td>
                <td className="py-3 px-4">Two columns</td>
                <td className="py-3 px-4">Business websites</td>
                <td className="py-3 px-4">Contact info sidebar, social links</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">MinimalForm</td>
                <td className="py-3 px-4">Single column</td>
                <td className="py-3 px-4">Modern brands</td>
                <td className="py-3 px-4">Floating labels, max whitespace</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">InlineForm</td>
                <td className="py-3 px-4">Horizontal</td>
                <td className="py-3 px-4">Footer sections</td>
                <td className="py-3 px-4">Compact, minimal friction</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">MultiStepForm</td>
                <td className="py-3 px-4">Wizard</td>
                <td className="py-3 px-4">Complex inquiries</td>
                <td className="py-3 px-4">3 steps, progress indicator</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">MapIntegration</td>
                <td className="py-3 px-4">Map + form</td>
                <td className="py-3 px-4">Physical locations</td>
                <td className="py-3 px-4">Map placeholder, directions</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">ImageSidebar</td>
                <td className="py-3 px-4">Split with image</td>
                <td className="py-3 px-4">Creative agencies</td>
                <td className="py-3 px-4">Background image, modern aesthetic</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">CardBased</td>
                <td className="py-3 px-4">Card grid</td>
                <td className="py-3 px-4">Multi-channel support</td>
                <td className="py-3 px-4">Contact method selection</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">IconGrid</td>
                <td className="py-3 px-4">Info grid</td>
                <td className="py-3 px-4">Contact info display</td>
                <td className="py-3 px-4">No form, click-to-copy</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">SocialFirst</td>
                <td className="py-3 px-4">Social emphasis</td>
                <td className="py-3 px-4">Community brands</td>
                <td className="py-3 px-4">Large social buttons</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">OfficeLocations</td>
                <td className="py-3 px-4">Location grid</td>
                <td className="py-3 px-4">Multi-location businesses</td>
                <td className="py-3 px-4">Multiple office addresses</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">TeamDirectory</td>
                <td className="py-3 px-4">Team cards</td>
                <td className="py-3 px-4">Service businesses</td>
                <td className="py-3 px-4">Team member contacts</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">FAQ</td>
                <td className="py-3 px-4">FAQ + form</td>
                <td className="py-3 px-4">Support pages</td>
                <td className="py-3 px-4">Reduces inquiry volume</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">LiveChat</td>
                <td className="py-3 px-4">Chat interface</td>
                <td className="py-3 px-4">Real-time support</td>
                <td className="py-3 px-4">Online/offline status</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">CallbackRequest</td>
                <td className="py-3 px-4">Scheduling</td>
                <td className="py-3 px-4">Sales callbacks</td>
                <td className="py-3 px-4">Date/time selection</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">SupportCenter</td>
                <td className="py-3 px-4">Ticket form</td>
                <td className="py-3 px-4">Help desk</td>
                <td className="py-3 px-4">Priority, category, attachments</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">SalesInquiry</td>
                <td className="py-3 px-4">Lead gen</td>
                <td className="py-3 px-4">B2B sales</td>
                <td className="py-3 px-4">Company info, budget fields</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">PartnershipForm</td>
                <td className="py-3 px-4">Partnership</td>
                <td className="py-3 px-4">Business development</td>
                <td className="py-3 px-4">Partnership type, revenue</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">MediaKit</td>
                <td className="py-3 px-4">Press room</td>
                <td className="py-3 px-4">Media/PR</td>
                <td className="py-3 px-4">Press kit, brand assets</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">EmergencyContact</td>
                <td className="py-3 px-4">Urgent</td>
                <td className="py-3 px-4">Critical support</td>
                <td className="py-3 px-4">24/7 availability, high urgency</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Form Best Practices */}
      <section className="bg-blue-50 dark:bg-blue-950/20 rounded-xl p-8 border border-blue-200 dark:border-blue-900">
        <h2 className="text-2xl font-semibold mb-6 text-blue-900 dark:text-blue-100">
          Contact Form Best Practices
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold mb-3 text-blue-800 dark:text-blue-200">Form Design</h3>
            <ul className="space-y-2 text-sm text-blue-900 dark:text-blue-100">
              <li>• Keep forms short (3-5 fields ideal)</li>
              <li>• Mark required fields clearly</li>
              <li>• Use clear, descriptive labels</li>
              <li>• Provide helpful placeholder text</li>
              <li>• Ensure mobile-friendly tap targets</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3 text-blue-800 dark:text-blue-200">Validation & Feedback</h3>
            <ul className="space-y-2 text-sm text-blue-900 dark:text-blue-100">
              <li>• Validate on blur, not on every keystroke</li>
              <li>• Show clear error messages</li>
              <li>• Display success confirmation</li>
              <li>• Use loading states during submission</li>
              <li>• Prevent double submissions</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3 text-blue-800 dark:text-blue-200">Conversion Optimization</h3>
            <ul className="space-y-2 text-sm text-blue-900 dark:text-blue-100">
              <li>• Clear value proposition above form</li>
              <li>• Action-oriented CTA button text</li>
              <li>• Reduce friction (auto-fill support)</li>
              <li>• Build trust (privacy policy link)</li>
              <li>• Response time expectations</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3 text-blue-800 dark:text-blue-200">Accessibility</h3>
            <ul className="space-y-2 text-sm text-blue-900 dark:text-blue-100">
              <li>• Label every input field</li>
              <li>• Keyboard navigation support</li>
              <li>• ARIA attributes for screen readers</li>
              <li>• High contrast error states</li>
              <li>• Focus indicators visible</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Basic Forms */}
      <section className="space-y-12">
        <h2 className="text-3xl font-bold">Basic Contact Forms</h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-semibold mb-2">SimpleForm</h3>
            <p className="text-muted-foreground">
              Classic single-column contact form with full validation. Perfect for general inquiries and straightforward contact pages.
            </p>
          </div>
          <ComponentPreview title="SimpleForm Component" showCode={false} align="start">
            <div className="w-full -mx-8 -my-8">
              <SimpleForm />
            </div>
          </ComponentPreview>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-semibold mb-2">MinimalForm</h3>
            <p className="text-muted-foreground">
              Ultra-clean design with floating labels and maximum whitespace. Ideal for modern brands and portfolio sites.
            </p>
          </div>
          <ComponentPreview title="MinimalForm Component" showCode={false} align="start">
            <div className="w-full -mx-8 -my-8">
              <MinimalForm />
            </div>
          </ComponentPreview>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-semibold mb-2">InlineForm</h3>
            <p className="text-muted-foreground">
              Compact horizontal layout perfect for footers or newsletter-style contact sections. Minimal friction, quick contact.
            </p>
          </div>
          <ComponentPreview title="InlineForm Component" showCode={false} align="start">
            <div className="w-full -mx-8 -my-8">
              <InlineForm />
            </div>
          </ComponentPreview>
        </div>
      </section>

      {/* Layout Variants */}
      <section className="space-y-12">
        <h2 className="text-3xl font-bold">Layout Variants</h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-semibold mb-2">SplitLayout</h3>
            <p className="text-muted-foreground">
              Two-column layout with form on left and contact information sidebar on right. Includes social links and business hours.
            </p>
          </div>
          <ComponentPreview title="SplitLayout Component" showCode={false} align="start">
            <div className="w-full -mx-8 -my-8">
              <SplitLayout />
            </div>
          </ComponentPreview>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-semibold mb-2">MapIntegration</h3>
            <p className="text-muted-foreground">
              Map placeholder with form overlay or side-by-side. Perfect for businesses with physical locations.
            </p>
          </div>
          <ComponentPreview title="MapIntegration Component" showCode={false} align="start">
            <div className="w-full -mx-8 -my-8">
              <MapIntegration />
            </div>
          </ComponentPreview>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-semibold mb-2">ImageSidebar</h3>
            <p className="text-muted-foreground">
              Modern split layout with gradient background and form panel. Full-screen aesthetic for creative agencies.
            </p>
          </div>
          <ComponentPreview title="ImageSidebar Component" showCode={false} align="start">
            <div className="w-full -mx-8 -my-8">
              <ImageSidebar />
            </div>
          </ComponentPreview>
        </div>
      </section>

      {/* Interactive & Multi-Channel */}
      <section className="space-y-12">
        <h2 className="text-3xl font-bold">Interactive & Multi-Channel</h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-semibold mb-2">MultiStepForm</h3>
            <p className="text-muted-foreground">
              Wizard-style three-step form with progress indicator. Ideal for complex inquiries and lead qualification.
            </p>
          </div>
          <ComponentPreview title="MultiStepForm Component" showCode={false} align="start">
            <div className="w-full -mx-8 -my-8">
              <MultiStepForm />
            </div>
          </ComponentPreview>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-semibold mb-2">CardBased</h3>
            <p className="text-muted-foreground">
              Grid of contact method cards (Email, Phone, Chat, Visit). Let users choose their preferred contact method.
            </p>
          </div>
          <ComponentPreview title="CardBased Component" showCode={false} align="start">
            <div className="w-full -mx-8 -my-8">
              <CardBased />
            </div>
          </ComponentPreview>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-semibold mb-2">LiveChat</h3>
            <p className="text-muted-foreground">
              Chat interface mockup with online/offline status. Fallback to email form when offline. Real-time support feel.
            </p>
          </div>
          <ComponentPreview title="LiveChat Component" showCode={false} align="start">
            <div className="w-full -mx-8 -my-8">
              <LiveChat />
            </div>
          </ComponentPreview>
        </div>
      </section>

      {/* Information Display */}
      <section className="space-y-12">
        <h2 className="text-3xl font-bold">Information Display</h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-semibold mb-2">IconGrid</h3>
            <p className="text-muted-foreground">
              Clean grid of contact methods with click-to-copy functionality. No form, just contact information display.
            </p>
          </div>
          <ComponentPreview title="IconGrid Component" showCode={false} align="start">
            <div className="w-full -mx-8 -my-8">
              <IconGrid />
            </div>
          </ComponentPreview>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-semibold mb-2">SocialFirst</h3>
            <p className="text-muted-foreground">
              Social media links emphasized with large buttons. Secondary email form below for community-focused brands.
            </p>
          </div>
          <ComponentPreview title="SocialFirst Component" showCode={false} align="start">
            <div className="w-full -mx-8 -my-8">
              <SocialFirst />
            </div>
          </ComponentPreview>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-semibold mb-2">OfficeLocations</h3>
            <p className="text-muted-foreground">
              Multiple office addresses with headquarters highlight. Perfect for international or multi-location businesses.
            </p>
          </div>
          <ComponentPreview title="OfficeLocations Component" showCode={false} align="start">
            <div className="w-full -mx-8 -my-8">
              <OfficeLocations />
            </div>
          </ComponentPreview>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-semibold mb-2">TeamDirectory</h3>
            <p className="text-muted-foreground">
              Team member cards organized by department. Personal touch for service businesses and consulting firms.
            </p>
          </div>
          <ComponentPreview title="TeamDirectory Component" showCode={false} align="start">
            <div className="w-full -mx-8 -my-8">
              <TeamDirectory />
            </div>
          </ComponentPreview>
        </div>
      </section>

      {/* Support & Service */}
      <section className="space-y-12">
        <h2 className="text-3xl font-bold">Support & Service</h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-semibold mb-2">FAQ</h3>
            <p className="text-muted-foreground">
              FAQ accordion at top with contact form fallback. Reduces support inquiry volume by answering common questions first.
            </p>
          </div>
          <ComponentPreview title="FAQ Component" showCode={false} align="start">
            <div className="w-full -mx-8 -my-8">
              <FAQ />
            </div>
          </ComponentPreview>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-semibold mb-2">SupportCenter</h3>
            <p className="text-muted-foreground">
              Ticket submission style with issue category, priority selection, and file attachment. Technical support aesthetic.
            </p>
          </div>
          <ComponentPreview title="SupportCenter Component" showCode={false} align="start">
            <div className="w-full -mx-8 -my-8">
              <SupportCenter />
            </div>
          </ComponentPreview>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-semibold mb-2">CallbackRequest</h3>
            <p className="text-muted-foreground">
              Schedule callback form with phone number and time selection. Perfect for sales teams and support callbacks.
            </p>
          </div>
          <ComponentPreview title="CallbackRequest Component" showCode={false} align="start">
            <div className="w-full -mx-8 -my-8">
              <CallbackRequest />
            </div>
          </ComponentPreview>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-semibold mb-2">EmergencyContact</h3>
            <p className="text-muted-foreground">
              High urgency design with prominent phone number display. Red/orange accents for critical support and 24/7 services.
            </p>
          </div>
          <ComponentPreview title="EmergencyContact Component" showCode={false} align="start">
            <div className="w-full -mx-8 -my-8">
              <EmergencyContact />
            </div>
          </ComponentPreview>
        </div>
      </section>

      {/* Business & Enterprise */}
      <section className="space-y-12">
        <h2 className="text-3xl font-bold">Business & Enterprise</h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-semibold mb-2">SalesInquiry</h3>
            <p className="text-muted-foreground">
              Lead generation focused with company details and budget fields. B2B sales optimized with &quot;Request demo&quot; CTA.
            </p>
          </div>
          <ComponentPreview title="SalesInquiry Component" showCode={false} align="start">
            <div className="w-full -mx-8 -my-8">
              <SalesInquiry />
            </div>
          </ComponentPreview>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-semibold mb-2">PartnershipForm</h3>
            <p className="text-muted-foreground">
              B2B partnership inquiry with company details and partnership type. Professional business development focus.
            </p>
          </div>
          <ComponentPreview title="PartnershipForm Component" showCode={false} align="start">
            <div className="w-full -mx-8 -my-8">
              <PartnershipForm />
            </div>
          </ComponentPreview>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-semibold mb-2">MediaKit</h3>
            <p className="text-muted-foreground">
              Press room style with media inquiry form and downloadable press kit. Brand assets and journalist resources.
            </p>
          </div>
          <ComponentPreview title="MediaKit Component" showCode={false} align="start">
            <div className="w-full -mx-8 -my-8">
              <MediaKit />
            </div>
          </ComponentPreview>
        </div>
      </section>

      {/* Implementation Guide */}
      <section className="bg-muted/50 rounded-xl p-8 border">
        <h2 className="text-2xl font-semibold mb-6">Implementation Guide</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold mb-2">Basic Usage</h3>
            <p className="text-sm text-muted-foreground mb-3">
              All contact components are fully functional with built-in form validation and state management.
            </p>
            <div className="bg-background rounded-lg p-4 font-mono text-sm">
              <code>{`import { SimpleForm } from '@/components/contact-sections/SimpleForm';

export default function ContactPage() {
  return <SimpleForm className="my-8" />;
}`}</code>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Form Handling</h3>
            <p className="text-sm text-muted-foreground">
              Each component includes email validation, required field checking, loading states, and success/error messages. The handleSubmit function simulates an API call - replace with your actual backend integration.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Customization</h3>
            <p className="text-sm text-muted-foreground">
              Pass className prop for additional styling. Modify contact information (email, phone, address) directly in component files. All components support dark mode automatically.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Backend Integration</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Replace the simulated API call in handleSubmit with your actual endpoint:
            </p>
            <div className="bg-background rounded-lg p-4 font-mono text-sm">
              <code>{`const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  if (!validateForm()) return;

  setIsSubmitting(true);
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    if (response.ok) {
      setSubmitted(true);
    } else {
      setErrors({ message: 'Failed to send' });
    }
  } catch (error) {
    setErrors({ message: 'Network error' });
  }
  setIsSubmitting(false);
};`}</code>
            </div>
          </div>
        </div>
      </section>

      {/* Selection Tips */}
      <section className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 rounded-xl p-8 border border-purple-200 dark:border-purple-900">
        <h2 className="text-2xl font-semibold mb-6 text-purple-900 dark:text-purple-100">
          Which Contact Section Should I Use?
        </h2>
        <div className="grid md:grid-cols-2 gap-6 text-sm">
          <div className="space-y-3">
            <h3 className="font-semibold text-purple-800 dark:text-purple-200">For Simple Contact Pages</h3>
            <ul className="space-y-2 text-purple-900 dark:text-purple-100">
              <li>• <strong>SimpleForm:</strong> General purpose, any industry</li>
              <li>• <strong>MinimalForm:</strong> Modern brands, portfolios</li>
              <li>• <strong>SplitLayout:</strong> Include contact info sidebar</li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="font-semibold text-purple-800 dark:text-purple-200">For Local Businesses</h3>
            <ul className="space-y-2 text-purple-900 dark:text-purple-100">
              <li>• <strong>MapIntegration:</strong> Physical locations</li>
              <li>• <strong>OfficeLocations:</strong> Multiple branches</li>
              <li>• <strong>IconGrid:</strong> Display contact info clearly</li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="font-semibold text-purple-800 dark:text-purple-200">For Customer Support</h3>
            <ul className="space-y-2 text-purple-900 dark:text-purple-100">
              <li>• <strong>FAQ:</strong> Answer questions first</li>
              <li>• <strong>LiveChat:</strong> Real-time support</li>
              <li>• <strong>SupportCenter:</strong> Ticket system</li>
              <li>• <strong>EmergencyContact:</strong> Urgent issues</li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="font-semibold text-purple-800 dark:text-purple-200">For Sales & Marketing</h3>
            <ul className="space-y-2 text-purple-900 dark:text-purple-100">
              <li>• <strong>SalesInquiry:</strong> Lead generation</li>
              <li>• <strong>MultiStepForm:</strong> Qualify leads</li>
              <li>• <strong>CallbackRequest:</strong> Schedule calls</li>
              <li>• <strong>PartnershipForm:</strong> B2B partnerships</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
