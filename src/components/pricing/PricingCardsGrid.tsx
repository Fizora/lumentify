"use client";

import { motion } from "motion/react";
import { LuCircleCheck, LuArrowRight } from "react-icons/lu";
import { PrimaryButtonLink, SecondaryButtonLink } from "@/components/ui/Button";

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
  featuredBadgeLabel = "The Best Choice",
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
          className={`rounded-md relative flex flex-col p-6 md:p-8 border ${
            plan.featured
              ? "border-zinc-300 bg-zinc-50/50 shadow-xl shadow-zinc-200 z-10"
              : "border-gray-200 bg-white"
          }`}
        >
          {plan.featured && (
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-zinc-900 text-white text-xs font-semibold px-5 py-1 rounded-full">
              {featuredBadgeLabel}
            </div>
          )}
          <div className="mb-6">
            <h3 className="text-xl font-bold text-black">{plan.name}</h3>
            <p className="text-sm text-gray-600 mb-5 py-3 min-h-12 leading-relaxed">
              {plan.description}
            </p>
          </div>
          <div className="mb-8">
            <span className="text-4xl font-bold text-black">{plan.price}</span>
            <span className="text-gray-500 ml-2 text-sm">{plan.period}</span>
            {showBilledMonthlyNote && (
              <span className="block text-xs text-gray-400 mt-1">
                billed monthly
              </span>
            )}
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
                href={plan.paymentLink}
                target="_blank"
                className="w-full text-center flex items-center justify-center gap-2 px-8 py-3 text-sm font-semibold text-white"
              >
                {plan.cta}
                <LuArrowRight className="w-4 h-4" />
              </PrimaryButtonLink>
            ) : (
              <SecondaryButtonLink
                href={plan.paymentLink}
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
  );
};

export default PricingCardsGrid;
