import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Skathes from "@/components/Skathes";
import {
  Block,
  ButtonLink,
  C,
  PageHero,
  Row,
  RowList,
} from "@/components/ui/Swiss";
import { seoPageContent, servicesCommonContent } from "@/const/page/Services";

export const metadata: Metadata = seoPageContent.metadata;

export default function SEO() {
  return (
    <>
      <Navbar />
      <main style={{ backgroundColor: C.BG, color: C.INK }}>
        <PageHero
          label={seoPageContent.label}
          title={seoPageContent.title}
          intro={seoPageContent.intro}
        />
        <Skathes />

        <Block label={seoPageContent.includedLabel}>
          <RowList>
            {seoPageContent.included.map((item) => (
              <Row key={item.title} title={item.title}>
                {item.body}
              </Row>
            ))}
          </RowList>
        </Block>

        <Block label={seoPageContent.expectations.label}>
          <h2 className="max-w-2xl text-balance text-2xl font-semibold leading-tight tracking-[-0.03em] md:text-4xl">
            {seoPageContent.expectations.title}
          </h2>
          <p
            className="mt-5 max-w-xl text-[15px] leading-relaxed md:text-base"
            style={{ color: C.MUTED }}
          >
            {seoPageContent.expectations.body}
          </p>
          <div className="mt-8">
            <ButtonLink
              href={seoPageContent.expectations.href}
              className="w-full sm:w-auto sm:min-w-56"
            >
              {seoPageContent.expectations.action}
            </ButtonLink>
          </div>
        </Block>
      </main>
      <Skathes />
      <Footer />
    </>
  );
}
