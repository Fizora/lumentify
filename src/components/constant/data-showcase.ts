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
    img: "/img/clean-well.png",
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
    img: "/img/pure-electrical.webp",
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
    img: "/img/wellgarden.png",
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
    img: "/img/air-core.png",
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
