"use client";

import { useState } from "react";
import { motion, type Variants } from "motion/react";
import Image from "next/image";
import { LuArrowUpRight, LuGlobe } from "react-icons/lu";
import type { IconType } from "react-icons";
import { showcaseList, type ShowcaseItem } from "@/components/constant/data";
import { PrimaryButtonLink, SecondaryButtonLink } from "./ui/Button";
import Link from "next/link";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

interface PreviewImageProps {
  img: string;
  icon: IconType;
}

const PreviewImage = ({ img, icon: Icon }: PreviewImageProps) => {
  const [failed, setFailed] = useState(false);
  const showFallback = !img || failed;

  if (showFallback) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center gap-3 bg-gray-50">
        <Icon className="w-6 h-6 text-gray-400" />
        <span className="text-sm text-gray-400">Preview coming soon</span>
      </div>
    );
  }

  return (
    <Image
      src={img}
      alt={`${img} preview`}
      onError={() => setFailed(true)}
      width={600}
      height={400}
      priority
      quality={50}
      className="w-full h-full object-cover"
    />
  );
};

const ShowcaseCard = ({ item }: { item: ShowcaseItem }) => {
  const IconComponent = item.icon;

  return (
    <motion.div
      variants={itemVariants}
      className="group bg-white  border border-zinc-200 hover:border-zinc-300 overflow-hidden hover:shadow-xl hover:shadow-zinc-200 transition-shadow duration-300"
    >
      {/* Preview */}
      <div className="relative w-full aspect-16/10 bg-gray-50">
        <PreviewImage img={item.img} icon={IconComponent} />

        {/* Status badge */}
        <span
          className={`absolute top-4 left-4 text-[11px] font-semibold uppercase tracking-wide px-3 py-1.5 rounded-full ${
            item.status === "Live Demo"
              ? "bg-black text-white"
              : "bg-white text-gray-700 ring-1 ring-gray-200"
          }`}
        >
          {item.status}
        </span>

        {/* Visit button — solid, high-contrast, always visible so it's
            easy to notice rather than a subtle hover-only affordance */}
      </div>

      {/* Body */}
      <div className="p-6">
        <h3 className="text-lg font-semibold text-black mb-2">{item.name}</h3>
        <p className="text-sm text-gray-600 leading-relaxed min-h-20 mb-4">
          {item.desc}
        </p>

        <div className="flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-medium text-gray-600 border border-gray-200 rounded-full px-3 py-1"
            >
              {tag}
            </span>
          ))}
        </div>
        <Link
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visit ${item.name} demo`}
          className="mt-4 p-2 bg-black text-white flex items-center justify-center shadow-lg  hover:bg-zinc-800"
        >
          <LuGlobe className="w-4 h-4" />
          Visit Site
        </Link>
      </div>
    </motion.div>
  );
};

const Showcase = () => {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {showcaseList.map((item) => (
            <ShowcaseCard key={item.name} item={item} />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-16 px-4 py-8 border bg-zinc-900 text-center space-y-6"
        >
          <h1 className="text-4xl md:text-5xl text-white font-bold">
            Ready to Build?
          </h1>
          <p className="text-gray-300 mb-5">
            Want something built for your business specifically?
          </p>
          <SecondaryButtonLink href="https://wa.me/6285235086814">
            Start Project
          </SecondaryButtonLink>
        </motion.div>
      </div>
    </section>
  );
};

export default Showcase;
