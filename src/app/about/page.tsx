import { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Skathes from "@/components/Skathes";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Lexentify | About Our Studio",
  description:
    "Learn about Lexentify's approach to building clear, mobile-friendly websites for home-service businesses and broader digital projects.",
};

export default function About() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white text-zinc-900 border-b px-3">
        <div className="mx-auto max-w-7xl px-3 py-20 border-x border-zinc-200">
          <div className="mx-auto max-w-3xl pt-12">
            <div className="mb-12 space-y-4">
              <span className="inline-block text-xs font-medium tracking-widest uppercase text-zinc-600 bg-zinc-100 px-4 py-1.5 rounded-full">
                About Lexentify
              </span>

              <h1 className="text-3xl md:text-4xl font-medium tracking-tight text-black leading-tight">
                Websites designed with precision & purpose
              </h1>

              <p className="text-sm text-zinc-600 leading-relaxed">
                Learn about our focus, our approach to digital execution, and
                the core principles that guide our work across every project.
              </p>
            </div>

            <article className="space-y-6 text-zinc-700 leading-relaxed text-sm text-left">
              <p>
                Lexentify is an independent digital studio with a primary focus
                on building high-conversion websites for household and
                home-service businesses, including plumbers, electricians, HVAC
                providers, and roofers. By deeply specializing in this sector,
                we streamline our development processes and maintain rigorous
                quality control. However, our engineering standards are
                adaptable—we are always open to selecting and accepting
                selective projects outside of this niche when clients share our
                value for clean, high-performance web architecture.
              </p>

              <p>
                Website usability matters, particularly on mobile devices. Slow
                loading, unclear service information, or difficult-to-find
                contact details can create friction for visitors. We aim to
                reduce that friction through considered page structure,
                responsive layouts, optimized assets, and clear contact options.
                Actual website performance and customer behavior depend on
                factors beyond design and development alone.
              </p>

              <p>
                We take a project-specific approach rather than relying on
                one-size-fits-all copy. Where information is available, we
                review your services, target audience, business priorities, and
                existing digital assets before shaping the page structure and
                content. The result is a website built around your agreed
                requirements, with clear paths for visitors to call, enquire, or
                request a quote.
              </p>

              <p>
                Our approach is guided by three principles:{" "}
                <strong>Fast, Clean, and Directed.</strong>
                <span className="block mt-2">
                  <strong className="text-black">Fast</strong> means applying
                  performance-conscious development practices and testing the
                  site under defined conditions. Actual loading times vary with
                  devices, networks, hosting, and third-party services.
                  <strong className="text-black ml-1">Clean</strong> means
                  organizing information in a way that is easy to scan and
                  navigate.
                  <strong className="text-black ml-1">Directed</strong> means
                  giving each page a clear purpose and making relevant actions,
                  such as calling or submitting an enquiry, easy to find.
                </span>
              </p>

              <p>
                Where applicable, business credentials, licences, insurance
                details, reviews, and other trust signals should be accurate and
                supplied or approved by the business owner. We do not present
                unverified credentials or invented customer reviews as genuine
                evidence.
              </p>

              <p>
                Whether building for our core household niche or expanding into
                new industries, Lexentify focuses on delivering practical,
                high-standard websites one project at a time. Our work supports
                your online presence; search rankings, enquiry volume, bookings,
                and revenue depend on many factors and are not guaranteed by
                website development alone.
              </p>
            </article>
          </div>
        </div>
      </main>
      <Skathes />
      <CTA />
      <Skathes />
      <Footer />
    </>
  );
}
