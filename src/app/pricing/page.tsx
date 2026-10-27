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
import Pricing from "@/components/sections/Pricing";
import Skathes from "@/components/Skathes";
import CTA from "@/components/sections/CTA";

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
            <th className="text-left py-3 px-4 font-medium text-zinc-600 bg-zinc-50/50">
              {title}
            </th>
            {plans.map((plan, i) => (
              <th
                key={i}
                className={`text-center py-3 px-4 font-medium ${
                  plan.featured ? "bg-zinc-100" : "bg-zinc-50/50"
                }`}
              >
                <div className="font-medium text-black">{plan.name}</div>
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
      <main className="bg-white">
        <Pricing showOneTime={true}></Pricing>
        <Skathes />
        <CTA />
        <Skathes />
      </main>
      <Footer />
    </>
  );
}
