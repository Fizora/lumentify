"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { LuPlus } from "react-icons/lu";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { faqs } from "@/components/constant/data"; // Impor data terpusat

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <>
      <Navbar />
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-4xl px-3">
          {/* Header */}
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
              Straight answers before you commit — no fine print you&apos;ll
              find out about later.
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
                  className="border border-gray-200 overflow-hidden bg-white"
                >
                  <button
                    onClick={() => toggle(i)}
                    className="w-full flex items-center justify-between gap-4 text-left px-5 py-5 hover:bg-zinc-50/50 transition-colors"
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
                        <p className="px-5 pb-5 text-base text-gray-600 leading-relaxed">
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
