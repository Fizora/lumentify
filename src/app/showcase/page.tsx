import { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ShowcaseGrid from "@/components/ShowcaseGrid"; // <-- import

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
            {/* <span className="inline-block text-xs font-semibold tracking-widest uppercase text-zinc-600 bg-zinc-100 px-4 py-1.5 rounded-full">
              Showcase
            </span> */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight">
              Showcase
            </h1>
            {/* <p className="text-lg text-gray-600 leading-relaxed">
              A few demo sites showing how Essential, Pro, and Custom packages
              can look for home-service businesses.
            </p> */}
          </div>

          {/* Komponen client dengan tabs & dual mode */}
          <ShowcaseGrid />
        </div>
      </main>
      <Footer />
    </>
  );
}
