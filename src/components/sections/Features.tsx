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

const FeatureCard = ({ feat }: { feat: FeatureItem }) => {
  const IconComponent = feat.icon;
  return (
    <motion.div
      variants={itemVariants}
      className="bg-white rounded-md border border-gray-200 p-6 hover:border-gray-300 hover:shadow-xl hover:shadow-zinc-200 transition-all duration-200"
    >
      <div className="w-10 h-10 rounded-lg bg-gray-100 text-gray-600 flex items-center justify-center mb-5">
        <IconComponent className="w-5 h-5" />
      </div>
      <h3 className="text-lg font-semibold text-black mb-2">{feat.title}</h3>
      <p className="text-base text-gray-500 leading-relaxed">
        {feat.description}
      </p>
    </motion.div>
  );
};

interface FeatureCategoryProps {
  label: string;
  items: FeatureItem[];
}

const FeatureCategory = ({ label, items }: FeatureCategoryProps) => (
  <div>
    <h3 className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-6">
      {label}
    </h3>
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className="grid grid-cols-1 md:grid-cols-2 gap-6"
    >
      {items.map((feat, i) => (
        <FeatureCard key={i} feat={feat} />
      ))}
    </motion.div>
  </div>
);

const Features = () => {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="max-w-xl mb-16"
        >
          <span className="text-sm font-medium text-gray-400 mb-3 block">
            Features
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-black leading-tight mb-4">
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
