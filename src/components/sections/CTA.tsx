"use client";
import { motion } from "motion/react";
import Link from "next/link";

const CTA = () => {
  return (
    <section className=" border-b">
      <div
        className="py-20 lg:py-30 mx-auto max-w-300 p-12 md:p-16 relative overflow-hidden border-x"
        style={{
          backgroundColor: "#fafafa",
          backgroundImage: `repeating-linear-gradient(
            -45deg,
            #f0f0f0,
            #f0f0f0 1px,
            #fafafa 1px,
            #fafafa 6px
          )`,
        }}
      >
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="max-w-xl"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium text-neutral-900 tracking-tight leading-tight">
              Ready to grow your business?
            </h1>
            <p className="text-neutral-500 mt-3 text-base">
              Get a website that actually brings in leads – no fluff, on
              directed.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Link
              href={"mailto:info@lexentify.com"}
              className="inline-block px-5 py-2.5 text-sm font-medium transform active:scale-95 transition duration-200 bg-neutral-900 text-white rounded-lg shadow-sm hover:bg-neutral-800"
            >
              Start Project
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
