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
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-3">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-black">
            Trusted by home‑service owners
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto border-l-4 border-blue-600 pl-4">
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
              className={`
                bg-white p-8 
                border-2 border-black 
                shadow-[6px_6px_0px_0px_rgba(0,0,0,0.8)]
                hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,0.8)]
                hover:bg-zinc-800 hover:text-white
                transition-all duration-300
                transform active:scale-95
                flex flex-col justify-between
              `}
            >
              <blockquote className="text-inherit/80 mb-6 leading-relaxed">
                "{t.quote}"
              </blockquote>
              <div>
                <p className="font-semibold text-inherit">{t.name}</p>
                <p className="text-sm text-inherit/60">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
