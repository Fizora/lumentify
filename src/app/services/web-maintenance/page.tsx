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
import { PrimaryButtonLink } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Lumentify | Web Maintenance",
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
      <main className="min-h-screen px-4">
        <section className="pt-32 pb-16 mx-auto max-w-3xl text-center">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-zinc-600 bg-zinc-100 px-4 py-1.5 rounded-full mb-5">
            Services / Web Maintenance
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight mb-4">
            A website is never really "done."
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Hosting expires, software needs updates, and content goes stale. Our
            maintenance plans keep everything running without you having to
            think about it.
          </p>
        </section>

        <section className="mx-auto max-w-4xl pb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {included.map(({ icon: Icon, title, body }) => (
              <div key={title} className="border border-gray-200 p-8">
                <Icon className="w-5 h-5 text-zinc-600 mb-4" />
                <h3 className="text-base font-bold text-black mb-2">{title}</h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  {body}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-3xl pb-16">
          <div className="bg-zinc-50/60 border border-zinc-100 p-8 text-center">
            <p className="text-base font-semibold text-black mb-1">
              Cancel anytime after your first month
            </p>
            <p className="text-base text-gray-600">
              No lock-in contracts — if it's not delivering value, you're free
              to leave.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-3xl pb-24 text-center">
          <PrimaryButtonLink
            href="/pricing"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold"
          >
            See Maintenance Plans
            <LuArrowRight className="w-4 h-4" />
          </PrimaryButtonLink>
        </section>
      </main>
      <Footer />
    </>
  );
}
