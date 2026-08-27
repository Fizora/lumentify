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
      "We strictly refuse to use fake reviews or placeholder testimonials. As a specialized web studio focused on pure execution, we let live interactive demo builds, and clean component architecture serve as transparent proof of skill.",
  },
  {
    question: "How do I know these websites actually convert local customers?",
    answer:
      "Our layouts are engineered around trade-buyer behavior in an emergency: sticky click-to-call mobile bars, visible license & insurance badges, sub-second load times, and simple quote forms. You can test these exact interactive features live on our Showcase demo builds before spending anything.",
  },
  {
    question:
      "You are based in Indonesia — how does remote delivery work for AU clients?",
    answer:
      "We work async across the time difference using structured WhatsApp, Loom, and email updates — so you're never blocked waiting for a live call. By eliminating local agency office overhead, we deliver direct senior-level development at a fraction of Australian agency rates.",
  },
  {
    question: "Do I own the website once it's built?",
    answer:
      "Yes, 100%. Once final payment is completed, all source code, design assets, and domain configurations belong entirely to you. There are no proprietary builder lock-ins or ongoing licensing fees.",
  },
  {
    question: "How long does a project take?",
    answer:
      "Essential landing pages are delivered in 5–7 business days, Pro multi-page builds take 1–2 weeks, and Custom multi-location platforms take 3–4 weeks. Timelines are locked in writing before kickoff.",
  },
  {
    question: "What happens if something breaks after launch?",
    answer:
      "Every project includes a dedicated post-launch warranty (14 days for Essential, 30 days for Pro, and 60 days for Custom). Any technical issue occurring within this window is fixed immediately at zero extra cost.",
  },
  {
    question: "Will my site show up on Google?",
    answer:
      "Every site is built with technical local SEO architecture: clean semantic HTML, fast loading, suburb-level page structures, and Google Business Profile optimization guidance (Pro & Custom). This gives your business the exact technical foundation needed to rank.",
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
    title: "Click-to-call that gets answered",
    description:
      "A sticky call button engineered for instant mobile touch — giving emergency customers a direct line to your dispatch in one tap.",
  },
  {
    icon: LuMapPin,
    title: "Suburb-level service pages",
    description:
      "Dedicated location structures designed to capture high-intent local search traffic in specific suburbs you cover.",
  },
  {
    icon: LuBadgeCheck,
    title: "Trust shown up front",
    description:
      "Prominent placement for your license numbers, insurance badges, and verified Google ratings right above the fold.",
  },
  {
    icon: LuCalendarCheck,
    title: "One-tap booking & quotes",
    description:
      "Frictionless forms tailored for quick mobile input, reducing drop-off rates and driving direct callout requests.",
  },
];

