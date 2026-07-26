"use client";
import { motion } from "motion/react";
import { LuCheck, LuArrowRight, LuCircleCheck } from "react-icons/lu";
import { PrimaryButtonLink, SecondaryButtonLink } from "@/components/ui/Button";

const plans = [
  {
    name: "Essential",
    description: "A fast, simple site that gets you found and called.",
    price: "$799",
    period: "one-time",
    features: [
      "3 pages",
      "Mobile Responsive",
      "Basic SEO",
      "2x revisions",
      "Speed optimization",
      "3 days technical support",
      "Hosting setup 1 year",
      "Delivered in 5-7 days",
    ],
    cta: "Start My Site",
    href: "/project",
    featured: false,
  },
  {
    name: "Pro",
    description: "Built to win urgent jobs before your competitors do",
    price: "$2,599",
    period: "one-time",
    features: [
      "5 pages",
      "Mobile Responsive",
      "Advanced SEO optimization",
      "4x revisions",
      "Speed optimization",
      "Advanced copywriting",
      "Booking Call",
      "Google Business Profile setup",
      "1 Weeks technical support",
      "Hosting setup 1 year",
      "Delivered in 1-2 weeks",
    ],
    cta: "Get More Calls",
    href: "/project",
    featured: true,
  },
  {
    name: "Custom",
    description: "For businesses ready to scale past the basics.",
    price: "from $3,599",
    period: "one-time",
    features: [
      "Everything in Pro",
      "10 pages",
      "10 custom features",
      "1 month technical support",
      "Optional monthly support",
      "Delivered in 3-4 weeks",
    ],
    cta: "Talk to Us",
    href: "https://wa.me/085235086814",
    featured: false,
  },
];

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
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-5 mb-20"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight">
            Pick a Plan, Start Getting Calls
          </h2>
          <p className=" text-gray-600 max-w-2xl mx-auto leading-relaxed">
            One payment, no subscriptions. A site built to bring in leads — not
            just sit online looking pretty.
          </p>
        </motion.div>

        {/* Pricing cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className={`relative flex flex-col rounded-lg p-6 md:p-8 border ${
                plan.featured
                  ? "border-violet-200 bg-violet-50/50 shadow-xl scale-105 md:scale-105 z-10"
                  : "border-gray-200 bg-white shadow-sm"
              } `}
            >
              {/* Most popular badge */}
              {plan.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-violet-600 text-white text-xs font-semibold px-5 py-1 rounded-full">
                  Most Popular
                </div>
              )}

              {/* Plan name & description */}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-black">{plan.name}</h3>
                <p className="text-sm text-gray-600 mb-5 py-3 h-12 leading-relaxed">
                  {plan.description}
                </p>
              </div>

              {/* Price */}
              <div className="mb-8">
                <span className="text-4xl font-bold text-black">
                  {plan.price}
                </span>
                <span className="text-gray-500 ml-2 text-sm">
                  {plan.period}
                </span>
              </div>

              {/* Feature list */}
              <ul className="space-y-3 mb-10 flex-1">
                {plan.features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <LuCircleCheck
                      className={`w-5 h-5 mt-0.5 shrink-0 ${
                        plan.featured ? "text-violet-600" : "text-gray-600"
                      }`}
                    />
                    <span className="text-sm text-gray-700 leading-relaxed">
                      {feat}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA button */}
              <div className="mt-auto">
                {plan.featured ? (
                  <PrimaryButtonLink
                    href={plan.href}
                    className="w-full text-center flex items-center justify-center gap-2 px-8 py-3 text-sm font-semibold text-white rounded-xl"
                  >
                    {plan.cta}
                    <LuArrowRight className="w-4 h-4" />
                  </PrimaryButtonLink>
                ) : (
                  <SecondaryButtonLink
                    href={plan.href}
                    className="w-full text-center flex items-center justify-center gap-2 bg-gray-50 hover:bg-gray-100 border-gray-200 text-black transition-colors px-8 py-3 text-sm font-semibold rounded-xl"
                  >
                    {plan.cta}
                  </SecondaryButtonLink>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Honest scarcity — real capacity limit, not a fake countdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-10 max-w-2xl mx-auto"
        >
          <p className="text-sm text-gray-500 leading-relaxed">
            I take on a limited number of projects each month so every client
            gets full attention — not split across a queue.
          </p>
        </motion.div>

        {/* Warranty note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-4 max-w-2xl mx-auto"
        >
          <p className="text-sm text-gray-600 leading-relaxed">
            Every plan includes a bug-fix warranty at no extra cost. After it
            ends, changes are quoted per case — you only pay for what you
            actually need.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
