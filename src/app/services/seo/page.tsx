import { Metadata } from "next";
import {
  LuMapPin,
  LuSearchCheck,
  LuStar,
  LuGauge,
  LuArrowRight,
} from "react-icons/lu";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PrimaryButtonLink } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Lumentify | SEO",
};

const included = [
  {
    icon: LuMapPin,
    title: "Suburb-level pages",
    body: "Instead of one homepage competing for every keyword, dedicated pages target each suburb you service.",
  },
  {
    icon: LuSearchCheck,
    title: "Technical foundation",
    body: "Clean semantic HTML, fast loading, and proper structure — the groundwork Google actually rewards.",
  },
  {
    icon: LuStar,
    title: "Google Business Profile",
    body: "Setup and optimization guidance so your profile and website work together, not separately.",
  },
  {
    icon: LuGauge,
    title: "Ongoing ranking checks",
    body: "Available on maintenance plans — a monthly check on where you sit for the searches that matter.",
  },
];

export default function SEO() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen px-4">
        <section className="pt-32 pb-16 mx-auto max-w-3xl text-center">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-zinc-600 bg-zinc-100 px-4 py-1.5 rounded-full mb-5">
            Services / SEO
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight mb-4">
            SEO that starts with the build, not after it.
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            We don't sell SEO as a bolt-on service — it's built into how every
            site is structured from day one.
          </p>
        </section>

        <section className="mx-auto max-w-4xl pb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {included.map(({ icon: Icon, title, body }) => (
              <div key={title} className="border border-gray-200 p-8">
                <Icon className="w-5 h-5 text-zinc-600 mb-4" />
                <h3 className="text-base font-bold text-black mb-2">{title}</h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  {body}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-3xl pb-16">
          <div className="border border-gray-200 p-8">
            <h2 className="text-lg font-bold text-black mb-3">
              A note on realistic expectations
            </h2>
            <p className="text-base text-gray-600 leading-relaxed">
              No one can guarantee a #1 ranking — anyone who promises that is
              selling you something. What we can guarantee is the technical
              foundation done right, which is the part most sites get wrong from
              the start.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-3xl pb-24 text-center">
          <PrimaryButtonLink
            href="/pricing"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold"
          >
            See Plans
            <LuArrowRight className="w-4 h-4" />
          </PrimaryButtonLink>
        </section>
      </main>
      <Footer />
    </>
  );
}
