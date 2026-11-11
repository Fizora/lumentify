import { LuInbox, LuBox, LuReceipt, LuFolderOpen } from "react-icons/lu";

export type NavLink = { name: string; href: string; type?: undefined };
export type NavDropdown = {
  name: string;
  type: "dropdown";
  categories: { title: string; items: { name: string; href: string }[] }[];
};
export type NavItem = NavLink | NavDropdown;

export const navItems: NavItem[] = [
  { name: "About", href: "/about" },
  { name: "Pricing", href: "/pricing" },
  { name: "Showcase", href: "/showcase" },
  {
    name: "Services",
    type: "dropdown",
    categories: [
      {
        title: "Support",
        items: [
          { name: "Support", href: "/support" },
          // { name: "Help Center", href: "/support/help-center" },
          // { name: "Warranty", href: "/support/warranty" },
        ],
      },
      {
        title: "Services",
        items: [
          { name: "Web Development", href: "/services/web-development" },
          // { name: "Web Maintenance", href: "/services/web-maintenance" },
          { name: "SEO", href: "/services/seo" },
        ],
      },
      {
        title: "Legal",
        items: [
          // { name: "Work Flow", href: "/legal/work-flow" },
          { name: "Terms & Condition", href: "/legal/terms" },
          { name: "Privacy Policy", href: "/legal/privacy-policy" },
        ],
      },
    ],
  },
];

export const sidebarNavItems = [
  { name: "Inbox", href: "/dashboard-panel/inbox", icon: LuInbox },
  { name: "Projects", href: "/dashboard-panel/projects", icon: LuBox },
  { name: "Invoices", href: "/dashboard-panel/invoices", icon: LuReceipt },
  { name: "Documents", href: "/dashboard-panel/documents", icon: LuFolderOpen },
];
