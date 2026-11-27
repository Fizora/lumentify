export const startProjectOptions = {
  packages: ["Essential", "Pro", "Custom"],
  suburbs: ["1-5 suburbs", "6-15 suburbs", "Greater Metro"],
  packageLabels: [
    "Essential ($1,499) — 1 landing page",
    "Pro ($2,499) — Up to 5 custom pages",
    "Custom (from $4,599) — Multi-suburb platform",
  ],
  suburbLabels: [
    "1–5 suburbs / local area",
    "6–15 suburbs (regional)",
    "Greater metropolitan area (multi-branch)",
  ],
} as const;

export const briefUploadConfig = {
  maxBytes: 3 * 1024 * 1024,
  accept: ".pdf,.doc,.docx,.txt",
  mimeTypes: {
    ".pdf": "application/pdf",
    ".doc": "application/msword",
    ".docx":
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ".txt": "text/plain",
  },
} as const;

export const startProjectContent = {
  backAction: "Back to home",
  onboardingLabel: "Lexentify onboarding",
  title: "Talk about your trade website",
  intro:
    "Share your business details and website goals. We’ll review the brief before recommending a scope.",
  reassuranceTitle: "No payment is taken at this stage.",
  reassurance:
    "Submitting this brief does not start work or commit you to a purchase. Any proposal, Statement of Work and payment schedule will be agreed separately.",
  successTitle: "Project brief received.",
  successLead: "Thank you,",
  successBetween: ". We have received your project details for",
  successEnd:
    "and will review your specifications. We’ll reply with relevant next steps.",
  returnAction: "Return to homepage",
  fields: {
    name: { label: "Your full name *", placeholder: "John Smith" },
    business: {
      label: "Business / trade name *",
      placeholder: "Smith Plumbing & HVAC",
    },
    email: { label: "Email address *", placeholder: "you@business.com" },
    phone: {
      label: "Phone / WhatsApp number *",
      placeholder: "+61 255 511 192",
    },
    package: { label: "Selected package" },
    suburbs: { label: "Target service area" },
    goals: {
      label: "Project goals & current website (if any) *",
      placeholder:
        "Tell us about your current site limitations, the trade services you want to highlight, or your main objectives.",
    },
    brief: {
      label: "Brief document (optional)",
      hint: "PDF, DOC, DOCX, or TXT. Maximum file size: 3 MB.",
      error:
        "This file wasn't attached. Choose a supported document up to 3 MB, or continue without one.",
    },
  },
  sendError: "Your brief was not sent. Try again, or email us directly at",
  submitAction: "Submit project brief",
  submittingAction: "Submitting project brief",
  loading: "Loading…",
} as const;
