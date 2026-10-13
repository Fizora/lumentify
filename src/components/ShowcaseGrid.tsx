"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { LuArrowUpRight } from "react-icons/lu";
import type { IconType } from "react-icons";
import {
  showcaseList,
  projectsList,
  type ShowcaseItem,
} from "@/components/constant/data";
import { SecondaryButtonLink } from "@/components/ui/Button";

const PreviewImage = ({ img, icon: Icon }: { img: string; icon: IconType }) => {
  const [failed, setFailed] = useState(false);
  const showFallback = !img || failed;

  if (showFallback) {
    return (
      <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-linear-to-br from-zinc-50 to-zinc-100">
        <div className="flex size-12 items-center justify-center rounded-full border border-zinc-200 bg-white shadow-sm">
          <Icon className="size-5 text-zinc-400" />
        </div>
        <span className="text-sm text-zinc-400">Preview coming soon</span>
      </div>
    );
  }

  return (
    <Image
      src={img}
      alt="preview"
      fill
      sizes="(min-width: 1024px) 50vw, 100vw"
      quality={75}
      onError={() => setFailed(true)}
      className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
    />
  );
};

// Status badge: label + dot color (pulses for live states)
const getStatusBadge = (status: string) => {
  switch (status) {
    case "Live Demo":
      return { label: "Live Demo", dot: "bg-green-500 animate-pulse" };
    case "In Progress":
      return { label: "In Progress", dot: "bg-amber-500" };
    case "Production":
      return { label: "Production", dot: "bg-blue-500" };
    case "Live":
      return { label: "Live", dot: "bg-green-500 animate-pulse" };
    default:
      return { label: status, dot: "bg-zinc-400" };
  }
};

const ShowcaseCard = ({
  item,
  index,
}: {
  item: ShowcaseItem;
  index: number;
}) => {
  const IconComponent = item.icon;
  const badge = getStatusBadge(item.status);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: (index % 2) * 0.1, ease: "easeOut" }}
      className="h-full"
    >
      <Link
        href={item.href}
        className="group flex h-full flex-col rounded-lg border border-zinc-200 bg-white p-3 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-zinc-200"
      >
        {/* Preview */}
        <div className="relative aspect-16/10 w-full overflow-hidden rounded-md bg-zinc-100">
          <PreviewImage img={item.img} icon={IconComponent} />

          {/* Subtle inner ring so the image edge feels crisp */}
          <div className="pointer-events-none absolute inset-0 rounded-md ring-1 ring-inset ring-black/5" />

          {/* Hover gradient + "Visit site" pill */}
          <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <span className="absolute bottom-3 right-3 inline-flex translate-y-2 items-center gap-1 rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-zinc-900 opacity-0 shadow-sm transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            Visit site
            <LuArrowUpRight className="size-3.5" />
          </span>

          {/* Status badge (glass) */}
          <span className="absolute left-3 top-3 z-10 inline-flex items-center gap-1.5 rounded-full bg-white/80 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-zinc-800 ring-1 ring-black/5 backdrop-blur-md">
            <span className={`size-1.5 rounded-full ${badge.dot}`} />
            {badge.label}
          </span>
        </div>

        {/* Body */}
        <div className="flex flex-1 flex-col gap-4 px-2 pb-2 pt-5">
          <div className="space-y-1.5">
            <h2 className="flex items-center gap-1.5 text-xl font-semibold tracking-tight text-zinc-900 wrap-break-word">
              {item.name}
              <LuArrowUpRight className="size-5 shrink-0 text-zinc-400 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-zinc-900" />
            </h2>
            <p className="max-w-sm text-sm leading-relaxed text-zinc-600">
              {item.desc}
            </p>
          </div>

          <div className="mt-auto flex flex-wrap gap-1.5">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-zinc-100 px-2.5 py-1 text-xs font-medium text-zinc-600"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between border-t border-zinc-100 pt-4 text-xs text-zinc-500">
            <span className="font-medium text-zinc-700">{item.type}</span>
            <span>{item.year}</span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default function ShowcaseGrid() {
  const [activeTab, setActiveTab] = useState<"showcase" | "projects">(
    "showcase",
  );
  const currentItems = activeTab === "showcase" ? showcaseList : projectsList;

  return (
    <>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8  pb-4">
        <div className="flex gap-2">
          {/* <button
            onClick={() => setActiveTab("showcase")}
            className={` px-4 py-2 text-sm font-medium rounded-md transition ${
              activeTab === "showcase"
                ? "bg-zinc-900 text-white"
                : "text-zinc-600 hover:bg-zinc-100"
            }`}
          >
            Showcase (Demo)
          </button>
          <button
            onClick={() => setActiveTab("projects")}
            className={`px-4 py-2 text-sm font-medium rounded-md transition ${
              activeTab === "projects"
                ? "bg-zinc-900 text-white"
                : "text-zinc-600 hover:bg-zinc-100"
            }`}
          >
            Projects (Real)
          </button> */}
        </div>
      </div>

      {currentItems.length === 0 ? (
        <div className="text-center py-16 px-4 border border-zinc-200 bg-zinc-50/50">
          <p className="text-gray-500 text-sm">
            No {activeTab} available yet. We believe in transparency — we'll
            publish them as soon as they're ready.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {currentItems.map((item, index) => (
            <ShowcaseCard key={item.name} item={item} index={index} />
          ))}
        </div>
      )}

      <div className="rounded-md mt-20 px-4 py-8 border bg-zinc-900 text-center space-y-6">
        <h2 className="text-4xl md:text-5xl text-white font-bold">
          Ready to Build?
        </h2>
        <p className="text-gray-300 max-w-xl mx-auto">
          Want something built for your business specifically? Let's talk.
        </p>
        <SecondaryButtonLink href="https://wa.me/6285235086814">
          Start Project
        </SecondaryButtonLink>
      </div>
    </>
  );
}
