"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { LuGlobe, LuCircleCheck, LuClock, LuRocket } from "react-icons/lu";
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
      <div className="w-full h-full flex flex-col items-center justify-center gap-3 bg-gray-50">
        <Icon className="w-6 h-6 text-gray-400" />
        <span className="text-sm text-gray-400">Preview coming soon</span>
      </div>
    );
  }

  return (
    <Image
      src={img}
      alt="preview"
      onError={() => setFailed(true)}
      width={600}
      height={400}
      priority
      quality={50}
      className="w-full h-full"
    />
  );
};

// ===== Fungsi untuk menentukan badge status =====
const getStatusBadge = (status: string) => {
  switch (status) {
    case "Live Demo":
      return {
        label: "Live Demo",
        className: "bg-green-100 text-green-700 border-green-200",
        icon: LuCircleCheck,
      };
    case "In Progress":
      return {
        label: "In Progress",
        className: "bg-yellow-100 text-yellow-700 border-yellow-200",
        icon: LuClock,
      };
    case "Production":
      return {
        label: "Production",
        className: "bg-blue-100 text-blue-700 border-blue-200",
        icon: LuRocket,
      };
    case "Live":
      return {
        label: "Live",
        className: "bg-green-500 text-white border-green-200",
        icon: LuRocket,
      };
    default:
      return {
        label: status,
        className: "bg-gray-100 text-gray-600 border-gray-200",
        icon: LuCircleCheck,
      };
  }
};

const ShowcaseCard = ({ item }: { item: ShowcaseItem }) => {
  const IconComponent = item.icon;
  const badge = getStatusBadge(item.status);
  const BadgeIcon = badge.icon;

  return (
    <div className="group p-2 rounded-md bg-white border border-zinc-200 hover:border-zinc-300 overflow-hidden hover:shadow-xl hover:shadow-zinc-200 transition-shadow duration-300">
      {/* Status badge dengan warna & ikon */}
      <span
        className={`inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wide px-3 py-1.5 rounded-full border ${badge.className}`}
      >
        <BadgeIcon className="w-3.5 h-3.5" />
        {badge.label}
      </span>

      <div className="p-2">
        <h3 className="text-center text-sm font-black text-black p-2 border border-zinc-200">
          {item.name}
        </h3>
      </div>
      <div className="bg-white">
        <div className="relative w-full h-100 aspect-16/10 bg-gray-50">
          <PreviewImage img={item.img} icon={IconComponent} />
        </div>
      </div>
      <div className="flex flex-wrap gap-2 pt-4">
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
        className="mt-4 rounded-md p-2 bg-black text-white flex items-center gap-2 justify-center shadow-lg hover:bg-zinc-800 mb-4"
      >
        <LuGlobe className="w-4 h-4" />
        Visit Site
      </Link>
    </div>
  );
};

export default function ShowcaseGrid() {
  const [activeTab, setActiveTab] = useState<"showcase" | "projects">(
    "showcase",
  );
  const currentItems = activeTab === "showcase" ? showcaseList : projectsList;

  return (
    <>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8 border-b border-zinc-200 pb-4">
        <div className="flex gap-2">
          <button
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
          </button>
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {currentItems.map((item) => (
            <ShowcaseCard key={item.name} item={item} />
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
