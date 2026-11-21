"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { LuMinus, LuPlus } from "react-icons/lu";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { faqs } from "@/const/landing/FAQ";
import { faqPageContent } from "@/const/page/FAQ";
import { C, Container } from "@/components/ui/Swiss";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <>
      <Navbar />
      <section
        className="flex min-h-screen items-center"
        style={{ backgroundColor: C.BG, color: C.INK, borderColor: C.RULE }}
      >
        <Container className="py-24">
          <div className="mx-auto w-full max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              className="mb-16 space-y-5 text-center"
            >
              <span
                className="inline-block rounded-full border px-4 py-1.5 text-xs font-medium uppercase tracking-widest"
                style={{ borderColor: C.RULE_HI, color: C.MUTED }}
              >
                {faqPageContent.label}
              </span>
              <h2 className="text-3xl font-medium leading-tight md:text-4xl">
                {faqPageContent.title}
              </h2>
              <p
                className="mx-auto max-w-2xl text-lg leading-relaxed"
                style={{ color: C.MUTED }}
              >
                {faqPageContent.intro}
              </p>
            </motion.div>

          {/* List FAQ */}
          <div className="space-y-3">
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <motion.div
                  key={faq.question}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: i * 0.03 }}
                  className="overflow-hidden border"
                  style={{ borderColor: C.RULE, backgroundColor: C.BG }}
                >
                  <button
                    onClick={() => toggle(i)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left transition-colors hover:bg-white/5"
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm font-medium md:text-lg">
                      {faq.question}
                    </span>
                    <span
                      className="grid size-10 shrink-0 place-items-center rounded-full border"
                      style={{ borderColor: C.RULE_HI }}
                    >
                      {isOpen ? (
                        <LuMinus className="h-5 w-5 shrink-0" />
                      ) : (
                        <LuPlus className="h-5 w-5 shrink-0" />
                      )}
                    </span>
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
                        <p className="px-5 pb-5 text-sm leading-relaxed" style={{ color: C.MUTED }}>
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
        </Container>
      </section>
      <Footer />
    </>
  );
};

export default FAQ;
