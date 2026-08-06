"use client";

import { useState } from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

type ServiceType =
  | "Plumbing"
  | "Electrical"
  | "HVAC (Heating & Cooling)"
  | "Roofing"
  | "Cleaning"
  | "Landscaping & Gardening"
  | "Other";

type Package = "Essential" | "Pro" | "Custom" | "Not sure yet";

type Goal =
  | "Get more phone calls / enquiries"
  | "Look more professional than competitors"
  | "Show off past jobs (photos, reviews)"
  | "Make it easy for customers to book online"
  | "Replace an old, outdated site"
  | "Something else";

const SERVICE_TYPES: ServiceType[] = [
  "Plumbing",
  "Electrical",
  "HVAC (Heating & Cooling)",
  "Roofing",
  "Cleaning",
  "Landscaping & Gardening",
  "Other",
];

const GOALS: Goal[] = [
  "Get more phone calls / enquiries",
  "Look more professional than competitors",
  "Show off past jobs (photos, reviews)",
  "Make it easy for customers to book online",
  "Replace an old, outdated site",
  "Something else",
];

const PACKAGES: Package[] = ["Essential", "Pro", "Custom", "Not sure yet"];

const BUDGET_OPTIONS = [
  "Under $1,000",
  "$1,000–$3,000",
  "$3,000–$6,000",
  "$6,000+",
  "Prefer to discuss",
];

const TIMELINE_OPTIONS = [
  "ASAP",
  "Within 1 month",
  "1–3 months",
  "No rush, just exploring",
];

interface FormState {
  businessName: string;
  serviceType: ServiceType | "";
  serviceTypeOther: string;
  serviceArea: string;
  currentWebsite: string;
  goals: Goal[];
  goalsOther: string;
  notes: string;
  package: Package | "";
  budget: string;
  timeline: string;
  name: string;
  email: string;
  phone: string;
  wantsNda: boolean;
}

const initialState: FormState = {
  businessName: "",
  serviceType: "",
  serviceTypeOther: "",
  serviceArea: "",
  currentWebsite: "",
  goals: [],
  goalsOther: "",
  notes: "",
  package: "",
  budget: "",
  timeline: "",
  name: "",
  email: "",
  phone: "",
  wantsNda: false,
};

function FieldLabel({
  htmlFor,
  required,
  children,
}: {
  htmlFor: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label htmlFor={htmlFor} className="block text-sm font-semibold text-black">
      {children}
      {required ? (
        <span className="text-zinc-400 font-normal"> *</span>
      ) : (
        <span className="text-zinc-400 font-normal"> (optional)</span>
      )}
    </label>
  );
}

function HelperText({ children }: { children: React.ReactNode }) {
  return <p className="text-xs text-gray-500 mt-1">{children}</p>;
}

const inputClasses =
  "mt-2 w-full  border border-zinc-200 px-3.5 py-2.5 text-[15px] text-black placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-black/80 focus:border-transparent";

function SectionHeading({ step, title }: { step: string; title: string }) {
  return (
    <div className="flex items-baseline gap-2 pb-1">
      <span className="text-xs font-semibold tracking-widest uppercase text-zinc-400">
        {step}
      </span>
      <h2 className="text-base font-semibold text-black">{title}</h2>
    </div>
  );
}

