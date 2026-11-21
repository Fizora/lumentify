"use client";
import { useState } from "react";
import { LuMinus, LuPlus } from "react-icons/lu";
import { faqs, faqSectionContent } from "@/const/landing/FAQ";
import { C, Section } from "@/components/ui/Swiss";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section
      id="faq"
      label={faqSectionContent.label}
      title={faqSectionContent.title}
      intro={faqSectionContent.intro}
    >
      <div className="border-b" style={{ borderColor: C.RULE }}>
        {faqs.map((faq, i) => {
          const isOpen = openIndex === i;
          return (
            <div key={i} className="border-t" style={{ borderColor: C.RULE }}>
              <h3>
                <button
                  type="button"
                  id={`faq-q-${i}`}
                  aria-expanded={isOpen}
                  aria-controls={`faq-a-${i}`}
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-start justify-between gap-6 py-6 text-left md:py-7"
                >
                  <span className="text-lg font-medium tracking-tight md:text-2xl">
                    {faq.question}
                  </span>
                  <span
                    className="grid size-10 shrink-0 place-items-center rounded-full border transition-colors"
                    style={{ borderColor: C.RULE_HI }}
                  >
                    {isOpen ? (
                      <LuMinus aria-hidden="true" className="h-5 w-5" />
                    ) : (
                      <LuPlus aria-hidden="true" className="h-5 w-5" />
                    )}
                  </span>
                </button>
              </h3>
              <div
                id={`faq-a-${i}`}
                role="region"
                aria-labelledby={`faq-q-${i}`}
                inert={!isOpen}
                className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                  isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <p
                    className="max-w-2xl pb-7 pr-10 text-[15px] leading-relaxed md:text-base"
                    style={{ color: C.MUTED }}
                  >
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
};

export default FAQ;
