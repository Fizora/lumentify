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
      <div className=" mx-auto max-w-7xl text-center bg-linear-to-b from-zinc-800 to-zinc-950  text-white rounded-md pb-10 px-10">
        <div
          className="h-24 md:h-32 border-b border-zinc-900"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.12) 1px, transparent 1px)",
            backgroundSize: "16px 16px",
            maskImage: "linear-gradient(to bottom, black, transparent)",
            WebkitMaskImage: "linear-gradient(to bottom, black, transparent)",
          }}
        />
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
            href={"mailto:lumentify@gmail.com"}
            className="px-8 py-2 font-semibold transform active:scale-90 transition duration-300 bg-white text-black"
          >
            Start Project
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
