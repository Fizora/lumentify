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
      "Place call and quote actions where mobile visitors can find them quickly.",
  },
  {
    icon: LuMapPin,
    title: "Suburb-level service mapping",
    description:
      "Present the suburbs and regions you serve so visitors can confirm local relevance.",
  },
  {
    icon: LuBadgeCheck,
    title: "Authority front and center",
    description:
      "Give genuine licences, insurance details and customer evidence a clear, accurate place on the page.",
  },
  {
    icon: LuCalendarCheck,
    title: "Frictionless quote & booking flows",
    description:
      "Use practical form and call options that ask only for the information needed to start an enquiry.",
  },
];

export const technicalFeatures: FeatureItem[] = [
  {
    icon: LuZap,
    title: "Performance-conscious builds",
    description:
      "Mobile-friendly layouts and responsible asset use support a straightforward customer experience.",
  },
  {
    icon: LuShield,
    title: "Practical security foundations",
    description:
      "Security measures, hosting and ongoing maintenance are agreed and documented in the project scope.",
  },
  {
    icon: LuPenTool,
    title: "Trade-specific copy",
    description:
      "Clear, accessible copy explains what you do, where you work and how a customer should get in touch.",
  },
  {
    icon: LuLifeBuoy,
    title: "Post-launch support",
    description:
      "The agreed support period and exclusions are written into the project terms.",
  },
];

export const featuresSectionContent = {
  label: "What we deliver",
  title: "Make it easier for customers to choose and contact you",
  intro:
    "We combine trade-specific structure with a practical mobile experience.",
  businessLabel: "For the customer journey",
  technicalLabel: "Supporting delivery",
} as const;

export const workflowSectionContent = {
  label: "How it works",
  title: "A clear process before work begins",
  intro:
    "Scope, approvals and responsibilities are confirmed in writing.",
  steps: [
    {
      title: "Discovery",
      description:
        "We discuss your business, services, target areas, website needs and available content.",
    },
    {
      title: "Proposal",
      description:
        "You receive a written proposal covering scope, price and the intended project terms.",
    },
    {
      title: "Design and development",
      description:
        "The agreed design direction and development scope are reviewed through the milestones in your agreement.",
    },
    {
      title: "Review, launch and handover",
      description:
        "The final website is tested, launched and handed over with the ownership and post-launch arrangements recorded in writing.",
    },
  ],
} as const;
