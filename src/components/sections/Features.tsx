"use client";
import { motion } from "motion/react";
import {
  businessFeatures,
  technicalFeatures,
  type FeatureItem,
} from "@/components/constant/data";

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

const FeatureCard = ({
  feat,
  variant = "primary",
}: {
  feat: FeatureItem;
  variant?: "primary" | "secondary";
}) => {
  const IconComponent = feat.icon;

  // Tentukan warna latar dan hover berdasarkan varian
  const bgColor = variant === "primary" ? "bg-yellow-400" : "bg-white";
  const hoverBg = "hover:bg-zinc-800";
  const textColor = "text-black";
  const hoverText = "hover:text-white";

  // Warna icon container: merah untuk primary, biru untuk secondary
  const iconBg = variant === "primary" ? "bg-red-600" : "bg-blue-600";
  const iconBorder = "border-2 border-black";
  const iconShadow = "shadow-[3px_3px_0px_0px_rgba(0,0,0,0.8)]";

  return (
    <motion.div
      variants={itemVariants}
      className={`
        group relative 
        ${bgColor} ${hoverBg} 
        ${textColor} ${hoverText}
        p-6 
        border-2 border-black 
        shadow-[6px_6px_0px_0px_rgba(0,0,0,0.8)] 
        hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,0.8)] 
        transition-all duration-300 
        transform active:scale-95
        cursor-default
      `}
    >
      {/* Icon container */}
      <div
        className={`
        w-12 h-12 rounded-xl 
        ${iconBg} 
        ${iconBorder} 
        ${iconShadow}
        text-white 
        flex items-center justify-center 
        mb-5 
        group-hover:scale-110 
        group-hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,0.8)]
        transition-all duration-300
      `}
      >
        <IconComponent className="w-6 h-6" />
      </div>
      {/* Content */}
      <h3 className="text-xl font-semibold text-inherit mb-2">{feat.title}</h3>
      <p className="text-inherit/80 leading-relaxed text-base group-hover:text-white/80 transition-colors duration-300">
        {feat.description}
      </p>
    </motion.div>
  );
};

const Features = () => {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-3">
        {/* Section header — Neo-Brutalism style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="space-y-5 mb-16 text-center"
        >
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-black bg-yellow-400 px-4 py-1.5 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.8)]">
            Features
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight">
            Built to grow your
            <span className="block md:inline"> home‑service business</span>
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto leading-relaxed border-l-4 border-yellow-400 pl-4">
            Everything you need to turn clicks into booked jobs – designed
            specifically for HVAC, plumbing, and electrical pros.
          </p>
        </motion.div>

        {/* Category 1 — Business / urgency needs (Primary variant) */}
        <div className="mb-6">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-black bg-blue-600 inline-block px-3 py-1 border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,0.8)] mb-6">
            For your customers&apos; urgent moments
          </h3>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {businessFeatures.map((feat, i) => (
              <FeatureCard key={i} feat={feat} variant="primary" />
            ))}
          </motion.div>
        </div>

        {/* Divider — gaya neo-brutalism */}
        <div className="border-t-2 border-black my-16 relative">
          <div className="absolute left-1/2 -translate-x-1/2 -top-3 bg-white px-4 text-sm font-bold text-black">
            ✦ ✦ ✦
          </div>
        </div>

        {/* Category 2 — Technical quality & support (Secondary variant) */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-black bg-red-600 inline-block px-3 py-1 border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,0.8)] mb-6">
            Under the hood
          </h3>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {technicalFeatures.map((feat, i) => (
              <FeatureCard key={i} feat={feat} variant="secondary" />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Features;
