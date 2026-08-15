"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { LuPlus } from "react-icons/lu";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const faqs = [
  {
    question: "What happens if something breaks after launch?",
    answer:
      "Every plan includes a bug-fix warranty period so your site doesn't just launch well — it stays reliable after launch too. If something breaks within that window, I fix it at no extra cost. After that, any new feature or change is quoted transparently before work starts, so you always know exactly what you're paying for.",
  },
  {
    question: "Do I own the website once it's built?",
    answer:
      "Yes. Once the final payment is completed, the website design and code are yours. There's no lock-in, no hidden platform dependency, and no ongoing ownership trap — you keep full control of the asset you paid for.",
  },
  {
    question: "How long does a project take?",
    answer:
      "Most Essential sites are completed in 5–7 days from kickoff, while Pro and Custom projects usually take 2–4 weeks depending on scope. The timeline is agreed in writing before work begins, so you know exactly what to expect and can plan around it with confidence.",
  },
  {
    question: "What do you need from me to get started?",
    answer:
      "Usually just your business details, the services and suburbs you cover, a few photos if you have them, and any branding you already use such as a logo or preferred colors. If you don't have everything ready yet, I'll help you shape a clean setup from scratch so the project still moves forward smoothly.",
  },
  {
    question: "Will my site actually show up on Google?",
    answer:
      "Your site is built with local SEO fundamentals from day one: clear structure, service pages, suburb pages, fast loading, and Google Business Profile setup on Pro and above. That gives your business the right technical base to be discovered by people searching for urgent help, even though rankings still take time to build naturally.",
  },
  {
    question: "What if I need changes mid-project?",
    answer:
      "Each plan includes a defined number of revision rounds during development, so the scope stays clear and the project stays on track. If you need changes outside that scope, I'll quote them before doing the work — no surprise invoices, no vague extras.",
  },
  {
    question: "You're not based in Australia — how does that work?",
    answer:
      "I work remotely and build sites for home-service businesses across Australia. Communication happens over WhatsApp and email, with clear written updates at each milestone so you always know where the project stands — you don't need a local office visit for a website project to go smoothly.",
  },
  {
    question: "Is it safe to pay before the site is done?",
    answer:
      "You never pay the full amount upfront. Every project starts with a signed scope of work and a deposit, with the remaining balance due only at delivery. The scope document spells out exactly what's included, so both sides are protected and there's no ambiguity about what you're paying for.",
  },
  {
    question: "What if I'm not happy with the result?",
    answer:
      "Revisions during development are built into every plan specifically so we can align before final delivery — you're not seeing the site for the first time at handover. If something still isn't right within scope, it gets fixed as part of the project, not treated as a separate request.",
  },
  {
    question: "I'm not techy — can I still update the site myself later?",
    answer:
      "Yes. At handover, I walk you through how to update basic content like text, photos, and hours — no coding needed for the day-to-day stuff. For anything bigger, you can always reach out and I'll take care of it.",
  },
  {
    question: "Do I need to pay for hosting or a domain separately?",
    answer:
      "Yes — hosting and domain registration are billed directly to you through the provider, typically a small yearly cost. I'll set both up for you as part of the project and explain exactly what you're paying for, so there are no surprise fees tied to me.",
  },
  {
    question: "Why not just use Wix or a cheap template site?",
    answer:
      "DIY builders are fine for a basic presence, but most aren't built around how home-service customers actually search and decide in an emergency — local pages, load speed, and a clear call-to-action matter more than a drag-and-drop editor. What you're paying for here is a site structured around getting the call, not just a page that exists online.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (i = 0) => {
    setOpenIndex(openIndex === i ? -1 : i);
  };

  return (
    <>
      <Navbar />
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-4xl px-3">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="text-center space-y-5 mb-16"
          >
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-zinc-600 bg-zinc-100 px-4 py-1.5 rounded-full">
              FAQ
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight">
              Questions, answered
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Straight answers before you commit — no fine print you'll find out
              about later.
            </p>
          </motion.div>

          {/* FAQ list */}
          <div className="space-y-3">
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="border border-gray-200 overflow-hidden bg-white"
                >
                  <button
                    onClick={() => toggle(i)}
                    className="w-full flex items-center justify-between gap-4 text-left px-3 py-5 hover:bg-zinc-50/50 transition-colors"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base md:text-lg font-semibold text-black">
                      {faq.question}
                    </span>
                    <LuPlus
                      className={`w-5 h-5 shrink-0 text-zinc-600 transition-transform duration-300 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="px-3 pb-5 text-lg md:text-base text-gray-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default FAQ;
