"use client";
import { motion, type Variants } from "motion/react";
import type { ComponentType, SVGProps } from "react";
import {
  LuFileText,
  LuLayoutTemplate,
  LuCode,
  LuShieldCheck,
} from "react-icons/lu";

type IconComponentType = ComponentType<
  SVGProps<SVGSVGElement> & { className?: string }
>;

type WorkflowStep = {
  step: string;
  icon: IconComponentType;
  title: string;
  description: string;
};

const workflowSteps: WorkflowStep[] = [
  {
    step: "01",
    icon: LuFileText,
    title: "Discovery & Written Agreement",
    description:
      "We discuss your business needs, define exact deliverables, and lock everything into a formal, signed SOW and MSA before any financial commitment.",
  },
  {
    step: "02",
    icon: LuLayoutTemplate,
    title: "Visual Direction & Refundable Milestone",
    description:
      "An initial modest deposit initiates the design phase. You review and approve the homepage layout early—if it doesn't align with your vision, your deposit is fully refunded.",
  },
  {
    step: "03",
    icon: LuCode,
    title: "Precision Development & Handover",
    description:
      "Once the design direction is locked, we build your lightning-fast site. The remaining 50% balance is paid only when the project is fully complete and ready for deployment.",
  },
  {
    step: "04",
    icon: LuShieldCheck,
    title: "Post-Launch Stabilization Support",
    description:
      "Your site goes live backed by our dedicated support window (7 to 30 days depending on your plan), ensuring absolute stability and zero technical stress.",
  },
];

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

const Workflow = () => {
  return (
    <section className="bg-white border-b">
      <div className="mx-auto max-w-300 py-24 border-x border-zinc-200">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="max-w-xl mb-16 px-4"
        >
          <span className="text-sm font-medium text-gray-400 mb-3 block">
            How It Works
          </span>
          <h2 className="text-3xl md:text-4xl font-medium text-black leading-tight mb-4">
            A transparent process built for mutual safety
          </h2>
          <p className="text-gray-500 leading-relaxed">
            Eliminating the guesswork and fear of offshore development with
            clear, structured milestones from day one.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-0 border-y border-zinc-200 items-stretch"
        >
          {workflowSteps.map((item, i) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                variants={itemVariants}
                key={i}
                className={`relative flex flex-col p-6 lg:p-8 bg-white transition-colors duration-200 hover:bg-zinc-50/50 
                  border-b border-zinc-200 last:border-b-0
                  ${i % 2 === 0 ? "md:border-r border-zinc-200" : ""}
                  ${i < workflowSteps.length - 2 ? "md:border-b" : "md:border-b-0"}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-10 h-10 rounded-lg bg-gray-100 text-gray-700 flex items-center justify-center">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-medium uppercase tracking-wider text-gray-400 font-mono">
                      Step {item.step}
                    </span>
                  </div>
                  <h3 className="text-lg font-medium text-black mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Workflow;
