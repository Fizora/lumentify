"use client";
import { motion } from "motion/react";
import {
  ButtonGrid,
  PrimaryButtonLink,
  SecondaryButtonLink,
} from "@/components/ui/Button";
import Link from "next/link";

const CTA = () => {
  return (
    <section className="py-20 px-3">
      <div className="mx-auto max-w-6xl text-center bg-violet-600 text-white rounded-2xl p-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <h1 className="text-4xl md:text-5xl text-white font-bold">
            Ready to grow your business?
          </h1>
          <p className=" text-gray-300 max-w-2xl mx-auto">
            Get a website that actually brings in leads – no fluff, on directed.
          </p>
          <Link
            href={"/project"}
            className="px-8 py-1.5 rounded-full bg-white text-black"
          >
            Start Project
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
