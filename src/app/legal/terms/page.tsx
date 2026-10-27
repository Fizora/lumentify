import { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Skathes from "@/components/Skathes";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Lexentify | Terms of Use",
};

export default function Terms() {
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
              Terms of Use
            </h1>
            <p className="text-sm text-zinc-500">Last updated: October 2026</p>
          </section>

          <section className="mx-auto max-w-3xl pb-24 text-zinc-600 leading-relaxed space-y-6">
            <p className="bg-zinc-50 border border-zinc-200 p-4 text-sm text-zinc-700">
              <strong className="text-black">Important Note:</strong> These
              Terms govern your use of this website only. They do not constitute
              a service agreement. If you engage Lexentify for a project, that
              commercial work is strictly governed by a separate, signed Master
              Service Agreement (MSA) and Statement of Work (SOW), which
              supersede anything stated on this website.
            </p>

            <div>
              <h2 className="text-lg font-medium text-black mt-8 mb-2">
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing and browsing this website, you agree to comply with
                these Terms of Use. If you do not agree with any part of these
                terms, please refrain from using the site.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-medium text-black mt-8 mb-2">
                2. Website Content &amp; Intellectual Property
              </h2>
              <p>
                All text, graphics, user interface designs, and showcase
                materials displayed on this website belong exclusively to
                Lexentify or are used with proper authorization. They may not be
                copied, reproduced, or reused without our explicit prior
                consent. Showcase client projects remain the property of their
                respective owners.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-medium text-black mt-8 mb-2">
                3. General Information, Not a Binding Offer
              </h2>
              <p>
                Pricing structures, estimated delivery timelines, and feature
                lists published on this website serve as general guidelines and
                starting points only—they do not constitute a binding commercial
                quote. The exact price, detailed scope, and delivery milestones
                for your project are exclusively confirmed through a formal,
                signed SOW.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-medium text-black mt-8 mb-2">
                4. Limitation of Liability
              </h2>
              <p>
                This website is provided on an &quot;as-is&quot; and
                &quot;as-available&quot; basis. To the maximum extent permitted
                by applicable law, Lexentify shall not be held liable for any
                direct, indirect, or incidental loss or damage arising from your
                use of this website. Project-specific liabilities and warranties
                are strictly governed under individual signed project
                agreements.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-medium text-black mt-8 mb-2">
                5. External Links &amp; Third-Party Sites
              </h2>
              <p>
                This site may contain links to external third-party websites
                (such as live client demo builds or portfolio sandboxes). We
                hold no responsibility or liability for the content, privacy
                policies, or operational practices of websites outside of our
                direct control.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-medium text-black mt-8 mb-2">
                6. Governing Law &amp; Dispute Resolution
              </h2>
              <p>
                These website Terms are governed by and construed in accordance
                with the laws of Indonesia, without regard to conflict-of-law
                principles. Any formal commercial disputes arising from services
                shall first be pursued through good-faith professional
                negotiation and mediation before any legal recourse.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-medium text-black mt-8 mb-2">
                7. Changes to These Terms
              </h2>
              <p>
                We reserve the right to modify or update these Terms of Use at
                any time. Your continued browsing or use of the website
                following any updates constitutes your formal acceptance of the
                revised terms.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-medium text-black mt-8 mb-2">
                8. Project Deposits &amp; Initial Milestone Cancellation Policy
              </h2>
              <p>
                For contracted projects governed under a signed SOW, we include
                an initial design direction review milestone prior to full code
                development. If you choose to formally cancel the project at
                this milestone because the visual direction does not align with
                your vision, your initial deposit will be fully refunded to stop
                the project cleanly before development begins. Please note that
                such refunds cover the net deposit amount received by Lexentify
                (minus non-recoverable third-party payment gateway or platform
                transfer fees such as PayPal or Wise, if applicable).
              </p>
            </div>

            <div>
              <h2 className="text-lg font-medium text-black mt-8 mb-2">
                9. Contact Information
              </h2>
              <p>
                If you have any questions or concerns regarding these Terms of
                Use, please reach out directly via email at{" "}
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
