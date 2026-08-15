import { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Lumentify | Terms",
};

export default function Terms() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen px-4">
        <section className="pt-32 pb-8 mx-auto max-w-2xl">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-zinc-600 bg-zinc-100 px-4 py-1.5 rounded-full mb-5">
            Legal
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-black leading-tight mb-3">
            Terms of Use
          </h1>
          <p className="text-lg text-gray-500">Last updated: August 2026</p>
        </section>

        <section className="mx-auto max-w-2xl pb-24 text-gray-600 leading-relaxed">
          <p className="mb-6">
            These Terms govern your use of this website only. They are not a
            service agreement. If you engage Lumentify for a project, that work
            is governed by a separate, signed Master Service Agreement (MSA) and
            Statement of Work (SOW), which take precedence over anything on this
            site.
          </p>

          <h2 className="text-lg font-bold text-black mt-8 mb-3">
            1. Acceptance
          </h2>
          <p className="mb-4">
            By browsing this website, you agree to these Terms. If you
            don&apos;t agree, please don&apos;t use the site.
          </p>

          <h2 className="text-lg font-bold text-black mt-8 mb-3">
            2. Website content &amp; intellectual property
          </h2>
          <p className="mb-4">
            All text, design, and showcase material on this website belongs to
            Lumentify or is used with permission, and may not be copied or
            reused without our consent. Showcase projects remain the property of
            their respective clients where applicable.
          </p>

          <h2 className="text-lg font-bold text-black mt-8 mb-3">
            3. Information is general, not a promise
          </h2>
          <p className="mb-4">
            Pricing, timelines, and feature lists on this site are general
            starting points, not a binding quote. The actual price, scope, and
            delivery timeline for your project are only confirmed in a signed
            SOW.
          </p>

          <h2 className="text-lg font-bold text-black mt-8 mb-3">
            4. Limitation of liability
          </h2>
          <p className="mb-4">
            This website is provided as-is. To the extent permitted by law,
            Lumentify is not liable for any loss or damage arising from your use
            of this website. Liability related to an actual project is addressed
            separately in the signed MSA.
          </p>

          <h2 className="text-lg font-bold text-black mt-8 mb-3">
            5. External links
          </h2>
          <p className="mb-4">
            This site may link to third-party sites (for example, a
            client&apos;s live showcase site). We&apos;re not responsible for
            the content or practices of sites we don&apos;t control.
          </p>

          <h2 className="text-lg font-bold text-black mt-8 mb-3">
            6. Governing law
          </h2>
          <p className="mb-4">
            These Terms are governed by the laws of Indonesia, without regard to
            conflict-of-law principles. Governing law for a specific project may
            be set separately in that project&apos;s MSA.
          </p>

          <h2 className="text-lg font-bold text-black mt-8 mb-3">
            7. Changes to these Terms
          </h2>
          <p className="mb-4">
            We may update these Terms from time to time. Continued use of the
            site after changes means you accept the updated Terms.
          </p>

          <h2 className="text-lg font-bold text-black mt-8 mb-3">8. Contact</h2>
          <p className="mb-4">
            Questions about these Terms can be sent to{" "}
            <a
              href="mailto:hello@lumentify.com"
              className="text-zinc-700 font-medium hover:underline"
            >
              hello@lumentify.com
            </a>
            .
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
