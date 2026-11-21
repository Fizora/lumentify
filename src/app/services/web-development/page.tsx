import { Metadata } from "next";
import ServicePage from "@/components/ServicePage";
import {
  webDevelopmentDetails,
  webDevelopmentPageContent,
} from "@/const/page/Services";

export const metadata: Metadata = webDevelopmentPageContent.metadata;

export default function WebDevelopment() {
  return (
    <ServicePage
      label={webDevelopmentPageContent.label}
      title={webDevelopmentPageContent.title}
      intro={webDevelopmentPageContent.intro}
      included={webDevelopmentPageContent.included}
      hubLabel={webDevelopmentPageContent.hubLabel}
      hubTitle={webDevelopmentPageContent.hubTitle}
      details={webDevelopmentDetails}
      cross={webDevelopmentPageContent.cross}
    />
  );
}
