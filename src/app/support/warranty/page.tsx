import { Metadata } from "next";
import Link from "next/link";
import { LuCircleCheck, LuCircleX, LuArrowRight } from "react-icons/lu";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Lumentify | Warranty",
};

const tiers = [
  { plan: "Essential", days: 14 },
  { plan: "Pro", days: 30 },
  { plan: "Custom", days: 60 },
];

const covered = [
  "Broken layouts or elements not rendering correctly",
  "Forms or booking flows that stop submitting",
  "Links, buttons, or navigation not working as built",
  "Performance regressions introduced by our own code",
  "Mobile display issues on standard devices",
];

const notCovered = [
  "New features or pages not in the original scope",
  "Content or copy changes",
  "Issues caused by third-party plugins added after handover",
  "Changes caused by edits made outside our system",
  "Design preference changes (that's a revision, not a bug)",
];

export default function Warranty() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen px-4">
        {/* Hero */}
        <section className="pt-32 pb-16 mx-auto max-w-3xl text-center">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-zinc-600 bg-zinc-100 px-4 py-1.5 rounded-full mb-5">
            Warranty
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight mb-4">
            Every build ships with a bug-fix warranty.
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            If something we built breaks, we fix it — free, no extra invoice.
            Here's exactly what's covered and for how long.
          </p>
        </section>

        {/* Warranty by tier */}
        <section className="mx-auto max-w-4xl pb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tiers.map(({ plan, days }) => (
              <div
                key={plan}
                className="border border-gray-200 p-8 text-center"
              >
                <p className="text-sm text-gray-500 mb-2">{plan} Plan</p>
                <p className="text-4xl font-bold text-black mb-1">{days}</p>
                <p className="text-sm text-gray-500">days of coverage</p>
              </div>
            ))}
          </div>
        </section>

        {/* Covered / not covered */}
        <section className="mx-auto max-w-4xl pb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-gray-200 p-8">
              <h2 className="text-base font-bold text-black mb-4 flex items-center gap-2">
                <LuCircleCheck className="w-5 h-5 text-emerald-600" />
                What's covered
              </h2>
              <ul className="space-y-3">
                {covered.map((item) => (
                  <li
                    key={item}
                    className="text-sm text-gray-600 leading-relaxed flex gap-2"
                  >
                    <span className="text-emerald-600 shrink-0">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="border border-gray-200 p-8">
              <h2 className="text-base font-bold text-black mb-4 flex items-center gap-2">
                <LuCircleX className="w-5 h-5 text-red-500" />
                What's not covered
              </h2>
              <ul className="space-y-3">
                {notCovered.map((item) => (
                  <li
                    key={item}
                    className="text-sm text-gray-600 leading-relaxed flex gap-2"
                  >
                    <span className="text-red-500 shrink-0">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* How to claim */}
        <section className="mx-auto max-w-3xl pb-16">
          <div className="border border-gray-200 p-8">
            <h2 className="text-lg font-bold text-black mb-4">
              How to file a claim
            </h2>
            <ol className="space-y-4">
              {[
                [
                  "1",
                  "Message us on WhatsApp or via your dashboard chat with what's happening.",
                ],
                [
                  "2",
                  "Send a screenshot or short screen recording if you have one — it speeds things up.",
                ],
                [
                  "3",
                  "We confirm the issue and give you a fix timeline, usually within 24 hours.",
                ],
                ["4", "Fix ships, you review it, done — no invoice."],
              ].map(([n, text]) => (
                <li key={n} className="flex gap-4">
                  <span className="shrink-0 w-6 h-6 rounded-full bg-zinc-100 text-zinc-600 text-xs font-semibold flex items-center justify-center">
                    {n}
                  </span>
                  <p className="text-base text-gray-600 leading-relaxed">
                    {text}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-3xl pb-24 text-center">
          <Link
            href="/support"
            className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-700 hover:text-zinc-900"
          >
            Have an issue right now? Contact Support
            <LuArrowRight className="w-4 h-4" />
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
