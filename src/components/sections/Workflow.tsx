import { Section, Row, RowList } from "@/components/ui/Swiss";
import { workflowSectionContent } from "@/const/landing/Services";

const Workflow = () => (
  <Section
    label={workflowSectionContent.label}
    title={workflowSectionContent.title}
    intro={workflowSectionContent.intro}
  >
    <RowList>
      {workflowSectionContent.steps.map((s, i) => (
        <Row key={s.title} index={`0${i + 1}`} title={s.title}>
          {s.description}
        </Row>
      ))}
    </RowList>
  </Section>
);

export default Workflow;
