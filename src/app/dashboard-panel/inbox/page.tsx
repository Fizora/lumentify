import DashboardLayout from "@/components/DashboardLayout";
import DashboardPageHeader from "@/components/DashboardPageHeader";
import InboxList from "@/components/InboxList";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Inbox - Control Panel",
};

export default function InboxDashboard() {
  return (
    <DashboardLayout>
      <DashboardPageHeader
        title="Inbox"
        description="Updates on your invoices, documents, project progress, and messages — all in one place."
      />
      <InboxList />
    </DashboardLayout>
  );
}
