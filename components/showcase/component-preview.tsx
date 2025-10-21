"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CodeBlock } from "./code-block";
import { cn } from "@/lib/utils";

/**
 * Props for the ComponentPreview component
 */
interface ComponentPreviewProps {
  /**
   * Title displayed at the top of the preview
   */
  title: string;

  /**
   * The component(s) to render in preview mode
   */
  children: React.ReactNode;

  /**
   * Source code to display in code tab
   */
  code?: string;

  /**
   * Optional description shown below title
   */
  description?: string;

  /**
   * Whether to show the code tab
   * @default true
   */
  showCode?: boolean;

  /**
   * Alignment of preview content
   * @default "center"
   */
  align?: "start" | "center" | "end";

  /**
   * Whether preview should have dark background
   * @default false
   */
  darkPreview?: boolean;
}

/**
 * ComponentPreview - Displays UI components with preview and code tabs
 *
 * This component allows users to see both the rendered component and its source code,
 * with the ability to copy the code to clipboard.
 *
 * @example
 * ```tsx
 * <ComponentPreview
 *   title="Primary Button"
 *   description="A standard primary button"
 *   code={`<Button variant="default">Click me</Button>`}
 * >
 *   <Button variant="default">Click me</Button>
 * </ComponentPreview>
 * ```
 */
export function ComponentPreview({
  title,
  children,
  code,
  description,
  showCode = true,
  align = "center",
  darkPreview = false,
}: ComponentPreviewProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (!code) return;
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const alignClasses = {
    start: "items-start",
    center: "items-center",
    end: "items-end",
  };

  return (
    <Card className="overflow-hidden">
      <div className="flex items-center justify-between border-b px-4 py-3 bg-muted/50">
        <div>
          <h3 className="font-semibold text-sm">{title}</h3>
          {description && (
            <p className="text-xs text-muted-foreground mt-0.5">{description}</p>
          )}
        </div>
        {code && (
          <Button
            variant="ghost"
            size="sm"
            onClick={handleCopy}
            className="h-8 px-2"
            aria-label={copied ? "Code copied to clipboard" : "Copy code to clipboard"}
          >
            {copied ? (
              <Check className="h-4 w-4 text-green-500" />
            ) : (
              <Copy className="h-4 w-4" />
            )}
            <span className="ml-2 text-xs">
              {copied ? "Copied!" : "Copy"}
            </span>
          </Button>
        )}
      </div>

      <Tabs defaultValue="preview" className="w-full">
        {showCode && (
          <TabsList className="w-full justify-start rounded-none border-b bg-transparent px-4">
            <TabsTrigger value="preview">Preview</TabsTrigger>
            <TabsTrigger value="code">Code</TabsTrigger>
          </TabsList>
        )}

        <TabsContent value="preview" className="mt-0">
          <div
            className={cn(
              "flex min-h-[200px] justify-center p-8",
              alignClasses[align],
              darkPreview && "bg-slate-950"
            )}
          >
            {children}
          </div>
        </TabsContent>

        {showCode && code && (
          <TabsContent value="code" className="mt-0">
            <CodeBlock code={code} language="tsx" />
          </TabsContent>
        )}
      </Tabs>
    </Card>
  );
}
