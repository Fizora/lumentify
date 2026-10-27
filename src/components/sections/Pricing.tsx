"use client";
import { motion } from "motion/react";
import { LuCircleCheck, LuArrowRight } from "react-icons/lu";
import { PrimaryButtonLink, SecondaryButtonLink } from "@/components/ui/Button";
import { buildPlans, mrrPlans } from "@/components/constant/data";
import Skathes from "../Skathes";
import CTA from "./CTA";

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

interface PricingProps {
  showOneTime?: boolean;
  showMRR?: boolean;
}

const Pricing = ({ showOneTime = true, showMRR = true }: PricingProps) => {
  return (
    <section id="pricing">
      <div className="bg-white border-b ">
        <div className="mx-auto max-w-300 py-24 border-x border-zinc-200">
          {/* SECTION 1: BUILD YOUR SITE */}
          {showOneTime && (
            <>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5 }}
                className="text-center space-y-5 mb-16 px-3 "
              >
                <span className="inline-block text-sm font-medium tracking-widest uppercase text-zinc-600 bg-zinc-100 px-4 py-1.5 rounded-full">
                  Pricing
                </span>
                <h2 className="text-3xl md:text-4xl font-semibold text-black tracking-tight leading-tight">
                  Build Your Site
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed text-sm">
                  One payment, no subscriptions. Choose the package that fits
                  your business needs.
                </p>
              </motion.div>

              {/* Grid dengan gap-0 dan border menyatu */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="grid grid-cols-1 lg:grid-cols-3 gap-0 border-y border-zinc-200 mb-16 items-stretch"
              >
                {buildPlans.map((plan, index) => (
                  <motion.div
                    key={index}
                    variants={cardVariants}
                    className={`relative flex flex-col p-6 lg:p-8 bg-white border-b lg:border-b-0 lg:border-r border-zinc-200 last:border-r-0 ${
                      plan.featured ? "bg-zinc-50/50 z-10" : ""
                    }`}
                  >
                    {plan.featured && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-zinc-900 text-white text-sm font-medium px-4 py-1 rounded-full shadow-xs">
                        The Best Choice
                      </div>
                    )}

                    {/* Header Paket (Judul, Deskripsi, dan Harga diset seragam posisinya) */}
                    <div className="mb-6 pb-6 border-b border-zinc-100 flex flex-col justify-between">
                      <div>
                        <h3 className="text-xl font-semibold text-black mb-2">
                          {plan.name}
                        </h3>
                        {/* Memberikan tinggi minimal atau flex agar tinggi deskripsi menyesuaikan tanpa merusak tata letak */}
                        <p className="text-sm text-gray-600 leading-relaxed py-3 lg:h-24">
                          {plan.description}
                        </p>
                      </div>
                      <div className="mt-4 flex items-baseline py-2">
                        <span className="text-3xl lg:text-4xl font-semibold text-black font-mono">
                          {plan.price}
                        </span>
                        <span className="text-gray-500 ml-2 text-sm">
                          {plan.period}
                        </span>
                      </div>
                    </div>

                    {/* Tombol Aksi */}
                    <div className="mb-8">
                      {plan.featured ? (
                        <PrimaryButtonLink
                          href={plan.href}
                          className="w-full text-center flex items-center justify-center gap-2 px-6 py-2.5 text-sm font-medium text-white shadow-xs"
                        >
                          {plan.cta}
                          <LuArrowRight className="w-4 h-4" />
                        </PrimaryButtonLink>
                      ) : (
                        <SecondaryButtonLink
                          href={plan.href}
                          className="w-full text-center flex items-center justify-center gap-2 bg-white hover:bg-zinc-50 border-zinc-200 text-black transition-colors px-6 py-2.5 text-sm font-medium shadow-2xs"
                        >
                          {plan.cta}
                        </SecondaryButtonLink>
                      )}
                    </div>

                    {/* Daftar Fitur (flex-1 membuat area list menyesuaikan sisa tinggi kartu) */}
                    <ul className="space-y-3 mb-6 flex-1">
                      {plan.features.map((feat, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <LuCircleCheck className="w-4 h-4 mt-0.5 shrink-0 text-zinc-800" />
                          <span className="text-sm text-gray-700 leading-relaxed">
                            {feat}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </motion.div>
            </>
          )}

          {/* SECTION 2: KEEP IT RUNNING (MRR) */}
          {showMRR && (
            <>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5 }}
                className="text-center space-y-5 pt-12 mb-16 px-3"
              >
                <h2 className="text-3xl md:text-4xl font-semibold text-black tracking-tight leading-tight">
                  Keep It Running
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed text-sm">
                  Ongoing support, hosting, and updates — pay monthly and never
                  worry about your site.
                </p>
              </motion.div>

              {/* Grid MRR dengan border menyatu tanpa gap */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="grid grid-cols-1 lg:grid-cols-3 gap-0 border-y border-zinc-200 items-stretch"
              >
                {mrrPlans.map((plan, index) => (
                  <motion.div
                    key={index}
                    variants={cardVariants}
                    className={`relative flex flex-col p-6 lg:p-8 bg-white border-b lg:border-b-0 lg:border-r border-zinc-200 last:border-r-0 ${
                      plan.featured ? "bg-zinc-50/50 z-10" : ""
                    }`}
                  >
                    {plan.featured && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-zinc-900 text-white text-sm font-medium px-4 py-1 rounded-full shadow-xs">
                        Best Value
                      </div>
                    )}

                    {/* Header Paket MRR */}
                    <div className="mb-6 pb-6 border-b border-zinc-100 flex flex-col justify-between">
                      <div>
                        <h3 className="text-xl font-semibold text-black mb-2">
                          {plan.name}
                        </h3>
                        <p className="text-sm text-gray-600 py-3 leading-relaxed lg:h-24">
                          {plan.description}
                        </p>
                      </div>
                      <div className="mt-4 flex items-baseline">
                        <span className="text-3xl lg:text-4xl font-semibold text-black font-mono ">
                          {plan.price}
                        </span>
                        <span className="text-gray-500 ml-2 text-sm">
                          {plan.period}
                        </span>
                      </div>
                      <span className="block text-[11px] text-gray-400 mt-0.5">
                        billed monthly
                      </span>
                    </div>

                    {/* Tombol Aksi MRR */}
                    <div className="mb-8">
                      {plan.featured ? (
                        <PrimaryButtonLink
                          href={plan.href}
                          className="w-full text-center flex items-center justify-center gap-2 px-6 py-2.5 text-sm font-medium text-white shadow-xs"
                        >
                          {plan.cta}
                          <LuArrowRight className="w-4 h-4" />
                        </PrimaryButtonLink>
                      ) : (
                        <SecondaryButtonLink
                          href={plan.href}
                          className="w-full text-center flex items-center justify-center gap-2 bg-white hover:bg-zinc-50 border-zinc-200 text-black transition-colors px-6 py-2.5 text-sm font-medium shadow-2xs"
                        >
                          {plan.cta}
                        </SecondaryButtonLink>
                      )}
                    </div>

                    {/* Daftar Fitur MRR */}
                    <ul className="space-y-3 mb-6 flex-1">
                      {plan.features.map((feat, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <LuCircleCheck className="w-4 h-4 mt-0.5 shrink-0 text-zinc-800" />
                          <span className="text-sm text-gray-700 leading-relaxed">
                            {feat}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </motion.div>
            </>
          )}

          {/* Capacity & warranty notice */}
          {(showOneTime || showMRR) && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mt-16 max-w-2xl mx-auto bg-zinc-50 p-6 border border-zinc-200 rounded-md shadow-2xs px-3 "
            >
              <p className="text-sm text-gray-600 leading-relaxed">
                To ensure sub-second performance and direct founder-level
                communication, we cap our active builds at 4 clients per month.
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
