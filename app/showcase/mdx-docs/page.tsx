"use client";

import { PageHeader } from "@/components/showcase/page-header";
import { ComponentPreview } from "@/components/showcase/component-preview";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle2, AlertCircle, Info, Lightbulb, Github } from "lucide-react";
import { CodeBlock } from "@/components/showcase/code-block";

export default function MDXDocsPage() {
  return (
    <div className="space-y-12">
      <PageHeader
        title="MDX Documentation Example"
        description="MDX allows you to use JSX components directly in Markdown. Write interactive docs with live examples, custom components, and rich formatting."
      />

      {/* What is MDX */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">What is MDX?</h2>
        <p className="text-muted-foreground leading-7">
          MDX is a format that combines <strong>Markdown</strong> and <strong>JSX</strong>. It allows you to import and use React components directly in your markdown content, making it perfect for interactive documentation.
        </p>

        <div className="space-y-2 mt-6">
          <h3 className="text-xl font-semibold">Key Features</h3>
          <ul className="list-none space-y-1 text-muted-foreground">
            <li className="flex items-center">
              <CheckCircle2 className="h-4 w-4 mr-2 text-green-500" />
              Write in Markdown syntax
            </li>
            <li className="flex items-center">
              <CheckCircle2 className="h-4 w-4 mr-2 text-green-500" />
              Import and use React components
            </li>
            <li className="flex items-center">
              <CheckCircle2 className="h-4 w-4 mr-2 text-green-500" />
              Create interactive examples
            </li>
            <li className="flex items-center">
              <CheckCircle2 className="h-4 w-4 mr-2 text-green-500" />
              Syntax highlighting for code blocks
            </li>
            <li className="flex items-center">
              <CheckCircle2 className="h-4 w-4 mr-2 text-green-500" />
              Fully typed with TypeScript
            </li>
          </ul>
        </div>
      </section>

      <hr className="border-border" />

      {/* Using Components */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Using Components in MDX</h2>
        <p className="text-muted-foreground">
          You can import and use any React component directly in MDX:
        </p>

        <Card>
          <CardHeader>
            <CardTitle>Example Card Component</CardTitle>
            <CardDescription>
              This card is rendered using the Card component from our UI library.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              MDX makes it easy to embed interactive components within your documentation.
            </p>
          </CardContent>
        </Card>

        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Code Example</h3>
          <p className="text-sm text-muted-foreground">
            Here&apos;s how the card above was created:
          </p>
          <CodeBlock
            language="jsx"
            code={`<Card>
  <CardHeader>
    <CardTitle>Example Card Component</CardTitle>
    <CardDescription>
      This card is rendered using the Card component
    </CardDescription>
  </CardHeader>
  <CardContent>
    <p>MDX makes it easy to embed components!</p>
  </CardContent>
</Card>`}
          />
        </div>
      </section>

      <hr className="border-border" />

      {/* Interactive Demos */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Interactive Demos</h2>
        <p className="text-muted-foreground">
          Create live, interactive examples with full functionality:
        </p>

        <ComponentPreview
          title="Interactive Button Demo"
          description="Click the button to see it in action"
          code={`import { Button } from "@/components/ui/button";

<Button onClick={() => alert('Hello from MDX!')}>
  Click Me
</Button>`}
        >
          <Button onClick={() => alert("Hello from MDX!")}>Click Me</Button>
        </ComponentPreview>
      </section>

      <hr className="border-border" />

      {/* Alerts and Callouts */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Alerts and Callouts</h2>
        <p className="text-muted-foreground">
          Use custom components to create rich callouts:
        </p>

        <div className="space-y-4">
          <Alert>
            <Info className="h-4 w-4" />
            <AlertTitle>Info</AlertTitle>
            <AlertDescription>
              This is an informational message using the Alert component.
            </AlertDescription>
          </Alert>

          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Warning</AlertTitle>
            <AlertDescription>
              Be careful! This alerts users to potential issues.
            </AlertDescription>
          </Alert>

          <Alert className="border-green-500 text-green-700 dark:text-green-400">
            <CheckCircle2 className="h-4 w-4" />
            <AlertTitle>Success</AlertTitle>
            <AlertDescription>Operation completed successfully!</AlertDescription>
          </Alert>

          <Alert className="border-amber-500 text-amber-700 dark:text-amber-400">
            <Lightbulb className="h-4 w-4" />
            <AlertTitle>Tip</AlertTitle>
            <AlertDescription>
              Pro tip: You can customize alert variants with Tailwind classes.
            </AlertDescription>
          </Alert>
        </div>
      </section>

      <hr className="border-border" />

      {/* Tabs */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Tabs for Multi-part Content</h2>

        <Tabs defaultValue="overview" className="w-full">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="installation">Installation</TabsTrigger>
            <TabsTrigger value="usage">Usage</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4 mt-4">
            <h3 className="text-lg font-semibold">Getting Started</h3>
            <p className="text-muted-foreground">
              MDX combines the simplicity of Markdown with the power of React components.
              Perfect for documentation, blogs, and content-rich websites.
            </p>
          </TabsContent>

          <TabsContent value="installation" className="space-y-4 mt-4">
            <h3 className="text-lg font-semibold">Installation Steps</h3>
            <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
              <li>Install MDX: <code className="bg-muted px-1.5 py-0.5 rounded text-sm">npm install @next/mdx @mdx-js/loader @mdx-js/react</code></li>
              <li>Configure in <code className="bg-muted px-1.5 py-0.5 rounded text-sm">next.config.js</code></li>
              <li>Create an <code className="bg-muted px-1.5 py-0.5 rounded text-sm">mdx-components.tsx</code> file</li>
              <li>Start writing <code className="bg-muted px-1.5 py-0.5 rounded text-sm">.mdx</code> files</li>
            </ol>
          </TabsContent>

          <TabsContent value="usage" className="space-y-4 mt-4">
            <h3 className="text-lg font-semibold">How to Use</h3>
            <p className="text-muted-foreground">
              Import components at the top of your MDX file and use them anywhere in your content.
              Combine them with standard Markdown syntax for the best of both worlds.
            </p>
          </TabsContent>
        </Tabs>
      </section>

      <hr className="border-border" />

      {/* Inline Components */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Inline Components</h2>
        <p className="text-muted-foreground">
          You can also use inline components like <Badge>NEW</Badge> or{" "}
          <Badge variant="destructive">BREAKING</Badge> directly within text.
        </p>

        <p className="text-muted-foreground">Try combining multiple components:</p>

        <div className="flex gap-2">
          <Button variant="default" size="sm">
            Primary
          </Button>
          <Button variant="secondary" size="sm">
            Secondary
          </Button>
          <Button variant="outline" size="sm">
            Outline
          </Button>
          <Button variant="ghost" size="sm">
            Ghost
          </Button>
        </div>
      </section>

      <hr className="border-border" />

      {/* Code Blocks */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Code Blocks with Syntax Highlighting</h2>
        <p className="text-muted-foreground">
          MDX supports code blocks with syntax highlighting:
        </p>

        <div className="space-y-4">
          <div>
            <h4 className="text-sm font-semibold mb-2">TypeScript Example</h4>
            <CodeBlock
              language="typescript"
              code={`import type { MDXComponents } from 'mdx/types';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="text-3xl font-bold">{children}</h1>
    ),
    ...components,
  };
}`}
            />
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-2">React Component Example</h4>
            <CodeBlock
              language="jsx"
              code={`// React Component Example
export default function MyComponent() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      Clicked {count} times
    </button>
  );
}`}
            />
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-2">CSS Example</h4>
            <CodeBlock
              language="css"
              code={`/* CSS Example */
.custom-class {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  border-radius: 0.5rem;
  background: hsl(var(--primary));
}`}
            />
          </div>
        </div>
      </section>

      <hr className="border-border" />

      {/* Tables */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Tables</h2>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b">
                <th className="px-4 py-2 text-left font-semibold">Feature</th>
                <th className="px-4 py-2 text-left font-semibold">Markdown</th>
                <th className="px-4 py-2 text-left font-semibold">MDX</th>
                <th className="px-4 py-2 text-left font-semibold">HTML</th>
              </tr>
            </thead>
            <tbody className="text-muted-foreground">
              <tr className="border-b">
                <td className="px-4 py-2">Easy to write</td>
                <td className="px-4 py-2">✅</td>
                <td className="px-4 py-2">✅</td>
                <td className="px-4 py-2">❌</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2">Components</td>
                <td className="px-4 py-2">❌</td>
                <td className="px-4 py-2">✅</td>
                <td className="px-4 py-2">✅</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2">Interactive</td>
                <td className="px-4 py-2">❌</td>
                <td className="px-4 py-2">✅</td>
                <td className="px-4 py-2">✅</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2">Type-safe</td>
                <td className="px-4 py-2">❌</td>
                <td className="px-4 py-2">✅</td>
                <td className="px-4 py-2">❌</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <hr className="border-border" />

      {/* Lists */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Lists</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">Unordered List</h3>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>First item</li>
              <li>
                Second item with <strong>bold text</strong>
              </li>
              <li>
                Third item with <code className="bg-muted px-1.5 py-0.5 rounded text-sm">code</code>
              </li>
              <li className="ml-6">Nested item 1</li>
              <li className="ml-6">Nested item 2</li>
              <li>
                Fourth item with{" "}
                <a href="https://example.com" className="text-primary underline-offset-4 hover:underline">
                  a link
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Ordered List</h3>
            <ol className="list-decimal list-inside space-y-1 text-muted-foreground">
              <li>Step one: Install dependencies</li>
              <li>Step two: Configure the project</li>
              <li>Step three: Start building</li>
              <li>Step four: Deploy to production</li>
            </ol>
          </div>
        </div>
      </section>

      <hr className="border-border" />

      {/* Blockquotes */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Blockquotes</h2>

        <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground">
          <p className="mb-2">
            This is a blockquote. Use it to emphasize important information or quotes.
          </p>
          <p>You can have multiple paragraphs in a blockquote.</p>
        </blockquote>

        <blockquote className="border-l-4 border-primary pl-4 text-muted-foreground">
          <p>
            <strong>Note:</strong> MDX supports all standard Markdown syntax including bold,{" "}
            <em>italic</em>, <strong><em>bold italic</em></strong>,{" "}
            <code className="bg-muted px-1.5 py-0.5 rounded text-sm">inline code</code>, and{" "}
            <a href="https://mdxjs.com" className="text-primary underline-offset-4 hover:underline">
              links
            </a>.
          </p>
        </blockquote>
      </section>

      <hr className="border-border" />

      {/* Advantages */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Advantages of MDX</h2>

        <div className="grid md:grid-cols-2 gap-4">
          <Card>
            <CardHeader>
              <CheckCircle2 className="h-8 w-8 text-green-500 mb-2" />
              <CardTitle className="text-lg">Developer Experience</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Write content in familiar Markdown syntax while having access to the full power of React components when needed.
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CheckCircle2 className="h-8 w-8 text-green-500 mb-2" />
              <CardTitle className="text-lg">Interactive Docs</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Create living documentation with working examples, interactive demos, and real component previews.
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CheckCircle2 className="h-8 w-8 text-green-500 mb-2" />
              <CardTitle className="text-lg">Type Safety</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Full TypeScript support ensures your components and props are correctly used throughout your documentation.
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CheckCircle2 className="h-8 w-8 text-green-500 mb-2" />
              <CardTitle className="text-lg">Maintainable</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Update your component library and the documentation automatically reflects the changes. No duplicate code!
            </CardContent>
          </Card>
        </div>
      </section>

      <hr className="border-border" />

      {/* Conclusion */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Conclusion</h2>

        <p className="text-muted-foreground leading-7">
          MDX is a powerful tool for creating interactive documentation. It combines the simplicity of Markdown with the flexibility of React components, making it perfect for:
        </p>

        <ul className="list-disc list-inside space-y-1 text-muted-foreground">
          <li>
            <strong>Documentation sites</strong> - Create living docs with working examples
          </li>
          <li>
            <strong>Blog posts</strong> - Add interactive elements to enhance your content
          </li>
          <li>
            <strong>Tutorial content</strong> - Build step-by-step guides with embedded demos
          </li>
          <li>
            <strong>Component showcases</strong> - Display components with live previews
          </li>
        </ul>

        <p className="text-muted-foreground">
          Ready to start? Check out the{" "}
          <a
            href="https://mdxjs.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline-offset-4 hover:underline"
          >
            official MDX documentation
          </a>{" "}
          for more information!
        </p>

        <div className="flex gap-4 mt-8">
          <Button asChild>
            <a href="https://mdxjs.com" target="_blank" rel="noopener noreferrer">
              Learn More
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a href="https://github.com/mdx-js/mdx" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              View on GitHub
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
}
