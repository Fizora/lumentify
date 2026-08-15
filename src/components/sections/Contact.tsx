"use client";
import { useState } from "react";
import { motion } from "motion/react";
import {
  LuMail,
  LuMessageCircle,
  LuSend,
  LuCircleCheck,
  LuLoaderCircle,
} from "react-icons/lu";

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
    <section className="py-24 bg-white" id="contact">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-4 md:space-y-5 mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight">
            Let&apos;s talk about your site.
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed text-lg md:text-base">
            Tell us a bit about your business and what you need. No pressure, no
            sales script — we&apos;ll reply with honest next steps.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-8">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            className="md:col-span-3 border border-gray-200 p-6 md:p-8 lg:p-10"
          >
            {status === "sent" ? (
              <div className="flex flex-col items-center text-center py-12 md:py-16">
                <LuCircleCheck className="w-12 h-12 text-green-600 mb-4" />
                <h3 className="text-xl font-bold text-black mb-2">
                  Message sent!
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed max-w-sm">
                  Thanks for reaching out — we usually reply within 1 business
                  day.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-6 text-lg font-semibold text-zinc-600 hover:text-zinc-800 transition-colors"
                >
                  Send another message →
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-lg font-semibold text-black mb-1.5"
                    >
                      Your name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="John Smith"
                      className="w-full border border-gray-200 px-4 py-2.5 text-lg text-black placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-black/80 transition-shadow"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="business"
                      className="block text-lg font-semibold text-black mb-1.5"
                    >
                      Business name *
                    </label>
                    <input
                      id="business"
                      name="business"
                      type="text"
                      required
                      value={form.business}
                      onChange={handleChange}
                      placeholder="Smith Plumbing Co."
                      className="w-full border border-gray-200 px-4 py-2.5 text-lg text-black placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-black/80 transition-shadow"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-lg font-semibold text-black mb-1.5"
                  >
                    Email *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@business.com"
                    className="w-full border border-gray-200 px-4 py-2.5 text-lg text-black placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-black/80 transition-shadow"
                  />
                </div>

                <div>
                  <label
                    htmlFor="interest"
                    className="block text-lg font-semibold text-black mb-1.5"
                  >
                    What are you looking for?
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    value={form.interest}
                    onChange={handleChange}
                    className="w-full border border-gray-200 px-4 py-2.5 text-lg text-black focus:outline-none focus:ring-2 focus:ring-black/80 bg-white transition-shadow"
                  >
                    <option value="Essential">Essential — simple site</option>
                    <option value="Pro">Pro — win more calls</option>
                    <option value="Custom">Custom — scale past basics</option>
                    <option value="Not sure">Not sure yet</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-lg font-semibold text-black mb-1.5"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your business and what you're hoping your site can do."
                    className="w-full border border-gray-200 px-4 py-2.5 text-lg text-black placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-black/80 resize-none transition-shadow"
                  />
                </div>

                {status === "error" && (
                  <div className="bg-red-50 border border-red-200 p-4">
                    <p className="text-lg text-red-700">
                      Something went wrong sending your message. Please try
                      again or email us directly at{" "}
                      <a
                        href="mailto:lumentify@gmail.com"
                        className="font-semibold underline hover:no-underline"
                      >
                        lumentify@gmail.com
                      </a>
                      .
                    </p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full inline-flex items-center justify-center gap-2 bg-zinc-900 hover:bg-zinc-800 disabled:opacity-60 disabled:cursor-not-allowed text-white text-lg font-semibold px-8 py-3.5 transition-colors"
                >
                  {status === "loading" ? (
                    <>
                      <LuLoaderCircle className="w-4 h-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send message
                      <LuSend className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>

          {/* Side info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.1 }}
            className="md:col-span-2 flex flex-col gap-5 md:gap-6"
          >
            <div className="border border-gray-200 p-6 md:p-8">
              <LuMail className="w-5 h-5 text-zinc-600 mb-4" />
              <h3 className="text-base font-bold text-black mb-2">Email</h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-3">
                Prefer to write directly? We reply within 1 business day.
              </p>
              <a
                href="mailto:lumentify@gmail.com"
                className="text-lg font-semibold text-zinc-700 hover:text-black transition-colors"
              >
                lumentify@gmail.com
              </a>
            </div>

            <div className="border border-gray-200 p-6 md:p-8">
              <LuMessageCircle className="w-5 h-5 text-zinc-600 mb-4" />
              <h3 className="text-base font-bold text-black mb-2">
                Already a client?
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-3">
                For support on an active project, message us on WhatsApp for the
                fastest response.
              </p>
              <a
                href="https://wa.me/6285235086814"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-semibold text-zinc-700 hover:text-black transition-colors"
              >
                Message on WhatsApp →
              </a>
            </div>

            <div className="bg-zinc-50/60 border border-zinc-100 p-6 md:p-8">
              <p className="text-lg text-gray-600 leading-relaxed">
                <span className="font-semibold text-black">✓</span> Every
                project starts with a written proposal and a signed agreement
                before any payment — no surprises, no verbal-only promises.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
