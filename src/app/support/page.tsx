import { Metadata } from "next";
import Link from "next/link";
import {
  LuMail,
  LuCircleHelp,
  LuShieldCheck,
  LuRotateCcw,
  LuFileCheck,
  LuBadgeCheck,
} from "react-icons/lu";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Skathes from "@/components/Skathes";

export const metadata: Metadata = {
  title: "Lexentify | Support & Project Process",
  description:
    "Learn how Lexentify handles project agreements, revisions, post-launch support, and client enquiries.",
};

const guarantees = [
  {
    icon: LuFileCheck,
    title: "Review the design direction",
    body: "We agree on a design-review milestone before full development begins. The review process, included revisions, approval method, and any cancellation option are documented in the project agreement.",
  },
  {
    icon: LuRotateCcw,
    title: "Defined post-launch support",
    body: "Each project has a support period and scope specified in its written agreement. Support covers eligible issues within the agreed deliverables. New features, additional content, and third-party service issues may require separate work.",
  },
  {
    icon: LuBadgeCheck,
    title: "Clear pricing and scope",
    body: "The written proposal and project agreement set out the agreed price and deliverables. Changes to the scope, price, or timeline require written approval before the additional work begins.",
  },
  {
    icon: LuShieldCheck,
    title: "Written project terms",
    body: "Before work starts, both parties should have written terms covering the project scope, payment schedule, timeline, review process, ownership, support, and cancellation conditions.",
  },
];

const projectSteps = [
  {
    number: "1",
    text: "We discuss your requirements and provide a written proposal outlining the intended scope, price, and estimated timeline.",
  },
  {
    number: "2",
    text: "Before work begins, both parties review and sign the applicable project agreement and Statement of Work (SOW), including payment milestones and cancellation terms.",
  },
  {
    number: "3",
    text: "We share the agreed design direction for review. Any revision limits, approval deadlines, and applicable cancellation or refund terms follow the signed agreement.",
  },
  {
    number: "4",
    text: "After design approval, we develop and test the website against the agreed deliverables. Requests outside the scope are quoted separately and require written approval.",
  },
  {
    number: "5",
    text: "We complete the agreed review and handover process. Final payment, production launch, transfer of assets, and post-launch support follow the payment and delivery terms agreed in writing.",
  },
];

export default function Support() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white text-zinc-900 border-b">
        <section className="mx-auto max-w-300 px-3 py-20 border-x border-zinc-200">
          <section className="pt-32 pb-16 mx-auto max-w-3xl text-center">
            <span className="inline-block text-xs font-medium tracking-widest uppercase text-zinc-600 bg-zinc-100 px-4 py-1.5 rounded-full mb-5">
              Support
            </span>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-black leading-tight mb-4">
              Clear expectations at every stage
            </h1>

            <p className="text-sm text-zinc-600 leading-relaxed">
              Learn how we communicate, review project work, handle post-launch
              support, and document the terms of each engagement.
            </p>
          </section>

          <section className="mx-auto max-w-4xl pb-16">
            <h2 className="text-xl font-medium text-black mb-1 text-center">
              How we work with clients
            </h2>

            <p className="text-sm text-zinc-600 text-center mb-8 max-w-xl mx-auto">
              We aim to make responsibilities, project boundaries, and
              expectations clear before work begins.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {guarantees.map(({ icon: Icon, title, body }) => (
                <div
                  key={title}
                  className="border border-zinc-200 p-8 bg-white shadow-xs"
                >
                  <Icon className="w-5 h-5 text-zinc-800 mb-4" />
                  <h3 className="text-base font-medium text-black mb-2">
                    {title}
                  </h3>
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    {body}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="mx-auto max-w-4xl pb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border border-zinc-200 p-8 bg-white shadow-xs">
                <h2 className="text-lg font-medium text-black mb-2">
                  Existing clients
                </h2>

                <p className="text-sm text-zinc-600 leading-relaxed mb-6">
                  For a project-related question or support request, contact us
                  with your business name, project details, and a clear
                  description of the issue. We will review your request and
                  respond as soon as reasonably practicable.
                </p>

                <Link
                  href="mailto:support@lexentify.com"
                  className="inline-flex items-center gap-2 text-sm font-medium text-zinc-700 hover:text-black transition-colors"
                >
                  <LuMail className="w-4 h-4" />
                  support@lexentify.com
                </Link>
              </div>

              <div className="border border-zinc-200 p-8 bg-white shadow-xs">
                <h2 className="text-lg font-medium text-black mb-2">
                  Prospective clients
                </h2>

                <p className="text-sm text-zinc-600 leading-relaxed mb-6">
                  Have questions about pricing, deliverables, project timing, or
                  whether our services fit your business? Contact us to discuss
                  your requirements before making a commitment.
                </p>

                <Link
                  href="mailto:business@lexentify.com"
                  className="inline-flex items-center gap-2 text-sm font-medium text-zinc-700 hover:text-black transition-colors"
                >
                  <LuMail className="w-4 h-4" />
                  business@lexentify.com
                </Link>
              </div>
            </div>
          </section>

          <section className="mx-auto max-w-3xl pb-16">
            <div className="border border-zinc-200 p-8 bg-white shadow-xs">
              <h2 className="text-lg font-medium text-black mb-4">
                How a project proceeds
              </h2>

              <ol className="space-y-4">
                {projectSteps.map(({ number, text }) => (
                  <li key={number} className="flex gap-4 items-start">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-zinc-100 text-zinc-800 text-xs font-medium flex items-center justify-center">
                      {number}
                    </span>

                    <p className="text-sm text-zinc-600 leading-relaxed">
                      {text}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          <section className="mx-auto max-w-3xl pb-24">
            <div className="bg-zinc-50 border border-zinc-200 p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-3">
                <LuMail className="w-5 h-5 text-zinc-800 shrink-0" />
                <div>
                  <p className="text-sm font-medium text-black">
                    Prefer email communication?
                  </p>
                  <p className="text-sm text-zinc-600">info@lexentify.com</p>
                </div>
              </div>

              <Link
                href="/faq"
                className="inline-flex items-center gap-2 text-sm font-medium text-zinc-600 hover:text-black transition-colors"
              >
                <LuCircleHelp className="w-4 h-4" />
                Check the FAQ
              </Link>
            </div>
          </section>
        </section>
      </main>
      <Skathes />
      <Footer />
    </>
  );
}
