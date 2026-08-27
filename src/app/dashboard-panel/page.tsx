import DashboardLayout from "@/components/DashboardLayout";
import Pricing from "@/components/sections/Pricing";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard Panel - Lumentify",
};

export default function DashboardPanel() {
  return (
    <DashboardLayout>
      <div className="border border-zinc-200 rounded-lg h-full w-full overflow-hidden">
        <Pricing showMRR={true} showOneTime={false} />
      </div>
    </DashboardLayout>
  );
}
