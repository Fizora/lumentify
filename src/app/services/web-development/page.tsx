import { Metadata } from "next";
import { LuPhoneCall, LuMapPin, LuZap, LuShield } from "react-icons/lu";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Web Development | Services | Lexentify",
  description:
    "High-performance web development engineered specifically for home-service contractors and trade businesses.",
};

const included = [
  {
    icon: LuPhoneCall,
    title: "Click-to-call built in",
    body: "A sticky mobile call button engineered for emergency customers to reach dispatch in one tap.",
  },
  {
    icon: LuMapPin,
    title: "Suburb-level pages",
    body: "Dedicated location pages structured to capture local search traffic in the suburbs you cover.",
  },
  {
    icon: LuZap,
    title: "Sub-second load times",
    body: "Clean, modern code and optimized assets so visitors don't bounce before the page even loads.",
  },
  {
    icon: LuShield,
    title: "Secure by default",
    body: "SSL, modern security headers, and hardened hosting configuration included on every build.",
  },
];

export default function WebDevelopment() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white text-zinc-900 border-b border-zinc-200">
        <div className="mx-auto max-w-7xl px-3 py-20 border-x border-zinc-200">
          {/* Header Section */}
          <section className="pt-32 pb-16 mx-auto max-w-3xl text-center px-3">
            <span className="inline-block text-xs font-medium tracking-widest uppercase text-zinc-600 bg-zinc-100 px-4 py-1.5 rounded-full mb-5">
              Services / Web Development
            </span>
            <h1 className="text-3xl md:text-4xl font-medium text-black leading-tight mb-4">
              Websites built to get your phone ringing.
            </h1>
            <p className="text-zinc-600 leading-relaxed text-sm md:text-base">
              Not a template with your logo on it — a site engineered around how
              trade customers actually behave in an emergency.
            </p>
          </section>

          {/* Features Grid (4 Cards) */}
          <section className="mx-auto max-w-4xl pb-12 px-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {included.map(({ icon: Icon, title, body }) => (
                <div
                  key={title}
                  className="border border-zinc-200 p-8 bg-zinc-50/50 "
                >
                  {Icon && <Icon className="w-5 h-5 text-zinc-800 mb-4" />}
                  <h3 className="text-sm font-semibold text-black mb-2">
                    {title}
                  </h3>
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    {body}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
