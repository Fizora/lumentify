import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/CTA";
import Pricing from "@/components/sections/Pricing";
import FAQ from "@/components/sections/FAQ";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Pricing />
        {/* <Testimonials /> */}
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
