import { mrrPlans } from "@/components/constant/data";
import DashboardLayout from "@/components/DashboardLayout";
import PricingCardsGrid from "@/components/pricing/PricingCardsGrid";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard Panel - Lumentify",
};

export default function DashboardPanel() {
  return (
    <DashboardLayout>
      <div className="border border-zinc-200 rounded-lg h-full w-full overflow-hidden p-5">
        <div className="border border-zinc-200 rounded-lg p-2 min-h-52 md:text-center flex flex-col justify-center mb-10">
          <h2 className="text-4xl font-bold text-black">
            Maintain Your Website
          </h2>
          <p className="">
            take care your website with pay monthly and never worry about your
            site.{" "}
          </p>
        </div>
        <PricingCardsGrid
          plans={mrrPlans}
          featuredBadgeLabel="Best Value"
          showBilledMonthlyNote
        />
      </div>
    </DashboardLayout>
  );
}
