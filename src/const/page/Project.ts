export const serviceTypeOptions = [
  "Plumbing",
  "Electrical",
  "HVAC (Heating & Cooling)",
  "Roofing",
  "Cleaning",
  "Landscaping & Gardening",
  "Other",
] as const;

export const projectGoalOptions = [
  "Get more phone calls / enquiries",
  "Look more professional than competitors",
  "Show off past jobs (photos, reviews)",
  "Make it easy for customers to book online",
  "Replace an old, outdated site",
  "Something else",
] as const;

export const projectPackageOptions = [
  "Essential",
  "Pro",
  "Custom",
  "Not sure yet",
] as const;

export const projectBudgetOptions = [
  "Under $1,000",
  "$1,000–$3,000",
  "$3,000–$6,000",
  "$6,000+",
  "Prefer to discuss",
] as const;

export const projectTimelineOptions = [
  "ASAP",
  "Within 1 month",
  "1–3 months",
  "No rush, just exploring",
] as const;

export const projectPageContent = {
  validationError: "Please fill in the required fields marked with *.",
  requiredIndicator: "*",
  optionalIndicator: "(optional)",
  otherServiceType: "Other",
  otherGoal: "Something else",
  confirmation: {
    badge: "Details received",
    title: "Thanks — we’ve got your details.",
    description:
      "We’ll review your details and reply with a proposed scope, timeline and any relevant documents. No pressure — reply with questions before making a commitment.",
  },
  hero: {
    eyebrow: "Start project",
    title: "Tell us about your website",
    description:
      "Share a few details about your home-service business. We’ll assess the fit and explain a suitable next step.",
    ndaDescription:
      "If you prefer to work under an NDA or need a formal Master Service Agreement, just let us know in the form. We’ll send a simple NDA and MSA alongside a draft Statement of Work based on your answers, so everything is clear before we start.",
  },
  sections: [
    "Your business",
    "What you need",
    "Package & budget",
    "Contact details",
  ],
  business: {
    name: { label: "Business name", placeholder: "e.g. Mitchell's Plumbing" },
    type: {
      label: "What does your business do?",
      helper: "Pick the closest match — doesn’t need to be exact.",
      emptyOption: "Select one",
      otherPlaceholder: "Tell us what you do",
    },
    area: {
      label: "Where do you work?",
      helper: "Suburbs, city, or region you service.",
      placeholder: "e.g. Western Sydney, NSW",
    },
    website: {
      label: "Do you already have a website?",
      helper: "If yes, drop the link so we can take a look.",
      placeholder:
        "e.g. www.mitchellsplumbing.com.au (or 'No, starting fresh')",
    },
  },
  goals: {
    label: "What do you want the website to do for you?",
    helper: "Pick as many as apply.",
    otherPlaceholder: "Tell us more",
    notesLabel: "Anything specific you want us to know?",
    notesHelper: "Any pages, features, or examples of sites you like. Totally optional.",
    notesPlaceholder:
      'e.g. "I love how [competitor]’s site looks" or "Need a quote request form"',
  },
  package: {
    label: "Which package sounds right for you?",
    helper:
      "Not sure? Pick “Not sure yet” and we’ll help you figure it out.",
  },
  budget: {
    label: "Rough budget range",
    helper: "This just helps us scope the right options — no commitment.",
    emptyOption: "Select a range",
  },
  timeline: {
    label: "When do you need this live?",
    helper: "Give us your ideal timeframe — we’ll tell you if it’s realistic.",
    emptyOption: "Select a timeframe",
  },
  contact: {
    name: { label: "Your name", placeholder: "e.g. Dave Mitchell" },
    email: {
      label: "Email address",
      helper: "We’ll send your proposal here.",
      placeholder: "e.g. dave@mitchellsplumbing.com.au",
    },
    phone: {
      label: "Phone or WhatsApp number",
      helper: "Only if you’re happy for us to reach out this way.",
      placeholder: "e.g. 04XX XXX XXX",
    },
    nda: "I’d like to sign an NDA before sharing more details",
    ndaHelper: "No worries if so — we’ll send it over before asking anything further.",
  },
  submitAction: "Send My Details",
  followUp: {
    title: "What happens next",
    steps: [
      {
        emphasis: "We review the information you provide",
        text: " and identify the scope and questions that need to be clarified.",
      },
      {
        emphasis: "You’ll get a proposed scope, timeline, and price range",
        text: " based on what you told us — no vague “let’s hop on a call” runaround.",
      },
      {
        emphasis: "If you asked for an NDA or MSA, it’ll be attached",
        text: ", along with a draft Statement of Work, so everything’s clear before any money or commitment changes hands.",
      },
      {
        emphasis: "No pressure.",
        text: " If something’s unclear or you just want to ask a question first, reply to our email — you’re not locked into anything by filling out this form.",
      },
    ],
  },
} as const;
