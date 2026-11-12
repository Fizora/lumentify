"use client";
import { motion } from "motion/react";
import { LuCheck, LuTag, LuChevronRight } from "react-icons/lu";
import { PrimaryButtonLink, SecondaryButtonLink } from "@/components/ui/Button";
import { buildPlans, mrrPlans } from "@/components/constant/data-pricing";
import Link from "next/link";

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

// ==========================================
// PENGATURAN DISKON (Ubah ke true untuk aktif)
// ==========================================
const ENABLE_DISCOUNT = true;

// Data pembanding harga coret dengan label persentase diskon
const originalPrices: Record<string, { price: string; discountLabel: string }> =
  {
    // Build Plans (One-time)
    Essential: { price: "$1,899", discountLabel: "21% OFF" },
    Pro: { price: "$2,999", discountLabel: "17% OFF" },
    Custom: { price: "from $5,499", discountLabel: "16% OFF" },

    // MRR Plans (Monthly)
    "Core Tech & Care": { price: "$119", discountLabel: "25% OFF" },
    "Local Dominance": { price: "$249", discountLabel: "20% OFF" },
    "Growth Partner": { price: "from $499", discountLabel: "20% OFF" },
  };

const Pricing = ({ showOneTime = true, showMRR = true }: PricingProps) => {
  return (
    <section id="pricing">
      <div className="bg-white border-b ">
        <div className="mx-auto max-w-300 py-32 border-x border-zinc-200">
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

              {/* Grid dengan items-stretch agar tinggi kartu sama rata */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="grid grid-cols-1 lg:grid-cols-3 gap-0 border-y border-zinc-200 mb-16 items-stretch"
              >
                {buildPlans.map((plan, index) => {
                  const promo = originalPrices[plan.name];

                  return (
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

                      {/* Header Paket */}
                      <div className="mb-6 pb-6 border-b border-zinc-100">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-xl font-semibold text-black">
                            {plan.name}
                          </h3>
                          {ENABLE_DISCOUNT && promo && (
                            <span className="inline-flex items-center gap-1 text-[11px] font-bold text-white bg-red-600 border border-red-600 px-2 py-0.5 rounded-md shadow-xs">
                              <LuTag size={11} className="text-white" />{" "}
                              {promo.discountLabel}
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-gray-600 leading-relaxed py-3 min-h-18">
                          {plan.description}
                        </p>

                        <div className="mt-4 flex flex-col">
                          {ENABLE_DISCOUNT && promo && (
                            <span className="text-lg text-gray-400 font-mono line-through">
                              {promo.price}
                            </span>
                          )}
                          <div className="flex items-baseline">
                            <span className="text-3xl lg:text-4xl font-semibold text-black font-mono">
                              {plan.price}
                            </span>
                            <span className="text-gray-500 ml-2 text-sm">
                              {plan.period}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Tombol Aksi */}
                      <div className="mb-8 space-y-2">
                        {plan.featured ? (
                          <PrimaryButtonLink
                            href={plan.href}
                            className="w-full text-center flex items-center justify-center gap-2 px-6 py-2.5 font-medium"
                          >
                            {plan.cta}
                            <LuChevronRight className="w-4 h-4" />
                          </PrimaryButtonLink>
                        ) : (
                          <SecondaryButtonLink
                            href={plan.href}
                            className="w-full text-center flex items-center justify-center gap-2 px-6 py-2.5 font-medium"
                          >
                            {plan.cta}
                          </SecondaryButtonLink>
                        )}
                      </div>

                      {/* Daftar Fitur */}
                      <ul className="space-y-3 mb-6 flex-1">
                        {plan.features.map((feat, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <div className="w-4 h-4 rounded-full bg-zinc-900 text-white flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                              <LuCheck className="w-3 h-3 stroke-3" />
                            </div>
                            <span className="text-sm text-gray-700 leading-relaxed">
                              {feat}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  );
                })}
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
                  Ongoing support, hosting, and updates — lock in the November
                  rate and never worry about your site.
                </p>
              </motion.div>

              {/* Grid MRR dengan items-stretch agar tinggi kartu simetris */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="grid grid-cols-1 lg:grid-cols-3 gap-0 border-y border-zinc-200 items-stretch"
              >
                {mrrPlans.map((plan, index) => {
                  const promo = originalPrices[plan.name];

                  return (
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

                      {/* Header Paket MRR dengan min-h yang disamakan */}
                      <div className="mb-6 pb-6 border-b border-zinc-100">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-xl font-semibold text-black">
                            {plan.name}
                          </h3>
                          {ENABLE_DISCOUNT && promo && (
                            <span className="inline-flex items-center gap-1 text-[11px] font-bold text-white bg-red-600 border border-red-600 px-2 py-0.5 rounded-md shadow-xs">
                              <LuTag size={11} /> {promo.discountLabel}
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-gray-600 py-3 leading-relaxed min-h-18">
                          {plan.description}
                        </p>

                        <div className="mt-4 flex flex-col">
                          {ENABLE_DISCOUNT && promo && (
                            <span className="text-lg text-gray-400 font-mono line-through">
                              {promo.price}
                            </span>
                          )}
                          <div className="flex items-baseline">
                            <span className="text-3xl lg:text-4xl font-semibold text-black font-mono">
                              {plan.price}
                            </span>
                            <span className="text-gray-500 ml-2 text-sm">
                              {plan.period}
                            </span>
                          </div>
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
                            className="w-full text-center flex items-center justify-center gap-2 px-6 py-2.5 text-sm font-medium"
                          >
                            {plan.cta}
                            <LuChevronRight className="w-4 h-4" />
                          </PrimaryButtonLink>
                        ) : (
                          <SecondaryButtonLink
                            href={plan.href}
                            className="w-full text-center flex items-center justify-center gap-2 px-6 py-2.5 text-sm font-medium"
                          >
                            {plan.cta}
                          </SecondaryButtonLink>
                        )}
                      </div>

                      {/* Daftar Fitur MRR (flex-1 agar tombol & list fitur sejajar secara vertikal) */}
                      <ul className="space-y-3 mb-6 flex-1">
                        {plan.features.map((feat, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <div className="w-4 h-4 rounded-full bg-zinc-900 text-white flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                              <LuCheck className="w-3 h-3 stroke-3" />
                            </div>
                            <span className="text-sm text-gray-700 leading-relaxed">
                              {feat}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  );
                })}
              </motion.div>
            </>
          )}

          {/* Capacity & warranty notice */}
          {(showOneTime || showMRR) && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mt-16 mx-3 max-w-2xl bg-zinc-50 lg:mx-auto p-6 border border-zinc-200 rounded-md shadow-2xs px-3 "
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
