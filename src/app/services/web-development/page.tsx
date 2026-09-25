import { Metadata } from "next";
import {
  LuPhoneCall,
  LuMapPin,
  LuZap,
  LuShield,
  LuArrowRight,
} from "react-icons/lu";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PrimaryButtonLink } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Lumentify | Web Development",
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

const process = [
  [
    "1",
    "Discovery",
    "A short questionnaire and (optional) call to understand your services and area.",
  ],
  [
    "2",
    "Design",
    "You review the homepage direction before development continues.",
  ],
  [
    "3",
    "Build",
    "We develop the full site against the agreed scope in your SOW.",
  ],
  [
    "4",
    "Launch",
    "Final review, domain connection, and go-live — full ownership handover.",
  ],
];

export default function WebDevelopment() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen px-4">
        <section className="pt-32 pb-16 mx-auto max-w-3xl text-center">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-zinc-600 bg-zinc-100 px-4 py-1.5 rounded-full mb-5">
            Services / Web Development
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight mb-4">
            Websites built to get your phone ringing.
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Not a template with your logo on it — a site engineered around how
            trade customers actually behave in an emergency.
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
            <h2 className="text-lg font-bold text-black mb-4">How it works</h2>
            <ol className="space-y-4">
              {process.map(([n, title, text]) => (
                <li key={n} className="flex gap-4">
                  <span className="shrink-0 w-6 h-6 rounded-full bg-zinc-100 text-zinc-600 text-xs font-semibold flex items-center justify-center">
                    {n}
                  </span>
                  <div>
                    <p className="text-base font-semibold text-black">
                      {title}
                    </p>
                    <p className="text-base text-gray-600 leading-relaxed">
                      {text}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="mx-auto max-w-3xl pb-24 text-center">
          <PrimaryButtonLink
            href="/pricing"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold"
          >
            See Build Pricing
            <LuArrowRight className="w-4 h-4" />
          </PrimaryButtonLink>
        </section>
      </main>
      <Footer />
    </>
  );
}
