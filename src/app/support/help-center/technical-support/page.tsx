import { Metadata } from "next";
import Link from "next/link";
import { LuWrench, LuArrowRight, LuFileText, LuZap } from "react-icons/lu";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Lexentify | Technical Support",
};

const articles = [
  {
    title: "How do we maintain sub-second load speeds?",
    desc: "An overview of our lean frontend code architecture, asset optimization, and edge-cached hosting infrastructure.",
  },
  {
    title: "What is included in Post-Launch Stabilization?",
    desc: "Details on our dedicated 7 to 30-day post-deployment support window ensuring absolute platform stability and bug-free performance.",
  },
  {
    title: "How are custom domains and DNS configured?",
    desc: "Learn how we handle domain pointing, SSL certificate provisioning, and secure DNS records during final handover.",
  },
  {
    title: "Do I have 100% full ownership of my source code?",
    desc: "Yes. Upon project completion and final payment, all source code, design assets, and repository controls transfer entirely to you with zero vendor lock-in.",
  },
];

export default function TechnicalSupportPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">
        {/* Header */}
        <section className="pt-32 pb-16 mx-auto max-w-300 px-4 border-x">
          <div className="max-w-2xl mx-auto text-center">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-widest uppercase text-zinc-600 bg-zinc-100 px-4 py-1.5 rounded-full mb-5">
              <LuWrench className="w-3.5 h-3.5" /> Technical Support
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-black tracking-tight mb-4">
              Infrastructure & Maintenance
            </h1>
            <p className="text-sm text-gray-600 leading-relaxed">
              Technical guides covering speed optimization, secure hosting
              environments, domain configurations, and post-launch stability.
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
                Experiencing technical downtime or urgent issues?
              </p>
              <p className="text-sm text-gray-600 mb-4">
                Reach out directly via our priority channels or WhatsApp for
                immediate assistance.
              </p>
              <Link
                href="/support"
                className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-900 hover:underline"
              >
                Contact Technical Support
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