export const technicalFeatures: FeatureItem[] = [
  {
    icon: LuZap,
    title: "Sub-second load speed",
    description:
      "Clean, modern code and optimized assets ensure near-instant loading to stop visitors from bouncing to competitors.",
  },
  {
    icon: LuShield,
    title: "Secure by default",
    description:
      "SSL encryption, modern security headers, and hardened hosting configurations included as standard.",
  },
  {
    icon: LuPenTool,
    title: "Copy that converts",
    description:
      "Conversion-focused copy framework structured around trade buyer urgency, clear pricing, and immediate action.",
  },
  {
    icon: LuLifeBuoy,
    title: "Post-launch warranty",
    description:
      "Included bug-fix coverage on every build to guarantee platform stability and peace of mind after going live.",
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
  status: "Live Demo" | "In Progress" | "Production" | "Live";
};

export const showcaseList: ShowcaseItem[] = [
  {
    img: "/clean-well.png",
    icon: LuHammer,
    name: "www.cleanwell.vercel.app",
    desc: "Fast cleaning-service demo built for calls, quote requests, and trust.",
    tags: ["Cleaning Service", "Demo Sandbox", "Essential"],
    href: "https://clean-well.vercel.app/?ref=lumentify.vercel.app",
    status: "In Progress",
  },
  {
    img: "/",
    icon: LuHammer,
    name: "www.pure-electrical.vercel.app",
    desc: "Electrician demo with service and suburb pages for local enquiries.",
    tags: ["Electrical", "Demo Sandbox", "Pro"],
    href: "https://pure-electrical.vercel.app/?ref=lumentify.vercel.app",
    status: "In Progress",
  },
  {
    img: "/wellgarden.png",
    icon: LuHammer,
    name: "www.wellgarden.vercel.app",
    desc: "Gardening demo built for mobile calls, work proof, and simple quotes.",
    tags: ["Gardening", "Demo Sandbox", "Essential"],
    href: "https://wellgarden.vercel.app/?ref=lumentify.vercel.app",
    status: "In Progress",
  },
  {
    img: "",
    icon: LuHammer,
    name: "www.air-core.vercel.app",
    desc: "Roofing demo with project proof and a tailored quote flow.",
    tags: ["Roofing", "Demo Sandbox", "Custom"],
    href: "https://air-core.vercel.app/?ref=lumentify.vercel.app",
    status: "Live Demo",
  },
];

export const projectsList: ShowcaseItem[] = [
  // {
  //   img: "",
  //   icon: LuHammer,
  //   name: "brisbane-plumbing.com.au",
  //   desc: "Full-service plumbing website with online booking, suburb pages, and Google Maps integration. Live since 2024.",
  //   tags: ["Plumbing", "Production", "Pro"],
  //   href: "https://brisbane-plumbing.com.au",
  //   status: "Live",
  // },
  // {
  //   img: "",
  //   icon: LuHammer,
  //   name: "melbourne-electrical.com.au",
  //   desc: "Electrical services site with emergency callout, license verification, and service area pages.",
  //   tags: ["Electrical", "Production", "Custom"],
  //   href: "https://melbourne-electrical.com.au",
  //   status: "Production",
  // },
];

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
      "A fast, high-converting landing page built to turn emergency clicks into direct calls.",
    price: "$1,199",
    period: "one-time",
    features: [
      "1 Landing Page",
      "Sub-Second Load Time Optimization",
      "Sticky Mobile Click-to-Call Bar",
      "License, Insurance & Google Badge",
      "Essential On-Page Local SEO",
      "2 Round of Revisions",
      "14-Day Post-Launch Bug Warranty",
      "1 Year Hosting Setup",
      "5–7 Days Delivery",
    ],
    cta: "Start My Site",
    href: "/auth/signup",
    paymentLink: "",
    featured: false,
  },
  {
    name: "Pro",
    description:
      "Multi-page local asset engineered to dominate suburb search traffic and capture leads.",
    price: "$2,249",
    period: "one-time",
    features: [
      "Up to 5 Custom Pages (Services & Suburbs)",
      "Dedicated Suburb-Level SEO Architecture",
      "Frictionless One-Tap Quote & Booking Form",
      "Trade-Specific High-Intent Copywriting",
      "Google Business Profile Setup & Optimization",
      "4 Rounds of Revisions",
      "30-Day Post-Launch Bug Warranty",
      "2 Years Hosting Setup",
      "1–2 Weeks Delivery",
    ],
    cta: "Get More Calls",
    href: "/auth/signup",
    paymentLink: "",
    featured: true,
  },
  {
    name: "Custom",
    description:
      "Multi-suburb platform designed for scaling fleets and multi-location trade operators.",
    price: "from $4,599",
    period: "one-time",
    features: [
      "Up to 12 Custom Pages (Features & Suburbs)",
      "Custom Quote, Booking or Enquiry Flows",
      "Third-Party Tool Integrations",
      "Trade-Specific High-Intent Copywriting",
      "Google Business Profile Setup & Optimization",
      "Custom Dashboard Tool (where scoped)",
      "4 Rounds of Revisions",
      "60-Day Post-Launch Bug Warranty",
      "2 Years Hosting Setup",
      "3–4 Weeks Delivery",
    ],
    cta: "Scope My Project",
    href: "/auth/signup",
    paymentLink: "",
    featured: false,
  },
];

