import { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ShowcaseGrid from "@/components/ShowcaseGrid";

export const metadata: Metadata = {
  title: "Showcase | Lumentify",
};

export default function Showcase() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24">
        <div className="mx-auto max-w-7xl px-3">
          {/* Section header */}
          <div className="text-center space-y-5 mb-16 max-w-2xl mx-auto">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-zinc-600 bg-zinc-100 px-4 py-1.5 rounded-full">
              Showcase
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight">
              Built for trades that can&apos;t afford a slow website
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              A few examples of how fast, clean, and directed sites look for
              different home-service businesses — each one built around a real
              customer decision, not just a template.
            </p>
          </div>

          {/* Showcase grid (client component for motion) */}
          <ShowcaseGrid />
        </div>
      </main>
      <Footer />
    </>
  );
}
