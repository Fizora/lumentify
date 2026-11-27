export type FaqItem = {
  question: string;
  answer: string;
};

export const faqs: FaqItem[] = [
  {
    question: "Can a website guarantee more enquiries or jobs?",
    answer:
      "No. Enquiry volume depends on demand, competition, pricing, reputation, traffic sources and other factors. A clear website can make services, coverage and contact actions easier to understand, but it cannot guarantee leads or revenue.",
  },
  {
    question:
      "How does remote project delivery work seamlessly across time zones?",
    answer:
      "Project communication, review meetings and progress updates are agreed in the proposal and project agreement. You will know who is responsible for each stage and how approvals will be recorded.",
  },
  {
    question: "Do I own the website and source code once built?",
    answer:
      "Ownership, source-code handover, domains, hosting and third-party subscriptions are confirmed in the signed project agreement. We do not assume that an asset or service is included unless the scope says so.",
  },
  {
    question: "How long does a project take from kickoff to launch?",
    answer:
      "The estimated timeline depends on the agreed scope, content readiness, feedback and approvals. Timelines and milestones should be stated in the written proposal before work begins.",
  },
  {
    question: "What happens after the website goes live?",
    answer:
      "Post-launch support and stabilisation are defined in the project agreement. The agreement should identify the support period, eligible issues and any additional work or maintenance charges.",
  },
  {
    question: "Will my site be optimized to show up on Google?",
    answer:
      "A build can include technical SEO foundations and agreed on-page elements such as clear page structure and service-area content. Rankings are not guaranteed; Google results depend on relevance, competition, authority, location and ongoing optimisation.",
  },
];

export const faqSectionContent = {
  label: "FAQ",
  title: "The questions buyers usually ask",
  intro:
    "Scope, ownership, SEO and post-launch support are addressed before a project begins.",
} as const;

