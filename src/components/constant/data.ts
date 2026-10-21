import type { IconType } from "react-icons";
import {
  LuPhoneCall,
  LuMapPin,
  LuBadgeCheck,
  LuCalendarCheck,
  LuZap,
  LuShield,
  LuPenTool,
  LuLifeBuoy,
  LuHammer,
  LuInbox,
  LuBox,
  LuReceipt,
  LuFolderOpen,
} from "react-icons/lu";

// FAQ
export type FaqItem = {
  question: string;
  answer: string;
};

export const faqs: FaqItem[] = [
  {
    question: "Why aren't there client testimonials listed on your website?",
    answer:
      "We strictly avoid placeholder or unverified reviews. Instead, we let live, fully interactive demo builds and pristine code architecture serve as transparent, verifiable proof of our execution standard.",
  },
  {
    question: "How do I know these websites actually convert local customers?",
    answer:
      "Our layouts are engineered around real emergency trade-buyer behavior: sticky mobile click-to-call bars, prominent license & insurance badges, sub-second load times, and frictionless quote forms. You can test these exact interactive features live on our Showcase demo builds before committing.",
  },
  {
    question:
      "How does remote project delivery work seamlessly across time zones?",
    answer:
      "We operate on a streamlined asynchronous workflow utilizing structured Loom video updates, WhatsApp, and shared milestone dashboards. This ensures zero waiting for meetings, transparent progress tracking, and direct senior-level execution without local agency overhead.",
  },
  {
    question: "Do I own the website and source code once built?",
    answer:
      "Yes, 100% ownership. Upon final completion, all source code, design assets, and domain configurations transfer entirely to you. There are zero proprietary builder lock-ins or mandatory long-term platform fees.",
  },
  {
    question: "How long does a project take from kickoff to launch?",
    answer:
      "Essential landing pages are delivered in 5–7 business days, Pro multi-page builds take 1–2 weeks, and Custom platforms take 3–4 weeks. All delivery milestones are firmly locked in writing before kickoff.",
  },
  {
    question: "What happens after the website goes live?",
    answer:
      "Every project includes a dedicated post-launch stabilization and support window (7 days for Essential, 14 days for Pro, and 30 days for Custom). During this period, our team handles all system fine-tuning, adjustments, and transition assistance at zero extra cost.",
  },
  {
    question: "Will my site be optimized to show up on Google?",
    answer:
      "Every build incorporates robust technical local SEO architecture: clean semantic HTML, sub-second asset optimization, suburb-level page hierarchies, and Google Business Profile structural alignment to give you an immediate competitive edge.",
  },
];

// FEATURES
export type FeatureItem = {
  icon: IconType;
  title: string;
  description: string;
};

export const businessFeatures: FeatureItem[] = [
  {
    icon: LuPhoneCall,
    title: "Instant mobile click-to-call",
    description:
      "A sticky, thumb-friendly call bar engineered to give urgent emergency customers a direct line to your dispatch in a single tap.",
  },
  {
    icon: LuMapPin,
    title: "Suburb-level service mapping",
    description:
      "Dedicated location page structures architected to capture high-intent local search traffic across every suburb you service.",
  },
  {
    icon: LuBadgeCheck,
    title: "Authority front and center",
    description:
      "Strategic above-the-fold placement for your state licenses, insurance credentials, and verified Google ratings to instantly establish trust.",
  },
  {
    icon: LuCalendarCheck,
    title: "Frictionless quote & booking flows",
    description:
      "Streamlined interaction forms optimized for rapid mobile input, minimizing user drop-off and maximizing direct callout requests.",
  },
];

export const technicalFeatures: FeatureItem[] = [
  {
    icon: LuZap,
    title: "Sub-second load speed",
    description:
      "Lean modern code and optimized assets guarantee near-instant loading, preventing potential clients from bouncing to competitors.",
  },
  {
    icon: LuShield,
    title: "Secure infrastructure by default",
    description:
      "Enterprise-grade SSL encryption, advanced security headers, and hardened hosting environments configured as standard.",
  },
  {
    icon: LuPenTool,
    title: "High-converting trade copy",
    description:
      "Direct, persuasive copywriting frameworks structured around consumer urgency, transparent value, and immediate action.",
  },
  {
    icon: LuLifeBuoy,
    title: "Post-launch transition support",
    description:
      "Dedicated post-deployment assistance included with every build to ensure absolute platform stability and total peace of mind.",
  },
];

// SHOWCASE
export type ShowcaseItem = {
  img: string;
  icon: IconType;
  name: string;
  desc: string;
  tags: string[];
  href: string;
  type: string;
  year: string;
  status: "Live Demo" | "In Progress" | "Production" | "Live";
};

export const showcaseList: ShowcaseItem[] = [
  {
    img: "",
    icon: LuHammer,
    name: "Clean Well",
    desc: "High-performance cleaning service demo built for direct mobile calls, fast quotes, and verified trust.",
    tags: ["Cleaning Service", "Demo Sandbox", "Essential"],
    href: "https://clean-well.vercel.app/?ref=lexentify.com",
    status: "Live",
    type: "Cleaning Services",
    year: "2026",
  },
  {
    img: "",
    icon: LuHammer,
    name: "Pure Electrical",
    desc: "Electrician demo featuring local service areas and suburb pages designed for emergency search dominance.",
    tags: ["Electrical", "Demo Sandbox", "Pro"],
    href: "https://pure-electrical.vercel.app/?ref=lexentify.com",
    status: "Live",
    type: "Electrician",
    year: "2026",
  },
  {
    img: "",
    icon: LuHammer,
    name: "Well Garden",
    desc: "Gardening demo optimized for instant mobile contact, portfolio proof, and streamlined customer inquiries.",
    tags: ["Gardening", "Demo Sandbox", "Essential"],
    href: "https://wellgarden.vercel.app/?ref=lexentify.com",
    status: "Live",
    type: "Gardening",
    year: "2026",
  },
  {
    img: "",
    icon: LuHammer,
    name: "Air Core",
    desc: "HVAC and roofing platform demo featuring deep project proof and tailored quote flows.",
    tags: ["Roofing", "Demo Sandbox", "Custom"],
    href: "https://air-core.vercel.app/?ref=Lexentify.vercel.app",
    status: "Live",
    type: "HVAC",
    year: "2026",
  },
];

