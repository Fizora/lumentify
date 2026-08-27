"use client";

import { useMemo, useState } from "react";
import {
  LuDownload,
  LuCircleCheck,
  LuClock,
  LuTriangleAlert,
} from "react-icons/lu";

type InvoiceStatus = "Paid" | "Pending" | "Overdue";

type Invoice = {
  id: string;
  description: string;
  amount: number;
  status: InvoiceStatus;
  issueDate: string;
  dueDate: string;
};

// Dummy — replace with real invoice records from your payment provider / database
const invoices: Invoice[] = [
  {
    id: "INV-1041",
    description: "Local Dominance — September",
    amount: 199,
    status: "Pending",
    issueDate: "1 Sep 2026",
    dueDate: "8 Sep 2026",
  },
  {
    id: "INV-1032",
    description: "Local Dominance — August",
    amount: 199,
    status: "Paid",
    issueDate: "1 Aug 2026",
    dueDate: "8 Aug 2026",
  },
  {
    id: "INV-1021",
    description: "Pro Website Build — Final Payment (50%)",
    amount: 1124.5,
    status: "Paid",
    issueDate: "15 Jul 2026",
    dueDate: "22 Jul 2026",
  },
  {
    id: "INV-1004",
    description: "Pro Website Build — Deposit (50%)",
    amount: 1124.5,
    status: "Paid",
    issueDate: "1 Jul 2026",
    dueDate: "3 Jul 2026",
  },
];

const statusStyles: Record<
  InvoiceStatus,
  { badge: string; icon: typeof LuCircleCheck }
> = {
  Paid: { badge: "bg-emerald-50 text-emerald-600", icon: LuCircleCheck },
  Pending: { badge: "bg-amber-50 text-amber-600", icon: LuClock },
  Overdue: { badge: "bg-red-50 text-red-600", icon: LuTriangleAlert },
};

const filters: ("All" | InvoiceStatus)[] = [
  "All",
  "Paid",
  "Pending",
  "Overdue",
];

const InvoicesTable = () => {
  const [filter, setFilter] = useState<"All" | InvoiceStatus>("All");

  const filtered = useMemo(
    () =>
      filter === "All"
        ? invoices
        : invoices.filter((inv) => inv.status === filter),
    [filter],
  );

  const totalPaid = invoices
    .filter((inv) => inv.status === "Paid")
    .reduce((sum, inv) => sum + inv.amount, 0);
  const outstanding = invoices
    .filter((inv) => inv.status !== "Paid")
    .reduce((sum, inv) => sum + inv.amount, 0);
  const nextDue = invoices.find((inv) => inv.status !== "Paid");

  const handleDownload = (id: string) => {
    // TODO: connect to real PDF generation / storage
    console.log(`Downloading ${id}`);
  };

  return (
    <div>
      {/* Summary cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <div className="border border-zinc-200 rounded-lg p-4">
          <p className="text-xs text-zinc-500 mb-1">Total Paid</p>
          <p className="text-2xl font-bold text-zinc-900">
            ${totalPaid.toLocaleString()}
          </p>
        </div>
        <div className="border border-zinc-200 rounded-lg p-4">
          <p className="text-xs text-zinc-500 mb-1">Outstanding Balance</p>
          <p className="text-2xl font-bold text-zinc-900">
            ${outstanding.toLocaleString()}
          </p>
        </div>
        <div className="border border-zinc-200 rounded-lg p-4">
          <p className="text-xs text-zinc-500 mb-1">Next Due</p>
          <p className="text-2xl font-bold text-zinc-900">
            {nextDue ? nextDue.dueDate : "—"}
          </p>
        </div>
      </div>

      {/* Filter tabs */}
      <div className="flex gap-2 mb-4">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`text-xs font-semibold px-3 py-1.5 rounded-full border transition-colors duration-200 ${
              filter === f
                ? "bg-zinc-900 text-white border-zinc-900"
                : "border-zinc-200 text-zinc-600 hover:border-zinc-400"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Table */}
      <div className="border border-zinc-200 rounded-lg overflow-x-auto">
        <table className="w-full min-w-150 text-sm">
          <thead>
            <tr className="border-b border-zinc-200 text-left text-zinc-500">
              <th className="py-3 px-4 font-semibold">Invoice</th>
              <th className="py-3 px-4 font-semibold">Description</th>
              <th className="py-3 px-4 font-semibold">Issued</th>
              <th className="py-3 px-4 font-semibold">Due</th>
              <th className="py-3 px-4 font-semibold text-right">Amount</th>
              <th className="py-3 px-4 font-semibold">Status</th>
              <th className="py-3 px-4 font-semibold"></th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((inv) => {
              const { badge, icon: Icon } = statusStyles[inv.status];
              return (
                <tr
                  key={inv.id}
                  className="border-b border-zinc-100 last:border-0"
                >
                  <td className="py-3 px-4 font-medium text-zinc-900">
                    {inv.id}
                  </td>
                  <td className="py-3 px-4 text-zinc-600">{inv.description}</td>
                  <td className="py-3 px-4 text-zinc-500">{inv.issueDate}</td>
                  <td className="py-3 px-4 text-zinc-500">{inv.dueDate}</td>
                  <td className="py-3 px-4 text-right font-semibold text-zinc-900">
                    ${inv.amount.toLocaleString()}
                  </td>
                  <td className="py-3 px-4">
                    <span
                      className={`inline-flex items-center gap-1 text-xs font-semibold px-2 py-1 rounded-full ${badge}`}
                    >
                      <Icon size={12} />
                      {inv.status}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-right">
                    <button
                      onClick={() => handleDownload(inv.id)}
                      aria-label={`Download ${inv.id}`}
                      className="p-2 rounded-full hover:bg-zinc-100 text-zinc-500 transition-colors duration-200"
                    >
                      <LuDownload size={16} />
                    </button>
                  </td>
                </tr>
              );
            })}
            {filtered.length === 0 && (
              <tr>
                <td
                  colSpan={7}
                  className="py-8 text-center text-zinc-400 text-sm"
                >
                  No invoices in this category.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InvoicesTable;
