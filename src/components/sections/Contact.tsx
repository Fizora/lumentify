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
    <section className="bg-white border-b" id="contact">
      <div className="mx-auto border-x max-w-300 px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4 }}
          className="text-center space-y-3 mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-medium text-black tracking-tight">
            Let&apos;s talk about your site.
          </h2>
          <p className="text-sm text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Tell us a bit about your business and what you need. No pressure, no
            aggressive sales script — just honest, professional next steps.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-start">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            className="md:col-span-3 border border-gray-200 p-6 md:p-8 bg-white shadow-xs rounded-md"
          >
            {status === "sent" ? (
              <div className="flex flex-col items-center text-center py-12">
                <LuCircleCheck className="w-12 h-12 text-emerald-600 mb-4" />
                <h3 className="text-xl font-medium text-black mb-2">
                  Message received successfully!
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed max-w-md">
                  Thank you for reaching out. We review every project personally
                  and will reply with clear, actionable steps within 1 business
                  day.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-6 text-sm font-medium text-zinc-900 underline hover:text-zinc-600 transition-colors"
                >
                  Send another message →
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-medium uppercase tracking-wider text-black mb-1.5"
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
                      className="w-full border border-gray-300 px-3.5 py-2.5 text-sm text-black placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-black transition-all rounded-md"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="business"
                      className="block text-xs font-medium uppercase tracking-wider text-black mb-1.5"
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
                      className="w-full border border-gray-300 px-3.5 py-2.5 text-sm text-black placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-black transition-all rounded-md"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-medium uppercase tracking-wider text-black mb-1.5"
                  >
                    Email address *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@business.com"
                    className="w-full border border-gray-300 px-3.5 py-2.5 text-sm text-black placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-black transition-all rounded-md"
                  />
                </div>

                <div>
                  <label
                    htmlFor="interest"
                    className="block text-xs font-medium uppercase tracking-wider text-black mb-1.5"
                  >
                    What are you looking for?
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    value={form.interest}
                    onChange={handleChange}
                    className="w-full border border-gray-300 px-3.5 py-2.5 text-sm text-black focus:outline-none focus:ring-2 focus:ring-black bg-white transition-all rounded-md"
                  >
                    <option value="Essential">
                      Essential — High-converting landing page
                    </option>
                    <option value="Pro">Pro — Multi-page local asset</option>
                    <option value="Custom">
                      Custom — Multi-suburb platform
                    </option>
                    <option value="Not sure">
                      Not sure yet / Need guidance
                    </option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-medium uppercase tracking-wider text-black mb-1.5"
                  >
                    Project details or goals *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your trade business and what you are hoping your new website can achieve."
                    className="w-full border border-gray-300 px-3.5 py-2.5 text-sm text-black placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-black resize-none transition-all rounded-md"
                  />
                </div>

                {status === "error" && (
                  <div className="bg-red-50 border border-red-200 p-4 rounded-md">
                    <p className="text-sm text-red-700">
                      Something went wrong sending your message. Please try
                      again or email us directly at{" "}
                      <a
                        href="mailto:info@lexentify.com"
                        className="font-medium underline hover:no-underline"
                      >
                        info@lexentify.com
                      </a>
                      .
                    </p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full inline-flex items-center justify-center gap-2 bg-zinc-900 hover:bg-zinc-800 disabled:opacity-60 disabled:cursor-not-allowed text-white text-sm font-medium px-6 py-3 transition-colors shadow-xs cursor-pointer rounded-md"
                >
                  {status === "loading" ? (
                    <>
                      <LuLoaderCircle className="w-4 h-4 animate-spin" />
                      Sending message...
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
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.1 }}
            className="md:col-span-2 flex flex-col gap-4"
          >
            <div className="border border-gray-200 p-6 bg-white rounded-md">
              <LuMail className="w-5 h-5 text-zinc-800 mb-3" />
              <h3 className="text-sm font-medium text-black mb-1">
                Direct Email
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-3">
                Prefer writing directly? We check our inbox daily and reply
                within 1 business day.
              </p>
              <a
                href="mailto:info@lexentify.com"
                className="text-sm font-medium text-zinc-900 hover:underline"
              >
                info@lexentify.com
              </a>
            </div>

            <div className="border border-gray-200 p-6 bg-white rounded-md">
              <LuMessageCircle className="w-5 h-5 text-zinc-800 mb-3" />
              <h3 className="text-sm font-medium text-black mb-1">
                Already a client?
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-3">
                For active project updates and rapid communication, message us
                directly via WhatsApp.
              </p>
              <a
                href="https://wa.me/6285235086814"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-zinc-950 inline-flex items-center gap-1 hover:underline"
              >
                Message on WhatsApp →
              </a>
            </div>

            <div className="bg-zinc-50 border border-zinc-200/80 p-6 rounded-md">
              <p className="text-sm text-gray-700 leading-relaxed">
                <span className="font-medium text-black">✓</span> Every project
                starts with a clear written proposal and formal agreement before
                any financial commitment — absolute transparency guaranteed.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
