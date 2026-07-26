"use client";
import { motion } from "motion/react";

// Swap these testimonials with your real client feedback
const testimonials = [
  {
    quote:
      "My phone started ringing the first week the new site went live. Best investment I’ve made.",
    name: "John D.",
    role: "Owner, Dependable HVAC",
  },
  {
    quote:
      "Finally a website that doesn’t look like it’s from 2005. The guys at Lumentify really understand our trade.",
    name: "Maria S.",
    role: "Electrician, Bright Sparks Co.",
  },
  {
    quote:
      "Simple, clean, and it converts. I’ve already booked three new clients this month.",
    name: "Carlos R.",
    role: "Plumber, Flow Right Services",
  },
];

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
            Here’s what they say about working with us.
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
              className="bg-gray-50 rounded-2xl p-8 shadow-sm flex flex-col justify-between"
            >
              <blockquote className="text-gray-700 mb-6 leading-relaxed">
                “{t.quote}”
              </blockquote>
              <div>
                <p className="font-semibold text-black">{t.name}</p>
                <p className="text-sm text-gray-500">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
