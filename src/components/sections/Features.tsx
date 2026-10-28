"use client";
import { motion, type Variants } from "motion/react";
import {
  businessFeatures,
  technicalFeatures,
  type FeatureItem,
} from "@/components/constant/data";

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

interface FeatureCategoryProps {
  label: string;
  items: FeatureItem[];
}

const FeatureCategory = ({ label, items }: FeatureCategoryProps) => (
  <div>
    <h3 className="text-xs font-medium uppercase tracking-wide text-black mb-6 px-4">
      {label}
    </h3>
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className="grid grid-cols-1 md:grid-cols-2 gap-0 border-y border-zinc-200 items-stretch"
    >
      {items.map((feat, i) => {
        const IconComponent = feat.icon;
        return (
          <motion.div
            key={i}
            variants={itemVariants}
            className={`relative flex flex-col p-6 lg:p-8 bg-white transition-colors duration-200 hover:bg-zinc-50/50 
              border-b border-zinc-200 last:border-b-0
              ${i % 2 === 0 ? "md:border-r border-zinc-200" : ""}
              ${i < items.length - 2 ? "md:border-b" : "md:border-b-0"}`}
          >
            <div className="w-10 h-10 rounded-lg bg-gray-100 text-gray-600 flex items-center justify-center mb-5">
              <IconComponent className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-medium text-black mb-2">
              {feat.title}
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              {feat.description}
            </p>
          </motion.div>
        );
      })}
    </motion.div>
  </div>
);

const Features = () => {
  return (
    <section className="bg-white border-b">
      <div className="mx-auto max-w-300 py-24 border-x border-zinc-200">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="max-w-xl px-4 mb-16"
        >
          <span className="text-sm font-medium text-gray-400 mb-3 block">
            Features
          </span>
          <h2 className="text-3xl md:text-4xl font-medium text-black leading-tight mb-4">
            Built to grow your home-service business
          </h2>
          <p className="text-gray-500 leading-relaxed">
            Everything you need to turn clicks into booked jobs – designed
            specifically for HVAC, plumbing, and electrical pros.
          </p>
        </motion.div>

        <div className="mb-16">
          <FeatureCategory
            label="For your customers' urgent moments"
            items={businessFeatures}
          />
        </div>

        <FeatureCategory label="Under the hood" items={technicalFeatures} />
      </div>
    </section>
  );
};

export default Features;
