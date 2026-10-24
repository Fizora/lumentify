import { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Lexentify | About Our Studio",
};

export default function About() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen px-4 bg-white text-zinc-900">
        <div className="mx-auto max-w-300 px-3 py-20 border-x border-zinc-200">
          <div className="mx-auto max-w-3xl pt-12">
            {/* Header */}
            <div className="mb-12 space-y-4">
              <span className="inline-block text-xs font-medium tracking-widest uppercase text-zinc-600 bg-zinc-100 px-4 py-1.5 rounded-full">
                About Lexentify
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-black leading-tight">
                Why we build exclusively for home-service businesess
              </h1>
              <p className="text-sm text-zinc-600 leading-relaxed">
                A transparent look at who we are, why we chose to go deep into a
                single industry, and how our execution standard protects your
                trade business.
              </p>
            </div>

            {/* Body — blog-style, clean left-aligned text */}
            <article className="space-y-6 text-zinc-700 leading-relaxed text-sm  text-left">
              <p>
                Lexentify is a specialized, independent digital studio dedicated
                to serving a single kind of business: home-service trades. We
                focus exclusively on plumbers, electricians, HVAC technicians,
                and roofers whose daily operations run on urgency. When a
                homeowner’s pipe bursts or power fails, the question is never
                &ldquo;does this website look fancy?&rdquo; — it is always
                &ldquo;can I call this business right now?&rdquo;
              </p>

              <p>
                That core insight shapes every line of code we write. In the
                home-service sector, a slow website is not merely an aesthetic
                flaw; it is an active business failure. If a landing page takes
                too long to load or mobile buttons are cumbersome to tap,
                potential customers do not wait around — they immediately call a
                competitor. For us, speed and frictionless contact are the
                primary products.
              </p>

              <p>
                We remain deliberately small so that every project receives
                direct, founder-level attention. Rather than recycling generic
                templates or stuffing filler text, we analyze your specific
                services, coverage suburbs, and operational strengths. We then
                architect a clean, direct digital asset designed with one single
                outcome: turning local search traffic into booked phone calls
                and quote requests.
              </p>

              <p>
                Our technical philosophy rests on three non-negotiable
                principles: <strong>Fast, Clean, and Directed</strong>.
                <span className="block mt-2">
                  <strong className="text-black">Fast</strong> ensures your site
                  loads instantly before an urgent customer bounces.
                  <strong className="text-black ml-1">Clean</strong> eliminates
                  clutter, distractions, and competing messages when users are
                  stressed.
                  <strong className="text-black ml-1">Directed</strong> means
                  every section funnels attention toward a clear action — a
                  phone call, booking form, or quote submission. We place
                  licensing credentials, insurance badges, and direct trust
                  signals front and center because trust in this industry is
                  established in seconds.
                </span>
              </p>

              <p>
                Ultimately, we are not trying to operate as a generalist web
                agency juggling dozens of unrelated niches. Our mission is
                simple: to be the dedicated digital partner that understands how
                home-service consumers behave online, building high-performance
                systems that match that reality — one project at a time.
              </p>
            </article>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
