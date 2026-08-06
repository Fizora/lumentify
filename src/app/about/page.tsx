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
          {/* Header – Neo‑Brutalism style */}
          <div className="mb-16 space-y-5">
            <span className="inline-block text-xs font-bold tracking-widest uppercase text-black bg-yellow-400 px-4 py-1.5 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.8)]">
              About
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight">
              Why we build only for home services
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed border-l-4 border-yellow-400 pl-4">
              A short read on who we are, what we focus on, and why we chose to
              go deep into one industry instead of wide across many.
            </p>
          </div>

          {/* Body – paragraphs with subtle left border accent */}
          <article className="space-y-6 text-gray-700 leading-relaxed text-[15px] md:text-base [&>p]:text-justify [&>p]:border-l-4 [&>p]:border-transparent [&>p]:pl-4 hover:[&>p]:border-blue-600 transition-all duration-300">
            <p>
              Lumentify is a small, independent studio that chose to build only
              for one kind of business: home-service trades. We focus on
              plumbers, electricians, HVAC technicians, and roofers whose work
              runs on urgency — when something breaks, the question is not “does
              this website look fancy?” but “can this business be reached right
              now?”
            </p>

            <p>
              That insight shapes everything we do. In home services, a slow
              website is not just an aesthetic problem, it is a real business
              problem. If a page takes too long to load or a phone number is
              hard to find, the visitor does not wait and try again — they call
              a competitor instead. For us, speed is the product: a site has to
              load quickly, feel clear, and make it obvious how to call, book,
              or request a quote.
            </p>

            <p>
              We stay deliberately small so every project gets direct attention.
              Rather than drop generic content into a generic template, we look
              at what services you offer, which areas you cover, and why
              customers choose you over the tradie three suburbs away. We then
              build around those specifics, using a structure that has one job
              on every page: turn visitors into booked jobs, not just into nice
              screenshots.
            </p>

            <p>
              Our work rests on three principles: fast, clean, and directed.
              Fast means the site loads before a stressed customer gives up.
              Clean means no clutter and no competing messages when someone is
              in a hurry. Directed means every page has a single, clear outcome
              — a call, a booking, or a quote request — instead of scattering
              attention across multiple calls to action. We focus on licensing,
              insurance, and real reviews as core content, because trust in this
              industry is built in seconds, long before anyone steps through a
              customer’s front door.
            </p>

            <p>
              In short, we are not trying to be a general web agency that
              happens to serve this industry. We are trying to be the team that
              understands how home-service customers actually behave online, and
              builds websites that match that reality — one project at a time.
            </p>
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
}
