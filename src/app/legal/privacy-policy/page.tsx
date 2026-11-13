import { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Skathes from "@/components/Skathes";
import CTA from "@/components/sections/CTA";
import { privacyPolicyData } from "@/components/constant/data-privacy-policy";

export const metadata: Metadata = {
  title: "Lexentify | Privacy Policy",
  description:
    "Read how Lexentify handles information submitted through its website and business communications.",
};

export default function Privacy() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen px-4 bg-white text-zinc-900 border-b">
        <section className="mx-auto max-w-7xl px-3 py-20 border-x ">
          <section className="pt-32 pb-8 mx-auto max-w-3xl">
            <span className="inline-block text-xs font-medium tracking-widest uppercase text-zinc-600 bg-zinc-100 px-4 py-1.5 rounded-full mb-5">
              Legal
            </span>

            <h1 className="text-3xl md:text-4xl font-medium tracking-tight text-black leading-tight mb-3">
              Privacy Policy
            </h1>

            <p className="text-sm text-zinc-500">
              Last updated: {privacyPolicyData.lastUpdated}
            </p>
          </section>

          <section className="mx-auto max-w-3xl pb-24 text-zinc-600 leading-relaxed space-y-6 text-sm">
            <p className="bg-zinc-50 border  p-4 text-sm text-zinc-700">
              <strong className="text-black">Scope:</strong>{" "}
              {privacyPolicyData.scopeNotice}
            </p>

            {privacyPolicyData.sections.map((section, idx) => (
              <div key={idx}>
                <h2 className="text-lg font-medium text-black mt-8 mb-2">
                  {section.title}
                </h2>
                {section.content.map((paragraph, pIdx) => (
                  <p key={pIdx} className={pIdx > 0 ? "mt-3" : ""}>
                    {paragraph}
                  </p>
                ))}

                {/* Render contact list specifically for section 7 (Contact) */}
                {section.title.startsWith("7. Contact") && (
                  <ul className="list-disc pl-5 space-y-2 mt-4">
                    <li>
                      <strong>Privacy & Data Requests:</strong> Email us at{" "}
                      <a
                        href="mailto:info@lexentify.com"
                        className="text-black font-medium underline hover:text-zinc-700 transition-colors"
                      >
                        info@lexentify.com
                      </a>
                    </li>
                    <li>
                      <strong>Business Inquiries & Partnerships:</strong> Email
                      us at{" "}
                      <a
                        href="mailto:business@lexentify.com"
                        className="text-black font-medium underline hover:text-zinc-700 transition-colors"
                      >
                        business@lexentify.com
                      </a>
                    </li>
                    <li>
                      <strong>Service & Support Questions:</strong> Email us at{" "}
                      <a
                        href="mailto:services@lexentify.com"
                        className="text-black font-medium underline hover:text-zinc-700 transition-colors"
                      >
                        services@lexentify.com
                      </a>
                    </li>
                    <li>
                      <strong>Sales & Project Estimates:</strong> Email us at{" "}
                      <a
                        href="mailto:sales@lexentify.com"
                        className="text-black font-medium underline hover:text-zinc-700 transition-colors"
                      >
                        sales@lexentify.com
                      </a>
                    </li>
                  </ul>
                )}
              </div>
            ))}
          </section>
        </section>
      </main>
      <CTA />
      <Skathes />
      <Footer />
    </>
  );
}
