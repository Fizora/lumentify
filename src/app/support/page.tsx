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
import Skathes from "@/components/Skathes";

export const metadata: Metadata = {
  title: "Lexentify | Support & Guarantees",
};

const guarantees = [
  {
    icon: LuFileCheck,
    title: "Visual direction approval before coding",
    body: "We review the initial homepage design direction with you before full development begins. If you choose to cancel the project at this milestone because the direction doesn't fit your vision, your initial deposit is fully refunded—stopping the project cleanly before any code is written.",
  },
  {
    icon: LuRotateCcw,
    title: "Post-launch stabilization support",
    body: "Every build includes a dedicated transition window (14 days for Essential, 30 days for Pro, 60 days for Custom). Any technical adjustments needed during this period are handled immediately at zero extra cost.",
  },
  {
    icon: LuBadgeCheck,
    title: "Fixed pricing with zero surprises",
    body: "The price outlined in your signed SOW is fixed. Any requested scope changes require a written add-on agreement before work proceeds—ensuring you never face surprise line items.",
  },
  {
    icon: LuShieldCheck,
    title: "Complete contractual transparency",
    body: "Every project starts with a formal, signed agreement (MSA + SOW) defining exact deliverables, timelines, and costs so both parties operate with absolute clarity.",
  },
];

export default function Support() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen px-4 bg-white text-zinc-900 border-b">
        <section className="mx-auto max-w-300 px-3 py-20 border-x border-zinc-200">
          {/* Header */}
          <section className="pt-32 pb-16 mx-auto max-w-3xl text-center">
            <span className="inline-block text-xs font-medium tracking-widest uppercase text-zinc-600 bg-zinc-100 px-4 py-1.5 rounded-full mb-5">
              Support & Protection
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-black leading-tight mb-4">
              Need assistance? We&apos;ve got you covered.
            </h1>
            <p className="text-lg text-zinc-600 leading-relaxed">
              Whether you need project support, have technical questions, or
              want to explore working together — here is how to reach us and the
              exact standards protecting your investment.
            </p>
          </section>

          {/* Guarantees */}
          <section className="mx-auto max-w-4xl pb-16">
            <h2 className="text-xl font-medium text-black mb-1 text-center">
              Your protection standards
            </h2>
            <p className="text-sm text-zinc-600 text-center mb-8 max-w-xl mx-auto">
              As an independent digital studio, we believe in radical
              transparency. Here are the clear operational guardrails that
              protect your project.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {guarantees.map(({ icon: Icon, title, body }) => (
                <div
                  key={title}
                  className="border border-zinc-200 p-8 bg-white shadow-xs"
                >
                  <Icon className="w-5 h-5 text-zinc-800 mb-4" />
                  <h3 className="text-base font-medium text-black mb-2">
                    {title}
                  </h3>
                  <p className="text-sm text-zinc-600 leading-relaxed">
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
              <div className="border border-zinc-200 p-8 bg-white shadow-xs">
                <h2 className="text-lg font-medium text-black mb-2">
                  Active clients
                </h2>
                <p className="text-sm text-zinc-600 leading-relaxed mb-6">
                  Need a content update or post-launch technical assistance?
                  Message us directly with your business name and details—we
                  will take care of it promptly.
                </p>
                <Link
                  href="https://wa.me/6285235086814"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-zinc-900 hover:text-zinc-600 transition-colors"
                >
                  <LuMessageCircle className="w-4 h-4" />
                  Message us on WhatsApp
                </Link>
              </div>

              {/* New / prospective */}
              <div className="border border-zinc-200 p-8 bg-white shadow-xs">
                <h2 className="text-lg font-medium text-black mb-2">
                  Prospective clients
                </h2>
                <p className="text-sm text-zinc-600 leading-relaxed mb-6">
                  Have questions about pricing, deliverables, or whether our web
                  framework fits your trade business? Reach out for an honest,
                  pressure-free discussion.
                </p>
                <Link
                  href="mailto:support@lexentify.com"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-zinc-900 hover:text-zinc-600 transition-colors"
                >
                  <LuMail className="w-4 h-4" />
                  Message us on Email
                </Link>
              </div>
            </div>
          </section>

          {/* Payment & process reassurance */}
          <section className="mx-auto max-w-3xl pb-16">
            <div className="border border-zinc-200 p-8 bg-white shadow-xs">
              <h2 className="text-lg font-medium text-black mb-4">
                How every project flows safely for both sides
              </h2>
              <ol className="space-y-4">
                {[
                  [
                    "1",
                    "You review and approve a written proposal and fixed price before any financial commitment is made.",
                  ],
                  [
                    "2",
                    "We formalize the arrangement with a signed Master Service Agreement (MSA) and Statement of Work (SOW).",
                  ],
                  [
                    "3",
                    "You review the initial design direction early in the timeline. If it does not align with your expectations, your initial deposit is fully refunded.",
                  ],
                  [
                    "4",
                    "Once the design direction is approved, full development proceeds toward completion.",
                  ],
                  [
                    "5",
                    "The remaining balance is due only upon final handover, and your site goes live backed by post-launch stabilization support.",
                  ],
                ].map(([n, text]) => (
                  <li key={n} className="flex gap-4 items-start">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-zinc-100 text-zinc-800 text-xs font-medium flex items-center justify-center">
                      {n}
                    </span>
                    <p className="text-sm text-zinc-600 leading-relaxed">
                      {text}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          {/* Direct contact + FAQ link */}
          <section className="mx-auto max-w-3xl pb-24">
            <div className="bg-zinc-50 border border-zinc-200 p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-3">
                <LuMail className="w-5 h-5 text-zinc-800 shrink-0" />
                <div>
                  <p className="text-sm font-medium text-black">
                    Prefer email communication?
                  </p>
                  <p className="text-sm text-zinc-600">info@lexentify.com</p>
                </div>
              </div>
              <Link
                href="/faq"
                className="inline-flex items-center gap-2 text-sm font-medium text-zinc-900 hover:text-zinc-600 transition-colors"
              >
                <LuCircleHelp className="w-4 h-4" />
                Check the FAQ first
              </Link>
            </div>
          </section>
        </section>
      </main>
      <Skathes />
      <Footer />
    </>
  );
}
