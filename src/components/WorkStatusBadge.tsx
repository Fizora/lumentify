// src/components/WorkStatusBadge.tsx
"use client";

import { useEffect, useState } from "react";

const WORK_HOURS = { start: 9, end: 18, days: [1, 2, 3, 4, 5] } as const;
const TZ_OFFSET = 7; // GMT+7

type WorkStatus = {
  isOpen: boolean;
  localHour: number;
  localDay: number;
};

type WorkStatusBadgeProps = {
  variant?: "compact" | "full";
};

const getStatus = (): WorkStatus => {
  const now = new Date();
  const gmt7 = new Date(
    now.getTime() + (TZ_OFFSET * 60 + now.getTimezoneOffset()) * 60000,
  );
  const day = gmt7.getDay();
  const hour = gmt7.getHours();
  const isOpen =
    (WORK_HOURS.days as readonly number[]).includes(day) &&
    hour >= WORK_HOURS.start &&
    hour < WORK_HOURS.end;
  return { isOpen, localHour: hour, localDay: day };
};

export default function WorkStatusBadge({
  variant = "full",
}: WorkStatusBadgeProps) {
  // ✅ Beri tipe generik eksplisit: WorkStatus | null
  const [status, setStatus] = useState<WorkStatus | null>(null);

  useEffect(() => {
    setStatus(getStatus());
    const id = setInterval(() => setStatus(getStatus()), 60_000);
    return () => clearInterval(id);
  }, []);

  if (!status) return null;
  const { isOpen } = status;

  const dot = (
    <span className="relative flex h-2 w-2">
      {isOpen && (
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
      )}
      <span
        className={`relative inline-flex rounded-full h-2 w-2 ${
          isOpen ? "bg-emerald-500" : "bg-amber-500"
        }`}
      />
    </span>
  );

  if (variant === "compact") {
    return (
      <span className="inline-flex items-center gap-2 text-xs text-zinc-400">
        {dot}
        {isOpen ? "Open now" : "Closed"}
      </span>
    );
  }

  return (
    <span className="inline-flex items-center gap-2 text-xs">
      {dot}
      <span className={isOpen ? "text-emerald-400" : "text-amber-400"}>
        {isOpen ? "Open now" : "Closed"}
      </span>
      <span className="text-zinc-600">·</span>
      <span className="text-zinc-500">Mon–Fri, 09:00–18:00 (GMT+7)</span>
    </span>
  );
}
