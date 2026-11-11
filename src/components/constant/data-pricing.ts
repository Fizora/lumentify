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
      "A fast, high-converting landing page built to turn emergency mobile clicks into more direct phone calls.",
    price: "$1,499",
    period: "one-time",
    features: [
      "1 High-Converting Landing Page",
      "Load Time Optimization",
      // "Sticky Mobile Click-to-Call Bar",
      "Copywriting Optimizion",
      // "License, Insurance & Google Badge Integration (Client-provided credentials)",
      // "SEO-Optimized Copywriting for 1 Service Area",
      "2 Rounds Revisions",
      "7-Day Post-Launch Support & Stabilization",
      "Includes 1-Year Fully Managed Hosting",
      "5–7 Business Days Delivery",
    ],
    cta: "Start My Site",
    href: "/auth/signup",
    learnHref: "/services/web-development/essential",
    paymentLink: "/dashboard-panel/services/payment",
    featured: false,
  },
  {
    name: "Pro",
    description:
      "A multi-page local digital asset engineered to dominate suburb search traffic and capture local intent.",
    price: "$2,499",
    period: "one-time",
    features: [
      "Up to 5 Custom Pages (Services & Suburbs)",
      "Dedicated Suburb-Level SEO Optimization",
      "Frictionless One-Tap Quote & Booking Form",
      "Copywriting Optimized",
      // "Google Business Profile Setup & Optimization",
      "4 Rounds Revisions",
      "14-Day Post-Launch Support & Stabilization",
      "Includes 2-Years Fully Managed Hosting",
      "1–2 Weeks Delivery",
    ],
    cta: "Get More Calls",
    href: "/auth/signup",
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
      "Copywriting Optimizion",
      // "Google Business Profile Setup & Optimization",
      "Custom Dashboard Tool (where scoped)",
      "4 Rounds Revisions",
      "30-Day Post-Launch Support & Stabilization",
      "Includes 2-Years Fully Managed Hosting",
      "3–4 Weeks Delivery",
    ],
    cta: "Scope My Project",
    href: "/auth/signup",
    learnHref: "/services/web-development/custom",
    paymentLink: "/dashboard-panel/services/payment",
    featured: false,
  },
];

export const mrrPlans: PricingPlan[] = [
  {
    name: "Core Tech & Care",
    description:
      "Essential technical maintenance to ensure your site remains ultra-fast, secure, and online 24/7.",
    price: "$89",
    period: "/mo",
    features: [
      "Ultra-Fast Secure Hosting & SSL Management",
      "Monthly Core Framework & Security Updates",
      "24/7 Uptime & Performance Monitoring",
      "1 Small Content/Price Update per month",
      "Dedicated Email Support (48h SLA)",
    ],
    cta: "Subscribe",
    href: "/auth/signup",
    paymentLink: "/dashboard-panel/services/payment",
    featured: false,
  },
  {
    name: "Local Dominance",
    description:
      "Transform past jobs into automated 5-star Google reviews and track your local map visibility.",
    price: "$199",
    period: "/mo",
    features: [
      "Includes everything in Core Tech & Care",
      "QR-Code & Link-Based Google Review Automation",
      "24/7 Uptime & Speed Monitoring",
      "Priority Support Channel",
      "Monthly Google Maps Ranking Tracking",
      "Quarterly Mobile Conversion & Speed Audit",
      "Up to 3 Content/Suburb Updates per month",
    ],
    cta: "Get Started",
    href: "/auth/signup",
    paymentLink: "/dashboard-panel/services/payment",
    featured: true,
  },
  {
    name: "Growth Partner",
    description:
      "Dedicated developer partnership for scaling trade businesses expanding across multiple service areas.",
    price: "from $399",
    period: "/mo",
    features: [
      "Includes Full Custom Maintenance Suite",
      "New Suburb Page Additions (1 Page/Month)",
      "Monthly Google Maps Ranking Analysis",
      "24/7 Uptime & Performance Monitoring",
      "Priority Direct Support",
      "Up to 3 Content/Suburb Updates per month",
      "Comprehensive Monthly Lead & Performance Summary",
    ],
    cta: "Contact Sales",
    href: "/auth/signup",
    paymentLink: "/dashboard-panel/services/payment",
    featured: false,
  },
];
