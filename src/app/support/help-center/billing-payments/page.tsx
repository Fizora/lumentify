"use client";

import { motion } from "motion/react";
import Link from "next/link";
import {
  LuCreditCard,
  LuShieldCheck,
  LuRefreshCw,
  LuArrowLeft,
} from "react-icons/lu";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Skathes from "@/components/Skathes";
import CTA from "@/components/sections/CTA";

export default function BillingPaymentsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white text-zinc-900 border-b">
        {/* Header Container */}
        <div className="mx-auto max-w-300 py-15 px-4 border-x">
          <div className="max-w-3xl mx-auto pt-16 pb-10">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="space-y-4 pb-10"
            >
              <div className="flex items-center justify-between">
                <span className="inline-block text-xs font-medium tracking-widest uppercase text-zinc-600 bg-zinc-100 px-4 py-1.5 rounded-full">
                  Billing & Payments
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-black leading-tight">
                Secure Global Payments via PayPal & Wise
              </h1>
              <p className="text-sm text-zinc-600 leading-relaxed">
                Everything you need to know about our milestone deposits,
                transparent invoicing, and accepted international payment
                methods.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Article Body Content */}
        <div className="mx-auto max-w-300 px-4 border-x pb-16">
          <motion.article
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="max-w-3xl mx-auto space-y-12 text-zinc-700 leading-relaxed text-sm text-left pt-10"
          >
            {/* Section 1: Overview */}
            <section className="space-y-4">
              <h2 className="text-xl md:text-2xl font-medium text-black tracking-tight">
                Transparent & Secure International Billing
              </h2>
              <p>
                Operating across borders requires financial infrastructure that
                is both secure and cost-effective for trade businesses. To
                protect your transactions and eliminate hidden intermediary
                fees, Lexentify exclusively processes project invoices and
                subscription tiers through two trusted global platforms:{" "}
                <strong className="text-black">Wise</strong> and{" "}
                <strong className="text-black">PayPal</strong>.
              </p>
            </section>

            {/* Section 2: Milestone Deposits */}
            <section className="space-y-4 pt-6  ">
              <h2 className="text-xl md:text-2xl font-medium text-black tracking-tight">
                Milestone Deposits & Refund Policy
              </h2>
              <p>
                Our payment structure is divided into clean, predictable
                milestones to protect both your investment and our development
                time:
              </p>
              <ul className="space-y-3 list-disc pl-5 text-zinc-600">
                <li>
                  <strong className="text-black">
                    Initial Deposit (50% Milestone):
                  </strong>{" "}
                  Paid via Wise or PayPal after your SOW and MSA are signed.
                  This initiates the design phase.{" "}
                  <strong className="text-black">
                    This deposit is 100% refundable
                  </strong>{" "}
                  if the preliminary design direction does not meet your
                  expectations.
                </li>
                <li>
                  <strong className="text-black">
                    Final Balance (50% Handover):
                  </strong>{" "}
                  Due only upon final review of the staging site, right before
                  your custom domain goes live and all code ownership assets
                  transfer entirely to you.
                </li>
              </ul>
            </section>

            {/* Section 3: Subscriptions */}
            <section className="space-y-4 pt-6  ">
              <h2 className="text-xl md:text-2xl font-medium text-black tracking-tight">
                Monthly Subscriptions & Maintenance
              </h2>
              <p>
                For clients enrolled in our ongoing maintenance plans (Core Tech
                & Care, Local Dominance, or Growth Partner), subscriptions are
                billed automatically each month via secure card processing. You
                may pause or cancel your recurring maintenance agreement at any
                time with zero long-term lock-in penalties.
              </p>
            </section>
          </motion.article>
        </div>

        {/* 2 Card Payment Methods (Sesuai Permintaan) */}
        <section className="mx-auto max-w-300 px-4 py-12 border-x   bg-zinc-50/50">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-sm font-medium tracking-widest uppercase text-zinc-500 mb-6 text-center">
              Accepted Payment Gateways
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Wise Card */}
              <div className="border  rounded-md p-6 bg-white space-y-3 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-zinc-600 bg-zinc-100 px-2.5 py-1 rounded mb-3">
                    Recommended (Lowest Fee)
                  </div>
                  <h4 className="text-base font-medium text-black flex items-center gap-2">
                    <LuCreditCard className="w-4 h-4 text-zinc-900" />
                    Wise Multi-Currency Transfer
                  </h4>
                  <p className="text-xs text-zinc-600 leading-relaxed mt-2">
                    Ideal for international bank transfers with real exchange
                    rates and ultra-low conversion fees. Direct, secure, and
                    fast.
                  </p>
                  <ul className="space-y-1.5 text-xs text-zinc-600 mt-4 pt-3  border-zinc-100">
                    <li>• Direct transfer link provided on invoice</li>
                    <li>• Supports AUD, USD, GBP, NZD, and EUR</li>
                    <li>• Zero hidden intermediary banking fees</li>
                  </ul>
                </div>
              </div>

              {/* PayPal Card */}
              <div className="border  rounded-md p-6 bg-white space-y-3 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-zinc-600 bg-zinc-100 px-2.5 py-1 rounded mb-3">
                    Instant Protection
                  </div>
                  <h4 className="text-base font-medium text-black flex items-center gap-2">
                    <LuShieldCheck className="w-4 h-4 text-zinc-900" />
                    PayPal Secure Checkout
                  </h4>
                  <p className="text-xs text-zinc-600 leading-relaxed mt-2">
                    Standard secure digital payments utilizing credit/debit
                    cards or your existing PayPal balance with buyer protection.
                  </p>
                  <ul className="space-y-1.5 text-xs text-zinc-600 mt-4 pt-3  border-zinc-100">
                    <li>• Billed securely via digital invoice link</li>
                    <li>• Backed by standard PayPal buyer protection</li>
                    <li>• Major credit and debit cards accepted</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Disekat Skathes dan CTA di tengah sesuai struktur Help Center */}
      <Skathes />
      <CTA />
      <Skathes />
      <Footer />
    </>
  );
}
