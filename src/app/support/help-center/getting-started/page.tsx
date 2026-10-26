"use client";

import { motion } from "motion/react";
import Link from "next/link";
import {
  LuFileText,
  LuSend,
  LuSignature,
  LuMessageSquareCode,
  LuCircleCheck,
  LuShieldAlert,
  LuArrowRight,
} from "react-icons/lu";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Skathes from "@/components/Skathes";
import CTA from "@/components/sections/CTA";

export default function GettingStartedPage() {
  return (
    <>
      <Navbar />
      <main className=" bg-white text-zinc-900 selection:bg-black selection:text-white border-b text-sm">
        <div className="min-h-screen mx-auto py-20 max-w-300 border-x">
          {/* Header Container */}
          <div className="mx-auto px-4 sm:px-6 border-zinc-200">
            <div className="max-w-3xl mx-auto pt-16 pb-10">
              <span className="inline-flex items-center gap-1.5 text-xs font-medium tracking-widest uppercase text-zinc-600 bg-zinc-100 px-4 py-1.5 rounded-full mb-5">
                Getting Started
              </span>
              {/* Title & Intro */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="space-y-4 pb-10"
              >
                <h1 className="text-3xl md:text-4xl lg:text-5xl  tracking-tight text-black leading-tight">
                  How to Start Your Project: From Brief to Launch
                </h1>
                <p className=" text-zinc-600 leading-relaxed">
                  A transparent walkthrough of working with Lexentify. Learn how
                  our risk-free onboarding, structured agreements, and
                  collaborative development workflow ensure high-converting
                  results for your trade business.
                </p>
              </motion.div>
            </div>
          </div>

          {/* Article Body Content */}
          <div className="mx-auto max-w-7xl px-4 sm:px-6  border-zinc-200 pb-20">
            <motion.article
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="max-w-3xl mx-auto space-y-12 text-zinc-700 leading-relaxed  text-left pt-12"
            >
              {/* Section 1: Overview Workflow */}
              <section className="space-y-6">
                <h2 className="text-2xl  text-black tracking-tight flex items-center gap-3">
                  <span className="flex items-center justify-center w-7 h-7 rounded-full bg-zinc-900 text-white text-xs font-medium">
                    1
                  </span>
                  The Complete End-to-End Workflow
                </h2>
                <p className="">
                  We believe in absolute transparency and zero financial risk
                  upfront. You never pay a single dollar until you’ve reviewed
                  our formal documentation and agreed to the exact scope. Here
                  is the 5-step journey of your project:
                </p>

                <div className="grid grid-cols-1 gap-4 my-6">
                  {/* Step 1 */}
                  <div className="p-5 border border-zinc-200 rounded-md bg-zinc-50/50 flex items-start gap-4">
                    <div className="p-2.5 bg-white border border-zinc-200 rounded-md shadow-2xs text-zinc-900 shrink-0">
                      <LuSend className="w-4 h-4" />
                    </div>
                    <div className="space-y-1">
                      <h3 className=" text-black ">
                        Step 1: Onboarding Brief Submission
                      </h3>
                      <p className=" text-zinc-600 leading-relaxed">
                        Fill out our project scope form with your trade details,
                        package selection, and target service area. No upfront
                        payment or credit card is required at this stage.
                      </p>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="p-5 border border-zinc-200 rounded-md bg-zinc-50/50 flex items-start gap-4">
                    <div className="p-2.5 bg-white border border-zinc-200 rounded-md shadow-2xs text-zinc-900 shrink-0">
                      <LuFileText className="w-4 h-4" />
                    </div>
                    <div className="space-y-1">
                      <h3 className=" text-black ">
                        Step 2: Technical Review & Proposal (MSA + SOW)
                      </h3>
                      <p className=" text-zinc-600 leading-relaxed">
                        Our engineering team reviews your brief within 1
                        business day. We prepare and email your customized
                        Master Services Agreement (MSA) and Statement of Work
                        (SOW).
                      </p>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="p-5 border border-zinc-200 rounded-md bg-zinc-50/50 flex items-start gap-4">
                    <div className="p-2.5 bg-white border border-zinc-200 rounded-md shadow-2xs text-zinc-900 shrink-0">
                      <LuSignature className="w-4 h-4" />
                    </div>
                    <div className="space-y-1">
                      <h3 className=" text-black ">
                        Step 3: Digital Signing & Refundable Milestone
                      </h3>
                      <p className=" text-zinc-600 leading-relaxed">
                        Review and sign the agreements. Your initial modest
                        deposit initiates the design phase.{" "}
                        <strong className="text-black">
                          If the initial design direction doesn&apos;t align
                          with your vision, your deposit is 100% refunded.
                        </strong>
                      </p>
                    </div>
                  </div>

                  {/* Step 4 */}
                  <div className="p-5 border border-zinc-200 rounded-md bg-zinc-50/50 flex items-start gap-4">
                    <div className="p-2.5 bg-white border border-zinc-200 rounded-md shadow-2xs text-zinc-900 shrink-0">
                      <LuMessageSquareCode className="w-4 h-4" />
                    </div>
                    <div className="space-y-1">
                      <h3 className=" text-black ">
                        Step 4: Design & Development Collaboration
                      </h3>
                      <p className=" text-zinc-600 leading-relaxed">
                        Direct communication channel setup
                        (WhatsApp/Slack/Email). We build your high-converting
                        trade site using modern frameworks (Next.js & Tailwind
                        CSS) with regular progress updates.
                      </p>
                    </div>
                  </div>

                  {/* Step 5 */}
                  <div className="p-5 border border-zinc-200 rounded-md bg-zinc-50/50 flex items-start gap-4">
                    <div className="p-2.5 bg-white border border-zinc-200 rounded-md shadow-2xs text-zinc-900 shrink-0">
                      <LuCircleCheck className="w-4 h-4" />
                    </div>
                    <div className="space-y-1">
                      <h3 className=" text-black ">
                        Step 5: Final Review, Handover & Launch
                      </h3>
                      <p className=" text-zinc-600 leading-relaxed">
                        Review the staging site, approve final adjustments,
                        settle remaining balance, and go live on your custom
                        domain backed by our stabilization support.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 2: Understanding MSA & SOW */}
              <section className="space-y-6 pt-6 border-t border-zinc-200">
                <h2 className="text-2xl  text-black tracking-tight flex items-center gap-3">
                  <span className="flex items-center justify-center w-7 h-7 rounded-full bg-zinc-900 text-white text-xs font-medium">
                    2
                  </span>
                  Understanding MSA and SOW Documentation
                </h2>
                <p>
                  To protect both parties and ensure crystal-clear expectations,
                  every project relies on two core legal and technical documents
                  sent after your onboarding brief:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-4">
                  {/* MSA Box */}
                  <div className="border border-zinc-200 rounded-md p-6 bg-white space-y-3 shadow-xs">
                    <div className="inline-flex items-center gap-2 text-xs  uppercase tracking-wider text-zinc-600 bg-zinc-100 px-2.5 py-1 rounded">
                      Legal Framework
                    </div>
                    <h3 className="  text-black">
                      Master Services Agreement (MSA)
                    </h3>
                    <p className=" text-zinc-600 leading-relaxed">
                      The overarching contract governing our general business
                      relationship, intellectual property ownership,
                      confidentiality, and liability terms.
                    </p>
                    <ul className="space-y-2  text-zinc-600 pt-2 border-t border-zinc-100">
                      <li className="flex items-start gap-2">
                        <span className="text-black ">•</span>
                        <span>
                          <strong className="text-black">IP Ownership:</strong>{" "}
                          You retain 100% ownership of your final source code
                          and domain assets upon final payment.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-black ">•</span>
                        <span>
                          <strong className="text-black">
                            Confidentiality:
                          </strong>{" "}
                          Strict non-disclosure of your business data and
                          customer leads.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-black ">•</span>
                        <span>
                          <strong className="text-black">Stabilization:</strong>{" "}
                          Dedicated post-launch support and system fine-tuning
                          window.
                        </span>
                      </li>
                    </ul>
                  </div>

                  {/* SOW Box */}
                  <div className="border border-zinc-200 rounded-md p-6 bg-white space-y-3 shadow-xs">
                    <div className="inline-flex items-center gap-2 text-xs  uppercase tracking-wider text-zinc-600 bg-zinc-100 px-2.5 py-1 rounded">
                      Project Specifics
                    </div>
                    <h3 className="  text-black">Statement of Work (SOW)</h3>
                    <p className=" text-zinc-600 leading-relaxed">
                      The technical scope document tailored specifically to your
                      brief submission. It outlines deliverables, milestones,
                      and timeline constraints.
                    </p>
                    <ul className="space-y-2  text-zinc-600 pt-2 border-t border-zinc-100">
                      <li className="flex items-start gap-2">
                        <span className="text-black ">•</span>
                        <span>
                          <strong className="text-black">
                            Scope & Features:
                          </strong>{" "}
                          Exact page counts, contact forms, and target service
                          suburbs.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-black ">•</span>
                        <span>
                          <strong className="text-black">
                            Milestone Schedule:
                          </strong>{" "}
                          Clear timeline breakdown and target delivery date.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-black ">•</span>
                        <span>
                          <strong className="text-black">
                            Pricing Breakdown:
                          </strong>{" "}
                          Transparent breakdown of package costs and payment
                          milestones.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Section 3: Risk-Free Guarantee */}
              <section className="space-y-4 pt-6 border-t border-zinc-200">
                <h2 className="text-2xl  text-black tracking-tight flex items-center gap-3">
                  <span className="flex items-center justify-center w-7 h-7 rounded-full bg-zinc-900 text-white text-xs font-medium">
                    3
                  </span>
                  No Financial Risk Guarantee
                </h2>
                <div className="bg-zinc-50 border border-zinc-200 p-5 rounded-md flex items-start gap-3">
                  <LuShieldAlert className="w-5 h-5 text-black shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <h4 className="  text-black">
                      Zero Upfront Financial Obligation
                    </h4>
                    <p className=" text-zinc-600 leading-relaxed">
                      Submitting your brief on the onboarding page does not lock
                      you into any financial commitment. We review your
                      requirements first, draft the SOW, and only begin billable
                      development after mutual digital agreement and invoice
                      issuance, backed by our 100% refundable design milestone
                      policy.
                    </p>
                  </div>
                </div>
              </section>

              {/* Call to Action Footer Box */}
              <div className="mt-12 p-8 border border-zinc-200 bg-zinc-900 text-white rounded-md text-center space-y-4 shadow-xs">
                <h3 className="text-xl md:text-2xl  tracking-tight">
                  Ready to grow your trade business?
                </h3>
                <p className=" text-zinc-400 max-w-md mx-auto leading-relaxed">
                  Submit your project brief now to secure your spot. No upfront
                  payment required.
                </p>
                <div className="pt-2">
                  <Link
                    href="/auth/signup"
                    className="inline-flex items-center justify-center gap-2 bg-white text-zinc-900 hover:bg-zinc-100   px-6 py-3 rounded-md transition-colors"
                  >
                    Start Your Project Brief
                    <LuArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.article>
          </div>
        </div>
      </main>
      <Skathes />
      <CTA />
      <Skathes />
      <Footer />
    </>
  );
}
