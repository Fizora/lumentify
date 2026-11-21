export type FaqItem = {
  question: string;
  answer: string;
};

export const faqs: FaqItem[] = [
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

export const faqSectionContent = {
  label: "FAQ",
  title: "Your concerns, addressed.",
  intro:
    "Clear answers to the questions that matter before you engage us — built to give you confidence, clarity, and peace of mind.",
} as const;

