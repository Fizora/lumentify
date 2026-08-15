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
  LuDroplet,
  LuWind,
  LuHammer,
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
      "Most Essential sites are completed in 5–7 days from kickoff, Pro sites in 1–2 weeks, and Custom projects in 3–4 weeks depending on scope. The timeline is agreed in writing before work begins, so you know exactly what to expect and can plan around it with confidence.",
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
  {
    question: "What if I'm not happy with the direction?",
    answer:
      "You'll see the homepage design before the build continues past that point. If the direction isn't right for your business, you get your deposit back — no dispute, no hard feelings.",
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

// ===================== SHOWCASE =====================
export type ShowcaseItem = {
  img: string;
  icon: IconType;
  name: string;
  desc: string;
  tags: string[];
  href: string;
  status: "Live Demo" | "In Progress";
};

// These are demo builds made to demonstrate capability, not live client
// projects, so copy stays worded as "Demo Project" with no fabricated
// ratings or client counts. Status reflects actual build state per item.
export const showcaseList: ShowcaseItem[] = [
  {
    img: "/cleanwell.png",
    icon: LuDroplet,
    name: "CleanWell",
    desc: "Emergency plumbing & HVAC site built around one goal: get the call before the competitor does. Sticky click-to-call, licensed & insured trust bar, and suburb-based service pages for local search.",
    tags: ["Cleaning Services", "Scheduling"],
    href: "https://clean-well.vercel.app",
    status: "Live Demo",
  },
  {
    img: "/pure-electrical.png",
    icon: LuZap,
    name: "PureElectric",
    desc: "Lead-focused site for a residential electrician — quote form above the fold, real review widget, and service pages split by job type instead of one long services block.",
    tags: ["Electrical", "Local SEO"],
    href: "https://pure-electric.vercel.app",
    status: "Live Demo",
  },
  {
    img: "",
    icon: LuWind,
    name: "WellGarden",
    desc: "Seasonal HVAC business site with a before/after install gallery and a maintenance-plan signup flow, built to convert both emergency repairs and planned installs.",
    tags: ["HVAC", "Booking Flow"],
    href: "https://wellgarden.vercel.app",
    status: "Live Demo",
  },
  {
    img: "",
    icon: LuHammer,
    name: "ApexControl",
    desc: "Higher-ticket roofing site with a project gallery, financing-info section, and a multi-step quote form built for jobs that need more detail before a call.",
    tags: ["Roofing", "Multi-step Form"],
    href: "https://apexcontrol.vercel.app",
    status: "In Progress",
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
    price: "$1,199",
    period: "one-time",
    features: [
      "1 page",
      "Mobile Responsive",
      "Basic SEO",
      "2x Revisions",
      "Speed Optimization",
      "Emergency Call Banner (sticky click-to-call)",
      "License & Insurance Trust Badges",
      "3 Days Technical Support",
      "Hosting Setup 1 Year",
      "Delivered in 5-7 days",
    ],
    cta: "Start My Site",
    href: "https://wa.me/6285235086814",
    featured: false,
  },
  {
    name: "Pro",
    description: "Built to win urgent jobs before your competitors do",
    price: "$2,249",
    period: "one-time",
    features: [
      "5 pages",
      "Mobile Responsive",
      "Advanced SEO optimization",
      "4x Revisions",
      "Speed Optimization",
      "Advanced Copywriting",
      "Suburb-Level Service Pages",
      "One-Tap Booking & Quote Form",
      "Google Business Profile Setup + Review Request Automation",
      "1 Week Technical Support",
      "Hosting Setup 2 Years",
      "Delivered in 1-2 Weeks",
    ],
    cta: "Get More Calls",
    href: "https://wa.me/6285235086814",
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
      "Hosting Setup 3 Years",
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
    href: "https://wa.me/6285235086814",
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
    href: "https://wa.me/6285235086814",
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

// NOTE: left empty on purpose. Do not populate with placeholder/fake
// testimonials before you have real client feedback — attributing quotes
// to invented names and businesses is a false-advertising risk, not just
// a style choice. Add entries here as real clients give feedback.
export const testimonials: TestimonialItem[] = [];
