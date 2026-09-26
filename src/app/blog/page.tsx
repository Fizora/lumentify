import { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import DashboardPageHeader from "@/components/DashboardPageHeader";
import { LuCalendar, LuArrowRight, LuNewspaper } from "react-icons/lu";
import Link from "next/link";

const dummyArticles = [
  {
    title: "5 Signs Your Website Is Overdue for an Update",
    excerpt:
      "A slow site with an outdated design can drive customers away before they ever reach out. Here's how to spot the warning signs.",
    category: "Tips",
    date: "20 - 08 - 2026",
  },
  {
    title: "Why Load Speed Affects How Many Bookings You Get",
    excerpt:
      "Every extra second of load time can cost you conversions. Here's how we keep your website fast.",
    category: "Performance",
    date: "12 - 08 - 2026",
  },
  {
    title: "How We Keep Client Websites Secure",
    excerpt:
      "From SSL to routine backups and uptime monitoring — here's the security standard we apply to every website.",
    category: "Security",
    date: "3 - 08 - 2026",
  },
  {
    title: "New Feature: Automated Booking Form",
    excerpt:
      "A new addition to your service page, letting customers book directly without needing to call.",
    category: "Product Update",
    date: "28 - 07 - 2026",
  },
];
export const metadata: Metadata = {
  title: "Lumentify | Blog",
};

export default function Blog() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <section className="pt-32 mx-auto max-w-7xl px-4">
          <DashboardPageHeader
            title="Blog & Updates"
            description="The latest articles and updates from the Lumentify team — tips, new features, and news about your website."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
            {dummyArticles.map((article, idx) => (
              <Link
                href={""}
                key={idx}
                className="group border border-zinc-200 rounded-lg overflow-hidden transition-all duration-300 flex flex-col"
              >
                <div className="h-36 bg-zinc-100 flex items-center justify-center text-zinc-300">
                  <LuNewspaper size={32} />
                </div>
                <div className="p-4 flex flex-col gap-2 flex-1">
                  <div className="flex items-center justify-between pt-2 mt-auto border-t border-zinc-100 text-xs text-zinc-400">
                    <span className="w-max text-xs font-semibold uppercase tracking-wide text-black bg-zinc-100 px-2 py-0.5 rounded-full">
                      {article.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <LuCalendar size={14} />
                      {article.date}
                    </span>
                  </div>
                  <h3 className="font-bold text-zinc-900 text-xl leading-snug group-hover:underline">
                    {article.title}
                  </h3>
                  <p className="text-sm text-zinc-500 line-clamp-3 flex-1">
                    {article.excerpt}
                  </p>
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
