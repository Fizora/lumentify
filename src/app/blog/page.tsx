import { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { LuCalendar, LuArrowRight, LuNewspaper } from "react-icons/lu";
import Link from "next/link";
import Skathes from "@/components/Skathes";
import CTA from "@/components/sections/CTA";
import { blogMetadata, blogPageContent } from "@/const/page/Blog";
import { C } from "@/components/ui/Swiss";

export const metadata: Metadata = blogMetadata;

export default function Blog() {
  return (
    <>
      <Navbar />
      <main
        className="min-h-screen border-b"
        style={{ backgroundColor: C.BG, color: C.INK, borderColor: C.RULE }}
      >
        <section
          className="min-h-screen mx-auto w-full max-w-[1600px] border-x px-5 pb-20 pt-32 md:px-10"
          style={{ borderColor: C.RULE }}
        >
          <div className="text-center space-y-3 mb-12">
            <span
              className="mb-2 inline-block rounded-full border px-4 py-1.5 text-xs font-medium uppercase tracking-widest"
              style={{ borderColor: C.RULE_HI, color: C.MUTED }}
            >
              {blogPageContent.eyebrow}
            </span>
            <h1 className="text-3xl font-medium tracking-tight md:text-4xl">
              {blogPageContent.title}
            </h1>
            <p
              className="mx-auto max-w-2xl text-sm leading-relaxed"
              style={{ color: C.MUTED }}
            >
              {blogPageContent.description}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 gap-6 mx-auto">
            {blogPageContent.articles.map((article, idx) => (
              <Link
                href={article.href}
                key={idx}
                className="group flex flex-col justify-between border p-6 transition-colors hover:bg-white/5"
                style={{ borderColor: C.RULE }}
              >
                <div className="space-y-3">
                  <div
                    className="flex items-center justify-between text-xs"
                    style={{ color: C.MUTED }}
                  >
                    <span
                      className="rounded-full border px-2 py-0.5 font-medium uppercase tracking-wider"
                      style={{ borderColor: C.RULE, color: C.INK }}
                    >
                      {article.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <LuCalendar size={14} />
                      {article.date}
                    </span>
                  </div>
                  <h3 className="text-lg font-medium leading-snug group-hover:underline">
                    {article.title}
                  </h3>
                  <p className="line-clamp-3 text-sm leading-relaxed" style={{ color: C.MUTED }}>
                    {article.excerpt}
                  </p>
                </div>
                <div
                  className="mt-6 flex items-center justify-between border-t pt-4 text-xs font-medium"
                  style={{ borderColor: C.RULE, color: C.INK }}
                >
                  <span>{blogPageContent.readAction}</span>
                  <LuArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
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
