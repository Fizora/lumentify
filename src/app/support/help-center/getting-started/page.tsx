import { Metadata } from "next";
import Link from "next/link";
import {
  LuRocket,
  LuArrowRight,
  LuCircleCheck,
  LuFileText,
} from "react-icons/lu";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Lexentify | Getting Started",
};

const articles = [
  {
    title: "What happens right after you sign up?",
    desc: "A step-by-step breakdown of our onboarding process, initial project scoping, and how we set up your dedicated communication channels.",
  },
  {
    title: "How do I request a change to my live website?",
    desc: "Learn how to submit content updates, styling adjustments, or new feature additions via our asynchronous workflow and dashboard channels.",
  },
  {
    title: "Where can I track my project's building progress?",
    desc: "Access your secure client dashboard to view live sandbox builds, review milestone updates, and track timeline deliveries.",
  },
  {
    title: "How do we handle remote project delivery across time zones?",
    desc: "Discover how we leverage structured Loom video updates, WhatsApp, and shared dashboards to eliminate unnecessary meetings and ensure maximum transparency.",
  },
];

export default function GettingStartedPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">
        {/* Header */}
        <section className="pt-32 pb-16 mx-auto max-w-300 px-4 border-x">
          <div className="max-w-2xl mx-auto text-center">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-widest uppercase text-zinc-600 bg-zinc-100 px-4 py-1.5 rounded-full mb-5">
              <LuRocket className="w-3.5 h-3.5" /> Getting Started
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-black tracking-tight mb-4">
              Onboarding & Initial Workflow
            </h1>
            <p className="text-sm text-gray-600 leading-relaxed">
              Everything you need to know about starting your project with
              Lexentify, from initial contract agreements to final launch
              handovers.
            </p>
          </div>
        </section>

        {/* Articles List */}
        <section className="mx-auto max-w-300 px-4 py-12 border-x border-t">
          <div className="max-w-3xl mx-auto space-y-4">
            <h2 className="text-sm font-bold uppercase tracking-wider text-black mb-6">
              Recommended Articles
            </h2>
            {articles.map((item, idx) => (
              <div
                key={idx}
                className="border border-gray-200 p-6 bg-white rounded-md shadow-xs hover:border-zinc-400 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div className="space-y-1.5 flex-1">
                  <h3 className="text-base font-bold text-black flex items-center gap-2">
                    <LuFileText className="w-4 h-4 text-zinc-600 shrink-0" />
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed pl-6">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Support CTA */}
        <section className="mx-auto max-w-300 px-4 py-16 border-x border-t border-b">
          <div className="max-w-3xl mx-auto">
            <div className="bg-zinc-50 border border-zinc-200 p-8 text-center rounded-md">
              <p className="text-sm font-semibold text-black mb-1">
                Ready to kick off your project?
              </p>
              <p className="text-sm text-gray-600 mb-4">
                Explore our build plans or contact us directly to discuss your
                requirements.
              </p>
              <Link
                href="/pricing"
                className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-900 hover:underline"
              >
                View Build Plans
                <LuArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
