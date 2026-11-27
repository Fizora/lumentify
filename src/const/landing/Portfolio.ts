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
    desc: "A live plumbing industry demonstration showing clear service categories, suburb information, prominent call actions and a quote enquiry form.",
    tags: ["Plumbing", "Local SEO", "Live"],
    href: "https://adpplumbing.lexentify.com/",
    status: "Live Demo",
    type: "Plumbing Services",
    year: "2026",
  },
  {
    img: "/img/wcaircon-new.png",
    icon: LuHammer,
    name: "WC Aircon",
    desc: "A live air-conditioning industry demonstration showing service presentation, service-area information, quote actions and a mobile-friendly enquiry flow.",
    tags: ["HVAC", "Air Conditioning", "Live"],
    href: "https://wcaircon.lexentify.com/",
    status: "Live Demo",
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
      "Explore Lexentify's live demonstrations for plumbing and air-conditioning businesses.",
  },
  label: "Showcase",
  title: "Explore the live demonstrations",
  intro:
    "These are independently developed industry demonstrations, not paying client engagements or verified case studies. Inspect the service structure, mobile layouts and contact journeys.",
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
  ctaTitle: "Discuss a project",
  ctaDescription:
    "Need a website for your trade business? Tell us about your services and target areas.",
  ctaAction: "Talk About Your Project",
  ctaHref: "/start-project",
} as const;
