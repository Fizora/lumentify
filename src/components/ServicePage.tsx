import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Skathes from "@/components/Skathes";
import {
  Block,
  ButtonLink,
  C,
  Label,
  PageHero,
  Row,
  RowList,
} from "@/components/ui/Swiss";
import { servicesCommonContent } from "@/const/page/Services";

type Detail = {
  overview: string;
  lastUpdated: string;
  sections: readonly {
    title: string;
    content: readonly string[];
    listItems?: readonly string[];
  }[];
};

type Props = {
  label: string;
  title: string;
  intro: string;
  included: readonly { title: string; body: string }[];
  hubLabel: string;
  hubTitle: string;
  details: Detail;
  cross: { title: string; body: string; href: string; cta: string };
};

export default function ServicePage({
  label,
  title,
  intro,
  included,
  hubLabel,
  hubTitle,
  details,
  cross,
}: Props) {
  return (
    <>
      <Navbar />
      <main style={{ backgroundColor: C.BG, color: C.INK }}>
        <PageHero label={label} title={title} intro={intro} />
        <Skathes />

        <Block label={servicesCommonContent.includedLabel}>
          <RowList>
            {included.map((item) => (
              <Row key={item.title} title={item.title}>
                {item.body}
              </Row>
            ))}
          </RowList>
        </Block>

        <Block label={hubLabel}>
          <h2 className="max-w-3xl text-balance text-3xl font-semibold leading-[1.05] tracking-[-0.03em] md:text-5xl">
            {hubTitle}
          </h2>
          <p
            className="mt-6 max-w-xl text-base leading-relaxed md:text-lg"
            style={{ color: C.MUTED }}
          >
            {details.overview}
          </p>
          <p className="mt-3 text-sm" style={{ color: C.MUTED }}>
            {servicesCommonContent.lastUpdatedLabel} {details.lastUpdated}
          </p>

          <div className="mt-12 md:mt-16">
            <RowList>
              {details.sections.map((section, idx) => (
                <Row key={idx} title={section.title}>
                  {section.content.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                  {section.listItems && (
                    <ul
                      className="space-y-2 border-l pl-4"
                      style={{ borderColor: C.RULE_HI }}
                    >
                      {section.listItems.map((li, i) => (
                        <li key={i}>{li}</li>
                      ))}
                    </ul>
                  )}
                </Row>
              ))}
            </RowList>
          </div>
        </Block>

        <Block label={servicesCommonContent.relatedLabel}>
          <h2 className="max-w-2xl text-balance text-2xl font-semibold leading-tight tracking-[-0.03em] md:text-4xl">
            {cross.title}
          </h2>
          <p
            className="mt-5 max-w-xl text-[15px] leading-relaxed md:text-base"
            style={{ color: C.MUTED }}
          >
            {cross.body}
          </p>
          <div className="mt-8">
            <ButtonLink
              href={cross.href}
              className="w-full sm:w-auto sm:min-w-72"
            >
              {cross.cta}
            </ButtonLink>
          </div>
        </Block>
      </main>
      <Footer />
    </>
  );
}
