import { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Lumentify | Privacy Policy",
};

export default function Privacy() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen px-4">
        <section className="pt-32 pb-8 mx-auto max-w-3xl">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-zinc-600 bg-zinc-100 px-4 py-1.5 rounded-full mb-5">
            Legal
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-black leading-tight mb-3">
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-500">Last updated: August 2026</p>
        </section>

        <section className="mx-auto max-w-3xl pb-24 text-gray-600 leading-relaxed">
          <p className="mb-6">
            This policy explains what information Lumentify collects when you
            visit this website or contact us, and how it&apos;s used. It covers
            this website only — the actual work we do for a client is governed
            separately by a signed Master Service Agreement (MSA) and Statement
            of Work (SOW).
          </p>

          <h2 className="text-lg font-bold text-black mt-8 mb-3">
            1. What we collect
          </h2>
          <p className="mb-4">
            When you use our contact form, WhatsApp, or email us directly, we
            collect what you choose to share — typically your name, email
            address, business name, and the content of your message. We
            don&apos;t collect anything beyond what you submit.
          </p>
          <p className="mb-4">
            Like most websites, basic analytics data (pages visited, general
            location, device type) may be collected automatically through
            analytics tools to understand how visitors use the site.
          </p>

          <h2 className="text-lg font-bold text-black mt-8 mb-3">
            2. How we use it
          </h2>
          <p className="mb-4">
            Information you submit is used only to respond to your inquiry,
            prepare a proposal, or deliver a project you&apos;ve engaged us for.
            We do not sell, rent, or trade your information to any third party.
          </p>

          <h2 className="text-lg font-bold text-black mt-8 mb-3">
            3. Third-party tools
          </h2>
          <p className="mb-4">
            We use a small number of third-party services to run this website
            and our business — for example, website analytics, hosting, and
            email delivery. These providers process data only to the extent
            needed to provide their service to us, under their own privacy
            terms.
          </p>

          <h2 className="text-lg font-bold text-black mt-8 mb-3">4. Cookies</h2>
          <p className="mb-4">
            This site may use basic cookies for analytics purposes to understand
            aggregate visitor behavior. We don&apos;t use cookies for
            advertising or cross-site tracking.
          </p>

          <h2 className="text-lg font-bold text-black mt-8 mb-3">
            5. Data retention &amp; security
          </h2>
          <p className="mb-4">
            We keep inquiry and project-related information only as long as
            needed to deliver the service or as required for our own records,
            and take reasonable steps to keep it secure. Client project data
            covered under an active MSA follows the retention terms in that
            agreement.
          </p>

          <h2 className="text-lg font-bold text-black mt-8 mb-3">
            6. Your rights
          </h2>
          <p className="mb-4">
            You can ask us what information we hold about you, request a
            correction, or ask us to delete it, by emailing us at the address
            below. We&apos;ll respond as promptly as we can.
          </p>

          <h2 className="text-lg font-bold text-black mt-8 mb-3">7. Contact</h2>
          <p className="mb-4">
            Questions about this policy can be sent to{" "}
            <a
              href="mailto:lumentify@gmail.com"
              className="text-zinc-700 font-medium hover:underline"
            >
              lumentify@gmail.com
            </a>
            .
          </p>

          <h2 className="text-lg font-bold text-black mt-8 mb-3">
            8. Changes to this policy
          </h2>
          <p className="mb-4">
            We may update this policy from time to time. Material changes will
            be reflected by updating the date at the top of this page.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
