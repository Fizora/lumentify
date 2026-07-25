"use client";
import { motion } from "motion/react";
import {
  LuPhoneCall,
  LuMapPin,
  LuBadgeCheck,
  LuCalendarCheck,
  LuZap,
  LuShield,
  LuPenTool,
  LuLifeBuoy,
} from "react-icons/lu";

const businessFeatures = [
  {
    icon: LuPhoneCall,
    title: "Click-to-call that gets answered",
    description:
      "A sticky call button your customers can reach in one tap — because in an emergency, they'll call whoever answers first.",
  },
  {
    icon: LuMapPin,
    title: "Suburb-level service pages",
    description:
      "Separate pages for each service and area you cover, so you show up when someone nearby searches for exactly what they need right now.",
  },
  {
    icon: LuBadgeCheck,
    title: "Trust shown up front",
    description:
      "Licensing, insurance, and real reviews placed where visitors actually look — not buried in a footer they'll never scroll to.",
  },
  {
    icon: LuCalendarCheck,
    title: "One-tap booking & quotes",
    description:
      "A quote or booking form built for someone in a hurry — few fields, clear next step, no reason to abandon it halfway.",
  },
];

const technicalFeatures = [
  {
    icon: LuZap,
    title: "Built for speed",
    description:
      "Every site is optimized to load fast — because a few seconds of delay is a customer calling your competitor instead.",
  },
  {
    icon: LuShield,
    title: "Secure by default",
    description:
      "SSL and secure hosting come standard, so your site stays safe, reliable, and professional around the clock.",
  },
  {
    icon: LuPenTool,
    title: "Copy that converts",
    description:
      "Every headline and CTA is written around what your customer is actually worried about — not generic filler text.",
  },
  {
    icon: LuLifeBuoy,
    title: "Support after launch",
    description:
      "A bug-fix warranty period is included with every project, so you're not left on your own the moment the site goes live.",
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

const FeatureCard = ({ feat }: any) => {
  const IconComponent = feat.icon;
  return (
    <motion.div
      variants={itemVariants}
      className="group relative bg-white rounded-lg p-6 transition-shadow duration-300 border border-gray-200 hover:border-violet-300"
    >
      {/* Subtle gradient hover overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-violet-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      {/* Icon container */}
      <div className="w-12 h-12 rounded-xl bg-violet-50 text-violet-600 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
        <IconComponent className="w-6 h-6" />
      </div>
      {/* Content */}
      <h3 className="text-xl font-semibold text-black mb-2">{feat.title}</h3>
      <p className="text-gray-600 leading-relaxed text-base">
        {feat.description}
      </p>
    </motion.div>
  );
};

const Features = () => {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-6xl px-3">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className=" space-y-5 mb-16 text-center"
        >
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-violet-600 bg-violet-50 px-4 py-1.5 rounded-full">
            Features
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight">
            Built to grow your
            <span className="block md:inline"> home‑service business</span>
          </h2>
          <p className=" text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Everything you need to turn clicks into booked jobs – designed
            specifically for HVAC, plumbing, and electrical pros.
          </p>
        </motion.div>

        {/* Category 1 — Business / urgency needs */}
        <div className="mb-6">
          <h3 className=" text-sm font-semibold uppercase tracking-wide text-gray-600 mb-6">
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
              <FeatureCard key={i} feat={feat} />
            ))}
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-100 my-16" />

        {/* Category 2 — Technical quality & support */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-600 mb-6">
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
              <FeatureCard key={i} feat={feat} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Features;
