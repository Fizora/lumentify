import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import Testimonials from "@/components/sections/Testimonials";
import Pricing from "@/components/sections/Pricing";
import Workflow from "@/components/sections/Workflow";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";
import CTA from "@/components/sections/CTA";
import WhatsAppCall from "@/components/WhatsAppCall";
import Skathes from "@/components/Skathes";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Skathes />
        <Features />
        <Skathes />
        <Pricing showMRR={false} showOneTime={true} />
        <Skathes />
        <Workflow />
        <Skathes />
        {/* <Testimonials /> */}
        <FAQ />
        {/* <Contact /> */}
        <Skathes />
        <CTA />
        <Skathes />
      </main>
      <Footer />
      {/* <WhatsAppCall /> */}
    </>
  );
}
