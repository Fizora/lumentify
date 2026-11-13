import { Metadata } from "next";
import {
  LuPhoneCall,
  LuMapPin,
  LuZap,
  LuShield,
  LuArrowRight,
} from "react-icons/lu";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { webDevelopmentDetails } from "@/components/constant/service-details";

export const metadata: Metadata = {
  title: "Web Development Scope | Services | Lexentify",
  description:
    "Comprehensive technical scope, deliverable definitions, and operational framework for Lexentify web development services.",
};

const included = [
  {
    icon: LuPhoneCall,
    title: "Click-to-call built in",
    body: "A sticky mobile call button engineered for emergency customers to reach dispatch in one tap.",
  },
  {
    icon: LuMapPin,
    title: "Suburb-level pages",
    body: "Dedicated location pages structured to capture local search traffic in the suburbs you cover.",
  },
  {
    icon: LuZap,
    title: "Sub-second load times",
    body: "Clean, modern code and optimized assets so visitors don't bounce before the page even loads.",
  },
  {
    icon: LuShield,
    title: "Secure by default",
    body: "SSL, modern security headers, and hardened hosting configuration included on every build.",
  },
];

export default function WebDevelopment() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 flex flex-col">
      <Navbar />

      {/* 
         Bungkus seluruh area utama & footer dalam satu container max-w-7xl mx-auto dengan border-x.
        Dengan ini, batas kiri dan kanan konten serta footer dijamin 100% sejajar dan lurus.
      */}
      <div className="w-full max-w-7xl mx-auto border-x border-zinc-200 flex-1 flex flex-col">
        <main className="flex-1 w-full">
          <div className="w-full py-20 border-b border-zinc-200">
            {/* Header Section */}
            <section className="pt-32 pb-16 mx-auto max-w-3xl text-center px-3">
              <span className="inline-block text-xs font-medium tracking-widest uppercase text-zinc-600 bg-zinc-100 px-4 py-1.5 rounded-full mb-5">
                Services / Web Development
              </span>
              <h1 className="text-3xl md:text-5xl font-medium text-black leading-tight mb-4">
                Websites built to get your phone ringing.
              </h1>
              <p className="text-zinc-600 leading-relaxed text-sm md:text-base">
                Not a template with your logo on it — a site engineered around
                how trade customers actually behave in an emergency.
              </p>
            </section>

            {/* Features Grid */}
            <section className="mx-auto max-w-4xl pb-20 px-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {included.map(({ icon: Icon, title, body }) => (
                  <div
                    key={title}
                    className="border border-zinc-200 p-8 bg-zinc-50/50 rounded-lg"
                  >
                    {Icon && <Icon className="w-5 h-5 text-zinc-800 mb-4" />}
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

            {/* Detailed Narrative Transparency Hub */}
            <section className="mx-auto max-w-4xl px-3 py-16 border-t border-zinc-200">
              <div className="mb-12 text-center max-w-2xl mx-auto">
                <span className="inline-block text-xs font-medium tracking-widest uppercase text-zinc-600 bg-zinc-100 px-4 py-1.5 rounded-full mb-3">
                  Development Information Hub
                </span>
                <h2 className="text-2xl md:text-3xl font-semibold text-black tracking-tight mb-3">
                  Technical Scope & Operational Rules
                </h2>
                <p className="text-sm text-zinc-600 leading-relaxed">
                  {webDevelopmentDetails.overview}
                </p>
                <p className="text-xs text-zinc-400 mt-2">
                  Last updated: {webDevelopmentDetails.lastUpdated}
                </p>
              </div>

              <div className="space-y-12">
                {webDevelopmentDetails.sections.map((section, idx) => (
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

              {/* Cross-reference CTA to Web Maintenance */}
              <div className="mt-16 bg-zinc-50 border border-zinc-200 rounded-xl p-8 text-center space-y-4">
                <h3 className="text-base font-semibold text-black">
                  Looking for ongoing updates or server management?
                </h3>
                <p className="text-sm text-zinc-600 max-w-xl mx-auto leading-relaxed">
                  If you want to understand how our monthly maintenance tiers
                  handle server uptime, security patches, and routine
                  adjustments, check out our dedicated maintenance guide.
                </p>
                <div className="pt-2">
                  <Link
                    href="/services/web-maintenance"
                    className="inline-flex items-center gap-2 text-sm font-medium text-black bg-white border border-zinc-300 hover:border-black px-6 py-2.5 rounded-full transition-colors"
                  >
                    <span>Explore Web Maintenance Details</span>
                    <LuArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </section>
          </div>
        </main>

        {/* Footer diletakkan di dalam container yang sama agar border kiri-kanannya menyambung lurus */}
        <Footer />
      </div>
    </div>
  );
}
