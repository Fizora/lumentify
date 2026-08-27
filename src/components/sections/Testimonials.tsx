"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { testimonials } from "@/components/constant/data";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const itemsPerSlide = 3;
  const totalSlides = Math.ceil(testimonials.length / itemsPerSlide);

  const getCurrentItems = () => {
    const start = currentSlide * itemsPerSlide;
    const end = start + itemsPerSlide;
    return testimonials.slice(start, end);
  };

  const currentItems = getCurrentItems();

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-3">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-3 mb-10"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-black">
            Trusted by home‑service owners
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Here's what they say about working with us.
          </p>
        </motion.div>

        {/* Carousel wrapper */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-4"
            >
              {currentItems.map((t, i) => (
                <div
                  key={i}
                  className="bg-gray-50 p-4 flex flex-col justify-between border border-gray-200 hover:shadow-md transition duration-200"
                >
                  <span className="text-lg font-bold text-yellow-400">
                    {t.rating}
                  </span>
                  <blockquote className="text-gray-700 my-2 text-base leading-relaxed line-clamp-3">
                    "{t.quote}"
                  </blockquote>
                  <div className="mt-auto border-t border-gray-200 pt-3">
                    <p className="font-semibold text-black text-base">
                      {t.name}
                    </p>
                    <p className="text-xs text-gray-500">{t.role}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Navigation buttons */}
          {totalSlides > 1 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 md:-translate-x-5 bg-white border border-zinc-200 p-2 shadow-md hover:bg-zinc-50 transition-colors z-10"
                aria-label="Previous slide"
              >
                <LuChevronLeft className="w-4 h-4 text-zinc-700" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 md:translate-x-5 bg-white border border-zinc-200 p-2 shadow-md hover:bg-zinc-50 transition-colors z-10"
                aria-label="Next slide"
              >
                <LuChevronRight className="w-4 h-4 text-zinc-700" />
              </button>

              {/* Dots indicator */}
              <div className="flex justify-center gap-1.5 mt-6">
                {Array.from({ length: totalSlides }).map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => goToSlide(idx)}
                    className={`h-1.5 transition-all duration-200 ${
                      idx === currentSlide
                        ? "w-6 bg-zinc-900"
                        : "w-1.5 bg-zinc-300 hover:bg-zinc-400"
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
