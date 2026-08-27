import { Metadata } from "next";
import {
  LuSignature,
  LuPenTool,
  LuCode,
  LuCircleCheck,
  LuRocket,
} from "react-icons/lu";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Lumentify | Work Flow",
};

const stages = [
  {
    icon: LuSignature,
    title: "Discovery & Contract",
    body: "You approve a written proposal and price. We sign a short agreement (MSA + SOW) covering scope, timeline, and cost — nothing starts before that.",
  },
  {
    icon: LuPenTool,
    title: "Design",
    body: "We share the homepage direction before development continues. If it's not right, you get your deposit back — no dispute needed.",
  },
  {
    icon: LuCode,
    title: "Development",
    body: "The full site is built against the agreed scope. A 50% deposit starts this phase; the remaining 50% is due at handover.",
  },
  {
    icon: LuCircleCheck,
    title: "QA & Review",
    body: "We test across devices and browsers, then walk you through the finished site before it goes live.",
  },
  {
    icon: LuRocket,
    title: "Launch & Warranty",
    body: "Domain connected, site goes live, and your plan's bug-fix warranty window begins (14–60 days depending on plan).",
  },
];

export default function WorkFlow() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen px-4">
        <section className="pt-32 pb-16 mx-auto max-w-3xl text-center">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-zinc-600 bg-zinc-100 px-4 py-1.5 rounded-full mb-5">
            Work Flow
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight mb-4">
            Exactly how a project moves from signed to live.
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            No surprises at any stage — here's the full process, start to
            finish.
          </p>
        </section>

        <section className="mx-auto max-w-3xl pb-24">
          <div className="border border-gray-200 divide-y divide-gray-100">
            {stages.map(({ icon: Icon, title, body }, idx) => (
              <div key={title} className="p-8 flex gap-5">
                <div className="shrink-0 flex flex-col items-center">
                  <span className="w-9 h-9 rounded-full bg-zinc-100 text-zinc-600 flex items-center justify-center">
                    <Icon className="w-4 h-4" />
                  </span>
                  {idx < stages.length - 1 && (
                    <span className="w-px flex-1 bg-gray-200 mt-2" />
                  )}
                </div>
                <div>
                  <p className="text-xs text-gray-400 mb-1">Stage {idx + 1}</p>
                  <h3 className="text-base font-bold text-black mb-2">
                    {title}
                  </h3>
                  <p className="text-base text-gray-600 leading-relaxed">
                    {body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
