import { Section, Row, RowList, Label } from "@/components/ui/Swiss";
import {
  businessFeatures,
  featuresSectionContent,
  technicalFeatures,
  type FeatureItem,
} from "@/const/landing/Services";

const Group = ({ label, items }: { label: string; items: FeatureItem[] }) => (
  <div>
    <Label>{label}</Label>
    <div className="mt-5">
      <RowList>
        {items.map((f, i) => (
          <Row key={i} title={f.title}>
            {f.description}
          </Row>
        ))}
      </RowList>
    </div>
  </div>
);

const Features = () => (
  <Section
    label={featuresSectionContent.label}
    title={featuresSectionContent.title}
    intro={featuresSectionContent.intro}
  >
    <div className="space-y-16 md:space-y-24">
      <Group
        label={featuresSectionContent.businessLabel}
        items={businessFeatures}
      />
      <Group label={featuresSectionContent.technicalLabel} items={technicalFeatures} />
    </div>
  </Section>
);

export default Features;
