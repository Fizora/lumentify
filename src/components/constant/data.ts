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
} from "react-icons/lu";

// ===================== FAQ =====================
export type FaqItem = {
  question: string;
  answer: string;
};

export const faqs: FaqItem[] = [
  {
    question: "What happens if something breaks after launch?",
    answer:
      "Every plan includes a bug-fix warranty period so your site doesn't just launch well — it stays reliable after launch too. If something breaks within that window, I fix it at no extra cost. After that, any new feature or change is quoted transparently before work starts, so you always know exactly what you're paying for.",
  },
  {
    question: "Do I own the website once it's built?",
    answer:
      "Yes. Once the final payment is completed, the website design and code are yours. There's no lock-in, no hidden platform dependency, and no ongoing ownership trap — you keep full control of the asset you paid for.",
  },
  {
    question: "How long does a project take?",
    answer:
      "Most Essential sites are completed in 5–7 days from kickoff, while Pro and Custom projects usually take 2–4 weeks depending on scope. The timeline is agreed in writing before work begins, so you know exactly what to expect and can plan around it with confidence.",
  },
  {
    question: "What do you need from me to get started?",
    answer:
      "Usually just your business details, the services and suburbs you cover, a few photos if you have them, and any branding you already use such as a logo or preferred colors. If you don't have everything ready yet, I'll help you shape a clean setup from scratch so the project still moves forward smoothly.",
  },
  {
    question: "Will my site actually show up on Google?",
    answer:
      "Your site is built with local SEO fundamentals from day one: clear structure, service pages, suburb pages, fast loading, and Google Business Profile setup on Pro and above. That gives your business the right technical base to be discovered by people searching for urgent help, even though rankings still take time to build naturally.",
  },
  {
    question: "What if I need changes mid-project?",
    answer:
      "Each plan includes a defined number of revision rounds during development, so the scope stays clear and the project stays on track. If you need changes outside that scope, I'll quote them before doing the work — no surprise invoices, no vague extras.",
  },
];

// ===================== FEATURES =====================
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
      "A sticky call button your customers can reach in one tap — because in an emergency, they'll call whoever answers first.",
  },
  {
    icon: LuMapPin,
    title: "Suburb-level service pages",
    description:
      "Separate pages for each service and area you cover, so you show up when someone nearby searches for exactly what they need right now.",
  },
  {
    icon: LuBadgeCheck,
    title: "Trust shown up front",
    description:
      "Licensing, insurance, and real reviews placed where visitors actually look — not buried in a footer they'll never scroll to.",
  },
  {
    icon: LuCalendarCheck,
    title: "One-tap booking & quotes",
    description:
      "A quote or booking form built for someone in a hurry — few fields, clear next step, no reason to abandon it halfway.",
  },
];

export const technicalFeatures: FeatureItem[] = [
  {
    icon: LuZap,
    title: "Built for speed",
    description:
      "Every site is optimized to load fast — because a few seconds of delay is a customer calling your competitor instead.",
  },
  {
    icon: LuShield,
    title: "Secure by default",
    description:
      "SSL and secure hosting come standard, so your site stays safe, reliable, and professional around the clock.",
  },
  {
    icon: LuPenTool,
    title: "Copy that converts",
    description:
      "Every headline and CTA is written around what your customer is actually worried about — not generic filler text.",
  },
  {
    icon: LuLifeBuoy,
    title: "Support after launch",
    description:
      "A bug-fix warranty period is included with every project, so you're not left on your own the moment the site goes live.",
  },
];

// ===================== PRICING =====================
export type PricingPlan = {
  name: string;
  description: string;
  price: string;
  period: string;
  features: string[];
  cta: string;
  href: string;
  featured: boolean;
};

// Paket one-time (per project)
export const buildPlans: PricingPlan[] = [
  {
    name: "Essential",
    description: "A fast, simple site that gets you found and called.",
    price: "$899",
    period: "one-time",
    features: [
      "1 pages",
      "Mobile Responsive",
      "Basic SEO",
      "2x Revisions",
      "Speed Optimization",
      "High Quality Content",
      "3 Days Technical Support",
      "Hosting Setup 2 Year",
      "Delivered in 5-7 days",
    ],
    cta: "Start My Site",
    href: "/project",
    featured: false,
  },
  {
    name: "Pro",
    description: "Built to win urgent jobs before your competitors do",
    price: "$2,599",
    period: "one-time",
    features: [
      "5 pages",
      "Mobile Responsive",
      "Advanced SEO optimization",
      "4x Revisions",
      "Speed Optimization",
      "Advanced Copywriting",
      "Booking Call",
      "Google Business Profile setup",
      "1 Week Technical Support",
      "Hosting Setup 1 Year",
      "Delivered in 1-2 Weeks",
    ],
    cta: "Get More Calls",
    href: "/project",
    featured: true,
  },
  {
    name: "Custom",
    description: "For businesses ready to scale past the basics.",
    price: "from $3,599",
    period: "one-time",
    features: [
      "Everything in Pro",
      "10 Pages",
      "10 Custom Features",
      "1 Month Technical Support",
      "Optional Monthly Support",
      "Delivered in 3-4 weeks",
    ],
    cta: "Talk to Us",
    href: "https://wa.me/6285235086814",
    featured: false,
  },
];

// Paket MRR (bulanan) – layanan pemeliharaan dan dukungan
export const mrrPlans: PricingPlan[] = [
  {
    name: "Maintenance",
    description: "Keep your site secure, fast, and up-to-date.",
    price: "$49",
    period: "/mo",
    features: [
      "Monthly security updates",
      "Weekly backups",
      "Hosting included",
      "Email support (48h)",
      "Basic performance monitoring",
      "1 content update per month",
    ],
    cta: "Subscribe",
    href: "/project",
    featured: false,
  },
  {
    name: "Growth",
    description: "Get more leads with ongoing SEO and content marketing.",
    price: "$149",
    period: "/mo",
    features: [
      "Everything in Maintenance",
      "Advanced SEO (local + on-page)",
      "Monthly blog post (1)",
      "Google Analytics reporting",
      "Priority support (24h)",
      "3 content updates per month",
      "Quarterly strategy call",
    ],
    cta: "Get Started",
    href: "/project",
    featured: true,
  },
  {
    name: "Premium",
    description: "Full-service digital growth for serious businesses.",
    price: "$299",
    period: "/mo",
    features: [
      "Everything in Growth",
      "Unlimited content updates",
      "Dedicated account manager",
      "24/7 priority support",
      "Custom analytics dashboard",
      "Monthly strategy session",
      "Advanced integrations",
      "Annual billing save 20%",
    ],
    cta: "Contact Sales",
    href: "https://wa.me/6285235086814",
    featured: false,
  },
];

// ===================== TESTIMONIALS =====================
export type TestimonialItem = {
  quote: string;
  name: string;
  role: string;
};

// Swap these testimonials with your real client feedback
export const testimonials: TestimonialItem[] = [
  {
    quote:
      "My phone started ringing the first week the new site went live. Best investment I've made.",
    name: "John D.",
    role: "Owner, Dependable HVAC",
  },
  {
    quote:
      "Finally a website that doesn't look like it's from 2005. The guys at Lumentify really understand our trade.",
    name: "Maria S.",
    role: "Electrician, Bright Sparks Co.",
  },
  {
    quote:
      "Simple, clean, and it converts. I've already booked three new clients this month.",
    name: "Carlos R.",
    role: "Plumber, Flow Right Services",
  },
];
