import { Metadata } from "next";
import ServicePage from "@/components/ServicePage";
import {
  webMaintenanceDetails,
  webMaintenancePageContent,
} from "@/const/page/Services";

export const metadata: Metadata = webMaintenancePageContent.metadata;

export default function WebMaintenance() {
  return (
    <ServicePage
      label={webMaintenancePageContent.label}
      title={webMaintenancePageContent.title}
      intro={webMaintenancePageContent.intro}
      included={webMaintenancePageContent.included}
      hubLabel={webMaintenancePageContent.hubLabel}
      hubTitle={webMaintenancePageContent.hubTitle}
      details={webMaintenanceDetails}
      cross={webMaintenancePageContent.cross}
    />
  );
}
