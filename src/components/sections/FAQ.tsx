"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { LuPlus } from "react-icons/lu";
import { faqs } from "@/components/constant/data";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (i = 0) => {
    setOpenIndex(openIndex === i ? -1 : i);
  };

  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-4xl px-3">
        {/* Section header – Neo-Brutalism style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-5 mb-16"
        >
          <span className="inline-block text-xs font-bold tracking-widest uppercase text-black bg-yellow-400 px-4 py-1.5 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.8)]">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight">
            Questions, answered
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto leading-relaxed border-l-4 border-yellow-400 pl-4">
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
                className={`
                  border-2 border-black 
                  shadow-[6px_6px_0px_0px_rgba(0,0,0,0.8)]
                  overflow-hidden 
                  bg-white
                  transition-all duration-300
                  ${isOpen ? "bg-yellow-400" : "bg-white"}
                `}
              >
                <button
                  onClick={() => toggle(i)}
                  className={`
                    w-full flex items-center justify-between gap-4 text-left px-3 py-5 
                    hover:bg-zinc-800 hover:text-white
                    transition-colors duration-300
                  `}
                  aria-expanded={isOpen}
                >
                  <span className="text-base md:text-lg font-semibold text-inherit">
                    {faq.question}
                  </span>
                  <LuPlus
                    className={`
                      w-5 h-5 shrink-0 
                      transition-transform duration-300
                      ${isOpen ? "rotate-45" : ""}
                      text-inherit
                    `}
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
                      <p className="px-3 pb-5 text-sm md:text-base text-inherit/80 leading-relaxed">
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
  );
};

export default FAQ;
