export type PricingPlan = {
  name: string;
  description: string;
  price: string;
  period: string;
  features: string[];
  cta: string;
  href: string;
  learnHref?: string;
  paymentLink: string;
  featured: boolean;
};

export const buildPlans: PricingPlan[] = [
  {
    name: "Essential",
    description:
      "A focused landing page for one location, with clear services and direct contact options.",
    price: "$1,499",
    period: "one-time",
    features: [
      "1 High-Converting Landing Page",
      "Load Time Optimization",
      "Copywriting Optimization",
      "2 Rounds Revisions",
      "7-Day Post-Launch Support & Stabilization",
      "Includes 1-Year Hosting",
      "5–7 Business Days Delivery",
    ],
    cta: "Start My Site",
    href: "/start-project",
    learnHref: "/services/web-development/essential",
    paymentLink: "/dashboard-panel/services/payment",
    featured: false,
  },
  {
    name: "Pro",
    description:
      "A multi-page website for businesses covering more services or a wider local area.",
    price: "$2,499",
    period: "one-time",
    features: [
      "Up to 5 Custom Pages (Services & Suburbs)",
      "Dedicated Suburb-Level SEO Optimization",
      "Frictionless One-Tap Quote & Booking Form",
      "Copywriting Optimized",
      "4 Rounds Revisions",
      "14-Day Post-Launch Support & Stabilization",
      "Includes 2-Years Hosting",
      "1–2 Weeks Delivery",
    ],
    cta: "Get More Calls",
    href: "/start-project",
    learnHref: "/services/web-development/pro",
    paymentLink: "/dashboard-panel/services/payment",
    featured: true,
  },
  {
    name: "Custom",
    description:
      "A robust multi-suburb platform designed for scaling service fleets and multi-location trade operators.",
    price: "from $4,599",
    period: "one-time",
    features: [
      "Up to 12 Custom Pages (Features & Suburbs)",
      "Custom Quote, Booking or Enquiry Flows",
      "Third-Party Tool Integrations",
      "Copywriting Optimization",
      "Custom Dashboard Tool (where scoped)",
      "4 Rounds Revisions",
      "30-Day Post-Launch Support & Stabilization",
      "Includes 2-Years Hosting",
      "3–4 Weeks Delivery",
    ],
    cta: "Scope My Project",
    href: "/start-project",
    learnHref: "/services/web-development/custom",
    paymentLink: "/dashboard-panel/services/payment",
    featured: false,
  },
];

export const mrrPlans: PricingPlan[] = [
  {
    name: "Core Tech & Care",
    description:
      "Essential managed hosting and technical maintenance to keep your site ultra-fast, secure, and online 24/7.",
    price: "$89",
    period: "/mo",
    features: [
      "Ultra-Fast Secure Hosting & SSL Management",
      "Monthly Framework & Security Updates",
      "24/7 Uptime & Performance Monitoring",
      "1 Small Content/Price Update per month",
      "Dedicated Technical Support (48h SLA)",
    ],
    cta: "Subscribe",
    href: "/start-project",
    paymentLink: "/dashboard-panel/services/payment",
    featured: false,
  },
  {
    name: "Growth Care",
    description:
      "Expanded developer support with regular content updates and priority assistance.",
    price: "$199",
    period: "/mo",
    features: [
      "Includes everything in Core Tech & Care",
      "Priority Direct Support Channel",
      "Quarterly Speed & Mobile Performance Audit",
      "Up to 3 Content/Suburb Updates per month",
      "Proactive Database & Asset Optimization",
    ],
    cta: "Get Started",
    href: "/start-project",
    paymentLink: "/dashboard-panel/services/payment",
    featured: true,
  },
  {
    name: "Scaling Partner",
    description:
      "Dedicated full-stack maintenance partnership for multi-location trade operators and expanding rapidly.",
    price: "from $399",
    period: "/mo",
    features: [
      "Includes Full Managed Hosting & Care Suite",
      "New Suburb Page Additions (1 Page/Month)",
      "Priority Same-Day Development Turnaround",
      "Up to 5 Content/Suburb Updates per month",
      "Comprehensive Monthly Performance & Health Summary",
    ],
    cta: "Contact Sales",
    href: "/start-project",
    paymentLink: "/dashboard-panel/services/payment",
    featured: false,
  },
];

export const pricingSectionContent = {
  oneTime: {
    label: "Pricing",
    title: "Build your site",
    intro:
      "Compare build scope and inclusions. Hosting, domains and third-party services are stated in the package details and proposal.",
    badge: "Best choice",
  },
  maintenance: {
    label: "Maintenance",
    title: "Keep it running",
    intro:
      "Choose ongoing technical care, updates and managed hosting separately from the initial build.",
    badge: "Best value",
  },
  billedMonthly: "Billed monthly",
  capacityLabel: "Capacity",
  capacityMessage:
    "Project timing and availability are confirmed in writing before work begins.",
} as const;

export const originalPrices: Record<
  string,
  { price: string; discountLabel: string }
> = {
  Essential: { price: "$1,899", discountLabel: "21% off" },
  Pro: { price: "$2,999", discountLabel: "17% off" },
  Custom: { price: "from $5,499", discountLabel: "16% off" },
  "Core Tech & Care": { price: "$119", discountLabel: "25% off" },
  "Local Dominance": { price: "$249", discountLabel: "20% off" },
  "Growth Partner": { price: "from $499", discountLabel: "20% off" },
};

export const pricingCardContent = {
  featuredBadge: "The Best Choice",
  billedMonthly: "billed monthly",
} as const;
