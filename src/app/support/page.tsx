import { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Skathes from "@/components/Skathes";
import Link from "next/link";
import {
  Block,
  C,
  Container,
  PageHero,
  Row,
  RowList,
} from "@/components/ui/Swiss";
import { supportMetadata, supportPageContent } from "@/const/page/Support";

export const metadata: Metadata = supportMetadata;

const contactLink =
  "inline-block border-b border-white pb-0.5 text-sm font-medium text-white transition-opacity hover:opacity-60";

export default function Support() {
  return (
    <>
      <Navbar />
      <main style={{ backgroundColor: C.BG, color: C.INK }}>
        <PageHero
          label={supportPageContent.hero.label}
          title={supportPageContent.hero.title}
          intro={supportPageContent.hero.intro}
        />

        <Block label={supportPageContent.guaranteesLabel}>
          <RowList>
            {supportPageContent.guarantees.map((g) => (
              <Row key={g.title} title={g.title}>
                {g.body}
              </Row>
            ))}
          </RowList>
        </Block>

        <Block label={supportPageContent.contactLabel}>
          <div
            className="grid grid-cols-1 border-y md:grid-cols-2"
            style={{ borderColor: C.RULE }}
          >
            <div
              className="py-8 md:border-r md:py-10 md:pr-10"
              style={{ borderColor: C.RULE }}
            >
              <h2 className="text-xl font-semibold tracking-tight">
                {supportPageContent.contacts[0].title}
              </h2>
              <p
                className="mb-8 mt-4 text-[15px] leading-relaxed"
                style={{ color: C.MUTED }}
              >
                {supportPageContent.contacts[0].body}
              </p>
              <a
                href={`mailto:${supportPageContent.contacts[0].email}`}
                className={contactLink}
              >
                {supportPageContent.contacts[0].email}
              </a>
            </div>
            <div
              className="border-t py-8 md:border-t-0 md:py-10 md:pl-10"
              style={{ borderColor: C.RULE }}
            >
              <h2 className="text-xl font-semibold tracking-tight">
                {supportPageContent.contacts[1].title}
              </h2>
              <p
                className="mb-8 mt-4 text-[15px] leading-relaxed"
                style={{ color: C.MUTED }}
              >
                {supportPageContent.contacts[1].body}
              </p>
              <a
                href={`mailto:${supportPageContent.contacts[1].email}`}
                className={contactLink}
              >
                {supportPageContent.contacts[1].email}
              </a>
            </div>
          </div>
        </Block>

        <Block label={supportPageContent.stepsLabel}>
          <ol className="border-b" style={{ borderColor: C.RULE }}>
            {supportPageContent.steps.map((text, i) => (
              <li
                key={i}
                className="grid grid-cols-12 gap-x-6 border-t py-6"
                style={{ borderColor: C.RULE }}
              >
                <span
                  className="col-span-2 text-sm tabular-nums md:col-span-1"
                  style={{ color: C.MUTED }}
                >
                  0{i + 1}
                </span>
                <p
                  className="col-span-10 max-w-2xl text-[15px] leading-relaxed md:col-span-11"
                  style={{ color: C.MUTED }}
                >
                  {text}
                </p>
              </li>
            ))}
          </ol>
        </Block>

        <section>
          <Container className="py-10 md:py-14">
            <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
              <div>
                <p className="text-lg font-semibold tracking-tight">
                  {supportPageContent.emailPrompt}
                </p>
                <a
                  href="mailto:info@lexentify.com"
                  className="mt-1 inline-block text-sm"
                  style={{ color: C.MUTED }}
                >
                  {supportPageContent.generalEmail}
                </a>
              </div>
              <Link
                href="/faq"
                className="w-fit border-b border-white pb-0.5 text-sm font-medium transition-opacity hover:opacity-60"
              >
                {supportPageContent.faqAction}
              </Link>
            </div>
          </Container>
        </section>
      </main>
      <Skathes />
      <Footer />
    </>
  );
}
