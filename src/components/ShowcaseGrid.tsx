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
    img: "",
    icon: LuDroplet,
    status: "Live Demo",
    name: "CleanWell",
    desc: "Emergency plumbing & HVAC site built around one goal: get the call before the competitor does. Sticky click-to-call, licensed & insured trust bar, and suburb-based service pages for local search.",
    tags: ["Cleaning Services", "Scheduling"],
    href: "https://cleanwell.vercel.app",
  },
  {
    img: "",
    icon: LuZap,
    status: "Live Demo",
    name: "PureElectric",
    desc: "Lead-focused site for a residential electrician — quote form above the fold, real review widget, and service pages split by job type instead of one long services block.",
    tags: ["Electrical", "Local SEO"],
    href: "https://pure-electric.vercel.app",
  },
  {
    img: "",
    icon: LuWind,
    status: "Live Demo",
    name: "WellGarden",
    desc: "Seasonal HVAC business site with before/after install gallery and a maintenance-plan signup flow, built to convert both emergency repairs and planned installs.",
    tags: ["HVAC", "Booking Flow"],
    href: "https://wellgarden.vercel.app",
  },
  {
    img: "",
    icon: LuHammer,
    status: "In Progress",
    name: "Sea Plumbing",
    desc: "Higher-ticket roofing site with a project gallery, financing-info section, and a multi-step quote form built for jobs that need more detail before a call.",
    tags: ["Plumber", "Emergency Services"],
    href: "https://seaplumbing.vercel.app",
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

const PreviewImage = ({ img, icon: Icon, name }: any) => {
  const [failed, setFailed] = useState(false);
  const showFallback = !img || failed;

  if (showFallback) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center gap-2 bg-zinc-50/50">
        <Icon className="w-8 h-8 text-zinc-500" />
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
          className={`
            group relative bg-white 
            border-2 border-black 
            shadow-[6px_6px_0px_0px_rgba(0,0,0,0.8)]
            hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,0.8)]
            hover:bg-zinc-800 hover:text-white
            transition-all duration-300
            transform active:scale-95
            overflow-hidden
          `}
        >
          {/* Preview image (or icon fallback) */}
          <div className="relative w-full aspect-video bg-gray-100 overflow-hidden border-b-2 border-black">
            <PreviewImage img={item.img} icon={item.icon} name={item.name} />

            {/* Status badge – styled with Bauhaus colors */}
            <span
              className={`
                absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wide px-3 py-1 
                border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,0.8)]
                ${
                  item.status === "Live Demo"
                    ? "bg-yellow-400 text-black"
                    : "bg-white text-gray-600"
                }
              `}
            >
              {item.status}
            </span>
          </div>

          {/* Content */}
          <div className="p-6">
            <div className="flex items-start justify-between gap-4 mb-2">
              <h3 className="text-lg font-bold text-inherit">{item.name}</h3>
              <a
                href={item.href}
                className={`
                  shrink-0 w-8 h-8 
                  border-2 border-black 
                  shadow-[3px_3px_0px_0px_rgba(0,0,0,0.8)]
                  flex items-center justify-center 
                  bg-white text-black
                  group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,0.8)]
                  transition-all duration-300
                `}
                aria-label={`View ${item.name} demo`}
              >
                <LuArrowUpRight className="w-4 h-4" />
              </a>
            </div>
            <p className="text-sm text-inherit/80 leading-relaxed mb-4">
              {item.desc}
            </p>
            <div className="flex flex-wrap gap-2">
              {item.tags.map((tag, ti) => (
                <span
                  key={ti}
                  className={`
                    text-xs font-medium px-2.5 py-1 
                    border-2 border-black 
                    shadow-[2px_2px_0px_0px_rgba(0,0,0,0.8)]
                    bg-white text-black
                    group-hover:bg-red-600 group-hover:text-white group-hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,0.8)]
                    transition-all duration-300
                  `}
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
