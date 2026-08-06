import { Metadata } from "next";
import Link from "next/link";
import { LuMessageCircle, LuMail, LuCircleHelp } from "react-icons/lu";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Lumentify | Support",
};

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
            before you get started — here&apos;s the fastest way to reach us.
          </p>
        </section>

        {/* Two support paths */}
        <section className="mx-auto max-w-4xl pb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Existing client */}
            <div className="rounded-2xl border border-gray-200 p-8">
              <h2 className="text-lg font-bold text-black mb-2">
                Already a client
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                Something broke, or you need a change to your live site? Message
                us with your business name and what&apos;s happening —
                we&apos;ll take it from there.
              </p>
              <Link
                href="https://wa.me/085235086814"
                className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-600 hover:text-zinc-700 transition-colors"
              >
                <LuMessageCircle className="w-4 h-4" />
                Message us on WhatsApp
              </Link>
            </div>

            {/* New / prospective */}
            <div className="rounded-2xl border border-gray-200 p-8">
              <h2 className="text-lg font-bold text-black mb-2">
                Not a client yet
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                Have a question about pricing, timelines, or whether we&apos;re
                a fit for your business? Reach out — no pressure, no sales
                script.
              </p>
              <Link
                href="https://wa.me/085235086814"
                className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-600 hover:text-zinc-700 transition-colors"
              >
                <LuMessageCircle className="w-4 h-4" />
                Message us on WhatsApp
              </Link>
            </div>
          </div>
        </section>

        {/* Direct contact + FAQ link */}
        <section className="mx-auto max-w-3xl pb-24">
          <div className="rounded-2xl bg-zinc-50/60 border border-zinc-100 p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <LuMail className="w-5 h-5 text-zinc-600 shrink-0" />
              <div>
                <p className="text-sm font-semibold text-black">
                  Prefer email?
                </p>
                <p className="text-sm text-gray-600">hello@lumentify.com</p>
              </div>
            </div>
            <Link
              href="/faq"
              className="inline-flex items-center gap-2 text-sm font-semibold text-gray-700 hover:text-zinc-600 transition-colors"
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
