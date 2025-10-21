import { PageHeader } from "@/components/showcase/page-header";
import { ComponentPreview } from "@/components/showcase/component-preview";
import SimpleNavbar from "@/components/navigation/SimpleNavbar";
import MegaMenuNavbar from "@/components/navigation/MegaMenuNavbar";
import SidebarNav from "@/components/navigation/SidebarNav";
import TransparentNavbar from "@/components/navigation/TransparentNavbar";
import CenteredNavbar from "@/components/navigation/CenteredNavbar";
import SplitNavbar from "@/components/navigation/SplitNavbar";
import SearchNavbar from "@/components/navigation/SearchNavbar";
import MultiLevelNavbar from "@/components/navigation/MultiLevelNavbar";

export default function NavigationPage() {
  return (
    <div className="space-y-16">
      <PageHeader
        title="Navigation Components"
        description="Professional navigation and navbar components with various interaction patterns. Built with Tailwind CSS and responsive design. Choose from 8 navigation styles."
        badge="8 Components"
        badgeVariant="default"
      />

      <ComponentPreview
        title="Simple Navbar"
        description="Classic horizontal navbar with logo, navigation links, CTA button, and mobile hamburger menu. Perfect for most websites."
      >
        <SimpleNavbar />
      </ComponentPreview>

      <ComponentPreview
        title="Mega Menu Navbar"
        description="Horizontal navbar with mega menu dropdowns featuring multi-column panels. Ideal for content-rich sites with many sections."
      >
        <MegaMenuNavbar />
      </ComponentPreview>

      <ComponentPreview
        title="Sidebar Navigation"
        description="Vertical sidebar navigation with collapsible sections and icon-only collapse mode. Great for dashboards and apps."
      >
        <SidebarNav />
      </ComponentPreview>

      <ComponentPreview
        title="Transparent Navbar"
        description="Transparent initially, becomes solid on scroll with blurred backdrop. Perfect for hero sections and landing pages."
      >
        <TransparentNavbar />
      </ComponentPreview>

      <ComponentPreview
        title="Centered Navbar"
        description="All content center-aligned with logo centered and symmetrical layout. Modern and balanced design aesthetic."
      >
        <CenteredNavbar />
      </ComponentPreview>

      <ComponentPreview
        title="Split Navbar"
        description="Logo positioned far left with navigation far right using space-between layout. Clean and organized structure."
      >
        <SplitNavbar />
      </ComponentPreview>

      <ComponentPreview
        title="Search Navbar"
        description="Integrated search bar with search suggestions dropdown and real-time results. Ideal for content-heavy platforms."
      >
        <SearchNavbar />
      </ComponentPreview>

      <ComponentPreview
        title="Multi-Level Navbar"
        description="Two-level navigation with utility links above main navigation. Perfect for large sites with complex hierarchies."
      >
        <MultiLevelNavbar />
      </ComponentPreview>
    </div>
  );
}
