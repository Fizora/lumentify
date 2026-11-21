import { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Skathes from "@/components/Skathes";
import CTA from "@/components/sections/CTA";
import { C, Container, Label, PageHero } from "@/components/ui/Swiss";
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
          compact
        />

        <section
          className="border-y"
          style={{ borderColor: C.RULE, backgroundColor: C.BG, color: C.INK }}
        >
          <Container className="py-8 md:py-12">
            <div className="grid grid-cols-1 gap-x-6 gap-y-5 md:grid-cols-12">
              <div className="md:col-span-3">
                <Label>{aboutPageContent.studioLabel}</Label>
              </div>

              <article
                className="text-[15px] leading-relaxed md:col-span-9"
                style={{ color: C.MUTED }}
              >
                <div className="border-y" style={{ borderColor: C.RULE }}>
                  <p className="border-b py-4 md:py-5" style={{ borderColor: C.RULE }}>
                    {aboutPageContent.paragraphs[0]}
                  </p>

                  <div
                    className="grid border-b md:grid-cols-2"
                    style={{ borderColor: C.RULE }}
                  >
                    <p
                      className="py-4 md:py-5 md:pr-6"
                      style={{ borderColor: C.RULE }}
                    >
                      {aboutPageContent.paragraphs[1]}
                    </p>
                    <p
                      className="border-t py-4 md:border-l md:border-t-0 md:py-5 md:pl-6"
                      style={{ borderColor: C.RULE }}
                    >
                      {aboutPageContent.paragraphs[2]}
                    </p>
                  </div>

                  <p
                    className="border-b py-4 md:py-5"
                    style={{ borderColor: C.RULE }}
                  >
                    {aboutPageContent.paragraphs[3]}{" "}
                    <strong style={{ color: C.INK }}>
                      {aboutPageContent.principlesEmphasis}
                    </strong>
                  </p>

                  <dl className="grid md:grid-cols-3">
                    {aboutPageContent.principles.map((p) => (
                      <div
                        key={p.name}
                        className="border-b py-4 last:border-b-0 md:border-r md:border-b-0 md:px-5 md:py-5 md:last:border-r-0 md:first:pl-0"
                        style={{ borderColor: C.RULE }}
                      >
                        <dt
                          className="mb-1 font-medium"
                          style={{ color: C.INK }}
                        >
                          {p.name}
                        </dt>
                        <dd>{p.text}</dd>
                      </div>
                    ))}
                  </dl>
                </div>

                <div
                  className="grid border-b md:grid-cols-2"
                  style={{ borderColor: C.RULE }}
                >
                  <p className="py-4 md:py-5 md:pr-6">
                    {aboutPageContent.paragraphs[4]}
                  </p>
                  <p
                    className="border-t py-4 md:border-l md:border-t-0 md:py-5 md:pl-6"
                    style={{ borderColor: C.RULE }}
                  >
                    {aboutPageContent.paragraphs[5]}
                  </p>
                </div>
              </article>
            </div>
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
