"use client";
import { useState } from "react";
import { motion } from "motion/react";
import {
  LuArrowUpRight,
  LuDroplet,
  LuZap,
  LuWind,
  LuHammer,
} from "react-icons/lu";

const showcaseList = [
  {
    img: "/showcase/everflow-plumbing.jpg",
    icon: LuDroplet,
    status: "Live Demo",
    name: "Everflow Plumbing",
    desc: "Emergency plumbing & HVAC site built around one goal: get the call before the competitor does. Sticky click-to-call, licensed & insured trust bar, and suburb-based service pages for local search.",
    tags: ["Plumbing", "Emergency Booking"],
    href: "#",
  },
  {
    img: "/showcase/sparkright-electrical.jpg",
    icon: LuZap,
    status: "Live Demo",
    name: "SparkRight Electrical",
    desc: "Lead-focused site for a residential electrician — quote form above the fold, real review widget, and service pages split by job type instead of one long services block.",
    tags: ["Electrical", "Local SEO"],
    href: "#",
  },
  {
    img: "/showcase/coolbreeze-hvac.jpg",
    icon: LuWind,
    status: "Live Demo",
    name: "CoolBreeze HVAC",
    desc: "Seasonal HVAC business site with before/after install gallery and a maintenance-plan signup flow, built to convert both emergency repairs and planned installs.",
    tags: ["HVAC", "Booking Flow"],
    href: "#",
  },
  {
    img: "/showcase/ironclad-roofing.jpg",
    icon: LuHammer,
    status: "In Progress",
    name: "Ironclad Roofing",
    desc: "Higher-ticket roofing site with a project gallery, financing-info section, and a multi-step quote form built for jobs that need more detail before a call.",
    tags: ["Roofing", "Quote Flow"],
    href: "#",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

// Preview image with icon fallback — shows the niche icon if there's no
// image path yet, or if the image fails to load (broken/missing file).
const PreviewImage = ({ img, icon: Icon, name }: any) => {
  const [failed, setFailed] = useState(false);
  const showFallback = !img || failed;

  if (showFallback) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center gap-2 bg-violet-50/50">
        <Icon className="w-8 h-8 text-violet-300" />
        <span className="text-xs text-gray-400">Preview coming soon</span>
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={img}
      alt={`${name} website preview`}
      onError={() => setFailed(true)}
      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
    />
  );
};

const ShowcaseGrid = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className="grid grid-cols-1 md:grid-cols-2 gap-8"
    >
      {showcaseList.map((item, i) => (
        <motion.div
          key={i}
          variants={itemVariants}
          className="group relative bg-white rounded-2xl border border-gray-200 hover:border-violet-300 overflow-hidden transition-colors duration-300"
        >
          {/* Preview image (or icon fallback) */}
          <div className="relative w-full aspect-video bg-gray-100 overflow-hidden">
            <PreviewImage img={item.img} icon={item.icon} name={item.name} />

            {/* Status badge */}
            <span
              className={`absolute top-3 left-3 text-[10px] font-semibold uppercase tracking-wide px-3 py-1 rounded-full ${
                item.status === "Live Demo"
                  ? "bg-violet-600 text-white"
                  : "bg-white text-gray-600 border border-gray-200"
              }`}
            >
              {item.status}
            </span>
          </div>

          {/* Content */}
          <div className="p-6">
            <div className="flex items-start justify-between gap-4 mb-2">
              <h3 className="text-lg font-bold text-black">{item.name}</h3>
              <a
                href={item.href}
                className="shrink-0 w-8 h-8 rounded-full bg-violet-50 text-violet-600 flex items-center justify-center group-hover:bg-violet-600 group-hover:text-white transition-colors"
                aria-label={`View ${item.name} demo`}
              >
                <LuArrowUpRight className="w-4 h-4" />
              </a>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              {item.desc}
            </p>
            <div className="flex flex-wrap gap-2">
              {item.tags.map((tag, ti) => (
                <span
                  key={ti}
                  className="text-xs text-gray-600 bg-gray-50 border border-gray-200 px-2.5 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ShowcaseGrid;
