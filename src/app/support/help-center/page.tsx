"use client";

import { useState } from "react";
import Link from "next/link";
import {
  LuSearch,
  LuRocket,
  LuCreditCard,
  LuWrench,
  LuUserCog,
  LuArrowRight,
} from "react-icons/lu";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Skathes from "@/components/Skathes";
import CTA from "@/components/sections/CTA";

const categories = [
  {
    icon: LuRocket,
    title: "Getting Started",
    date: "20 - 10 - 2026",
    link: "/support/help-center/getting-started",
    desc: "Onboarding, contracts, and what happens after you sign up.",
  },
  {
    icon: LuCreditCard,
    title: "Billing & Payments",
    date: "23 - 10 - 2026",
    link: "/support/help-center/billing-payments",
    desc: "Deposits, invoices, subscriptions, and cancellations.",
  },
  {
    icon: LuWrench,
    title: "Technical Support",
    date: "18 - 10 - 2026",
    link: "/support/help-center/technical-support",
    desc: "Bugs, downtime, domain, and hosting questions.",
  },
  // {
  //   icon: LuUserCog,
  //   title: "Account & Access",
  //   desc: "Login issues, dashboard access, and permissions.",
  //   count: 4,
  // },
];

const popularArticles = [
  "How do I request a change to my live website?",
  "How do I cancel my monthly plan?",
  "How long does a typical build take?",
  "How do I know these websites actually convert local customers?",
  "How does remote project delivery work seamlessly across time zones?",
  "What happens if I miss a hosting renewal?",
  "Where can I see my project's progress?",
  "Can I upgrade from Essential to Pro later?",
];

export default function HelpCenter() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredArticles =
    searchQuery.trim() === ""
      ? []
      : popularArticles.filter((article) =>
          article.toLowerCase().includes(searchQuery.toLowerCase()),
        );

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white border-b">
        {/* Hero + search */}
        <section className="pt-32 pb-16 mx-auto max-w-300 px-4 text-center border-x">
          <div className="max-w-2xl mx-auto">
            <span className="inline-block text-xs font-medium tracking-widest uppercase text-zinc-600 bg-zinc-100 px-4 py-1.5 rounded-full mb-5">
              Help Center
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium text-black tracking-tight mb-6">
              How can we help?
            </h1>
            <div className="relative">
              <LuSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles (e.g., How do I...)..."
                className="w-full border border-gray-300 pl-12 pr-4 py-3 text-sm text-black placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-black rounded-md transition-all bg-white"
              />
            </div>

            {/* Dynamic Search Filter Dropdown / Results */}
            {searchQuery.trim() !== "" && (
              <div className="mt-3 text-left border border-gray-200 rounded-md bg-white shadow-md overflow-hidden z-20">
                <div className="px-4 py-2 bg-zinc-50 border-b border-gray-100 text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Search Results ({filteredArticles.length})
                </div>
                {filteredArticles.length > 0 ? (
                  <div className="divide-y divide-gray-100">
                    {filteredArticles.map((q, idx) => (
                      <Link
                        href=""
                        key={idx}
                        className="flex items-center justify-between px-4 py-3 text-sm text-gray-800 hover:bg-zinc-50 transition-colors"
                      >
                        <span>{q}</span>
                        <LuArrowRight className="w-4 h-4 text-gray-400 shrink-0 ml-2" />
                      </Link>
                    ))}
                  </div>
                ) : (
                  <div className="px-4 py-6 text-sm text-gray-500 text-center">
                    No matching articles found. Try searching for
                    &quot;How...&quot; or reach out to support.
                  </div>
                )}
              </div>
            )}
          </div>
        </section>

        {/* Categories */}
        <section className="mx-auto max-w-300 px-4 py-12 border-x">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {categories.map(({ icon: Icon, title, desc, date, link }) => (
                <Link
                  href={`${link}`}
                  key={title}
                  className="group border border-gray-200 p-8 flex flex-col hover:border-zinc-400 transition-colors bg-white rounded-md shadow-xs"
                >
                  <Icon className="w-5 h-5 text-zinc-800 mb-4" />
                  <h3 className="text-sm font-medium text-black mb-2 group-hover:underline">
                    {title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4 flex-1">
                    {desc}
                  </p>
                  <span className="text-xs text-gray-400">
                    Last update {date}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Popular articles */}
        <section className="mx-auto max-w-300 px-4 py-12 border-x">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-lg font-medium text-black mb-4">
              Popular questions
            </h2>
            <div className="border border-gray-200 divide-y divide-gray-100 rounded-md bg-white overflow-hidden shadow-xs">
              {popularArticles.map((q) => (
                <Link
                  href="#"
                  key={q}
                  className="flex items-center justify-between px-6 py-4 text-sm text-gray-700 hover:bg-zinc-50 transition-colors"
                >
                  <span>{q}</span>
                  <LuArrowRight className="w-4 h-4 text-gray-400 shrink-0 ml-4" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Contact fallback */}
        <section className="mx-auto max-w-300 px-4 py-16 border-x">
          <div className="max-w-3xl mx-auto">
            <div className="bg-zinc-50 border border-zinc-200 p-8 text-center rounded-md">
              <p className="text-sm font-medium text-black mb-1">
                Can&apos;t find what you&apos;re looking for?
              </p>
              <p className="text-sm text-gray-600 mb-4">
                Reach out directly and we&apos;ll get back to you within 24
                hours.
              </p>
              <Link
                href="/support"
                className="inline-flex items-center gap-2 text-sm font-medium text-zinc-900 hover:underline"
              >
                Contact Support
                <LuArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Skathes />
      <CTA />
      <Skathes />
      <Footer />
    </>
  );
}
