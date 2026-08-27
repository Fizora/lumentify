import DashboardLayout from "@/components/DashboardLayout";
import DashboardPageHeader from "@/components/DashboardPageHeader";
import DocumentsList from "@/components/DocumentsList";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Documents - Control Panel",
};

export default function DocumentsDashboard() {
  return (
    <DashboardLayout>
      <DashboardPageHeader
        title="Documents"
        description="Your signed agreements — Statement of Work (SOW) and Master Service Agreement (MSA)."
      />
      <DocumentsList />
    </DashboardLayout>
  );
}
