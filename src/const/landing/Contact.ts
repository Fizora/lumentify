export const businessContactEmail = "business@lexentify.com";

export const contactContent = {
  label: "Contact",
  title: "Let’s talk about your site.",
  intro:
    "Tell us a bit about your business and what you need. No pressure, no aggressive sales script — just honest, professional next steps.",
  successTitle: "Message received.",
  successMessage:
    "Thank you for reaching out. We review every project personally and will reply with clear, actionable steps within 1 business day.",
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
        { value: "Essential", label: "Essential — High-converting landing page" },
        { value: "Pro", label: "Pro — Multi-page local asset" },
        { value: "Custom", label: "Custom — Multi-suburb platform" },
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
        "Prefer writing directly? We check our inbox daily and reply within 1 business day.",
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
        "Every project starts with a clear written proposal and formal agreement before any financial commitment — absolute transparency guaranteed.",
    },
  ],
} as const;
