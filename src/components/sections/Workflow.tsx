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
      <div className="mx-auto max-w-300 py-24 px-4 border-x">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="max-w-xl mb-16"
        >
          <span className="text-sm font-medium text-gray-400 mb-3 block">
            How It Works
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-black leading-tight mb-4">
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
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {workflowSteps.map((item, i) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                variants={itemVariants}
                key={i}
                className="bg-white rounded-md border border-gray-200 p-6 hover:border-gray-300 hover:shadow-xl hover:shadow-zinc-200 transition-all duration-200"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-10 h-10 rounded-lg bg-gray-100 text-gray-700 flex items-center justify-center">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-gray-400 font-mono">
                      Step {item.step}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-black mb-2">
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
