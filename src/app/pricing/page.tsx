import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Pricing from "@/components/sections/Pricing";
import Skathes from "@/components/Skathes";
import CTA from "@/components/sections/CTA";
import { C } from "@/components/ui/Swiss";

export const metadata: Metadata = {
  title: "Website Packages & Pricing",
  description:
    "Compare Lexentify's website development and maintenance packages for plumbers, electricians, HVAC, and other home-service businesses.",
};

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <main
        className="pt-12 md:pt-14"
        style={{ backgroundColor: C.BG, color: C.INK }}
      >
        <Pricing showOneTime showMRR />
        <Skathes />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
