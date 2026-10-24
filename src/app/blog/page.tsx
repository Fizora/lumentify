import { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { LuCalendar, LuArrowRight, LuNewspaper } from "react-icons/lu";
import Link from "next/link";

const blogArticles = [
  {
    title: "How do I request a change to my live website?",
    excerpt:
      "Learn how to submit content updates, styling tweaks, or structural modifications through our asynchronous workflow and direct client dashboard channels.",
    category: "Getting Started",
    date: "20 - 08 - 2026",
    href: "/support/help-center",
  },
  {
    title: "How do I cancel my monthly plan?",
    excerpt:
      "Understand the flexible terms surrounding our monthly maintenance plans, cancellation policies, and how data ownership remains 100% yours.",
    category: "Billing & Payments",
    date: "12 - 08 - 2026",
    href: "/support/help-center",
  },
  {
    title: "What happens if I miss a hosting renewal?",
    excerpt:
      "A quick guide on our secure hosting infrastructure grace periods, automatic renewals, and how we ensure zero downtime for your active trade business.",
    category: "Technical Support",
    date: "3 - 08 - 2026",
    href: "/support/help-center",
  },
  {
    title: "Can I upgrade from Essential to Pro later?",
    excerpt:
      "Find out how you can seamlessly expand your single-page landing site into a full multi-suburb digital asset as your trade business grows.",
    category: "Account & Access",
    date: "28 - 07 - 2026",
    href: "/support/help-center",
  },
];

export const metadata: Metadata = {
  title: "Lexentify | Blog & Help Guides",
};

export default function Blog() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">
        <section className="pt-32 pb-20 mx-auto max-w-300 px-4 border-x border-b">
          <div className="text-center space-y-3 mb-12">
            <span className="inline-block text-xs font-medium tracking-widest uppercase text-zinc-600 bg-zinc-100 px-4 py-1.5 rounded-full mb-2">
              Guides & Updates
            </span>
            <h1 className="text-3xl md:text-4xl font-medium text-black tracking-tight">
              Blog & Help Articles
            </h1>
            <p className="text-sm text-gray-600 max-w-2xl mx-auto leading-relaxed">
              The latest insights, workflow instructions, and answers from the
              Lexentify team.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 gap-6 mx-auto">
            {blogArticles.map((article, idx) => (
              <Link
                href={article.href}
                key={idx}
                className="group border border-gray-200 rounded-md p-6 bg-white shadow-xs hover:border-zinc-400 transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs text-gray-400">
                    <span className="font-medium uppercase tracking-wider text-black bg-zinc-100 px-2 py-0.5 rounded-full">
                      {article.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <LuCalendar size={14} />
                      {article.date}
                    </span>
                  </div>
                  <h3 className="font-medium text-zinc-900 text-lg leading-snug group-hover:underline">
                    {article.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-medium text-zinc-900">
                  <span>Read guide</span>
                  <LuArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
