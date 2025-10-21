"use client";

import { PageHeader } from "@/components/showcase/page-header";
import { ComponentPreview } from "@/components/showcase/component-preview";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { CheckCircle2, AlertTriangle, Info, Loader2 } from "lucide-react";

export default function NotificationsPage() {
  // Basic toast examples
  const showBasicToast = () => {
    toast("Event has been created");
  };

  const showSuccessToast = () => {
    toast.success("Profile updated successfully");
  };

  const showErrorToast = () => {
    toast.error("Failed to save changes");
  };

  const showWarningToast = () => {
    toast.warning("Your session is about to expire");
  };

  const showInfoToast = () => {
    toast.info("New features are available");
  };

  // Toast with description
  const showToastWithDescription = () => {
    toast("Event scheduled", {
      description: "Monday, January 3rd at 6:00pm",
    });
  };

  // Toast with action
  const showToastWithAction = () => {
    toast("File deleted", {
      action: {
        label: "Undo",
        onClick: () => console.log("Undo clicked"),
      },
    });
  };

  // Loading toast
  const showLoadingToast = () => {
    const toastId = toast.loading("Uploading file...");

    setTimeout(() => {
      toast.success("File uploaded successfully", {
        id: toastId,
      });
    }, 3000);
  };

  // Promise toast
  const showPromiseToast = () => {
    const promise = () => new Promise((resolve) => setTimeout(() => resolve({ name: "data" }), 3000));

    toast.promise(promise, {
      loading: "Processing request...",
      success: "Request completed successfully",
      error: "Failed to process request",
    });
  };

  // Position variants
  const showTopCenterToast = () => {
    toast("This appears at the top center", {
      position: "top-center",
    });
  };

  const showTopRightToast = () => {
    toast.success("Saved to draft", {
      position: "top-right",
    });
  };

  const showBottomLeftToast = () => {
    toast("Download started", {
      position: "bottom-left",
    });
  };

  const showBottomCenterToast = () => {
    toast.info("Updates available", {
      position: "bottom-center",
    });
  };

  // Custom duration
  const showLongToast = () => {
    toast("This toast will stay for 10 seconds", {
      duration: 10000,
    });
  };

  return (
    <div className="space-y-12">
      <PageHeader
        title="Push Notifications"
        description="Toast notifications using Sonner. Display feedback messages, alerts, and confirmations with various styles and positions."
      />

      {/* Basic Notifications */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Basic Notifications</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ComponentPreview
            title="Default Toast"
            description="Simple notification message"
            code={`import { toast } from "sonner";

<Button onClick={() => toast("Event has been created")}>
  Show Toast
</Button>`}
          >
            <Button onClick={showBasicToast}>Show Toast</Button>
          </ComponentPreview>

          <ComponentPreview
            title="Success"
            description="Success message with checkmark"
            code={`import { toast } from "sonner";

<Button onClick={() => toast.success("Profile updated successfully")}>
  Show Success
</Button>`}
          >
            <Button onClick={showSuccessToast} variant="default">
              Show Success
            </Button>
          </ComponentPreview>

          <ComponentPreview
            title="Error"
            description="Error message with X icon"
            code={`import { toast } from "sonner";

<Button onClick={() => toast.error("Failed to save changes")}>
  Show Error
</Button>`}
          >
            <Button onClick={showErrorToast} variant="destructive">
              Show Error
            </Button>
          </ComponentPreview>

          <ComponentPreview
            title="Warning"
            description="Warning message with alert icon"
            code={`import { toast } from "sonner";

<Button onClick={() => toast.warning("Session expiring soon")}>
  Show Warning
</Button>`}
          >
            <Button onClick={showWarningToast} variant="outline">
              <AlertTriangle className="mr-2 h-4 w-4" />
              Show Warning
            </Button>
          </ComponentPreview>

          <ComponentPreview
            title="Info"
            description="Informational message"
            code={`import { toast } from "sonner";

<Button onClick={() => toast.info("New features available")}>
  Show Info
</Button>`}
          >
            <Button onClick={showInfoToast} variant="secondary">
              <Info className="mr-2 h-4 w-4" />
              Show Info
            </Button>
          </ComponentPreview>

          <ComponentPreview
            title="Loading"
            description="Loading state that updates to success"
            code={`import { toast } from "sonner";

<Button onClick={() => {
  const id = toast.loading("Uploading...");
  setTimeout(() => {
    toast.success("Uploaded!", { id });
  }, 3000);
}}>
  Show Loading
</Button>`}
          >
            <Button onClick={showLoadingToast} variant="outline">
              <Loader2 className="mr-2 h-4 w-4" />
              Show Loading
            </Button>
          </ComponentPreview>
        </div>
      </section>

      {/* Enhanced Notifications */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Enhanced Notifications</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <ComponentPreview
            title="With Description"
            description="Toast with additional context"
            code={`import { toast } from "sonner";

<Button onClick={() => {
  toast("Event scheduled", {
    description: "Monday, January 3rd at 6:00pm"
  });
}}>
  Show Description
</Button>`}
          >
            <Button onClick={showToastWithDescription}>Show Description</Button>
          </ComponentPreview>

          <ComponentPreview
            title="With Action Button"
            description="Toast with interactive action"
            code={`import { toast } from "sonner";

<Button onClick={() => {
  toast("File deleted", {
    action: {
      label: "Undo",
      onClick: () => console.log("Undo clicked")
    }
  });
}}>
  Show Action
</Button>`}
          >
            <Button onClick={showToastWithAction} variant="destructive">
              Delete File
            </Button>
          </ComponentPreview>

          <ComponentPreview
            title="Promise Toast"
            description="Automatically handles async operations"
            code={`import { toast } from "sonner";

<Button onClick={() => {
  const promise = () =>
    new Promise((resolve) =>
      setTimeout(() => resolve({ data: "result" }), 3000)
    );

  toast.promise(promise, {
    loading: "Processing...",
    success: "Completed!",
    error: "Failed"
  });
}}>
  Show Promise
</Button>`}
          >
            <Button onClick={showPromiseToast}>Process Request</Button>
          </ComponentPreview>

          <ComponentPreview
            title="Custom Duration"
            description="Toast that stays for 10 seconds"
            code={`import { toast } from "sonner";

<Button onClick={() => {
  toast("Long message", {
    duration: 10000
  });
}}>
  Show Long Toast
</Button>`}
          >
            <Button onClick={showLongToast} variant="secondary">
              Show Long Toast
            </Button>
          </ComponentPreview>
        </div>
      </section>

      {/* Position Variants */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Position Variants</h2>
        <ComponentPreview
          title="Toast Positions"
          description="Click buttons to see toasts in different positions"
          code={`import { toast } from "sonner";

// Top positions
toast("Message", { position: "top-left" });
toast("Message", { position: "top-center" });
toast("Message", { position: "top-right" });

// Bottom positions
toast("Message", { position: "bottom-left" });
toast("Message", { position: "bottom-center" });
toast("Message", { position: "bottom-right" });`}
        >
          <div className="grid grid-cols-2 gap-4 w-full max-w-md">
            <Button onClick={showTopCenterToast} variant="outline" className="col-span-2">
              Top Center
            </Button>
            <Button onClick={showTopRightToast} variant="outline">
              Top Right
            </Button>
            <Button onClick={showBottomLeftToast} variant="outline">
              Bottom Left
            </Button>
            <Button onClick={showBottomCenterToast} variant="outline" className="col-span-2">
              Bottom Center
            </Button>
          </div>
        </ComponentPreview>
      </section>

      {/* Implementation Guide */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Implementation</h2>
        <div className="grid lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Setup</CardTitle>
              <CardDescription>Add Toaster to your root layout</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <pre className="text-xs bg-muted p-3 rounded-md overflow-x-auto">
{`// app/layout.tsx
import { Toaster } from "@/components/ui/sonner";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Toaster />
      </body>
    </html>
  );
}`}
              </pre>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Usage</CardTitle>
              <CardDescription>Import and use toast function</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <pre className="text-xs bg-muted p-3 rounded-md overflow-x-auto">
{`import { toast } from "sonner";

// Basic
toast("Message");

// With options
toast.success("Success!", {
  description: "Your changes were saved",
  action: {
    label: "View",
    onClick: () => console.log("View")
  }
});`}
              </pre>
            </CardContent>
          </Card>

          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="text-lg">Features</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="grid md:grid-cols-2 gap-2 text-sm text-muted-foreground">
                <li className="flex items-start">
                  <CheckCircle2 className="h-4 w-4 mr-2 text-green-500 mt-0.5" />
                  Multiple notification types (success, error, warning, info)
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-4 w-4 mr-2 text-green-500 mt-0.5" />
                  Customizable positions (6 positions available)
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-4 w-4 mr-2 text-green-500 mt-0.5" />
                  Action buttons for interactive notifications
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-4 w-4 mr-2 text-green-500 mt-0.5" />
                  Loading states with promise handling
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-4 w-4 mr-2 text-green-500 mt-0.5" />
                  Dark mode support built-in
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-4 w-4 mr-2 text-green-500 mt-0.5" />
                  Fully accessible with keyboard navigation
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
