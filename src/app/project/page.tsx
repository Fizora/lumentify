"use client";

import { useState } from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { C } from "@/components/ui/Swiss";
import {
  projectBudgetOptions,
  projectGoalOptions,
  projectPackageOptions,
  projectPageContent,
  projectTimelineOptions,
  serviceTypeOptions,
} from "@/const/page/Project";

type ServiceType = (typeof serviceTypeOptions)[number];
type Package = (typeof projectPackageOptions)[number];
type Goal = (typeof projectGoalOptions)[number];

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
    <label htmlFor={htmlFor} className="block text-lg font-medium text-white">
      {children}
      {required ? (
        <span className="text-zinc-500 font-normal">
          {" "}
          {projectPageContent.requiredIndicator}
        </span>
      ) : (
        <span className="text-zinc-500 font-normal">
          {" "}
          {projectPageContent.optionalIndicator}
        </span>
      )}
    </label>
  );
}

function HelperText({ children }: { children: React.ReactNode }) {
  return <p className="mt-1 text-xs text-zinc-400">{children}</p>;
}

const inputClasses =
  "mt-2 w-full border border-[#555555] bg-transparent px-3.5 py-2.5 text-[15px] text-white placeholder:text-zinc-500 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-white/80";

function SectionHeading({ step, title }: { step: string; title: string }) {
  return (
    <div className="flex items-baseline gap-2 pb-1">
      <span className="text-xs font-medium tracking-widest uppercase text-zinc-400">
        {step}
      </span>
      <h2 className="text-sm font-medium text-white">{title}</h2>
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
      setError(projectPageContent.validationError);
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
        <main
          className="pt-32 pb-24"
          style={{ backgroundColor: C.BG, color: C.INK }}
        >
          <div className="mx-auto w-full max-w-[1600px] border-x px-5 md:px-10">
            <div className="mx-auto max-w-2xl space-y-4 text-center">
            <span className="inline-block border border-[#555555] px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-zinc-400">
              {projectPageContent.confirmation.badge}
            </span>
            <h1 className="text-3xl font-medium leading-tight md:text-4xl">
              {projectPageContent.confirmation.title}
            </h1>
            <p className="text-[15px] leading-relaxed text-zinc-400 md:text-sm">
              {projectPageContent.confirmation.description}
            </p>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main
        className="pt-32 pb-24"
        style={{ backgroundColor: C.BG, color: C.INK }}
      >
        <div className="mx-auto w-full max-w-[1600px] border-x px-5 md:px-10">
        <div className="mx-auto max-w-3xl space-y-10">
          {/* Hero */}
          <section className="space-y-4">
            <span className="inline-block border border-[#555555] px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-zinc-400">
              {projectPageContent.hero.eyebrow}
            </span>
            <h1 className="text-3xl font-medium leading-tight md:text-4xl">
              {projectPageContent.hero.title}
            </h1>
            <p className="text-[15px] leading-relaxed text-zinc-400 md:text-sm">
              {projectPageContent.hero.description}
            </p>
            <p className="text-[15px] leading-relaxed text-zinc-400 md:text-sm">
              {projectPageContent.hero.ndaDescription}
            </p>
          </section>

          {/* Project intake form */}
          <form
            onSubmit={handleSubmit}
            className="space-y-8 border border-[#2A2A2A] bg-[#080808] p-6 md:p-8"
          >
            {/* Section 1 — Your Business */}
            <fieldset className="space-y-5">
              <SectionHeading step="01" title={projectPageContent.sections[0]} />

              <div>
                <FieldLabel htmlFor="businessName" required>
                  {projectPageContent.business.name.label}
                </FieldLabel>
                <input
                  id="businessName"
                  type="text"
                  placeholder={projectPageContent.business.name.placeholder}
                  className={inputClasses}
                  value={form.businessName}
                  onChange={(e) => update("businessName", e.target.value)}
                />
              </div>

              <div>
                <FieldLabel htmlFor="serviceType" required>
                  {projectPageContent.business.type.label}
                </FieldLabel>
                <HelperText>
                  {projectPageContent.business.type.helper}
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
                    {projectPageContent.business.type.emptyOption}
                  </option>
                  {serviceTypeOptions.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
                {form.serviceType === projectPageContent.otherServiceType && (
                  <input
                    type="text"
                    placeholder={projectPageContent.business.type.otherPlaceholder}
                    className={inputClasses}
                    value={form.serviceTypeOther}
                    onChange={(e) => update("serviceTypeOther", e.target.value)}
                  />
                )}
              </div>

              <div>
                <FieldLabel htmlFor="serviceArea" required>
                  {projectPageContent.business.area.label}
                </FieldLabel>
                <HelperText>
                  {projectPageContent.business.area.helper}
                </HelperText>
                <input
                  id="serviceArea"
                  type="text"
                  placeholder={projectPageContent.business.area.placeholder}
                  className={inputClasses}
                  value={form.serviceArea}
                  onChange={(e) => update("serviceArea", e.target.value)}
                />
              </div>

              <div>
                <FieldLabel htmlFor="currentWebsite">
                  {projectPageContent.business.website.label}
                </FieldLabel>
                <HelperText>
                  {projectPageContent.business.website.helper}
                </HelperText>
                <input
                  id="currentWebsite"
                  type="text"
                  placeholder={projectPageContent.business.website.placeholder}
                  className={inputClasses}
                  value={form.currentWebsite}
                  onChange={(e) => update("currentWebsite", e.target.value)}
                />
              </div>
            </fieldset>

            {/* Section 2 — What You Need */}
            <fieldset className="space-y-5 border-t border-[#2A2A2A] pt-8">
              <SectionHeading step="02" title={projectPageContent.sections[1]} />

              <div>
                <FieldLabel htmlFor="goals" required>
                  {projectPageContent.goals.label}
                </FieldLabel>
                <HelperText>{projectPageContent.goals.helper}</HelperText>
                <div className="mt-2 space-y-2">
                  {projectGoalOptions.map((goal) => (
                    <label
                      key={goal}
                      className="flex items-start gap-2.5 text-[15px] text-white"
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
                {form.goals.includes(projectPageContent.otherGoal) && (
                  <input
                    type="text"
                    placeholder={projectPageContent.goals.otherPlaceholder}
                    className={inputClasses}
                    value={form.goalsOther}
                    onChange={(e) => update("goalsOther", e.target.value)}
                  />
                )}
              </div>

              <div>
                <FieldLabel htmlFor="notes">
                  {projectPageContent.goals.notesLabel}
                </FieldLabel>
                <HelperText>
                  {projectPageContent.goals.notesHelper}
                </HelperText>
                <textarea
                  id="notes"
                  rows={3}
                  placeholder={projectPageContent.goals.notesPlaceholder}
                  className={inputClasses}
                  value={form.notes}
                  onChange={(e) => update("notes", e.target.value)}
                />
              </div>
            </fieldset>

            {/* Section 3 — Package & Budget */}
            <fieldset className="space-y-5 border-t border-[#2A2A2A] pt-8">
              <SectionHeading step="03" title={projectPageContent.sections[2]} />

              <div>
                <FieldLabel htmlFor="package" required>
                  {projectPageContent.package.label}
                </FieldLabel>
                <HelperText>
                  {projectPageContent.package.helper}
                </HelperText>
                <div className="mt-2 grid grid-cols-2 gap-2">
                  {projectPackageOptions.map((p) => (
                    <button
                      key={p}
                      type="button"
                      onClick={() => update("package", p)}
                      className={` border px-3.5 py-2.5 text-lg font-medium text-left transition-colors ${
                        form.package === p
                          ? "border-white bg-white text-black"
                          : "text-white hover:border-zinc-500"
                      }`}
                    >
                      {p}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <FieldLabel htmlFor="budget">
                  {projectPageContent.budget.label}
                </FieldLabel>
                <HelperText>
                  {projectPageContent.budget.helper}
                </HelperText>
                <select
                  id="budget"
                  className={inputClasses}
                  value={form.budget}
                  onChange={(e) => update("budget", e.target.value)}
                >
                  <option value="">
                    {projectPageContent.budget.emptyOption}
                  </option>
                  {projectBudgetOptions.map((b) => (
                    <option key={b} value={b}>
                      {b}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <FieldLabel htmlFor="timeline">
                  {projectPageContent.timeline.label}
                </FieldLabel>
                <HelperText>
                  {projectPageContent.timeline.helper}
                </HelperText>
                <select
                  id="timeline"
                  className={inputClasses}
                  value={form.timeline}
                  onChange={(e) => update("timeline", e.target.value)}
                >
                  <option value="">
                    {projectPageContent.timeline.emptyOption}
                  </option>
                  {projectTimelineOptions.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>
            </fieldset>

            {/* Section 4 — Contact Details */}
            <fieldset className="space-y-5 border-t border-[#2A2A2A] pt-8">
              <SectionHeading step="04" title={projectPageContent.sections[3]} />

              <div>
                <FieldLabel htmlFor="name" required>
                  {projectPageContent.contact.name.label}
                </FieldLabel>
                <input
                  id="name"
                  type="text"
                  placeholder={projectPageContent.contact.name.placeholder}
                  className={inputClasses}
                  value={form.name}
                  onChange={(e) => update("name", e.target.value)}
                />
              </div>

              <div>
                <FieldLabel htmlFor="email" required>
                  {projectPageContent.contact.email.label}
                </FieldLabel>
                <HelperText>
                  {projectPageContent.contact.email.helper}
                </HelperText>
                <input
                  id="email"
                  type="email"
                  placeholder={projectPageContent.contact.email.placeholder}
                  className={inputClasses}
                  value={form.email}
                  onChange={(e) => update("email", e.target.value)}
                />
              </div>

              <div>
                <FieldLabel htmlFor="phone">
                  {projectPageContent.contact.phone.label}
                </FieldLabel>
                <HelperText>
                  {projectPageContent.contact.phone.helper}
                </HelperText>
                <input
                  id="phone"
                  type="tel"
                  placeholder={projectPageContent.contact.phone.placeholder}
                  className={inputClasses}
                  value={form.phone}
                  onChange={(e) => update("phone", e.target.value)}
                />
              </div>

              <label className="flex items-start gap-2.5 text-[15px] text-white">
                <input
                  type="checkbox"
                  className="mt-0.5 h-4 w-4  border-zinc-300"
                  checked={form.wantsNda}
                  onChange={(e) => update("wantsNda", e.target.checked)}
                />
                <span>
                  {projectPageContent.contact.nda}
                  <span className="mt-0.5 block text-xs text-zinc-400">
                    {projectPageContent.contact.ndaHelper}
                  </span>
                </span>
              </label>
            </fieldset>

            {error && (
              <p className="border border-red-500/60 bg-red-950/30 px-3.5 py-2.5 text-lg text-red-300">
                {error}
              </p>
            )}

            <button
              type="submit"
              className="w-full bg-white py-3 text-[15px] font-medium text-black transition-colors hover:bg-zinc-200"
            >
              {projectPageContent.submitAction}
            </button>
          </form>

          {/* What happens next */}
          <section className="space-y-3">
            <h2 className="text-lg font-medium text-white">
              {projectPageContent.followUp.title}
            </h2>
            <ul className="list-disc space-y-2 pl-5 text-[15px] leading-relaxed text-zinc-400">
              {projectPageContent.followUp.steps.map((item) => (
                <li key={item.emphasis}>
                  <span className="font-medium text-white">
                    {item.emphasis}
                  </span>
                  {item.text}
                </li>
              ))}
            </ul>
          </section>
        </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
