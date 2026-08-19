import { Metadata } from "next";
import Link from "next/link";
import {
  LuMessageCircle,
  LuMail,
  LuCircleHelp,
  LuShieldCheck,
  LuRotateCcw,
  LuFileCheck,
  LuBadgeCheck,
} from "react-icons/lu";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Lumentify | Support",
};

const guarantees = [
  {
    icon: LuFileCheck,
    title: "See it before you pay it off",
    body: "We show you the homepage direction before the build continues. If it's not right, you get your deposit back — no hard feelings, no dispute.",
  },
  {
    icon: LuRotateCcw,
    title: "Included bug-fix warranty",
    body: "Anything breaks within your plan's warranty window (14 days for Essential, 30 days for Pro, 60 days for Custom), we fix it free. No extra invoice, no waiting in line.",
  },
  {
    icon: LuBadgeCheck,
    title: "Fixed price, no surprises",
    body: "The number in your SOW is the number you pay. Scope changes get a written add-on quote before we touch anything — never a surprise line item.",
  },
  {
    icon: LuShieldCheck,
    title: "Everything in writing",
    body: "Every project starts with a signed agreement (MSA + SOW) — what's built, when, and for how much. Not a verbal promise, a document you can point back to.",
  },
];

export default function Support() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen px-4">
        {/* Header */}
        <section className="pt-32 pb-16 mx-auto max-w-3xl text-center">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-zinc-600 bg-zinc-100 px-4 py-1.5 rounded-full mb-5">
            Support
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight mb-4">
            Need a hand? We&apos;ve got you.
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Whether it&apos;s a bug, a question about your project, or something
            before you get started — here&apos;s the fastest way to reach us,
            and exactly what you&apos;re protected by.
          </p>
        </section>

        {/* Guarantees */}
        <section className="mx-auto max-w-4xl pb-16">
          <h2 className="text-xl font-bold text-black mb-1 text-center">
            What you&apos;re covered by
          </h2>
          <p className="text-base text-gray-600 text-center mb-8 max-w-xl mx-auto">
            We&apos;re a small independent team, not a big agency — so instead
            of a name you recognize, here&apos;s exactly what protects you when
            you work with us.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {guarantees.map(({ icon: Icon, title, body }) => (
              <div key={title} className=" border border-gray-200 p-8">
                <Icon className="w-5 h-5 text-zinc-600 mb-4" />
                <h3 className="text-base font-bold text-black mb-2">{title}</h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  {body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Two support paths */}
        <section className="mx-auto max-w-4xl pb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Existing client */}
            <div className=" border border-gray-200 p-8">
              <h2 className="text-lg font-bold text-black mb-2">
                Already a client
              </h2>
              <p className="text-base text-gray-600 leading-relaxed mb-6">
                Something broke, or you need a change to your live site? Message
                us with your business name and what&apos;s happening —
                we&apos;ll take it from there.
              </p>
              <Link
                href="https://wa.me/085235086814"
                className="inline-flex items-center gap-2 text-base font-semibold text-zinc-600 hover:text-zinc-700 transition-colors"
              >
                <LuMessageCircle className="w-4 h-4" />
                Message us on WhatsApp
              </Link>
            </div>

            {/* New / prospective */}
            <div className=" border border-gray-200 p-8">
              <h2 className="text-lg font-bold text-black mb-2">
                Not a client yet
              </h2>
              <p className="text-base text-gray-600 leading-relaxed mb-6">
                Have a question about pricing, timelines, or whether we&apos;re
                a fit for your business? Reach out — no pressure, no sales
                script.
              </p>
              <Link
                href="https://wa.me/085235086814"
                className="inline-flex items-center gap-2 text-base font-semibold text-zinc-600 hover:text-zinc-700 transition-colors"
              >
                <LuMessageCircle className="w-4 h-4" />
                Message us on WhatsApp
              </Link>
            </div>
          </div>
        </section>

        {/* Payment & process reassurance */}
        <section className="mx-auto max-w-3xl pb-16">
          <div className=" border border-gray-200 p-8">
            <h2 className="text-lg font-bold text-black mb-4">
              How a project actually goes
            </h2>
            <ol className="space-y-4">
              {[
                [
                  "1",
                  "You approve a written proposal and price — nothing starts before that.",
                ],
                [
                  "2",
                  "We sign a short agreement together (MSA + SOW) covering scope, timeline, and price.",
                ],
                [
                  "3",
                  "A 50% deposit starts the work. The other 50% is due at handover, not before.",
                ],
                [
                  "4",
                  "You review the design direction early — if it's off, you get the deposit back.",
                ],
                [
                  "5",
                  "Site goes live, backed by your plan's included bug-fix warranty.",
                ],
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

        {/* Direct contact + FAQ link */}
        <section className="mx-auto max-w-3xl pb-24">
          <div className=" bg-zinc-50/60 border border-zinc-100 p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <LuMail className="w-5 h-5 text-zinc-600 shrink-0" />
              <div>
                <p className="text-base font-semibold text-black">
                  Prefer email?
                </p>
                <p className="text-base text-gray-600">hello@lumentify.com</p>
              </div>
            </div>
            <Link
              href="/faq"
              className="inline-flex items-center gap-2 text-base font-semibold text-gray-700 hover:text-zinc-600 transition-colors"
            >
              <LuCircleHelp className="w-4 h-4" />
              Check the FAQ first
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
