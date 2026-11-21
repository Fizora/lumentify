import type { IconType } from "react-icons";
import {
  LuBadgeCheck,
  LuCalendarCheck,
  LuLifeBuoy,
  LuMapPin,
  LuPenTool,
  LuPhoneCall,
  LuShield,
  LuZap,
} from "react-icons/lu";

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

export const featuresSectionContent = {
  label: "Features",
  title: "Built to grow your home-service business",
  intro:
    "Everything you need to turn clicks into booked jobs – designed specifically for HVAC, plumbing, and electrical pros.",
  businessLabel: "For your customers’ urgent moments",
  technicalLabel: "Under the hood",
} as const;

export const workflowSectionContent = {
  label: "How it works",
  title: "A transparent process built for mutual safety",
  intro:
    "Eliminating the guesswork and fear of offshore development with clear, structured milestones from day one.",
  steps: [
    {
      title: "Discovery & written agreement",
      description:
        "We discuss your business needs, define exact deliverables, and lock everything into a formal, signed SOW and MSA before any financial commitment.",
    },
    {
      title: "Visual direction & refundable milestone",
      description:
        "An initial modest deposit initiates the design phase. You review and approve the homepage layout early—if it doesn't align with your vision, your deposit is fully refunded.",
    },
    {
      title: "Precision development & handover",
      description:
        "Once the design direction is locked, we build your lightning-fast site. The remaining 50% balance is paid only when the project is fully complete and ready for deployment.",
    },
    {
      title: "Post-launch stabilization support",
      description:
        "Your site goes live backed by our dedicated support window (7 to 30 days depending on your plan), ensuring absolute stability and zero technical stress.",
    },
  ],
} as const;