// Monthly Recurring Revenue (MRR) Plans
export const mrrPlans: PricingPlan[] = [
  {
    name: "Core Tech & Care",
    description:
      "Essential technical maintenance to keep your site fast, secure, and online 24/7.",
    price: "$89",
    period: "/mo",
    features: [
      "Ultra-Fast Hosting & SSL Security",
      "Monthly Core & Security Updates",
      "24/7 Uptime & Speed Monitoring",
      "1 Small Content/Price Update per month",
      "Email Support (48h SLA)",
    ],
    cta: "Subscribe",
    href: "/auth/signup",
    paymentLink: "",
    featured: false,
  },
  {
    name: "Local Dominance",
    description:
      "Turn past jobs into 5-star Google reviews and keep an eye on your local Maps ranking.",
    price: "$199",
    period: "/mo",
    features: [
      "Includes everything in Core Tech",
      "QR-Code & Link-Based Google Review Requests",
      "24/7 Uptime & Speed Monitoring",
      "Priority Support",
      "Monthly Google Maps Ranking Check",
      "Quarterly Mobile Conversion & Speed Audit",
      "Up to 3 Content/Suburb Updates per month",
    ],
    cta: "Get Started",
    href: "/auth/signup",
    paymentLink: "/auth/signup",
    featured: false,
  },
  {
    name: "Growth Partner",
    description:
      "Dedicated developer support for active trade businesses expanding their service area.",
    price: "from $399",
    period: "/mo",
    features: [
      "Includes All Custom you Needs",
      "New Suburb Page Additions (1 Page/Month)",
      "Monthly Google Maps Ranking Check",
      "24/7 Uptime & Speed Monitoring",
      "Priority Support",
      "Up to 3 Content/Suburb Updates per month",
      "Monthly Lead & Performance Summary",
    ],
    cta: "Contact Sales",
    href: "/auth/signup",
    paymentLink: "",
    featured: false,
  },
];

// TESTIMONIALS
export type TestimonialItem = {
  rating: string | number; // Rating can be a string or number
  quote: string;
  name: string;
  role: string;
};

// Dummy testimonials – clearly fictional, untuk demo UI saja.
export const testimonials: TestimonialItem[] = [
  {
    rating: "★★★★★",
    quote:
      "Site went live in under a week and we started getting leads the same day. The sticky call button and fast load speed made a real difference for our conversions.",
    name: "Renovation Contractor",
    role: "Singapore, SG",
  },
  {
    rating: "★★★★★",
    quote:
      "We switched from a local agency to this studio and got a cleaner site, faster performance, and full control over content updates without waiting for developers.",
    name: "Property Agent",
    role: "Singapore, SG",
  },
  {
    rating: "★★★★★",
    quote:
      "The localized pages and Google review section helped us rank better in our city. Setup was smooth and communication was clear throughout the project.",
    name: "Home Services Director",
    role: "Shanghai, CN",
  },
  {
    rating: "★★★★☆",
    quote:
      "Great experience overall – the team understood our trade business needs. The only minor hiccup was a delay in revision, but they fixed it quickly.",
    name: "Plumbing Co. Owner",
    role: "Melbourne, AU",
  },
  {
    rating: "★★★★★",
    quote:
      "We've seen a 40% increase in quote requests since launching. The mobile-first design really works for our emergency customers.",
    name: "Electrical Services Manager",
    role: "Brisbane, AU",
  },
  {
    rating: "★★★★☆",
    quote:
      "Solid work and transparent pricing. The suburb pages helped us expand our service area without hiring extra marketing staff.",
    name: "Landscaping Director",
    role: "London, UK",
  },
  {
    rating: "★★★★★",
    quote:
      "Best investment we made for our online presence. The site is lightning fast and the warranty gave us peace of mind.",
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
  startDate: string; // ISO date (YYYY-MM-DD) — when the offer goes live
  duration: number; // how long it stays visible
  durationUnit: "days" | "weeks";
};

export const promoOffers: PromoOffer[] = [
  {
    id: "referral-core-tech-2026",
    title: "Limited-Time Offer",
    message:
      "Refer another trade business to Lumentify and get one free month of Core Tech & Care added to your account.",
    cta: "Refer a Business",
    href: "https://wa.me/6285235086814",
    startDate: "2026-08-20",
    duration: 2,
    durationUnit: "weeks",
  },
];
