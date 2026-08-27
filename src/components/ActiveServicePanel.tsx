"use client";

import { useMemo, useState } from "react";
import {
  LuCalendarClock,
  LuLock,
  LuLockOpen,
  LuTriangleAlert,
} from "react-icons/lu";
import { mrrPlans } from "@/components/constant/data";

// Dummy — replace with the client's actual subscription start date from the database
const SUBSCRIPTION_START = new Date("2026-08-01");
const MIN_COMMITMENT_DAYS = 30;

// Dummy — replace with the plan the client actually subscribed to
const activePlan = mrrPlans[1]; // "Local Dominance" — $199/mo

const ActiveServicePanel = () => {
  const [showConfirm, setShowConfirm] = useState(false);
  const [cancelled, setCancelled] = useState(false);

  const { daysActive, daysUntilUnlocked, isUnlocked, nextBillingDate } =
    useMemo(() => {
      const now = new Date();
      const diffMs = now.getTime() - SUBSCRIPTION_START.getTime();
      const daysActive = Math.max(
        Math.floor(diffMs / (1000 * 60 * 60 * 24)),
        0,
      );
      const daysUntilUnlocked = Math.max(MIN_COMMITMENT_DAYS - daysActive, 0);
      const isUnlocked = daysActive >= MIN_COMMITMENT_DAYS;

      const next = new Date(SUBSCRIPTION_START);
      while (next.getTime() <= now.getTime()) {
        next.setMonth(next.getMonth() + 1);
      }

      return {
        daysActive,
        daysUntilUnlocked,
        isUnlocked,
        nextBillingDate: next,
      };
    }, []);

  if (cancelled) {
    return (
      <div className="border border-zinc-200 rounded-lg p-6 flex items-center gap-3 bg-zinc-50 mb-6">
        <LuTriangleAlert className="text-amber-500 shrink-0" size={20} />
        <p className="text-sm text-zinc-600">
          Your cancellation request has been received. Your service stays active
          until{" "}
          {nextBillingDate.toLocaleDateString("en-AU", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
          , with no further charges after that.
        </p>
      </div>
    );
  }

  return (
    <div className="border border-zinc-200 rounded-lg p-5 sm:p-6 mb-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5">
        <div>
          <p className="text-xs text-zinc-500 mb-1">Active plan</p>
          <p className="font-bold text-lg text-zinc-900">
            {activePlan.name} — {activePlan.price}
            {activePlan.period}
          </p>
        </div>
        <span className="w-max text-xs font-semibold uppercase tracking-wide bg-emerald-50 text-emerald-600 px-3 py-1 rounded-full">
          Active
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-5">
        <div className="flex items-center gap-3 p-3 rounded-md bg-zinc-50">
          <LuCalendarClock className="text-zinc-500 shrink-0" size={18} />
          <div>
            <p className="text-xs text-zinc-500">Next billing date</p>
            <p className="text-sm font-semibold text-zinc-900">
              {nextBillingDate.toLocaleDateString("en-AU", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3 p-3 rounded-md bg-zinc-50">
          {isUnlocked ? (
            <LuLockOpen className="text-emerald-500 shrink-0" size={18} />
          ) : (
            <LuLock className="text-zinc-500 shrink-0" size={18} />
          )}
          <div>
            <p className="text-xs text-zinc-500">Cancellation status</p>
            <p className="text-sm font-semibold text-zinc-900">
              {isUnlocked
                ? "Cancel anytime"
                : `Unlocks in ${daysUntilUnlocked} days`}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3 p-3 rounded-md bg-zinc-50">
          <span className="text-zinc-500 text-xs font-bold w-4.5 text-center shrink-0">
            {daysActive}
          </span>
          <div>
            <p className="text-xs text-zinc-500">Subscribed for</p>
            <p className="text-sm font-semibold text-zinc-900">
              {daysActive} days
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-4 border-t border-zinc-100">
        <p className="text-xs text-zinc-500 max-w-md">
          You can cancel anytime after your first month — no lock-in contracts,
          no cancellation penalties.
        </p>
        <button
          type="button"
          disabled={!isUnlocked}
          onClick={() => setShowConfirm(true)}
          className={`w-max text-sm font-semibold px-4 py-2 rounded-md transition-colors duration-300 shrink-0 ${
            isUnlocked
              ? "bg-red-50 text-red-600 hover:bg-red-100"
              : "bg-zinc-100 text-zinc-400 cursor-not-allowed"
          }`}
        >
          Cancel Subscription
        </button>
      </div>

      {showConfirm && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 max-w-sm w-full">
            <h3 className="font-bold text-zinc-900 mb-2">
              Cancel your {activePlan.name} plan?
            </h3>
            <p className="text-sm text-zinc-500 mb-5">
              Your site stays fully live until the end of your current billing
              period. No hidden fees, no cancellation penalty.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setShowConfirm(false)}
                className="flex-1 py-2 rounded-md border border-zinc-200 text-sm font-semibold hover:bg-zinc-50 transition-colors duration-300"
              >
                Keep Plan
              </button>
              <button
                onClick={() => {
                  setCancelled(true);
                  setShowConfirm(false);
                }}
                className="flex-1 py-2 rounded-md bg-red-600 text-white text-sm font-semibold hover:bg-red-700 transition-colors duration-300"
              >
                Yes, Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ActiveServicePanel;
