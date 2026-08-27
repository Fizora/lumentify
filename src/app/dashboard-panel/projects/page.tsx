import DashboardLayout from "@/components/DashboardLayout";
import DashboardPageHeader from "@/components/DashboardPageHeader";
import ChangeRequestPanel from "@/components/ChangeRequestPanel";
import { LuCheck, LuClock, LuCircleDashed } from "react-icons/lu";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Project Progress - Control Panel",
};

const steps = [
  { name: "Discovery & Contract", status: "done", date: "1 Aug 2026" },
  { name: "Design (Wireframe & UI)", status: "done", date: "8 Aug 2026" },
  {
    name: "Development",
    status: "current",
    date: "Est. completion 2 Sep 2026",
  },
  { name: "QA & Testing", status: "upcoming", date: "-" },
  { name: "Handover & Go-Live", status: "upcoming", date: "-" },
] as const;

const updates = [
  {
    date: "25 Aug 2026",
    text: "Services and Pricing pages are complete, moving on to the Contact page next.",
  },
  {
    date: "20 Aug 2026",
    text: "Development kicked off — the navigation structure and homepage are ready to preview.",
  },
  {
    date: "8 Aug 2026",
    text: "Final UI design approved, moving into development.",
  },
  {
    date: "1 Aug 2026",
    text: "Contract (SOW & MSA) signed, project officially underway.",
  },
];

const doneCount = steps.filter((s) => s.status === "done").length;
const progressPercent = Math.round(((doneCount + 0.5) / steps.length) * 100);

export default function ProjectDashboard() {
  return (
    <DashboardLayout>
      <DashboardPageHeader
        title="Project Progress"
        description="Track the build progress of your website in real time, from design through to go-live."
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-5">
        <div className="lg:col-span-2 border border-zinc-200 rounded-lg p-6">
          <div className="flex items-center justify-between mb-1">
            <h2 className="font-bold text-zinc-900">
              Coastal Plumbing Co. Website
            </h2>
            <span className="text-sm font-semibold text-zinc-900">
              {progressPercent}%
            </span>
          </div>
          <div className="w-full h-2 bg-zinc-100 rounded-full overflow-hidden mb-6">
            <div
              className="h-full bg-zinc-900 rounded-full transition-all duration-500"
              style={{ width: `${progressPercent}%` }}
            />
          </div>

          <ol className="flex flex-col gap-5">
            {steps.map((step, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <div
                  className={`shrink-0 mt-0.5 w-6 h-6 rounded-full flex items-center justify-center ${
                    step.status === "done"
                      ? "bg-zinc-900 text-white"
                      : step.status === "current"
                        ? "bg-white border-2 border-zinc-900 text-zinc-900"
                        : "bg-zinc-100 text-zinc-400"
                  }`}
                >
                  {step.status === "done" ? (
                    <LuCheck size={14} />
                  ) : step.status === "current" ? (
                    <LuClock size={12} />
                  ) : (
                    <LuCircleDashed size={12} />
                  )}
                </div>
                <div>
                  <p
                    className={`font-medium ${
                      step.status === "upcoming"
                        ? "text-zinc-400"
                        : "text-zinc-900"
                    }`}
                  >
                    {step.name}
                  </p>
                  <p className="text-xs text-zinc-400">{step.date}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="border border-zinc-200 rounded-lg p-6">
          <h2 className="font-bold text-zinc-900 mb-4">Latest Updates</h2>
          <div className="flex flex-col gap-4">
            {updates.map((update, idx) => (
              <div
                key={idx}
                className="text-sm border-l-2 border-zinc-200 pl-3"
              >
                <p className="text-zinc-400 text-xs mb-0.5">{update.date}</p>
                <p className="text-zinc-700">{update.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <ChangeRequestPanel />
    </DashboardLayout>
  );
}
