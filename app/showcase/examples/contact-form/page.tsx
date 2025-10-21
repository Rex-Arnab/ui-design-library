"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { PageHeader } from "@/components/showcase/page-header";
import { CodeBlock } from "@/components/showcase/code-block";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Loader2, CheckCircle2 } from "lucide-react";

// Zod validation schema
const contactFormSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }).max(500, {
    message: "Message must not exceed 500 characters.",
  }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

// Contact Form Component
function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log("Form submitted:", data);
    setIsSubmitting(false);
    setIsSuccess(true);
    reset();

    // Reset success message after 5 seconds
    setTimeout(() => {
      setIsSuccess(false);
    }, 5000);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {/* Name Field */}
      <div className="grid gap-2">
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          placeholder="John Doe"
          {...register("name")}
          className={errors.name ? "border-red-500" : ""}
        />
        {errors.name && (
          <p className="text-xs text-red-500">{errors.name.message}</p>
        )}
      </div>

      {/* Email Field */}
      <div className="grid gap-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          placeholder="john@example.com"
          {...register("email")}
          className={errors.email ? "border-red-500" : ""}
        />
        {errors.email && (
          <p className="text-xs text-red-500">{errors.email.message}</p>
        )}
      </div>

      {/* Message Field */}
      <div className="grid gap-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          placeholder="Type your message here..."
          rows={5}
          {...register("message")}
          className={errors.message ? "border-red-500" : ""}
        />
        {errors.message && (
          <p className="text-xs text-red-500">{errors.message.message}</p>
        )}
        <p className="text-xs text-muted-foreground">
          Your message will be reviewed within 24 hours.
        </p>
      </div>

      {/* Success Message */}
      {isSuccess && (
        <div className="flex items-center gap-2 p-3 bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 rounded-md">
          <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400" />
          <p className="text-sm text-green-600 dark:text-green-400">
            Message sent successfully! We&apos;ll get back to you soon.
          </p>
        </div>
      )}

      {/* Submit Button */}
      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          "Send Message"
        )}
      </Button>
    </form>
  );
}

// Code snippets for display
const contactFormComponentCode = `"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Loader2, CheckCircle2 } from "lucide-react";

// Zod validation schema
const contactFormSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }).max(500, {
    message: "Message must not exceed 500 characters.",
  }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log("Form submitted:", data);
    setIsSubmitting(false);
    setIsSuccess(true);
    reset();

    // Reset success message after 5 seconds
    setTimeout(() => {
      setIsSuccess(false);
    }, 5000);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {/* Name Field */}
      <div className="grid gap-2">
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          placeholder="John Doe"
          {...register("name")}
          className={errors.name ? "border-red-500" : ""}
        />
        {errors.name && (
          <p className="text-xs text-red-500">{errors.name.message}</p>
        )}
      </div>

      {/* Email Field */}
      <div className="grid gap-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          placeholder="john@example.com"
          {...register("email")}
          className={errors.email ? "border-red-500" : ""}
        />
        {errors.email && (
          <p className="text-xs text-red-500">{errors.email.message}</p>
        )}
      </div>

      {/* Message Field */}
      <div className="grid gap-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          placeholder="Type your message here..."
          rows={5}
          {...register("message")}
          className={errors.message ? "border-red-500" : ""}
        />
        {errors.message && (
          <p className="text-xs text-red-500">{errors.message.message}</p>
        )}
      </div>

      {/* Success Message */}
      {isSuccess && (
        <div className="flex items-center gap-2 p-3 bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 rounded-md">
          <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400" />
          <p className="text-sm text-green-600 dark:text-green-400">
            Message sent successfully!
          </p>
        </div>
      )}

      {/* Submit Button */}
      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          "Send Message"
        )}
      </Button>
    </form>
  );
}`;

const contactFormSchemaCode = `import * as z from "zod";

// Define the validation schema
export const contactFormSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }).max(500, {
    message: "Message must not exceed 500 characters.",
  }),
});

// Infer the TypeScript type from the schema
export type ContactFormValues = z.infer<typeof contactFormSchema>;`;

const usageExampleCode = `import { ContactForm } from "@/components/contact-form";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

export default function ContactPage() {
  return (
    <div className="container max-w-2xl py-8">
      <Card>
        <CardHeader>
          <CardTitle>Get in Touch</CardTitle>
          <CardDescription>
            Fill out the form below and we'll get back to you soon.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ContactForm />
        </CardContent>
      </Card>
    </div>
  );
}`;

// Main Page Component
export default function ContactFormPage() {
  return (
    <div className="space-y-12">
      <PageHeader
        title="Contact Form Example"
        description="A complete contact form implementation with React Hook Form and Zod validation. Features real-time validation, loading states, and success feedback."
      />

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Live Preview */}
        <div className="space-y-4">
          <div>
            <h2 className="text-xl font-semibold mb-2">Live Preview</h2>
            <p className="text-sm text-muted-foreground">
              Try submitting the form with valid and invalid data to see the validation in action.
            </p>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Get in Touch</CardTitle>
              <CardDescription>
                Fill out the form below and we&apos;ll get back to you soon.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ContactForm />
            </CardContent>
          </Card>
        </div>

        {/* Code Implementation */}
        <div className="space-y-4">
          <div>
            <h2 className="text-xl font-semibold mb-2">Implementation</h2>
            <p className="text-sm text-muted-foreground">
              Copy the code below to use this form in your project.
            </p>
          </div>
          <Tabs defaultValue="component" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="component">Component</TabsTrigger>
              <TabsTrigger value="schema">Schema</TabsTrigger>
              <TabsTrigger value="usage">Usage</TabsTrigger>
            </TabsList>
            <TabsContent value="component" className="mt-4">
              <CodeBlock code={contactFormComponentCode} language="tsx" />
            </TabsContent>
            <TabsContent value="schema" className="mt-4">
              <CodeBlock code={contactFormSchemaCode} language="tsx" />
            </TabsContent>
            <TabsContent value="usage" className="mt-4">
              <CodeBlock code={usageExampleCode} language="tsx" />
            </TabsContent>
          </Tabs>
        </div>
      </div>

      {/* Features Section */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Features</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Form Validation</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              <p>Uses Zod schema for robust client-side validation with custom error messages.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">React Hook Form</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              <p>Efficient form handling with minimal re-renders and built-in validation.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">TypeScript Support</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              <p>Fully typed with TypeScript for better developer experience and type safety.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Loading States</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              <p>Visual feedback during form submission with disabled state and spinner.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Success Feedback</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              <p>Clear success message displayed after successful submission with auto-dismiss.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Error Display</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              <p>Field-level error messages with visual indicators for better UX.</p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
