export const supportMetadata = {
  title: "Support & Project Process",
  description:
    "Learn how Lexentify handles project agreements, revisions, post-launch support, and client enquiries.",
} as const;

export const supportPageContent = {
  hero: {
    label: "Support",
    title: "Clear expectations at every stage",
    intro:
      "Learn how we communicate, review project work, handle post-launch support, and document the terms of each engagement.",
  },
  guaranteesLabel: "How we work with clients",
  guarantees: [
    {
      title: "Review the design direction",
      body: "We agree on a design-review milestone before full development begins. The review process, included revisions, approval method, and any cancellation option are documented in the project agreement.",
    },
    {
      title: "Defined post-launch support",
      body: "Each project has a support period and scope specified in its written agreement. Support covers eligible issues within the agreed deliverables. New features, additional content, and third-party service issues may require separate work.",
    },
    {
      title: "Clear pricing and scope",
      body: "The written proposal and project agreement set out the agreed price and deliverables. Changes to the scope, price, or timeline require written approval before the additional work begins.",
    },
    {
      title: "Written project terms",
      body: "Before work starts, both parties should have written terms covering the project scope, payment schedule, timeline, review process, ownership, support, and cancellation conditions.",
    },
  ],
  contactLabel: "Contact",
  contacts: [
    {
      title: "Existing clients",
      body: "For a project-related question or support request, contact us with your business name, project details, and a clear description of the issue. We will review your request and respond as soon as reasonably practicable.",
      email: "support@lexentify.com",
    },
    {
      title: "Prospective clients",
      body: "Have questions about pricing, deliverables, project timing, or whether our services fit your business? Contact us to discuss your requirements before making a commitment.",
      email: "business@lexentify.com",
    },
  ],
  stepsLabel: "How a project proceeds",
  steps: [
    "We discuss your requirements and provide a written proposal outlining the intended scope, price, and estimated timeline.",
    "Before work begins, both parties review and sign the applicable project agreement and Statement of Work (SOW), including payment milestones and cancellation terms.",
    "We share the agreed design direction for review. Any revision limits, approval deadlines, and applicable cancellation or refund terms follow the signed agreement.",
    "After design approval, we develop and test the website against the agreed deliverables. Requests outside the scope are quoted separately and require written approval.",
    "We complete the agreed review and handover process. Final payment, production launch, transfer of assets, and post-launch support follow the payment and delivery terms agreed in writing.",
  ],
  emailPrompt: "Prefer email communication?",
  generalEmail: "info@lexentify.com",
  faqAction: "Check the FAQ",
  faqHref: "/faq",
} as const;
