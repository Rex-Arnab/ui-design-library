"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  oneDark,
  oneLight,
} from "react-syntax-highlighter/dist/esm/styles/prism";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

/**
 * Props for the CodeBlock component
 */
interface CodeBlockProps {
  /**
   * Code string to display
   */
  code: string;

  /**
   * Programming language for syntax highlighting
   * @default "tsx"
   */
  language?: string;

  /**
   * Whether to show line numbers
   * @default false
   */
  showLineNumbers?: boolean;

  /**
   * Maximum height before scrolling
   */
  maxHeight?: string;

  /**
   * Whether to show copy button
   * @default true
   */
  showCopy?: boolean;
}

/**
 * CodeBlock - Displays syntax-highlighted code with copy functionality
 *
 * @example
 * ```tsx
 * <CodeBlock
 *   code={`const hello = "world";`}
 *   language="typescript"
 * />
 * ```
 */
export function CodeBlock({
  code,
  language = "tsx",
  showLineNumbers = false,
  maxHeight,
  showCopy = true,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);
  const { theme } = useTheme();

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group">
      {showCopy && (
        <Button
          variant="ghost"
          size="sm"
          onClick={handleCopy}
          className="absolute right-2 top-2 h-8 px-2 opacity-0 group-hover:opacity-100 transition-opacity z-10"
          aria-label={copied ? "Copied to clipboard" : "Copy code to clipboard"}
        >
          {copied ? (
            <Check className="h-3 w-3 text-green-500" />
          ) : (
            <Copy className="h-3 w-3" />
          )}
        </Button>
      )}

      <SyntaxHighlighter
        language={language}
        style={theme === "dark" ? oneDark : oneLight}
        showLineNumbers={showLineNumbers}
        customStyle={{
          margin: 0,
          borderRadius: 0,
          fontSize: "0.875rem",
          maxHeight: maxHeight,
        }}
        codeTagProps={{
          className: "font-mono",
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}
