"use client";
import { useState } from "react";
import { LuCircleCheck, LuLoaderCircle } from "react-icons/lu";
import {
  C,
  Field,
  Row,
  RowList,
  Section,
  buttonClass,
  inputClass,
} from "@/components/ui/Swiss";
import { contactContent } from "@/const/landing/Contact";

type FormState = {
  name: string;
  business: string;
  email: string;
  interest: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  business: "",
  email: "",
  interest: "Essential",
  message: "",
};

const Contact = () => {
  const [form, setForm] = useState<FormState>(initialState);
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
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("sent");
      setForm(initialState);
    } catch {
      setStatus("error");
    }
  };

  return (
    <Section
      id="contact"
      label={contactContent.label}
      title={contactContent.title}
      intro={contactContent.intro}
    >
      {status === "sent" ? (
        <div
          role="status"
          className="border-y py-16"
          style={{ borderColor: C.RULE }}
        >
          <LuCircleCheck className="mb-6 h-8 w-8" />
          <h3 className="text-2xl font-semibold tracking-tight">
            {contactContent.successTitle}
          </h3>
          <p
            className="mt-3 max-w-md text-[15px] leading-relaxed"
            style={{ color: C.MUTED }}
          >
            {contactContent.successMessage}
          </p>
          <button
            type="button"
            onClick={() => setStatus("idle")}
            className="mt-8 border-b border-white pb-0.5 text-sm font-medium transition-opacity hover:opacity-60"
          >
            {contactContent.sendAnother}
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2">
            <Field id="name" label={contactContent.fields.name.label}>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                value={form.name}
                onChange={handleChange}
                placeholder={contactContent.fields.name.placeholder}
                className={inputClass}
              />
            </Field>
            <Field id="business" label={contactContent.fields.business.label}>
              <input
                id="business"
                name="business"
                type="text"
                autoComplete="organization"
                required
                value={form.business}
                onChange={handleChange}
                placeholder={contactContent.fields.business.placeholder}
                className={inputClass}
              />
            </Field>
          </div>

          <Field id="email" label={contactContent.fields.email.label}>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={form.email}
              onChange={handleChange}
              placeholder={contactContent.fields.email.placeholder}
              className={inputClass}
            />
          </Field>

          <Field id="interest" label={contactContent.fields.interest.label}>
            <select
              id="interest"
              name="interest"
              value={form.interest}
              onChange={handleChange}
              className={inputClass}
            >
              {contactContent.fields.interest.options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </Field>

          <Field id="message" label={contactContent.fields.message.label}>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              value={form.message}
              onChange={handleChange}
              placeholder={contactContent.fields.message.placeholder}
              className={`${inputClass} resize-none`}
            />
          </Field>

          {status === "error" && (
            <p
              role="alert"
              className="border border-[#ff6b6b] px-4 py-3 text-sm leading-relaxed text-[#ff9a9a]"
            >
              {contactContent.sendError}{" "}
              <a
                href="mailto:info@lexentify.com"
                className="font-medium underline"
              >
                {contactContent.contactRows[0].action}
              </a>
              .
            </p>
          )}

          <button
            type="submit"
            disabled={status === "loading"}
            className={`${buttonClass("solid")} w-full cursor-pointer sm:w-auto sm:min-w-64`}
          >
            {status === "loading" ? (
              <>
                {contactContent.sendingAction}
                <LuLoaderCircle className="h-4 w-4 animate-spin" />
              </>
            ) : (
              "              {contactContent.sendAction}"
            )}
          </button>
        </form>
      )}

      <div className="mt-16 md:mt-24">
        <RowList>
          <Row title={contactContent.contactRows[0].title}>
            <p>{contactContent.contactRows[0].description}</p>
            <a
              href="mailto:info@lexentify.com"
              className="inline-block border-b border-white pb-0.5 font-medium text-white"
            >
              info@lexentify.com
            </a>
          </Row>
          <Row title={contactContent.contactRows[1].title}>
            <p>{contactContent.contactRows[1].description}</p>
            <a
              href={contactContent.contactRows[1].href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border-b border-white pb-0.5 font-medium text-white"
            >
              {contactContent.contactRows[1].action}
            </a>
          </Row>
          <Row title={contactContent.contactRows[2].title}>
            <p>{contactContent.contactRows[2].description}</p>
          </Row>
        </RowList>
      </div>
    </Section>
  );
};

export default Contact;
