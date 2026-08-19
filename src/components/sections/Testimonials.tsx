"use client";
import { motion } from "motion/react";
import { testimonials } from "@/components/constant/data";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const Testimonials = () => {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-3">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-3xl md:text-4xl  font-bold text-black">
            Trusted by home‑service owners
          </h2>
          <p className=" text-gray-600 max-w-2xl mx-auto">
            Here's what they say about working with us.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              className="bg-gray-50 p-8 flex flex-col justify-between border border-gray-200"
            >
              <span className="text-2xl font-bold text-yellow-400">
                {t.rating}
              </span>
              <blockquote className="text-gray-700 mb-6 leading-relaxed">
                "{t.quote}"
              </blockquote>
              <div className="mt-auto border-t border-gray-200 pt-4">
                <p className="font-semibold text-black">{t.name}</p>
                <p className="text-lg text-gray-500">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
