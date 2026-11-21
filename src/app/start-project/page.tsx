"use client";
import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { LuChevronLeft, LuCircleCheck, LuLoaderCircle } from "react-icons/lu";
import {
  C,
  Container,
  Field,
  Label,
  buttonClass,
  inputClass,
} from "@/components/ui/Swiss";
import { siteContent } from "@/const/data";
import {
  startProjectContent,
  startProjectOptions,
} from "@/const/page/StartProject";

type ProjectFormState = {
  name: string;
  business: string;
  email: string;
  phone: string;
  package: string;
  suburbsCount: string;
  goals: string;
};

const initialFormState: ProjectFormState = {
  name: "",
  business: "",
  email: "",
  phone: "",
  package: startProjectOptions.packages[0],
  suburbsCount: startProjectOptions.suburbs[0],
  goals: "",
};

function StartProjectContent() {
  const searchParams = useSearchParams();
  const [form, setForm] = useState<ProjectFormState>(() => {
    const requestedPackage = searchParams.get("package");
    const selectedPackage = startProjectOptions.packages.find(
      (option) => option === requestedPackage,
    );

    return selectedPackage
      ? { ...initialFormState, package: selectedPackage }
      : initialFormState;
  });
  const [status, setStatus] = useState<"idle" | "loading" | "sent" | "error">(
    "idle",
  );

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/project", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  return (
    <main
      className="min-h-screen"
      style={{ backgroundColor: C.BG, color: C.INK }}
    >
      <header className="border-b" style={{ borderColor: C.RULE }}>
        <Container className="flex items-center justify-between py-4">
          <Link
            href="/"
            className="flex items-center gap-2 text-sm font-medium transition-opacity hover:opacity-60"
          >
            <LuChevronLeft size={16} aria-hidden="true" />
            {startProjectContent.backAction}
          </Link>
          <Label>{startProjectContent.onboardingLabel}</Label>
        </Container>
      </header>

      <Container className="py-16 md:py-28">
        <div className="grid grid-cols-1 gap-x-6 gap-y-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <h1 className="text-balance text-[clamp(2.25rem,5vw,4rem)] font-semibold leading-none tracking-[-0.045em]">
              {startProjectContent.title}
            </h1>
            <p
              className="mt-6 max-w-sm text-base leading-relaxed"
              style={{ color: C.MUTED }}
            >
              {startProjectContent.intro}
            </p>
            <p
              className="mt-10 border-t pt-6 text-sm leading-relaxed"
              style={{ borderColor: C.RULE, color: C.MUTED }}
            >
              <strong className="font-semibold" style={{ color: C.INK }}>
                {startProjectContent.reassuranceTitle}
              </strong>{" "}
              {startProjectContent.reassurance}
            </p>
          </div>

          <div className="md:col-span-7">
            {status === "sent" ? (
              <div
                role="status"
                className="border-y py-16"
                style={{ borderColor: C.RULE }}
              >
                <LuCircleCheck className="mb-6 h-10 w-10" />
                <h2 className="text-3xl font-semibold tracking-tight">
                  {startProjectContent.successTitle}
                </h2>
                <p
                  className="mt-4 max-w-md text-[15px] leading-relaxed"
                  style={{ color: C.MUTED }}
                >
                  {startProjectContent.successLead}{" "}
                  <span className="font-semibold" style={{ color: C.INK }}>
                    {form.name}
                  </span>
                  {startProjectContent.successBetween}{" "}
                  <span className="font-semibold" style={{ color: C.INK }}>
                    {form.business}
                  </span>{" "}
                  {` ${startProjectContent.successEnd}`}
                </p>
                <Link href="/" className={`${buttonClass("solid")} mt-10`}>
                  {startProjectContent.returnAction}
                </Link>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2">
                  <Field id="name" label={startProjectContent.fields.name.label}>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder={startProjectContent.fields.name.placeholder}
                      className={inputClass}
                    />
                  </Field>
                  <Field
                    id="business"
                    label={startProjectContent.fields.business.label}
                  >
                    <input
                      id="business"
                      name="business"
                      type="text"
                      autoComplete="organization"
                      required
                      value={form.business}
                      onChange={handleChange}
                      placeholder={startProjectContent.fields.business.placeholder}
                      className={inputClass}
                    />
                  </Field>
                  <Field id="email" label={startProjectContent.fields.email.label}>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder={startProjectContent.fields.email.placeholder}
                      className={inputClass}
                    />
                  </Field>
                  <Field id="phone" label={startProjectContent.fields.phone.label}>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      placeholder={startProjectContent.fields.phone.placeholder}
                      className={inputClass}
                    />
                  </Field>
                  <Field
                    id="package"
                    label={startProjectContent.fields.package.label}
                  >
                    <select
                      id="package"
                      name="package"
                      value={form.package}
                      onChange={handleChange}
                      className={inputClass}
                    >
                      {startProjectOptions.packages.map((option, index) => (
                        <option key={option} value={option}>
                          {startProjectOptions.packageLabels[index]}
                        </option>
                      ))}
                    </select>
                  </Field>
                  <Field
                    id="suburbsCount"
                    label={startProjectContent.fields.suburbs.label}
                  >
                    <select
                      id="suburbsCount"
                      name="suburbsCount"
                      value={form.suburbsCount}
                      onChange={handleChange}
                      className={inputClass}
                    >
                      {startProjectOptions.suburbs.map((option, index) => (
                        <option key={option} value={option}>
                          {startProjectOptions.suburbLabels[index]}
                        </option>
                      ))}
                    </select>
                  </Field>
                </div>

                <Field
                  id="goals"
                  label={startProjectContent.fields.goals.label}
                >
                  <textarea
                    id="goals"
                    name="goals"
                    required
                    rows={4}
                    value={form.goals}
                    onChange={handleChange}
                    placeholder={startProjectContent.fields.goals.placeholder}
                    className={`${inputClass} resize-none`}
                  />
                </Field>

                {status === "error" && (
                  <p
                    role="alert"
                    className="border border-[#ff6b6b] px-4 py-3 text-sm leading-relaxed text-[#ff9a9a]"
                  >
                    {startProjectContent.sendError}{" "}
                    <a
                      href={`mailto:${siteContent.email}`}
                      className="font-medium underline"
                    >
                      {siteContent.email}
                    </a>
                    .
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className={`${buttonClass("solid")} w-full cursor-pointer`}
                >
                  {status === "loading" ? (
                    <>
                      {startProjectContent.submittingAction}
                      <LuLoaderCircle className="h-4 w-4 animate-spin" />
                    </>
                  ) : (
                    startProjectContent.submitAction
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </Container>
    </main>
  );
}

// Dibungkus Suspense karena memakai useSearchParams
export default function StartProjectPage() {
  return (
    <Suspense
      fallback={
        <div
          className="flex min-h-screen items-center justify-center text-sm"
          style={{ backgroundColor: C.BG, color: C.MUTED }}
        >
          {startProjectContent.loading}
        </div>
      }
    >
      <StartProjectContent />
    </Suspense>
  );
}
