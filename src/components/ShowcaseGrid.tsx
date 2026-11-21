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
  portfolioGridContent,
} from "@/const/landing/Portfolio";
import { PrimaryButtonLink } from "@/components/ui/Button";
import { C } from "@/components/ui/Swiss";

const BG = C.BG;
const INK = C.INK;
const MUTED = C.MUTED;
const BORDER = C.RULE;
const SAGE = "#B3B3B3";
const SAGE_SOFT = "#101010";
const SAGE_BORDER = C.RULE;

const PreviewImage = ({ img, icon: Icon }: { img: string; icon: IconType }) => {
  const [failed, setFailed] = useState(false);
  const showFallback = !img || failed;

  if (showFallback) {
    return (
      <div
        className="flex h-full w-full flex-col items-center justify-center gap-3 border"
        style={{ backgroundColor: SAGE_SOFT, borderColor: SAGE_BORDER }}
      >
        <div
          className="flex size-12 items-center justify-center rounded-full border bg-[#111111]"
          style={{ borderColor: BORDER }}
        >
          <Icon className="size-5" style={{ color: SAGE }} />
        </div>
        <span
          className="text-[11px] font-semibold uppercase tracking-widest"
          style={{ color: SAGE }}
        >
          {portfolioGridContent.previewFallback}
        </span>
      </div>
    );
  }

  return (
    <Image
      src={img}
      alt={portfolioGridContent.previewAlt}
      fill
      sizes="(min-width: 1024px) 33vw, 100vw"
      quality={75}
      onError={() => setFailed(true)}
      className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
    />
  );
};

const getStatusBadge = (status: string) => {
  switch (status) {
    case portfolioGridContent.statuses.demo:
      return { label: portfolioGridContent.statuses.demo, dot: SAGE };
    case portfolioGridContent.statuses.progress:
      return { label: portfolioGridContent.statuses.progress, dot: "#D4A373" };
    case portfolioGridContent.statuses.production:
      return {
        label: portfolioGridContent.statuses.production,
        dot: "#5C7B89",
      };
    case portfolioGridContent.statuses.live:
      return { label: portfolioGridContent.statuses.live, dot: SAGE };
    default:
      return { label: status, dot: "#A8A49C" };
  }
};

const ShowcaseCard = ({
  item,
  index,
  totalItems,
}: {
  item: ShowcaseItem;
  index: number;
  totalItems: number;
}) => {
  const IconComponent = item.icon;
  const badge = getStatusBadge(item.status);

  const columns = 2;
  const isLastInRow = (index + 1) % columns === 0;
  const totalRows = Math.ceil(totalItems / columns);
  const currentRow = Math.floor(index / columns) + 1;
  const isLastRow = currentRow === totalRows;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1, ease: "easeOut" }}
      className="h-full"
    >
      <Link
        href={item.href}
        target="_blank"
        className={`group flex h-full flex-col p-6 transition-colors duration-300 hover:bg-white/5 lg:p-8 ${
          !isLastInRow ? "lg:border-r" : ""
        } ${!isLastRow ? "border-b" : "border-b lg:border-b-0"}`}
        style={{ borderColor: BORDER }}
      >
        {/* Preview */}
        <div
          className="relative aspect-16/10 w-full overflow-hidden rounded-md border mb-6"
          style={{ backgroundColor: "#101010", borderColor: BORDER }}
        >
          <PreviewImage img={item.img} icon={IconComponent} />

          {/* Overlay hover */}
          <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

          <span
            className="absolute bottom-3 right-3 inline-flex translate-y-2 items-center gap-1.5 rounded-md px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider opacity-0 shadow-sm transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
            style={{ backgroundColor: INK, color: BG }}
          >
            {portfolioGridContent.visitAction}
            <LuArrowUpRight className="size-3.5" />
          </span>

          {/* Status Badge */}
          <span
            className="absolute left-3 top-3 z-10 inline-flex items-center gap-1.5 rounded-md border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest backdrop-blur-md"
            style={{
              backgroundColor: "rgba(10, 10, 10, 0.9)",
              color: INK,
              borderColor: BORDER,
            }}
          >
            <span
              className="size-1.5 rounded-full"
              style={{ backgroundColor: badge.dot }}
            />
            {badge.label}
          </span>
        </div>

        {/* Body */}
        <div className="flex flex-1 flex-col">
          <div
            className="space-y-3 mb-6 pb-6 border-b"
            style={{ borderColor: BORDER }}
          >
            <h2
              className="flex items-start justify-between gap-4 text-xl font-semibold tracking-tight uppercase transition-colors"
              style={{ color: INK }}
            >
              <span className="line-clamp-1">{item.name}</span>
              <LuArrowUpRight
                className="size-5 shrink-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                style={{ color: MUTED }}
              />
            </h2>
            <p
              className="max-w-sm text-[15px] leading-relaxed line-clamp-2 min-h-12"
              style={{ color: MUTED }}
            >
              {item.desc}
            </p>
          </div>

          <div className="mt-auto space-y-5">
            <div className="flex flex-wrap gap-2">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md border px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider"
                  style={{
                    backgroundColor: SAGE_SOFT,
                    color: SAGE,
                    borderColor: SAGE_BORDER,
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            <div
              className="flex items-center justify-between border-t pt-4 text-[11px] font-semibold uppercase tracking-widest"
              style={{ borderColor: BORDER, color: MUTED }}
            >
              <span>{item.type}</span>
              <span>{item.year}</span>
            </div>
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
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8 pb-4">
        <div className="flex gap-2">{/* Tab buttons jika diperlukan */}</div>
      </div>

      {currentItems.length === 0 ? (
        <div
          className="text-center py-20 px-6 border rounded-md"
          style={{ backgroundColor: SAGE_SOFT, borderColor: SAGE_BORDER }}
        >
          <p className="text-sm font-medium" style={{ color: SAGE }}>
            {portfolioGridContent.emptyState.replace("{tab}", activeTab)}
          </p>
        </div>
      ) : (
        /* Pembungkus luar dengan border-y agar sisi atas dan bawah terbingkai rapi menyatu */
        <div
          className="grid grid-cols-1 border-y lg:grid-cols-2"
          style={{ borderColor: BORDER }}
        >
          {currentItems.map((item, index) => (
            <ShowcaseCard
              key={item.name}
              item={item}
              index={index}
              totalItems={currentItems.length}
            />
          ))}
        </div>
      )}

      {/* Bottom CTA Block */}
      <div
        className="mt-24 mb-16 px-6 py-16 border text-center space-y-8"
        style={{ backgroundColor: SAGE_SOFT, borderColor: BORDER }}
      >
        <h2
          className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight uppercase"
          style={{ color: INK }}
        >
          {portfolioGridContent.ctaTitle}
        </h2>
        <p
          className="max-w-xl mx-auto text-lg leading-relaxed"
          style={{ color: MUTED }}
        >
          {portfolioGridContent.ctaDescription}
        </p>
        <div className="pt-2">
          <PrimaryButtonLink
            href={portfolioGridContent.ctaHref}
            className="inline-flex items-center px-8 py-3.5 text-sm font-semibold uppercase tracking-wider rounded-md transition-opacity hover:opacity-90"
            style={{ backgroundColor: INK, color: BG }}
          >
            {portfolioGridContent.ctaAction}
          </PrimaryButtonLink>
        </div>
      </div>
    </>
  );
}
