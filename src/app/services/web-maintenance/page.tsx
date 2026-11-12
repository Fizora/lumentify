import { Metadata } from "next";
import {
  LuServer,
  LuRefreshCw,
  LuActivity,
  LuHeadset,
  LuArrowRight,
} from "react-icons/lu";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { webMaintenanceDetails } from "@/components/constant/service-details";

export const metadata: Metadata = {
  title: "Web Maintenance Scope | Services | Lexentify",
  description:
    "Operational framework, managed hosting specifications, and technical care guidelines for Lexentify maintenance plans.",
};

const included = [
  {
    icon: LuServer,
    title: "Hosting & SSL, handled",
    body: "Fast hosting and security certificates managed for you — nothing to renew or configure yourself.",
  },
  {
    icon: LuRefreshCw,
    title: "Ongoing updates",
    body: "Core and security updates applied monthly so your site stays fast and safe without you lifting a finger.",
  },
  {
    icon: LuActivity,
    title: "Uptime monitoring",
    body: "24/7 monitoring on speed and availability — we usually catch an issue before you notice it.",
  },
  {
    icon: LuHeadset,
    title: "Priority support",
    body: "Skip the queue — maintenance clients get faster response times on requests and fixes.",
  },
];

export default function WebMaintenance() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white text-zinc-900 border-b border-zinc-200">
        <div className="mx-auto max-w-7xl px-3 py-20 border-x border-zinc-200">
          {/* Header Section */}
          <section className="pt-32 pb-16 mx-auto max-w-3xl text-center px-3">
            <span className="inline-block text-xs font-medium tracking-widest uppercase text-zinc-600 bg-zinc-100 px-4 py-1.5 rounded-full mb-5">
              Services / Web Maintenance
            </span>
            <h1 className="text-3xl md:text-4xl font-medium text-black leading-tight mb-4">
              A website is never really &quot;done.&quot;
            </h1>
            <p className="text-sm md:text-base text-zinc-600 leading-relaxed">
              Hosting expires, software needs updates, and content goes stale.
              Our maintenance plans keep everything running smoothly without you
              having to think about it.
            </p>
          </section>

          {/* Features Grid */}
          <section className="mx-auto max-w-4xl pb-16 px-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {included.map(({ icon: Icon, title, body }) => (
                <div
                  key={title}
                  className="border border-zinc-200 p-8 bg-zinc-50/50 rounded-lg"
                >
                  <Icon className="w-5 h-5 text-zinc-800 mb-4" />
                  <h3 className="text-sm font-semibold text-black mb-2">
                    {title}
                  </h3>
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    {body}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Detailed Narrative Transparency Hub (Imported from service-details.ts) */}
          <section className="mx-auto max-w-4xl px-3 py-16 border-t border-zinc-200">
            <div className="mb-12 text-center max-w-2xl mx-auto">
              <span className="inline-block text-xs font-medium tracking-widest uppercase text-zinc-600 bg-zinc-100 px-4 py-1.5 rounded-full mb-3">
                Maintenance Information Hub
              </span>
              <h2 className="text-2xl md:text-3xl font-semibold text-black tracking-tight mb-3">
                MRR Operational Framework & Guidelines
              </h2>
              <p className="text-sm text-zinc-600 leading-relaxed">
                {webMaintenanceDetails.overview}
              </p>
              <p className="text-xs text-zinc-400 mt-2">
                Last updated: {webMaintenanceDetails.lastUpdated}
              </p>
            </div>

            <div className="space-y-12">
              {webMaintenanceDetails.sections.map((section, idx) => (
                <div
                  key={idx}
                  className="border-b border-zinc-100 pb-8 last:border-none"
                >
                  <h3 className="text-lg font-semibold text-black mb-4">
                    {section.title}
                  </h3>

                  {section.content.map((paragraph, pIdx) => (
                    <p
                      key={pIdx}
                      className="text-sm text-zinc-700 leading-relaxed mb-3"
                    >
                      {paragraph}
                    </p>
                  ))}

                  {section.listItems && (
                    <ul className="mt-4 space-y-3 pl-4 border-l-2 border-zinc-900">
                      {section.listItems.map((li, lIdx) => (
                        <li
                          key={lIdx}
                          className="text-sm text-zinc-700 leading-relaxed"
                        >
                          {li}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>

            {/* Cross-reference CTA to Web Development */}
            <div className="mt-16 bg-zinc-50 border border-zinc-200 rounded-xl p-8 text-center space-y-4">
              <h3 className="text-base font-semibold text-black">
                Looking to commission a brand new trade website?
              </h3>
              <p className="text-sm text-zinc-600 max-w-xl mx-auto leading-relaxed">
                Review our one-time development packages, architectural
                deliverables, and initial hosting inclusions on our main
                development page.
              </p>
              <div className="pt-2">
                <Link
                  href="/services/web-development"
                  className="inline-flex items-center gap-2 text-sm font-medium text-black bg-white border border-zinc-300 hover:border-black px-6 py-2.5 rounded-full transition-colors"
                >
                  <span>Explore Web Development Scope</span>
                  <LuArrowRight size={16} />
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
