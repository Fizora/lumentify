import DashboardLayout from "@/components/DashboardLayout";
import DashboardPageHeader from "@/components/DashboardPageHeader";
import ActiveServicePanel from "@/components/ActiveServicePanel";
import ServiceAnalytics from "@/components/ServiceAnalytics";
import PricingCardsGrid from "@/components/pricing/PricingCardsGrid";
import PricingComparisonTable from "@/components/pricing/PricingComparisonTable";
import { buildPlans, mrrPlans } from "@/components/constant/data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services - Control Panel",
};

export default function ServiceDashboard() {
  return (
    <DashboardLayout>
      <DashboardPageHeader
        title="Services"
        description="Your active plan, the value it's generating, and upgrade options from us."
      />

      <ActiveServicePanel />
      {/* <ServiceAnalytics /> */}

      {/* One-time build plans — cards then table, no toggle */}
      <div className="mb-16">
        <h2 className="text-xl font-bold text-zinc-900 mb-1">
          One-Time Build Plans
        </h2>
        <p className="text-sm text-zinc-500 mb-6">
          One payment, no subscription — for building a new website.
        </p>
        <div className="mb-8">
          <PricingCardsGrid
            plans={buildPlans}
            featuredBadgeLabel="The Best Choice"
          />
        </div>
        <PricingComparisonTable plans={buildPlans} title="Features" />
      </div>

      {/* Subscription plans — cards then table, no toggle */}
      <div>
        <h2 className="text-xl font-bold text-zinc-900 mb-1">
          Keep It Running
        </h2>
        <p className="text-sm text-zinc-500 mb-6">
          Ongoing support, hosting, and updates — cancel anytime after your
          first month.
        </p>
        <div className="mb-8">
          <PricingCardsGrid
            plans={mrrPlans}
            featuredBadgeLabel="Best Value"
            showBilledMonthlyNote
          />
        </div>
        <PricingComparisonTable plans={mrrPlans} title="Features" />
      </div>
    </DashboardLayout>
  );
}
