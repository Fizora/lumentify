import type { Metadata } from "next";
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
import { siteContent } from "@/const/data";

export const metadata: Metadata = {
  description: siteContent.metadata.description,
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteContent.siteUrl}/#organization`,
      name: siteContent.brandName,
      url: siteContent.siteUrl,
      email: siteContent.businessEmail,
    },
    {
      "@type": "WebSite",
      "@id": `${siteContent.siteUrl}/#website`,
      name: siteContent.brandName,
      url: siteContent.siteUrl,
      publisher: { "@id": `${siteContent.siteUrl}/#organization` },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
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
        {/* <Testimonials />
        <Skathes /> */}
        <FAQ />
        <Skathes />
        <Contact />
        <Skathes />
        <CTA />
        <Skathes />
        <Footer />
      </main>
      {/* <WhatsAppCall /> */}
    </>
  );
}
