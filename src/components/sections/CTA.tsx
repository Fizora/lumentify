"use client";
import { motion } from "motion/react";
import { PrimaryButtonLink } from "@/components/ui/Button";

const CTA = () => {
  return (
    <section className="py-20 px-3">
      <div className="mx-auto max-w-7xl text-center text-black bg-yellow-400 border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,0.8)] p-10 transition-all duration-300 hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,0.8)] hover:bg-zinc-800 hover:text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-inherit">
            Ready to grow your business?
          </h1>
          <p className="text-inherit/80 max-w-2xl mx-auto">
            Get a website that actually brings in leads – no fluff, on directed.
          </p>
          <PrimaryButtonLink
            href="/project"
            className="text-base font-semibold inline-block"
          >
            Start Project
          </PrimaryButtonLink>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
