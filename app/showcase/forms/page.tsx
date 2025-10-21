"use client";

import { PageHeader } from "@/components/showcase/page-header";
import { ComponentPreview } from "@/components/showcase/component-preview";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function FormsPage() {
  return (
    <div className="space-y-12">
      <PageHeader
        title="Forms"
        description="Form components with validation using React Hook Form and Zod. Includes inputs, selects, checkboxes, and more."
      />

      {/* Basic Inputs */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Basic Inputs</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <ComponentPreview
            title="Text Input"
            description="Standard text input with label"
            code={`import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function Example() {
  return (
    <div className="grid gap-2 w-full max-w-sm">
      <Label htmlFor="email">Email</Label>
      <Input id="email" type="email" placeholder="Enter your email" />
    </div>
  )
}`}
          >
            <div className="grid gap-2 w-full max-w-sm">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="Enter your email" />
            </div>
          </ComponentPreview>

          <ComponentPreview
            title="Password Input"
            description="Password field with hidden characters"
            code={`import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function Example() {
  return (
    <div className="grid gap-2 w-full max-w-sm">
      <Label htmlFor="password">Password</Label>
      <Input id="password" type="password" placeholder="Enter password" />
    </div>
  )
}`}
          >
            <div className="grid gap-2 w-full max-w-sm">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" placeholder="Enter password" />
            </div>
          </ComponentPreview>

          <ComponentPreview
            title="Input with Helper Text"
            description="Input with descriptive helper text"
            code={`import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function Example() {
  return (
    <div className="grid gap-2 w-full max-w-sm">
      <Label htmlFor="username">Username</Label>
      <Input id="username" placeholder="johndoe" />
      <p className="text-xs text-muted-foreground">
        This will be your public display name.
      </p>
    </div>
  )
}`}
          >
            <div className="grid gap-2 w-full max-w-sm">
              <Label htmlFor="username">Username</Label>
              <Input id="username" placeholder="johndoe" />
              <p className="text-xs text-muted-foreground">
                This will be your public display name.
              </p>
            </div>
          </ComponentPreview>

          <ComponentPreview
            title="Disabled Input"
            description="Non-editable disabled state"
            code={`import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function Example() {
  return (
    <div className="grid gap-2 w-full max-w-sm">
      <Label htmlFor="disabled">Disabled</Label>
      <Input id="disabled" disabled value="Cannot edit this" />
    </div>
  )
}`}
          >
            <div className="grid gap-2 w-full max-w-sm">
              <Label htmlFor="disabled">Disabled</Label>
              <Input id="disabled" disabled value="Cannot edit this" />
            </div>
          </ComponentPreview>
        </div>
      </section>

      {/* Textarea */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Textarea</h2>
        <ComponentPreview
          title="Multi-line Text Input"
          description="Textarea for longer text content"
          code={`import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export default function Example() {
  return (
    <div className="grid gap-2 w-full max-w-sm">
      <Label htmlFor="message">Message</Label>
      <Textarea
        id="message"
        placeholder="Type your message here"
        rows={4}
      />
      <p className="text-xs text-muted-foreground">
        Maximum 500 characters.
      </p>
    </div>
  )
}`}
        >
          <div className="grid gap-2 w-full max-w-sm">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              placeholder="Type your message here"
              rows={4}
            />
            <p className="text-xs text-muted-foreground">
              Maximum 500 characters.
            </p>
          </div>
        </ComponentPreview>
      </section>

      {/* Select */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Select Dropdown</h2>
        <ComponentPreview
          title="Select Input"
          description="Dropdown select with options"
          code={`import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"

export default function Example() {
  return (
    <div className="grid gap-2 w-full max-w-sm">
      <Label>Select a fruit</Label>
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Select an option" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="orange">Orange</SelectItem>
          <SelectItem value="grape">Grape</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}`}
        >
          <div className="grid gap-2 w-full max-w-sm">
            <Label>Select a fruit</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select an option" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="orange">Orange</SelectItem>
                <SelectItem value="grape">Grape</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </ComponentPreview>
      </section>

      {/* Checkboxes and Radios */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Checkboxes & Radio Groups</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <ComponentPreview
            title="Checkbox"
            description="Single checkbox with label"
            code={`import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

export default function Example() {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" />
      <Label htmlFor="terms" className="cursor-pointer">
        Accept terms and conditions
      </Label>
    </div>
  )
}`}
          >
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <Label htmlFor="terms" className="cursor-pointer">
                Accept terms and conditions
              </Label>
            </div>
          </ComponentPreview>

          <ComponentPreview
            title="Checkbox Group"
            description="Multiple checkboxes"
            code={`import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

export default function Example() {
  return (
    <div className="space-y-3">
      <Label className="text-base">Select your interests</Label>
      <div className="flex items-center space-x-2">
        <Checkbox id="sports" />
        <Label htmlFor="sports" className="cursor-pointer">Sports</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="music" />
        <Label htmlFor="music" className="cursor-pointer">Music</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="tech" />
        <Label htmlFor="tech" className="cursor-pointer">Technology</Label>
      </div>
    </div>
  )
}`}
          >
            <div className="space-y-3">
              <Label className="text-base">Select your interests</Label>
              <div className="flex items-center space-x-2">
                <Checkbox id="sports" />
                <Label htmlFor="sports" className="cursor-pointer">Sports</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="music" />
                <Label htmlFor="music" className="cursor-pointer">Music</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="tech" />
                <Label htmlFor="tech" className="cursor-pointer">Technology</Label>
              </div>
            </div>
          </ComponentPreview>

          <ComponentPreview
            title="Radio Group"
            description="Single selection from multiple options"
            code={`import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

export default function Example() {
  return (
    <div className="space-y-3">
      <Label className="text-base">Choose a plan</Label>
      <RadioGroup defaultValue="pro">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="free" id="free" />
          <Label htmlFor="free" className="cursor-pointer">Free</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="pro" id="pro" />
          <Label htmlFor="pro" className="cursor-pointer">Pro</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="enterprise" id="enterprise" />
          <Label htmlFor="enterprise" className="cursor-pointer">Enterprise</Label>
        </div>
      </RadioGroup>
    </div>
  )
}`}
          >
            <div className="space-y-3">
              <Label className="text-base">Choose a plan</Label>
              <RadioGroup defaultValue="pro">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="free" id="free" />
                  <Label htmlFor="free" className="cursor-pointer">Free</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="pro" id="pro" />
                  <Label htmlFor="pro" className="cursor-pointer">Pro</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="enterprise" id="enterprise" />
                  <Label htmlFor="enterprise" className="cursor-pointer">Enterprise</Label>
                </div>
              </RadioGroup>
            </div>
          </ComponentPreview>
        </div>
      </section>

      {/* Form Example */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Complete Form</h2>
        <ComponentPreview
          title="Sign Up Form"
          description="Complete form with multiple field types"
          code={`import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"

export default function Example() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Create an account</CardTitle>
        <CardDescription>Enter your details to sign up</CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-4">
          <div className="grid gap-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="John Doe" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="signup-email">Email</Label>
            <Input id="signup-email" type="email" placeholder="john@example.com" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="signup-password">Password</Label>
            <Input id="signup-password" type="password" />
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="newsletter" />
            <Label htmlFor="newsletter" className="text-sm cursor-pointer">
              Subscribe to newsletter
            </Label>
          </div>
          <Button className="w-full">Create Account</Button>
        </form>
      </CardContent>
    </Card>
  )
}`}
        >
          <Card className="w-full max-w-md">
            <CardHeader>
              <CardTitle>Create an account</CardTitle>
              <CardDescription>Enter your details to sign up</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid gap-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="John Doe" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="signup-email">Email</Label>
                  <Input id="signup-email" type="email" placeholder="john@example.com" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="signup-password">Password</Label>
                  <Input id="signup-password" type="password" />
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="newsletter" />
                  <Label htmlFor="newsletter" className="text-sm cursor-pointer">
                    Subscribe to newsletter
                  </Label>
                </div>
                <Button className="w-full">Create Account</Button>
              </form>
            </CardContent>
          </Card>
        </ComponentPreview>
      </section>
    </div>
  );
}
