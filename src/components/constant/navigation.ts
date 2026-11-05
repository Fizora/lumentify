import { LuInbox, LuBox, LuReceipt, LuFolderOpen } from "react-icons/lu";

export const sidebarNavItems = [
  { name: "Inbox", href: "/dashboard-panel/inbox", icon: LuInbox },
  { name: "Projects", href: "/dashboard-panel/projects", icon: LuBox },
  { name: "Invoices", href: "/dashboard-panel/invoices", icon: LuReceipt },
  { name: "Documents", href: "/dashboard-panel/documents", icon: LuFolderOpen },
];

export type NavLink = {
  name: string;
  href: string;
};

export const navItems: NavLink[] = [
  { name: "About", href: "/about" },
  { name: "Pricing", href: "/pricing" },
  { name: "Showcase", href: "/showcase" },
  { name: "Support", href: "/support" },
];
