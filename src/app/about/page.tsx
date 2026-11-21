import { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Skathes from "@/components/Skathes";
import CTA from "@/components/sections/CTA";
import { Block, C, PageHero, Row, RowList } from "@/components/ui/Swiss";
import { aboutMetadata, aboutPageContent } from "@/const/page/About";

export const metadata: Metadata = aboutMetadata;

export default function About() {
  return (
    <>
      <Navbar />
      <main style={{ backgroundColor: C.BG, color: C.INK }}>
        <PageHero
          label={aboutPageContent.label}
          title={aboutPageContent.title}
          intro={aboutPageContent.intro}
        />
        <Skathes />

        <Block label={aboutPageContent.studioLabel}>
          <RowList>
            <Row title="Our focus">{aboutPageContent.paragraphs[0]}</Row>
            <Row title="Usability first">{aboutPageContent.paragraphs[1]}</Row>
            <Row title="Project-specific work">
              {aboutPageContent.paragraphs[2]}
            </Row>
          </RowList>
        </Block>

        <Block label="Principles">
          <h2 className="max-w-3xl text-balance text-3xl font-semibold leading-[1.05] tracking-[-0.03em] md:text-5xl">
            {aboutPageContent.principlesEmphasis}
          </h2>
          <div className="mt-8 md:mt-12">
            <RowList>
              {aboutPageContent.principles.map((principle) => (
                <Row key={principle.name} title={principle.name}>
                  {principle.text}
                </Row>
              ))}
            </RowList>
          </div>
        </Block>

        <Block label="Standards">
          <RowList>
            <Row title="Accurate trust signals">
              {aboutPageContent.paragraphs[4]}
            </Row>
            <Row title="Clear expectations">
              {aboutPageContent.paragraphs[5]}
            </Row>
          </RowList>
        </Block>
      </main>
      <Skathes />
      <CTA />
      <Skathes />
      <Footer />
    </>
  );
}
