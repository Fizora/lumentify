import type { IconType } from "react-icons";
import { LuHammer } from "react-icons/lu";

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
    img: "/img/adpplumbing-good.png",
    icon: LuHammer,
    name: "ADP Plumbing",
    desc: "High-converting plumbing template featuring dedicated local suburb pages, 24/7 emergency dispatch UI, and a streamlined online booking system.",
    tags: ["Plumbing", "Local SEO", "Live"],
    href: "https://adpplumbing.lexentify.com/",
    status: "Live",
    type: "Plumbing Services",
    year: "2026",
  },
  {
    img: "/img/wcaircon-new.png",
    icon: LuHammer,
    name: "WC Aircon",
    desc: "HVAC and air conditioning platform demo designed for deep service proof, tailored installation showcases, and instant quote generation.",
    tags: ["HVAC", "Air Conditioning", "Live"],
    href: "https://wcaircon.lexentify.com/",
    status: "Live",
    type: "HVAC Services",
    year: "2026",
  },
];

export const projectsList: ShowcaseItem[] = [];

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

export const portfolioPageContent = {
  metadata: {
    title: "Showcase",
    description:
      "Explore our live interactive demo builds. See how our Essential, Pro, and Custom web architectures deliver lightning-fast performance and high conversions for trade businesses.",
  },
  label: "Showcase",
  title: "Explore our demo",
  intro:
    "Experience firsthand how our Essential, Pro, and Custom packages perform in the wild—engineered specifically to dominate local searches and turn emergency clicks into direct calls.",
} as const;

export const portfolioGridContent = {
  previewAlt: "Project preview",
  previewFallback: "Preview coming soon",
  visitAction: "Visit Site",
  statuses: {
    demo: "Live Demo",
    progress: "In Progress",
    production: "Production",
    live: "Live",
  },
  emptyState:
    "No {tab} available yet. We believe in transparency — we'll publish them as soon as they're ready.",
  ctaTitle: "Ready to Build?",
  ctaDescription:
    "Want something built for your business specifically? Let's talk.",
  ctaAction: "Start Project",
  ctaHref: "https://wa.me/6285235086814",
} as const;
