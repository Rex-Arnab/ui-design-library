import { PageHeader } from "@/components/showcase/page-header";
import { ComponentPreview } from "@/components/showcase/component-preview";
import { SimpleLogin } from "@/components/auth-pages/SimpleLogin";
import { SocialLogin } from "@/components/auth-pages/SocialLogin";
import { SmartLogin } from "@/components/auth-pages/SmartLogin";
import { AdminLogin } from "@/components/auth-pages/AdminLogin";
import { RegisterCenter } from "@/components/auth-pages/RegisterCenter";
import { RegisterTwoColumn } from "@/components/auth-pages/RegisterTwoColumn";
import { RegisterSimple } from "@/components/auth-pages/RegisterSimple";
import { MultiStepRegister } from "@/components/auth-pages/MultiStepRegister";
import { ForgotPassword } from "@/components/auth-pages/ForgotPassword";
import { OnboardingSaaS } from "@/components/auth-pages/OnboardingSaaS";
import { OnboardingEcommerce } from "@/components/auth-pages/OnboardingEcommerce";
import { OnboardingEducation } from "@/components/auth-pages/OnboardingEducation";

export default function AuthPagesShowcase() {
  return (
    <div className="space-y-16">
      <PageHeader
        title="Authentication Pages"
        description="Production-ready authentication flows for modern web applications. Custom-built form components with validation, loading states, and responsive designs. No shadcn/ui dependencies."
        badge="New"
        badgeVariant="default"
      />

      {/* Comparison Table */}
      <section className="bg-muted/50 rounded-xl p-8 border">
        <h2 className="text-2xl font-semibold mb-6">Choose the Right Auth Flow</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4 font-semibold">Auth Type</th>
                <th className="text-left py-3 px-4 font-semibold">Best For</th>
                <th className="text-left py-3 px-4 font-semibold">Key Features</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              <tr>
                <td className="py-3 px-4 font-medium">Simple Login</td>
                <td className="py-3 px-4">Basic apps, MVPs, internal tools</td>
                <td className="py-3 px-4">Clean centered layout, email/password, remember me</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">Social Login</td>
                <td className="py-3 px-4">Consumer apps, quick signups</td>
                <td className="py-3 px-4">OAuth buttons (Google, GitHub, Microsoft), OR divider</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">Smart Login</td>
                <td className="py-3 px-4">Modern SaaS, progressive UX</td>
                <td className="py-3 px-4">Adaptive UI, single field initially, smooth transitions</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">Admin Login</td>
                <td className="py-3 px-4">Dashboard, secure portals, enterprise</td>
                <td className="py-3 px-4">2FA support, dark theme, security badges</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">Register Center</td>
                <td className="py-3 px-4">Standard signups, straightforward flow</td>
                <td className="py-3 px-4">Password strength indicator, terms checkbox</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">Register Two-Column</td>
                <td className="py-3 px-4">Marketing-heavy products, feature showcase</td>
                <td className="py-3 px-4">Benefits sidebar, testimonial, split layout</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">Register Simple</td>
                <td className="py-3 px-4">Minimal friction, quick signups</td>
                <td className="py-3 px-4">3 fields only (username, email, password)</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">Multi-Step Register</td>
                <td className="py-3 px-4">LMS, detailed profiles, onboarding</td>
                <td className="py-3 px-4">Wizard UI, progress bar, 3-step flow</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">Forgot Password</td>
                <td className="py-3 px-4">All apps requiring password recovery</td>
                <td className="py-3 px-4">Email entry, success state, clear instructions</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">Onboarding (SaaS/Ecom/Edu)</td>
                <td className="py-3 px-4">Post-registration experience</td>
                <td className="py-3 px-4">Welcome screens, next steps, benefits highlight</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Login Pages */}
      <section className="space-y-12">
        <h2 className="text-3xl font-bold">Login Pages</h2>

        {/* Simple Login */}
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-semibold mb-2">Simple Login</h3>
            <p className="text-muted-foreground">
              Clean, centered login form with email/password fields, password visibility toggle, and remember me checkbox.
            </p>
          </div>
          <ComponentPreview
            title="Simple Login"
            description="Minimal login form with validation states"
            showCode={false}
            align="start"
          >
            <div className="w-full -mx-8 -my-8">
              <SimpleLogin />
            </div>
          </ComponentPreview>
        </div>

        {/* Social Login */}
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-semibold mb-2">Social Login</h3>
            <p className="text-muted-foreground">
              Multiple OAuth provider buttons (Google, GitHub, Microsoft) with traditional email/password option below.
            </p>
          </div>
          <ComponentPreview
            title="Social Login"
            description="OAuth providers with email fallback"
            showCode={false}
            align="start"
          >
            <div className="w-full -mx-8 -my-8">
              <SocialLogin />
            </div>
          </ComponentPreview>
        </div>

        {/* Smart Login */}
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-semibold mb-2">Smart Login</h3>
            <p className="text-muted-foreground">
              Adaptive login form that progressively reveals password field and options as the user types their email.
              Google button disappears when user starts typing.
            </p>
          </div>
          <ComponentPreview
            title="Smart Login"
            description="Adaptive UI with conditional field rendering"
            showCode={false}
            align="start"
          >
            <div className="w-full -mx-8 -my-8">
              <SmartLogin />
            </div>
          </ComponentPreview>
        </div>

        {/* Admin Login */}
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-semibold mb-2">Admin Login</h3>
            <p className="text-muted-foreground">
              Professional dark-themed login with optional 2FA verification step. Includes security notices and trust indicators.
            </p>
          </div>
          <ComponentPreview
            title="Admin Login"
            description="Secure admin portal with 2FA support"
            showCode={false}
            align="start"
          >
            <div className="w-full -mx-8 -my-8">
              <AdminLogin />
            </div>
          </ComponentPreview>
        </div>
      </section>

      {/* Registration Pages */}
      <section className="space-y-12">
        <h2 className="text-3xl font-bold">Registration Pages</h2>

        {/* Register Center */}
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-semibold mb-2">Center-Aligned Registration</h3>
            <p className="text-muted-foreground">
              Single column registration with password strength indicator and terms acceptance checkbox.
            </p>
          </div>
          <ComponentPreview
            title="Register Center"
            description="Standard registration form with password strength"
            showCode={false}
            align="start"
          >
            <div className="w-full -mx-8 -my-8">
              <RegisterCenter />
            </div>
          </ComponentPreview>
        </div>

        {/* Register Two-Column */}
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-semibold mb-2">Two-Column Registration</h3>
            <p className="text-muted-foreground">
              Split layout with registration form on left and benefits/testimonial on right. Perfect for showcasing product value.
            </p>
          </div>
          <ComponentPreview
            title="Register Two-Column"
            description="Marketing-focused registration with benefits sidebar"
            showCode={false}
            align="start"
          >
            <div className="w-full -mx-8 -my-8">
              <RegisterTwoColumn />
            </div>
          </ComponentPreview>
        </div>

        {/* Register Simple */}
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-semibold mb-2">Simple Registration</h3>
            <p className="text-muted-foreground">
              Ultra-minimal signup with only 3 essential fields. Reduces friction for quick user acquisition.
            </p>
          </div>
          <ComponentPreview
            title="Register Simple"
            description="Minimal 3-field registration"
            showCode={false}
            align="start"
          >
            <div className="w-full -mx-8 -my-8">
              <RegisterSimple />
            </div>
          </ComponentPreview>
        </div>

        {/* Multi-Step Register */}
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-semibold mb-2">Multi-Step Registration (LMS)</h3>
            <p className="text-muted-foreground">
              Wizard-style registration with progress indicator. Ideal for educational platforms collecting detailed user preferences.
            </p>
          </div>
          <ComponentPreview
            title="Multi-Step Register"
            description="3-step registration wizard with progress bar"
            showCode={false}
            align="start"
          >
            <div className="w-full -mx-8 -my-8">
              <MultiStepRegister />
            </div>
          </ComponentPreview>
        </div>
      </section>

      {/* Password Recovery */}
      <section className="space-y-12">
        <h2 className="text-3xl font-bold">Password Recovery</h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-semibold mb-2">Forgot Password</h3>
            <p className="text-muted-foreground">
              Email-based password recovery with success confirmation state. Clear instructions and back-to-login link.
            </p>
          </div>
          <ComponentPreview
            title="Forgot Password"
            description="Password reset flow with success state"
            showCode={false}
            align="start"
          >
            <div className="w-full -mx-8 -my-8">
              <ForgotPassword />
            </div>
          </ComponentPreview>
        </div>
      </section>

      {/* Onboarding Screens */}
      <section className="space-y-12">
        <h2 className="text-3xl font-bold">Onboarding Screens</h2>

        {/* SaaS Onboarding */}
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-semibold mb-2">SaaS Onboarding</h3>
            <p className="text-muted-foreground">
              Post-registration welcome screen for SaaS products with setup checklist and next steps.
            </p>
          </div>
          <ComponentPreview
            title="SaaS Onboarding"
            description="Welcome screen with setup checklist"
            showCode={false}
            align="start"
          >
            <div className="w-full -mx-8 -my-8">
              <OnboardingSaaS />
            </div>
          </ComponentPreview>
        </div>

        {/* E-commerce Onboarding */}
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-semibold mb-2">E-commerce Onboarding</h3>
            <p className="text-muted-foreground">
              Welcome screen highlighting member benefits, exclusive deals, and welcome bonus.
            </p>
          </div>
          <ComponentPreview
            title="E-commerce Onboarding"
            description="Benefits showcase with welcome offer"
            showCode={false}
            align="start"
          >
            <div className="w-full -mx-8 -my-8">
              <OnboardingEcommerce />
            </div>
          </ComponentPreview>
        </div>

        {/* Education Onboarding */}
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-semibold mb-2">Education Platform Onboarding</h3>
            <p className="text-muted-foreground">
              Learning platform welcome with recommended courses and community highlights.
            </p>
          </div>
          <ComponentPreview
            title="Education Onboarding"
            description="Welcome with course recommendations"
            showCode={false}
            align="start"
          >
            <div className="w-full -mx-8 -my-8">
              <OnboardingEducation />
            </div>
          </ComponentPreview>
        </div>
      </section>

      {/* Best Practices */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Authentication Best Practices</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="border rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-3 text-green-600 dark:text-green-400">✓ Do</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Use clear, actionable error messages</li>
              <li>• Show password strength indicators</li>
              <li>• Provide social login options where appropriate</li>
              <li>• Include &quot;Remember me&quot; for better UX</li>
              <li>• Use HTTPS for all auth pages</li>
              <li>• Implement proper form validation</li>
              <li>• Show loading states during submission</li>
              <li>• Make &quot;Forgot password&quot; easily accessible</li>
            </ul>
          </div>

          <div className="border rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-3 text-red-600 dark:text-red-400">✗ Don&apos;t</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Require too many fields upfront</li>
              <li>• Use vague error messages</li>
              <li>• Block password paste functionality</li>
              <li>• Hide password requirements until submission</li>
              <li>• Auto-logout too quickly</li>
              <li>• Ignore mobile responsiveness</li>
              <li>• Skip email verification</li>
              <li>• Forget about accessibility</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Form Validation Guide */}
      <section className="bg-blue-50 dark:bg-blue-950/20 rounded-xl p-8 border border-blue-200 dark:border-blue-900">
        <h2 className="text-2xl font-semibold mb-4">Form Validation Examples</h2>
        <div className="space-y-4 text-sm text-muted-foreground">
          <div>
            <strong className="text-foreground">Email Validation:</strong>
            <p>Check for proper email format using regex: <code className="bg-muted px-2 py-1 rounded">/\S+@\S+\.\S+/</code></p>
          </div>
          <div>
            <strong className="text-foreground">Password Strength:</strong>
            <p>Weak: &lt;6 chars | Medium: 6-9 chars | Strong: 10+ chars with mixed case/numbers/symbols</p>
          </div>
          <div>
            <strong className="text-foreground">Real-time Validation:</strong>
            <p>Clear errors as user types (after initial submission attempt)</p>
          </div>
          <div>
            <strong className="text-foreground">Loading States:</strong>
            <p>Disable form and show spinner during API calls to prevent double submission</p>
          </div>
        </div>
      </section>
    </div>
  );
}
