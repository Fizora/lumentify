"use client";

import { useState } from "react";
import { motion } from "motion/react";
import {
  LuCircleCheck,
  LuArrowRight,
  LuPackage,
  LuUserPlus,
  LuPenTool,
  LuCreditCard,
  LuRocket,
  LuLayoutDashboard,
  LuTable,
  LuLayoutGrid,
  LuClock,
} from "react-icons/lu";
import { PrimaryButtonLink, SecondaryButtonLink } from "@/components/ui/Button";
import { buildPlans, mrrPlans } from "@/components/constant/data";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const getAllFeatures = (plans: typeof buildPlans) => {
  const all = new Set<string>();
  plans.forEach((p) => p.features.forEach((f) => all.add(f)));
  return Array.from(all);
};

const ComparisonTable = ({
  plans,
  title,
}: {
  plans: typeof buildPlans;
  title: string;
}) => {
  const allFeatures = getAllFeatures(plans);

  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-175 border-collapse text-sm">
        <thead>
          <tr className="border-b border-zinc-200">
            <th className="text-left py-3 px-4 font-semibold text-zinc-600 bg-zinc-50/50">
              {title}
            </th>
            {plans.map((plan, i) => (
              <th
                key={i}
                className={`text-center py-3 px-4 font-semibold ${
                  plan.featured ? "bg-zinc-100" : "bg-zinc-50/50"
                }`}
              >
                <div className="font-bold text-black">{plan.name}</div>
                <div className="text-sm font-normal text-zinc-500">
                  {plan.price}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {allFeatures.map((feature, idx) => (
            <tr key={idx} className="border-b border-zinc-100">
              <td className="py-3 px-4 text-zinc-700">{feature}</td>
              {plans.map((plan, j) => (
                <td
                  key={j}
                  className={`text-center py-3 px-4 ${
                    plan.featured ? "bg-zinc-50/30" : ""
                  }`}
                >
                  {plan.features.includes(feature) ? (
                    <LuCircleCheck className="w-5 h-5 text-green-600 mx-auto" />
                  ) : (
                    <span className="text-zinc-300">—</span>
                  )}
                </td>
              ))}
            </tr>
          ))}
          <tr>
            <td className="py-4 px-4"></td>
            {plans.map((plan, i) => (
              <td key={i} className="text-center py-4 px-4">
                {plan.featured ? (
                  <PrimaryButtonLink
                    href={plan.href}
                    target="_blank"
                    className="text-xs px-4 py-2"
                  >
                    {plan.cta}
                  </PrimaryButtonLink>
                ) : (
                  <SecondaryButtonLink
                    href={plan.href}
                    target="_blank"
                    className="text-xs px-4 py-2"
                  >
                    {plan.cta}
                  </SecondaryButtonLink>
                )}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default function PricingPage() {
  const [viewMode, setViewMode] = useState<"cards" | "table">("cards");

  return (
    <>
      <Navbar />
      <main className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-3">
          {/* Toggle view */}
          <div className="flex justify-end mb-8">
            <div className="inline-flex" role="group">
              <button
                onClick={() => setViewMode("cards")}
                className={`px-4 py-2 text-sm font-medium  border ${
                  viewMode === "cards"
                    ? "bg-zinc-900 text-white border-zinc-900"
                    : "bg-white text-zinc-700 border-zinc-300 hover:bg-zinc-50"
                }`}
              >
                <LuLayoutGrid className="inline mr-1" /> Cards
              </button>
              <button
                onClick={() => setViewMode("table")}
                className={`px-4 py-2 text-sm font-medium border-t border-b border-r ${
                  viewMode === "table"
                    ? "bg-zinc-900 text-white border-zinc-900"
                    : "bg-white text-zinc-700 border-zinc-300 hover:bg-zinc-50"
                }`}
              >
                <LuTable className="inline mr-1" /> Table
              </button>
            </div>
          </div>

          {/* SECTION 1: BUILD YOUR SITE */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="text-center space-y-5 mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight">
              Pricing
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              One payment, no subscriptions. Choose the package that fits your
              business needs.
            </p>
          </motion.div>

          {viewMode === "cards" ? (
            <motion.div
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.1 } },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch mb-6"
            >
              {buildPlans.map((plan, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  className={`rounded-md relative flex flex-col p-6 md:p-8 border ${
                    plan.featured
                      ? "border-zinc-300 bg-zinc-50/50 shadow-xl shadow-zinc-200 z-10"
                      : "border-gray-200 bg-white"
                  }`}
                >
                  {plan.featured && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-zinc-900 text-white text-xs font-semibold px-5 py-1 rounded-full">
                      The Best Choice
                    </div>
                  )}
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-black">
                      {plan.name}
                    </h3>
                    <p className="text-sm text-gray-600 mb-5 py-3 h-12 leading-relaxed">
                      {plan.description}
                    </p>
                  </div>
                  <div className="mb-8">
                    <span className="text-4xl font-bold text-black">
                      {plan.price}
                    </span>
                    <span className="text-gray-500 ml-2 text-sm">
                      {plan.period}
                    </span>
                  </div>
                  <ul className="space-y-3 mb-10 flex-1">
                    {plan.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <LuCircleCheck
                          className={`w-5 h-5 mt-0.5 shrink-0 ${
                            plan.featured ? "text-green-600" : "text-gray-600"
                          }`}
                        />
                        <span className="text-sm text-gray-700 leading-relaxed">
                          {feat}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto">
                    {plan.featured ? (
                      <PrimaryButtonLink
                        href={plan.href}
                        target="_blank"
                        className="w-full text-center flex items-center justify-center gap-2 px-8 py-3 text-sm font-semibold text-white"
                      >
                        {plan.cta}
                        <LuArrowRight className="w-4 h-4" />
                      </PrimaryButtonLink>
                    ) : (
                      <SecondaryButtonLink
                        href={plan.href}
                        target="_blank"
                        className="w-full text-center flex items-center justify-center gap-2 bg-gray-50 hover:bg-gray-100 border-gray-200 text-black transition-colors px-8 py-3 text-sm font-semibold"
                      >
                        {plan.cta}
                      </SecondaryButtonLink>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <div className="mb-12">
              <ComparisonTable plans={buildPlans} title="Features" />
            </div>
          )}

          {/* SECTION 2: KEEP IT RUNNING */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="text-center space-y-5 pt-20 mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight">
              Keep It Running
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Ongoing support, hosting, and updates — pay monthly and never
              worry about your site.
            </p>
          </motion.div>

          {viewMode === "cards" ? (
            <motion.div
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.1 } },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch"
            >
              {mrrPlans.map((plan, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  className={`rounded-md relative flex flex-col p-6 md:p-8 border ${
                    plan.featured
                      ? "border-zinc-300 bg-zinc-50/50 shadow-xl shadow-zinc-200 z-10"
                      : "border-gray-200 bg-white"
                  }`}
                >
                  {plan.featured && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-zinc-900 text-white text-xs font-semibold px-5 py-1 rounded-full">
                      Best Value
                    </div>
                  )}
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-black">
                      {plan.name}
                    </h3>
                    <p className="text-sm text-gray-600 mb-5 py-3 h-12 leading-relaxed">
                      {plan.description}
                    </p>
                  </div>
                  <div className="mb-8">
                    <span className="text-4xl font-bold text-black">
                      {plan.price}
                    </span>
                    <span className="text-gray-500 ml-2 text-sm">
                      {plan.period}
                    </span>
                    <span className="block text-xs text-gray-400 mt-1">
                      billed monthly
                    </span>
                  </div>
                  <ul className="space-y-3 mb-10 flex-1">
                    {plan.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <LuCircleCheck
                          className={`w-5 h-5 mt-0.5 shrink-0 ${
                            plan.featured ? "text-green-600" : "text-gray-600"
                          }`}
                        />
                        <span className="text-sm text-gray-700 leading-relaxed">
                          {feat}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto">
                    {plan.featured ? (
                      <PrimaryButtonLink
                        href={plan.href}
                        className="w-full text-center flex items-center justify-center gap-2 px-8 py-3 text-sm font-semibold text-white"
                      >
                        {plan.cta}
                        <LuArrowRight className="w-4 h-4" />
                      </PrimaryButtonLink>
                    ) : (
                      <SecondaryButtonLink
                        href={plan.href}
                        className="w-full text-center flex items-center justify-center gap-2 bg-gray-50 hover:bg-gray-100 border-gray-200 text-black transition-colors px-8 py-3 text-sm font-semibold"
                      >
                        {plan.cta}
                      </SecondaryButtonLink>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <div className="mb-12">
              <ComparisonTable plans={mrrPlans} title="Features" />
            </div>
          )}

          {/* Capacity notice */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-20 max-w-2xl mx-auto bg-linear-to-br from-zinc-200 via-white to-zinc-200 p-6 border border-zinc-200 shadow-lg shadow-zinc-100"
          >
            <p className="text-sm text-gray-500 leading-relaxed">
              We take on a{" "}
              <span className="font-black text-black">
                limited number of projects
              </span>{" "}
              each month so{" "}
              <span className="font-black text-black">
                every client gets full attention
              </span>{" "}
              — not split across a queue.
            </p>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}
