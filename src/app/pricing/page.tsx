import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Pricing from "@/components/sections/Pricing";
import Skathes from "@/components/Skathes";
import CTA from "@/components/sections/CTA";
import { C } from "@/components/ui/Swiss";

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
