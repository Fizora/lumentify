"use client";

import { useState, useSyncExternalStore } from "react";
import { LuArrowLeft, LuArrowRight } from "react-icons/lu";
import {
  testimonials,
  testimonialsSectionContent,
} from "@/const/landing/Testimonials";
import { C, Section } from "@/components/ui/Swiss";

const QUERY = "(min-width: 768px)";

const subscribe = (cb: () => void) => {
  const mq = window.matchMedia(QUERY);
  mq.addEventListener("change", cb);
  return () => mq.removeEventListener("change", cb);
};

// 3 testimoni per halaman di desktop, 1 di HP
const usePerPage = () =>
  useSyncExternalStore(
    subscribe,
    () => (window.matchMedia(QUERY).matches ? 3 : 1),
    () => 3,
  );

const arrowBtn =
  "flex h-11 w-11 items-center justify-center border transition-colors hover:bg-white hover:text-black";

const Testimonials = () => {
  const perPage = usePerPage();
  const [page, setPage] = useState(0);

  const totalPages = Math.ceil(testimonials.length / perPage);
  const current = Math.min(page, totalPages - 1);
  const items = testimonials.slice(
    current * perPage,
    current * perPage + perPage,
  );

  const next = () => setPage(current === totalPages - 1 ? 0 : current + 1);
  const prev = () => setPage(current === 0 ? totalPages - 1 : current - 1);

  return (
    <Section
      label={testimonialsSectionContent.label}
      title={testimonialsSectionContent.title}
      intro={testimonialsSectionContent.intro}
      wide
    >
      <div aria-live="polite">
        <div
          className="-mx-5 grid grid-cols-1 border-y md:-mx-10 md:grid-cols-3"
          style={{ borderColor: C.RULE }}
        >
          {items.map((t, i) => (
            <figure
              key={`${current}-${i}`}
              className="flex flex-col justify-between gap-10 border-t p-6 first:border-t-0 md:border-l md:border-t-0 md:p-8 md:first:border-l-0 lg:p-10"
              style={{ borderColor: C.RULE }}
            >
              <div>
                <p className="mb-6 text-lg tracking-widest">{t.rating}</p>
                <blockquote className="text-lg font-medium leading-snug tracking-tight md:text-xl">
                  “{t.quote}”
                </blockquote>
              </div>
              <figcaption>
                <p className="text-sm font-semibold">{t.name}</p>
                <p className="mt-0.5 text-sm" style={{ color: C.MUTED }}>
                  {t.role}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      {totalPages > 1 && (
        <div className="mt-8 flex items-center justify-between">
          <p className="text-sm tabular-nums" style={{ color: C.MUTED }}>
            {current + 1} / {totalPages}
          </p>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={prev}
              className={arrowBtn}
              style={{ borderColor: C.RULE_HI }}
              aria-label={testimonialsSectionContent.previousLabel}
            >
              <LuArrowLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={next}
              className={arrowBtn}
              style={{ borderColor: C.RULE_HI }}
              aria-label={testimonialsSectionContent.nextLabel}
            >
              <LuArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}
    </Section>
  );
};

export default Testimonials;
