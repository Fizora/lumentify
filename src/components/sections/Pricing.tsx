"use client";
import { motion } from "motion/react";
import { LuCircleCheck, LuArrowRight } from "react-icons/lu";
import { PrimaryButtonLink, SecondaryButtonLink } from "@/components/ui/Button";
import { buildPlans, mrrPlans } from "@/components/constant/data";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Pricing = () => {
  return (
    <section className="py-24 bg-white" id="pricing">
      <div className="mx-auto max-w-7xl px-3">
        {/* ====== SECTION 1: BUILD YOUR SITE (one-time) ====== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-5 mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight">
            Build Your Site
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto leading-relaxed border-l-4 border-yellow-400 pl-4">
            One payment, no subscriptions. Choose the package that fits your
            business needs.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch mb-24"
        >
          {buildPlans.map((plan, index) => {
            const isFeatured = plan.featured;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className={`
                  relative flex flex-col p-6 md:p-8
                  border-2 border-black
                  ${isFeatured ? "bg-yellow-400 text-black" : "bg-white"}
                  shadow-[6px_6px_0px_0px_rgba(0,0,0,0.8)]
                  hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,0.8)]
                  hover:bg-zinc-800 hover:text-white
                  transition-all duration-300
                  transform active:scale-95
                  ${isFeatured ? "scale-105 md:scale-105 z-10" : ""}
                `}
              >
                {isFeatured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-red-600 text-white text-xs font-bold px-5 py-1 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.8)]">
                    Most Popular
                  </div>
                )}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-inherit">
                    {plan.name}
                  </h3>
                  <p className="text-sm text-inherit/80 mb-5 py-3 h-12 leading-relaxed">
                    {plan.description}
                  </p>
                </div>
                <div className="mb-8">
                  <span className="text-4xl font-bold text-inherit">
                    {plan.price}
                  </span>
                  <span className="text-inherit/70 ml-2 text-sm">
                    {plan.period}
                  </span>
                </div>
                <ul className="space-y-3 mb-10 flex-1">
                  {plan.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <LuCircleCheck
                        className={`w-5 h-5 mt-0.5 shrink-0 text-inherit group-hover:text-white/80`}
                      />
                      <span className="text-sm text-inherit/80 group-hover:text-white/80 leading-relaxed">
                        {feat}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto">
                  {isFeatured ? (
                    <PrimaryButtonLink
                      href={plan.href}
                      className="w-full text-center flex items-center justify-center gap-2 px-8 py-3 text-sm font-semibold"
                    >
                      {plan.cta}
                      <LuArrowRight className="w-4 h-4" />
                    </PrimaryButtonLink>
                  ) : (
                    <SecondaryButtonLink
                      href={plan.href}
                      className="w-full text-center flex items-center justify-center gap-2 px-8 py-3 text-sm font-semibold"
                    >
                      {plan.cta}
                    </SecondaryButtonLink>
                  )}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* ====== SECTION 2: KEEP IT RUNNING (MRR) ====== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-5 mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight">
            Keep It Running
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto leading-relaxed border-l-4 border-blue-600 pl-4">
            Ongoing support, hosting, and updates — pay monthly and never worry
            about your site.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch"
        >
          {mrrPlans.map((plan, index) => {
            const isFeatured = plan.featured;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className={`
                  relative flex flex-col p-6 md:p-8
                  border-2 border-black
                  ${isFeatured ? "bg-blue-600 text-black" : "bg-white"}
                  shadow-[6px_6px_0px_0px_rgba(0,0,0,0.8)]
                  hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,0.8)]
                  hover:bg-zinc-800 hover:text-white
                  transition-all duration-300
                  transform active:scale-95
                  ${isFeatured ? "scale-105 md:scale-105 z-10" : ""}
                `}
              >
                {isFeatured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-400 text-black text-xs font-bold px-5 py-1 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.8)]">
                    Best Value
                  </div>
                )}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-inherit">
                    {plan.name}
                  </h3>
                  <p className="text-sm text-inherit/80 mb-5 py-3 h-12 leading-relaxed">
                    {plan.description}
                  </p>
                </div>
                <div className="mb-8">
                  <span className="text-4xl font-bold text-inherit">
                    {plan.price}
                  </span>
                  <span className="text-inherit/70 ml-2 text-sm">
                    {plan.period}
                  </span>
                  <span className="block text-xs text-inherit/60 mt-1">
                    billed monthly
                  </span>
                </div>
                <ul className="space-y-3 mb-10 flex-1">
                  {plan.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <LuCircleCheck
                        className={`w-5 h-5 mt-0.5 shrink-0 text-inherit group-hover:text-white/80`}
                      />
                      <span className="text-sm text-inherit/80 group-hover:text-white/80 leading-relaxed">
                        {feat}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto">
                  {isFeatured ? (
                    <PrimaryButtonLink
                      href={plan.href}
                      className="w-full text-center flex items-center justify-center gap-2 px-8 py-3 text-sm font-semibold"
                    >
                      {plan.cta}
                      <LuArrowRight className="w-4 h-4" />
                    </PrimaryButtonLink>
                  ) : (
                    <SecondaryButtonLink
                      href={plan.href}
                      className="w-full text-center flex items-center justify-center gap-2 px-8 py-3 text-sm font-semibold"
                    >
                      {plan.cta}
                    </SecondaryButtonLink>
                  )}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Capacity notice */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-10 max-w-2xl mx-auto"
        >
          <p className="text-sm text-gray-600 leading-relaxed border-l-4 border-red-600 pl-4">
            I take on a limited number of projects each month so every client
            gets full attention — not split across a queue.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-4 max-w-2xl mx-auto"
        >
          <p className="text-sm text-gray-600 leading-relaxed border-l-4 border-red-600 pl-4">
            Every build includes a bug‑fix warranty. Ongoing MRR plans can be
            started at any time after your site is live.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
