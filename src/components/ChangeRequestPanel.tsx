"use client";

import { useMemo, useState } from "react";
import { LuCircleDashed, LuClock, LuCheck, LuPlus } from "react-icons/lu";

type RequestStatus = "Submitted" | "In Progress" | "Done";

type ChangeRequest = {
  id: number;
  title: string;
  detail: string;
  status: RequestStatus;
  date: string;
};

// Dummy — replace with the client's actual revision quota from their plan (buildPlans/mrrPlans)
const REVISION_QUOTA = 4; // Pro plan = "4 Rounds of Revisions"

const initialRequests: ChangeRequest[] = [
  {
    id: 1,
    title: "Change booking button color to blue",
    detail: "Requested on the Services page — matches brand palette.",
    status: "Done",
    date: "22 Aug 2026",
  },
  {
    id: 2,
    title: "Add second phone number to header",
    detail: "For the after-hours emergency line.",
    status: "In Progress",
    date: "24 Aug 2026",
  },
];

const statusMeta: Record<
  RequestStatus,
  { icon: typeof LuCheck; className: string }
> = {
  Submitted: { icon: LuCircleDashed, className: "bg-zinc-100 text-zinc-500" },
  "In Progress": { icon: LuClock, className: "bg-amber-600 text-white" },
  Done: { icon: LuCheck, className: "bg-emerald-600 text-white" },
};

const ChangeRequestPanel = () => {
  const [requests, setRequests] = useState<ChangeRequest[]>(initialRequests);
  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");

  const usedCount = requests.length;
  const remaining = Math.max(REVISION_QUOTA - usedCount, 0);
  const isQuotaFull = remaining === 0;

  const progressPercent = useMemo(
    () => Math.min(Math.round((usedCount / REVISION_QUOTA) * 100), 100),
    [usedCount],
  );

  const handleSubmit = () => {
    if (!title.trim() || isQuotaFull) return;
    const newRequest: ChangeRequest = {
      id: requests.length + 1,
      title: title.trim(),
      detail: detail.trim() || "No additional details provided.",
      status: "Submitted",
      date: new Date().toLocaleDateString("en-AU", {
        day: "numeric",
        month: "short",
        year: "numeric",
      }),
    };
    setRequests((prev) => [newRequest, ...prev]);
    setTitle("");
    setDetail("");
    setShowForm(false);
  };

  return (
    <div className="border border-zinc-200 rounded-lg p-5 sm:p-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
        <div>
          <h2 className="font-bold text-zinc-900">Change Requests</h2>
          <p className="text-sm text-zinc-500">
            Track revisions you've requested for this project.
          </p>
        </div>
        <button
          onClick={() => setShowForm((v) => !v)}
          disabled={isQuotaFull}
          className={`flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-md transition-colors duration-200 shrink-0 ${
            isQuotaFull
              ? "bg-zinc-100 text-zinc-400 cursor-not-allowed"
              : "bg-zinc-900 text-white hover:bg-zinc-800"
          }`}
        >
          <LuPlus size={14} />
          New Request
        </button>
      </div>

      {/* Quota bar */}
      <div className="mb-5">
        <div className="flex items-center justify-between text-xs text-zinc-500 mb-1.5">
          <span>
            {usedCount} of {REVISION_QUOTA} revisions used
          </span>
          <span>{remaining} remaining</span>
        </div>
        <div className="w-full h-1.5 bg-zinc-100 rounded-full overflow-hidden">
          <div
            className={`h-full rounded-full transition-all duration-500 ${
              isQuotaFull ? "bg-red-400" : "bg-zinc-900"
            }`}
            style={{ width: `${progressPercent}%` }}
          />
        </div>
        {isQuotaFull && (
          <p className="text-xs text-red-500 mt-1.5">
            You've used all included revisions. Additional requests will be
            quoted separately.
          </p>
        )}
      </div>

      {/* New request form */}
      {showForm && (
        <div className="border border-zinc-200 rounded-md p-4 mb-5 flex flex-col gap-3">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="What would you like changed?"
            className="border border-zinc-200 rounded-md px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-zinc-800"
          />
          <textarea
            value={detail}
            onChange={(e) => setDetail(e.target.value)}
            placeholder="Add any details that help us understand the request (optional)"
            rows={3}
            className="border border-zinc-200 rounded-md px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-zinc-800 resize-none"
          />
          <div className="flex justify-end gap-2">
            <button
              onClick={() => setShowForm(false)}
              className="text-xs font-semibold px-3 py-2 rounded-md border border-zinc-200 hover:bg-zinc-50 transition-colors duration-200"
            >
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              disabled={!title.trim()}
              className="text-xs font-semibold px-3 py-2 rounded-md bg-zinc-900 text-white hover:bg-zinc-800 transition-colors duration-200 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Submit Request
            </button>
          </div>
        </div>
      )}

      {/* Request list */}
      <div className="flex flex-col gap-3">
        {requests.map((req) => {
          const { icon: Icon, className } = statusMeta[req.status];
          return (
            <div
              key={req.id}
              className="flex items-start gap-3 p-3 rounded-md bg-zinc-50"
            >
              <span className={`shrink-0 p-1.5 rounded-full ${className}`}>
                <Icon size={14} />
              </span>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <p className="text-sm font-semibold text-zinc-900 truncate">
                    {req.title}
                  </p>
                  <span className="text-[10px] text-zinc-400 shrink-0">
                    {req.date}
                  </span>
                </div>
                <p className="text-xs text-zinc-500 mt-0.5">{req.detail}</p>
                <span
                  className={`inline-block mt-1.5 text-[10px] font-semibold px-2 py-0.5 rounded-full ${className}`}
                >
                  {req.status}
                </span>
              </div>
            </div>
          );
        })}
        {requests.length === 0 && (
          <p className="text-sm text-zinc-400 text-center py-6">
            No change requests yet.
          </p>
        )}
      </div>
    </div>
  );
};

export default ChangeRequestPanel;
