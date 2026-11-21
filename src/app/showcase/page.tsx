import { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ShowcaseGrid from "@/components/ShowcaseGrid";
import CTA from "@/components/sections/CTA";
import Skathes from "@/components/Skathes";
import { C, Container, PageHero } from "@/components/ui/Swiss";
import { portfolioPageContent } from "@/const/landing/Portfolio";

export const metadata: Metadata = portfolioPageContent.metadata;

export default function Showcase() {
  return (
    <>
      <Navbar />
      <main style={{ backgroundColor: C.BG, color: C.INK }}>
        <PageHero
          label={portfolioPageContent.label}
          title={portfolioPageContent.title}
          intro={portfolioPageContent.intro}
        />
        <Skathes />
        <section>
          <Container className="py-12 md:py-20">
            <ShowcaseGrid />
          </Container>
        </section>
      </main>
      <Skathes />
      <CTA />
      <Skathes />
      <Footer />
    </>
  );
}
