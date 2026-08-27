import DashboardLayout from "@/components/DashboardLayout";
import DashboardPageHeader from "@/components/DashboardPageHeader";
import SettingsPanel from "@/components/SettingsPanel";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Settings - Control Panel",
};

export default function SettingsDashboard() {
  return (
    <DashboardLayout>
      <DashboardPageHeader
        title="Settings"
        description="Manage your password, notification preferences, and account."
      />
      <SettingsPanel />
    </DashboardLayout>
  );
}
