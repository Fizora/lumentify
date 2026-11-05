import { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Skathes from "@/components/Skathes";
import CTA from "@/components/sections/CTA";
import { termsData } from "@/components/constant/data-terms";

export const metadata: Metadata = {
  title: "Lexentify | Terms & Conditions",
  description:
    "Read the comprehensive terms and conditions governing the use of the Lexentify website and general engagement frameworks for professional digital services.",
};

export default function TermsAndConditions() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen px-4 bg-white text-zinc-900 border-b">
        <section className="mx-auto max-w-300 px-3 py-20 border-x border-zinc-200">
          <section className="pt-32 pb-8 mx-auto max-w-3xl">
            <span className="inline-block text-xs font-medium tracking-widest uppercase text-zinc-600 bg-zinc-100 px-4 py-1.5 rounded-full mb-5">
              Legal
            </span>

            <h1 className="text-3xl md:text-4xl font-medium tracking-tight text-black leading-tight mb-3">
              Terms & Conditions
            </h1>

            <p className="text-sm text-zinc-500">
              Last updated: {termsData.lastUpdated}
            </p>
          </section>

          <section className="mx-auto max-w-3xl pb-24 text-zinc-600 leading-relaxed space-y-6 text-sm">
            <p className="bg-zinc-50 border border-zinc-200 p-4 text-sm text-zinc-700">
              <strong className="text-black">Scope & Legal Hierarchy:</strong>{" "}
              {termsData.scopeNotice}
            </p>

            {termsData.sections.map((section, idx) => (
              <div key={idx}>
                <h2 className="text-lg font-medium text-black mt-8 mb-2">
                  {section.title}
                </h2>
                {section.content.map((paragraph, pIdx) => (
                  <p key={pIdx} className={pIdx > 0 ? "mt-3" : ""}>
                    {paragraph}
                  </p>
                ))}

                {/* Render list items if available (e.g. for Section 4) */}
                {section.listItems && (
                  <ul className="list-disc pl-5 mt-3 space-y-2">
                    {section.listItems.map((item, lIdx) => {
                      const [title, ...rest] = item.split(":");
                      return (
                        <li key={lIdx}>
                          <strong>{title}:</strong> {rest.join(":")}
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>
            ))}

            <div>
              <h2 className="text-lg font-medium text-black mt-8 mb-2">
                10. Contact Information
              </h2>
              <p>
                Inquiries concerning these terms, legal compliance, or
                contractual frameworks can be directed to our team at{" "}
                <a
                  href="mailto:info@lexentify.com"
                  className="text-black font-medium underline hover:text-zinc-700 transition-colors"
                >
                  info@lexentify.com
                </a>
                .
              </p>
            </div>
          </section>
        </section>
      </main>
      <CTA />
      <Skathes />
      <Footer />
    </>
  );
}
