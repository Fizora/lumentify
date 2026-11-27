import { LuBox, LuFolderOpen, LuInbox, LuReceipt } from "react-icons/lu";

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
        items: [{ name: "Support", href: "/support" }],
      },
      {
        title: "Services",
        items: [
          { name: "Web Development", href: "/services/web-development" },
          { name: "Web Maintenance", href: "/services/web-maintenance" },
          { name: "SEO", href: "/services/seo" },
        ],
      },
      {
        title: "Legal",
        items: [
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

export const siteContent = {
  brandName: "Lexentify",
  siteUrl: "https://lexentify.com",
  metadata: {
    title: "Web Design & Development for Home-Service Businesses",
    template: "%s | Lexentify",
    description:
      "Lexentify builds fast, mobile-friendly websites for plumbers, electricians, HVAC, and other home-service businesses. Explore web development, local SEO, pricing, and maintenance.",
  },
  email: "business@lexentify.com",
  businessEmail: "business@lexentify.com",
  logoAlt: "Lexentify logo",
  navbar: {
    workHours: "Monday - Friday: 09:00 - 17:00 GMT+7",
    contactAction: "Contact",
    mobileContactAction: "Contact Us",
    startAction: "Start Project",
    contactHref: "mailto:business@lexentify.com",
    startHref: "/start-project",
    servicesLabel: "Services",
  },
  footer: {
    background: "#000000",
    brandWordmark: "LEXENTIFY",
    groups: [
      {
        title: "Explore",
        links: [
          { label: "Showcase", href: "/showcase" },
          { label: "Pricing", href: "/pricing" },
          { label: "FAQ", href: "/faq" },
          { label: "Web Development", href: "/services/web-development" },
          { label: "Web Maintenance", href: "/services/web-maintenance" },
          { label: "SEO", href: "/services/seo" },
        ],
      },
      {
        title: "Company",
        links: [
          { label: "About", href: "/about" },
          { label: "Support", href: "/support" },
        ],
      },
      {
        title: "Legal",
        links: [
          { label: "Privacy Policy", href: "/legal/privacy-policy" },
          { label: "Terms & Conditions", href: "/legal/terms" },
        ],
      },
    ],
    description:
      "Mobile-friendly websites for Australian home-service businesses, with clear services, local coverage and straightforward contact options.",
    contactTitle: "Get in Touch",
    emailAction: "Email",
    sendAction: "Send",
    copyright: "All rights reserved.",
    region: "Asia-Pacific / Remote",
    privacyLink: "Privacy",
    termsLink: "Terms",
  },
  workStatus: {
    open: "Open now",
    closed: "Closed",
    hours: "Mon–Fri, 09:00–18:00 (GMT+7)",
  },
  whatsappAction: "Contact Us",
} as const;
