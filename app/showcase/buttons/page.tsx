import { PageHeader } from "@/components/showcase/page-header";
import { ComponentPreview } from "@/components/showcase/component-preview";
import { Button } from "@/components/ui/button";
import { Mail, Download, ArrowRight, Settings, Loader2, Plus } from "lucide-react";

export default function ButtonsPage() {
  return (
    <div className="space-y-12">
      <PageHeader
        title="Buttons"
        description="A collection of button components with various styles, sizes, and states. Built on top of shadcn/ui with full accessibility support."
      />

      {/* Section 1: Variants */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Variants</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <ComponentPreview
            title="Default"
            description="Primary button for main actions"
            code={`import { Button } from "@/components/ui/button"

export default function Example() {
  return <Button variant="default">Default</Button>
}`}
          >
            <Button variant="default">Default</Button>
          </ComponentPreview>

          <ComponentPreview
            title="Secondary"
            description="For secondary actions"
            code={`import { Button } from "@/components/ui/button"

export default function Example() {
  return <Button variant="secondary">Secondary</Button>
}`}
          >
            <Button variant="secondary">Secondary</Button>
          </ComponentPreview>

          <ComponentPreview
            title="Outline"
            description="Subtle outlined button"
            code={`import { Button } from "@/components/ui/button"

export default function Example() {
  return <Button variant="outline">Outline</Button>
}`}
          >
            <Button variant="outline">Outline</Button>
          </ComponentPreview>

          <ComponentPreview
            title="Ghost"
            description="Minimal ghost button"
            code={`import { Button } from "@/components/ui/button"

export default function Example() {
  return <Button variant="ghost">Ghost</Button>
}`}
          >
            <Button variant="ghost">Ghost</Button>
          </ComponentPreview>

          <ComponentPreview
            title="Link"
            description="Button styled as a link"
            code={`import { Button } from "@/components/ui/button"

export default function Example() {
  return <Button variant="link">Link</Button>
}`}
          >
            <Button variant="link">Link</Button>
          </ComponentPreview>

          <ComponentPreview
            title="Destructive"
            description="For destructive actions"
            code={`import { Button } from "@/components/ui/button"

export default function Example() {
  return <Button variant="destructive">Destructive</Button>
}`}
          >
            <Button variant="destructive">Destructive</Button>
          </ComponentPreview>
        </div>
      </section>

      {/* Section 2: Sizes */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Sizes</h2>
        <ComponentPreview
          title="Button Sizes"
          description="Available size options from small to large"
          code={`import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"

export default function Example() {
  return (
    <div className="flex items-center gap-4">
      <Button size="sm">Small</Button>
      <Button size="default">Default</Button>
      <Button size="lg">Large</Button>
      <Button size="icon">
        <Plus className="h-4 w-4" />
      </Button>
    </div>
  )
}`}
        >
          <div className="flex items-center gap-4">
            <Button size="sm">Small</Button>
            <Button size="default">Default</Button>
            <Button size="lg">Large</Button>
            <Button size="icon">
              <Plus className="h-4 w-4" />
            </Button>
          </div>
        </ComponentPreview>
      </section>

      {/* Section 3: With Icons */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">With Icons</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <ComponentPreview
            title="Icon Left"
            description="Button with icon on the left"
            code={`import { Button } from "@/components/ui/button"
import { Mail } from "lucide-react"

export default function Example() {
  return (
    <Button>
      <Mail className="mr-2 h-4 w-4" />
      Send Email
    </Button>
  )
}`}
          >
            <Button>
              <Mail className="mr-2 h-4 w-4" />
              Send Email
            </Button>
          </ComponentPreview>

          <ComponentPreview
            title="Icon Right"
            description="Button with icon on the right"
            code={`import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function Example() {
  return (
    <Button>
      Continue
      <ArrowRight className="ml-2 h-4 w-4" />
    </Button>
  )
}`}
          >
            <Button>
              Continue
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </ComponentPreview>

          <ComponentPreview
            title="Icon Only"
            description="Compact button with only an icon"
            code={`import { Button } from "@/components/ui/button"
import { Settings } from "lucide-react"

export default function Example() {
  return (
    <Button size="icon" variant="outline">
      <Settings className="h-4 w-4" />
    </Button>
  )
}`}
          >
            <Button size="icon" variant="outline">
              <Settings className="h-4 w-4" />
            </Button>
          </ComponentPreview>

          <ComponentPreview
            title="Download Button"
            description="Button with download icon"
            code={`import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

export default function Example() {
  return (
    <Button variant="secondary">
      <Download className="mr-2 h-4 w-4" />
      Download
    </Button>
  )
}`}
          >
            <Button variant="secondary">
              <Download className="mr-2 h-4 w-4" />
              Download
            </Button>
          </ComponentPreview>
        </div>
      </section>

      {/* Section 4: States */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">States</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <ComponentPreview
            title="Disabled"
            description="Non-interactive disabled state"
            code={`import { Button } from "@/components/ui/button"

export default function Example() {
  return <Button disabled>Disabled Button</Button>
}`}
          >
            <Button disabled>Disabled Button</Button>
          </ComponentPreview>

          <ComponentPreview
            title="Loading"
            description="Button with loading spinner"
            code={`import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react"

export default function Example() {
  return (
    <Button disabled>
      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      Please wait
    </Button>
  )
}`}
          >
            <Button disabled>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Please wait
            </Button>
          </ComponentPreview>
        </div>
      </section>

      {/* Section 5: Button Groups */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Button Groups</h2>
        <ComponentPreview
          title="Button Group"
          description="Multiple buttons grouped together"
          code={`import { Button } from "@/components/ui/button"

export default function Example() {
  return (
    <div className="flex gap-2">
      <Button variant="outline">Left</Button>
      <Button variant="outline">Middle</Button>
      <Button variant="outline">Right</Button>
    </div>
  )
}`}
        >
          <div className="flex gap-2">
            <Button variant="outline">Left</Button>
            <Button variant="outline">Middle</Button>
            <Button variant="outline">Right</Button>
          </div>
        </ComponentPreview>

        <ComponentPreview
          title="Action Buttons"
          description="Primary and secondary actions"
          code={`import { Button } from "@/components/ui/button"

export default function Example() {
  return (
    <div className="flex gap-2">
      <Button>Save Changes</Button>
      <Button variant="outline">Cancel</Button>
      <Button variant="destructive">Delete</Button>
    </div>
  )
}`}
        >
          <div className="flex gap-2">
            <Button>Save Changes</Button>
            <Button variant="outline">Cancel</Button>
            <Button variant="destructive">Delete</Button>
          </div>
        </ComponentPreview>
      </section>
    </div>
  );
}
