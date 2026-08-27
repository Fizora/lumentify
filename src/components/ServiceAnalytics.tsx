"use client";

import { useMemo, useState } from "react";
import {
  LuTrendingUp,
  LuPhoneCall,
  LuServer,
  LuBadgeDollarSign,
} from "react-icons/lu";
import { mrrPlans } from "@/components/constant/data";

type RangeKey = "7" | "30" | "90";

const RANGE_LABELS: Record<RangeKey, string> = {
  "7": "7 Days",
  "30": "30 Days",
  "90": "90 Days",
};

// Dummy — replace with the client's actual active plan
const activePlan = mrrPlans[1]; // "Local Dominance" — $199/mo
const MONTHLY_COST = 199;

// Dummy per-day averages — replace with real data from form submissions, uptime logs, etc.
const DAILY = {
  leads: 0.9,
  hoursSaved: 0.4,
  estimatedValue: 22,
};

const ServiceAnalytics = () => {
  const [range, setRange] = useState<RangeKey>("30");
  const days = Number(range);

  const stats = useMemo(() => {
    const leads = Math.round(DAILY.leads * days);
    const hoursSaved = Math.round(DAILY.hoursSaved * days * 10) / 10;
    const estimatedValue = Math.round(DAILY.estimatedValue * days);
    const costForPeriod = Math.round((MONTHLY_COST / 30) * days);
    const roiMultiplier =
      Math.round((estimatedValue / costForPeriod) * 10) / 10;

    return { leads, hoursSaved, estimatedValue, costForPeriod, roiMultiplier };
  }, [days]);

  return (
    <div className="border border-zinc-200 rounded-lg p-5 sm:p-6 mb-10">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5">
        <div>
          <h2 className="font-bold text-zinc-900">
            Value Your {activePlan.name} Plan Is Generating
          </h2>
          <p className="text-sm text-zinc-500">
            Estimated from your website activity and time saved on manual work.
          </p>
        </div>
        <div className="inline-flex rounded-md border border-zinc-200 p-1 w-max">
          {(Object.keys(RANGE_LABELS) as RangeKey[]).map((key) => (
            <button
              key={key}
              onClick={() => setRange(key)}
              className={`px-3 py-1.5 text-xs font-semibold rounded transition-colors duration-200 ${
                range === key
                  ? "bg-zinc-900 text-white"
                  : "text-zinc-500 hover:bg-zinc-100"
              }`}
            >
              {RANGE_LABELS[key]}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-5">
        <div className="p-4 rounded-md bg-zinc-50">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-zinc-500">Leads from website</span>
            <LuPhoneCall className="text-zinc-400" size={16} />
          </div>
          <p className="text-2xl font-bold text-zinc-900">{stats.leads}</p>
        </div>
        <div className="p-4 rounded-md bg-zinc-50">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-zinc-500">Hours saved</span>
            <LuTrendingUp className="text-zinc-400" size={16} />
          </div>
          <p className="text-2xl font-bold text-zinc-900">
            {stats.hoursSaved} hrs
          </p>
        </div>
        <div className="p-4 rounded-md bg-zinc-50">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-zinc-500">
              Service cost this period
            </span>
            <LuServer className="text-zinc-400" size={16} />
          </div>
          <p className="text-2xl font-bold text-zinc-900">
            ${stats.costForPeriod}
          </p>
        </div>
        <div className="p-4 rounded-md bg-emerald-50">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-emerald-700">
              Estimated value generated
            </span>
            <LuBadgeDollarSign className="text-emerald-600" size={16} />
          </div>
          <p className="text-2xl font-bold text-emerald-700">
            ${stats.estimatedValue}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3 p-4 rounded-md bg-zinc-900 text-white">
        <LuTrendingUp size={20} className="text-emerald-400 shrink-0" />
        <p className="text-sm">
          For every <span className="font-bold">$1</span> you spend on this
          plan, you're generating roughly{" "}
          <span className="font-bold text-emerald-400">
            ${stats.roiMultiplier}
          </span>{" "}
          in value back to your business over the last{" "}
          {RANGE_LABELS[range].toLowerCase()}.
        </p>
      </div>

      <p className="text-[11px] text-zinc-400 mt-3">
        *Estimates based on historical averages from similar projects, not a
        guarantee of results.
      </p>
    </div>
  );
};

export default ServiceAnalytics;
