import { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ShowcaseGrid from "@/components/ShowcaseGrid";
import CTA from "@/components/sections/CTA";
import Skathes from "@/components/Skathes";

export const metadata: Metadata = {
  title: "Showcase",
  description:
    "Explore our live interactive demo builds. See how our Essential, Pro, and Custom web architectures deliver lightning-fast performance and high conversions for trade businesses.",
};

export default function Showcase() {
  return (
    <>
      <Navbar />
      <main className="border-b">
        <div className="mx-auto max-w-300 py-32 border-x">
          {/* Section header dengan copywriting berkualitas */}
          <div className="text-center space-y-4 mb-16 max-w-2xl mx-auto px-4">
            <span className="inline-block text-xs font-medium tracking-widest uppercase text-zinc-600 bg-zinc-100 px-4 py-1.5 rounded-full">
              Showcase
            </span>
            <h1 className="text-3xl md:text-4xl font-semibold text-black leading-tight">
              Explore Our Demo
            </h1>
            {/* <p className="text-sm text-zinc-600 leading-relaxed">
              Explore our fully interactive demo builds below. Experience
              firsthand how our Essential, Pro, and Custom packages perform in
              the wild—engineered specifically to dominate local searches and
              turn emergency clicks into direct calls.
            </p> */}
          </div>

          {/* Komponen client dengan tabs & dual mode */}
          <ShowcaseGrid />
        </div>
      </main>
      <Skathes />
      <CTA />
      <Skathes />
      <Footer />
    </>
  );
}
