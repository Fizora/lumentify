import { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Lexentify | Privacy Policy",
};

export default function Privacy() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen px-4 bg-white text-zinc-900">
        <section className="mx-auto max-w-300 px-3 py-20 border-x border-zinc-200">
          <section className="pt-32 pb-8 mx-auto max-w-3xl">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-zinc-600 bg-zinc-100 px-4 py-1.5 rounded-full mb-5">
              Legal
            </span>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-black leading-tight mb-3">
              Privacy Policy
            </h1>
            <p className="text-sm text-zinc-500">Last updated: August 2026</p>
          </section>

          <section className="mx-auto max-w-3xl pb-24 text-zinc-600 leading-relaxed space-y-6">
            <p className="bg-zinc-50 border border-zinc-200 p-4 text-sm text-zinc-700">
              <strong className="text-black">Important Note:</strong> This
              policy explains what information Lexentify collects when you visit
              this website or contact us, and how it is used. It covers this
              website only — active client project data and deliverables are
              governed separately under individual signed Master Service
              Agreements (MSA) and Statements of Work (SOW).
            </p>

            <div>
              <h2 className="text-lg font-bold text-black mt-8 mb-2">
                1. What we collect
              </h2>
              <p className="mb-3">
                When you use our contact form, WhatsApp, or email us directly,
                we collect what you choose to share — typically your name, email
                address, business name, and the content of your message. We
                don&apos;t collect anything beyond what you submit.
              </p>
              <p>
                Like most websites, basic analytics data (pages visited, general
                location, device type) may be collected automatically through
                analytics tools to understand how visitors use the site.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-black mt-8 mb-2">
                2. How we use it
              </h2>
              <p>
                Information you submit is used only to respond to your inquiry,
                prepare a proposal, or deliver a project you&apos;ve engaged us
                for. We do not sell, rent, or trade your information to any
                third party.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-black mt-8 mb-2">
                3. Third-party tools
              </h2>
              <p>
                We use a small number of third-party services to run this
                website and our business — for example, website analytics,
                hosting, and email delivery. These providers process data only
                to the extent needed to provide their service to us, under their
                own privacy terms.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-black mt-8 mb-2">
                4. Cookies
              </h2>
              <p>
                This site may use basic cookies for analytics purposes to
                understand aggregate visitor behavior. We don&apos;t use cookies
                for advertising or cross-site tracking.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-black mt-8 mb-2">
                5. Data retention &amp; security
              </h2>
              <p>
                We keep inquiry and project-related information only as long as
                needed to deliver the service or as required for our own
                records, and take reasonable steps to keep it secure. Client
                project data covered under an active MSA follows the retention
                terms in that agreement.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-black mt-8 mb-2">
                6. Your rights
              </h2>
              <p>
                You can ask us what information we hold about you, request a
                correction, or ask us to delete it, by emailing us at the
                address below. We&apos;ll respond as promptly as we can.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-black mt-8 mb-2">
                7. Contact
              </h2>
              <p>
                Questions about this policy can be sent to{" "}
                <a
                  href="mailto:info@lexentify.com"
                  className="text-black font-semibold underline hover:text-zinc-700 transition-colors"
                >
                  info@lexentify.com
                </a>
                .
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-black mt-8 mb-2">
                8. Changes to this policy
              </h2>
              <p>
                We may update this policy from time to time. Material changes
                will be reflected by updating the date at the top of this page.
              </p>
            </div>
          </section>
        </section>
      </main>
      <Footer />
    </>
  );
}
