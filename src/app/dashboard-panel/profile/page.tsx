import DashboardLayout from "@/components/DashboardLayout";
import DashboardPageHeader from "@/components/DashboardPageHeader";
import ProfileForm from "@/components/ProfileForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Profile - Control Panel",
};

export default function ProfileDashboard() {
  return (
    <DashboardLayout>
      <DashboardPageHeader
        title="Profile"
        description="Your account and business details — used on invoices, documents, and communication."
      />
      <ProfileForm />
    </DashboardLayout>
  );
}
