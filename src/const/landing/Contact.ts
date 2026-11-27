export const businessContactEmail = "business@lexentify.com";

export const contactContent = {
  label: "Contact",
  title: "Discuss your website",
  intro:
    "Tell us about your trade, target service area and current website. We’ll use the details to assess fit and outline the next steps.",
  successTitle: "Message received.",
  successMessage:
    "Thank you for reaching out. We’ll review your details and reply with clear next steps.",
  sendAnother: "Send another message",
  fields: {
    name: { label: "Your name *", placeholder: "John Smith" },
    business: {
      label: "Business name *",
      placeholder: "Smith Plumbing Co.",
    },
    email: { label: "Email address *", placeholder: "you@business.com" },
    interest: {
      label: "What are you looking for?",
      options: [
        { value: "Essential", label: "Essential — Single-page website" },
        { value: "Pro", label: "Pro — Multi-page website" },
        { value: "Custom", label: "Custom — Larger or bespoke website" },
        { value: "Not sure", label: "Not sure yet / Need guidance" },
      ],
    },
    message: {
      label: "Project details or goals *",
      placeholder:
        "Tell us about your trade business and what you hope your new website can achieve.",
    },
  },
  sendError: "Your message was not sent. Try again, or email us directly at",
  sendAction: "Send message",
  sendingAction: "Sending message",
  contactRows: [
    {
      title: "Direct email",
      description:
        "Prefer writing directly? Email us with a brief summary of your business and website needs.",
      action: businessContactEmail,
      href: `mailto:${businessContactEmail}`,
    },
    {
      title: "Already a client?",
      description:
        "For active project updates and rapid communication, message us directly via WhatsApp.",
      action: "Message on WhatsApp",
      href: "https://wa.me/6285235086814",
    },
    {
      title: "Written agreement first",
      description:
        "Before work begins, the scope, price, timeline, ownership and support arrangements should be confirmed in writing.",
    },
  ],
} as const;
