import { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Skathes from "@/components/Skathes";
import CTA from "@/components/sections/CTA";
import { C, Container } from "@/components/ui/Swiss";
import {
  privacyMetadata,
  privacyPageContent,
  privacyPolicyData,
} from "@/const/page/Privacy";

export const metadata: Metadata = privacyMetadata;

export default function Privacy() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen" style={{ backgroundColor: C.BG, color: C.INK }}>
        <Container className="pt-32 pb-16 md:pt-44 md:pb-24">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
            <div className="md:col-span-3">
              <span className="text-sm" style={{ color: C.MUTED }}>
                {privacyPageContent.eyebrow}
              </span>
            </div>
            <div className="md:col-span-9">
              <h1 className="text-balance text-[clamp(2.5rem,7vw,5.5rem)] font-semibold leading-[0.98] tracking-[-0.045em]">
                {privacyPageContent.title}
              </h1>
              <p className="mt-6 text-sm" style={{ color: C.MUTED }}>
                {privacyPageContent.updatedLabel} {privacyPolicyData.lastUpdated}
              </p>
            </div>
          </div>
        </Container>

        <Container className="border-t p-0" style={{ borderColor: C.RULE }}>
          <div className="-mx-5 grid grid-cols-1 border-b md:-mx-10 md:grid-cols-12" style={{ borderColor: C.RULE }}>
            <div className="px-5 py-8 md:col-span-3 md:px-10 md:py-12">
              <p className="text-sm font-semibold uppercase tracking-widest">{privacyPageContent.scopeLabel}</p>
            </div>
            <p className="border-t px-5 py-8 text-[15px] leading-relaxed md:col-span-9 md:border-l md:border-t-0 md:px-10 md:py-12 md:text-base" style={{ borderColor: C.RULE, color: C.MUTED }}>
              {privacyPolicyData.scopeNotice}
            </p>
          </div>

          {privacyPolicyData.sections.map((section, idx) => (
            <div key={idx} className="-mx-5 grid grid-cols-1 border-b md:-mx-10 md:grid-cols-12" style={{ borderColor: C.RULE }}>
              <div className="px-5 py-8 md:col-span-3 md:px-10 md:py-12">
                <h2 className="text-sm font-semibold uppercase tracking-wide md:text-base">{section.title}</h2>
              </div>
              <article className="border-t px-5 py-8 text-[15px] leading-relaxed md:col-span-9 md:border-l md:border-t-0 md:px-10 md:py-12 md:text-base" style={{ borderColor: C.RULE, color: C.MUTED }}>
                {section.content.map((paragraph, pIdx) => (
                  <p key={pIdx} className={pIdx > 0 ? "mt-5" : ""}>{paragraph}</p>
                ))}
              </article>
            </div>
          ))}
        </Container>
      </main>
      <CTA />
      <Skathes />
      <Footer />
    </>
  );
}
