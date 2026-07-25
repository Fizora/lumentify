import { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "About | Lumentify",
};

export default function About() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24">
        <div className="mx-auto max-w-3xl px-3">
          {/* Header */}
          <div className="mb-16 space-y-5">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-violet-600 bg-violet-50 px-4 py-1.5 rounded-full">
              About
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight">
              Why we build only for home services
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              A short read on who we are, what we focus on, and why we chose to
              go deep into one industry instead of wide across many.
            </p>
          </div>

          {/* Body — blog-style, justified paragraphs */}
          <article className="space-y-6 text-gray-700 leading-relaxed text-[15px] md:text-base [&>p]:text-justify">
            <p>
              Lumentify started as a small, indie studio with one clear rule: we
              would rather understand one industry deeply than build generic
              websites for anyone who asks. That decision shaped everything
              about how we work today, and it started with a simple observation
              — most websites built for tradespeople are made by people who have
              never had to deal with an emergency call, a missed booking, or a
              customer who needed help right now. We wanted to build for the
              businesses that actually run on urgency: plumbers, electricians,
              HVAC technicians, and roofers who are judged not by how polished
              their website looks, but by how fast they can be reached when
              something breaks.
            </p>

            <p>
              Home services is a strange industry to design for, because the
              stakes are rarely emotional in the way a lifestyle brand or a
              restaurant might be — they are practical, urgent, and immediate.
              Someone searching for a plumber at midnight is not browsing, they
              are trying to stop water from ruining their home. That single
              insight is the foundation of how we approach every project: speed
              is not a technical nice-to-have, it is the actual product. A
              website that loads slowly in this industry does not just look bad,
              it directly costs our clients real customers and real revenue,
              often without them ever knowing an opportunity was lost.
            </p>

            <p>
              We chose to stay small and indie on purpose. Being a small team
              means every project gets direct attention instead of being passed
              between account managers and junior developers who never speak to
              the client directly. When we take on a project, we sit with the
              specifics of that business — what services they offer, what areas
              they cover, what makes a customer choose them over the plumber
              three suburbs over — and we build around those specifics instead
              of dropping content into a template and calling it done. This is
              slower for us in the short term, but it is the only way we know
              how to build something that actually converts visitors into booked
              jobs, not just something that looks presentable in a portfolio.
            </p>

            <p>
              Our focus rests on three principles we return to on every project:
              fast, clean, and directed. Fast means a site that loads before a
              stressed customer gives up and calls someone else. Clean means no
              clutter, no competing messages, and no information buried where it
              cannot be found in a hurry. And directed means every page has
              exactly one job — to get a call, a booking, or a quote request —
              instead of scattering a visitor's attention across five different
              calls to action that all compete with each other. None of these
              principles are decorative. Each one exists because we have seen,
              through research into how this industry actually behaves online,
              what happens when a website ignores them: visitors leave, and they
              call a competitor instead.
            </p>

            <p>
              We understand that trust is earned differently in this industry
              too. A homeowner who lets a plumber into their house is trusting
              them with their property, and that trust starts long before the
              technician arrives — it starts the moment someone lands on a
              website and decides, in a few seconds, whether this business feels
              credible enough to call. That is why we treat licensing,
              insurance, and real reviews as core content, not afterthoughts
              buried in a footer. A website built for home services has to do
              some of the same work a first impression does in person: reassure
              quickly, clearly, and without making the visitor dig for it.
            </p>

            <p>
              What we are ultimately trying to do is simple to say and hard to
              execute well: help hardworking business owners stop losing
              customers to a problem they usually cannot see — a slow page, a
              buried phone number, a services list that does not answer the one
              question a visitor actually had. We are not trying to be a general
              web agency that happens to also serve this industry. We are trying
              to be the team that understands this industry's customers as well
              as its business owners do, and builds accordingly, one project at
              a time.
            </p>
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
}
