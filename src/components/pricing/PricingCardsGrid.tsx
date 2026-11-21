"use client";

import { motion } from "motion/react";
import { LuCircleCheck, LuArrowRight } from "react-icons/lu";
import { PrimaryButtonLink, SecondaryButtonLink } from "@/components/ui/Button";
import { pricingCardContent } from "@/const/landing/Pricing";

type Plan = {
  name: string;
  description: string;
  price: string;
  period: string;
  features: string[];
  cta: string;
  href: string;
  paymentLink: string;
  featured?: boolean;
};

type PricingCardsGridProps = {
  plans: Plan[];
  featuredBadgeLabel?: string;
  showBilledMonthlyNote?: boolean;
};

const PricingCardsGrid = ({
  plans,
  featuredBadgeLabel = pricingCardContent.featuredBadge,
  showBilledMonthlyNote = false,
}: PricingCardsGridProps) => {
  return (
    <motion.div
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.1 } },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 items-stretch"
    >
      {plans.map((plan, index) => (
        <motion.div
          key={index}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          className={`relative flex flex-col p-6 md:p-8 border ${
            plan.featured
              ? "z-10 border-[#B5AE9B] bg-[#D8D1C2] shadow-xl shadow-black"
              : "border-[#2A2A2A] bg-black"
          }`}
        >
          {plan.featured && (
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#24231F] text-[#F3F0E8] text-xs font-medium px-5 py-1 rounded-full">
              {featuredBadgeLabel}
            </div>
          )}
          <div className="mb-6">
            <h3 className={`text-xl font-medium ${plan.featured ? "text-black" : "text-white"}`}>{plan.name}</h3>
            <p className={`mb-5 min-h-12 py-3 text-sm leading-relaxed ${plan.featured ? "text-[#5C594F]" : "text-zinc-400"}`}>
              {plan.description}
            </p>
          </div>
          <div className="mb-8">
            <span className={`text-4xl font-medium ${plan.featured ? "text-black" : "text-white"}`}>
              {plan.price}
            </span>
            <span className={`ml-2 text-sm ${plan.featured ? "text-[#5C594F]" : "text-gray-500"}`}>{plan.period}</span>
            {showBilledMonthlyNote && (
              <span className="mt-1 block text-xs text-zinc-500">
                {pricingCardContent.billedMonthly}
              </span>
            )}
          </div>
          <ul className="space-y-3 mb-10 flex-1">
            {plan.features.map((feat, i) => (
              <li key={i} className="flex items-start gap-3">
                <LuCircleCheck
                  className={`w-5 h-5 mt-0.5 shrink-0 ${
                    plan.featured ? "text-zinc-300" : "text-zinc-500"
                  }`}
                />
                <span className={`text-sm leading-relaxed ${plan.featured ? "text-[#35332E]" : "text-zinc-300"}`}>
                  {feat}
                </span>
              </li>
            ))}
          </ul>
          <div className="mt-auto">
            {plan.featured ? (
              <PrimaryButtonLink
                href={plan.paymentLink}
                target="_blank"
                className="w-full text-center flex items-center justify-center gap-2 px-8 py-3 text-sm font-medium text-white"
              >
                {plan.cta}
                <LuArrowRight className="w-4 h-4" />
              </PrimaryButtonLink>
            ) : (
              <SecondaryButtonLink
                href={plan.paymentLink}
                target="_blank"
                className="flex w-full items-center justify-center gap-2 border border-[#555555] bg-transparent px-8 py-3 text-center text-sm font-medium text-white transition-colors hover:bg-white/5"
              >
                {plan.cta}
              </SecondaryButtonLink>
            )}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default PricingCardsGrid;