export default function Project() {
  const [form, setForm] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function toggleGoal(goal: Goal) {
    setForm((prev) => ({
      ...prev,
      goals: prev.goals.includes(goal)
        ? prev.goals.filter((g) => g !== goal)
        : [...prev.goals, goal],
    }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    if (
      !form.businessName ||
      !form.serviceType ||
      !form.serviceArea ||
      form.goals.length === 0 ||
      !form.package ||
      !form.name ||
      !form.email
    ) {
      setError("Please fill in the required fields marked with *.");
      return;
    }

    // TODO: wire this up to your actual submission endpoint
    // (API route, email service like Resend, or a form backend like Formspree).
    // Example:
    // await fetch("/api/start-project", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(form),
    // });

    console.log("Start Project form submitted:", form);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <>
        <Navbar />
        <main className="pt-32 pb-24">
          <div className="mx-auto max-w-2xl px-3 text-center space-y-4">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-zinc-600 bg-zinc-100 px-4 py-1.5 ">
              Details received
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-black leading-tight">
              Thanks — we&apos;ve got your details.
            </h1>
            <p className="text-gray-600 text-[15px] md:text-base leading-relaxed">
              We&apos;ll reply within 1 business day with a proposed scope,
              timeline, and any documents you asked for. No pressure — reply to
              our email anytime if you&apos;ve got questions first.
            </p>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24">
        <div className="mx-auto max-w-3xl px-3 space-y-10">
          {/* Hero */}
          <section className="space-y-4">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-zinc-600 bg-zinc-100 px-4 py-1.5 ">
              Start project
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-black leading-tight">
              Ready to get your site built?
            </h1>
            <p className="text-gray-600 text-[15px] md:text-base leading-relaxed">
              Share a few details about your home-service business and
              we&apos;ll reply with a proposed scope, timeline, and simple
              documents to kick things off.
            </p>
            <p className="text-gray-600 text-[15px] md:text-base leading-relaxed">
              If you prefer to work under an NDA or need a formal Master Service
              Agreement, just let us know in the form. We&apos;ll send a simple
              NDA and MSA alongside a draft Statement of Work based on your
              answers, so everything is clear before we start.
            </p>
          </section>

          {/* Project intake form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white border border-zinc-200  p-6 md:p-8 space-y-8"
          >
            {/* Section 1 — Your Business */}
            <fieldset className="space-y-5">
              <SectionHeading step="01" title="Your business" />

              <div>
                <FieldLabel htmlFor="businessName" required>
                  Business name
                </FieldLabel>
                <input
                  id="businessName"
                  type="text"
                  placeholder="e.g. Mitchell's Plumbing"
                  className={inputClasses}
                  value={form.businessName}
                  onChange={(e) => update("businessName", e.target.value)}
                />
              </div>

              <div>
                <FieldLabel htmlFor="serviceType" required>
                  What does your business do?
                </FieldLabel>
                <HelperText>
                  Pick the closest match — doesn&apos;t need to be exact.
                </HelperText>
                <select
                  id="serviceType"
                  className={inputClasses}
                  value={form.serviceType}
                  onChange={(e) =>
                    update("serviceType", e.target.value as ServiceType)
                  }
                >
                  <option value="" disabled>
                    Select one
                  </option>
                  {SERVICE_TYPES.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
                {form.serviceType === "Other" && (
                  <input
                    type="text"
                    placeholder="Tell us what you do"
                    className={inputClasses}
                    value={form.serviceTypeOther}
                    onChange={(e) => update("serviceTypeOther", e.target.value)}
                  />
                )}
              </div>

              <div>
                <FieldLabel htmlFor="serviceArea" required>
                  Where do you work?
                </FieldLabel>
                <HelperText>Suburbs, city, or region you service.</HelperText>
                <input
                  id="serviceArea"
                  type="text"
                  placeholder="e.g. Western Sydney, NSW"
                  className={inputClasses}
                  value={form.serviceArea}
                  onChange={(e) => update("serviceArea", e.target.value)}
                />
              </div>

              <div>
                <FieldLabel htmlFor="currentWebsite">
                  Do you already have a website?
                </FieldLabel>
                <HelperText>
                  If yes, drop the link so we can take a look.
                </HelperText>
                <input
                  id="currentWebsite"
                  type="text"
                  placeholder="e.g. www.mitchellsplumbing.com.au (or 'No, starting fresh')"
                  className={inputClasses}
                  value={form.currentWebsite}
                  onChange={(e) => update("currentWebsite", e.target.value)}
                />
              </div>
            </fieldset>

            {/* Section 2 — What You Need */}
            <fieldset className="space-y-5 border-t border-zinc-100 pt-8">
              <SectionHeading step="02" title="What you need" />

              <div>
                <FieldLabel htmlFor="goals" required>
                  What do you want the website to do for you?
                </FieldLabel>
                <HelperText>Pick as many as apply.</HelperText>
                <div className="mt-2 space-y-2">
                  {GOALS.map((goal) => (
                    <label
                      key={goal}
                      className="flex items-start gap-2.5 text-[15px] text-black"
                    >
                      <input
                        type="checkbox"
                        className="mt-0.5 h-4 w-4  border-zinc-300"
                        checked={form.goals.includes(goal)}
                        onChange={() => toggleGoal(goal)}
                      />
                      {goal}
                    </label>
                  ))}
                </div>
                {form.goals.includes("Something else") && (
                  <input
                    type="text"
                    placeholder="Tell us more"
                    className={inputClasses}
                    value={form.goalsOther}
                    onChange={(e) => update("goalsOther", e.target.value)}
                  />
                )}
              </div>

              <div>
                <FieldLabel htmlFor="notes">
                  Anything specific you want us to know?
                </FieldLabel>
                <HelperText>
                  Any pages, features, or examples of sites you like. Totally
                  optional.
                </HelperText>
                <textarea
                  id="notes"
                  rows={3}
                  placeholder='e.g. "I love how [competitor]&apos;s site looks" or "Need a quote request form"'
                  className={inputClasses}
                  value={form.notes}
                  onChange={(e) => update("notes", e.target.value)}
                />
              </div>
            </fieldset>

            {/* Section 3 — Package & Budget */}
            <fieldset className="space-y-5 border-t border-zinc-100 pt-8">
              <SectionHeading step="03" title="Package & budget" />

              <div>
                <FieldLabel htmlFor="package" required>
                  Which package sounds right for you?
                </FieldLabel>
                <HelperText>
                  Not sure? Pick &quot;Not sure yet&quot; and we&apos;ll help
                  you figure it out.
                </HelperText>
                <div className="mt-2 grid grid-cols-2 gap-2">
                  {PACKAGES.map((p) => (
                    <button
                      key={p}
                      type="button"
                      onClick={() => update("package", p)}
                      className={` border px-3.5 py-2.5 text-sm font-medium text-left transition-colors ${
                        form.package === p
                          ? "border-black bg-black text-white"
                          : "border-zinc-200 text-black hover:border-zinc-300"
                      }`}
                    >
                      {p}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <FieldLabel htmlFor="budget">Rough budget range</FieldLabel>
                <HelperText>
                  This just helps us scope the right options — no commitment.
                </HelperText>
                <select
                  id="budget"
                  className={inputClasses}
                  value={form.budget}
                  onChange={(e) => update("budget", e.target.value)}
                >
                  <option value="">Select a range</option>
                  {BUDGET_OPTIONS.map((b) => (
                    <option key={b} value={b}>
                      {b}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <FieldLabel htmlFor="timeline">
                  When do you need this live?
                </FieldLabel>
                <HelperText>
                  Give us your ideal timeframe — we&apos;ll tell you if
                  it&apos;s realistic.
                </HelperText>
                <select
                  id="timeline"
                  className={inputClasses}
                  value={form.timeline}
                  onChange={(e) => update("timeline", e.target.value)}
                >
                  <option value="">Select a timeframe</option>
                  {TIMELINE_OPTIONS.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>
            </fieldset>

            {/* Section 4 — Contact Details */}
            <fieldset className="space-y-5 border-t border-zinc-100 pt-8">
              <SectionHeading step="04" title="Contact details" />

              <div>
                <FieldLabel htmlFor="name" required>
                  Your name
                </FieldLabel>
                <input
                  id="name"
                  type="text"
                  placeholder="e.g. Dave Mitchell"
                  className={inputClasses}
                  value={form.name}
                  onChange={(e) => update("name", e.target.value)}
                />
              </div>

              <div>
                <FieldLabel htmlFor="email" required>
                  Email address
                </FieldLabel>
                <HelperText>We&apos;ll send your proposal here.</HelperText>
                <input
                  id="email"
                  type="email"
                  placeholder="e.g. dave@mitchellsplumbing.com.au"
                  className={inputClasses}
                  value={form.email}
                  onChange={(e) => update("email", e.target.value)}
                />
              </div>

              <div>
                <FieldLabel htmlFor="phone">
                  Phone or WhatsApp number
                </FieldLabel>
                <HelperText>
                  Only if you&apos;re happy for us to reach out this way.
                </HelperText>
                <input
                  id="phone"
                  type="tel"
                  placeholder="e.g. 04XX XXX XXX"
                  className={inputClasses}
                  value={form.phone}
                  onChange={(e) => update("phone", e.target.value)}
                />
              </div>

              <label className="flex items-start gap-2.5 text-[15px] text-black">
                <input
                  type="checkbox"
                  className="mt-0.5 h-4 w-4  border-zinc-300"
                  checked={form.wantsNda}
                  onChange={(e) => update("wantsNda", e.target.checked)}
                />
                <span>
                  I&apos;d like to sign an NDA before sharing more details
                  <span className="block text-xs text-gray-500 mt-0.5">
                    No worries if so — we&apos;ll send it over before asking
                    anything further.
                  </span>
                </span>
              </label>
            </fieldset>

            {error && (
              <p className="text-sm text-red-600 border border-red-200 bg-red-50  px-3.5 py-2.5">
                {error}
              </p>
            )}

            <button
              type="submit"
              className="w-full  bg-black text-white text-[15px] font-semibold py-3 hover:bg-zinc-800 transition-colors"
            >
              Send My Details
            </button>
          </form>

          {/* What happens next */}
          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-black">
              What happens next
            </h2>
            <ul className="space-y-2 text-gray-600 text-[15px] leading-relaxed list-disc pl-5">
              <li>
                <span className="text-black font-medium">
                  We reply within 1 business day
                </span>{" "}
                — usually sooner.
              </li>
              <li>
                <span className="text-black font-medium">
                  You&apos;ll get a proposed scope, timeline, and price range
                </span>{" "}
                based on what you told us — no vague &quot;let&apos;s hop on a
                call&quot; runaround.
              </li>
              <li>
                <span className="text-black font-medium">
                  If you asked for an NDA or MSA, it&apos;ll be attached
                </span>
                , along with a draft Statement of Work, so everything&apos;s
                clear before any money or commitment changes hands.
              </li>
              <li>
                <span className="text-black font-medium">No pressure.</span> If
                something&apos;s unclear or you just want to ask a question
                first, reply to our email — you&apos;re not locked into anything
                by filling out this form.
              </li>
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
