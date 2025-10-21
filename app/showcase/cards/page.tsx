import { PageHeader } from "@/components/showcase/page-header";
import { ComponentPreview } from "@/components/showcase/component-preview";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DollarSign, Users, CreditCard, Activity, Heart, Check, Image as ImageIcon } from "lucide-react";

const pricingTiers = [
  {
    name: "Starter",
    price: 9,
    description: "Perfect for individuals",
    features: ["5 Projects", "10GB Storage", "Basic Support", "API Access"],
    featured: false,
  },
  {
    name: "Pro",
    price: 29,
    description: "Best for professionals",
    features: ["Unlimited Projects", "100GB Storage", "Priority Support", "Advanced API", "Custom Domain"],
    featured: true,
  },
  {
    name: "Enterprise",
    price: 99,
    description: "For large teams",
    features: ["Unlimited Everything", "1TB Storage", "24/7 Support", "Dedicated Manager", "Custom Integration"],
    featured: false,
  },
];

export default function CardsPage() {
  return (
    <div className="space-y-12">
      <PageHeader
        title="Cards"
        description="Flexible card components for organizing content. Perfect for dashboards, product listings, and content grids."
      />

      {/* Basic Cards */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Basic Cards</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ComponentPreview
            title="Simple Card"
            description="Basic card with title and description"
            code={`import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"

export default function Example() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card description goes here</CardDescription>
      </CardHeader>
      <CardContent>
        <p>This is the main content of the card.</p>
      </CardContent>
    </Card>
  )
}`}
          >
            <Card className="w-full">
              <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>Card description goes here</CardDescription>
              </CardHeader>
              <CardContent>
                <p>This is the main content of the card.</p>
              </CardContent>
            </Card>
          </ComponentPreview>

          <ComponentPreview
            title="With Footer"
            description="Card with header, content, and footer"
            code={`import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Example() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Card with Footer</CardTitle>
      </CardHeader>
      <CardContent>
        <p>Main content area with important information.</p>
      </CardContent>
      <CardFooter>
        <Button>Action</Button>
      </CardFooter>
    </Card>
  )
}`}
          >
            <Card className="w-full">
              <CardHeader>
                <CardTitle>Card with Footer</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Main content area with important information.</p>
              </CardContent>
              <CardFooter>
                <Button>Action</Button>
              </CardFooter>
            </Card>
          </ComponentPreview>

          <ComponentPreview
            title="With Badge"
            description="Card with status badge"
            code={`import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Example() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Featured Item</CardTitle>
          <Badge>New</Badge>
        </div>
        <CardDescription>Recently added content</CardDescription>
      </CardHeader>
      <CardContent>
        <p>This card highlights new or featured content.</p>
      </CardContent>
    </Card>
  )
}`}
          >
            <Card className="w-full">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Featured Item</CardTitle>
                  <Badge>New</Badge>
                </div>
                <CardDescription>Recently added content</CardDescription>
              </CardHeader>
              <CardContent>
                <p>This card highlights new or featured content.</p>
              </CardContent>
            </Card>
          </ComponentPreview>
        </div>
      </section>

      {/* Stats Cards */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Stats Cards</h2>
        <ComponentPreview
          title="Dashboard Stats"
          description="Cards for displaying key metrics"
          code={`import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { DollarSign, Users, CreditCard, Activity } from "lucide-react"

export default function Example() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
          <DollarSign className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">$45,231</div>
          <p className="text-xs text-muted-foreground">+20.1% from last month</p>
        </CardContent>
      </Card>
      {/* More cards... */}
    </div>
  )
}`}
        >
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 w-full">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$45,231</div>
                <p className="text-xs text-muted-foreground">+20.1% from last month</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Active Users</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+2,350</div>
                <p className="text-xs text-muted-foreground">+180.1% from last month</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Sales</CardTitle>
                <CreditCard className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+12,234</div>
                <p className="text-xs text-muted-foreground">+19% from last month</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Active Now</CardTitle>
                <Activity className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+573</div>
                <p className="text-xs text-muted-foreground">+201 since last hour</p>
              </CardContent>
            </Card>
          </div>
        </ComponentPreview>
      </section>

      {/* Product Card */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Product Card</h2>
        <ComponentPreview
          title="E-commerce Product"
          description="Card with image placeholder and action buttons"
          code={`import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, Image as ImageIcon } from "lucide-react"

export default function Example() {
  return (
    <Card className="w-full max-w-sm overflow-hidden">
      <div className="aspect-video bg-muted relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <ImageIcon className="h-12 w-12 text-muted-foreground" />
        </div>
      </div>
      <CardHeader>
        <CardTitle>Product Name</CardTitle>
        <CardDescription>High-quality product description</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">$99.99</div>
        <p className="text-sm text-muted-foreground mt-1">Free shipping</p>
      </CardContent>
      <CardFooter className="gap-2">
        <Button className="flex-1">Add to Cart</Button>
        <Button variant="outline" size="icon">
          <Heart className="h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  )
}`}
        >
          <Card className="w-full max-w-sm overflow-hidden">
            <div className="aspect-video bg-muted relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <ImageIcon className="h-12 w-12 text-muted-foreground" />
              </div>
            </div>
            <CardHeader>
              <CardTitle>Product Name</CardTitle>
              <CardDescription>High-quality product description</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$99.99</div>
              <p className="text-sm text-muted-foreground mt-1">Free shipping</p>
            </CardContent>
            <CardFooter className="gap-2">
              <Button className="flex-1">Add to Cart</Button>
              <Button variant="outline" size="icon">
                <Heart className="h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        </ComponentPreview>
      </section>

      {/* Pricing Cards */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Pricing Cards</h2>
        <ComponentPreview
          title="Pricing Tiers"
          description="Cards for pricing plans with featured highlight"
          code={`import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

const pricingTiers = [
  {
    name: "Starter",
    price: 9,
    description: "Perfect for individuals",
    features: ["5 Projects", "10GB Storage", "Basic Support"],
    featured: false,
  },
  // More tiers...
]

export default function Example() {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {pricingTiers.map((tier) => (
        <Card key={tier.name} className={tier.featured ? "border-primary border-2" : ""}>
          <CardHeader>
            <CardTitle>{tier.name}</CardTitle>
            <CardDescription>{tier.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mb-4">
              <span className="text-4xl font-bold">\${tier.price}</span>
              <span className="text-muted-foreground">/month</span>
            </div>
            <ul className="space-y-2 text-sm">
              {tier.features.map((feature) => (
                <li key={feature} className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-500" />
                  {feature}
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full" variant={tier.featured ? "default" : "outline"}>
              Get Started
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}`}
        >
          <div className="grid md:grid-cols-3 gap-6 w-full">
            {pricingTiers.map((tier) => (
              <Card key={tier.name} className={tier.featured ? "border-primary border-2" : ""}>
                <CardHeader>
                  <CardTitle>{tier.name}</CardTitle>
                  <CardDescription>{tier.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <span className="text-4xl font-bold">${tier.price}</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                  <ul className="space-y-2 text-sm">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-green-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" variant={tier.featured ? "default" : "outline"}>
                    Get Started
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </ComponentPreview>
      </section>
    </div>
  );
}
