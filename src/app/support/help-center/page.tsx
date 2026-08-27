import { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Lumentify | Help Center",
};

const categories = [
  {
    icon: LuRocket,
    title: "Getting Started",
    desc: "Onboarding, contracts, and what happens after you sign up.",
    count: 6,
  },
  {
    icon: LuCreditCard,
    title: "Billing & Payments",
    desc: "Deposits, invoices, subscriptions, and cancellations.",
    count: 5,
  },
  {
    icon: LuWrench,
    title: "Technical Support",
    desc: "Bugs, downtime, domain, and hosting questions.",
    count: 8,
  },
  {
    icon: LuUserCog,
    title: "Account & Access",
    desc: "Login issues, dashboard access, and permissions.",
    count: 4,
  },
];

const popularArticles = [
  "How do I request a change to my live website?",
  "What happens if I miss a hosting renewal?",
  "How do I cancel my monthly plan?",
  "Where can I see my project's progress?",
  "How long does a typical build take?",
  "Can I upgrade from Essential to Pro later?",
];

export default function HelpCenter() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen px-4">
        {/* Hero + search */}
        <section className="pt-32 pb-16 mx-auto max-w-2xl text-center">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-zinc-600 bg-zinc-100 px-4 py-1.5 rounded-full mb-5">
            Help Center
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight mb-6">
            How can we help?
          </h1>
          <div className="relative">
            <LuSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search articles..."
              className="w-full border border-gray-300 pl-12 pr-4 py-3 text-sm outline-none focus:border-zinc-500"
            />
          </div>
        </section>

        {/* Categories */}
        <section className="mx-auto max-w-4xl pb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {categories.map(({ icon: Icon, title, desc, count }) => (
              <Link
                href=""
                key={title}
                className="group border border-gray-200 p-8 flex flex-col hover:border-zinc-400 transition-colors"
              >
                <Icon className="w-5 h-5 text-zinc-600 mb-4" />
                <h3 className="text-base font-bold text-black mb-2 group-hover:underline">
                  {title}
                </h3>
                <p className="text-base text-gray-600 leading-relaxed mb-4 flex-1">
                  {desc}
                </p>
                <span className="text-xs text-gray-400">{count} articles</span>
              </Link>
            ))}
          </div>
        </section>

        {/* Popular articles */}
        <section className="mx-auto max-w-3xl pb-16">
          <h2 className="text-lg font-bold text-black mb-4">
            Popular questions
          </h2>
          <div className="border border-gray-200 divide-y divide-gray-100">
            {popularArticles.map((q) => (
              <Link
                href=""
                key={q}
                className="flex items-center justify-between px-6 py-4 text-sm text-gray-700 hover:bg-zinc-50 transition-colors"
              >
                {q}
                <LuArrowRight className="w-4 h-4 text-gray-400 shrink-0" />
              </Link>
            ))}
          </div>
        </section>

        {/* Contact fallback */}
        <section className="mx-auto max-w-3xl pb-24">
          <div className="bg-zinc-50/60 border border-zinc-200 p-8 text-center">
            <p className="text-base font-semibold text-black mb-1">
              Can't find what you're looking for?
            </p>
            <p className="text-base text-gray-600 mb-4">
              Reach out directly and we'll get back to you within 24 hours.
            </p>
            <Link
              href="/support"
              className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-700 hover:text-zinc-900"
            >
              Contact Support
              <LuArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
