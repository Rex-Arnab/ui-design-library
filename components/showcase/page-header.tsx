import { CustomBadge } from "@/components/custom-ui/CustomBadge";

/**
 * Props for the PageHeader component
 */
interface PageHeaderProps {
  /**
   * Page title
   */
  title: string;

  /**
   * Page description
   */
  description: string;

  /**
   * Optional badge text (e.g., "New", "Beta", "Updated")
   */
  badge?: string;

  /**
   * Badge variant
   * @default "default"
   */
  badgeVariant?: "default" | "secondary" | "destructive" | "outline";
}

/**
 * PageHeader - Consistent page header for all showcase pages
 *
 * Displays a title, description, and optional badge at the top of each page.
 * Provides consistent styling and spacing across the showcase.
 *
 * @example
 * ```tsx
 * <PageHeader
 *   title="Buttons"
 *   description="A collection of button components with various styles, sizes, and states."
 *   badge="Updated"
 *   badgeVariant="success"
 * />
 * ```
 */
export function PageHeader({
  title,
  description,
  badge,
  badgeVariant = "default",
}: PageHeaderProps) {
  return (
    <div className="space-y-2 mb-8">
      <div className="flex items-center gap-3">
        <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
        {badge && (
          <CustomBadge variant={badgeVariant}>
            {badge}
          </CustomBadge>
        )}
      </div>
      <p className="text-muted-foreground text-base max-w-3xl">
        {description}
      </p>
    </div>
  );
}