export const projectsList: ShowcaseItem[] = [];

// PRICING
export type PricingPlan = {
  name: string;
  description: string;
  price: string;
  period: string;
  features: string[];
  cta: string;
  href: string;
  paymentLink: string;
  featured: boolean;
};

// One-Time Build Plans
export const buildPlans: PricingPlan[] = [
  {
    name: "Essential",
    description:
      "A fast, high-converting landing page built to turn emergency mobile clicks into direct phone calls.",
    price: "$1,499",
    period: "one-time",
    features: [
      "1 High-Converting Landing Page",
      "Sub-Second Load Time Optimization",
      "Sticky Mobile Click-to-Call Bar",
      "License, Insurance & Google Badge Integration",
      "Essential On-Page Local SEO Architecture",
      "2 Rounds of Precision Revisions",
      "7-Day Post-Launch Support & Stabilization",
      "Includes 1-Year Fully Managed Hosting",
      "5–7 Business Days Delivery",
    ],
    cta: "Start My Site",
    href: "/auth/signup",
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
      "Dedicated Suburb-Level SEO Architecture",
      "Frictionless One-Tap Quote & Booking Form",
      "Trade-Specific High-Intent Copywriting",
      "Google Business Profile Setup & Optimization",
      "4 Rounds of Precision Revisions",
      "14-Day Post-Launch Support & Stabilization",
      "Includes 2-Years Fully Managed Hosting",
      "1–2 Weeks Delivery",
    ],
    cta: "Get More Calls",
    href: "/auth/signup",
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
      "Advanced Third-Party Tool Integrations",
      "Trade-Specific High-Intent Copywriting",
      "Google Business Profile Setup & Optimization",
      "Custom Dashboard Tool (where scoped)",
      "4 Rounds of Precision Revisions",
      "30-Day Post-Launch Support & Stabilization",
      "Includes 2-Years Fully Managed Hosting",
      "3–4 Weeks Delivery",
    ],
    cta: "Scope My Project",
    href: "/auth/signup",
    paymentLink: "/dashboard-panel/services/payment",
    featured: false,
  },
];

// Monthly Recurring Revenue (MRR) Plans
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
    featured: false,
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

// TESTIMONIALS
export type TestimonialItem = {
  rating: string | number;
  quote: string;
  name: string;
  role: string;
};

export const testimonials: TestimonialItem[] = [
  {
    rating: "★★★★★",
    quote:
      "Our site went live seamlessly and we started capturing emergency inquiries within days. The sticky call button and fast load speed made a measurable impact on our conversion rate.",
    name: "Renovation Contractor",
    role: "Singapore, SG",
  },
  {
    rating: "★★★★★",
    quote:
      "Transitioning from a sluggish local agency to this studio gave us a cleaner codebase, lightning-fast performance, and complete freedom over our content updates.",
    name: "Property Agent",
    role: "Singapore, SG",
  },
  {
    rating: "★★★★★",
    quote:
      "The localized page framework and structural focus helped us improve visibility in our target city. Setup was smooth and communication remained clear throughout.",
    name: "Home Services Director",
    role: "Shanghai, CN",
  },
  {
    rating: "★★★★☆",
    quote:
      "Great execution overall—the studio clearly understands trade business requirements. Revisions were handled efficiently with professional oversight.",
    name: "Plumbing Co. Owner",
    role: "Melbourne, AU",
  },
  {
    rating: "★★★★★",
    quote:
      "We experienced a significant uptick in direct quote requests right after launch. The mobile-first approach performs exceptionally well for urgent customer needs.",
    name: "Electrical Services Manager",
    role: "Brisbane, AU",
  },
  {
    rating: "★★★★☆",
    quote:
      "Solid engineering work and completely transparent pricing terms. The suburb structure enabled us to expand our reach efficiently.",
    name: "Landscaping Director",
    role: "London, UK",
  },
  {
    rating: "★★★★★",
    quote:
      "One of the best digital investments we've made. The application is lightning fast and the post-launch support period provided absolute peace of mind.",
    name: "Roofing Specialist",
    role: "Auckland, NZ",
  },
];

// PROMO / LIMITED-TIME OFFERS
export type PromoOffer = {
  id: string;
  title: string;
  message: string;
  cta: string;
  href: string;
  startDate: string;
  duration: number;
  durationUnit: "days" | "weeks";
};

export const promoOffers: PromoOffer[] = [
  {
    id: "referral-core-tech-2026",
    title: "Client Partnership Benefit",
    message:
      "Refer another trade business to Lexentify and receive one free month of Core Tech & Care maintenance credited directly to your account.",
    cta: "Refer a Business",
    href: "https://wa.me/6285235086814",
    startDate: "2026-08-20",
    duration: 2,
    durationUnit: "weeks",
  },
];

// Sidebar
export const sidebarNavItems = [
  { name: "Inbox", href: "/dashboard-panel/inbox", icon: LuInbox },
  { name: "Projects", href: "/dashboard-panel/projects", icon: LuBox },
  { name: "Invoices", href: "/dashboard-panel/invoices", icon: LuReceipt },
  { name: "Documents", href: "/dashboard-panel/documents", icon: LuFolderOpen },
];
