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
        {/* Header – Neo‑Brutalism style */}
        <section className="pt-32 pb-16 mx-auto max-w-3xl text-center">
          <span className="inline-block text-xs font-bold tracking-widest uppercase text-black bg-yellow-400 px-4 py-1.5 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.8)] mb-5">
            Support
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight mb-4">
            Need a hand? We&apos;ve got you.
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed border-l-4 border-yellow-400 pl-4 mx-auto max-w-2xl">
            Whether it&apos;s a bug, a question about your project, or something
            before you get started — here&apos;s the fastest way to reach us.
          </p>
        </section>

        {/* Two support paths */}
        <section className="mx-auto max-w-4xl pb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Existing client */}
            <div className="bg-white border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,0.8)] hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,0.8)] hover:bg-zinc-800 hover:text-white transition-all duration-300 p-8 transform active:scale-95">
              <h2 className="text-lg font-bold text-inherit mb-2">
                Already a client
              </h2>
              <p className="text-sm text-inherit/80 leading-relaxed mb-6">
                Something broke, or you need a change to your live site? Message
                us with your business name and what&apos;s happening —
                we&apos;ll take it from there.
              </p>
              <Link
                href="https://wa.me/085235086814"
                className="inline-flex items-center gap-2 text-sm font-bold border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.8)] px-4 py-2 bg-white text-black hover:bg-blue-600 hover:text-white hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.8)] transition-all duration-200 active:scale-95"
              >
                <LuMessageCircle className="w-4 h-4" />
                Message us on WhatsApp
              </Link>
            </div>

            {/* New / prospective */}
            <div className="bg-white border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,0.8)] hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,0.8)] hover:bg-zinc-800 hover:text-white transition-all duration-300 p-8 transform active:scale-95">
              <h2 className="text-lg font-bold text-inherit mb-2">
                Not a client yet
              </h2>
              <p className="text-sm text-inherit/80 leading-relaxed mb-6">
                Have a question about pricing, timelines, or whether we&apos;re
                a fit for your business? Reach out — no pressure, no sales
                script.
              </p>
              <Link
                href="https://wa.me/085235086814"
                className="inline-flex items-center gap-2 text-sm font-bold border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.8)] px-4 py-2 bg-white text-black hover:bg-blue-600 hover:text-white hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.8)] transition-all duration-200 active:scale-95"
              >
                <LuMessageCircle className="w-4 h-4" />
                Message us on WhatsApp
              </Link>
            </div>
          </div>
        </section>

        {/* Direct contact + FAQ link */}
        <section className="mx-auto max-w-3xl pb-24">
          <div className="bg-white border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,0.8)] hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,0.8)] transition-all duration-300 p-8 flex flex-col sm:flex-row items-center justify-between gap-6 transform active:scale-95">
            <div className="flex items-center gap-3">
              <LuMail className="w-5 h-5 text-black shrink-0" />
              <div>
                <p className="text-sm font-bold text-black">Prefer email?</p>
                <p className="text-sm text-gray-700">hello@lumentify.com</p>
              </div>
            </div>
            <Link
              href="/faq"
              className="inline-flex items-center gap-2 text-sm font-bold border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.8)] px-4 py-2 bg-yellow-400 text-black hover:bg-zinc-800 hover:text-white hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.8)] transition-all duration-200 active:scale-95"
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
